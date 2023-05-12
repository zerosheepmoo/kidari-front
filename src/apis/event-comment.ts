import apiInstance from "./base";
import { getHeaderOption, setATToLocalStorage } from "../utils/network";
import {
  EventComment,
  RequestPatchEventComment,
  RequestPostEventComment,
} from "../interfaces/event-comment-api";

export const getEventComments = async (eventOID: string) => {
  const query = `v1/event/${eventOID}/comments`;
  const body = await apiInstance.get(query).json<EventComment[]>();
  return body;
};

export const postEventComment = async (
  eventOID: string,
  creating: RequestPostEventComment
) => {
  const query = `v1/event/${eventOID}/comments`;
  const ho = getHeaderOption();
  if (!ho) return; // case that access token removed
  const body = await apiInstance
    .post(query, { ...ho, json: creating })
    .json<EventComment>();
  setATToLocalStorage(body);
  return body;
};

export const patchEventComment = async (
  eventOID: string,
  eventCommentOID: string,
  patching: RequestPatchEventComment
) => {
  const query = `v1/event/${eventOID}/comments/${eventCommentOID}`;
  const ho = getHeaderOption();
  if (!ho) return; // case that access token removed
  const body = await apiInstance
    .patch(query, { ...ho, json: patching })
    .json<EventComment>();
  setATToLocalStorage(body);
  return body;
};

export const deleteEventComment = async (
  eventOID: string,
  eventCommentOID: string
) => {
  const query = `v1/event/${eventOID}/comments/${eventCommentOID}`;
  const ho = getHeaderOption();
  if (!ho) return; // case that access token removed
  const body = await apiInstance.delete(query, { ...ho }).json<EventComment>();
  setATToLocalStorage(body);
  return body;
};
