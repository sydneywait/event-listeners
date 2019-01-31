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



