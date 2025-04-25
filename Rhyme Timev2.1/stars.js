document.addEventListener('DOMContentLoaded', () => {
    const tilesContainer = document.querySelector('.star-tiles');
    const tiles = Array.from(tilesContainer.children);
    const targets = document.querySelectorAll('.star-target');
    const result = document.getElementById('result');
    const resetBtn = document.getElementById('resetBtn');
    let matchedCount = 0;
  
    // Add color classes to target stars
    targets.forEach(target => {
      const color = target.dataset.color;
      target.classList.add(color);
    });
  
    // Shuffle function
    function shuffleTiles() {
      const shuffled = [...tiles].sort(() => Math.random() - 0.5);
      shuffled.forEach(tile => tilesContainer.appendChild(tile));
    }
  
    // Reset game state
    function resetGame() {
      matchedCount = 0;
      result.textContent = '';
  
      // Reset targets
      targets.forEach(target => {
        target.classList.remove('matched');
        target.textContent = '☆';
      });
  
      // Reset tiles
      tiles.forEach(tile => {
        tile.style.visibility = 'visible';
      });
  
      shuffleTiles();
    }
  
    // Set up dragging
    tiles.forEach(tile => {
      tile.addEventListener('dragstart', e => {
        e.dataTransfer.setData('color', tile.dataset.color);
      });
    });
  
    // Set up dropping
    targets.forEach(target => {
      target.addEventListener('dragover', e => e.preventDefault());
      target.addEventListener('drop', e => {
        const draggedColor = e.dataTransfer.getData('color');
        const targetColor = target.dataset.color;
  
        if (draggedColor === targetColor && !target.classList.contains('matched')) {
          target.classList.add('matched');
          target.textContent = '★';
          const draggedTile = tiles.find(t => t.dataset.color === draggedColor);
          if (draggedTile) draggedTile.style.visibility = 'hidden';
  
          matchedCount++;
          if (matchedCount === targets.length) {
            result.textContent = 'Great job! All stars matched!';
          }
        }
      });
    });
  
    resetBtn.addEventListener('click', resetGame);
  
    // Initial shuffle
    shuffleTiles();
  });
  