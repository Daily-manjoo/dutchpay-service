import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RecoilRoot } from "recoil";
import ExpenseMain from "./ExpenseMain";
import "@testing-library/jest-dom";
import { membersListState } from "../state/GroupMembers";

const renderComponent = () => {
  render(
    <RecoilRoot
      initializeState={(snap) => snap.set(membersListState, ["유리"])}
    >
      <ExpenseMain />
    </RecoilRoot>
  );

  const date = screen.getByLabelText(/결제한 날짜를 선택해 주세요/i);
  const desc = screen.getByPlaceholderText("마켓컬리");
  const amount = screen.getByPlaceholderText("금액 입력");
  const payer = screen.getByRole("combobox", { name: /누가 결제했나요/i });
  const addButton = screen.getByText("추가하기");

  return {
    date,
    desc,
    amount,
    payer,
    addButton,
  };
};

describe("비용 정산 메인 페이지", () => {
  describe("비용 추가 컴포넌트", () => {
    test("비용 추가 컴포넌트 렌더링", async () => {
      const { date, desc, amount, payer, addButton } = await renderComponent();
      expect(date).toBeInTheDocument();
      expect(desc).toBeInTheDocument();
      expect(amount).toBeInTheDocument();
      expect(payer).toBeInTheDocument();
      expect(addButton).toBeInTheDocument();
    });

    test('필수 입력 값을 쓰지 않고 "추가하기" 버튼 클릭 시 에러 메시지를 노출한다', async () => {
      const { addButton } = await renderComponent();

      expect(addButton).toBeInTheDocument();
      await userEvent.click(addButton);

      const descErrorMessage = screen.getByText(
        "비용에 대한 설명을 입력해 주세요."
      );
      expect(descErrorMessage).toBeInTheDocument();

      const payerErrorMessage = screen.getByText("결제자를 선택해 주세요.");
      expect(payerErrorMessage).toBeInTheDocument();

      const amountErrorMessage = screen.getByText("비용을 입력해 주세요.");
      expect(amountErrorMessage).toBeInTheDocument();
    });

    test('필수 입력 값을 쓴 뒤 "추가하기" 버튼 클릭 시 저장에 성공한다', async () => {
      const { desc, amount, payer, addButton } = await renderComponent();

      await userEvent.type(desc, "홈플러스");
      await userEvent.type(amount, "70000");
      await userEvent.selectOptions(payer, "유리");
      await userEvent.click(addButton);

      // 안전하게 errorMessage가 없는지 확인
      expect(
        screen.queryByText("비용에 대한 설명을 입력해 주세요.")
      ).toBeNull();
      expect(screen.queryByText("결제자를 선택해 주세요.")).toBeNull();
      expect(screen.queryByText("비용을 입력해 주세요.")).toBeNull();
    });
  });
});
