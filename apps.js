

var arr = ["apple","mango","banana","xyz"]
document.write( "<select>"+ "<option>" + arr[0] + "<option>" + 

"<option>" + arr[1] + "<option>"+
"<option>" + arr[2] + "<option>"+
"<option>" + arr[3] + "<option>"+

"<select>")



Q



for ( i = 1;  i  <=10; i++ ){
    document.write(i + "" +"<br>")
}



Q



var userinput =+prompt( "enter your number to table")
var userlantgh =+prompt("enter your table lantgh")

for (var i = 1; i <=userlantgh; i++) {
    document.write(userinput + "X" + "=" + userinput * i + "<br>")
}


Q



console.log("A. Counting:");
for (let i = 1; i <= 10; i++) {
  document.write(i + "counting" +"<br>");

}

console.log("b. Reverse counting:");
for (let i = 10; i >= 1; i--) {
  document.write(i +" reverse" +"<hr>");
}


console.log("c. Even:");
for (let i = 0; i <= 20; i += 2) {
  document.write(i + " Even"+  "<hr>");
}


console.log("d. Odd:");
for (let i = 1; i <= 19; i += 2) {
  document.write(i + "odd"+ "<hr>");
}


console.log("e. Series:");
for (let i = 2; i <= 20; i += 2) {
  document.write(i + "k  series" +"<br>");
   }



Q


var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 1; i < fruits.length; i++) {
    document.write( "Elemant index"  +i+  +fruits[i] +"<br>");
}



Q




var A = ["cake", "apple pie", "cookie", "chips", "patties"];


function searchItem (item)

{
  
  var itemToSearch = item.toLowerCase();

  if (A.sami(itemToSearch)) {
    return true;
  } else {
    return false;
  }
}

var userInput = prompt("Enter an item to search:");


if (searchItem(userInput)) {
  alert(userInput + " is found in the list..........yas");
} else {
  alert(userInput + " is not  found in the list.");
}



Q






var arry = [24, 53, 78, 91, 12];

let max = arry[0];

for (let i = 1; i < arry. length; i++) {

  if (arry[i] > max) {
   
    max = arry[i];
  }
}

document.write("The largest number in the array is: " + max);


Q



var arry = [25,53,78,91,12]
var max = arry[0]

for (let i = 0; i < arry.langht; i++) {
  if(arry[i] > max) {
    max = arry[i]
  }
}
document.write( "smalest number " +     " "+max )   




Q



for( let i = 1; i <100; i++)
  if(i % 5 === 0){
    document.write([i+", "])
  }


Q



for (let i = 1; i < 10; i++) {
  document.write(i)
}




Q




for (let count = 0; count < 100; count++) {
  document.write(count)
}


Q



