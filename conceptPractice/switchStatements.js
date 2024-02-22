//There is a switch statement to begin with, and cases for the switch statement to run through.
//It will then select the case where there is an equality between the switch statement and the cases provided

/*const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
    choice = select.value;

    switch(choice){
        case "sunny":
            console.log("It is a sunny day");
        break;
        case "rainy":
            console.log("It is a rainy day");
        break;
        case "snowy":
            console.log("It will be snowing all day");
        break;
    }
}
*/
/*It should accept the choice variable as its input expression.
For each case, the choice should equal one of the possible <option> values that can be selected, that is, white, black, purple, yellow, or psychedelic.
For each case, the update() function should be run, and be passed two color values, the first one for the background color, and the second one for the text color. Remember that color values are strings, so they need to be wrapped in quotes.*/
const select = document.querySelector('select');
const html = document.querySelector('.output');

select.addEventListener('change', () => {
  const choice = select.value;

  // ADD SWITCH STATEMENT

  switch(choice){
    case "white":
        update("white","black");
        break;
    case "black":
        update("black","white");
        break;
    case "purple":
        update("purple","white");
        break;
    case "yellow":
        update("yellow","black");
        break;
    case "psychedelic":
        update("orange","blue");
        break;

    }
    }
  
);

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}


