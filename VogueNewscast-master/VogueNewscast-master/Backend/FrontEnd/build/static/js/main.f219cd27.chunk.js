(this.webpackJsonpglass_card=this.webpackJsonpglass_card||[]).push([[0],{62:function(e,n,t){},63:function(e,n,t){},65:function(e,n,t){},67:function(e,n,t){},68:function(e,n,t){},93:function(e,n,t){},94:function(e,n,t){"use strict";t.r(n);var c=t(3),i=t.n(c),a=t(52),r=t.n(a),s=(t(62),t(25)),o=t(10),l=t(1),d=t(8),u=[{title:"Current Affairs",url:"/currentAffairs",cName:"nav-links"},{title:"Memes",url:"/Memes",cName:"nav-links"},{title:"Music",url:"/Music",cName:"nav-links"},{title:"Games",url:"/Games",cName:"nav-links"}],j=(t(63),t(4)),b=["btn--primary","btn--outline"],h=["btn--medium","btn--large"],f=function(e){var n=e.children,t=e.type,c=e.onClick,i=e.buttonStyle,a=e.buttonSize,r=b.includes(i)?i:b[0],s=h.includes(a)?a:h[0];return Object(j.jsx)("button",{className:"btn ".concat(r," ").concat(s),onClick:c,type:t,children:n})},m=(t(65),t(36)),x=t(53),O=t(24);Object(x.a)({apiKey:"AIzaSyBkos_jzuTYaNfRWCe-axaCMenpIlGamP4",authDomain:"vogue-newscast.firebaseapp.com",projectId:"vogue-newscast",storageBucket:"vogue-newscast.appspot.com",messagingSenderId:"372703361789",appId:"1:372703361789:web:77703bfd2d926468c7dc94",measurementId:"G-GH2GEJKX1E"});var p,g,v,w,y,k,N,S,C=Object(O.b)(),_=Object(c.createContext)(),G=function(e){var n=e.children,t=Object(c.useState)("null"),i=Object(d.a)(t,2),a=i[0],r=i[1];return Object(c.useEffect)((function(){C.onAuthStateChanged(r)}),[]),Object(j.jsx)(_.Provider,{value:{currentUser:a},children:n})},M=function(){var e,n=Object(c.useState)({clicked:!1}),t=Object(d.a)(n,2),i=t[0],a=t[1],r=Object(c.useContext)(_).currentUser,b=Object(o.f)();return Object(j.jsxs)("nav",{className:"NavbarItems",children:[Object(j.jsx)(s.b,{to:"/",className:"Nav_main_link",children:Object(j.jsx)("h1",{className:"navbar-logo",children:"Vogue Newscast"})}),Object(j.jsx)("div",{className:"menu-icon",onClick:function(){a({clicked:!undefined.state.clicked})},children:Object(j.jsx)("i",{className:i.clicked?"fas fa-times":"fas fa-bars"})}),Object(j.jsx)("ul",(e={className:i.clicked?"nav-menu active":"nav-menu"},Object(l.a)(e,"className",i.clicked?"nav-menu active":"nav-menu"),Object(l.a)(e,"children",u.map((function(e,n){return Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{className:e.cName,to:e.url,children:e.title})},n)}))),e)),null===r?Object(j.jsxs)("div",{className:"sign",children:[Object(j.jsx)(s.b,{to:"/Login",className:"Nav_main_link",children:Object(j.jsx)(f,{children:"Log In"})}),Object(j.jsx)("li",{className:"bullet"}),Object(j.jsx)(s.b,{to:"/Signup",className:"Nav_main_link",children:Object(j.jsx)(f,{children:"Sign Up"})})]}):Object(j.jsx)(f,{onClick:function(){C.signOut(),b("/")},children:"Sign Out"}),Object(j.jsx)("li",{className:"bullet"})]})},U=(t.p,t(67),t.p+"static/media/background2.f2b7a3d9.jpg"),I=(t(68),t(28)),L=t(23),z=t.n(L),E=function(){var e=Object(c.useState)([]),n=Object(d.a)(e,2),t=n[0],i=n[1];Object(c.useEffect)((function(){null!=C.currentUser&&z.a.get("/Tweets").then((function(e){i(e.data)})).catch((function(e){alert(e)}))}),[]);return Object(j.jsx)("div",{children:null!=C.currentUser?Object(j.jsx)("div",{className:"curr_aff_main",children:t.map((function(e){return Object(j.jsx)("div",{className:"indv_tweet",children:Object(j.jsx)(I.a,{tweetId:e})})}))}):Object(j.jsx)("h1",{children:"Login To Use This Service"})})},T=function(){var e=Object(c.useState)([]),n=Object(d.a)(e,2),t=n[0],i=n[1],a=Object(O.b)();Object(c.useEffect)((function(){null!=a.currentUser&&z.a.get("/GetGiphy").then((function(e){t.length=0,i(e.data)})).catch((function(e){alert(e)}))}),[]);return Object(j.jsx)("div",{children:null!=a.currentUser?Object(j.jsx)("div",{className:"curr_aff_main",children:t.map((function(e){return Object(j.jsx)("div",{className:"img_div",children:Object(j.jsx)("img",{src:e})})}))}):Object(j.jsx)("h1",{children:"Login To Use This Service"})})},A=t(31),P=t.n(A),W=function(){var e=Object(c.useState)([]),n=Object(d.a)(e,2),t=n[0],i=n[1];Object(c.useEffect)((function(){null!=C.currentUser&&z.a.get("/GetMusic").then((function(e){t.length=0,i(e.data)})).catch((function(e){alert(e)}))}));return Object(j.jsx)("div",{children:null!=C.currentUser?Object(j.jsx)("div",{className:"curr_aff_main",children:t.map((function(e){return Object(j.jsx)("div",{className:"y_div",children:Object(j.jsx)(P.a,{width:"100%",videoId:e,suggestions:!1})})}))}):Object(j.jsx)("h1",{children:"Login To Use This Service"})})},Y=function(){var e=Object(c.useState)([]),n=Object(d.a)(e,2),t=n[0],i=n[1],a=Object(O.b)();Object(c.useEffect)((function(){null!=a.currentUser&&z.a.get("/GetGames").then((function(e){i(e.data),console.log(t)})).catch((function(e){alert(e)}))}),[]);return Object(j.jsx)("div",{children:null!=a.currentUser?Object(j.jsx)("div",{className:"curr_aff_main",children:t.map((function(e){return Object(j.jsx)("div",{className:"y_div",children:Object(j.jsx)(P.a,{width:"100%",videoId:e,suggestions:!1})})}))}):Object(j.jsx)("h1",{children:"Login To Use This Service"})})},F=t(13),X=t(14);var D,B,H,J,K,R,V,q,Q=X.a.div(p||(p=Object(F.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  height: 80vh;\n  width: 30vw;\n  background: rgba(255, 255, 255, 0.15);\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(8.5px);\n  -webkit-backdrop-filter: blur(8.5px);\n  border-radius: 10px;\n  color: #ffffff;\n  text-transform: uppercase;\n  letter-spacing: 0.4rem;\n  @media only screen and (max-width: 320px) {\n    width: 80vw;\n    height: 90vh;\n    hr {\n      margin-bottom: 0.3rem;\n    }\n    h4 {\n      font-size: small;\n    }\n  }\n  @media only screen and (min-width: 360px) {\n    width: 80vw;\n    height: 90vh;\n    h4 {\n      font-size: small;\n    }\n  }\n  @media only screen and (min-width: 411px) {\n    width: 80vw;\n    height: 90vh;\n  }\n\n  @media only screen and (min-width: 768px) {\n    width: 80vw;\n    height: 80vh;\n  }\n  @media only screen and (min-width: 1024px) {\n    width: 70vw;\n    height: 50vh;\n  }\n  @media only screen and (min-width: 1280px) {\n    width: 30vw;\n    height: 80vh;\n  }\n"]))),Z=X.a.h2(g||(g=Object(F.a)(["\n  margin: 3rem 0 2rem 0;\n"]))),$=X.a.div(v||(v=Object(F.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  height: 20%;\n  width: 100%;\n"]))),ee=X.a.div(w||(w=Object(F.a)(["\n  margin: 1rem 0 2rem 0;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),ne=X.a.h5(y||(y=Object(F.a)(["\n  cursor: pointer;\n"]))),te=X.a.hr(k||(k=Object(F.a)(["\n  width: 90%;\n  height: 0.3rem;\n  border-radius: 0.8rem;\n  border: none;\n  background: linear-gradient(to right, #14163c 0%, #03217b 79%);\n  background-color: #ebd0d0;\n  margin: 1.5rem 0 1rem 0;\n  backdrop-filter: blur(25px);\n"]))),ce=(X.a.div(N||(N=Object(F.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  margin: 2rem 0 3rem 0;\n  width: 80%;\n"]))),X.a.h4(S||(S=Object(F.a)(["\n  cursor: pointer;\n"])))),ie=function(){var e=Object(c.useState)(""),n=Object(d.a)(e,2),t=n[0],i=n[1],a=Object(c.useState)(""),r=Object(d.a)(a,2),s=r[0],l=r[1],u=Object(c.useState)(""),b=Object(d.a)(u,2),h=b[0],x=b[1],O=Object(c.useState)(""),p=Object(d.a)(O,2),g=p[0],v=p[1],w=Object(o.f)();return Object(j.jsx)("div",{className:"body",children:Object(j.jsxs)(Q,{children:[Object(j.jsx)(Z,{children:"Welcome"}),Object(j.jsxs)($,{children:[Object(j.jsx)("input",{class:"space",type:"text",placeholder:"Email",value:t,onChange:function(e){return i(e.target.value)}}),Object(j.jsx)("input",{type:"text",placeholder:"Username",value:g,onChange:function(e){return v(e.target.value)}})]}),Object(j.jsxs)($,{children:[Object(j.jsx)("input",{type:"password",placeholder:"Password",value:s,onChange:function(e){return l(e.target.value)}}),Object(j.jsx)("input",{type:"password",placeholder:"Confirm Password",value:h,onChange:function(e){return x(e.target.value)}})]}),Object(j.jsx)(ee,{children:Object(j.jsx)(f,{content:"Sign Up",onClick:function(){h!==s||s.length<6||0===g.length?alert("Check your details"):Object(m.a)(C,t,s).then((function(){w("/Login"),alert("Account created \nLogin to enjoy")})).catch((function(e){alert("Some Thing Went Wrong\n"+e)}))},children:"SignUp"})}),Object(j.jsx)(ne,{}),Object(j.jsx)(te,{}),Object(j.jsx)(ce,{})]})})};var ae,re,se,oe,le,de,ue,je,be,he=X.a.div(D||(D=Object(F.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  height: 80vh;\n  width: 30vw;\n  background: rgba(255, 255, 255, 0.15);\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  backdrop-filter: blur(8.5px);\n  -webkit-backdrop-filter: blur(8.5px);\n  border-radius: 10px;\n  color: #ffffff;\n  text-transform: uppercase;\n  letter-spacing: 0.4rem;\n  @media only screen and (max-width: 320px) {\n    width: 80vw;\n    height: 90vh;\n    hr {\n      margin-bottom: 0.3rem;\n    }\n    h4 {\n      font-size: small;\n    }\n  }\n  @media only screen and (min-width: 360px) {\n    width: 80vw;\n    height: 90vh;\n    h4 {\n      font-size: small;\n    }\n  }\n  @media only screen and (min-width: 411px) {\n    width: 80vw;\n    height: 90vh;\n  }\n\n  @media only screen and (min-width: 768px) {\n    width: 80vw;\n    height: 80vh;\n  }\n  @media only screen and (min-width: 1024px) {\n    width: 70vw;\n    height: 50vh;\n  }\n  @media only screen and (min-width: 1280px) {\n    width: 30vw;\n    height: 80vh;\n  }\n"]))),fe=X.a.h2(B||(B=Object(F.a)(["\n  margin: 3rem 0 2rem 0;\n"]))),me=X.a.div(H||(H=Object(F.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  height: 20%;\n  width: 100%;\n"]))),xe=X.a.div(J||(J=Object(F.a)(["\n  margin: 1rem 0 2rem 0;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),Oe=(X.a.h5(K||(K=Object(F.a)(["\n  cursor: pointer;\n"]))),X.a.hr(R||(R=Object(F.a)(["\n  width: 90%;\n  height: 0.3rem;\n  border-radius: 0.8rem;\n  border: none;\n  background: linear-gradient(to right, #14163c 0%, #03217b 79%);\n  background-color: #ebd0d0;\n  margin: 1.5rem 0 1rem 0;\n  backdrop-filter: blur(25px);\n"])))),pe=(X.a.div(V||(V=Object(F.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  margin: 2rem 0 3rem 0;\n  width: 80%;\n"]))),X.a.h4(q||(q=Object(F.a)(["\n  cursor: pointer;\n"]))),function(){var e=Object(c.useState)(""),n=Object(d.a)(e,2),t=n[0],i=n[1],a=Object(c.useState)(""),r=Object(d.a)(a,2),s=r[0],l=r[1],u=Object(o.f)();return Object(j.jsx)("div",{className:"body",children:Object(j.jsxs)(he,{children:[Object(j.jsx)(fe,{children:"Welcome"}),Object(j.jsxs)(me,{children:[Object(j.jsx)("input",{type:"text",placeholder:"Email",value:t,onChange:function(e){return i(e.target.value)}}),Object(j.jsx)("input",{type:"password",placeholder:"Password",value:s,onChange:function(e){return l(e.target.value)}})]}),Object(j.jsx)(xe,{children:Object(j.jsx)(f,{content:"LOGIN",onClick:function(){Object(O.c)(C,t,s).then((function(){alert("Login successful"),u("/")})).catch((function(e){alert(e)}))},children:"Login"})}),Object(j.jsx)(Oe,{})]})})}),ge=(t.p,t(22)),ve=(t(93),Object(X.a)(ge.a.div)(ae||(ae=Object(F.a)(["\ndisplay: inline-block;\npadding: 3em;\nbackground: #C7D2FE66;\nborder-radius: 10px;\nz-index: 1;\nposition: relative;\nbackdrop-filter: blur(10px);\nborder: 2px solid transparent;\nbackground-clip: border-box;\ncursor: pointer;\nmargin: 2em;\n"])))),we=(X.a.h1(re||(re=Object(F.a)(['\n    line-heright: 1.5;\n    letter-spacing: 1.5;\n    font-family: "Gilroy";\n']))),X.a.h3(se||(se=Object(F.a)(['\n    line-heright: 1.5;\n    letter-spacing: 1.15;\n    font-family: "Gilroy";\n    font-size: 20px;\n'])))),ye=function(e,n){return[-(n-window.innerHeight/2)/20,(e-window.innerWidth/2)/20,1]},ke=function(e,n,t){return"perspective(600px) rotateX(".concat(e,"deg) rotateY(").concat(n,"deg) scale(").concat(t,")")},Ne=function(e){var n=Object(ge.c)((function(){return{xys:[0,0,1],config:ge.b.default}})),t=Object(d.a)(n,2),c=t[0],i=t[1];return Object(j.jsx)(ve,{onMouseMove:function(e){var n=e.clientX,t=e.clientY;return i({xys:ye(n,t)})},onMouseLeave:function(){return i({xys:[0,0,1]})},style:{transform:c.xys.interpolate(ke)},children:Object(j.jsx)(we,{children:Object(j.jsx)("div",{className:"rahul",children:e.tweets.map((function(e){return Object(j.jsx)(I.a,{tweetId:e})}))})})})},Se=Object(X.a)(ge.a.div)(oe||(oe=Object(F.a)(["\ndisplay: inline-block;\npadding: 3em;\nbackground: #C7D2FE66;\nborder-radius: 10px;\nz-index: 1;\nposition: relative;\nbackdrop-filter: blur(10px);\nborder: 2px solid transparent;\nbackground-clip: border-box;\ncursor: pointer;\nmargin: 2em;\n"]))),Ce=X.a.h1(le||(le=Object(F.a)(['\n    line-heright: 1.5;\n    letter-spacing: 1.5;\n    font-family: "Gilroy";\n']))),_e=(X.a.h3(de||(de=Object(F.a)(['\n    line-heright: 1.5;\n    letter-spacing: 1.15;\n    font-family: "Gilroy";\n    font-size: 20px;\n']))),function(e,n){return[-(n-window.innerHeight/2)/20,(e-window.innerWidth/2)/20,1]}),Ge=function(e,n,t){return"perspective(600px) rotateX(".concat(e,"deg) rotateY(").concat(n,"deg) scale(").concat(t,")")},Me=function(e){var n=Object(ge.c)((function(){return{xys:[0,0,1],config:ge.b.default}})),t=Object(d.a)(n,2),c=t[0],i=t[1];return Object(j.jsx)(Se,{onMouseMove:function(e){var n=e.clientX,t=e.clientY;return i({xys:_e(n,t)})},onMouseLeave:function(){return i({xys:[0,0,1]})},style:{transform:c.xys.interpolate(Ge)},children:Object(j.jsx)(Ce,{children:Object(j.jsx)("div",{className:"rahul",children:Object(j.jsx)("div",{children:e.urls.map((function(e){return Object(j.jsx)("img",{src:e})}))})})})})},Ue=Object(X.a)(ge.a.div)(ue||(ue=Object(F.a)(["\ndisplay: inline-block;\npadding: 3em;\nbackground: #C7D2FE66;\nborder-radius: 10px;\nz-index: 1;\nposition: relative;\nbackdrop-filter: blur(10px);\nborder: 2px solid transparent;\nbackground-clip: border-box;\ncursor: pointer;\nmargin: 2em;\n"]))),Ie=X.a.h1(je||(je=Object(F.a)(['\n    line-heright: 1.5;\n    letter-spacing: 1.5;\n    font-family: "Gilroy";\n']))),Le=(X.a.h3(be||(be=Object(F.a)(['\n    line-heright: 1.5;\n    letter-spacing: 1.15;\n    font-family: "Gilroy";\n    font-size: 20px;\n']))),function(e,n){return[-(n-window.innerHeight/2)/20,(e-window.innerWidth/2)/20,1]}),ze=function(e,n,t){return"perspective(600px) rotateX(".concat(e,"deg) rotateY(").concat(n,"deg) scale(").concat(t,")")},Ee=function(e){var n=Object(ge.c)((function(){return{xys:[0,0,1],config:ge.b.default}})),t=Object(d.a)(n,2),c=t[0],i=t[1];return Object(j.jsx)(Ue,{onMouseMove:function(e){var n=e.clientX,t=e.clientY;return i({xys:Le(n,t)})},onMouseLeave:function(){return i({xys:[0,0,1]})},style:{transform:c.xys.interpolate(ze)},children:Object(j.jsx)(Ie,{children:Object(j.jsx)("div",{className:"rahul",children:e.ids.map((function(e){return Object(j.jsx)(P.a,{width:"100%",videoId:e,suggestions:!1})}))})})})},Te=function(){var e=Object(c.useState)([]),n=Object(d.a)(e,2),t=n[0],i=n[1],a=Object(c.useState)([]),r=Object(d.a)(a,2),s=r[0],o=r[1],l=Object(c.useState)([]),u=Object(d.a)(l,2),b=u[0],h=u[1];return Object(c.useEffect)((function(){z.a.get("/").then((function(e){s.length=0,i(e.data[0]),o(e.data[1]),h(e.data[2])})).catch((function(e){alert(e)}))}),[]),Object(j.jsx)("div",{children:Object(j.jsxs)("p",{children:[Object(j.jsx)(Ne,{tweets:t}),Object(j.jsx)(Me,{urls:s}),Object(j.jsx)(Ee,{ids:b})]})})};var Ae=function(){return Object(j.jsx)(G,{children:Object(j.jsx)(s.a,{children:Object(j.jsxs)("div",{className:"App",style:{width:"100vw",height:"100vh",backgroundImage:"url(".concat(U,")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundAttachment:"scroll",overflow:"hidden",overflowY:"scroll"},children:[Object(j.jsx)(M,{}),Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",element:Object(j.jsx)(Te,{})}),Object(j.jsx)(o.a,{exact:!0,path:"/currentAffairs",element:Object(j.jsx)(E,{})}),Object(j.jsx)(o.a,{exact:!0,path:"/Memes",element:Object(j.jsx)(T,{})}),Object(j.jsx)(o.a,{exact:!0,path:"/Music",element:Object(j.jsx)(W,{})}),Object(j.jsx)(o.a,{exact:!0,path:"/Games",element:Object(j.jsx)(Y,{})}),Object(j.jsx)(o.a,{exact:!0,path:"/Signup",element:Object(j.jsx)(ie,{})}),Object(j.jsx)(o.a,{exact:!0,path:"/Login",element:Object(j.jsx)(pe,{})})]})]})})})},Pe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,95)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,a=n.getLCP,r=n.getTTFB;t(e),c(e),i(e),a(e),r(e)}))};r.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(Ae,{})}),document.getElementById("root")),Pe()}},[[94,1,2]]]);
//# sourceMappingURL=main.f219cd27.chunk.js.map