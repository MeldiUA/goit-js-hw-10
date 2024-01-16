import izitoast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const userDelayHTML = document.querySelector("input[name=delay]");

const btnSubmit = document.querySelector("button[type=submit]");

const radioBtnFulfilled = document.querySelector("input[value=fulfilled]");

const form = document.querySelector(".form");

btnSubmit.addEventListener("click", (event) =>{
    event.preventDefault();
    const userDelay = userDelayHTML.value;
    const checkRadioBtn = radioBtnFulfilled.checked;

    form.reset();

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
            message: value});
    }, rej => {
        izitoast.error({
            position: 'topRight',
            message: rej});
    })
    .catch((e) => {console.log(e);console.log("In catch");});
});
