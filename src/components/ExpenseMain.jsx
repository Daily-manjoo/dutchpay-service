import AddExpenseForm from "./AddExpenseForm";
import RightPannel from "./RightPannel";

export default function ExpenseMain() {
  return (
    <div>
      Expense Main Component
      <div>
        <AddExpenseForm></AddExpenseForm>
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
