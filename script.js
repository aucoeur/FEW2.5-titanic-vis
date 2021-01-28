import data from './titanic-data.js'

// Get a reference to the #titanic
const titanic = document.querySelector('#titanic')

// Set some styles on the titanic
// display flex, justifyContent center, alignItems flex-end
titanic.style.display = 'grid'
titanic.style.gridTemplateColumns = 'repeat(20, 10px)'
titanic.style.gridGap = '1px'

// Map over the data and make a new element for each passenger
const passengers = data.map(p => {
  return document.createElement('div')
})

// Loop over each passenger and append them to the titanic
passengers.forEach(p => {
  titanic.appendChild(p)
})

// Let's loop over each passenger and set some styles
passengers.forEach((p, i) => {
  p.style.width = '10px'
  p.style.height = '10px'
  p.style.backgroundColor = '#000'
})

// Challenges -

// Make the squares a little bigger 15px by 15px.
// You'll need to change both the gridTemplateColumn on the
// titanic and the width and height of each passenger.
titanic.style.gridTemplateColumns = 'repeat(20, 25px)'
titanic.style.gridGap = '2px'

passengers.forEach((p, i) => {
  p.style.width = '25px'
  p.style.height = '25px'
})

// Change the number of columns on the titanic to 34
titanic.style.gridTemplateColumns = 'repeat(34, 25px)'

// Display each passenger as a circle if they are female.
// Do this by setting the borderRadius of each passenger.
// Match the passenger in passengers to the object data
// in the data array by the index.

passengers.forEach((p, i) => {
  p.style.boxSizing = 'border-box';
  p.style.borderRadius = data[i].fields.sex === 'male' ? '0' : '50%';
  // p.style.color = data[i].fields.sex === 'male' ? 'rgb(1, 36, 255)' : 'rgb(217, 66, 255)';
  // p.style.borderStyle = 'solid';
  // p.style.borderWidth = '2px';
})

// Display each passengers who did not survive as
// opacity 0.5.

passengers.forEach((p,i) => {
  p.style.opacity = data[i].fields.survived === 'No' ? 0.5 : 1;
})

// Set the backgroundColor of each passenger by their
// embarked value. There are three possible values:
// 'S', 'C', and 'Q'

passengers.forEach((p,i) => {
  switch (data[i].fields.embarked) {
    default:
      p.style.backgroundColor = 'rgb(219, 219, 219)';
    case 'S':
      p.style.backgroundColor = 'rgb(111, 136, 166)';
      break;
    case 'C':
      p.style.backgroundColor = 'rgb(189, 242, 124)';
      break;
    case 'Q':
      p.style.backgroundColor = 'rgb(242, 146, 104)';
      break;
  }
})
