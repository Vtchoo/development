(this.webpackJsonpdevelopment=this.webpackJsonpdevelopment||[]).push([[0],{50:function(e,t,n){},7:function(e,t,n){e.exports={contentContainer:"style_contentContainer__2VuaW",sidebar:"style_sidebar__Pl5Q4",link:"style_link__Cxpww",sectionName:"style_sectionName__3mGJq",pageList:"style_pageList__16dFR",open:"style_open__1lsyc",pageName:"style_pageName__3bun4",active:"style_active__29mLK"}},91:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(34),r=n.n(s),i=(n(50),n(14)),o=n(2),h=n(0);var l=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("h2",{children:"Home"})})},d=n(4),u=n(44);var j=n(93),b=n(38),p=n(40),m=n(23);j.a.registerLanguage("jsx",b.a),j.a.registerLanguage("typescript",p.a);var O="const [searchTerm, setSearchTerm] = useState('')\nconst [result, setResult] = useState('')\n\nuseDebounce(() => {\n    console.log(searchTerm)\n    setResult(searchTerm)\n}, [searchTerm], 2000)",x="const [searchTerm, setSearchTerm] = useState('')\nconst [result, setResult] = useState('')\nconst debouncedValue = useDebouncedValue(searchTerm, 2000)\n\nuseEffect(() => {\n    console.log(searchTerm)\n    setResult(debouncedValue)\n}, [debouncedValue])",f=function(){var e,t,n,c=Object(a.useState)(""),s=Object(d.a)(c,2),r=s[0],i=s[1],o=Object(a.useState)(""),l=Object(d.a)(o,2),b=l[0],p=l[1],f=Object(a.useState)(""),g=Object(d.a)(f,2),v=g[0],y=g[1],w=Object(a.useState)(""),k=Object(d.a)(w,2),T=k[0],_=k[1],C=function(e,t){var n=Object(a.useState)(e),c=Object(d.a)(n,2),s=c[0],r=c[1];return Object(a.useEffect)((function(){var n=setTimeout((function(){r(e)}),t);return function(){clearTimeout(n)}}),[e,t]),s}(b,2e3);return e=function(){console.log(r),y(r)},t=[r],n=2e3,Object(a.useEffect)((function(){var t=setTimeout(e,n);return function(){return clearTimeout(t)}}),[n].concat(Object(u.a)(t))),Object(a.useEffect)((function(){console.log(b),_(C)}),[C]),Object(h.jsxs)("div",{className:"page",children:[Object(h.jsx)("h2",{children:"Use debounce"}),Object(h.jsx)("p",{children:"When an user is typing a search term, or an username to make a new profile with, it's common to make a request to the api to return the search result automatically, or check whether the user already exists or not."}),Object(h.jsx)("p",{children:"But this can eascily become a heavy load on the backend, as the request is made each time the user types a letter. If the search results has a lot of data, it can rapidly waste the user's data plan and traffic limits of your api host provider."}),Object(h.jsx)("p",{children:"Ideally, you want the request to be made after the user stops typing the desired search term. This can be made using debounce functions."}),Object(h.jsx)("h4",{children:"Debounce the api calls"}),Object(h.jsx)("p",{children:"In order to debounce the api calls, we can start a timer that resets when the user types another letter, and executes the function after the specified since the last reset."}),Object(h.jsx)("h4",{children:"In React"}),Object(h.jsxs)("p",{children:["Debouncing a function is possible using a custom hook, that we'll call ",Object(h.jsx)("code",{children:"useDebounce"}),". It takes a function to be debounced as first parameter, the values we want to watch to check if they have been changed (the search term or username, for example) and, as last parameter, the desired delay in milisseconds."]}),Object(h.jsxs)("p",{children:["As an alternative, we can change a state variable after a desired delay. This can be done with a very similiar hook we'll call ",Object(h.jsx)("code",{children:"useDebouncedValue"}),". The debounced value can be watched on another ",Object(h.jsx)("code",{children:"useEffect"})," hook and execute a function when it changes."]}),Object(h.jsx)("h4",{children:"Examples"}),Object(h.jsxs)("div",{style:{display:"flex"},children:[Object(h.jsxs)("div",{style:{flex:1,marginLeft:"1rem"},children:[Object(h.jsx)("h5",{children:"useDebounce"}),Object(h.jsx)(j.a,{language:"typescript",style:m.a,children:O}),Object(h.jsx)("input",{value:r,onChange:function(e){return i(e.target.value)}}),Object(h.jsxs)("p",{children:["Value of ",Object(h.jsx)("code",{children:"searchTerm"}),": ",r]}),Object(h.jsxs)("p",{children:["Result: ",v]})]}),Object(h.jsxs)("div",{style:{flex:1},children:[Object(h.jsx)("h5",{children:"useDebouncedValue"}),Object(h.jsx)(j.a,{language:"typescript",style:m.a,children:x}),Object(h.jsx)("input",{value:b,onChange:function(e){return p(e.target.value)}}),Object(h.jsxs)("p",{children:["Value of ",Object(h.jsx)("code",{children:"debouncedValue"}),": ",C]}),Object(h.jsxs)("p",{children:["Result: ",T]})]})]})]})},g=n(24),v=n.n(g),y=n(16),w=n(42),k=n(45);function T(e){var t=e.src,n=(e.headers,e.background),c=e.children,s=Object(k.a)(e,["src","headers","background","children"]),r=Object(a.useState)(""),i=Object(d.a)(r,2),o=i[0],l=i[1];function u(){return(u=Object(w.a)(v.a.mark((function n(){var a,c,s,r;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,t){n.next=3;break}return n.abrupt("return");case 3:return a=new Headers,e.headers&&Object.entries(e.headers).map((function(e){var t=Object(d.a)(e,2),n=t[0],c=t[1];return a.append(n,c)})),n.next=7,fetch(t,{headers:a});case 7:return c=n.sent,n.next=10,c.blob();case 10:s=n.sent,r=URL.createObjectURL(s),l(r),n.next=18;break;case 15:n.prev=15,n.t0=n.catch(0),console.log(n.t0);case 18:case"end":return n.stop()}}),n,null,[[0,15]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){u.apply(this,arguments)}()}),[]),n?Object(h.jsx)("div",Object(y.a)(Object(y.a)({style:{backgroundImage:o}},s),{},{children:c})):Object(h.jsx)("img",Object(y.a)({src:o},s))}var _="https://picsum.photos/id/352/3264/2176.jpg";var C={name:"useDebounce",path:"/development/usedebounce",component:f},N={name:"Img With Headers",path:"/development/imgwithheaders",component:function(){return Object(h.jsxs)("div",{className:"page",children:[Object(h.jsx)("h2",{children:"Image with http headers"}),Object(h.jsxs)("p",{children:["When inserting an image into a page, whe usually provide a source link via the src property of the ","<img>"," component. That way, there's no way to specify headers that should be sent to the api, for example, authorization headers."]}),Object(h.jsx)("p",{children:"The only way to send data with the default img html component is via url, like http://myapi.com/image.jpg?token=12345abc"}),Object(h.jsx)("p",{children:"This makes it difficult to reach images that are protected by an api behind a route that requires authentication, or any other information that must be passed through the headers of a request."}),Object(h.jsx)("p",{children:"However, it is possible to make a dynamic GET request to the api with javascript including custom headers."}),Object(h.jsx)("h4",{children:"React solution"}),Object(h.jsxs)("p",{children:["In this page, I present the component ","<Img />",", which is basically the same as the ","<img>"," tag, but accepting the ",Object(h.jsx)("code",{children:"headers"})," prop, like ","<Img headers />"]}),Object(h.jsxs)("p",{children:["The component receives the same props as the default img tag plus the ",Object(h.jsx)("code",{children:"headers"})," props."]}),Object(h.jsxs)("p",{children:["As soon as the component is loaded, the ",Object(h.jsx)("code",{children:"fetchImage"})," function in the ",Object(h.jsx)("code",{children:"useEffect"})," collects the ",Object(h.jsx)("code",{children:"src"})," passed through the props and make a GET request with the headers included in",Object(h.jsx)("code",{children:"props.headers"}),"."]}),Object(h.jsxs)("p",{children:["The body of the request is then read, parsed into a Blob and finally given a link via ",Object(h.jsx)("code",{children:"URL.createObjectURL"}),". The obtained URL is then set to the state variable ",Object(h.jsx)("code",{children:"url"})," and displayed by a default ","<img>"," tag."]}),Object(h.jsx)("h4",{children:"The code:"}),Object(h.jsx)("p",{children:Object(h.jsx)("code",{children:"work in progress"})}),Object(h.jsx)("h4",{children:"Example:"}),Object(h.jsxs)("p",{children:["On the left, there is an image created using ","<img>"," tag, and on the right, with ","<Img headers />",". The appearence of the images is the same, but the second one actually sends headers along with the request."]}),Object(h.jsx)("p",{children:"To check this out, open the browser console (usually pressing F12), and go to network tab. You may need to refresh the page to see the requests. One of the images sends the headers to the remote address."}),Object(h.jsxs)("div",{style:{display:"flex"},children:[Object(h.jsx)("div",{style:{flex:1},children:Object(h.jsx)("img",{style:{width:"100%"},src:_})}),Object(h.jsx)("div",{style:{flex:1},children:Object(h.jsx)(T,{style:{width:"100%"},src:_,headers:{"X-Custom-Header":"value123"}})})]})]})}},S={name:"Custom Select",path:"/development/select",component:function(){return Object(h.jsx)("div",{children:"Custom select component"})}},I=[{name:"Home",path:"/development/",component:l,exact:!0},C,N,S],L=[{name:"Home",path:"/",component:l},{name:"Custom hooks",pages:[C]},{name:"Custom components",pages:[N,S]}],R=n(7),E=n.n(R);var q=function(){var e=Object(a.useState)(),t=Object(d.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)("/"),r=Object(d.a)(s,2),o=r[0],l=r[1];function u(e){c(e===n?void 0:e),e.path&&l(e.path)}return Object(h.jsx)("ul",{className:E.a.sidebar,children:L.map((function(e){return Object(h.jsxs)("div",{children:[e.path?Object(h.jsx)(i.b,{to:e.path,onClick:function(){return u(e)},className:E.a.link,children:Object(h.jsx)("div",{className:"".concat(E.a.sectionName," ").concat(o===e.path&&E.a.active),children:Object(h.jsx)("span",{children:e.name})})}):Object(h.jsx)("div",{className:E.a.sectionName,onClick:function(){return u(e)},children:Object(h.jsx)("span",{children:e.name})}),Object(h.jsx)("div",{className:"".concat(E.a.pageList," ").concat(e===n&&E.a.open),children:e.pages&&e.pages.map((function(e){return Object(h.jsx)(i.b,{to:e.path,className:E.a.link,onClick:function(){return function(e){l(e.path)}(e)},children:Object(h.jsx)("div",{className:"".concat(E.a.pageName,"  ").concat(o===e.path&&E.a.active),children:e.name})})}))})]})}))})};var D=function(){return Object(h.jsxs)(i.a,{children:[Object(h.jsx)(q,{}),Object(h.jsx)("div",{className:E.a.contentContainer,children:Object(h.jsx)(o.c,{children:I.map((function(e){return Object(h.jsx)(o.a,{path:e.path,exact:e.exact,children:e.component()})}))})})]})};var V=function(){return Object(h.jsx)(D,{})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,94)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(V,{})}),document.getElementById("root")),H()}},[[91,1,2]]]);
//# sourceMappingURL=main.ddf30cad.chunk.js.map