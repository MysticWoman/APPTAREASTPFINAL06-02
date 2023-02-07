// Modal y validación del formulario:
const $openButton = document.querySelector("#open-modal")
const $containModal = document.querySelector(".contain-modal")
const $closeButton = document.querySelector("#close-modal")

const $form = document.querySelector(".form")
const $formErrors = document.querySelector("#formErrors")
const $title = document.querySelector("#title")
const $titleErrors = document.querySelector("#titleErrors")
const $state = document.querySelector("#state")
const $stateErrors = document.querySelector("#stateErrors");

$openButton.addEventListener("click", (event) => {
    event.preventDefault();
    $containModal.classList.add("show-modal")
})
$closeButton.addEventListener("click", (event) => {
    event.preventDefault();
    $containModal.classList.remove("show-modal")
})
$title.addEventListener("input", () => {
    console.log($title.value);
})

let errors = false

$form.addEventListener("submit", (e) => {


    if($title.value.length <= 5) {
        $titleErrors.innerText = "Minimum 5 characters required"
        $titleErrors.style.color = "white";
        $titleErrors.style.fontSize = "10px";
            errors = true
        } else {
            $titleErrors.innerText = ""
        }})
        console.log("Errors esta después de validar título", errors)
        console.log($state.value)

        if($state.value == "") { 
            $stateErrors.innerText = "A state is required"
            $stateErrors.style.color = "white";
            $stateErrors.style.fontSize = "10px";
            errors = true
        } else {
            $stateErrors.innerText = ""
        }

        if(errors) {
            console.log("wtf error de .....")
        }
    
