import { MongoIDIncluding } from "./common-api";
import { ResponseUserHasAT } from "./user-api";

export interface EventCommentBase {
  name: string;
  /**
   * \n split string
   */
  content: string;
}

export interface EventComment
  extends MongoIDIncluding,
    EventCommentBase,
    ResponseUserHasAT {
  userOID: string;
}

export interface RequestPostEventComment {
  content: string;
}
export interface RequestPatchEventComment {
  content: string;
}

/**
 * NOTE for backend interface
 */
export interface EventCommentDoc extends EventCommentBase {
  userOID: string;
  eventOID: string;
}
