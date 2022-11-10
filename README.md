# Week 02 From Scratch: Goblin Fighter

## Project Planning

### HTML

`<section>` tags within `<main>`:

-   `.player-stats` with:
    -   span for .defeated-goblins
    -   span for .player-hp
    -   img#player-img
-   `.goblin-stats`
    -   form with:
        -   input for users to input a goblin-name
        -   button to submit user name
    -   empty `div` for goblins to display

### State (what I'm tracking)

-   How many goblins have been defeated
-   Player HP
-   Array of goblin HP
-   #currentId (in order to create new goblins with ids)

### Events

-   on Goblin click:

    -   User receives an alert based on randomness and possible HP change:
        -   You tried to hit {name} but missed (no change)
        -   {name} tried to hit you but missed (no change)
        -   You hit {name} (goblin--)
            -   When HP is 0, replace 😈 with 🔥
        -   {name} hit you (player--)

-   When HP is 0:
    -   Alert Game Over
    -   Rotate player emoji 90deg
-   User can challenge a new goblin by inputting a name and clicking a submit button. When submit button is clicked:
    -   make new goblin
    -   add new goblin object to goblin array
    -   update goblin list display

## Workflow

-   [x] Plan with README
-   [x] Build HTML, leaving .goblins empty
-   [x] Get DOM elements
-   [x] Plan goblin object in app.js (id)
-   [x] Render .goblins to page with JS
-   [x] displayGoblins()
-   [x] Add eventListener to newGoblin form and display new goblins
-   [x] Gamification

## Accessibility Additions

-   [x] Change rendered divs to buttons for keyboard accessibility

## CSS Goals

-   [x] Increase font size of elements in button
-   [] Align header to left of main container
-   [] Style form elements
-   [] Style player stats

## Attributions

forrestkeel92. [_Fighter Woman._](https://pixabay.com/vectors/fighter-warrior-woman-rpg-game-6692465/) Pixabay.
