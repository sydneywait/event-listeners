// Create an input field in your DOM. Give it an id of message.
// Create two article elements with unique id values. Use Flexbox to display them in a row, each taking 50% of the width of the browser.
// Give each article a different border color.
// Write an event listener that listens for the keyup event on the input field.


document.querySelector("#message").addEventListener("keyup", function(){
    const printKeyup = document.querySelector("#message").value
    // console.log(printKeyup)

    document.querySelector("#article-one").textContent=printKeyup

    document.querySelector("#article-two").textContent=printKeyup

}
)
// The event handler function should update the textContent property of both sections.


//*******************Exercise 2******************//

document.querySelector("#activate-flight").addEventListener("click", function(){
document.querySelector("#flight").classList.replace("disabled", "enabled")

})

document.querySelector("#activate-mindreading").addEventListener("click", function(){
    document.querySelector("#mindreading").classList.replace("disabled", "enabled")
})

document.querySelector("#activate-xray").addEventListener("click", function(){
    document.querySelector("#xray").classList.replace("disabled", "enabled")
})

document.querySelector("#activate-all").addEventListener("click", function(){
    document.querySelector("#mindreading").classList.replace("disabled", "enabled");
    document.querySelector("#xray").classList.replace("disabled", "enabled");
    document.querySelector("#flight").classList.replace("disabled", "enabled");

})

document.querySelector("#deactivate-all").addEventListener("click", function(){
    const selectAll =document.querySelectorAll(".power")
    selectAll.forEach(element => {
        element.classList.replace("enabled", "disabled");
        
    });
    
   

})

// document.querySelector("#deactivate-all").addEventListener() 





