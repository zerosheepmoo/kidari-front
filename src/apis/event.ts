import apiInstance from "./base";
import { getHeaderOption, setATToLocalStorage } from "../utils/network";
import {
  Event,
  RequestEditDraftEvent,
  RequestEditEvent,
  RequestPostDraftEvent,
} from "../interfaces/event-api";
import { EventProcess } from "../consts/event-const";

/**
 * NOTE do filter in front plz
 */
export const getAllEvents = async () => {
  const query = `v1/events`;
  const body = await apiInstance.get(query).json<Event[]>();
  return body;
};
/**
 * NOTE do filter in front plz
 */
export const getEvents = async (userOID: string) => {
  const query = `v1/events/${userOID}`;
  const body = await apiInstance.get(query).json<Event[]>();
  return body;
};
/**
 * NOTE do filter in front plz
 */
export const getEventsRelated = async (userOID: string) => {
  const query = `v1/events/${userOID}/registered`;
  const body = await apiInstance.get(query).json<Event[]>();
  return body;
};

export const postEventDraft = async (data: RequestPostDraftEvent) => {
  const query = `v1/events`;
  const ho = getHeaderOption();
  if (!ho) return; // case that access token removed
  const body = await apiInstance
    .post(query, { ...ho, json: data })
    .json<Event>();
  setATToLocalStorage(body);
  return body;
};

export const patchEventDraft = async (
  eventOID: string,
  patching: RequestEditDraftEvent
) => {
  const query = `v1/events/${eventOID}?process=${EventProcess.DRAFT}`;
  const ho = getHeaderOption();
  if (!ho) return; // case that access token removed
  const body = await apiInstance
    .patch(query, { ...ho, json: patching })
    .json<Event>();
  setATToLocalStorage(body);
  return body;
};

export const publishEvent = async (eventOID: string) => {
  const query = `v1/events/${eventOID}?process=${EventProcess.DRAFT}`;
  const ho = getHeaderOption();
  if (!ho) return; // case that access token removed
  const body = await apiInstance
    .patch(query, { ...ho, json: { process: EventProcess.WIP } })
    .json<Event>();
  setATToLocalStorage(body);
  return body;
};

export const patchProceedingEvent = async (
  eventOID: string,
  patching: RequestEditEvent
) => {
  const query = `v1/events/${eventOID}?process=${EventProcess.WIP}`;
  const ho = getHeaderOption();
  if (!ho) return; // case that access token removed
  const body = await apiInstance
    .patch(query, { ...ho, json: patching })
    .json<Event>();
  setATToLocalStorage(body);
  return body;
};

export const deleteEvent = async (eventOID: string) => {
  const query = `v1/events/${eventOID}`;
  const ho = getHeaderOption();
  if (!ho) return; // case that access token removed
  const body = await apiInstance.delete(query, { ...ho }).json<Event>();
  setATToLocalStorage(body);
  return body;
};

// NOTE from HERE for TAKER

export const registerEvent = async (eventOID: string) => {
  const query = `v1/events/${eventOID}/register`;
  const ho = getHeaderOption();
  if (!ho) return; // case that access token removed
  const body = await apiInstance.post(query, { ...ho }).json<Event>();
  setATToLocalStorage(body);
  return body;
};

export const unregisterEvent = async (eventOID: string) => {
  const query = `v1/events/${eventOID}/unregister`;
  const ho = getHeaderOption();
  if (!ho) return; // case that access token removed
  const body = await apiInstance.post(query, { ...ho }).json<Event>();
  setATToLocalStorage(body);
  return body;
};
