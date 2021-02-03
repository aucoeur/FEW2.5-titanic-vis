import rawData from './titanic-data.js'
let data = [...rawData]

// Get a reference to the #titanic
const titanic = document.querySelector('#titanic');
// titanic.style.display = 'grid';
// titanic.style.gridTemplateColumns = 'repeat(20, 1fr)'
titanic.style.gridGap = '2px'

function renderPassengers(data) {
  // Janky
  const parent = document.getElementById("titanic");

  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }

  // Renders Passengers
  const passengers = data.map(p => {
    return document.createElement('div')
  })

  passengers.forEach((p, i) => {
    titanic.appendChild(p);
    p.classList.add('passenger');
    p.dataset.id = i;
    // p.style.width = '25px';
    // p.style.height = '25px';

    p.style.opacity = data[i].fields.survived === 'No' ? 0.5 : 1;
    p.style.borderRadius = data[i].fields.sex === 'male' ? '0' : '50%';

    switch (data[i].fields.embarked) {
      default:
        p.style.backgroundColor = 'rgb(219, 219, 219)';
      case 'S':
        p.style.backgroundColor = 'rgb(64, 111, 168)';
        break;
      case 'C':
        p.style.backgroundColor = 'rgb(189, 242, 124)';
        break;
      case 'Q':
        p.style.backgroundColor = 'rgb(242, 146, 104)';
        break;
    }
  })
  console.log('rendered')
}

renderPassengers(rawData);

// Event Delegation
const sortButtons = document.body.querySelector(".sort")

sortButtons.addEventListener('click', (event) => {
  // don't need switch if sortByProp
  data = [...rawData]
  event.target.id !== 'reset' ? sortByProperty(data, event.target.id) : null
  renderPassengers(data)

  // switch (event.target.id) {
  //   case 'sex':
  //     sortByProperty(data, 'sex');
  //     renderPassengers(data);
  //     break;
  //   case 'pclass':
  //     sortByProperty(data, 'pclass');
  //     renderPassengers(data);
  //     break;
  //   case 'embarked':
  //     sortByProperty(data, 'embarked');
  //     renderPassengers(data);
  //     break;
  //   case 'survived':
  //     sortByProperty(data, 'survived');
  //     renderPassengers(data);
  //     break;
  //   case 'reset':
  //     // sortByProperty(data);
  //     renderPassengers(rawData);
  //     break;
  //   default:
  //     console.log('default');
  // }
})

function sortByProperty(data, property) {
  return data
    .sort((a, b) => {
      if (a.fields[property] > b.fields[property]) {
        return -1
      } else if (a.fields[property] < b.fields[property]) {
        return 1
      }
      return 0
    })
}
