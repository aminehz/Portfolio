"use strict";(self.webpackChunkPortfolio=self.webpackChunkPortfolio||[]).push([[345],{448:(e,t,a)=>{a.d(t,{A:()=>g});var i=a(5043),r=a(1009),n=a(1605),s=a(5369),c=a(579);const o=e=>{let{title:t,category:a,image:i,githubLink:r}=e;return(0,c.jsx)(n.P.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},children:(0,c.jsxs)("div",{className:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",children:[(0,c.jsx)("div",{style:{height:"300px"},children:(0,c.jsx)("img",{src:i,className:"rounded-t-xl border-none",alt:"Single Project",style:{width:"400px",height:"250px"}})}),(0,c.jsxs)("div",{className:"text-center px-4 py-6",children:[(0,c.jsx)("p",{className:"font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:t}),(0,c.jsx)("span",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:a})]}),(0,c.jsx)("span",{className:"flex justify-center items-center pb-4 text-lg text-ternary-dark dark:text-ternary-light",children:(0,c.jsx)("a",{target:"_blank",href:r,children:(0,c.jsx)(s.hL4,{})})})]})})};var d=a(4108);const l=["Machine Learning","Data Processing","Web Application","Mobile Application","Devops"],m=e=>{let{setSelectProject:t}=e;return(0,c.jsxs)("select",{onChange:e=>{t(e.target.value)},className:"font-general-medium \r px-4\r sm:px-6\r py-2\r border\r dark:border-secondary-dark\r rounded-lg\r text-sm\r sm:text-md\r dark:font-medium\r bg-secondary-light\r dark:bg-ternary-dark\r text-primary-dark\r dark:text-ternary-light\r ",children:[(0,c.jsx)("option",{value:t,className:"text-sm sm:text-md",children:"All Projects"}),l.map((e=>(0,c.jsx)("option",{className:"text-normal sm:text-md",children:e},e)))]})},g=()=>{const{projects:e,searchProject:t,setSearchProject:a,searchProjectsByTitle:n,selectProject:s,setSelectProject:l,selectProjectsByCategory:g}=(0,i.useContext)(d.Y);return(0,c.jsxs)("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[(0,c.jsx)("div",{className:"text-center",children:(0,c.jsx)("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"Projects portfolio"})}),(0,c.jsxs)("div",{className:"mt-10 sm:mt-16",children:[(0,c.jsx)("h3",{className:"font-general-regular \r text-center text-secondary-dark\r dark:text-ternary-light\r text-md\r sm:text-xl\r mb-3\r ",children:"Search projects by title or filter by category"}),(0,c.jsxs)("div",{className:"\r flex\r justify-between\r border-b border-primary-light\r dark:border-secondary-dark\r pb-3\r gap-3\r ",children:[(0,c.jsxs)("div",{className:"flex justify-between gap-2",children:[(0,c.jsx)("span",{className:"\r hidden\r sm:block\r bg-primary-light\r dark:bg-ternary-dark\r p-2.5\r shadow-sm\r rounded-xl\r cursor-pointer\r ",children:(0,c.jsx)(r.CKj,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"})}),(0,c.jsx)("input",{onChange:e=>{a(e.target.value)},className:"font-general-medium \r pl-3\r pr-1\r sm:px-4\r py-2\r border \r border-gray-200\r dark:border-secondary-dark\r rounded-lg\r text-sm\r sm:text-md\r bg-secondary-light\r dark:bg-ternary-dark\r text-primary-dark\r dark:text-ternary-light\r ",id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"})]}),(0,c.jsx)(m,{setSelectProject:l})]})]}),(0,c.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:s?g.map((e=>(0,c.jsx)(o,{title:e.title,category:e.category,image:e.img,githubLink:e.githubLink},e.id))):t?n.map((e=>(0,c.jsx)(o,{title:e.title,category:e.category,image:e.img,githubLink:e.githubLink},e.id))):e.map((e=>(0,c.jsx)(o,{title:e.title,category:e.category,image:e.img,githubLink:e.githubLink},e.id)))})]})}},4108:(e,t,a)=>{a.d(t,{Y:()=>m,S:()=>g});var i=a(5043),r=a(8135);a(3912),a(8451),a(2388),a(2915);const n=a.p+"static/media/devops.c0c40c70e3c39a72a6db.jpg",s=(a.p,a.p+"static/media/real time.bdf3a261e9c08e0c8eb3.png"),c=a.p+"static/media/supersense.4ca5a7a757cf8b6aac93.png",o=(a.p,a.p+"static/media/3.16b5bb0fcd9b203c900e.jpg"),d=[{id:1,title:"Agricure-Mobile App AI Plants disease Detection",category:"Machine Learning",img:r,githubLink:"https://github.com/aminehz/Agricure-Mobile-Application"},{id:3,title:"Tunisian Car Price Prediction & data processing",category:"Machine Learning",img:a.p+"static/media/carPrediction.5e76995476a0ffe71578.jpeg",githubLink:"https://github.com/aminehz/Tunisian-Car-Price-Prediction"},{id:4,title:"Management of a fitness center",category:"Web Application",img:a.p+"static/media/project.b04e9ad8b1d47c9d2a3a.png",githubLink:"https://github.com/aminehz/GYM-Web-Application"},{id:5,title:"Invoice Management",category:"Web Application",img:a.p+"static/media/login.17d97ef227d73aa5c8b2.png",githubLink:"https://github.com/aminehz/Bill-s-management"},{id:6,title:"Devops",category:"Devops",img:n,githubLink:""},{id:7,title:"SmartIrrigation-Mobile-application ",category:"Mobile Application",img:o,githubLink:"https://github.com/aminehz/SmartIrrigation-Mobile-application"},{id:8,title:"Supersense",category:"Web Application",img:c,githubLink:"https://github.com/aminehz/SmartLogger"},{id:10,title:"Real-Time-Object-Detection AI Model",category:"Machine Learning",img:s,githubLink:"https://github.com/aminehz/aminehz-Real-Time-Object-Detection-Model"},{id:11,title:"Future Sales Prediction AI Model",category:"Machine Learning",img:a.p+"static/media/Future Sales.1f35405ea789bbb72a5b.png",githubLink:"https://github.com/aminehz/AI-Model-Future-Sales-Prediction"},{id:12,title:"Email Spam Detection AI Model",category:"Machine Learning",img:a.p+"static/media/email spam detection.8efbc75db013d4eac021.png",githubLink:"https://github.com/aminehz/AI-Model-Email-Spam-detection"},{id:13,title:"Credit Card Fraud Detection AI Model",category:"Machine Learning",img:a.p+"static/media/credit card fraud detection.62991ff1b3d2d3b4c8ed.jpg",githubLink:"https://github.com/aminehz/AI-Model-Credit-Card-Fraud-Detection"},{id:14,title:"Brain Cancer Detection AI Model",category:"Machine Learning",img:a.p+"static/media/brainCancer.30cd6011f128230698e2.jpg",githubLink:"https://github.com/aminehz/AI-Model-Brain-Cancer-detection"},{id:15,title:"TMN Newspaper web site application",category:"Web Application",img:a.p+"static/media/interface user.b92ded729d14344b3df7.png",githubLink:"https://github.com/aminehz/TMN-Website-1"}];var l=a(579);const m=(0,i.createContext)(),g=e=>{const[t,a]=(0,i.useState)(d),[r,n]=(0,i.useState)(""),[s,c]=(0,i.useState)(""),o=t.filter((e=>e.title.toLowerCase().includes(r.toLowerCase())||""===r?e:"")),g=t.filter((e=>(e.category.charAt(0).toUpperCase()+e.category.slice(1)).includes(s)));return(0,l.jsx)(m.Provider,{value:{projects:t,setProjects:a,searchProject:r,setSearchProject:n,searchProjectsByTitle:o,selectProject:s,setSelectProject:c,selectProjectsByCategory:g},children:e.children})}},5814:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var i=a(3364),r=a(1009),n=a(8921),s=a(1605);const c=a.p+"static/media/Harzallah Mohamed Amine.19e910ce20273b411134.pdf";var o=a(579);const d=()=>{const[e]=(0,i.A)();return(0,o.jsxs)(s.P.section,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2",children:[(0,o.jsxs)("div",{className:"w-full md:w-1/3 text-left",children:[(0,o.jsx)(s.P.h1,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.1},className:"font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase",children:"Hi, I am Mohamed Amine"}),(0,o.jsx)(s.P.p,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200",children:"My name is Med Amine HARZALLAH , I am a freshly graduated Computer Science Engineer from the Polytechnic School of Sousse(EUR-ACE, CTI). Passionate about technological innovation, I have acquired advanced expertise in designing AI solutions and advanced web technologies."}),(0,o.jsx)(s.P.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.3},className:"flex justify-center sm:block",children:(0,o.jsxs)("button",{onClick:()=>{const e=c,t=document.createElement("a");t.href=e,t.download="amine_resume.pdf",document.body.appendChild(t),t.click(),document.body.removeChild(t)},className:"font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500","aria-label":"Download Resume",children:[(0,o.jsx)(r.Z25,{className:"mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"}),(0,o.jsx)("span",{className:"text-sm sm:text-lg font-general-medium duration-100",children:"Download CV"})]})})]}),(0,o.jsx)(s.P.div,{initial:{opacity:0,y:-180},animate:{opacity:1,y:0},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0",children:(0,o.jsx)("img",{src:n,alt:"Developer"})})]})};var l=a(448),m=a(4108);a(6089);const g=()=>(0,o.jsxs)("div",{className:"container mx-auto",children:[(0,o.jsx)(d,{}),(0,o.jsx)(m.S,{children:(0,o.jsx)(l.A,{})})]})},8451:(e,t,a)=>{e.exports=a.p+"static/media/mobile-project-1.0aa0cb76fed1b95c21d8.jpg"},2388:(e,t,a)=>{e.exports=a.p+"static/media/mobile-project-2.a5aae7867760d0c29dd2.jpg"},8921:(e,t,a)=>{e.exports=a.p+"static/media/profile.f786a628498caaf0f0e8.jpeg"},2915:(e,t,a)=>{e.exports=a.p+"static/media/ui-project-1.41def4d8652deca915b2.jpg"},8135:(e,t,a)=>{e.exports=a.p+"static/media/web-project-1.001ad147c819f153d9a2.jpg"},3912:(e,t,a)=>{e.exports=a.p+"static/media/web-project-2.f01087020cc02a54e124.jpg"}}]);
//# sourceMappingURL=345.2d61149a.chunk.js.map