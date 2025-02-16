//define vars from html
const phrase = document.getElementById("text-input"); 
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

const isPalindrome = () => {
  //to keep the initial look
  let str = phrase.value;
  let str1 = str;
  
  if(str === ""){
    return alert("Please input a value")
  }

  //every letter lowcase
  let low = str.toLowerCase();
  console.log(low);
  
  //regex to match all spaces
  let regex1 = /[)(\-/:;_.,\s]/g;
  //regex for non-alphanumeric characters
  let regex2 = /\w/g;

  //split each word and space into array    
  let arr = low.split(regex1);
  console.log(arr);
  
  //get rid of spaces
  let aarr = arr.filter((item) => regex2.test(item) == true);
  console.log(aarr);
  
  str = arr.join("");
  console.log(str);
  
  //reversing
  let revStr = str.split("").reverse().join("");
  console.log(revStr);
 
  result.innerHTML = `<span class="accent">${str1}</span> is${str === revStr ? "" : " not"} a palindrome`
};

button.addEventListener("click", isPalindrome);