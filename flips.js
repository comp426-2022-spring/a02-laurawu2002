import { coinFlips, countFlips } from "./modules/coin.mjs";
import minimist from "minimist"

//Takes in the second argument from the command line
const args = minimist(process.argv.slice(2))
const num = args['number'];

if (num == null) {
    num = 1;
}
//Makes an array of coinFlips;
const array = coinFlips(num);
console.log(array);
//Counts the heads and tails in the array;
console.log(countFlips(array));
