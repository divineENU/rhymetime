// Fill the Well game logic
// Adds droplets to the well and counts them up to 10

document.addEventListener('DOMContentLoaded', () => {
  let count = 0;
  const addBtn = document.getElementById('add-droplet');
  const countEl = document.getElementById('count');
  const well = document.getElementById('well');
  const messageEl = document.getElementById('message');

  addBtn.addEventListener('click', () => {
    if (count < 10) {
      // Create a new droplet and position it at random within the well
      const drop = document.createElement('div');
      drop.classList.add('droplet');
      const maxLeft = well.clientWidth - 20; // droplet width = 20px
      drop.style.left = `${Math.random() * maxLeft}px`;
      drop.style.bottom = '0px';
      well.appendChild(drop);

      // Remove droplet after animation
      setTimeout(() => drop.remove(), 1500);

      // Update count
      count++;
      countEl.textContent = count;

      // When well is full
      if (count === 10) {
        messageEl.textContent = '🎉 You filled the well!';
        addBtn.disabled = true;
      }
    }
  });
});