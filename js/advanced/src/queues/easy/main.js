setTimeout(() => {
    console.log("1", "is the loneliest number");
}, 0);
setTimeout(() => {
    console.log("2", "can be as bad as one");
}, 10);

//2
Promise.resolve("hi").then(data => console.log("2", data));

//3
console.log("3", "is a crowd");

const promisify = (item, delay) => new Promise(resolve => setTimeout(() => resolve(item), delay));

const a = () => promisify("a", 100);
const b = () => promisify("b", 5000);
const c = () => promisify("c", 3000);

async function parallel() {
    const promises = [a(), b(), c()];
    const [output1, output2, output3] = await Promise.all(promises);
    return `prallel is done: ${output1} ${output2} ${output3}`;
}

async function race() {
    const promises = [a(), b(), c()];
    const output1 = await Promise.race(promises);
    return `race is done: ${output1}`;
}

async function sequence() {
    const output1 = await a();
    const output2 = await b();
    const output3 = await c();
    return `sequence is done ${output1} ${output2} ${output3}`;
}

sequence().then(console.log);
parallel().then(console.log);
race().then(console.log);
