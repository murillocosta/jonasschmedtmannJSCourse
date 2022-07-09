'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// https://restcountries.com/v2/

// old school way

const renderCountry = function (data, className = '') {
  //COUNTRY PROPERTIES
  const flag = data.flags.svg || data.flags.png;
  const countryName = data.name.common;
  const region = data.region;
  const population = (data.population / 1000000).toFixed(2);
  const language = Object.values(data.languages)[0];
  const currency = Object.values(data.currencies)[0].name;
  //HTML
  const html = `
        <article class="country ${className}">
          <img class="country__img" src="${flag}" />
          <div class="country__data">
            <h3 class="country__name">${countryName}</h3>
            <h4 class="country__region">${region}</h4>
            <p class="country__row"><span>👫</span>${population}M people</p>
            <p class="country__row"><span>🗣️</span>${language}</p>
            <p class="country__row"><span>💰</span>${currency}</p>
          </div>
        </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

// const getCountryDataAndNeighbour = function (country) {
//   //ajax call 1 for main country:
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     //NOTE:responseText is actually string in JSON format.Converting js object:
//     const [data] = JSON.parse(this.responseText);

//     //render country:
//     renderCountry(data);

//     //get neighbours:
//     const neighbours = data.borders;
//     if (!neighbours) return;
//     //ajax call 2 for neighbours:
//     neighbours.forEach(neighbour => {
//       let request2 = new XMLHttpRequest();
//       request2.open(
//         'GET',
//         `https://restcountries.com/v3.1/alpha/${neighbour}
//         `
//       );
//       request2.send();
//       request2.addEventListener('load', function () {
//         const [data2] = JSON.parse(this.responseText);

//         //render country:
//         renderCountry(data2, 'neighbour');
//       });
//     });
//   });
// };

// getCountryDataAndNeighbour('usa');

// setTimeout(() => {
//   console.log('1 sec');
//   setTimeout(() => {
//     console.log('2 sec');
//     setTimeout(() => {
//       console.log('3 sec');
//     }, 1000);
//   }, 1000);
// }, 1000);

// const request = fetch('https://restcountries.com/v3.1/name/portugal');

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       renderCountry(data[0]);
//     });
// };

const getJSON = function (url, errorMsg = 'Something went wrong!') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const getCountryData = function (country) {
  // country 1
  getJSON(
    `https://restcountries.com/v3.1/name/${country}`,
    ` Country not found!`
  )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) throw new Error('No neighbour found!');

      // country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        `Country not found!`
      );
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err} ⛔`);
      renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

getCountryData('angola');

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = function () {
//   getPosition()
//     .then(position => {
//       const { latitude: lat, longitude: lng } = position.coords;

//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Problem with geocoding ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);

//       return response.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.log(`${err.message} 💥`))
//     .finally();
// };

// whereAmI();

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening 🔮');
//   setTimeout(function () {
//     Math.random() >= 0.5
//       ? resolve('You win! 💰🤑')
//       : reject(new Error('You lost! 😔'));
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// let seconds = 5;
// wait(seconds)
//   .then(() => {
//     console.log(`Waited for ${seconds} seconds.`);
//     seconds--;
//     return wait(seconds);
//   })
//   .then(() => console.log(`I waited for ${seconds} second(s).`));

const imgCointainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgCointainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

// let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-3.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 3 loaded');
//     return wait(2);
//   })
//   .then(() => (currentImg.style.display = 'none'))
//   .catch(err => console.error(err));

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);

    if (!resGeo.ok) throw new Error(`Problem getting location data.`);

    const dataGeo = await resGeo.json();
    // Country data
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if (!response.ok) throw new Error('Problem getting country');

    const data = await response.json();
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(err);
    renderError(`Something went wrong 💥 ${err.message}`);
  }
};

whereAmI()
  .then(city => console.log(`1: ${city}`))
  .catch(err => console.log(`2: ${err.message}`))
  .finally(() => console.log(`3: Finished getting`));

(async function () {
  try {
    const city = await whereAmI();
    console.log(`1: ${city}`);
  } catch (err) {
    console.log(`2: ${err.message}`);
  }
  console.log(`3: Finished getting`);
})();

// btn.addEventListener('click', whereAmI);

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
//     const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
//     const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

//     Promise.all([])

//     console.log([data1.capital, data2.capital, data3.capital]);
//   } catch (err) {
//     console.error(err);
//   }
// };

// get3Countries('portugal', 'brazil', 'canada');

// Promise.race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/mexico`),
    getJSON(`https://restcountries.com/v3.1/name/mexico`),
    getJSON(`https://restcountries.com/v3.1/name/mexico`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('request took too long!'));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/tanzania`),
  timeout(1),
])
  .then(res => console.log('race', res[0]))
  .catch(err => console.error('race', err));

// Promise.AllSettled
Promise.allSettled([
  Promise.resolve('Sucess'),
  Promise.reject('Error'),
  Promise.resolve('Another sucess'),
]).then(res => console.log('allSettled', res));

Promise.all([
  Promise.resolve('Sucess'),
  Promise.reject('Error'),
  Promise.resolve('Another sucess'),
])
  .then(res => console.log('all', res))
  .catch(err => console.log('all', err));

// Promise.any [ES2021]
Promise.any([
  Promise.resolve('Sucess'),
  Promise.reject('Error'),
  Promise.resolve('Another sucess'),
])
  .then(res => console.log('any [ES2021]', res))
  .catch(err => console.log('any [ES2021]', err));

// const imgCointainer = document.querySelector('.images');

const loadNPause = async function () {
  try {
    //load image 1
    let img = await createImage('img/img-1.jpg');
    console.log('Image 1 loaded');
    await wait(2);
    img.style.display = 'none';

    //load image 2
    img = await createImage('img/img-2.jpg');
    console.log('Image 2 loaded');
    await wait(2);
    img.style.display = 'none';

    // //load image 3
    // img = await createImage('img/img-3.jpg');
    // console.log('Image 3 loaded');
    // await wait(2);
  } catch (err) {
    console.error('Coding Challenge 3', err);
  }

  // loadNPause();

  const loadAll = async function (imgArr) {
    try {
      const imgs = imgArr.map(async img => await createImage(img));
    } catch (err) {
      console.error(err);
    }
  };

  const imgsArray = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];

  loadAll(imgsArray);

  // return new Promise(function (resolve, reject) {
  //   const img = document.createElement('img');
  //   img.src = imgPath;

  //   img.addEventListener('load', function () {
  //     imgCointainer.append(img);
  //     resolve(img);
  //   });

  //   img.addEventListener('error', function () {
  //     reject(new Error('Image not found'));
  //   });
  // });
};
