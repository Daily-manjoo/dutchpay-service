import styled, { keyframes } from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { expensesState } from "../state/Expenses";
import OverlayWrapper from "./shared/OverlayWrapper";
import { groupNameState } from "../state/GroupName";

export default function ExpenseTable() {
  const [expenses, setExpenses] = useRecoilState(expensesState);
  const groupName = useRecoilValue(groupNameState);

  // 삭제 핸들러 함수
  const handleDelete = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  return (
    <OverlayWrapper>
      <TableContainer>
        <Title>{groupName} 영수증</Title>
        <StyledTable>
          <thead>
            <tr>
              <TableHeader>날짜</TableHeader>
              <TableHeader>내용</TableHeader>
              <TableHeader>결제자</TableHeader>
              <TableHeader>금액</TableHeader>
              <TableHeader></TableHeader>
            </tr>
          </thead>
          <TableBody hasData={expenses.length > 0}>
            {expenses.map((expense, index) => (
              <TableRow key={index}>
                <TableCell>{expense.date}</TableCell>
                <TableCell>{expense.desc}</TableCell>
                <TableCell>{expense.payer}</TableCell>
                <TableCell>{expense.amount} 원</TableCell>
                <TableCell>
                  <DeleteButton onClick={() => handleDelete(index)}>
                    X
                  </DeleteButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </TableContainer>
    </OverlayWrapper>
  );
}

// 애니메이션 정의
const slideUp = keyframes`
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const TableContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  border-radius: 12px 12px 0 0;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  min-height: 50vh;
  background-color: #f4f0ff;
  animation: ${slideUp} 1s ease-out forwards;
  clip-path: polygon(
    0% 0%,
    100% 0%,
    100% calc(100% - 10px),
    95% 100%,
    85% calc(100% - 10px),
    75% 100%,
    65% calc(100% - 10px),
    55% 100%,
    45% calc(100% - 10px),
    35% 100%,
    25% calc(100% - 10px),
    15% 100%,
    5% calc(100% - 10px),
    0% 100%
  );

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #7749f8;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  table-layout: auto;
  min-width: 600px;

  @media (max-width: 768px) {
    min-width: 100%;
    display: block;
    overflow-x: auto;
  }
`;

const TableHeader = styled.th`
  padding: 12px 8px;
  color: #7749f8;
  font-weight: bold;
  text-align: center;
  border-radius: 4px;

  @media (max-width: 768px) {
    padding: 10px 4px;
    font-size: 0.9rem;
  }
`;

const TableBody = styled.tbody`
  display: table-row-group;
  width: 100%;
`;

const TableRow = styled.tr`
  display: table-row;
  background-color: #fdfcff;

  &:nth-child(even) {
    background-color: #f3e8ff;
  }

  @media (max-width: 768px) {
    display: block;
    border-bottom: 1px solid #ddd;
  }
`;

const TableCell = styled.td`
  padding: 12px;
  color: #7749f8;
  text-align: center;
  border: 1px solid #ddd;

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 0.9rem;
  }
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: red;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    color: darkred;
  }
`;
