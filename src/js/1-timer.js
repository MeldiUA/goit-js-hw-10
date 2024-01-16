// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

import izitoast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let userSelectedDate = null;

const inputDate = document.querySelector("input#datetime-picker");

const startBtn = document.querySelector("button[data-start]");

const timerDays = document.querySelector(".value[data-days]");
const timerHours = document.querySelector(".value[data-hours]");
const timerMinutes = document.querySelector(".value[data-minutes]");
const timerSecons = document.querySelector(".value[data-seconds]");


// options DatePicker
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        userSelectedDate = selectedDates[0];
        if(userSelectedDate < new Date()){
            izitoast.error({
            position: 'topRight',
            message: 'Please choose a date in the future'});
            startBtn.disabled = true;
        }
        else{
            startBtn.disabled = false;
        }
    },
  };


flatpickr(inputDate, options);

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  

  //Event button

  startBtn.addEventListener("click", () => {
    startBtn.disabled = true;
    inputDate.disabled = true;
   setInterval(() => {
    const different = userSelectedDate - new Date();
    if(different <= 0) {
        window.clearInterval();
        return;
    }
    const result = convertMs(different);
    timerDays.textContent = String(result.days).padStart(2, 0);
    timerHours.textContent = String(result.hours).padStart(2, 0);
    timerMinutes.textContent = String(result.minutes).padStart(2, 0);
    timerSecons.textContent = String(result.seconds).padStart(2, 0);
   }, 1000);
  })
