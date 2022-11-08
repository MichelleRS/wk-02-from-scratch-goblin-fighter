/* Imports */

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

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
