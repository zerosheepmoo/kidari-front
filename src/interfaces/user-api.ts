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

  /**
   * career for GIVER, brief introduction for TAKER
   */
  introduction: string;

  account: string;
  /**
   * AI trained value
   */
  rating?: number;
}

export interface User extends MongoIDIncluding, UserBase, ResponseUserHasAT {}

export interface RequestPostSignInUser {
  email: string;
  password: string;
}
export interface RequestPostSignUpUser {
  email: string;
  password: string;
  name: string;
  type: UserType;
  phone: string;

  account?: string;
  introduction?: string;
}

/**
 * NOTE for backend interface
 */
export interface StoreUserDoc extends User {
  password: string;
  tokenVersion: number;
}
