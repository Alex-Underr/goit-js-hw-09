function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}


// import Notiflix from 'notiflix';
// const formEl = document.querySelector('.form');
// formEl.addEventListener('submit', onSubmitForm);
// function onSubmitForm(e) {
//   e.preventDefault();
//   let delay = Number(formEl.delay.value);
//   for (let i = 1; i <= formEl.amount.value; i += 1) {
//     createPromise(i, delay)
//       .then(({ position, delay }) => {
//         Notiflix.Notify.success(
//           `:white_check_mark: Fulfilled promise ${position} in ${delay}ms`
//         );
//       })
//       .catch(({ position, delay }) => {
//         Notiflix.Notify.failure(
//           `:x: Rejected promise ${position} in ${delay}ms`
//         );
//       });
//     delay += Number(formEl.step.value);
//   }
// }
// function createPromise(position, delay) {
//   const obj = { position, delay };
//   const shouldResolve = Math.random() > 0.3;
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve(obj);
//       } else {
//         reject(obj);
//       }
//     }, delay);
//   });
// }