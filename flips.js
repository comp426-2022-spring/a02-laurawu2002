import { coinFlips, countFlips } from "./modules/coin.mjs";
import minimist from "minimist"

//Takes in the second argument from the command line
const args = minimist(process.argv.slice(2))
const num = args['number'];

//If no arguement, set the number to 1.
if (num == null) {
    let array = coinFlips(1);
    console.log(array);
    if (flip_result == [ 'tails' ]) {
        console.log("{ tails: 1 }");
    } else {
        console.log("{ heads: 1 }");
    }
}
else {
    //Makes an array of coinFlips;
    let array = coinFlips(num);
    console.log(array);
    //Counts the heads and tails in the array;
    console.log(countFlips(array));
}