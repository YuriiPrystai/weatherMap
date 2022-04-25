import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  Method,
} from "axios";

import { BASE_URL, BODY_TYPE_JSON } from "../config/config";

export const sendRequest = async (
  method: Method,
  path: string,
  headers?: Record<string, any>,
) => {
  const config: AxiosRequestConfig = {
    method,
    headers: {},
    baseURL: BASE_URL,
    url: path,
  }

  config.headers = {
    ...config.headers,
    ...headers,
    'Content-Type': BODY_TYPE_JSON,
  }

  return new Promise<AxiosResponse>((resolve, reject) => {
    axios.request(config)
      .then((response: AxiosResponse) => {
        resolve(response);
      })
      .catch(reject)
  })
}
