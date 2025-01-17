'use strict';

// // Countries info app:
// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');
// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   // countriesContainer.style.opacity = 1;
// };

// ///////////////////////////////////////
// const getCountryAndNeighbour = function (country) {
//   const request = new XMLHttpRequest(); // Old style
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   // AJAX call country 1
// const renderCountry = function (data, className = '') {
//   const html = `
//   <article class="country ${className}">
//           <img class="country__img" src="${data.flags.png}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)} million people</p>
//             <p class="country__row"><span>🗣️</span>${
//               Object.values(data.languages)[0]
//             }</p>
//             <p class="country__row"><span>💰</span>${
//               Object.values(data.currencies)[0].name
//             }</p>
//           </div>
//         </article>
//         `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   // countriesContainer.style.opacity = 1;
// };

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

// console.log(`~~~ Chaining Promises ~~~`);

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
//     return response.json();
//   });
// };

// // Country 1
// const getCountryData = function (country) {
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       const neigh = data[0].borders?.[0];
//       if (!neigh) throw new Error('No neighbour found!');

//       // Country 2
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neigh}`,
//         'Country not found'
//       );
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err} ***`);
//       renderError(`Something went wrong ** ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// // getCountryData('portugasdfgdsl');

// console.log(` ---------------- Challenge 1 --------------------`);

// const whereAmI = function (lat, lng) {
//   fetch(
//     `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
//   )
//     .then(response => {
//       if (!response.ok) throw new Error(`N/D Error`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(`You are in ${data.city}, ${data.countryName}`);
//       btn.addEventListener('click', function () {
//         getCountryData(data.countryName);
//       });
//     })
//     .catch(err => console.error(`Something went wrong: ${err}`));
// };

// whereAmI(-33.933, 18.474);
// whereAmI(-10.933, 18.474);
// whereAmI(-90.933, 18.474);

// console.log('**** The Event Loop in Practice ****');

// console.log(`Test start!`);
// setTimeout(() => console.log(`0 sec timer`), 0);
// Promise.resolve(`resolved promise 1`).then(res => console.log(res));
// Promise.resolve(`resolved promise 2`).then(res => {
//   for (let i = 0; i < 10000000000000; i++) {}
//   console.log(res);
// });
// console.log(`Test end!`);

// console.log('**** Building a Simple Promise ****');

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log(`Lottery happening!....`);
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve(`You WIINN!!!!`);
//     } else {
//       reject(new Error(`You loose :( `));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// wait(1)
//   .then(() => {
//     console.log(`I waited for 1 seconds`);
//     return wait(1);
//   })
//   .then(() => {
//     console.log(`I waited for 2 seconds`);
//     return wait(1);
//   })
//   .then(() => {
//     console.log(`I waited for 3 seconds`);
//     return wait(1);
//   })
//   .then(() => console.log(`I waited for 4 second`));

// Promise.resolve(`abc`).then(x => console.log(x));
// Promise.reject(new Error(`problem`)).catch(x => console.error(x)));

// console.log('**** Promisifying the Geolocation API ****');

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then(pos => console.log(pos));

///////////////////////////////////////
// Coding Challenge #2

console.log(`### Coding Challenge #2 ####`);

const imgContainer = document.querySelector(`.images`);

let currentImg;

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.alt = 'Mountains';

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

createImage(`img/img-1.jpg`)
  .then(img => {
    currentImg = img;
    console.log('Img loaded!');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    console.log(`After 2 secs...`);
    return createImage(`img/img-2.jpg`);
  })
  .then(img => {
    currentImg = img;
    console.log('Img loaded!');
    return wait(2);
  })
  .catch(error => console.error(error));
