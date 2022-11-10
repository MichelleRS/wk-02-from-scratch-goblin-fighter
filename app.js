/* Imports */
import { renderGoblins } from './render-utils.js';

/* Get DOM Elements */
const goblinsListEl = document.querySelector('.goblins');
const formEl = document.querySelector('form');
const playerHPEl = document.querySelector('#player-hp');
const defeatedNumberEl = document.querySelector('#defeated-number');
const playerImg = document.querySelector('#player-img');
const inputEl = document.querySelector('#goblin-name');

/* State */
// create an array of objects for goblins
const goblins = [
    {
        id: 1,
        name: 'Mrs. Goblin',
        hp: 2,
    },
    {
        id: 2,
        name: 'Beau',
        hp: 5,
    },
    {
        id: 3,
        name: 'Stinky',
        hp: 1,
    },
];

// initialize game parameters
let currentId = 4;
let playerHP = 10;
let defeatedCount = 0;

/* Events */
// add event listener to form submit button
formEl.addEventListener('submit', (e) => {
    // prevent default behavior of form submit
    e.preventDefault();

    // disable button if playerHP is <= 0
    if (playerHP <= 0) return;

    // initialize variable to get key/value pairs of the form
    const data = new FormData(formEl);

    // create a newGoblin object
    const newGoblin = {
        id: currentId,
        name: data.get('goblin-name'),
        hp: Math.ceil(Math.random() * 5),
    };

    // increment goblin object id
    currentId++;

    // add rendered newGoblin to the goblins array
    goblins.push(newGoblin);

    displayGoblins();

    // clear text input on submit
    inputEl.value = '';
});

function goblinClickHandler(goblinData) {
    // disable game when goblin and player HP is <= 0
    if (goblinData.hp <= 0) return;
    if (playerHP <= 0) return;

    // give player 50% chance of hitting goblin
    if (Math.random() < 0.5) {
        goblinData.hp--;
        alert('You hit ' + goblinData.name);
    } else {
        alert('You tried to hit ' + goblinData.name + ' but missed.');
    }

    // give player 50% chance of getting hit by goblin
    if (Math.random() < 0.5) {
        playerHP--;
        alert(goblinData.name + ' hit you!');
    } else {
        alert(goblinData.name + ' tried to hit you but missed!');
    }

    // increment defeatedCount when goblinHP is 0
    if (goblinData.hp === 0) {
        defeatedCount++;
    }

    // game over parameters
    if (playerHP === 0) {
        playerImg.classList.add('game-over');
        alert('Game over');
    }

    // update DOM with new states for goblin, player, and defeated goblin
    playerHPEl.textContent = playerHP;
    defeatedNumberEl.textContent = defeatedCount;

    renderGoblins(goblinData);
    displayGoblins();
}

/* Display Functions */
function displayGoblins() {
    // remove text from input
    goblinsListEl.textContent = '';

    // set parameters for each item in the goblins array
    for (let goblin of goblins) {
        // create an html div element for key/value pairs
        const goblinEl = renderGoblins(goblin);
        // listen for a click on goblin emoji
        goblinEl.addEventListener('click', () => {
            goblinClickHandler(goblin);
        });
        // add rendered goblins to div
        goblinsListEl.append(goblinEl);
    }
}

displayGoblins();
