import {flipACoin} from "./modules/coin.mjs";
import minimist from "minimist"

//Takes in the second argument from the command line
const args = minimist(process.argv.slice(2))
const call = args['call'];

if(call != "tail" && call != "heads") {
    console.log("Error: no input");
}
else {
    console.log(flipACoin(call));
}