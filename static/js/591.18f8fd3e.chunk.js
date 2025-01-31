"use strict";(self.webpackChunkPortfolio=self.webpackChunkPortfolio||[]).push([[591],{448:(e,t,r)=>{r.d(t,{A:()=>m});var i=r(5043),a=r(1009),c=r(1605),s=r(5369),n=r(579);const d=e=>{let{title:t,category:r,image:i,githubLink:a}=e;return(0,n.jsx)(c.P.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},children:(0,n.jsxs)("div",{className:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",children:[(0,n.jsx)("div",{style:{height:"300px"},children:(0,n.jsx)("img",{src:i,className:"rounded-t-xl border-none",alt:"Single Project",style:{width:"400px",height:"250px"}})}),(0,n.jsxs)("div",{className:"text-center px-4 py-6",children:[(0,n.jsx)("p",{className:"font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:t}),(0,n.jsx)("span",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:r})]}),(0,n.jsx)("span",{className:"flex justify-center items-center pb-4 text-lg text-ternary-dark dark:text-ternary-light",children:(0,n.jsx)("a",{target:"_blank",href:a,children:(0,n.jsx)(s.hL4,{})})})]})})};var o=r(4108);const l=["Machine Learning","Data Processing","Web Application","Mobile Application","Devops"],g=e=>{let{setSelectProject:t}=e;return(0,n.jsxs)("select",{onChange:e=>{t(e.target.value)},className:"font-general-medium \r px-4\r sm:px-6\r py-2\r border\r dark:border-secondary-dark\r rounded-lg\r text-sm\r sm:text-md\r dark:font-medium\r bg-secondary-light\r dark:bg-ternary-dark\r text-primary-dark\r dark:text-ternary-light\r ",children:[(0,n.jsx)("option",{value:t,className:"text-sm sm:text-md",children:"All Projects"}),l.map((e=>(0,n.jsx)("option",{className:"text-normal sm:text-md",children:e},e)))]})},m=()=>{const{projects:e,searchProject:t,setSearchProject:r,searchProjectsByTitle:c,selectProject:s,setSelectProject:l,selectProjectsByCategory:m}=(0,i.useContext)(o.Y);return(0,n.jsxs)("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[(0,n.jsx)("div",{className:"text-center",children:(0,n.jsx)("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"Projects portfolio"})}),(0,n.jsxs)("div",{className:"mt-10 sm:mt-16",children:[(0,n.jsx)("h3",{className:"font-general-regular \r text-center text-secondary-dark\r dark:text-ternary-light\r text-md\r sm:text-xl\r mb-3\r ",children:"Search projects by title or filter by category"}),(0,n.jsxs)("div",{className:"\r flex\r justify-between\r border-b border-primary-light\r dark:border-secondary-dark\r pb-3\r gap-3\r ",children:[(0,n.jsxs)("div",{className:"flex justify-between gap-2",children:[(0,n.jsx)("span",{className:"\r hidden\r sm:block\r bg-primary-light\r dark:bg-ternary-dark\r p-2.5\r shadow-sm\r rounded-xl\r cursor-pointer\r ",children:(0,n.jsx)(a.CKj,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"})}),(0,n.jsx)("input",{onChange:e=>{r(e.target.value)},className:"font-general-medium \r pl-3\r pr-1\r sm:px-4\r py-2\r border \r border-gray-200\r dark:border-secondary-dark\r rounded-lg\r text-sm\r sm:text-md\r bg-secondary-light\r dark:bg-ternary-dark\r text-primary-dark\r dark:text-ternary-light\r ",id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"})]}),(0,n.jsx)(g,{setSelectProject:l})]})]}),(0,n.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:s?m.map((e=>(0,n.jsx)(d,{title:e.title,category:e.category,image:e.img,githubLink:e.githubLink},e.id))):t?c.map((e=>(0,n.jsx)(d,{title:e.title,category:e.category,image:e.img,githubLink:e.githubLink},e.id))):e.map((e=>(0,n.jsx)(d,{title:e.title,category:e.category,image:e.img,githubLink:e.githubLink},e.id)))})]})}},4108:(e,t,r)=>{r.d(t,{Y:()=>g,S:()=>m});var i=r(5043),a=r(8135);r(3912),r(8451),r(2388),r(2915);const c=r.p+"static/media/devops.c0c40c70e3c39a72a6db.jpg",s=(r.p,r.p+"static/media/real time.bdf3a261e9c08e0c8eb3.png"),n=r.p+"static/media/supersense.4ca5a7a757cf8b6aac93.png",d=(r.p,r.p+"static/media/3.16b5bb0fcd9b203c900e.jpg"),o=[{id:1,title:"Agricure-Mobile App AI Plants disease Detection",category:"Machine Learning",img:a,githubLink:"https://github.com/aminehz/Agricure-Mobile-Application"},{id:3,title:"Tunisian Car Price Prediction & data processing",category:"Machine Learning",img:r.p+"static/media/carPrediction.5e76995476a0ffe71578.jpeg",githubLink:"https://github.com/aminehz/Tunisian-Car-Price-Prediction"},{id:4,title:"Management of a fitness center",category:"Web Application",img:r.p+"static/media/project.b04e9ad8b1d47c9d2a3a.png",githubLink:"https://github.com/aminehz/GYM-Web-Application"},{id:5,title:"Invoice Management",category:"Web Application",img:r.p+"static/media/login.17d97ef227d73aa5c8b2.png",githubLink:"https://github.com/aminehz/Bill-s-management"},{id:6,title:"Devops",category:"Devops",img:c,githubLink:""},{id:7,title:"SmartIrrigation-Mobile-application ",category:"Mobile Application",img:d,githubLink:"https://github.com/aminehz/SmartIrrigation-Mobile-application"},{id:8,title:"Supersense",category:"Web Application",img:n,githubLink:"https://github.com/aminehz/SmartLogger"},{id:10,title:"Real-Time-Object-Detection AI Model",category:"Machine Learning",img:s,githubLink:"https://github.com/aminehz/aminehz-Real-Time-Object-Detection-Model"},{id:11,title:"Future Sales Prediction AI Model",category:"Machine Learning",img:r.p+"static/media/Future Sales.1f35405ea789bbb72a5b.png",githubLink:"https://github.com/aminehz/AI-Model-Future-Sales-Prediction"},{id:12,title:"Email Spam Detection AI Model",category:"Machine Learning",img:r.p+"static/media/email spam detection.8efbc75db013d4eac021.png",githubLink:"https://github.com/aminehz/AI-Model-Email-Spam-detection"},{id:13,title:"Credit Card Fraud Detection AI Model",category:"Machine Learning",img:r.p+"static/media/credit card fraud detection.62991ff1b3d2d3b4c8ed.jpg",githubLink:"https://github.com/aminehz/AI-Model-Credit-Card-Fraud-Detection"},{id:14,title:"Brain Cancer Detection AI Model",category:"Machine Learning",img:r.p+"static/media/brainCancer.30cd6011f128230698e2.jpg",githubLink:"https://github.com/aminehz/AI-Model-Brain-Cancer-detection"},{id:15,title:"TMN Newspaper web site application",category:"Web Application",img:r.p+"static/media/interface user.b92ded729d14344b3df7.png",githubLink:"https://github.com/aminehz/TMN-Website-1"}];var l=r(579);const g=(0,i.createContext)(),m=e=>{const[t,r]=(0,i.useState)(o),[a,c]=(0,i.useState)(""),[s,n]=(0,i.useState)(""),d=t.filter((e=>e.title.toLowerCase().includes(a.toLowerCase())||""===a?e:"")),m=t.filter((e=>(e.category.charAt(0).toUpperCase()+e.category.slice(1)).includes(s)));return(0,l.jsx)(g.Provider,{value:{projects:t,setProjects:r,searchProject:a,setSearchProject:c,searchProjectsByTitle:d,selectProject:s,setSelectProject:n,selectProjectsByCategory:m},children:e.children})}},4283:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var i=r(448),a=r(4108),c=r(579);const s=()=>(0,c.jsx)(a.S,{children:(0,c.jsx)("div",{className:"container mx-auto",children:(0,c.jsx)(i.A,{})})})},8451:(e,t,r)=>{e.exports=r.p+"static/media/mobile-project-1.0aa0cb76fed1b95c21d8.jpg"},2388:(e,t,r)=>{e.exports=r.p+"static/media/mobile-project-2.a5aae7867760d0c29dd2.jpg"},2915:(e,t,r)=>{e.exports=r.p+"static/media/ui-project-1.41def4d8652deca915b2.jpg"},8135:(e,t,r)=>{e.exports=r.p+"static/media/web-project-1.001ad147c819f153d9a2.jpg"},3912:(e,t,r)=>{e.exports=r.p+"static/media/web-project-2.f01087020cc02a54e124.jpg"}}]);
//# sourceMappingURL=591.18f8fd3e.chunk.js.map