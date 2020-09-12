// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const header = document.createElement('div');
    header.classList.add('header');
        const span = document.createElement('span');
        span.classList.add('date');
        span.textContent = 'MARCH 28, 2020';
        header.appendChild(span);
        const h1 = document.createElement('h1');
        h1.textContent = 'Lambda Times';
        header.appendChild(h1);
        const spantemp = document.createElement('span');
        spantemp.classList.add('temp');
        spantemp.textContent = '98°';
        header.appendChild(spantemp);
    return header;
}
const header_container = document.querySelector('.header-container');
const newHeader = Header();
header_container.appendChild(newHeader);