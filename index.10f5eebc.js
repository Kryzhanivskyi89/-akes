!function(){function e(e,t,i,a){Object.defineProperty(e,t,{get:i,set:a,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var i,a,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},c={},o=n.parcelRequire11b0;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in c){var t=c[e];delete c[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){c[e]=t},n.parcelRequire11b0=o);var s=o.register;s("iE7OH",function(t,i){e(t.exports,"register",function(){return a},function(e){return a=e});var a,n=new Map;a=function(e,t){for(var i=0;i<t.length-1;i+=2)n.set(t[i],{baseUrl:e,path:t[i+1]})}}),s("aNJCr",function(t,i){e(t.exports,"getBundleURL",function(){return a},function(e){return a=e});var a,n={};a=function(e){var t=n[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)// Use the 3rd one, which will be a runtime in the original bundle.
return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),n[e]=t),t}}),o("iE7OH").register(o("aNJCr").getBundleURL("EVgbq"),JSON.parse('["EVgbq","index.10f5eebc.js","k2gOm","1.6c2f386c.jpg","cmzfB","2.1247f6a3.jpg","d0Bhn","3.6028920d.jpg","6YYnv","4.c2e8a00d.jpg","VmQc0","5.11a92d4c.jpg","fbDzB","6.0dccdb3c.jpg","e4urb","7.cd841c7a.jpg","bHOUk","8.215a43b7.jpg","4Mdo3","9.ef1b3431.jpg","gmRv8","10.84b4d1dc.jpg","3P1GT","11.1e4c6df6.jpg","lvooG","12.92d84f00.jpg","d8CE9","13.825ed5f3.jpg","hqMAY","14.c10f4e7b.jpg","kBdL3","15.55ead2e1.jpg","lxOuc","16.215159e4.jpg","hXR7K","17.1cf311b5.jpg","k3EVq","18.4d406589.jpg","iYAKy","19.61d4d7a1.jpg","cDhPY","20.2adcc136.jpg","ld1Ko","21.be9c7543.jpg","eWhZn","22.9e2e73be.jpg","dlkEA","23.bfb11569.jpg","kxCxa","24.54743c26.jpg","hytrV","25.4f944f05.jpg","jJgpT","26.dd7511e4.jpg","aIjNY","27.a04bfeab.jpeg","81unJ","28.f1dd0025.jpeg","65xMm","29.0810a4a4.jpeg","8yx5l","30.df547913.jpeg"]'));// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
var d={startButton:document.querySelector("button[data-start]"),clockFace:document.querySelector(".timer")},u={intervalId:null,isActive:!1,start:function(){var e=this;this.isActive||(this.isActive=!0,this.intervalId=setInterval(function(){var t,i,a,n,r=new Date("2024-01-01 00:00:00")-new Date,c={days:l(Math.floor(r/864e5)),hours:l(Math.floor(r%864e5/36e5)),minutes:l(Math.floor(r%864e5%36e5/6e4)),seconds:l(Math.floor(r%864e5%36e5%6e4/1e3))};r<=1e3&&(clearInterval(e.intervalId),e.isActive=!1),t=c.days,i=c.hours,a=c.minutes,n=c.seconds,d.clockFace.textContent="".concat(t,":").concat(i,":").concat(a,":").concat(n)},1e3))}};function l(e){return String(e).padStart(2,"0")}// timer.start()
d.startButton.addEventListener("click",function(){u.start()});var p=document.querySelectorAll(".slider-box .slider-line img"),g=document.querySelector(".slider-line"),m=0;function f(){console.log("resize"),a=document.querySelector(".slider-box").offsetWidth,g.style.width=a*p.length+"px",p.forEach(function(e){e.style.width=a+"px";// item.style.height = 'auto';
}),_()}function _(){g.style.transform="translate(-"+m*a+"px)"}window.addEventListener("resize",f),f(),document.querySelector(".slider-next").addEventListener("click",function(){++m>=p.length&&(m=0),_()}),document.querySelector(".slider-prev").addEventListener("click",function(){--m<0&&(m=p.length-1),_()});var v=document.querySelector(".submit"),H=document.querySelector(".form"),E=document.querySelector(".ok_message"),b=document.querySelector(".btn-close");document.querySelector(".order-btn").addEventListener("click",function(){H.classList.add("active")}),v.addEventListener("click",function(){v.parent().parent().hide(300),E.classList.add("active")}),b.addEventListener("click",function(){console.log("poc"),H.classList.remove("active")}),E.addEventListener("click",function(){E.classList.remove("active");//   form.classList.remove("active").show();
});var R={};R=o("aNJCr").getBundleURL("EVgbq")+"1.6c2f386c.jpg";var S={};S=o("aNJCr").getBundleURL("EVgbq")+"2.1247f6a3.jpg";var h={};h=o("aNJCr").getBundleURL("EVgbq")+"3.6028920d.jpg";var q={};q=o("aNJCr").getBundleURL("EVgbq")+"4.c2e8a00d.jpg";var L={};L=o("aNJCr").getBundleURL("EVgbq")+"5.11a92d4c.jpg";var A={};A=o("aNJCr").getBundleURL("EVgbq")+"6.0dccdb3c.jpg";var j={};j=o("aNJCr").getBundleURL("EVgbq")+"7.cd841c7a.jpg";var F={};F=o("aNJCr").getBundleURL("EVgbq")+"8.215a43b7.jpg";var y={};y=o("aNJCr").getBundleURL("EVgbq")+"9.ef1b3431.jpg";var J={};J=o("aNJCr").getBundleURL("EVgbq")+"10.84b4d1dc.jpg";var B={};B=o("aNJCr").getBundleURL("EVgbq")+"11.1e4c6df6.jpg";var C={};C=o("aNJCr").getBundleURL("EVgbq")+"12.92d84f00.jpg";var N={};N=o("aNJCr").getBundleURL("EVgbq")+"13.825ed5f3.jpg";var U={};U=o("aNJCr").getBundleURL("EVgbq")+"14.c10f4e7b.jpg";var V={};V=o("aNJCr").getBundleURL("EVgbq")+"15.55ead2e1.jpg";var x={};x=o("aNJCr").getBundleURL("EVgbq")+"16.215159e4.jpg";var k={};k=o("aNJCr").getBundleURL("EVgbq")+"17.1cf311b5.jpg";var w={};w=o("aNJCr").getBundleURL("EVgbq")+"18.4d406589.jpg";var Q={};Q=o("aNJCr").getBundleURL("EVgbq")+"19.61d4d7a1.jpg";var M={};M=o("aNJCr").getBundleURL("EVgbq")+"20.2adcc136.jpg",o("aNJCr").getBundleURL("EVgbq"),o("aNJCr").getBundleURL("EVgbq"),o("aNJCr").getBundleURL("EVgbq"),o("aNJCr").getBundleURL("EVgbq"),o("aNJCr").getBundleURL("EVgbq"),o("aNJCr").getBundleURL("EVgbq"),o("aNJCr").getBundleURL("EVgbq"),o("aNJCr").getBundleURL("EVgbq"),o("aNJCr").getBundleURL("EVgbq"),o("aNJCr").getBundleURL("EVgbq");// import g1x2 from './1x2.jpg';
// import g2x2 from './2.jpg';
// import g3x2 from './3.jpg';
// import g4x2 from './4.jpg';
// import g5x2 from './5.jpg';
// import g6x2 from './6.jpg';
// import g7x2 from './7.jpg';
// import g8x2 from './8.jpg';
// import g9x2 from './9.jpg';
// import g10x2 from './10.jpg';
// import g11x2 from './11.jpg';
// import g12x2 from './12.jpg';
// import g13x2 from './13.jpg';
// import g14x2 from './14.jpg';
// import g15x2 from './15.jpg';
// import g16x2 from './16.jpg';
// import g17x2 from './17.jpg';
// import g18x2 from './18.jpg';
// import g19x2 from './19.jpg';
// import g20x2 from './20.jpg';
// import g21x2 from './21.jpg';
// import g22x2 from './22.jpg';
// import g23x2 from './23.jpg';
// import g24x2 from './24.jpg';
// import g25x2 from './25.jpg';
// import g26x2 from './26.jpg';
// import g27x2 from './27.jpeg';
// import g28x2 from './28.jpeg';
// import g29x2 from './29.jpeg';
// import g30x2 from './30.jpeg';
var O=[{id:1,photo:/*@__PURE__*/t(R),// photo2x: g1x2,
title:"Misha",alt:"tort dlya Mishy",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:2,photo:/*@__PURE__*/t(S),title:"",alt:"",description:"July 2023"},{id:3,photo:/*@__PURE__*/t(h),title:"",alt:"",description:"July 2023"},{id:4,photo:/*@__PURE__*/t(q),title:"",alt:"",description:"July 2023"},{id:5,photo:/*@__PURE__*/t(L),title:"",alt:"",description:"July 2023"},{id:6,photo:/*@__PURE__*/t(A),title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:7,photo:/*@__PURE__*/t(j),title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:8,photo:/*@__PURE__*/t(F),title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:9,photo:/*@__PURE__*/t(y),title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:10,photo:/*@__PURE__*/t(J),title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:11,photo:/*@__PURE__*/t(B),title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:12,photo:/*@__PURE__*/t(C),title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:13,photo:/*@__PURE__*/t(N),title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:14,photo:/*@__PURE__*/t(U),title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:15,photo:/*@__PURE__*/t(V),title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:16,photo:/*@__PURE__*/t(x),title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:17,photo:/*@__PURE__*/t(k),title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:18,photo:/*@__PURE__*/t(w),title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:19,photo:/*@__PURE__*/t(Q),title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"},{id:20,photo:/*@__PURE__*/t(M),title:"",alt:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis providentat"}],z={gallery:document.querySelector(".container__gallery")};console.log(O),i=O.map(function(e){var t=e.id,i=e.photo,a=(e.photo2x,e.alt),n=e.title,r=e.description;return'        \n            <li class="card" key='.concat(t,'>                \n                \n                    <div class="face face1">\n                        <div class="content">\n                            <picture>\n                                <source srcset="" type="image/webp" />\n                                <source srcset="" type="image/jpeg" />\n                                <img\n                                    src=').concat(i," \n                                    alt=").concat(a,' \n                                    style="object-fit: cover;"\n                                    crossorigin="anonymous" \n                                    decoding="auto"\n                                    class="x5yr21d xu96u03 x10l6tqk x13vifvy x87ps6o xh8yej3"\n                                    width="250" \n                                    height="200" \n                                    loading="lazy"\n                                    sizes="226.8046875px"\n                                    / >\n                            </picture>\n                        </div>\n                    </div>\n                    <div class="face face2">\n                        <div class="content">\n                            <h3>').concat(n,"</h3>\n                            <p>").concat(r,"</p>\n                        </div>\n                    </div>\n                 \n            </li>        \n        ")}).join(""),z.gallery.insertAdjacentHTML("beforeend",i)}();//# sourceMappingURL=index.10f5eebc.js.map

//# sourceMappingURL=index.10f5eebc.js.map
