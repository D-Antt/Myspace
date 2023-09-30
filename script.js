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

  document.addEventListener('DOMContentLoaded', () => {
    fetch('https://medium.com/feed/@yourusername')
      .then(response => response.text())
      .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
      .then(data => {
        const latestPost = data.querySelectorAll("item")[0];
        const title = latestPost.querySelector("title").textContent;
        const link = latestPost.querySelector("link").textContent;
        const description = latestPost.querySelector("description").textContent;
        
        const blogHTML = `
          <h3><a href="${link}" target="_blank">${title}</a></h3>
          <p>${description}</p>
          <a href="${link}" target="_blank">Read More</a>
        `;
        
        document.getElementById('latestBlogPost').innerHTML = blogHTML;
      });
  });
   

  