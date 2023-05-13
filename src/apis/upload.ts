import { ResponseUserHasAT } from "../interfaces/user-api";
import { getHeaderOption, setATToLocalStorage } from "../utils/network";
import apiInstance from "./base";

interface ResponseUploadS3File extends ResponseUserHasAT {
  src: string;
  key: string;
}

export const uploadOneFileToS3 = async (formData: FormData, OID: string) => {
  const query = `v1/upload-s3/${OID}`;

  const ho = getHeaderOption();
  if (!ho) {
    return;
  }

  const uploaded = await apiInstance
    .post(query, { ...ho, body: formData })
    .json<ResponseUploadS3File>();

  setATToLocalStorage(uploaded);

  return uploaded;
};
