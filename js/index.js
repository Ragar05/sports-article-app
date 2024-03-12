import { sportsArticles } from "./data/articleSportsData.js";

(() => {
    const cardsContainer = document.getElementById("card-container");

    const createCardItem = ({
        name,
        price,
        description,
        img_url
    }) => {
        return `<div class="card" style="width: 18rem;">
        <img src="${img_url}" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${description}</p>
          <a href="#" class="btn btn-primary">Buy $ ${price}</a>
        </div>
      </div>`
    }

    sportsArticles.forEach((article) => {
        const item = createCardItem(article);
        cardsContainer.innerHTML += item;
    })
})()