// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
function article(object){
    const div = document.createElement('div');
    div.classList.add('card');
        const headline =  document.createElement('div');
        headline.classList.add('headline');
        headline.textContent = object.headline;
        div.appendChild(headline);
        const author = document.createElement('div');
        author.classList.add('author');
            const img_container = document.createElement('div');
            img_container.classList.add('img-container');
                const img = document.createElement('img');
                img.src = object.authorPhoto;
                img_container.appendChild(img);
            author.appendChild(img_container);
        div.appendChild(author);
        const span = document.createElement('span');
        span.textContent = `By ${object.authorName}`;
        div.appendChild(span);
    div.addEventListener('click', ()=>{
        console.log(headline.textContent);
    })
    return div;
}

axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(r => {
        r.data.articles.bootstrap.forEach(element => {
            const newCard = article(element);
            const container = document.querySelector('.cards-container')
            container.appendChild(newCard);
        });
        r.data.articles.javascript.forEach(element => {
            const newCard = article(element);
            const container = document.querySelector('.cards-container')
            container.appendChild(newCard);
        });
        r.data.articles.jquery.forEach(element => {
            const newCard = article(element);
            const container = document.querySelector('.cards-container')
            container.appendChild(newCard);
        });
        r.data.articles.node.forEach(element => {
            const newCard = article(element);
            const container = document.querySelector('.cards-container')
            container.appendChild(newCard);
        });
        r.data.articles.technology.forEach(element => {
            const newCard = article(element);
            const container = document.querySelector('.cards-container')
            container.appendChild(newCard);
        });
    })