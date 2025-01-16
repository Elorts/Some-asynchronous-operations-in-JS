'use strict';

// Countries info app:
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

// ///////////////////////////////////////
// const getCountryAndNeighbour = function (country) {
//   const request = new XMLHttpRequest(); // Old style
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   // AJAX call country 1
const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} million people</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(data.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${
              Object.values(data.currencies)[0].name
            }</p>
          </div>
        </article>
        `;

  console.log(html);

  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     // Render country 1
//     renderCountry(data);

//     // Get neighbour country 2
//     const neighbour = data.borders?.[0];
//     if (!neighbour) return;

//     const request2 = new XMLHttpRequest();
//     const request = new XMLHttpRequest(); // Old style
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2, 'neighbour');

//       // Render country 2
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbour('Portugal');
// //getCountryAndNeighbour('Lithuania');

// console.log(`~~~ Promises~~~`);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => response.json())
//     .then(data => renderCountry(data[0]));
// };

// getCountryData('Portugal');

console.log(`~~~ Chaining Promises ~~~`);

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
    return response.json();
  });
};

// Country 1
const getCountryData = function (country) {
  // fetch(`https://restcountries.com/v3.1/name/${country}`)
  //   .then(response => {
  //     console.log(response);

  //     if (!response.ok) throw new Error(`Country not found ${response.status}`);
  //     return response.json();
  //   })
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neigh = data[0].borders?.[0];

      if (!neigh) throw new Error('No neighbour found!');

      // Country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neigh}`,
        'Country not found'
      );
      // fetch(`https://restcountries.com/v3.1/alpha/${neigh}`);
    })
    // .then(response => response.json())
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err} ***`);
      renderError(`Something went wrong ** ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('australia');
});

// getCountryData('portugasdfgdsl');
