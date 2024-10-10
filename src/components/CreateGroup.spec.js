import { render, screen } from "@testing-library/react";
import CreateGroup from "./CreateGroup";
import { RecoilRoot } from "recoil";
import userEvent from "@testing-library/user-event";
import { waitFor } from "@testing-library/react";

/* 실패 테스트 케이스 작성*/

const renderComponent = () => {
  render(
    <RecoilRoot>
      <CreateGroup />
    </RecoilRoot>
  );

  const input = screen.getByPlaceholderText("2024 제주도 여행"); //screen 메소드: CreateGroup이 렌더링되는 화면
  const GroupNameSaveButton = screen.getByText("저장하고 다음 단계로"); //다시 필요한 부분
  const errorMessage = screen.queryByText("모임명을 입력해주세요.");

  return {
    input,
    GroupNameSaveButton,
    errorMessage,
  };
};

describe("모임 생성 페이지", () => {
  test("모임 이름 입력 컴포넌트가 렌더링 되는가", () => {
    const { input, GroupNameSaveButton } = renderComponent();

    expect(input).not.toBeNull();
    expect(GroupNameSaveButton).not.toBeNull();
  });
  test("모임 이름을 입력하지 않고 저장 버튼 클릭시 에러 메시지를 노출한다", async () => {
    const { GroupNameSaveButton } = renderComponent();

    await userEvent.click(GroupNameSaveButton);

    // 에러 메시지가 DOM에 나타날 때까지 기다림
    await waitFor(() => {
      const errorMessage = screen.queryByText("그룹명을 입력해주세요.");
      expect(errorMessage).not.toBeNull();
    });
  });

  test("모임 이름 입력 후 저장 버튼을 클릭시 저장이 되는가", async () => {
    const { input, GroupNameSaveButton } = renderComponent();

    // 입력 필드에 텍스트를 입력
    await userEvent.type(input, "2024 제주도 여행");
    await userEvent.click(GroupNameSaveButton);

    // 에러 메시지가 없어야 함
    const errorMessage = screen.queryByText("그룹명을 입력해주세요.");
    expect(errorMessage).toBeNull();
  });
});
