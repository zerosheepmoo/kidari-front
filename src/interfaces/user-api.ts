import { UserType } from "../consts/user-const";
import { MongoIDIncluding } from "./common-api";

export interface ResponseUserHasAT {
  acc?: string;
}

export interface UserBase {
  /**
   * email == user account id
   */
  email: string;

  /**
   * as nickname
   */
  name: string;

  type: UserType;

  phone: string;
}

export interface User extends MongoIDIncluding, UserBase, ResponseUserHasAT {}

export interface RequestPostSignInUser {
  email: string;
  password: string;
}
export interface RequestPostSignUpUser {
  name: string;
  type: UserType;
  email: string;
  password: string;
  phone?: string;
}

/**
 * NOTE for backend interface
 */
export interface StoreUserDoc extends User {
  password: string;
  tokenVersion: number;
}
