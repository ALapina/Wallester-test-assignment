(this.webpackJsonpwallester2=this.webpackJsonpwallester2||[]).push([[0],{100:function(e,t,a){},114:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){},119:function(e,t,a){},218:function(e,t,a){},219:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(80),c=a.n(s),i=(a(98),a(13)),u=a(3),l=(a(99),a(100),a(220)),j=a(2),o={en:{nativeName:"English",languageCode:"en"},es:{nativeName:"Spanish",languageCode:"es"}},b=function(){var e=Object(l.a)().i18n;return Object(j.jsx)("div",{className:"switch-languages",children:Object.keys(o).map((function(t){return Object(j.jsx)("button",{type:"submit",onClick:function(){return e.changeLanguage(t)},className:"switch-languages__language-button ".concat(o[t].languageCode),"aria-label":"change page language to ".concat(o[t].nativeName)},t)}))})},d=function(){return Object(j.jsx)("header",{className:"header",children:Object(j.jsxs)("div",{className:"header__wrapper",children:[Object(j.jsx)(i.b,{to:"/",children:Object(j.jsx)("h1",{children:"Fetch them all"})}),Object(j.jsx)(b,{})]})})},h=a(7),O=a(85),p=(a(114),a(84)),m=(a(115),function(){var e=Object(l.a)().t;return Object(j.jsxs)(i.b,{to:"/create-new-user",className:"create-new-user-button",children:[Object(j.jsx)(p.a,{className:"plus-icon"}),Object(j.jsx)("span",{className:"create-new-user-button__text",children:e("create-new-user-button")})]})}),x=(a(116),function(e){var t=e.title,a=e.showButton;return Object(j.jsxs)("div",{className:"users-header",children:[Object(j.jsx)("h2",{children:t}),a&&Object(j.jsx)(m,{})]})}),f=(a(117),function(e){for(var t=e.setCurrentPage,a=e.totalPages,n=e.currentPage,r=[],s=1;s<=a;s++)r.push(s);return Object(j.jsx)("div",{className:"pagination",children:Object(j.jsx)("ul",{className:"pagination__list",children:r.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)("button",{className:"pagination__page-number ".concat(e===n&&"active-page"),onClick:function(){return t(e)},children:e})},e)}))})})}),g=a(21),v=a.n(g),N=a(40);function w(e){return _.apply(this,arguments)}function _(){return(_=Object(N.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S,y=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(1),c=Object(h.a)(s,2),u=c[0],o=c[1],b=Object(n.useState)(1),d=Object(h.a)(b,2),p=d[0],m=d[1],g=Object(l.a)().t;return Object(n.useEffect)((function(){w("https://reqres.in/api/users?page=".concat(u)).then((function(e){r(e.data),o(e.page),m(e.total_pages)})).catch((function(e){return console.error(e)}))}),[u]),Object(j.jsx)("main",{children:Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)(x,{title:g("page-headers.part1"),showButton:!0}),Object(j.jsx)("div",{className:"users-list",children:a.map((function(e){return Object(j.jsxs)(i.b,{to:"/user/".concat(e.id),className:"users-list__user",children:[Object(j.jsxs)("span",{className:"users-list__name",children:[e.first_name," ",e.last_name]}),Object(j.jsx)(O.a,{})]},e.id)}))}),Object(j.jsx)(f,{totalPages:p,currentPage:u,setCurrentPage:o})]})})},C=(a(119),function(){var e=Object(n.useState)({}),t=Object(h.a)(e,2),a=t[0],r=t[1],s=Object(u.f)().id,c=Object(l.a)().t;return Object(n.useEffect)((function(){w("https://reqres.in/api/users/".concat(s)).then((function(e){r(e.data)})).catch((function(e){return console.error(e)}))}),[s]),Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)(x,{title:c("page-headers.part2"),showButton:!0}),Object(j.jsxs)("div",{className:"user-details",children:[Object(j.jsx)("img",{className:"user-details__avatar",src:a.avatar,alt:a.first_name}),Object(j.jsx)("div",{className:"dividing-line"}),Object(j.jsxs)("p",{children:[a.first_name," ",a.last_name]}),Object(j.jsx)("p",{className:"user-details__email",children:a.email})]})]})}),q=a(22),P=a(30),B=(a(218),new Date);B.setFullYear(B.getFullYear()-18),function(e){e.SoftwareEngineer="Software Engineer",e.Painter="Painter",e.BusDriver="Bus driver"}(S||(S={}));var k=P.b().shape({firstName:P.c().matches(/^[a-z\s]+$/i,"Only latin craracters pls").required("Required"),lastName:P.c().matches(/^[a-z\s]+$/i,"Only latin craracters pls").required("Required"),date:P.a().max(B,"Sorry you must be 18 years old").required("Required")});function E(){return(E=Object(N.a)(v.a.mark((function e(t,a){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D=function(){var e=Object(n.useState)(null),t=Object(h.a)(e,2),a=t[0],r=t[1];return Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)(x,{title:"Create New User",showButton:!1}),Object(j.jsx)(q.c,{initialValues:{firstName:"",lastName:"",position:"",date:""},validationSchema:k,onSubmit:function(e,t){var a=t.setSubmitting;(function(e,t){return E.apply(this,arguments)})("https://reqres.in/api/users/",e).then((function(e){r(e),console.log(e)})).catch((function(e){return console.error(e)})),a(!1)},children:function(e){var t=e.values,a=e.errors,n=e.touched,r=e.handleChange;return Object(j.jsxs)(q.b,{children:[Object(j.jsxs)("label",{children:["First Name:",Object(j.jsx)(q.a,{name:"firstName",placeholder:"enter your first name",required:!0}),a.firstName&&n.firstName&&Object(j.jsx)("div",{children:a.firstName})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("label",{children:["Last Name:",Object(j.jsx)(q.a,{className:a.lastName&&n.lastName?"red":null,name:"lastName",placeholder:"enter your last name",required:!0}),a.lastName&&n.lastName?Object(j.jsx)("div",{children:a.lastName}):null]}),Object(j.jsx)("br",{}),Object(j.jsxs)("label",{children:["Occupation",Object(j.jsxs)("select",{onChange:r,name:"position",value:t.position,required:!0,children:[Object(j.jsx)("option",{value:"",label:"Select occupation",disabled:!0,hidden:!0}),Object(j.jsx)("option",{value:S.SoftwareEngineer,children:S.SoftwareEngineer}),Object(j.jsx)("option",{value:S.Painter,children:S.Painter}),Object(j.jsx)("option",{value:S.BusDriver,children:S.BusDriver})]})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("label",{children:["Date of Birth:",Object(j.jsx)(q.a,{required:!0,type:"date",name:"date",className:"date-picker ".concat(a.date?"red":"green")}),a.date&&n.date?Object(j.jsx)("div",{children:a.date}):null]}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{type:"submit",children:"Submit"})]})}}),a&&Object(j.jsxs)("div",{children:["Response result: ",JSON.stringify(a)]})]})};var J=function(){return Object(j.jsxs)(i.a,{children:[Object(j.jsx)(d,{}),Object(j.jsxs)(u.c,{children:[Object(j.jsx)(u.a,{path:"/user/:id",children:Object(j.jsx)(C,{})}),Object(j.jsx)(u.a,{path:"/create-new-user",children:Object(j.jsx)(D,{})}),Object(j.jsx)(u.a,{path:"/",children:Object(j.jsx)(y,{})})]})]})},U=a(57),F=a(29),L={en:{translation:a(92)},es:{translation:a(93)}};U.a.use(F.e).init({lng:"en",resources:L});U.a;c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(J,{})}),document.getElementById("root"))},92:function(e){e.exports=JSON.parse('{"page-headers":{"part1":"User List","part2":"User Details","part3":"Create New User"},"create-new-user-button":"Create New User"}')},93:function(e){e.exports=JSON.parse('{"page-headers":{"part1":"Lista de usuarios","part2":"Detalles de usuario","part3":"Crear nueva usuaria"},"create-new-user-button":"Crear Nueva Usuaria"}')},98:function(e,t,a){},99:function(e,t,a){}},[[219,1,2]]]);
//# sourceMappingURL=main.3ce8a653.chunk.js.map