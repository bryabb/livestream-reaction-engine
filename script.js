const stage = document.getElementById('stage');
const EMOJIS = ['❤️', '👍', '🔥', '⭐'];

function spawnReaction() {
  const el = document.createElement('div');
  el.className = 'reaction';
  el.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];

  el.style.left = (40 + Math.random() * 20) + '%';

  el.addEventListener('animationend', () => el.remove(), { once: true });

  stage.appendChild(el);
}

document.getElementById('send').addEventListener('click', spawnReaction);

document.getElementById('spam').addEventListener('click', () => {
  for (let i = 0; i < 60; i++) {
    setTimeout(spawnReaction, i * 50);
  }
});