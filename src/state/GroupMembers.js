import { atom } from "recoil";

export const memberNameState = atom({
  key: "memberName",
  default: "",
});

export const memberErrorMessageState = atom({
  key: "memberErrorMessage",
  default: "",
});
