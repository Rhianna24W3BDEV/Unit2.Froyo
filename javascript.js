//create a promt upon opening the website to enter a list of comma-seperated froyo flavors//
const userInputFlavor = prompt(
    "Input flavors seperated by comma.",
    "vanilla, vanilla, vanilla, strawberry, coffee, coffee"
    );

//split userinputstring into a array of strings
const flavorArray = userInputFlavor.split(",");

//console log users input
console.log (userInputFlavor);

//A loop is used to iterate through the array of flavors
const flavor = ['vanilla', 'vanilla', 'vanilla', 'strawberry', 'coffee', 'coffee'];

function countFreq(flavor){
    const froyoObject = {};

    for (let i = 0; i < flavor.length; i++) {
        //if index i doesnt exsit in the object. create that property and give a value of 1
        if (froyoObject[flavor[i]] === undefined) {
            froyoObject[flavor[i]] = 1;
        } else {
            //if index i exsit increment the value of the property. 
            froyoObject[flavor[i]] += 1;
        }
    }
    // create a table listing how many flavors the user ordered
    console.table(froyoObject);
}
//This function will count how many flavors were entered
countFreq(flavor);
   







