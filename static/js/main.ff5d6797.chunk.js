(this["webpackJsonp08-phonebook"]=this["webpackJsonp08-phonebook"]||[]).push([[1],{11:function(t,e,n){"use strict";n.r(e),n.d(e,"filterContact",(function(){return d})),n.d(e,"fetchContactsRequest",(function(){return r})),n.d(e,"fetchContactsSuccess",(function(){return a})),n.d(e,"fetchContactsError",(function(){return u})),n.d(e,"addContactRequest",(function(){return o})),n.d(e,"addContactSuccess",(function(){return i})),n.d(e,"addContactError",(function(){return s})),n.d(e,"deleteContactRequest",(function(){return b})),n.d(e,"deleteContactSuccess",(function(){return j})),n.d(e,"deleteContactError",(function(){return l}));var c=n(5),r=Object(c.b)("contacts/fetchContactsRequest"),a=Object(c.b)("contacts/fetchContactsSuccess"),u=Object(c.b)("contacts/fetchContactsError"),o=Object(c.b)("contacts/addContactRequest"),i=Object(c.b)("contacts/addContactSuccess"),s=Object(c.b)("contacts/addContactError"),b=Object(c.b)("contacts/deleteContactRequest"),j=Object(c.b)("contacts/deleteContactSuccess"),l=Object(c.b)("contacts/deleteContactError"),d=Object(c.b)("contacts/filter")},132:function(t,e,n){},133:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(22),u=n.n(a),o=n(21),i=n(14),s=n(73),b=n(8),j=n(23),l=(n(89),n(33)),d=n(49),f=n(16),O=n(2);function h(t){t.isAuthenticated;var e=t.redirectTo,n=t.children,c=Object(d.a)(t,["isAuthenticated","redirectTo","children"]),r=Object(i.c)(f.b.getIsAuthenticated);return Object(O.jsx)(b.b,Object(l.a)(Object(l.a)({},c),{},{children:r?n:Object(O.jsx)(b.a,{to:e})}))}function p(t){t.isAuthenticated;var e=t.redirectTo,n=t.children,c=Object(d.a)(t,["isAuthenticated","redirectTo","children"]),r=Object(i.c)(f.b.getIsAuthenticated);return Object(O.jsx)(b.b,Object(l.a)(Object(l.a)({},c),{},{children:r&&c.restricted?Object(O.jsx)(b.a,{to:e}):n}))}var v=n(74),g=n.n(v);var x=function(t){var e=t.children;return Object(O.jsx)("div",{className:g.a.container,children:e})},C=n(34),k=n.n(C);var m=function(){var t=Object(i.c)(f.b.getIsAuthenticated);return Object(O.jsxs)("nav",{className:k.a.nav,children:[Object(O.jsx)(o.b,{to:"/",exact:!0,className:k.a.link,activeClassName:k.a.activeLink,children:"HW-08"}),t&&Object(O.jsx)(o.b,{to:"/contacts",exact:!0,className:k.a.link,activeClassName:k.a.activeLink,children:"Contacts"})]})},y=n(148),_=n.p+"static/media/avatar.85cdbd6f.png",S=n(50),N=n.n(S);function E(){var t=Object(i.b)(),e=Object(i.c)(f.b.getUserName);return Object(O.jsxs)("div",{className:N.a.container,children:[Object(O.jsx)("img",{src:_,alt:"Default Avatar",width:"32",className:N.a.avatar}),Object(O.jsxs)("span",{className:N.a.name,children:["Welcome, ",e]}),Object(O.jsx)(y.a,{color:"secondary",variant:"outlined",type:"button",onClick:function(){return t(f.a.logOut())},children:"Log out"})]})}var w=n(41),A=n.n(w),R=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(o.b,{to:"/register",exact:!0,className:A.a.link,activeClassName:A.a.activeLink,children:"Sign up"}),Object(O.jsx)(o.b,{to:"/login",exact:!0,className:A.a.link,activeClassName:A.a.activeLink,children:"Log in"})]})},q=n(75),L=n.n(q);function U(){var t=Object(i.c)(f.b.getIsAuthenticated);return Object(O.jsxs)("header",{className:L.a.header,children:[Object(O.jsx)(m,{}),t?Object(O.jsx)(E,{}):Object(O.jsx)(R,{})]})}var T=n(57),z=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,198))})),I=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,199))})),P=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,200))})),J=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(5),n.e(4)]).then(n.bind(null,204))})),B=Object(c.lazy)((function(){return n.e(8).then(n.bind(null,202))}));var M,D,K,W=function(){var t=Object(i.b)();return Object(c.useEffect)((function(){t(f.a.getUser())}),[t]),Object(O.jsxs)(x,{children:[Object(O.jsx)(U,{}),Object(O.jsx)(c.Suspense,{fallback:Object(O.jsx)(T.a,{}),children:Object(O.jsxs)(b.d,{children:[Object(O.jsx)(p,{path:"/",exact:!0,children:Object(O.jsx)(z,{})}),Object(O.jsx)(p,{path:"/register",restricted:!0,redirectTo:"/contacts",children:Object(O.jsx)(I,{})}),Object(O.jsx)(p,{path:"/login",restricted:!0,redirectTo:"/contacts",children:Object(O.jsx)(P,{})}),Object(O.jsx)(h,{path:"/contacts",redirectTo:"/login",children:Object(O.jsx)(J,{})}),Object(O.jsx)(b.b,{children:Object(O.jsx)(B,{})})]})}),Object(O.jsx)(j.a,{autoClose:3700,position:"top-center"})]})},Y=n(48),F=n(5),G=n(26),H=n(78),Q=n.n(H),V=n(3),X=n(13),Z=n(11),$=Object(F.c)([],(M={},Object(V.a)(M,Z.fetchContactsSuccess,(function(t,e){return e.payload})),Object(V.a)(M,Z.addContactSuccess,(function(t,e){var n=e.payload;return[].concat(Object(Y.a)(t),[n])})),Object(V.a)(M,Z.deleteContactSuccess,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),M)),tt=Object(F.c)(!1,(D={},Object(V.a)(D,Z.fetchContactsRequest,(function(){return!0})),Object(V.a)(D,Z.fetchContactsSuccess,(function(){return!1})),Object(V.a)(D,Z.fetchContactsError,(function(){return!1})),Object(V.a)(D,Z.addContactRequest,(function(){return!0})),Object(V.a)(D,Z.addContactSuccess,(function(){return!1})),Object(V.a)(D,Z.addContactError,(function(){return!1})),Object(V.a)(D,Z.deleteContactRequest,(function(){return!0})),Object(V.a)(D,Z.deleteContactSuccess,(function(){return!1})),Object(V.a)(D,Z.deleteContactError,(function(){return!1})),D)),et=Object(F.c)("",Object(V.a)({},Z.filterContact,(function(t,e){return e.payload}))),nt=function(t,e){return e.payload},ct=Object(F.c)(null,(K={},Object(V.a)(K,Z.fetchContactsError,nt),Object(V.a)(K,Z.addContactError,nt),Object(V.a)(K,Z.deleteContactError,nt),Object(V.a)(K,Z.fetchContactsRequest,(function(){return null})),Object(V.a)(K,Z.addContactRequest,(function(){return null})),Object(V.a)(K,Z.deleteContactRequest,(function(){return null})),K)),rt=Object(X.c)({items:$,filter:et,isLoading:tt,error:ct}),at=n(45),ut=Object(Y.a)(Object(F.d)({serializableCheck:{ignoredActions:[G.a,G.f,G.b,G.c,G.d,G.e]}})),ot={key:"auth",storage:Q.a,whitelist:["token"]},it=Object(F.a)({reducer:{auth:Object(G.g)(ot,at.a),contacts:rt},middleware:ut,devTools:!1}),st=Object(G.h)(it);n(132);u.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(i.a,{store:it,children:Object(O.jsx)(s.a,{loading:null,persistor:st,children:Object(O.jsx)(o.a,{children:Object(O.jsx)(W,{})})})})}),document.getElementById("root"))},16:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return r}));var c={};n.r(c),n.d(c,"register",(function(){return f})),n.d(c,"logIn",(function(){return O})),n.d(c,"logOut",(function(){return h})),n.d(c,"getUser",(function(){return p}));var r={};n.r(r),n.d(r,"getIsAuthenticated",(function(){return v})),n.d(r,"getUserName",(function(){return g})),n.d(r,"getLoading",(function(){return x})),n.d(r,"getError",(function(){return C}));var a=n(4),u=(n(45),n(25)),o=n.n(u),i=n(40),s=n(27),b=n.n(s),j=n(23);b.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com/";var l=function(t){b.a.defaults.headers.common.Authorization="Bearer ".concat(t)},d=function(){b.a.defaults.headers.common.Authorization=""},f=function(t){return function(){var e=Object(i.a)(o.a.mark((function e(n){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(a.k)()),e.prev=1,e.next=4,b.a.post("/users/signup",t);case 4:c=e.sent,l(c.data.token),n(Object(a.l)(c.data)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),n(Object(a.j)(e.t0)),400===e.t0.response.status?j.b.error("User creation error! Please try again!"):500===e.t0.response.status?j.b.error("Oops! Server error! Please try later!"):j.b.error("Something went wrong!");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},O=function(t){return function(){var e=Object(i.a)(o.a.mark((function e(n){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(a.e)()),e.prev=1,e.next=4,b.a.post("/users/login",t);case 4:c=e.sent,l(c.data.token),n(Object(a.f)(c.data)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),n(Object(a.d)(e.t0)),j.b.error("Invalid email or password! Try again!");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},h=function(){return function(){var t=Object(i.a)(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(a.h)()),t.prev=1,t.next=4,b.a.post("/users/logout");case 4:d(),e(Object(a.i)()),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),e(Object(a.g)(t.t0)),500===t.t0.response.status?j.b.error("Oops! Server error! Please try later!"):j.b.error("Something went wrong! Please reload the page!");case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},p=function(){return function(){var t=Object(i.a)(o.a.mark((function t(e,n){var c,r,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=n(),r=c.auth.token){t.next=3;break}return t.abrupt("return");case 3:return l(r),e(Object(a.b)()),t.prev=5,t.next=8,b.a.get("/users/current");case 8:u=t.sent,e(Object(a.c)(u.data)),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(5),e(Object(a.a)(t.t0)),d(),j.b.warn("Authorization timed out! Please authenticate again!");case 17:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e,n){return t.apply(this,arguments)}}()},v=function(t){return t.auth.isAuthenticated},g=function(t){return t.auth.user.name},x=function(t){return t.auth.isLoading},C=function(t){return t.auth.error}},34:function(t,e,n){t.exports={link:"Navigation_link__12o2K",activeLink:"Navigation_activeLink__2rUFB"}},4:function(t,e,n){"use strict";n.d(e,"k",(function(){return r})),n.d(e,"l",(function(){return a})),n.d(e,"j",(function(){return u})),n.d(e,"e",(function(){return o})),n.d(e,"f",(function(){return i})),n.d(e,"d",(function(){return s})),n.d(e,"h",(function(){return b})),n.d(e,"i",(function(){return j})),n.d(e,"g",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return f})),n.d(e,"a",(function(){return O}));var c=n(5),r=Object(c.b)("auth/registerRequest"),a=Object(c.b)("auth/registerSuccess"),u=Object(c.b)("auth/registerError"),o=Object(c.b)("auth/loginRequest"),i=Object(c.b)("auth/loginSuccess"),s=Object(c.b)("auth/loginError"),b=Object(c.b)("auth/logoutRequest"),j=Object(c.b)("auth/logoutSuccess"),l=Object(c.b)("auth/logoutError"),d=Object(c.b)("auth/getUserRequest"),f=Object(c.b)("auth/getUserSuccess"),O=Object(c.b)("auth/getUserError")},41:function(t,e,n){t.exports={link:"AuthNav_link__2ejsg",activeLink:"AuthNav_activeLink__3huQJ"}},45:function(t,e,n){"use strict";var c,r,a,u,o,i=n(3),s=n(5),b=n(13),j=n(4),l={name:null,email:null},d=Object(s.c)(l,(c={},Object(i.a)(c,j.l,(function(t,e){return e.payload.user})),Object(i.a)(c,j.f,(function(t,e){return e.payload.user})),Object(i.a)(c,j.i,(function(){return l})),Object(i.a)(c,j.c,(function(t,e){return e.payload})),c)),f=Object(s.c)(null,(r={},Object(i.a)(r,j.l,(function(t,e){return e.payload.token})),Object(i.a)(r,j.f,(function(t,e){return e.payload.token})),Object(i.a)(r,j.i,(function(){return null})),r)),O=function(t,e){return e.payload},h=Object(s.c)(null,(a={},Object(i.a)(a,j.j,O),Object(i.a)(a,j.d,O),Object(i.a)(a,j.g,O),Object(i.a)(a,j.a,O),Object(i.a)(a,j.k,(function(){return null})),Object(i.a)(a,j.e,(function(){return null})),Object(i.a)(a,j.h,(function(){return null})),Object(i.a)(a,j.b,(function(){return null})),a)),p=Object(s.c)(!1,(u={},Object(i.a)(u,j.l,(function(){return!0})),Object(i.a)(u,j.f,(function(){return!0})),Object(i.a)(u,j.c,(function(){return!0})),Object(i.a)(u,j.j,(function(){return!1})),Object(i.a)(u,j.d,(function(){return!1})),Object(i.a)(u,j.a,(function(){return!1})),Object(i.a)(u,j.i,(function(){return!1})),u)),v=Object(s.c)(!1,(o={},Object(i.a)(o,j.k,(function(){return!0})),Object(i.a)(o,j.l,(function(){return!1})),Object(i.a)(o,j.j,(function(){return!1})),Object(i.a)(o,j.e,(function(){return!0})),Object(i.a)(o,j.f,(function(){return!1})),Object(i.a)(o,j.d,(function(){return!1})),Object(i.a)(o,j.h,(function(){return!0})),Object(i.a)(o,j.i,(function(){return!1})),Object(i.a)(o,j.g,(function(){return!1})),Object(i.a)(o,j.b,(function(){return!0})),Object(i.a)(o,j.c,(function(){return!1})),Object(i.a)(o,j.a,(function(){return!1})),o));e.a=Object(b.c)({user:d,isAuthenticated:p,token:f,error:h,isLoading:v})},50:function(t,e,n){t.exports={container:"UserMenu_container__GgYhE",avatar:"UserMenu_avatar__2e7Jj",name:"UserMenu_name__3e8KV"}},57:function(t,e,n){"use strict";var c=n(76),r=n.n(c),a=(n(129),n(77)),u=n.n(a),o=n(2);e.a=function(){return Object(o.jsx)("div",{className:u.a.overlay,children:Object(o.jsx)(r.a,{type:"ThreeDots",color:"#f50057",height:"35"})})}},74:function(t,e,n){t.exports={container:"Container_container__3RIox"}},75:function(t,e,n){t.exports={header:"AppBar_header__1Yk8v"}},77:function(t,e,n){t.exports={overlay:"LoaderComponent_overlay__3-Jp5"}}},[[133,2,3]]]);
//# sourceMappingURL=main.ff5d6797.chunk.js.map