function changeTheme(theme) {
    const stylesheet = document.getElementById('theme-stylesheet');
    stylesheet.href = theme + '.css';
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
  
    sections.forEach(section => {
      const squareContainer = document.createElement('div');
      squareContainer.className = 'square-container';
  
      for (let i = 0; i < 1000; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        square.style.background = 'grey';
        squareContainer.appendChild(square);
      }
  
      section.appendChild(squareContainer);
  
      let intervalIds = [];
  
      section.addEventListener('mouseover', () => {
        squareContainer.querySelectorAll('.square').forEach(square => {
          const intervalId = setInterval(() => {
            square.style.background = Math.random() < 0.5 ? 'red' : 'yellow';
          }, Math.random() * 1000);
          intervalIds.push(intervalId);
        });
      });
  
      section.addEventListener('mouseout', () => {
        intervalIds.forEach(id => clearInterval(id));
        intervalIds = [];
        squareContainer.querySelectorAll('.square').forEach(square => {
          square.style.background = 'grey';
        });
      });
    });
  });
  