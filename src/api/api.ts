import axios from "axios";
import { type AxiosRequestConfig, type AxiosResponse, Axios } from "axios";

export default class Api {
    requestAxios: Axios;

    constructor(baseUrl: string, headers?: object) {
        this.requestAxios = axios.create({
            baseURL: baseUrl,
            headers: {
                "Content-Type": "application/json",
                ...headers,
            },
        });
    }

    get(
        url: string,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<unknown>> {
        return this.requestAxios.get(url, config);
    }

    put(
        url: string,
        data?: unknown,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<unknown>> {
        return this.requestAxios.put(url, data, config);
    }

    post(
        url: string,
        data?: unknown,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<unknown>> {
        return this.requestAxios.post(url, data, config);
    }

    patch(url: string, data?: unknown): Promise<AxiosResponse<unknown>> {
        return this.requestAxios.patch(url, data);
    }

    delete(url: string): Promise<AxiosResponse<unknown>> {
        return this.requestAxios.delete(url);
    }

    options(url: string): Promise<AxiosResponse<unknown>> {
        return this.requestAxios.options(url);
    }

    head(url: string): Promise<AxiosResponse<unknown>> {
        return this.requestAxios.head(url);
    }
}
