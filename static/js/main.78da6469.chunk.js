(this.webpackJsonpPortfolio=this.webpackJsonpPortfolio||[]).push([[0],{20:function(e,t,a){"use strict";var r=a(3);t.a=function(e){let{title:t}=e;return Object(r.jsx)("button",{children:t})}},22:function(e,t,a){"use strict";var r=a(2);t.a=()=>{const[e,t]=Object(r.useState)(localStorage.theme),a="dark"===e?"light":"dark";return Object(r.useEffect)((()=>{const t=window.document.documentElement;t.classList.remove(a),t.classList.add(e),localStorage.setItem("theme",e)}),[e,a]),[a,t]}},23:function(e,t,a){"use strict";var r=a(7),s=a(25),l=a(3);const c=[{id:2,name:"mohamedamin.harzallah@gmail.com",icon:Object(l.jsx)(r.f,{})},{id:3,name:Object(l.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/mohamed-amine-harzallah-8a36911b5/",children:"mohamed-amine-harzallah-8a36911b5"}),icon:Object(l.jsx)(s.a,{})}];t.a=()=>Object(l.jsx)("div",{className:"w-full lg:w-1/2",children:Object(l.jsxs)("div",{className:"text-left max-w-xl px-6",children:[Object(l.jsx)("h2",{className:"font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8",children:"Contact details"}),Object(l.jsx)("ul",{className:"font-general-regular",children:c.map((e=>Object(l.jsxs)("li",{className:"flex ",children:[Object(l.jsx)("i",{className:"text-2xl text-gray-500 dark:text-gray-400 mr-4",children:e.icon}),Object(l.jsx)("span",{className:"text-lg mb-4 text-ternary-dark dark:text-ternary-light",children:e.name})]},e.id)))})]})})},27:function(e,t,a){},30:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);a(27);var r=a(41),s=a(2),l=a(13),c=a(4);var n=()=>{const{pathname:e}=Object(c.e)();return Object(s.useEffect)((()=>{window.scrollTo(0,0)}),[e]),null},i=a(7),d=a(3);var o=function(){return Object(d.jsx)("div",{className:"font-general-regular flex justify-center items-center text-center",children:Object(d.jsxs)("div",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:["\xa9 ",(new Date).getFullYear()]})})};const m=[{id:2,icon:Object(d.jsx)(i.d,{}),url:"https://github.com/aminehz"},{id:4,icon:Object(d.jsx)(i.e,{}),url:"https://www.linkedin.com/in/mohamed-amine-harzallah-8a36911b5/"}];var x=()=>Object(d.jsx)("div",{className:"container mx-auto",children:Object(d.jsxs)("div",{className:"pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark",children:[Object(d.jsxs)("div",{className:"font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28",children:[Object(d.jsx)("p",{className:"text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5",children:"Follow me"}),Object(d.jsx)("ul",{className:"flex gap-4 sm:gap-8",children:m.map((e=>Object(d.jsx)("a",{href:e.url,target:"__blank",className:"text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300",children:Object(d.jsx)("i",{className:"text-xl sm:text-2xl md:text-3xl",children:e.icon})},e.id)))})]}),Object(d.jsx)(o,{})]})}),b=a(22),j=a(40),h=a(20),g=a(23);var u=e=>{let{onClose:t,onRequest:a}=e;return Object(d.jsxs)(j.a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"font-general-medium fixed inset-0 z-30 transition-all duration-500",children:[Object(d.jsx)("div",{className:"bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"}),Object(d.jsx)("main",{className:"flex flex-col items-center justify-center h-full w-full",children:Object(d.jsx)("div",{className:"modal-wrapper flex items-center z-30",children:Object(d.jsxs)("div",{className:"modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative",children:[Object(d.jsx)("div",{className:"modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark",children:Object(d.jsx)("h5",{className:" text-primary-dark dark:text-primary-light text-xl",children:"Contact ME with Email   \u2002"})}),Object(d.jsx)("div",{className:"modal-body p-5 w-full h-full",children:Object(d.jsx)(g.a,{})}),Object(d.jsx)("div",{className:"modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right",children:Object(d.jsx)("span",{onClick:t,type:"button",className:"px-4\r sm:px-6\r py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light\r rounded-md\r focus:ring-1 focus:ring-indigo-900 duration-500","aria-label":"Close Modal",children:Object(d.jsx)(h.a,{title:"Close"})})})]})})})]})},y=a.p+"static/media/logo-dark.0fface49.png",p=a.p+"static/media/logo-light.020dd60b.png";var O=()=>{const[e,t]=Object(s.useState)(!1),[a,r]=Object(s.useState)(!1),[c,n]=Object(b.a)();function o(){a?(document.getElementsByTagName("html")[0].classList.remove("overflow-y-hidden"),r(!1)):(document.getElementsByTagName("html")[0].classList.add("overflow-y-hidden"),r(!0))}return Object(d.jsxs)(j.a.nav,{initial:{opacity:0},animate:{opacity:1},id:"nav",className:"sm:container sm:mx-auto",children:[Object(d.jsxs)("div",{className:"z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6",children:[Object(d.jsxs)("div",{className:"flex justify-between items-center px-4 sm:px-0",children:[Object(d.jsx)("div",{children:Object(d.jsx)(l.b,{to:"/Portfolio",children:"dark"===c?Object(d.jsx)("img",{src:p,className:"w-36",alt:"Dark Logo"}):Object(d.jsx)("img",{src:y,className:"w-36",alt:"Dark Logo"})})}),Object(d.jsx)("div",{onClick:()=>n(c),"aria-label":"Theme Switcher",className:"block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer",children:"dark"===c?Object(d.jsx)(i.h,{className:"text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl"}):Object(d.jsx)(i.j,{className:"text-gray-200 hover:text-gray-50 text-xl"})}),Object(d.jsx)("div",{className:"sm:hidden",children:Object(d.jsx)("button",{onClick:function(){t(!e)},type:"button",className:"focus:outline-none","aria-label":"Hamburger Menu",children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light",children:e?Object(d.jsx)(i.l,{className:"text-3xl"}):Object(d.jsx)(i.g,{className:"text-3xl"})})})})]}),Object(d.jsxs)("div",{className:e?"block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none":"hidden",children:[Object(d.jsx)(l.b,{to:"/projects",className:"block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2","aria-label":"Projects",children:"Projects"}),Object(d.jsx)(l.b,{to:"/about",className:"block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"About Me",children:"About Me"}),Object(d.jsx)(l.b,{to:"/contact",className:"block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"Contact",children:"Contact"}),Object(d.jsx)("div",{className:"border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark",children:Object(d.jsx)("span",{onClick:o,className:"font-general-medium sm:hidden block text-left text-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-300 w-24","aria-label":"Hire Me Button",children:Object(d.jsx)(h.a,{title:"Hire Me"})})})]}),Object(d.jsxs)("div",{className:"font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none",children:[Object(d.jsx)(l.b,{to:"/projects",className:"block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2","aria-label":"Projects",children:"Projects"}),Object(d.jsx)(l.b,{to:"/about",className:"block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2","aria-label":"About Me",children:"About Me"}),Object(d.jsx)(l.b,{to:"/contact",className:"block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2","aria-label":"Contact",children:"Contact"})]}),Object(d.jsxs)("div",{className:"hidden sm:flex justify-between items-center flex-col md:flex-row",children:[Object(d.jsx)("div",{className:"hidden md:flex",children:Object(d.jsx)("span",{onClick:o,className:"text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300","aria-label":"Hire Me Button",children:Object(d.jsx)(h.a,{title:"Hire Me"})})}),Object(d.jsx)("div",{onClick:()=>n(c),"aria-label":"Theme Switcher",className:"ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer",children:"dark"===c?Object(d.jsx)(i.h,{className:"text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl"}):Object(d.jsx)(i.j,{className:"text-gray-200 hover:text-gray-50 text-xl"})})]})]}),Object(d.jsxs)("div",{children:[a?Object(d.jsx)(u,{onClose:o,onRequest:o}):null,a?o:null]})]})};a(30);var k=()=>{const[e,t]=Object(s.useState)(!1);Object(s.useEffect)((()=>(window.addEventListener("scroll",a),function(){window.removeEventListener("scroll",a)})));const a=()=>{!e&&window.pageYOffset>400?t(!0):e&&window.pageYOffset<=400&&t(!1)};return window.addEventListener("scroll",a),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(i.b,{className:"scrollToTop",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},style:{height:45,width:45,borderRadius:50,right:50,bottom:50,display:e?"flex":"none",padding:5}})})};const f=Object(s.lazy)((()=>a.e(6).then(a.bind(null,53)))),v=Object(s.lazy)((()=>a.e(7).then(a.bind(null,56)))),w=Object(s.lazy)((()=>a.e(3).then(a.bind(null,55)))),N=Object(s.lazy)((()=>a.e(4).then(a.bind(null,51)))),C=Object(s.lazy)((()=>a.e(5).then(a.bind(null,54))));var z=function(){return Object(d.jsx)(r.a,{children:Object(d.jsxs)("div",{className:" bg-secondary-light dark:bg-primary-dark transition duration-300",children:[Object(d.jsxs)(l.a,{children:[Object(d.jsx)(n,{}),Object(d.jsx)(O,{}),Object(d.jsx)(s.Suspense,{fallback:"",children:Object(d.jsxs)(c.c,{children:[Object(d.jsx)(c.a,{path:"/Portfolio",element:Object(d.jsx)(w,{})}),Object(d.jsx)(c.a,{path:"projects",element:Object(d.jsx)(N,{})}),Object(d.jsx)(c.a,{path:"projects/single-project",element:Object(d.jsx)(C,{})}),Object(d.jsx)(c.a,{path:"about",element:Object(d.jsx)(f,{})}),Object(d.jsx)(c.a,{path:"contact",element:Object(d.jsx)(v,{})})]})}),Object(d.jsx)(x,{})]}),Object(d.jsx)(k,{})]})})};var E=e=>{e&&e instanceof Function&&a.e(8).then(a.bind(null,52)).then((t=>{let{getCLS:a,getFID:r,getFCP:s,getLCP:l,getTTFB:c}=t;a(e),r(e),s(e),l(e),c(e)}))},L=a(26);const M=document.getElementById("root");Object(L.createRoot)(M).render(Object(d.jsx)(z,{})),E()}},[[38,1,2]]]);
//# sourceMappingURL=main.78da6469.chunk.js.map