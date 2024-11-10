import styled from "styled-components";
import AddExpenseForm from "./AddExpenseForm";
import { useRecoilValue } from "recoil";
import { groupNameState } from "../state/GroupName";
import ExpenseTable from "./ExpenseTable";
import SettlementSummary from "./SettlementSummary";

export default function ExpenseMain() {
  const groupName = useRecoilValue(groupNameState);

  return (
    <>
      <Container>
        <LeftPane>
          <h1>Dutch Pay</h1>
          <AddExpenseForm />
          <SettlementSummary />
        </LeftPane>
        <RightPane>
          <ExpenseTable>{groupName}</ExpenseTable>
        </RightPane>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #f9f9f9;
`;

const LeftPane = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #f4f0ff;

  h1 {
    letter-spacing: 10px;
    font-weight: 200;
    color: slateblue;
    text-align: center;
  }
`;

const RightPane = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #ffffff;
  border-left: 2px solid #e0e0e0;
  overflow-y: auto;
`;

const GroupName = styled.h1`
  font-size: 1.5rem;
  color: #7749f8;
  text-align: center;
  font-weight: bold;
`;
