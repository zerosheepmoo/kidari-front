import { EventProcess } from "../consts/event-const";
import { UserType } from "../consts/user-const";
import { MongoIDIncluding } from "./common-api";

export interface ResponseUserHasAT {
  acc?: string;
}

export interface EventBase {
  title: string;
  thumbnail: string;
  /**
   * stringified ? or just text?
   */
  content: string;
  peopleLimitNumber: number;
  /**
   * YYYY-MM-DD
   */
  deadline: string;
  /**
   * YYYY-MM-DD
   */
  holdingDate: string;

  /**
   * AI trained value
   */
  rating: number;

  process: EventProcess;
  registeredPeopleNumber: number;
}

export interface Event extends MongoIDIncluding, EventBase {
  userOID: string;
}

export interface RequestPostDraftEvent {
  title: string;
  thumbnail: string;
  content: string;
  peopleLimitNumber: string;
  deadline: string;
  holdingDate: string;
}

/**
 * NOTE oid in path param
 * @remarks
 * only valid for process === EventProcess.DRAFT
 */
export interface RequestEditDraftEvent {
  title?: string;
  thumbnail?: string;
  content?: string;
  peopleLimitNumber?: string;
  deadline?: string;
  holdingDate?: string;
}

/**
 * NOTE oid in path param
 * @remarks
 * only valid for process === EventProcess.WIP
 */
export interface RequestEditEvent {
  title?: string;
  thumbnail?: string;
  content?: string;
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
export interface EventDoc extends EventBase {
  userOID: string;
}
