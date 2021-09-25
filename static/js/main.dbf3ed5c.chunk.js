(this["webpackJsonpmy-portfolio-project"]=this["webpackJsonpmy-portfolio-project"]||[]).push([[0],{54:function(e,t,s){},56:function(e,t,s){},66:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){},71:function(e,t,s){},78:function(e,t,s){},80:function(e,t,s){"use strict";s.r(t);var a=s(0),i=s.n(a),c=s(11),n=s.n(c),o=(s(54),s(55),s(6)),r=s(98),l=s(99),d=(s(56),s(26)),j=s.n(d),m=s(28),h=s.n(m),b=s(27),p=s.n(b),f=s(29),g=s.n(f),u=s(1),x=function(){var e=Object(a.useState)(window.innerWidth),t=Object(o.a)(e,2),s=t[0],i=t[1],c=function(){i(window.innerWidth)};return Object(a.useEffect)((function(){return c(),window.addEventListener("resize",c),function(){return window.removeEventListener("resize",c)}}),[]),Object(u.jsx)("div",{className:"fixed ",children:Object(u.jsx)("div",{className:s>767?"px-5":"px-2",children:Object(u.jsxs)(r.a,{collapseOnSelect:!0,expand:"lg",className:" p-0",children:[Object(u.jsx)(r.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(u.jsxs)(r.a.Collapse,{id:"responsive-navbar-nav",children:[Object(u.jsxs)(l.a,{className:"mr-auto ml-4 nav-left-side",children:[Object(u.jsx)(l.a.Link,{href:"#home",className:"nav-item",children:"Home"}),Object(u.jsx)(l.a.Link,{href:"#about",className:"nav-item",children:"About"}),Object(u.jsx)(l.a.Link,{href:"#skills",className:"nav-item",children:"Skills"}),Object(u.jsx)(l.a.Link,{href:"#projects",className:"nav-item",children:"Projects"}),Object(u.jsx)(l.a.Link,{href:"#certificate",className:"nav-item",children:"Certificate"})]}),Object(u.jsx)(l.a,{className:"ml-auto ".concat(s>767?"w-20":"mt-5 w-100"),children:Object(u.jsxs)("div",{className:"d-flex justify-content-between w-100",children:[Object(u.jsx)(l.a.Link,{href:"https://www.facebook.com/NawapatBuakoet/",className:"nav-item cursor-pointer",target:"_blank",children:Object(u.jsx)(j.a,{})}),Object(u.jsx)(l.a.Link,{href:"https://www.youtube.com/c/BeamKunGzMARK",className:"nav-item cursor-pointer",target:"_blank",children:Object(u.jsx)(p.a,{})}),Object(u.jsx)(l.a.Link,{href:"https://www.instagram.com/nawapatb.2b/",className:"nav-item cursor-pointer",target:"_blank",children:Object(u.jsx)(h.a,{})}),Object(u.jsx)(l.a.Link,{href:"https://github.com/BeamKunGzMARK",className:"nav-item cursor-pointer",target:"_blank",children:Object(u.jsx)(g.a,{})})]})})]})]})})})},O=(s(66),s(95)),v=s(96),N={hidden:{opacity:0},show:{opacity:1,y:0,transition:{duration:1,staggerChildren:.25}},exit:{opacity:0,y:300}},w={hidden:{y:100},show:{y:0,transition:{duration:1,ease:"easeOut"}}},k={hidden:{opacity:0,scale:1.2,transition:{duration:.5,ease:"easeOut"}},show:{opacity:1,scale:1,transition:{duration:.5,ease:"easeOut"}}},y={hidden:{opacity:1,scale:.95,transition:{duration:.5,ease:"easeOut"}},show:{opacity:1,scale:1,transition:{duration:.5,ease:"easeOut"}}},S={hidden:{opacity:0,transition:{duration:.5,ease:"easeOut"}},show:{opacity:1,transition:{duration:.5,ease:"easeOut"}}},_=s(42),C=s(7),L=function(){var e=Object(C.b)(),t=Object(_.a)({threshold:.3}),s=Object(o.a)(t,2),a=s[0];return s[1]?e.start("show"):e.start("hidden"),[a,e]},B=s(34),A=s.n(B),E=s(43),K=s.n(E),M=s(35),G=s.n(M),R=function(){var e=L(),t=Object(o.a)(e,2),s=t[0],i=t[1],c=Object(a.useState)(0),n=Object(o.a)(c,2),r=n[0],l=n[1];return Object(a.useEffect)((function(){void 0===G.a.get("_visit")?(fetch("http://nodeserverwithcatcrypto.herokuapp.com/portfolio",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({count:1})}).then((function(e){return e.json()})).then((function(e){l(e)})),G.a.set("_visit","yes",{expires:1})):fetch("http://nodeserverwithcatcrypto.herokuapp.com/portfolio",{method:"GET"}).then((function(e){return e.json()})).then((function(e){l(e)}))}),[]),Object(u.jsx)("div",{id:"home",className:"fix  ",children:Object(u.jsx)("div",{className:"bg-image",children:Object(u.jsx)(C.a.div,{variants:N,ref:s,animate:i,className:"container home-page-intro ",children:Object(u.jsx)(O.a,{className:"home-row",children:Object(u.jsx)(v.a,{md:8,xs:12,children:Object(u.jsxs)(C.a.div,{className:"intro-section",children:[Object(u.jsx)(C.a.h5,{variants:w,className:"mb-5",children:Object(u.jsxs)("div",{className:"grouping_f1",children:[Object(u.jsx)("p",{className:"turnrightf",children:"</ "}),Object(u.jsx)(A.a,{options:{strings:[" Time to Coding..."," Time to Study..."],autoStart:!0,loop:!0,wrapperClassName:"mb-4 chonburi-font"}}),Object(u.jsx)("p",{className:"turnleftf",children:" >"})]})}),Object(u.jsx)("div",{className:"grouping_flex",children:Object(u.jsxs)(C.a.h2,{variants:w,className:"mb-4 connection",children:["Hi, I'm"," ",Object(u.jsx)(A.a,{options:{strings:["Nawapat","Developer"],autoStart:!0,loop:!0,wrapperClassName:"mb-4 chonburi-font homec-text typelet"}})]})}),Object(u.jsx)("div",{className:"spacingbeforehome chonburi-font",children:Object(u.jsxs)(C.a.h2,{variants:w,className:"mb-4",children:["Visit"," ",Object(u.jsx)(K.a,{end:r,duration:3,className:"homec-text"})]})})]})})})})})})},z=s.p+"static/media/about-shape.1935a6be.svg",T=s(14),I=function(){var e=L(),t=Object(o.a)(e,2),s=t[0],a=t[1];return Object(u.jsxs)(C.a.div,{id:"about",className:"about pb-6 pt-6",children:[Object(u.jsx)("img",{className:"skills-img",src:z,alt:""}),Object(u.jsx)(C.a.div,{variants:window.innerWidth>767?k:null,ref:s,animate:a,className:"container",children:Object(u.jsxs)(O.a,{className:"down50",children:[Object(u.jsx)(v.a,{className:"p-0 text-center imgconfiger",md:5,children:Object(u.jsx)(T.a,{className:"img-fluid circle",placeholder:"/images/skills/lod.jpeg",src:"/images/Beam.png",error:"/images/skills/error.png",alt:"React Cool Img",onClick:function(e){throw new Error("this is a sentry error")},height:"50%"})}),Object(u.jsx)(v.a,{className:"",md:7,children:Object(u.jsxs)("div",{className:"about-info magin",children:[Object(u.jsxs)("h1",{className:"pb-4",children:[Object(u.jsx)("span",{className:"chonburi-font aboutc-text",children:"About"})," Me"]}),Object(u.jsx)("p",{className:"details",children:"My name is Nawapat, I was born on April 5, 2005. I always like to invest in learning. My motto is perseverance, determination, perseverance, always cultivating knowledge, never stopping to develop."}),Object(u.jsxs)("h1",{className:"pb-4 spacing_about",children:[Object(u.jsx)("span",{className:"chonburi-font aboutc-text",children:"My"})," School"]}),Object(u.jsx)("p",{className:"details",children:"Suankularb Wittiyalai Nonthaburi School."})]})})]})})]})},D=s(15),F=[{image:"/images/bkccharts.png",title:"Bkccharts",description:"Project demonstrating the movement of coins in Bitkub Chain.",source:"https://github.com/BeamKunGzMARK/Bkccharts",bitkub:"https://www.bitkubchain.com/th/app-directory/bkccharts/fd811321-9253-43a4-a421-fc486e982156",demoLink:"https://www.bkccharts.com",badge:"Tradingview bitkub express blockchain"},{image:"/images/frec.png",title:"Login Firebase",description:"Login Form by using ReactJS.",source:"https://github.com/BeamKunGzMARK/React_Firebaselogin",badge:"react",demoLink:"https://beamkungzmark.github.io/React_Firebaselogin/"},{image:"/images/visitors.png",title:"Data Analysis of Bkccharts",description:"Create Own Data Analysis by ExpressJS",source:"https://github.com/BeamKunGzMARK/Bkccharts",badge:"express",demoLink:"https://www.bkccharts.com/visitors.html"},{image:"/images/contract.png",title:"Lottery Contract",description:"Lottery Contract by using ReactJS",soruce:"https://github.com/BeamKunGzMARK/My-Study/tree/master/Solidity/Ethereum_and_Solidity_The_Complete_Developer's_Guide/lottery-react",badge:"react bitkub blockchain",demoLink:"https://catcryptotester-dev.web.app/"}],H=function(){var e=L(),t=Object(o.a)(e,2),s=t[0],a=t[1];return Object(u.jsx)("div",{className:"projects",id:"projects",children:Object(u.jsxs)(C.a.div,{variants:window.innerWidth>767?k:null,ref:s,animate:a,className:"container pt-6 pb-6",children:[Object(u.jsx)("div",{className:"heading-section",children:Object(u.jsxs)("h1",{children:[Object(u.jsx)("span",{className:"chonburi-font projectc-text",children:"Pro"}),"jects"]})}),Object(u.jsx)("div",{className:"projects-cards",children:Object(u.jsx)(O.a,{className:"justify-content-center",children:F.map((function(e,t){return Object(u.jsxs)(v.a,{md:4,className:"mb-5",children:[e.liveweb&&Object(u.jsx)(D.a,{className:"jdnkcjd",pill:!0,variant:"danger",children:Object(u.jsx)("a",{href:e.liveweb,target:"_blank",rel:"noreferrer",style:{textDecoration:"none",color:"white"},children:"Youtube"})}),e.badge.includes("react")&&Object(u.jsx)(D.a,{className:"rebd",pill:!0,variant:" ",children:Object(u.jsx)("a",{className:"Bottombadge",href:e.demoLink,target:"_blank",rel:"noreferrer",style:{textDecoration:"none",color:"white"},children:"React"})}),e.badge.includes("express")&&Object(u.jsx)(D.a,{className:"css3bd",pill:!0,variant:" ",children:Object(u.jsx)("a",{className:"Bottombadge",href:e.demoLink,target:"_blank",rel:"noreferrer",style:{textDecoration:"none",color:"white"},children:"ExpressJS"})}),e.badge.includes("blockchain")&&Object(u.jsx)(D.a,{className:"htmlbd",pill:!0,variant:" ",children:Object(u.jsx)("a",{className:"Bottombadge",href:e.bitkub,target:"_blank",rel:"noreferrer",style:{textDecoration:"none",color:"white"},children:"Blockchain"})}),e.badge.includes("bitkub")&&Object(u.jsx)(D.a,{className:"bkbd",pill:!0,variant:" ",children:Object(u.jsx)("a",{className:"Bottombadge",href:e.bitkub,target:"_blank",rel:"noreferrer",style:{textDecoration:"none",color:"white"},children:"Bitkub"})}),e.badge.includes("Tradingview")&&Object(u.jsx)(D.a,{className:"crtd",pill:!0,variant:" ",children:Object(u.jsx)("a",{className:"Bottombadge",href:e.demoLink,target:"_blank",rel:"noreferrer",style:{textDecoration:"none",color:"white"},children:"Tradingview"})}),Object(u.jsxs)("div",{className:"project-card",children:[Object(u.jsxs)("div",{className:"img-section",children:[Object(u.jsx)(T.a,{placeholder:"/images/skills/lod.jpeg",src:e.image,error:"/images/download.png",alt:"React Cool Img"}),Object(u.jsx)("div",{className:"imageCardEffect"})]}),Object(u.jsxs)("div",{className:"project-info",children:[Object(u.jsx)("h5",{className:"color-white font-weight-bold",children:e.title}),Object(u.jsx)("p",{className:"color-white",children:e.description}),Object(u.jsxs)("div",{className:"d-flex justify-content-between mr-4",children:[Object(u.jsx)("a",{href:e.source,className:"project-card-btn",target:"_blank",rel:"noreferrer",children:"Source Code"}),Object(u.jsx)("a",{href:e.demoLink,className:"project-card-btn",target:"_blank",rel:"noreferrer",children:"Live Demo"})]})]})]})]},t+1)}))})})]})})},J=(s(69),function(){return Object(u.jsx)("div",{className:"footer pb-5 pt-5 ",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)(O.a,{className:"justify-content-between align-items-center",children:[Object(u.jsx)(v.a,{md:1,xs:12,children:Object(u.jsxs)("div",{className:"d-flex justify-content-between footer-info mt-4",children:[Object(u.jsx)(l.a.Link,{href:"https://www.facebook.com/NawapatBuakoet/",className:"nav-item cursor-pointer",target:"_blank",children:Object(u.jsx)(j.a,{})}),Object(u.jsx)(l.a.Link,{href:"https://www.youtube.com/c/BeamKunGzMARK",className:"nav-item cursor-pointer",target:"_blank",children:Object(u.jsx)(p.a,{})}),Object(u.jsx)(l.a.Link,{href:"https://www.instagram.com/nawapatb.2b/",className:"nav-item cursor-pointer",target:"_blank",children:Object(u.jsx)(h.a,{})}),Object(u.jsx)(l.a.Link,{href:"https://github.com/BeamKunGzMARK",className:"nav-item cursor-pointer",target:"_blank",children:Object(u.jsx)(g.a,{})})]})}),Object(u.jsx)(v.a,{md:5,xs:12,children:Object(u.jsxs)("ul",{className:"d-flex justify-content-between p-0 w-100 footer-info mt-4 paddingright",children:[Object(u.jsx)("li",{className:"p-1",children:Object(u.jsx)("a",{href:"#home",children:"Home"})}),Object(u.jsx)("li",{className:"p-1",children:Object(u.jsx)("a",{href:"#about",children:"About"})}),Object(u.jsx)("li",{className:"p-1",children:Object(u.jsx)("a",{href:"#skills",children:"Skills"})}),Object(u.jsx)("li",{className:"p-1",children:Object(u.jsx)("a",{href:"#projects",children:"Projects"})}),Object(u.jsx)("li",{className:"p-1",children:Object(u.jsx)("a",{href:"#certificate",children:"Certificate"})})]})})]})})})}),W=(s(70),[{logo:"/images/skills/html.png",name:"Html",link:"https://www.w3schools.com/html/"},{logo:"/images/skills/css-3.png",name:"Css",link:"https://www.w3schools.com/css/"},{logo:"/images/skills/js.png",name:"Javascript",link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"},{logo:"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png",name:"NodeJS",link:"https://nodejs.org/en/docs/"},{logo:"/images/skills/react.png",name:"React",link:"https://reactjs.org/"},{logo:"https://vitejs.dev/logo.svg",name:"ViteJS",link:"https://vitejs.dev/"},{logo:"/images/skills/sass.png",name:"Sass",link:"https://sass-lang.com/"},{logo:"https://avatars.githubusercontent.com/u/70142?s=200&v=4",name:"jQuery",link:"https://api.jquery.com/"},{logo:"https://user-images.githubusercontent.com/39422342/129476993-3b4af55d-02f9-4361-8a31-ca8b777287b1.png",name:"Solidity",link:"https://docs.soliditylang.org/"},{logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1200px-Npm-logo.svg.png",name:"npm",link:"https://www.npmjs.com/"},{logo:"/images/skills/bootstrap.png",name:"Bootstrap",link:"https://getbootstrap.com/"},{logo:"https://camo.githubusercontent.com/ce9c7a173f38722e129d5ae832a11c928ff72683fae74cbcb9fff41fd9957e63/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f332f33662f4769745f69636f6e2e7376672f3130323470782d4769745f69636f6e2e7376672e706e67",name:"Git",link:"https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control"},{logo:"https://raw.githubusercontent.com/BeamKunGzMARK/BeamKunGzMARK/main/logo/mongodb.svg",name:"MongoDB",link:"https://docs.mongodb.com/guides/"},{logo:"https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png",name:"Firebase",link:"https://firebase.google.com/docs"},{logo:"https://camo.githubusercontent.com/c8e3501ae37f167ac272040a682d21945cec6e5f16c8abcb15b685328badf7c5/68747470733a2f2f7777772e616d6368617274732e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031372f31302f616d6368617274735f6c696768745f7472616e73706172656e742e706e67",name:"amCharts",link:"https://www.amcharts.com/"},{logo:"https://s3.tradingview.com/userpics/17360543-gbnD_orig.png",name:"Tradingview",link:"https://github.com/tradingview/charting-library-tutorial"},{logo:"https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg",name:"Heroku",link:"http://heroku.com/"},{logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Seal_of_the_Bank_of_Thailand.png/240px-Seal_of_the_Bank_of_Thailand.png",name:"Bot",link:"https://www.bot.or.th/Thai/Statistics/EconomicAndFinancial/Pages/API.aspx"}]),P=function(){var e=L(),t=Object(o.a)(e,2),s=t[0],a=t[1];return Object(u.jsx)("div",{id:"skills",className:"skills-section",children:Object(u.jsxs)(C.a.div,{variants:k,ref:s,animate:a,className:"container",children:[Object(u.jsx)("div",{className:"heading-section",children:Object(u.jsxs)("h1",{children:[Object(u.jsx)("span",{className:"chonburi-font skillc-text",children:"Ski"}),"lls"]})}),Object(u.jsx)(O.a,{xs:"auto",md:6,children:W.map((function(e,t){return"Heroku"===e.name||e.name,Object(u.jsx)(v.a,{children:Object(u.jsxs)("div",{className:"skills",children:[Object(u.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:Object(u.jsx)(T.a,{placeholder:"/images/skills/lod.jpeg",src:e.logo,className:e.name,error:"/images/skills/error.png",alt:"React Cool Img"})}),Object(u.jsxs)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:[" ",Object(u.jsx)("h6",{children:e.name})," "]})]})},t+1)}))})]})})},q=s(48),V=(s(71),s(44)),Y=s.n(V),Q=s(97),U=s(45),X=s.n(U),Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e=e.trim(),t?Object(q.a)(document.querySelectorAll(e)):document.querySelector(e)};window.addEventListener("load",(function(){var e=Z(".portfolio-container");if(e){var t=new Y.a(e,{itemSelector:".portfolio-item",layoutMode:"fitRows"}),s=Z("#portfolio-flters li",!0);!function(e,t,s){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];a?Z(t,a).forEach((function(t){return t.addEventListener(e,s)})):Z(t,a).addEventListener(e,s)}("click","#portfolio-flters li",(function(e){e.preventDefault(),s.forEach((function(e){e.classList.remove("filter-active")})),this.classList.add("filter-active"),t.arrange({filter:this.getAttribute("data-filter")})}),!0)}})),X()({selector:".portfokio-lightbox"}),new Q.a(".portfolio-details-slider",{speed:400,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0}});var $=function(){var e=L(),t=Object(o.a)(e,2),s=t[0],i=t[1],c=Object(a.useState)(window.innerWidth),n=Object(o.a)(c,2),r=n[0],l=n[1],d=function(){l(window.innerWidth)};return Object(a.useEffect)((function(){return d(),window.addEventListener("resize",d),function(){return window.removeEventListener("resize",d)}}),[]),Object(u.jsx)("div",{id:"certificate",className:"skills-section",children:Object(u.jsx)(C.a.div,{variants:r>767?k:y.show,ref:s,animate:i,className:"container",children:Object(u.jsx)("section",{id:"portfolio",className:"portfolio",children:Object(u.jsxs)("div",{className:"container","data-aos":"fade-up",children:[Object(u.jsx)("div",{className:"heading-section",children:Object(u.jsxs)("h1",{children:[Object(u.jsx)("span",{className:"chonburi-font certc-text",children:"Certi"}),"ficate"]})}),Object(u.jsx)("div",{className:"row","data-aos":"fade-up","data-aos-delay":"100",children:Object(u.jsx)("div",{className:"col-lg-12 d-flex justify-content-center",children:Object(u.jsxs)("ul",{id:"portfolio-flters",children:[Object(u.jsx)("li",{"data-filter":"*",className:"filter-active editor-filter",children:"All"}),Object(u.jsx)("li",{"data-filter":".filter-2020",className:"editor-filter",children:"2020"}),Object(u.jsx)("li",{"data-filter":".filter-2021",className:"editor-filter",children:"2021"}),Object(u.jsx)("li",{"data-filter":".filter-2022",className:"editor-filter",children:"2022"})]})})}),Object(u.jsxs)("div",{className:"row gy-4 portfolio-container","data-aos":"fade-up","data-aos-delay":"200",children:[Object(u.jsx)("div",{className:"col-lg-4 col-md-6 portfolio-item filter-2020",children:Object(u.jsxs)("div",{className:"portfolio-wrap",children:[Object(u.jsx)("img",{src:"/images/portfolio/MSP CERTIFICATE NATCHA.jpg",className:"img-fluid",alt:""}),Object(u.jsxs)("div",{className:"portfolio-info",children:[Object(u.jsx)("h4",{children:"Online Learning Hack"}),Object(u.jsx)("p",{children:"Microsoft"})]})]})}),Object(u.jsx)("div",{className:"col-lg-4 col-md-6 portfolio-item filter-2021",children:Object(u.jsxs)("div",{className:"portfolio-wrap",children:[Object(u.jsx)("img",{src:"/images/portfolio/Javascript freecodecamp.jpeg",className:"img-fluid",alt:""}),Object(u.jsxs)("div",{className:"portfolio-info",children:[Object(u.jsx)("h4",{children:"JS Algorithms and Data Structures"}),Object(u.jsx)("p",{children:"Microsoft"})]})]})}),Object(u.jsx)("div",{className:"col-lg-4 col-md-6 portfolio-item filter-2021",children:Object(u.jsxs)("div",{className:"portfolio-wrap",children:[Object(u.jsx)("img",{src:"/images/portfolio/Code Editor_page.jpg",className:"img-fluid",alt:""}),Object(u.jsxs)("div",{className:"portfolio-info",children:[Object(u.jsx)("h4",{children:"Code Editor"}),Object(u.jsx)("p",{children:"Grasshopper"})]})]})}),Object(u.jsx)("div",{className:"col-lg-4 col-md-6 portfolio-item filter-2021",children:Object(u.jsxs)("div",{className:"portfolio-wrap",children:[Object(u.jsx)("img",{src:"/images/portfolio/Coding Fundamentals I.jpg",className:"img-fluid",alt:""}),Object(u.jsxs)("div",{className:"portfolio-info",children:[Object(u.jsx)("h4",{children:"Coding Fundamentals"}),Object(u.jsx)("p",{children:"Grasshopper"})]})]})}),Object(u.jsx)("div",{className:"col-lg-4 col-md-6 portfolio-item filter-2021",children:Object(u.jsxs)("div",{className:"portfolio-wrap",children:[Object(u.jsx)("img",{src:"/images/portfolio/Coding Fundamentals II.jpg",className:"img-fluid",alt:""}),Object(u.jsxs)("div",{className:"portfolio-info",children:[Object(u.jsx)("h4",{children:"Coding Fundamentals II"}),Object(u.jsx)("p",{children:"Grasshopper"})]})]})}),Object(u.jsx)("div",{className:"col-lg-4 col-md-6 portfolio-item filter-2021",children:Object(u.jsxs)("div",{className:"portfolio-wrap",children:[Object(u.jsx)("img",{src:"/images/portfolio/Intro to Webpages_page.jpg",className:"img-fluid",alt:""}),Object(u.jsxs)("div",{className:"portfolio-info",children:[Object(u.jsx)("h4",{children:"Intro to Webpages"}),Object(u.jsx)("p",{children:"Grasshopper"})]})]})}),Object(u.jsx)("div",{className:"col-lg-4 col-md-6 portfolio-item filter-2021",children:Object(u.jsxs)("div",{className:"portfolio-wrap",children:[Object(u.jsx)("img",{src:"/images/portfolio/completion-for-essential-sql-for-everyone.jpg",className:"img-fluid",alt:""}),Object(u.jsxs)("div",{className:"portfolio-info",children:[Object(u.jsx)("h4",{children:"Essential SQL for Everyone"}),Object(u.jsx)("p",{children:"BorntoDev"})]})]})}),Object(u.jsx)("div",{className:"col-lg-4 col-md-6 portfolio-item filter-2021",children:Object(u.jsxs)("div",{className:"portfolio-wrap",children:[Object(u.jsx)("img",{src:"/images/portfolio/AI for Oceans.jpg",className:"img-fluid",alt:""}),Object(u.jsxs)("div",{className:"portfolio-info",children:[Object(u.jsx)("h4",{children:"AI for Oceans"}),Object(u.jsx)("p",{children:"Hour of Code"})]})]})}),Object(u.jsx)("div",{className:"col-lg-4 col-md-6 portfolio-item filter-2021",children:Object(u.jsxs)("div",{className:"portfolio-wrap",children:[Object(u.jsx)("img",{src:"/images/portfolio/Computer basic concepts.jpg",className:"img-fluid",alt:""}),Object(u.jsxs)("div",{className:"portfolio-info",children:[Object(u.jsx)("h4",{children:"Basic Concepts of Computer Science"}),Object(u.jsx)("p",{children:"Hour of Code"})]})]})}),Object(u.jsx)("div",{className:"col-lg-4 col-md-6 portfolio-item filter-2020",children:Object(u.jsxs)("div",{className:"portfolio-wrap",children:[Object(u.jsx)("img",{src:"/images/portfolio/School/\u0e04\u0e48\u0e32\u0e22STEM.jpg",className:"img-fluid",alt:""}),Object(u.jsxs)("div",{className:"portfolio-info",children:[Object(u.jsx)("h4",{children:"STEM Education"}),Object(u.jsx)("p",{children:"Suankularb Wittiyalai Nonthaburi"})]})]})}),Object(u.jsx)("div",{className:"col-lg-4 col-md-6 portfolio-item filter-2020",children:Object(u.jsxs)("div",{className:"portfolio-wrap",children:[Object(u.jsx)("img",{src:"/images/portfolio/Certificate minecraft Hour of code.jpg",className:"img-fluid",alt:""}),Object(u.jsxs)("div",{className:"portfolio-info",children:[Object(u.jsx)("h4",{children:"Minecraft"}),Object(u.jsx)("p",{children:"Hour of code"})]})]})})]})]})})})})},ee=s(46);window.customElements.define("codersrank-activity",ee.a);var te=function(){var e=L(),t=Object(o.a)(e,2),s=t[0],i=t[1],c=Object(a.useState)(window.innerWidth),n=Object(o.a)(c,2),r=n[0],l=n[1],d=function(){l(window.innerWidth)};return Object(a.useEffect)((function(){return d(),window.addEventListener("resize",d),function(){return window.removeEventListener("resize",d)}}),[]),Object(u.jsx)("div",{id:"skills",className:"skills-section",children:Object(u.jsxs)(C.a.div,{variants:r>767?S:S.show,ref:s,animate:i,className:"container",children:[Object(u.jsx)("div",{className:"heading-section",children:Object(u.jsxs)("h1",{children:[Object(u.jsx)("span",{className:"chonburi-font github-text",children:"My"}),"Profiles"]})}),Object(u.jsxs)(O.a,{className:"rowgithub",children:[Object(u.jsx)("codersrank-activity",{username:"BeamKunGzMARK",className:"paddinggithub",labels:!0,legend:!0,tooltip:!0,step:"1",branding:"false"}),Object(u.jsx)("img",{src:"https://activity-graph.herokuapp.com/graph?username=BeamKunGzMARK&theme=github",alt:"GitHub Activity Graph",className:"img-fluid paddinggithub"}),Object(u.jsx)("img",{src:"https://github-readme-stats.vercel.app/api?username=BeamKunGzMARK&bg_color=30,e96443,904e95&title_color=fff&text_color=fff",className:"img-fluid paddinggithub",alt:"BeamKunGzMARK Github stats"}),Object(u.jsx)("img",{src:"https://github-readme-stats.vercel.app/api/top-langs/?username=BeamKunGzMARK&layout=compact",className:"img-fluid paddinggithub",alt:"BeamKunGzMARK Github stats"})]})]})})},se=function(){return console.log("Starting..."),Object(u.jsxs)("div",{children:[Object(u.jsx)(x,{}),Object(u.jsx)(R,{}),Object(u.jsx)(I,{}),Object(u.jsx)(P,{}),Object(u.jsx)(H,{}),Object(u.jsx)(te,{}),Object(u.jsx)($,{}),Object(u.jsx)(J,{})]})},ae=s(47),ie=(s(78),function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),s=t[0],i=t[1];return window.addEventListener("scroll",(function(){!s&&window.pageYOffset>400?i(!0):s&&window.pageYOffset<=400&&i(!1)})),Object(u.jsx)(ae.a,{className:"scrollTop",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{height:40,display:s?"flex":"none"}})});var ce=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(se,{}),Object(u.jsx)(ie,{})]})},ne=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,100)).then((function(t){var s=t.getCLS,a=t.getFID,i=t.getFCP,c=t.getLCP,n=t.getTTFB;s(e),a(e),i(e),c(e),n(e)}))};n.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(ce,{})}),document.getElementById("root")),ne()}},[[80,1,2]]]);
//# sourceMappingURL=main.dbf3ed5c.chunk.js.map