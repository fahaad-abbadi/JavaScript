// set inital value to zero
let count = 0;


// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) 
{
  btn.addEventListener("click", function (e) 
  {
    const styles = e.currentTarget.classList;


    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    //this below part is crucial, it displays the JavaScript thing in the webpage
    value.textContent = count;
  });
});