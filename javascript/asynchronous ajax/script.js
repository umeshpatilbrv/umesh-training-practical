'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

//////////////
//First AJAX Call: XMLHttpRequest
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//         <article class="country">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)} people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies[0].name
//             }</p>
//           </div>
//         </article>`;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//   });
// };

// getCountryData('bharat');
// getCountryData('pakistan');
// getCountryData('usa');

///////////////////
//callback Hell
const renderCountry = function (data, className = ' ') {
  const html = `
        <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  //   countriesContainer.insertAdjacentHTML('beforebegin', html);
};

const getCountryAndNeighbour = function (country) {
  //////////// // ----------AJAX call country 1--------------
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    //////////------------- Render country 1-------------
    renderCountry(data);

    // --------Get neighbour country 2----------
    // const [neighbour] = data.borders;
    const neighbour1 = data.borders;
    for (let data2 of neighbour1) {
      let neighbour = data2;

      if (!neighbour) return;

      ///////-------------AJAX call country 2--------
      const request2 = new XMLHttpRequest();
      request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
      request2.send();

      request2.addEventListener('load', function () {
        const data2 = JSON.parse(this.responseText);
        console.log(data2);

        renderCountry(data2, 'neighbour');
      });
    }
  });
};

// getCountryAndNeighbour('bharat');
// //
getCountryAndNeighbour('usa');

/////////------------- Promises------------

// const promise_1 = new Promise((resolve, reject) => {
//   console.log('PROMISE PENDING');

//   setTimeout(() => {
//     console.log('PROMISE RESOLVE');
//     resolve(true);
//   }, 5000);
// });

// const promise_2 = new Promise((resolve, reject) => {
//   console.log('PROMISE PENDING');

//   setTimeout(() => {
//     console.log('PROMISE REJECTED');
//     reject(new Error("IT's ERROR"));
//   }, 5000);
// });

// // promise_1.then(value => {
// //   console.log(value);
// // });

// promise_2.catch(Error => {
//   console.log('we find error');
// });
// console.log(promise_1, promise_2);

// //////////////------promise chaining-------//////////////////
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('PROMISE RESOLVE after 3 sec');
//     resolve('value 10');
//   }, 3000);
// });

// promise_Chain_1(value => {
//   console.log(value);
//   const p2 = new Promise((resolve, rejected) => {
//     setTimeout(() => {
//       resolve('promise 2');
//     }, 3000);
//   });
//   return p2;
// }).then(value => {
//   console.log('All Done');
// });

////-//////--promise API---/////////

// const P1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('value1');
//   }, 1000);
// });

// const P2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve('value2');
//     reject(new Error('Error'));
//   }, 2000);
// });

// const P3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('value3');
//   }, 3000);
// });

// P1.then(value => {
//   console.log(value);
// });
// P2.then(value => {
//   console.log(value);
// });
// P3.then(value => {
//   console.log(value);
// });

// const promiseALL = Promise.all([P1, P2, P3]); // all excute
// promiseALL.then(value => {
//   console.log(value);
// });

// const promiseALL = Promise.allSettled([P1, P2, P3]); // if failed then other results write
// promiseALL.then(value => {
//   console.log(value);
// });

// const promiseALL = Promise.race([P1, P2, P3]); // Fast
// promiseALL.then(value => {
//   console.log(value);
// });

///////////--------Simple Promise-----///////
// const lottery_Promise = new Promise(function (resolve, reject) {
//   console.log('Lotter draw ');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('---WIN---');
//     } else {
//       reject(new Error('----lost------'));
//     }
//   }, 3000);
// });

// lottery_Promise
//   .then(res => console.log(res))
//   .catch(error => console.error(error));

//////////////------Consuming Promises with Async/Await

// async function asyn() {
//   console.log('start');
//   const response = await fetch(`https://restcountries.com/v2/name/bharat`);
//   console.log('before resp');
//   const user = await response.json();
//   console.log('user resolve');
//   return user;
// }
// console.log('before call');
// let name = asyn();
// console.log('after call');
// console.log(name);
// name.then(data => console.log(data));
// console.log('last');

//////---error handling---////
setTimeout(() => {
  console.log('HI');
}, 1000);

try {
  console.log(umesh);
} catch (Error) {
  console.log(Error);
}
setTimeout(() => {
  console.log('welcome to');
}, 2000);

setTimeout(() => {
  console.log('Brainvire Infotech');
}, 3000);

/////--------Promisifying the Geolocation API-------//////
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
// getPosition().then(pos => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} `));
};
// const promiseALLAPI = Promise.all([whereAmI]); // all excute
// promiseALLAPI.then(value => {
//   console.log(value);
// });
