// simle adding fn in ts
const add = (a: number, b: number): number => {
    return Number(a) + b;
}
console.log(add(process.env.PORT, 1));