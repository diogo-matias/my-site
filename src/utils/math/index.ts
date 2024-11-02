type ClimbPropTypes = {
    min: {
        correspondingValue: number;
        minValue: number;
    };
    max: {
        correspondingValue: number;
        maxValue: number;
    };
    currentValue: number;
};

export function climb(props: ClimbPropTypes) {
    const { max, min, currentValue } = props;

    if (currentValue <= min.minValue) {
        return min.correspondingValue;
    }

    if (currentValue >= max.maxValue) {
        return max.correspondingValue;
    }

    const currentValueDif = currentValue - min.minValue;
    const controllerDif = max.maxValue - min.minValue;
    const currentValuePercentageDif = currentValueDif / controllerDif;
    const valueDif = max.correspondingValue - min.correspondingValue;

    return min.correspondingValue + valueDif * currentValuePercentageDif;
}
