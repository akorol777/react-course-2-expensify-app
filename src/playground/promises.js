const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is my resolved data');
    reject('Something went wrong');
  }, 1000);
});

console.log('before');

promise
  .then((data) => {
    console.log('1', data);
    return 12;
  })
  .then((data) => {
    console.log('2', data);
  })
  .catch((error) => {
    console.log('error', error);
  });

console.log('after');