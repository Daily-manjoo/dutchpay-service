import styled from "styled-components";
import OverlayWrapper from "./shared/OverlayWrapper";

export default function OverlayForm({
  title,
  description,
  label,
  placeholder,
  value,
  onChange,
  onSubmit,
  errorMessage,
  members = [],
  onDeleteMember,
  handleKeyDown,
}) {
  return (
    <Container>
      <OverlayWrapper>
        <GroupImgDiv />
        <SetGroupForm noValidate onSubmit={onSubmit}>
          <h2>{title}</h2>
          <p>{description}</p>
          <GroupLabel htmlFor="inputField">
            <p>{label}</p>
          </GroupLabel>
          <GroupNameInput
            type="text"
            required
            placeholder={placeholder}
            id="inputField"
            value={value}
            onChange={onChange}
            data-testid="input-member-names"
            onKeyDown={handleKeyDown}
          />
          {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
          <TagContainer>
            {members.map((member, index) => (
              <Tag key={index}>
                {member}
                <DeleteButton onClick={() => onDeleteMember(member)}>
                  X
                </DeleteButton>
              </Tag>
            ))}
          </TagContainer>
          <GroupNameSaveButton type="submit" aria-label="저장하고 다음 단계로">
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
  min-height: 90vh;
  background-color: #fff;
  filter: drop-shadow(8px 4px 4px rgba(0, 0, 0, 0.2));
  border-radius: 10px;
`;

const GroupImgDiv = styled.div`
  margin: 40px auto;
  width: 332px;
  height: 141px;
  background-image: url("/dutchpay.jpg");
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
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
    margin: 0 0 8px 0;
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

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-height: 150px; // 태그 표시 영역에 최대 높이 설정
  overflow-y: auto; // 태그가 넘치면 스크롤 가능하도록 설정
  margin-top: 10px;
  justify-content: center; // 태그를 가운데 정렬
  gap: 5px; // 태그 간 간격 추가
`;

const Tag = styled.span`
  background-color: #f0f0f0;
  color: #333;
  border-radius: 15px;
  padding: 5px 10px;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: red;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    color: darkred;
  }
`;

const GroupNameSaveButton = styled.button`
  background-color: #7749f8;
  margin-top: 15px;
  border: none;
  border-radius: 5px;
  color: white;

  &:hover {
    background-color: #7736ee;
    cursor: pointer;
  }
`;

const ErrorText = styled.p`
  margin-bottom: 0;
  color: red;
  font-size: 14px;
`;
