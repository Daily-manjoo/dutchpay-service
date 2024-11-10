import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CreateGroup from "./components/CreateGroup.jsx";
import AddMembers from "./components/AddMembers.jsx";
import ExpenseMain from "./components/ExpenseMain.jsx";
import { RecoilRoot } from "recoil";
import { ROUTES } from "./Route.js";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Navigate to={ROUTES.CREATE_GROUP} />} />
          <Route path={ROUTES.CREATE_GROUP} element={<CreateGroup />} />
          <Route path={ROUTES.ADD_MEMBERS} element={<AddMembers />} />
          <Route path={ROUTES.EXPENSE_MAIN} element={<ExpenseMain />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
