// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(time) {

    const timeStart = Date.now();
    const fail = new Error('This time is too much !');

    return new Promise((resolve, reject) => {
        if (time > 500) {
            reject(fail);
        } else {
            setInterval(() => {
                const currentTime = Date.now();
                resolve(currentTime - timeStart);
            }, time);
        }

    });
}

export const asyncDelay = delay;
