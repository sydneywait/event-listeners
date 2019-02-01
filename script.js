// Create an input field in your DOM. Give it an id of message.
// Create two article elements with unique id values. Use Flexbox to display them in a row, each taking 50% of the width of the browser.
// Give each article a different border color.
// Write an event listener that listens for the keyup event on the input field.


document.querySelector("#message").addEventListener("keyup", function () {
    const printKeyup = document.querySelector("#message").value
    // console.log(printKeyup)

    document.querySelector("#article-one").textContent = printKeyup

    document.querySelector("#article-two").textContent = printKeyup

}
)
// The event handler function should update the textContent property of both sections.


//*******************Exercise 2******************//
// Add the correct string as the first argument to addEventListener()
// Write a function named flightHandlerFunction that will remove the disabled class on the corresponding <section id="flight"> (section, not button) and replace it with a class of enabled.


// document.querySelector("#activate-flight").addEventListener("click", function () {
//     document.querySelector("#flight").classList.replace("disabled", "enabled")
// })

// Once you have that working, write two more JavaScript functions, and two more querySelector().addEventListener() statements for handling the click event on the other two buttons. Those event handlers should perform the same step of removing disabled, and adding enabled on the corresponding <section> elements

// document.querySelector("#activate-mindreading").addEventListener("click", function(){
//     document.querySelector("#mindreading").classList.replace("disabled", "enabled")
// })



// document.querySelector("#activate-xray").addEventListener("click", function(){
//     document.querySelector("#xray").classList.replace("disabled", "enabled")
// })

// Once that is complete, add two more buttons

// Enable All Powers
// Disable All Powers
// Write two more event handlers for activating and deactivating all powers when the corresponding buttons are clicked. You will need to use the document.querySelectorAll() method for these.

// document.querySelector("#activate-all").addEventListener("click", function () {
//     const selectAll = document.querySelectorAll(".power")
//     selectAll.forEach(element => {
//         element.classList.replace("disabled", "enabled");

//     })
// })

// document.querySelector("#deactivate-all").addEventListener("click", function () {
//     const selectAllOff = document.querySelectorAll(".power")
//     selectAllOff.forEach(element => {
//         element.classList.replace("enabled", "disabled");

//     })
// })

// You may notice that your code to enable individual powers (not all at once) is very similar. To keep your code DRY, make one function that will handle activating a power depending on which button is clicked. (Hint: one way to get started is to use event.target.id.split("-")

document.querySelector("body").addEventListener("click", function () {
    //id.split splits the name of the id along the dash.  This gives an array of two items that can be used for logic tests.
    let clickTarget = event.target.id.split('-')
    console.log(clickTarget);
    //check to see if the target of the click references all powers
    if (clickTarget[1] === "all") {
        const selectAll = document.querySelectorAll(".power")
        //check to see if the target should activate
        if (clickTarget[0] === "activate") {
            selectAll.forEach(element => {
                element.classList.replace("disabled", "enabled");
            })
        //check to see if the target should deactivate
        } else {
            selectAll.forEach(element => {
                element.classList.replace("enabled", "disabled")
                })

            }  
    }
//Otherwise target the elements individually
    else {
            document.querySelector(`#${clickTarget[1]}`).classList.replace("disabled", "enabled")
        }
    }
)

const audrey = document.getElementById("audrey")

/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
    
*/

// document.querySelector("#audrey").style.width="widthVar";
window.addEventListener("scroll", function () {
    console.log("I'm scrolling")
    // Hint: you're allowed to use the .style property in this exercise, even though we generally advice against it becasue it applies inline styles to your DOM (rather than adding and removing classes)

    // Adjust the width of audrey to be 1/3 the value of `window.scrollY`. No lower than 50px, though.
    
    let widthVar = 0.33*window.scrollY;
    if(widthVar > 50){
        document.querySelector("#audrey").style.width = `${widthVar}px`;
    }
    else{
        document.querySelector("#audrey").style.width = "50px";
    }
    // Adjust the height of audrey to be 1/4 the value of `window.scrollY`. No lower than 100px, though.

    let heightVar = 0.25 * window.scrollY;
    if(heightVar > 100){
        document.querySelector("#audrey").style.height = `${heightVar}px`;
    }
    else{
        document.querySelector("#audrey").style.height = `100px`;
    }
    
  console.log(widthVar);
})


 




   

   