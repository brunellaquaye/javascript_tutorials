//Practice all concepts learnt under strings here
//Use comment to explain what they are
/*In this exercise, we have the names of cities in the United Kingdom, but the capitalization is all messed up. We want you to change them so that they are all lowercase, except for a capital first letter. 
Change the value of the result variable to equal to the final result, not the city.*/

const list = document.querySelector('.output ul');
list.innerHTML = '';
const cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

for (const city of cities) {
  // write your code just below here
  //Convert the whole of the string contained in the city variable to lowercase and store it in a new variable.
const cityLower = city.toLowerCase();
//use array indexing("city[0]") to grab the first letter of the strings in city the .toUpperCase() to change to uppercase
const firstCity = city[0].toUpperCase();
//use string concatenation to join the results ti complete the word. Use .slice("1"){NB:has one parameter} to cut up the city from the second letter going so that word will not have two first letters.
const answer = firstCity+cityLower.slice(1);
  const result = answer;
  const listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}