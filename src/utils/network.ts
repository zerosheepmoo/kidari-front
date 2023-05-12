import { LOCAL_STORAGE_ACC_KEY } from "../consts/user-const";
import { ResponseUserHasAT } from "../interfaces/user-api";

export const getHeaderOption = () => {
  const acc = localStorage.getItem(LOCAL_STORAGE_ACC_KEY);
  if (!acc) {
    return false;
  }
  return {
    headers: {
      Authorization: `Bearer ${acc}`,
    },
    credentials: "include" as const,
  };
};

export const getOnlyCredentialIncludeHO = () => {
  return {
    credentials: "include" as const,
  };
};

export const setATToLocalStorage = (hasATObject: ResponseUserHasAT) => {
  if (!hasATObject.acc) return;
  localStorage.setItem(LOCAL_STORAGE_ACC_KEY, hasATObject.acc);
  console.log("access token refresh!");
};
