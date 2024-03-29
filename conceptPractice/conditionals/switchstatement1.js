const select = document.querySelector('select');
const list = document.querySelector('ul');
const h1 = document.querySelector('h1');

select.addEventListener('change', () => {
  const choice = select.value;

  // ADD CONDITIONAL HERE
  /*Look at the selected month (stored in the choice variable. This will be the <select> element value after the value changes, so "January" for example.)
Set a variable called days to be equal to the number of days in the selected month. To do this you'll have to look up the number of days in each month of the year. You can ignore leap years for the purposes of this example.*/
//conditional statement example
  let days = '';
  if (choice ==="February"){
    days = 28;
  }else if(choice === "September" || choice ==="April" || choice ==="June"|| choice ==="November"){
    days = 30;
  }else{
    days = 31;
  }



  createCalendar(days, choice);
});

function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(31, 'January');