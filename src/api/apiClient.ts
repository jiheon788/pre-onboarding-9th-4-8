import axios, {
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosError,
} from 'axios';

const HOST = '';

const apiClient = axios.create({
  baseURL: HOST,
});

const logOnDev = (
  message: string,
  log?: AxiosResponse | InternalAxiosRequestConfig | AxiosError,
) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(message, log);
  }
};

apiClient.interceptors.request.use((request) => {
  const { method, url } = request;

  logOnDev(`🚀 [${method?.toUpperCase()}] ${url} | Request`, request);

  return request;
});

apiClient.interceptors.response.use(
  (response) => {
    const { method, url } = response.config;
    const { status } = response;

    logOnDev(
      `✨ [${method?.toUpperCase()}] ${url} | Response ${status}`,
      response,
    );

    return response;
  },
  (error) => {
    const { message } = error;
    const { status, data } = error.response;
    const { method, url } = error.config;

    logOnDev(
      `🚨 [${method?.toUpperCase()}] ${url} | Error ${status} ${
        data?.message || ''
      } | ${message}`,
      error,
    );

    return Promise.reject(error);
  },
);

export default apiClient;
