import { render, screen } from "@testing-library/react";
import CreateGroup from "./CreateGroup";

/* 실패 테스트 케이스 작성*/

const renderComponent = () => {
  render(<CreateGroup />);

  const input = screen.getByPlaceholderText("2024 제주도 여행"); //screen 메소드: CreateGroup이 렌더링되는 화면
  const saveButton = screen.getByText("저장"); //다시 필요한 부분
  const errorMessage = screen.queryByText("모임명을 입력해주세요.");

  return {
    input,
    saveButton,
    errorMessage,
  };
};

describe("모임 생성 페이지", () => {
  test("모임 이름 입력 컴포넌트가 렌더링 되는가", () => {
    const { input, saveButton } = renderComponent(); //필요한 컴포넌트 받아오기

    expect(input).not.toBeNull();
    expect(saveButton).not.toBeNull();
  });

  test("모임 이름을 입력하지 않고 저장 버튼 클릭시 에러 메시지를 노출한다", async () => {
    const { saveButton, errorMessage } = renderComponent();

    await userEvent.click(saveButton); //유저가 해당 버튼을 누른 것처럼 됨
    expect(errorMessage).not.toBeNull();
  });

  test("모임 이름 입력 후  저장 버튼을 클릭시 저장이 되는가", async () => {
    const { input, saveButton } = renderComponent();

    await userEvent.type(input, "2024 제주도 여행"); //타입 입력이 끝날 때까지 클릭이 일어나면 안되니까 비동기함수
    await userEvent.click(saveButton);

    expect(errorMessage).toBeNull();
  });
});
