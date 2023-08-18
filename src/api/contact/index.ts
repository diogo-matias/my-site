import Api from "../api";
import { PageViewType, SendMessageType } from "./types";

export class _ContactApi {
    api: Api;

    constructor() {
        this.api = new Api(process.env.REACT_APP_API_BASE_URL);
    }

    async sendMessage(payload: SendMessageType) {
        try {
            const response = (await this.api.post(`/contact`, payload)) as any;

            return response.data;
        } catch (err) {
            const error = err as Error;

            throw new Error(error.message);
        }
    }

    async sendPageViewMessage(payload: PageViewType) {
        try {
            const response = (await this.api.post(`/pageView`, payload)) as any;

            return response.data;
        } catch (err) {
            const error = err as Error;

            throw new Error(error.message);
        }
    }
}

export const ContactApi = new _ContactApi();
