const label = document.getElementById ("#main_title")
// let main_title = document.createTextNode("title_input")
//  console.log("main_title")
button.addEventListener("keypressed", onchange)

function onchange(event){
    event.preventDefault();
    const inputElement = document.querySelector("#title_input")
    const userInput = inputElement.value
    alert(userInput)

}
 


const button = document.querySelector("#submit_button");

button.addEventListener("click", clickListner)

function clickListner(event){
    event.preventDefault();
    const titleElement = document.querySelector("#username")
    const titleInput = titleElement.value
    const nounElement = document.querySelector("#noun")
    const nounInput = nounElement.value
    const verbElement = document.querySelector("#verb")
    const verbInput = verbElement.value
    const adjectiveElement = document.querySelector("#adjective")
    const adjectiveInput = adjectiveElement.value
    if (titleInput === "" ||nounInput === "" ||verbInput === "" ||adjectiveInput === ""){
        alert("Please fill in all fields")
    };
}

