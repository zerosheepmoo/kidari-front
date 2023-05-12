/**
 * if the deadline and holding day are passed, then just remove from the list
 */
export enum EventProcess {
  /**
   * 저장은 했지만 날짜를 정해 배포하지 않는 경우
   */
  DRAFT = 1,
  /**
   * proceeding
   */
  WIP,
  /**
   * if the deadline passed or the participants full
   */
  DONE,
  /**
   * event is canceled
   */
  CANCEL,
}
