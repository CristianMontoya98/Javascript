const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Correcto!');
    } else {
      reject('Incorrecto!');
    }
  });
}

somethingWillHappen()
  .then(response => console.log(response))
  .catch(err => console.error(err));

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('Yes!');
      },2000)
    } else {
      const error = new Error('No!');
      reject(error);
    }
  })
}

somethingWillHappen2()
  .then(response => console.log(response))
  .catch(err => console.log(err));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then(response => {
    console.log('Array of results', response);
  })
  .catch(err => console.log(err));