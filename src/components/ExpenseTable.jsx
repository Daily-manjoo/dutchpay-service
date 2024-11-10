import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { expensesState } from "../state/Expenses";
import OverlayWrapper from "./shared/OverlayWrapper";
import { groupNameState } from "../state/GroupName";

export default function ExpenseTable() {
  const expenses = useRecoilValue(expensesState);
  const groupName = useRecoilValue(groupNameState);

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
            </tr>
          </thead>
          <TableBody hasData={expenses.length > 0}>
            {expenses.map((expense, index) => (
              <TableRow key={index}>
                <TableCell>{expense.date}</TableCell>
                <TableCell>{expense.desc}</TableCell>
                <TableCell>{expense.payer}</TableCell>
                <TableCell>{expense.amount} 원</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </TableContainer>
    </OverlayWrapper>
  );
}

const TableContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  min-height: 50vh;

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
