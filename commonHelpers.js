import"./assets/modulepreload-polyfill-ec808ebb.js";import{f as i,i as d}from"./assets/vendor-3029c4a4.js";let o=null;const r=document.querySelector("input#datetime-picker"),n=document.querySelector("button[data-start]"),l=document.querySelector(".value[data-days]"),m=document.querySelector(".value[data-hours]"),h=document.querySelector(".value[data-minutes]"),S=document.querySelector(".value[data-seconds]"),f={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){o=t[0],o<new Date?(d.error({position:"topRight",message:"Please choose a date in the future"}),n.disabled=!0):n.disabled=!1}};i(r,f);function y(t){const a=Math.floor(t/864e5),s=Math.floor(t%864e5/36e5),u=Math.floor(t%864e5%36e5/6e4),c=Math.floor(t%864e5%36e5%6e4/1e3);return{days:a,hours:s,minutes:u,seconds:c}}n.addEventListener("click",()=>{n.disabled=!0,r.disabled=!0,setInterval(()=>{const t=o-new Date;if(t<=0){window.clearInterval();return}const e=y(t);l.textContent=String(e.days).padStart(2,0),m.textContent=String(e.hours).padStart(2,0),h.textContent=String(e.minutes).padStart(2,0),S.textContent=String(e.seconds).padStart(2,0)},1e3)});
//# sourceMappingURL=commonHelpers.js.map