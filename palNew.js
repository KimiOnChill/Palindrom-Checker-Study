//define vars from html
const phrase = document.getElementById("text-input"); 
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

//iterating through string while comparing char on first index and on the last
//memory complexity is Const algorithmic - O(n)
function isPolindrome (str) {

  let start = 0;
  let end = str.length-1;

  while(start < end) {

    if (str[start].toLowerCase() !== str[start].toUpperCase()){
      start++;
    }

    if (str[end].toLowerCase() !== str[end].toUpperCase()){
      end--;
    }

    if (str[start].toLowerCase() === str[end].toLowerCase()){
      continue;
    }
    else { 
      return false;
    }
    
    start++;
    end--;
  }
  return true;
}

button.addEventListener("click", () => {
  if(phrase.value === ""){
    return alert("Please input a value")
  }

  result.innerHTML = `<span class="accent">${phrase.value}</span> is${isPolindrome(phrase.value) ? "" : " not"} a palindrome`;

  result.classList.remove('hide');
});