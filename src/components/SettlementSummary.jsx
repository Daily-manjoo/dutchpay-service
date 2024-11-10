import { useRecoilValue } from "recoil";
import { expensesState } from "../state/Expenses";
import { membersListState } from "../state/GroupMembers";
import styled from "styled-components";

export const calculateMinimumTransaction = (
  expenses,
  members,
  amountPerPerson
) => {
  const minTransactions = [];
  if (amountPerPerson === 0) {
    return minTransactions;
  }

  // 1. 사람별로 냈어야 할 금액
  const membersToPay = {};
  members.forEach((member) => {
    membersToPay[member] = amountPerPerson;
  });

  // 2. 사람별로 냈어야 할 금액 업데이트

  expenses.forEach(({ payer, amount }) => {
    membersToPay[payer] -= amount;
  });

  // 3. 오름차순으로 소팅
  const sortedMembersToPay = Object.keys(membersToPay)
    .map((member) => ({
      member: member,
      amount: membersToPay[member],
    }))
    .sort((a, b) => a.amount - b.amount);

  var left = 0;
  var right = sortedMembersToPay.length - 1;
  while (left < right) {
    while (left < right && sortedMembersToPay[left].amount === 0) {
      left++;
    }
    while (left < right && sortedMembersToPay[right].amount === 0) {
      right--;
    }
    const toReceive = sortedMembersToPay[left];
    const toSend = sortedMembersToPay[right];
    const amountToReceive = Math.abs(toReceive.amount);
    const amountToSend = Math.abs(toSend.amount);

    if (amountToSend >= amountToReceive) {
      minTransactions.push({
        receiver: toReceive.member,
        sender: toSend.member,
        amount: amountToReceive,
      });
      toReceive.amount = 0;
      toSend.amount -= amountToReceive;
      left++;
    } else {
      minTransactions.push({
        receiver: toReceive.member,
        sender: toSend.member,
        mount: amountToSend,
      });
      toSend.amount = 0;
      toReceive.amount += amountToSend;
      right--;
    }
  }

  return minTransactions;
};

export default function SettlementSummary() {
  const expenses = useRecoilValue(expensesState);
  const members = useRecoilValue(membersListState);
  const totalExpenseAmount = expenses.reduce(
    (prevAmount, curExpense) => prevAmount + curExpense.amount,
    0
  );
  const groupMembersCount = members.length;
  const splitAmount = totalExpenseAmount / groupMembersCount;

  const minimumTransaction = calculateMinimumTransaction(
    expenses,
    members,
    splitAmount
  );
  return (
    <SummaryContainer>
      <Title>2. 정산은 이렇게!</Title>
      {totalExpenseAmount > 0 && groupMembersCount > 0 && (
        <>
          <SummaryText>
            {groupMembersCount} 명이서 총 {totalExpenseAmount.toLocaleString()}
            원 지출
          </SummaryText>
          <SummaryText>한 사람 당 {splitAmount.toLocaleString()}원</SummaryText>

          <TransactionList>
            {minimumTransaction.map(({ sender, receiver, amount }, index) => (
              <TransactionItem key={`transaction-${index}`}>
                <span>
                  {sender}가 {receiver}에게 {amount.toLocaleString()}원 보내기
                </span>
              </TransactionItem>
            ))}
          </TransactionList>
        </>
      )}
    </SummaryContainer>
  );
}

const SummaryContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 10px;
`;

const SummaryText = styled.p`
  font-size: 1rem;
  color: #333;
  margin: 5px 0;
`;

const TransactionList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  text-align: left;
  margin: 10px 0 0;
`;

const TransactionItem = styled.li`
  font-size: 1rem;
  color: #333;
  margin: 5px 0;
`;
