//Checks if email address is formatted correctly
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

//turn off css stylesheet if width will be less or equal 799
function toggleDesktopCSS() {
  let desktopCSS = document.getElementById('desktop-css');
  if (window.innerWidth <= 799) {
    // Disable the desktop CSS
    desktopCSS.disabled = true;
  } else {
    // Enable the desktop CSS
    desktopCSS.disabled = false;
  }
}
  // Add an event listener to toggle the desktop CSS on window resize
  window.addEventListener('resize', toggleDesktopCSS);

  // Call the function on page load to set the initial state
  window.addEventListener('load', toggleDesktopCSS);

var section1 = document.querySelector("#subscription");
var section2 = document.querySelector("#confirm");
let errorMessage = document.querySelector(".emailAddress")
let errorBox = document.querySelector(".myInput")

//To čo sa má stať po submit tlačítku
let myForm = document.querySelector(".thisForm")
myForm.addEventListener("submit", function(e){
    e.preventDefault();
    let enteredEmail = e.target.elements.emailAddress.value;
    let result = validateEmail(enteredEmail);

    if(result === null) {
        e.target.elements.emailAddress.value = "";

        //Styles
        errorMessage.textContent = "Valid email required"
        // errorMessage.style.color = "red";
        // errorBox.style.backgroundColor = "rgb(255, 126, 126, 0.25)";
        // errorBox.style.border = "1px solid rgb(255, 113, 113)";
        errorMessage.classList.add("redError")
        errorBox.classList.add("redError")
        
    } else {
      let emailReplace = document.querySelector(".replaceThis")
      emailReplace.textContent = enteredEmail;
      e.target.elements.emailAddress.value = "";
      section1.style.display = "none";
      section2.style.display = "block";
      errorMessage.classList.remove("redError")
      errorBox.classList.remove("redError")
    }
})

document.querySelector(".Dismiss").addEventListener("click", function(e){
      section1.style.display = "block";
      section2.style.display = "none";
})
