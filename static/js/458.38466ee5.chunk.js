"use strict";(self.webpackChunkPortfolio=self.webpackChunkPortfolio||[]).push([[458],{2460:(t,e,n)=>{n.r(e),n.d(e,{default:()=>P});var i=n(8921),r=n(5043);const a=[{id:1,bio:"My name is Med Amine HARZALLAH , I am a freshly graduated Computer Science Engineer from the Polytechnic School of Sousse(EUR-ACE, CTI). Passionate about technological innovation, I have acquired advanced expertise in designing AI solutions and advanced web technologies."}],s=n.p+"static/media/python.8e3455ced4af3b1b128d.jpg",o=n.p+"static/media/nodejs.d0b7db60a6d9541fd7cf.png",l=n.p+"static/media/powerbi.7a0933ba508e22e01a07.png",u=n.p+"static/media/react.d6a1f10efe041e2234e9.png",c=n.p+"static/media/springboot.dd54d1881054758d6b77.png",d=n.p+"static/media/talend.056654d3c51d0bff68e1.png",p=n.p+"static/media/github.f264daa1bbf454d75517.png",f=n.p+"static/media/intellij.8ad7588247546fede41f.png",m=n.p+"static/media/mongodb.2db0581a0b718ee515ea.png",h=n.p+"static/media/postgresql.632bd38db57baac1f5e1.png",g=n.p+"static/media/postman.c507537b0126f45bb503.png",b=n.p+"static/media/pycharm.571870257ef9fe35881b.png",y=n.p+"static/media/vsCode.532826a2ee3b20d416c6.png",v=n.p+"static/media/machine learning.42a1e45deb0cd865f01a.png",w=[{id:1,title:"Python",img:s},{id:2,title:"powerbi",img:l},{id:3,title:"talend",img:d},{id:3,title:"machine learning",img:v},{id:4,title:"react",img:u},{id:5,title:"spring boot",img:c},{id:6,title:"nodejs",img:o},{id:7,title:"github",img:p},{id:8,title:"pycharm",img:b},{id:8,title:"intellij",img:f},{id:8,title:"postgresql",img:h},{id:8,title:"mongodb",img:m},{id:8,title:"postman",img:g},{id:8,title:"vs code",img:y}];var V=n(579);const x=(0,r.createContext)(),S=t=>{let{children:e}=t;const[n,i]=(0,r.useState)(a),[s,o]=(0,r.useState)(w);return(0,V.jsx)(x.Provider,{value:{aboutMe:n,setAboutMe:i,clientsHeading:"Professional Skillset",clientsData:s,setClientsData:o},children:e})},j=x,E=()=>{const{aboutMe:t}=(0,r.useContext)(j);return(0,V.jsxs)("div",{className:"block sm:flex sm:gap-10 mt-10 sm:mt-20",children:[(0,V.jsx)("div",{className:"w-full sm:w-1/4 mb-7 sm:mb-0",children:(0,V.jsx)("img",{src:i,className:"rounded-lg w-96",alt:""})}),(0,V.jsx)("div",{className:"font-general-regular w-full sm:w-3/4 text-left",children:t.map((t=>(0,V.jsx)("p",{className:"mb-4 descriptionBio text-ternary-dark dark:text-ternary-light text-lg",children:t.bio},t.id)))})]})};n(5751);const O=t=>{let{title:e,image:n}=t;return(0,V.jsx)(V.Fragment,{children:(0,V.jsx)("img",{src:n,className:"w-64 py-5 px-10 border bg-secondary-light border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer",alt:e})})},F=()=>{const{clientsData:t,clientsHeading:e}=(0,r.useContext)(j);return(0,V.jsxs)("div",{className:"mt-10 sm:mt-20",children:[(0,V.jsx)("p",{className:"font-general-medium text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light",children:e}),(0,V.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2",children:t.map((t=>(0,V.jsx)(O,{title:t.title,image:t.img},t.id)))})]})};var A=n(1605);const P=()=>(0,V.jsxs)(S,{children:[(0,V.jsx)(A.P.div,{initial:{opacity:0},animate:{opacity:1,delay:1},exit:{opacity:0},className:"container mx-auto",children:(0,V.jsx)(E,{})}),(0,V.jsx)(A.P.div,{initial:{opacity:0},animate:{opacity:1,delay:1},exit:{opacity:0},className:"container mx-auto",children:(0,V.jsx)(F,{})})]})},7904:(t,e,n)=>{n.r(e),n.d(e,{CountUp:()=>r});var i=function(){return i=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},i.apply(this,arguments)},r=function(){function t(t,e,n){var r=this;this.endVal=e,this.options=n,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){r.startTime||(r.startTime=t);var e=t-r.startTime;r.remaining=r.duration-e,r.useEasing?r.countDown?r.frameVal=r.startVal-r.easingFn(e,0,r.startVal-r.endVal,r.duration):r.frameVal=r.easingFn(e,r.startVal,r.endVal-r.startVal,r.duration):r.frameVal=r.startVal+(r.endVal-r.startVal)*(e/r.duration);var n=r.countDown?r.frameVal<r.endVal:r.frameVal>r.endVal;r.frameVal=n?r.endVal:r.frameVal,r.frameVal=Number(r.frameVal.toFixed(r.options.decimalPlaces)),r.printValue(r.frameVal),e<r.duration?r.rAF=requestAnimationFrame(r.count):null!==r.finalEndVal?r.update(r.finalEndVal):r.options.onCompleteCallback&&r.options.onCompleteCallback()},this.formatNumber=function(t){var e,n,i,a,s=t<0?"-":"";e=Math.abs(t).toFixed(r.options.decimalPlaces);var o=(e+="").split(".");if(n=o[0],i=o.length>1?r.options.decimal+o[1]:"",r.options.useGrouping){a="";for(var l=3,u=0,c=0,d=n.length;c<d;++c)r.options.useIndianSeparators&&4===c&&(l=2,u=1),0!==c&&u%l==0&&(a=r.options.separator+a),u++,a=n[d-c-1]+a;n=a}return r.options.numerals&&r.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(t){return r.options.numerals[+t]})),i=i.replace(/[0-9]/g,(function(t){return r.options.numerals[+t]}))),s+r.options.prefix+n+i+r.options.suffix},this.easeOutExpo=function(t,e,n,i){return n*(1-Math.pow(2,-10*t/i))*1024/1023+e},this.options=i(i({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return r.handleScroll(r)})),window.onscroll=function(){window.onScrollFns.forEach((function(t){return t()}))},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var e=window.innerHeight+window.scrollY,n=t.el.getBoundingClientRect(),i=n.top+window.pageYOffset,r=n.top+n.height+window.pageYOffset;r<e&&r>window.scrollY&&t.paused?(t.paused=!1,setTimeout((function(){return t.start()}),t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>r||i>e)&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var n=this.countDown?1:-1;this.endVal=t+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e;if(this.el){var n=this.formattingFn(t);(null===(e=this.options.plugin)||void 0===e?void 0:e.render)?this.options.plugin.render(this.el,n):"INPUT"===this.el.tagName?this.el.value=n:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=n:this.el.innerHTML=n}},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},5751:(t,e,n)=>{var i=n(5043),r=n(7904);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}function l(t,e,n){return(e=o(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(){return u=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},u.apply(this,arguments)}function c(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function d(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var i,r,a,s,o=[],l=!0,u=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(i=a.call(n)).done)&&(o.push(i.value),o.length!==e);l=!0);}catch(t){u=!0,r=t}finally{try{if(!l&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(u)throw r}}return o}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var f="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?i.useLayoutEffect:i.useEffect;function m(t){var e=i.useRef(t);return f((function(){e.current=t})),i.useCallback((function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return e.current.apply(void 0,n)}),[])}var h=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],g={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},b=function(t){var e=Object.fromEntries(Object.entries(t).filter((function(t){return void 0!==d(t,2)[1]}))),n=i.useMemo((function(){return s(s({},g),e)}),[t]),a=n.ref,o=n.startOnMount,l=n.enableReinitialize,u=n.delay,p=n.onEnd,f=n.onStart,b=n.onPauseResume,y=n.onReset,v=n.onUpdate,w=c(n,h),V=i.useRef(),x=i.useRef(),S=i.useRef(!1),j=m((function(){return function(t,e){var n=e.decimal,i=e.decimals,a=e.duration,s=e.easingFn,o=e.end,l=e.formattingFn,u=e.numerals,c=e.prefix,d=e.separator,p=e.start,f=e.suffix,m=e.useEasing,h=e.useGrouping,g=e.useIndianSeparators,b=e.enableScrollSpy,y=e.scrollSpyDelay,v=e.scrollSpyOnce,w=e.plugin;return new r.CountUp(t,o,{startVal:p,duration:a,decimal:n,decimalPlaces:i,easingFn:s,formattingFn:l,numerals:u,separator:d,prefix:c,suffix:f,plugin:w,useEasing:m,useIndianSeparators:g,useGrouping:h,enableScrollSpy:b,scrollSpyDelay:y,scrollSpyOnce:v})}("string"===typeof a?a:a.current,w)})),E=m((function(t){var e=V.current;if(e&&!t)return e;var n=j();return V.current=n,n})),O=m((function(){var t=function(){return E(!0).start((function(){null===p||void 0===p||p({pauseResume:F,reset:A,start:C,update:P})}))};u&&u>0?x.current=setTimeout(t,1e3*u):t(),null===f||void 0===f||f({pauseResume:F,reset:A,update:P})})),F=m((function(){E().pauseResume(),null===b||void 0===b||b({reset:A,start:C,update:P})})),A=m((function(){E().el&&(x.current&&clearTimeout(x.current),E().reset(),null===y||void 0===y||y({pauseResume:F,start:C,update:P}))})),P=m((function(t){E().update(t),null===v||void 0===v||v({pauseResume:F,reset:A,start:C})})),C=m((function(){A(),O()})),N=m((function(t){o&&(t&&A(),O())}));return i.useEffect((function(){S.current?l&&N(!0):(S.current=!0,N())}),[l,S,N,u,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.formattingFn]),i.useEffect((function(){return function(){A()}}),[A]),{start:C,pauseResume:F,reset:A,update:P,getCountUp:E}},y=["className","redraw","containerProps","children","style"]},8921:(t,e,n)=>{t.exports=n.p+"static/media/profile.f786a628498caaf0f0e8.jpeg"}}]);
//# sourceMappingURL=458.38466ee5.chunk.js.map