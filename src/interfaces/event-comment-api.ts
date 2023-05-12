import { MongoIDIncluding } from "./common-api";

export interface EventCommentBase {
  name: string;
  /**
   * \n split string
   */
  content: string;
}

export interface EventComment extends MongoIDIncluding, EventCommentBase {
  userOID: string;
}

/**
 * NOTE for backend interface
 */
export interface EventCommentDoc extends EventCommentBase {
  userOID: string;
}
