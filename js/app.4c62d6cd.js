(function(){"use strict";var e={8564:function(e,t,n){var a=n(9242),i=n(3396),r=n(7139);const o={class:"wrapper"},s=(0,i._)("div",{class:"header"},[(0,i._)("div",{class:"container"},[(0,i._)("h1",null,"BeeRandomizer")])],-1),c={class:"profile"},d={class:"container"},l={class:"row"},u={class:"profile__photo"},h=["src"],f={class:"profile__info-list"},v={class:"profile__info-item"},m=(0,i._)("b",null,"Имя:",-1),p={class:"profile__info-item"},w=(0,i._)("b",null,"Возраст:",-1),_={class:"profile__info-item"},g=(0,i._)("b",null,"Должность:",-1),b={class:"main"},y={class:"container"},I={class:"row row__flex-start"},C={class:"bar__wrapper"},O=(0,i._)("div",{class:"footer"},[(0,i._)("div",{class:"container"},"Решаю пивные споры с 2018 года.")],-1);function k(e,t,n,a,k,j){const E=(0,i.up)("MyCanvas2"),U=(0,i.up)("BeerChoice");return(0,i.wg)(),(0,i.iD)("div",o,[s,(0,i._)("div",c,[(0,i._)("div",d,[(0,i._)("div",l,[(0,i._)("div",u,[(0,i._)("img",{src:this.userinfo.imgUrl,alt:""},null,8,h)]),(0,i._)("ul",f,[(0,i._)("li",v,[m,(0,i.Uk)(" "+(0,r.zw)(this.userinfo.name),1)]),(0,i._)("li",p,[w,(0,i.Uk)(" "+(0,r.zw)(this.userinfo.age),1)]),(0,i._)("li",_,[g,(0,i.Uk)(" "+(0,r.zw)(this.userinfo.status),1)])])])])]),(0,i._)("div",b,[(0,i._)("div",y,[(0,i._)("div",I,[(0,i._)("div",C,[(0,i.Wm)(E)]),(0,i.Wm)(U)])])]),O])}const j={class:"beer-choice__wrapper"},E={class:"beer-choice__content"},U={class:"beer-info__list"},x=(0,i.Uk)(":"),L=(0,i.Uk)();function q(e,t,n,a,o,s){return(0,i.wg)(),(0,i.iD)("div",j,[(0,i._)("div",E,[(0,i._)("ul",U,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(this.beerInfo,(e=>((0,i.wg)(),(0,i.iD)("li",{key:e,class:"beer-info__item"},[(0,i._)("span",null,[(0,i._)("b",null,(0,r.zw)(e.name),1),x]),L,(0,i._)("span",null,(0,r.zw)(e.data),1)])))),128))])]),(0,i._)("button",{onClick:t[0]||(t[0]=(...e)=>s.getBeer&&s.getBeer(...e))},"Подобрать пиво")])}var z={name:"BeerChoice",data(){return{beerInfo:{alcohol:{name:"Алкоголь",data:"Нет данных"},blg:{name:"Экстракт",data:"Нет данных"},brand:{name:"Бренд",data:"Нет данных"},hop:{name:"Хмель",data:"Нет данных"},ibu:{name:"Горечь",data:"Нет данных"},malts:{name:"Солод",data:"Нет данных"},name:{name:"Название",data:"Нет данных"},style:{name:"Сорт",data:"Нет данных"},yeast:{name:"Дрожжи",data:"Нет данных"}}}},methods:{async getBeer(){const e="https://random-data-api.com/api/beer/random_beer",t=await fetch(e).then((e=>e.json()));return Object.entries(t).forEach((e=>{this.beerInfo[e[0]]&&(this.beerInfo[e[0]]["data"]=e[1])})),t}},mounted(){}},B=n(89);const S=(0,B.Z)(z,[["render",q],["__scopeId","data-v-33c5426b"]]);var D=S,W=n.p+"img/ava.b0ce40a0.jpg",M=n.p+"media/videoplayback.ea4075a2.mp4";const R=e=>((0,i.dD)("data-v-515413cc"),e=e(),(0,i.Cn)(),e),T={class:"tv-wrapper"},P=R((()=>(0,i._)("video",{id:"video",src:M,controls:"true"},null,-1))),Z=R((()=>(0,i._)("div",{class:"canvas-video"},null,-1))),H={class:"pult"};function V(e,t,n,a,r,o){return(0,i.wg)(),(0,i.iD)("div",T,[P,Z,(0,i._)("div",H,[(0,i._)("button",{id:"tv-pult-off",onClick:t[0]||(t[0]=(...e)=>o.tvOff&&o.tvOff(...e))},"Выключить TV"),(0,i._)("button",{id:"tv-pult-on",onClick:t[1]||(t[1]=(...e)=>o.tvOn&&o.tvOn(...e))},"Включить TV")])])}var A=n.p+"img/bar.af99fa96.png",F={name:"MyCanvas",methods:{tvOn(){const e=document.querySelector("#tv-pult-on");let t=document.querySelector("#video");e.addEventListener("click",(()=>{t.play()}))},tvOff(){const e=document.querySelector("#tv-pult-off");let t=document.querySelector("#video");e.addEventListener("click",(()=>{t.pause()}))}},mounted(){window.onload=function(){let e;const{createCanvas:t}=n(3170);let a=document.querySelector("video");const i=document.querySelector(".canvas-video"),r=t(i.clientWidth,i.clientWidth/1.7),o=r.getContext("2d");i.appendChild(r);const s=new Image;s.onload=function(){o.drawImage(s,0,0,s.width,s.height,0,0,r.width,r.height),o.beginPath()},s.src=A;let c=r.getContext("2d");c.fillRect(0,0,r.width,r.height),a.addEventListener("play",(()=>{e=window.setInterval((()=>{c.drawImage(a,r.width/1.9175,r.width/1.9175/5.3079,r.width/4,r.height/4),o.drawImage(s,0,0,r.width,r.height)}),30)})),a.addEventListener("stop",(()=>{clearInterval(e),c.fillRect(r.width/1.9175,r.width/1.9175/5.3079,r.width/4,r.height/4),o.drawImage(s,0,0,r.width,r.height)})),a.addEventListener("pause",(()=>{clearInterval(e),c.fillRect(r.width/1.9175,r.width/1.9175/5.3079,r.width/4,r.height/4),o.drawImage(s,0,0,r.width,r.height)})),window.onresize=function(){const n=document.querySelector(".canvas-video");n.innerHTML="";const i=t(n.clientWidth,n.clientWidth/1.7),r=i.getContext("2d");n.appendChild(i);const o=new Image;o.onload=function(){r.drawImage(o,0,0,o.width,o.height,0,0,i.width,i.height),r.beginPath()},o.src=A;let s=i.getContext("2d");s.fillRect(0,0,i.width,i.height),a.addEventListener("play",(()=>{e=window.setInterval((()=>{s.drawImage(a,400,71,i.width/4-10,i.height/4-10),r.drawImage(o,0,0,i.width,i.height)}),30)})),a.addEventListener("stop",(()=>{clearInterval(e),r.drawImage(o,0,0,i.width,i.height)})),a.addEventListener("pause",(()=>{clearInterval(e),r.drawImage(o,0,0,i.width,i.height)}))}}}};const K=(0,B.Z)(F,[["render",V],["__scopeId","data-v-515413cc"]]);var Y=K,G={name:"App",components:{BeerChoice:D,MyCanvas2:Y},data(){return{userinfo:{imgUrl:W,name:"Нет данных",age:"Нет данных",status:"Нет данных"}}},mounted(){this.getUser()},methods:{async getUser(){const e="https://random-data-api.com/api/users/random_user",t=await fetch(e).then((e=>e.json()));this.userinfo.name=t["first_name"]+" "+t["last_name"],this.userinfo.age=t["date_of_birth"];let n=t["avatar"]?t["avatar"]:W;return this.userinfo.imgUrl=n,this.userinfo.status=t["employment"]["title"]?t["employment"]["title"]:"Безработный",t}}};const J=(0,B.Z)(G,[["render",k]]);var N=J;(0,a.ri)(N).mount("#app")}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,a,i,r){if(!a){var o=1/0;for(l=0;l<e.length;l++){a=e[l][0],i=e[l][1],r=e[l][2];for(var s=!0,c=0;c<a.length;c++)(!1&r||o>=r)&&Object.keys(n.O).every((function(e){return n.O[e](a[c])}))?a.splice(c--,1):(s=!1,r<o&&(o=r));if(s){e.splice(l--,1);var d=i();void 0!==d&&(t=d)}}return t}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[a,i,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/beer-test/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,r,o=a[0],s=a[1],c=a[2],d=0;if(o.some((function(t){return 0!==e[t]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(c)var l=c(n)}for(t&&t(a);d<o.length;d++)r=o[d],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(l)},a=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(8564)}));a=n.O(a)})();
//# sourceMappingURL=app.4c62d6cd.js.map