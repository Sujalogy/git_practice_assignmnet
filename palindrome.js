// this is the palindrom check:-
 
let str="mam";
let check = "";

for (let i = str.length-1; i >= 0; i--){
    check = check + str[i];
}
 if (str == check) {
      console.log("Yes");
 } else {
      console.log("No");
 }