import { atom } from "recoil";

export const memberNameState = atom({
  key: "memberNameState",
  default: "",
});

export const membersListState = atom({
  key: "membersListState",
  default: [],
});
