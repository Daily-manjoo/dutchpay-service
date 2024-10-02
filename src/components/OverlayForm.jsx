import styled from "styled-components";
import OverlayWrapper from "./shared/OverlayWrapper";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { errorMessageState, groupNameState } from "../state/GroupName";

export default function OverlayForm({ children }) {
  const [groupName, setGroupName] = useRecoilState(groupNameState);
  const [errorMessage, setErrorMessage] = useRecoilState(errorMessageState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!groupName.trim()) {
      setErrorMessage("그룹명을 입력해주세요.");
    } else {
      setErrorMessage("");
    }
  };

  return (
    <Container>
      <OverlayWrapper>
        {children}
        <GroupImgDiv />
        <SetGroupForm noValidate onSubmit={handleSubmit}>
          <h2>모임 이름 정하기</h2>
          <p>먼저 더치페이 할 모임의 이름을 정해볼까요?</p>
          <GroupLabel htmlFor="groupName">
            <p>모임명</p>
          </GroupLabel>
          <GroupNameInput
            type="text"
            required
            placeholder="24년 부산 여행"
            id="groupName"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
          {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
          <GroupNameSaveButton
            type="submit"
            disabled={!groupName.trim()}
            aria-label="저장하고 다음 단계로"
          >
            <p>저장하고 다음 단계로</p>
          </GroupNameSaveButton>
        </SetGroupForm>
      </OverlayWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
  min-height: 100vh;
  background-color: beige;
  filter: drop-shadow(8px 4px 4px rgba(0, 0, 0, 0.2));
  border-radius: 10px;
`;

const GroupImgDiv = styled.div`
  margin: 40px;
  width: 332px;
  height: 141px;
  background-image: url("/dutchpay.jpg");
  background-size: cover;
  background-position: center;
`;

const SetGroupForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  background-color: white;

  h2 {
    margin: 0;
  }
`;

const GroupLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 240px;

  p {
    margin: 0 0 8 0px;
    font-weight: 800;
  }
`;

const GroupNameInput = styled.input`
  width: 210px;
  border: 1px solid black;
  flex-grow: 1;
  border-radius: 4px;
  padding: 4px;
`;

const GroupNameSaveButton = styled.button`
  background-color: #7749f8;
  margin-top: 15px;
  border: none;
  border-radius: 5px;
  color: white;
`;

const ErrorText = styled.p`
  margin-bottom: 0;
  color: red;
  font-size: 14px;
`;
