import ky from "ky";

const apiInstance = ky.extend({
  prefixUrl: import.meta.env["VITE_BACKEND_URL"] || "",
});

export default apiInstance;
