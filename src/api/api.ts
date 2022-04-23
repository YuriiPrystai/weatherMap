import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  Method,
} from "axios"

import { BASE_URL, BODY_TYPE_JSON } from "../config/config"

export const sendRequest = async (
  method: Method,
  path: string,
  body?: Record<string, any>,
  query?: Record<string, any>,
  headers?: Record<string, any>,
) => {
  const config: AxiosRequestConfig = {
    method,
    headers: {},
    data: {},
    params: {},
    baseURL: BASE_URL,
    url: path,
  }

  config.data = body || config.data;
  config.headers = {
    ...config.headers,
    ...headers,
    'Content-Type': BODY_TYPE_JSON,
  }
  config.params = { ...config.params, ...query }

  if (!Object.keys(config.data).length) delete config.data;
  if (!Object.keys(config.params).length) delete config.params;

  return new Promise<AxiosResponse>((resolve, reject) => {
    axios.request(config)
      .then((response: AxiosResponse) => {
        resolve(response);
      })
      .catch(reject)
  })
}
