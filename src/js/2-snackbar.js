import izitoast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const userDelayHTML = document.querySelector("input[name=delay]");

const btnSubmit = document.querySelector("button[type=submit]");

const form = document.querySelector(".form");


btnSubmit.addEventListener("click", (event) =>{
    event.preventDefault();
    const userDelay = Number(userDelayHTML.value);
    const checkRadioBtn = form.state.value === "fulfilled";

    new Promise((resolve, reject) => {
        setTimeout(() => {
            if(checkRadioBtn){
                resolve( `✅ Fulfilled promise in ${userDelay}ms`);
            }
            else{
                reject( `❌ Rejected promise in ${userDelay}ms`);
            }
        }, userDelay)
    })
    .then(value => {
        izitoast.success({
            position: 'topRight',
            message: value})
        })
    .catch((e) => {izitoast.error({
                position: 'topRight',
                message: e});});
    form.reset();
});
