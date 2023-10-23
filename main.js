import './style.css'
import axios from 'axios'

axios.get("https://usman-fake-api.herokuapp.com/api/recipes")

function displayData(data) {
  const container = document.getElementById('app');

  data.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
      postElement.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.body}</p>
      `
      ;
      container.appendChild(postElement);
  });
}

displayData();