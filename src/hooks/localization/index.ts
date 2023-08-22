type GeoLocalizationReturnType = {
    latitude?: number;
    longitude?: number;
};

export async function getLocalization(): Promise<GeoLocalizationReturnType> {
    return new Promise((resolve) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (value) => {
                    const { latitude, longitude } = value.coords;

                    return resolve({ latitude, longitude });
                },
                () => {
                    return resolve({
                        latitude: undefined,
                        longitude: undefined,
                    });
                }
            );
        } else {
            console.log("Error to get localization");

            return resolve({ latitude: undefined, longitude: undefined });
        }
    });
}
