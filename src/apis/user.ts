import apiInstance from "./base";
import { getHeaderOption, setATToLocalStorage } from "../utils/network";
import {
  RequestPatchMe,
  RequestPostSignInUser,
  RequestPostSignUpUser,
  User,
} from "../interfaces/user-api";

export const userSignIn = async (data: RequestPostSignInUser) => {
  const query = `v1/user/login`;
  const body = await apiInstance.post(query, { json: data }).json<User>();
  setATToLocalStorage(body);
  return body;
};

export const userSignUp = async (data: RequestPostSignUpUser) => {
  const query = `v1/user`;
  const body = await apiInstance.post(query, { json: data }).json<User>();
  setATToLocalStorage(body);
  return body;
};

export const userSignOut = async () => {
  const query = `v1/user/logout`;
  const ho = getHeaderOption();
  if (!ho) return;
  await apiInstance.post(query, ho).json();
  localStorage.setItem("acc", "");
  return;
};

export const patchMe = async (updating: RequestPatchMe) => {
  const query = `v1/user/me`;
  const ho = getHeaderOption();
  if (!ho) return;
  const body = await apiInstance
    .patch(query, { ...ho, json: updating })
    .json<User>();
  setATToLocalStorage(body);

  return body;
};

export const fetchMe = async () => {
  const query = `v1/user/me`;
  const ho = getHeaderOption();
  if (!ho) return;
  const body = await apiInstance.get(query, ho).json<User>();
  setATToLocalStorage(body);

  return body;
};
