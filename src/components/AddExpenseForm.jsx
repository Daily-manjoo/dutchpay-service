import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { membersListState } from "../state/GroupMembers";
import { expensesState } from "../state/Expenses";

export default function AddExpenseForm() {
  const today = new Date();
  const [date, setDate] = useState(
    [
      today.getFullYear(),
      String(today.getMonth() + 1).padStart(2, "0"),
      String(today.getDate()).padStart(2, "0"),
    ].join("-")
  );
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState(0);
  const [payer, setPayer] = useState(null);
  const [errors, setErrors] = useState({});
  const members = useRecoilValue(membersListState);

  const setExpense = useSetRecoilState(expensesState);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!desc) newErrors.desc = "비용에 대한 설명을 입력해 주세요.";
    if (!amount) newErrors.amount = "비용을 입력해 주세요.";
    if (!payer) newErrors.payer = "결제자를 선택해 주세요.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const newExpense = {
        date,
        desc,
        amount: Number(amount),
        payer,
      };

      setExpense((prevExpenses) => [...prevExpenses, newExpense]);

      setDesc("");
      setAmount(0);
      setPayer(null);
    } else {
      alert("다시 입력해주세요.");
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Title>1. 비용 추가하기</Title>
      <InputContainer>
        <Label htmlFor="expenseDate">결제한 날짜를 선택해 주세요</Label>
        <Input
          type="date"
          id="expenseDate"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </InputContainer>

      <InputContainer>
        <Label>비용에 대한 설명을 입력해 주세요</Label>
        <Input
          type="text"
          placeholder="마켓컬리"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        {errors.desc && <ErrorText>{errors.desc}</ErrorText>}
      </InputContainer>

      <Row>
        <InputContainer>
          <Label>비용은 얼마였나요?</Label>
          <Input
            type="number"
            placeholder="금액 입력"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value) || 0)}
          />
          {errors.amount && <ErrorText>{errors.amount}</ErrorText>}
        </InputContainer>

        <InputContainer>
          <Label htmlFor="payerSelect">누가 결제했나요?</Label>
          <Select
            value={payer}
            id="payerSelect"
            onChange={(e) => setPayer(e.target.value)}
          >
            <option value="">선택하세요</option>
            {members.map((member) => (
              <option key={member} value={member}>
                {member}
              </option>
            ))}
          </Select>
          {errors.payer && <ErrorText>{errors.payer}</ErrorText>}
        </InputContainer>
      </Row>

      <AddButton type="submit">추가하기</AddButton>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #7749f8;
  opacity: 0.8;
  padding: 20px;
  border-radius: 20px;
  width: 300px;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  color: white;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: white;
  margin-bottom: 5px;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 4px;
  border-radius: 8px;
  border: none;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 0.9rem;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 4px;
  border-radius: 8px;
  border: none;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 0.9rem;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  option {
    background-color: #7749f8;
    color: white;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;

const AddButton = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  background-color: #ff77a9;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #ff5b8c;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 0.8rem;
  margin-top: 5px;
  margin-bottom: 0;
`;
