import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import AddMembers from "./AddMembers";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

const renderComponent = () => {
  render(
    <RecoilRoot>
      <AddMembers />
    </RecoilRoot>
  );

  const input = screen.getByTestId("input-member-names");
  const AddMemberSaveButton = screen.getByText("저장하고 다음 단계로");

  return {
    input,
    AddMemberSaveButton,
  };
};

describe("멤버 추가 페이지", () => {
  test("멤버 이름 추가 컴포넌트가 렌더링 되는가", () => {
    const { input, AddMemberSaveButton } = renderComponent();

    expect(input).not.toBeNull();
    expect(AddMemberSaveButton).not.toBeNull();
  });
  test("멤버 이름을 입력하지 않고 저장 버튼 클릭시 에러 메시지를 노출한다", async () => {
    const { AddMemberSaveButton } = renderComponent();

    await userEvent.click(AddMemberSaveButton);

    const errorMessage = await screen.findByText("멤버 이름을 입력해주세요.");
    expect(errorMessage).toBeInTheDocument();
  });

  test("멤버 이름 입력 후 저장 버튼을 클릭시 저장이 되는가", async () => {
    const { input, AddMemberSaveButton } = renderComponent();

    await userEvent.type(input, "진수 유리 진수");
    await userEvent.click(AddMemberSaveButton);

    const errorMessage = screen.queryByText("멤버 이름을 입력해주세요.");
    expect(input).not.toBeNull();
    expect(AddMemberSaveButton).toBeInTheDocument();
  });
});
