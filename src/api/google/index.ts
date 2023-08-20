import Api from "../api";
import { GetLocalizationInfoPayloadType } from "./types";

export class _GoogleApi {
    api: Api;
    apiKey: string;

    constructor() {
        this.api = new Api("https://maps.googleapis.com");
        this.apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
    }

    async getLocalizationInfo(payload: GetLocalizationInfoPayloadType) {
        const { latitude, longitude } = payload;

        try {
            const response = (await this.api.get(
                `/maps/api/geocode/json?key=${this.apiKey}&latlng=${latitude},${longitude}`
            )) as any;

            return response.data.plus_code.compound_code;
        } catch (err) {
            const error = err as Error;

            throw new Error(error.message);
        }
    }
}

export const GoogleApi = new _GoogleApi();
