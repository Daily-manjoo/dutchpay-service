import { atom } from "recoil";

export const groupNameState = atom({
  key: "groupName",
  default: "",
});

export const errorMessageState = atom({
  key: "groupErrorMessage",
  default: "",
});
