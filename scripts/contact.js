// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
const resetUi = document.getElementById("submit-button");
// const contact = document.getElementsByClassName("contact");
const page = document.getElementById('contact-page');

resetUi.addEventListener('click', wipe);

function wipe() {
    page.innerHTML = 'Thank you for your message'
    
    
}

// function resetUi() {
//     submitBtn.style.visibility = 'hidden';
// }
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

