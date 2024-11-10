import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { memberNameState, membersListState } from "../state/GroupMembers";
import OverlayForm from "./OverlayForm";
import styled from "styled-components";
import { useState } from "react";
import { ROUTES } from "../Route";

export default function AddMembers() {
  const location = useLocation();
  const groupName = location.state?.groupName || "";
  const [memberName, setMemberName] = useRecoilState(memberNameState);
  const [members, setMembers] = useRecoilState(membersListState);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!memberName.trim()) {
      setErrorMessage("멤버 이름을 입력해주세요.");
      return;
    }
    if (members.includes(memberName)) {
      setErrorMessage("이미 추가된 멤버입니다.");
      return;
    }
    setMembers([...members, memberName]);
    setMemberName("");
    setErrorMessage("");
  };

  const handleButtonClick = () => {
    if (members.length > 0) {
      console.log(ROUTES);
      navigate(ROUTES.EXPENSE_MAIN);
    } else {
      setErrorMessage("최소 한 명 이상의 멤버를 추가해주세요.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const handleDeleteMember = (memberToDelete) => {
    setMembers(members.filter((member) => member !== memberToDelete));
  };

  return (
    <MainContainer>
      <h1>Dutch Pay</h1>
      <OverlayForm
        title={`${groupName} 멤버 이름 입력`}
        description="추가할 멤버의 이름을 적어주세요."
        label="멤버명"
        placeholder="두 글자씩 적어주세요."
        value={memberName}
        onChange={(e) => setMemberName(e.target.value)}
        onSubmit={handleSubmit}
        handleKeyDown={handleKeyDown}
        errorMessage={errorMessage}
        members={members}
        onDeleteMember={handleDeleteMember}
        onButtonClick={handleButtonClick}
        id="input-member-names"
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
