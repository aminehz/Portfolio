(this.webpackJsonpPortfolio=this.webpackJsonpPortfolio||[]).push([[6],{49:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),a=n(50);function r(t){return t&&"object"===typeof t&&"default"in t?t:{default:t}}var s=r(i);function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(){return c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},c.apply(this,arguments)}function d(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},r=Object.keys(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)n=r[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?i.useLayoutEffect:i.useEffect;function f(t){var e=i.useRef(t);return p((function(){e.current=t})),i.useCallback((function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return e.current.apply(void 0,n)}),[])}var m=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],h={decimal:".",delay:null,prefix:"",suffix:"",duration:2,start:0,startOnMount:!0,enableReinitialize:!0},g=function(t){var e=i.useMemo((function(){return l(l({},h),t)}),[t]),n=e.ref,r=e.startOnMount,s=e.enableReinitialize,o=e.delay,u=e.onEnd,c=e.onStart,p=e.onPauseResume,g=e.onReset,b=e.onUpdate,y=d(e,m),V=i.useRef(),v=i.useRef(),j=i.useRef(!1),O=f((function(){return function(t,e){var n=e.decimal,i=e.decimals,r=e.duration,s=e.easingFn,o=e.end,l=e.formattingFn,u=e.numerals,c=e.prefix,d=e.separator,p=e.start,f=e.suffix,m=e.useEasing;return new a.CountUp(t,o,{startVal:p,duration:r,decimal:n,decimalPlaces:i,easingFn:s,formattingFn:l,numerals:u,separator:d,prefix:c,suffix:f,useEasing:m,useGrouping:!!d})}("string"===typeof n?n:n.current,y)})),x=f((function(t){var e=V.current;if(e&&!t)return e;var n=O();return V.current=n,n})),E=f((function(){var t=function(){return x(!0).start((function(){null===u||void 0===u||u({pauseResume:w,reset:F,start:A,update:P})}))};o&&o>0?v.current=setTimeout(t,1e3*o):t(),null===c||void 0===c||c({pauseResume:w,reset:F,update:P})})),w=f((function(){x().pauseResume(),null===p||void 0===p||p({reset:F,start:A,update:P})})),F=f((function(){v.current&&clearTimeout(v.current),x().reset(),null===g||void 0===g||g({pauseResume:w,start:A,update:P})})),P=f((function(t){x().update(t),null===b||void 0===b||b({pauseResume:w,reset:F,start:A})})),A=f((function(){F(),E()})),N=f((function(t){r&&(t&&F(),E())}));return i.useEffect((function(){j.current?s&&N(!0):(j.current=!0,N())}),[s,j,N,o,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.formattingFn]),i.useEffect((function(){return function(){F()}}),[F]),{start:A,pauseResume:w,reset:F,update:P,getCountUp:x}},b=["className","redraw","containerProps","children","style"];e.default=function(t){var e=t.className,n=t.redraw,a=t.containerProps,r=t.children,o=t.style,u=d(t,b),p=s.default.useRef(null),m=s.default.useRef(!1),h=g(l(l({},u),{},{ref:p,startOnMount:"function"!==typeof r||0===t.delay,enableReinitialize:!1})),y=h.start,V=h.reset,v=h.update,j=h.pauseResume,O=h.getCountUp,x=f((function(){y()})),E=f((function(e){t.preserveValue||V(),v(e)})),w=f((function(){"function"!==typeof t.children||p.current instanceof Element?O():console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')}));i.useEffect((function(){w()}),[w]),i.useEffect((function(){m.current&&E(t.end)}),[t.end,E]);var F=n&&t;return i.useEffect((function(){n&&m.current&&x()}),[x,n,F]),i.useEffect((function(){!n&&m.current&&x()}),[x,n,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.className,t.formattingFn]),i.useEffect((function(){m.current=!0}),[]),"function"===typeof r?r({countUpRef:p,start:y,reset:V,update:v,pauseResume:j,getCountUp:O}):s.default.createElement("span",c({className:e,ref:p,style:o},a),t.start?O().formattingFn(t.start):"")},e.useCountUp=g},50:function(t,e,n){"use strict";n.r(e),n.d(e,"CountUp",(function(){return a}));var i=function(){return(i=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},a=function(){function t(t,e,n){var a=this;this.target=t,this.endVal=e,this.options=n,this.version="2.0.8",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(t){a.startTime||(a.startTime=t);var e=t-a.startTime;a.remaining=a.duration-e,a.useEasing?a.countDown?a.frameVal=a.startVal-a.easingFn(e,0,a.startVal-a.endVal,a.duration):a.frameVal=a.easingFn(e,a.startVal,a.endVal-a.startVal,a.duration):a.countDown?a.frameVal=a.startVal-(a.startVal-a.endVal)*(e/a.duration):a.frameVal=a.startVal+(a.endVal-a.startVal)*(e/a.duration),a.countDown?a.frameVal=a.frameVal<a.endVal?a.endVal:a.frameVal:a.frameVal=a.frameVal>a.endVal?a.endVal:a.frameVal,a.frameVal=Number(a.frameVal.toFixed(a.options.decimalPlaces)),a.printValue(a.frameVal),e<a.duration?a.rAF=requestAnimationFrame(a.count):null!==a.finalEndVal?a.update(a.finalEndVal):a.callback&&a.callback()},this.formatNumber=function(t){var e,n,i,r,s=t<0?"-":"";e=Math.abs(t).toFixed(a.options.decimalPlaces);var o=(e+="").split(".");if(n=o[0],i=o.length>1?a.options.decimal+o[1]:"",a.options.useGrouping){r="";for(var l=0,u=n.length;l<u;++l)0!==l&&l%3==0&&(r=a.options.separator+r),r=n[u-l-1]+r;n=r}return a.options.numerals&&a.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(t){return a.options.numerals[+t]})),i=i.replace(/[0-9]/g,(function(t){return a.options.numerals[+t]}))),s+a.options.prefix+n+i+a.options.suffix},this.easeOutExpo=function(t,e,n,i){return n*(1-Math.pow(2,-10*t/i))*1024/1023+e},this.options=i(i({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined"}return t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold){this.finalEndVal=t;var n=this.countDown?1:-1;this.endVal=t+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e=this.formattingFn(t);"INPUT"===this.el.tagName?this.el.value=e:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=e:this.el.innerHTML=e},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: "+t,null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},53:function(t,e,n){"use strict";n.r(e);var i=n.p+"static/media/profile.f786a628.jpeg",a=n(2);const r=[{id:1,bio:"My name is Med Amine HARZALLAH , I am a student in the 3rd year of engineering ,specializing in Computer Science at Polytechnic Private University of Sousse.My specialization is in software engineering with a focus on Artificial Intelligence (AI) and Big Data."}];var s=n.p+"static/media/python.8e3455ce.jpg",o=n.p+"static/media/nodejs.d0b7db60.png",l=n.p+"static/media/powerbi.7a0933ba.png",u=n.p+"static/media/react.d6a1f10e.png",c=n.p+"static/media/springboot.dd54d188.png",d=n.p+"static/media/talend.056654d3.png",p=n.p+"static/media/github.f264daa1.png",f=n.p+"static/media/intellij.8ad75882.png",m=n.p+"static/media/mongodb.2db0581a.png",h=n.p+"static/media/postgresql.632bd38d.png",g=n.p+"static/media/postman.c507537b.png",b=n.p+"static/media/pycharm.57187025.png",y=n.p+"static/media/vsCode.532826a2.png",V=n.p+"static/media/machine learning.42a1e45d.png";const v=[{id:1,title:"Python",img:s},{id:2,title:"powerbi",img:l},{id:3,title:"talend",img:d},{id:3,title:"machine learning",img:V},{id:4,title:"react",img:u},{id:5,title:"spring boot",img:c},{id:6,title:"nodejs",img:o},{id:7,title:"github",img:p},{id:8,title:"pycharm",img:b},{id:8,title:"intellij",img:f},{id:8,title:"postgresql",img:h},{id:8,title:"mongodb",img:m},{id:8,title:"postman",img:g},{id:8,title:"vs code",img:y}];var j=n(3);const O=Object(a.createContext)(),x=t=>{let{children:e}=t;const[n,i]=Object(a.useState)(r),[s,o]=Object(a.useState)(v);return Object(j.jsx)(O.Provider,{value:{aboutMe:n,setAboutMe:i,clientsHeading:"Professional Skillset",clientsData:s,setClientsData:o},children:e})};var E=O;var w=()=>{const{aboutMe:t}=Object(a.useContext)(E);return Object(j.jsxs)("div",{className:"block sm:flex sm:gap-10 mt-10 sm:mt-20",children:[Object(j.jsx)("div",{className:"w-full sm:w-1/4 mb-7 sm:mb-0",children:Object(j.jsx)("img",{src:i,className:"rounded-lg w-96",alt:""})}),Object(j.jsx)("div",{className:"font-general-regular w-full sm:w-3/4 text-left",children:t.map((t=>Object(j.jsx)("p",{className:"mb-4 descriptionBio text-ternary-dark dark:text-ternary-light text-lg",children:t.bio},t.id)))})]})};n(49);var F=t=>{let{title:e,image:n}=t;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("img",{src:n,className:"w-64 py-5 px-10 border bg-secondary-light border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer",alt:e})})};var P=()=>{const{clientsData:t,clientsHeading:e}=Object(a.useContext)(E);return Object(j.jsxs)("div",{className:"mt-10 sm:mt-20",children:[Object(j.jsx)("p",{className:"font-general-medium text-2xl sm:text-3xl  text-center text-primary-dark dark:text-primary-light",children:e}),Object(j.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2",children:t.map((t=>Object(j.jsx)(F,{title:t.title,image:t.img},t.id)))})]})},A=n(40);e.default=()=>Object(j.jsxs)(x,{children:[Object(j.jsx)(A.a.div,{initial:{opacity:0},animate:{opacity:1,delay:1},exit:{opacity:0},className:"container mx-auto",children:Object(j.jsx)(w,{})}),Object(j.jsx)(A.a.div,{initial:{opacity:0},animate:{opacity:1,delay:1},exit:{opacity:0},className:"container mx-auto",children:Object(j.jsx)(P,{})})]})}}]);
//# sourceMappingURL=6.66c5d6d9.chunk.js.map