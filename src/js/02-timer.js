import flatpickr from 'flatpickr';
import "flatpickr/dist/flatpickr.min.css";
import 'flatpickr/dist/themes/material_green.css';
import Notiflix from 'notiflix';
Notiflix.Report.init({
  titleFontSize: '18px',
  titleMaxLength: 60,
});

const calendar = document.querySelector('input#datetime-picker');
const btnStart = document.querySelector('[data-start]');
  const daysData = document.querySelector('[data-days]');
  const hoursData = document.querySelector('[data-hours]');
  const minutesData = document.querySelector('[data-minutes]');
  const secondsData = document.querySelector('[data-seconds]');
let selectedDates = null;

flatpickr(calendar, {
  enableTime: true,
  dateFormat: 'd-m-Y H:i',
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDate) {
    if (selectedDate[0] < Date.now()) {
      selectedDates = selectedDate[0];
      btnStart.disabled = true;
      Notiflix.Report.info('Please, choose a date in the future!');
    } else {
      btnStart.disabled = false;
    }
  },
});
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
const timer = {
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return
    }
    this.isActive = true;
    // const selectedDates = new Date(calendar.value).getTime();

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = selectedDates - currentTime;
      const remainTime = convertMs(deltaTime);
      this.updateClock(remainTime);
    }, 1000);
  },
  
  updateClock({ days, hours, minutes, seconds }) {
    daysData.textContent = days;
    hoursData.textContent = hours;
    minutesData.textContent = minutes;
    secondsData.textContent = seconds;
  },
};

btnStart.addEventListener('click', timer.start.bind(timer));

