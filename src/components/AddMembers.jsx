import { useRecoilState } from "recoil";
import { memberNameState } from "../state/GroupMembers";
import OverlayForm from "./OverlayForm";
import styled from "styled-components";
import { useState } from "react";

export default function AddMembers() {
  const [memberName, setMemberName] = useRecoilState(memberNameState);
  const [members, setMembers] = useState([]);
  const [errorMessage, setErrorMessage] = useState(""); // 에러 메시지 관리

  // 엔터 입력 시 멤버 추가 처리
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!memberName.trim()) {
      setErrorMessage("멤버 이름을 입력해주세요.");
    } else {
      setErrorMessage("");
      // 멤버가 이미 추가되었는지 확인 후 추가
      if (!members.includes(memberName)) {
        setMembers([...members, memberName]); // 멤버 배열에 추가
        setMemberName(""); // 입력 필드 초기화
      } else {
        setErrorMessage("이미 추가된 멤버입니다.");
      }
    }
  };

  const handleDeleteMember = (memberToDelete) => {
    setMembers(members.filter((member) => member !== memberToDelete));
  };

  return (
    <MainContainer>
      <h1>Dutch Pay</h1>
      <OverlayForm
        title="멤버 이름 입력"
        description="추가할 멤버의 이름을 적어주세요."
        label="멤버명"
        placeholder="두 글자씩 적어주세요."
        value={memberName}
        onChange={(e) => setMemberName(e.target.value)}
        onSubmit={handleSubmit}
        errorMessage={errorMessage}
        members={members} // 멤버 목록을 OverlayForm에 전달
        onDeleteMember={handleDeleteMember}
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
