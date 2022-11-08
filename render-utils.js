export function renderGoblins(goblinData) {
    const goblinEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const emojiEl = document.createElement('p');
    const hpEl = document.createElement('p');

    goblinEl.classList.add('goblin');

    // name
    nameEl.textContent = goblinData.name;

    // emoji
    emojiEl.id = `goblin-face-${goblinData.id}`;
    emojiEl.textContent = goblinData.hp > 0 ? '😈' : '💀';

    // hp
    hpEl.id = `goblin-hp-${goblinData.id}`;
    hpEl.textContent = goblinData.hp < 0 ? 0 : goblinData.hp;

    if (goblinData.hp < 0) {
        goblinEl.classList.add('defeated');
    }

    goblinEl.append(nameEl, emojiEl, hpEl);

    return goblinEl;
}
