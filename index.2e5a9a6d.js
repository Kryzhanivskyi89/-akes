// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
let e;const t={startButton:document.querySelector("button[data-start]"),clockFace:document.querySelector(".timer")},n={intervalId:null,isActive:!1,start(){this.isActive||(this.isActive=!0,this.intervalId=setInterval(()=>{let e=new Date("2024-01-01 00:00:00")-new Date,n=function(e){let t=864e5,n=c(Math.floor(e/t)),r=c(Math.floor(e%t/36e5)),o=c(Math.floor(e%t%36e5/6e4)),i=c(Math.floor(e%t%36e5%6e4/1e3));return{days:n,hours:r,minutes:o,seconds:i}}(e);e<=1e3&&(clearInterval(this.intervalId),this.isActive=!1),function({days:e,hours:n,minutes:c,seconds:r}){t.clockFace.textContent=`${e}:${n}:${c}:${r}`}(n)},1e3))}};function c(e){return String(e).padStart(2,"0")}// timer.start()
t.startButton.addEventListener("click",()=>{n.start()});const r=document.querySelectorAll(".slider-box .slider-line img"),o=document.querySelector(".slider-line");let i=0;function s(){console.log("resize"),e=document.querySelector(".slider-box").offsetWidth,o.style.width=e*r.length+"px",r.forEach(t=>{t.style.width=e+"px";// item.style.height = 'auto';
}),l()}function l(){o.style.transform="translate(-"+i*e+"px)"}window.addEventListener("resize",s),s(),document.querySelector(".slider-next").addEventListener("click",function(){++i>=r.length&&(i=0),l()}),document.querySelector(".slider-prev").addEventListener("click",function(){--i<0&&(i=r.length-1),l()});const d=document.querySelector(".submit"),a=document.querySelector(".form"),u=document.querySelector(".ok_message"),v=document.querySelector(".btn-close"),m=document.querySelector(".order-btn");m.addEventListener("click",function(){a.classList.add("active")}),d.addEventListener("click",function(){d.parent().parent().hide(300),u.classList.add("active")}),v.addEventListener("click",function(){console.log("poc"),a.classList.remove("active")}),u.addEventListener("click",function(){u.classList.remove("active");//   form.classList.remove("active").show();
});//# sourceMappingURL=index.2e5a9a6d.js.map

//# sourceMappingURL=index.2e5a9a6d.js.map
