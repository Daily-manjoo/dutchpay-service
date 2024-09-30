import LeftPannel from "./LeftPannel";
import RightPannel from "./RightPannel";

export default function ExpenseMain() {
  return (
    <div>
      Expense Main Component
      <div>
        <LeftPannel>
          {/*TODO: 비용추가 폼*/}
          {/*TODO: 정산 결과 렌더링*/}
        </LeftPannel>
      </div>
      <div>
        <RightPannel>
          {/*TODO:그룹명 헤더**/}
          {/*TODO:지출내역 렌더링**/}
        </RightPannel>
      </div>
    </div>
  );
}
