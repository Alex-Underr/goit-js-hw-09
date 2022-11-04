import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', onSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setInterval(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onSubmit(event) {
  event.preventDefault();
  let delay = null;
  let amount = null;
  let step = null;
  delay = Number(formEl.delay.value);
  amount = Number(formEl.amount.value);
  step = Number(formEl.step.value);
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delay += step;
  }
}
