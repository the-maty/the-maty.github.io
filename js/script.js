document.querySelector("#kontakt-form").addEventListener("submit", function(event){
// vypnuti výchoziho chovani formulare
event.preventDefault()

// nacteni hodnot z policek
let Name = event.target.elements.Name.value
let email = event.target.elements.email.value
let Tel = event.target.elements.Tel.value

// vytvoreni odstavce a pridani do nej text z policka
let paragraph = document.createElement("p")
paragraph.innerHTML = `Jméno: ${Name}, <br>
Email: ${email}, <br> Telefon: ${Tel}`
document.querySelector("#form-output").appendChild(paragraph)
    
// vymazani obsahu z policek po odeslani
event.target.elements.Name.value = ""
event.target.elements.email.value = ""
event.target.elements.Tel.value = ""
})