// if you want to import a module from shared/js then you can
// just do e.g. import Scatter from "shared/js/scatter.js"

const quotesAll = document.querySelectorAll('figure+h2+blockquote');
quotesAll.forEach((quoteEl) => {
  const mainEl = quoteEl.parentElement;
  const h2El = quoteEl.previousElementSibling;
  const figureEl = h2El.previousElementSibling;

  console.log('NEW GROUP');
  console.log(quoteEl, h2El, figureEl);

  let wrapperEl = document.createElement('div');
  wrapperEl.classList.add('sticky-wrapper');

  mainEl.insertBefore(wrapperEl, figureEl);

  wrapperEl.appendChild(figureEl);
  wrapperEl.appendChild(h2El);
  wrapperEl.appendChild(quoteEl);

})
