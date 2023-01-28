document.querySelector("#kontakt-form").addEventListener("submit", function(event){
// vypneme výchozí chování formuláře
event.preventDefault()
// načtení hodnot z políček
let Name = event.target.elements.Name.value
let email = event.target.elements.email.value
let Tel = event.target.elements.Tel.value
// vytvoříme odstavec a přidáme do něj text z políčka
let paragraph = document.createElement("p")

paragraph.innerHTML = `Jméno: ${Name}, <br>
Email: ${email}, <br> Telefon: ${Tel}`
document.querySelector("#from-form").appendChild(paragraph)
// po odeslání vymažeme obsah políček
event.target.elements.Name.value = ""
event.target.elements.email.value = ""
event.target.elements.Tel.value = ""
})