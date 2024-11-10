import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { groupNameState, errorMessageState } from "../state/GroupName";
import OverlayForm from "./OverlayForm";
import styled from "styled-components";

export default function CreateGroup() {
  const [groupName, setGroupName] = useRecoilState(groupNameState);
  const [errorMessage, setErrorMessage] = useRecoilState(errorMessageState);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!groupName.trim()) {
      setErrorMessage("그룹명을 입력해주세요.");
    } else {
      setErrorMessage("");
      navigate("/members", { state: { groupName } });
    }
  };

  return (
    <MainContainer>
      <h1>Dutch Pay</h1>
      <OverlayForm
        title="그룹 이름 정하기"
        description="모임의 이름을 정해볼까요?"
        label="그룹명"
        placeholder="2024 제주도 여행"
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
        onSubmit={handleSubmit}
        errorMessage={errorMessage}
      />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    letter-spacing: 10px;
    font-weight: 200;
    color: slateblue;
    text-align: center;
  }
`;
