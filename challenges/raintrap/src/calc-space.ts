const calculateMaxSpaceToFillWater = (arrHeights: number[]): number => {
    const arrHeightsLength = arrHeights.length;

    guard(arrHeightsLength, arrHeights);

    let maxSpaceToFill = 0;

    console.log(`Space to Fill - Start: ${maxSpaceToFill}`);
    console.log(`First Left Position Value: ${arrHeights[0]}`);
    console.log(`First Right Position Value: ${arrHeights[arrHeightsLength - 1]}`);

    for (let index = 1; index < arrHeightsLength - 1; index++) {
        let leftMaxValue = arrHeights[index];

        console.log(`Left Check for ${leftMaxValue}`);

        for (let next = 0; next < index; next++) {
            const left = leftMaxValue;
            leftMaxValue = maxValue(leftMaxValue, arrHeights[next]);
            console.log(
                `Max Value between [Left Value:${left}, Next near value: ${arrHeights[next]}] => value: ${leftMaxValue}`,
            );
        }

        let rightMaxValue = arrHeights[index];
        console.log(`Right Check for ${rightMaxValue}`);

        for (let next = index + 1; next < arrHeightsLength; next++) {
            const right = rightMaxValue;
            rightMaxValue = maxValue(rightMaxValue, arrHeights[next]);
            console.log(
                `Max Value between [Right Value:${right}, Next near value: ${arrHeights[next]}] => value: ${rightMaxValue}`,
            );
        }

        console.log(`Space to Fill - Before: ${maxSpaceToFill}`);
        maxSpaceToFill += Math.min(leftMaxValue, rightMaxValue) - arrHeights[index];
        console.log(
            `Space to Fill - After. Min value between (Left Max Value: ${leftMaxValue}, Right Max Value: ${rightMaxValue}) - index value ${arrHeights[index]}}`,
        );
        console.log(`Space to Fill - After: ${maxSpaceToFill}`);
    }

    return maxSpaceToFill;
};

//Pure functions
const maxValue = (oldValue: number, newValue: number): number => {
    return Math.max(oldValue, newValue);
};

function guard(arrHeightsLength: number, arrHeights: number[]) {
    if (arrHeights.length === 0) throw new Error('You should not provide an empty valid');

    // 0 <= n <= 2 * 10 exp 4
    if (arrHeightsLength < 0 || arrHeightsLength > 3 * Math.pow(10, 4))
        throw new Error(`Length for array ${arrHeightsLength} is not valid`);

    console.log(`Array length [${arrHeights}]: ${arrHeightsLength}`);

    // 0 <= height[i] <= 10 exp. 5
    arrHeights.forEach((e) => {
        if (e < 0 || e > Math.pow(10, 5)) throw new Error(`Value ${e} in array is not valid`);
    });
}

export default calculateMaxSpaceToFillWater;
