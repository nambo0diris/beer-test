(function(){"use strict";var e={2949:function(e,t,n){var a=n(9242),i=n(3396),r=n(7139);const o={class:"wrapper"},s=(0,i._)("div",{class:"header"},[(0,i._)("div",{class:"container"},[(0,i._)("h1",null,"BeeRandomizer")])],-1),c={class:"profile"},l={class:"container"},d={class:"row"},u={class:"profile__photo"},f=["src"],h={class:"profile__info-list"},v={class:"profile__info-item"},m=(0,i._)("b",null,"Имя:",-1),p={class:"profile__info-item"},g=(0,i._)("b",null,"Возраст:",-1),_={class:"profile__info-item"},w=(0,i._)("b",null,"Должность:",-1),b={class:"main"},y={class:"container"},C={class:"row row__flex-start"},O={class:"bar__wrapper"},k=(0,i._)("div",{class:"footer"},[(0,i._)("div",{class:"container"},"Решаю пивные споры с 2018 года.")],-1);function I(e,t,n,a,I,D){const j=(0,i.up)("MyCanvas2"),U=(0,i.up)("BeerChoice");return(0,i.wg)(),(0,i.iD)("div",o,[s,(0,i._)("div",c,[(0,i._)("div",l,[(0,i._)("div",d,[(0,i._)("div",u,[(0,i._)("img",{src:this.userinfo.imgUrl,alt:""},null,8,f)]),(0,i._)("ul",h,[(0,i._)("li",v,[m,(0,i.Uk)(" "+(0,r.zw)(this.userinfo.name),1)]),(0,i._)("li",p,[g,(0,i.Uk)(" "+(0,r.zw)(this.userinfo.age),1)]),(0,i._)("li",_,[w,(0,i.Uk)(" "+(0,r.zw)(this.userinfo.status),1)])])])])]),(0,i._)("div",b,[(0,i._)("div",y,[(0,i._)("div",C,[(0,i._)("div",O,[(0,i.Wm)(j)]),(0,i.Wm)(U)])])]),k])}const D={class:"beer-choice__wrapper"},j={class:"beer-choice__content"},U={class:"beer-info__list"},x=(0,i.Uk)(":"),q=(0,i.Uk)();function z(e,t,n,a,o,s){return(0,i.wg)(),(0,i.iD)("div",D,[(0,i._)("div",j,[(0,i._)("ul",U,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(this.beerInfo,(e=>((0,i.wg)(),(0,i.iD)("li",{key:e,class:"beer-info__item"},[(0,i._)("span",null,[(0,i._)("b",null,(0,r.zw)(e.name),1),x]),q,(0,i._)("span",null,(0,r.zw)(e.data),1)])))),128))])]),(0,i._)("button",{onClick:t[0]||(t[0]=(...e)=>s.getBeer&&s.getBeer(...e))},"Подобрать пиво")])}var B={name:"BeerChoice",data(){return{beerInfo:{alcohol:{name:"Алкоголь",data:"Нет данных"},blg:{name:"Экстракт",data:"Нет данных"},brand:{name:"Бренд",data:"Нет данных"},hop:{name:"Хмель",data:"Нет данных"},ibu:{name:"Горечь",data:"Нет данных"},malts:{name:"Солод",data:"Нет данных"},name:{name:"Название",data:"Нет данных"},style:{name:"Сорт",data:"Нет данных"},yeast:{name:"Дрожжи",data:"Нет данных"}}}},methods:{async getBeer(){const e="https://random-data-api.com/api/beer/random_beer",t=await fetch(e).then((e=>e.json()));return Object.entries(t).forEach((e=>{this.beerInfo[e[0]]&&(this.beerInfo[e[0]]["data"]=e[1])})),t}},mounted(){}},E=n(89);const M=(0,E.Z)(B,[["render",z],["__scopeId","data-v-33c5426b"]]);var S=M,L=n.p+"img/ava.b0ce40a0.jpg",W=n.p+"media/videoplayback.ea4075a2.mp4";const F=e=>((0,i.dD)("data-v-286fc0c1"),e=e(),(0,i.Cn)(),e),R={class:"tv-wrapper"},T=F((()=>(0,i._)("video",{id:"video",src:W,controls:"true"},null,-1))),Y=F((()=>(0,i._)("div",{class:"canvas-video"},null,-1))),P={class:"pult"};function A(e,t,n,a,r,o){return(0,i.wg)(),(0,i.iD)("div",R,[T,Y,(0,i._)("div",P,[(0,i._)("button",{id:"tv-pult-off",onClick:t[0]||(t[0]=(...e)=>o.tvOff&&o.tvOff(...e))},"Выключить TV"),(0,i._)("button",{id:"tv-pult-on",onClick:t[1]||(t[1]=(...e)=>o.tvOn&&o.tvOn(...e))},"Включить TV")])])}var Z=n.p+"img/bar.af99fa96.png",H={name:"MyCanvas",methods:{tvOn(){const e=document.querySelector("#tv-pult-on");let t=document.querySelector("#video");e.addEventListener("click",(()=>{t.play()}))},tvOff(){const e=document.querySelector("#tv-pult-off");let t=document.querySelector("#video");e.addEventListener("click",(()=>{t.pause()}))}},mounted(){window.onload=function(){let e;const{createCanvas:t}=n(3170);let a=document.querySelector("video");const i=document.querySelector(".canvas-video"),r=t(i.clientWidth,i.clientWidth/1.7),o=r.getContext("2d");i.appendChild(r);const s=new Image;s.onload=function(){o.drawImage(s,0,0,s.width,s.height,0,0,r.width,r.height),o.beginPath()},s.src=Z;let c=r.getContext("2d");c.fillRect(0,0,r.width,r.height),a.addEventListener("play",(()=>{e=window.setInterval((()=>{c.drawImage(a,r.width/1.9175,r.width/1.9175/5.3079,r.width/4,r.height/4),o.drawImage(s,0,0,r.width,r.height)}),30)})),a.addEventListener("stop",(()=>{clearInterval(e),c.fillRect(r.width/1.9175,r.width/1.9175/5.3079,r.width/4,r.height/4),o.drawImage(s,0,0,r.width,r.height)})),a.addEventListener("pause",(()=>{clearInterval(e),c.fillRect(r.width/1.9175,r.width/1.9175/5.3079,r.width/4,r.height/4),o.drawImage(s,0,0,r.width,r.height)})),window.onresize=function(){const e=document.querySelector(".canvas-video");e.innerHTML="";const n=t(e.clientWidth,e.clientWidth/1.7),a=n.getContext("2d");e.appendChild(n);const i=new Image;i.onload=function(){a.drawImage(i,0,0,i.width,i.height,0,0,n.width,n.height),a.beginPath()},i.src=Z;let r=n.getContext("2d");r.fillRect(0,0,n.width,n.height)}}}};const V=(0,E.Z)(H,[["render",A],["__scopeId","data-v-286fc0c1"]]);var K=V,G={name:"App",components:{BeerChoice:S,MyCanvas2:K},data(){return{userinfo:{imgUrl:L,name:"Нет данных",age:"Нет данных",status:"Нет данных"}}},mounted(){this.getUser()},methods:{getAge(e){let t,n=new Date,a=new Date(n.getFullYear(),n.getMonth(),n.getDate()),i=new Date(e),r=new Date(a.getFullYear(),i.getMonth(),i.getDate());return t=a.getFullYear()-i.getFullYear(),a<r&&(t-=1),t},async getUser(){const e="https://random-data-api.com/api/users/random_user",t=await fetch(e).then((e=>e.json()));this.userinfo.name=t["first_name"]+" "+t["last_name"],this.userinfo.age=this.getAge(t["date_of_birth"]);let n=t["avatar"]?t["avatar"]:L;return this.userinfo.imgUrl=n,this.userinfo.status=t["employment"]["title"]?t["employment"]["title"]:"Безработный",t}}};const J=(0,E.Z)(G,[["render",I]]);var N=J;(0,a.ri)(N).mount("#app")}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,a,i,r){if(!a){var o=1/0;for(d=0;d<e.length;d++){a=e[d][0],i=e[d][1],r=e[d][2];for(var s=!0,c=0;c<a.length;c++)(!1&r||o>=r)&&Object.keys(n.O).every((function(e){return n.O[e](a[c])}))?a.splice(c--,1):(s=!1,r<o&&(o=r));if(s){e.splice(d--,1);var l=i();void 0!==l&&(t=l)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[a,i,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/beer-test/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,r,o=a[0],s=a[1],c=a[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(c)var d=c(n)}for(t&&t(a);l<o.length;l++)r=o[l],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(d)},a=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(2949)}));a=n.O(a)})();
//# sourceMappingURL=app.7363b4e8.js.map