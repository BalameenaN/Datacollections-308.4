//PART1-Refactoring Old Code
/*let str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

//let cell=[cell1, cell2, cell3, cell4];
let cell = "";

for (let i = 0; i < str.length; i++) {

    if (str[i] !== "\n") {

        cell += str[i];
    }

    else {
        console.log(cell);
        cell = "";
    }

}
console.log(cell);// includes the last line

//PART2-Expanding Functionality----------------------------------------
let str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let strToArray = [];

strToArray = str.split("\n");
console.log(strToArray);
length = strToArray.length;
let newHeading = [];
let newArray = [];
for (i = 0; i < length; i++) {
    newHeading = strToArray[i].split(",");
    console.log(newHeading);
    newArray.push(newHeading);

}

console.log(newArray);*/

//PART3-Transforming Data----------------------------------------

let array = [["ID", "Name", "Occupation", "Age"],
["42", "Bruce", "Knight", "41"],
["57", "Bob", "Fry Cook", "19"],
["63", "Blaine", "Quiz Master", "58"],
["98", "Bill", "Doctor’s Assistant", "26"]]

let finalArray = [];

for (let i = 1; i < array.length; i++) {
  let tempObj = {};
  for (let j = 0; j < array[i].length; j++) {
    tempObj[array[0][j]] = array[i][j];
  }
  finalArray.push(tempObj);
}
console.log(finalArray);
//converting the key to lowercase
let convertedArray = finalArray.map(obj => {
  const newObj = {};
  for (const key in obj) {
    const lowerKey = key.toLowerCase();
    newObj[lowerKey] = obj[key];
  }
  return newObj;
})

console.log(convertedArray);

//PART4-Sorting and Manipulating Data-----------------

let newArray = [];
for (let i = 0; i < convertedArray.length; i++) {
  newArray.push(convertedArray[i]);
}

newArray.pop(); // removing last element from array object

//adding new object into array
let obj1 = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
newArray.splice(1, 0, obj1);
//console.log(newArray);

//adding element to the end of the array
let obj2 = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
newArray.push(obj2);
console.log(newArray);

//average age
let sum = 0;
for (let i = 0; i < newArray.length; i++) {

  let num = Number(newArray[i].age);
  //console.log(num);
  sum += num;

}
console.log(`sum of age: ${sum}`);


//PART5-Full Circle----------------------------------------

let newString = [];

for (let i = 0; i < newArray.length; i++) {
  newString.push(newArray[i]);
}

console.log(Object.keys(newString[0]).join(","));
for (val of newString){
  console.log(Object.values(val).join(","));
}





