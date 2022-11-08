/* Imports */
import { renderGoblins } from './render-utils.js';

/* Get DOM Elements */
const goblinsListEl = document.querySelector('.goblins');
const formEl = document.querySelector('form');
const playerHPEl = document.querySelector('#player-hp');
const defeatedNumberEl = document.querySelector('#defeated-number');
const playerImg = document.querySelector('#player-img');

/* State */
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
        hp: 3,
    },
];

let currentId = 4;
let playerHP = 10;
let defeatedCount = 0;

/* Events */
formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(formEl);

    const newGoblin = {
        id: currentId,
        name: data.get('goblin-name'),
        hp: Math.ceil(Math.random() * 5),
    };

    currentId++;

    goblins.push(newGoblin);

    displayGoblins();
});

function goblinClickHandler(goblinData) {
    if (goblinData.hp <= 0) return;

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
}

/* Display Functions */
function displayGoblins() {
    goblinsListEl.textContent = '';

    for (let goblin of goblins) {
        const goblinEl = renderGoblins(goblin);
        goblinEl.addEventListener('click', () => {
            goblinClickHandler(goblin);
        });
        goblinsListEl.append(goblinEl);
    }
}

displayGoblins();

// (don't forget to call any display functions you want to run on page load!)
