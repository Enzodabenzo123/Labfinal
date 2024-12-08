/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
// let rate = 20;
let rate = 0


const bookPage = document.querySelector(".booking-page");
const days = document.querySelectorAll(".blue-hover");
const cost = document.getElementById("calculated-cost");
const half = document.getElementById("half")
const full = document.getElementById("full")
const clear = document.getElementById("clear-button")

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
bookPage.addEventListener('click', (e) => {
    if (e.target.classList.contains('blue-hover')) {
        e.target.classList.toggle('clicked');
        
    }
    updateCost()
    // updateCost();
});

function updateCost() {
    // cost.innerHTML = 0
    const selectedDays = document.querySelectorAll('.blue-hover.clicked')
    const daysCount = selectedDays.length;
    cost.innerHTML = daysCount * rate;
}
/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
// half.addEventListener('click', halfrate);
full.onclick = () => {
    half.classList.remove("clicked");
    full.classList.add("clicked");
    full.style.backgroundColor = ' #E5AF42'
    half.style.backgroundColor = ' white'
    rate = 35
}

half.onclick = () => {
    full.classList.remove("clicked");
    half.classList.add("clicked");
    half.style.backgroundColor = ' #E5AF42'
    full.style.backgroundColor = ' white'
    rate = 20
}

clear.addEventListener('click',clearlist);

function clearlist() {
    rate = 0
    cost.innerHTML = 0

}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.




// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


