(this["webpackJsonpbook-store"]=this["webpackJsonpbook-store"]||[]).push([[0],{58:function(e,t,a){},59:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(0),r=a.n(c),s=a(22),i=a.n(s),o=(a(58),a(51)),l=a(7),u=a(84),j=a(77),b=a(86),m=a(82),d=a(21),h=a(17),O=a(83),f=a(48);a(59);var x=function(e){var t=Object(c.useState)(""),a=Object(h.a)(t,2),r=a[0],s=a[1];return Object(n.jsx)(j.a,{style:e.style,className:"search",children:Object(n.jsxs)(O.a,{action:r,children:[Object(n.jsx)("input",{id:"search",placeholder:"Title of the Book...",type:"text",onChange:function(e){s("/#/"+e.target.value)}}),Object(n.jsx)(f.a,{href:r,type:"submit",variant:"outline-dark",size:"sm",children:Object(n.jsx)(d.b,{size:26,cursor:"Pointer"})})]})})},p=a(12),v=a.n(p),g=a(23),k=a(78),y=function(){return Object(n.jsx)(k.a,{style:{position:"fixed",top:"50%",left:"50%"},animation:"border",variant:"dark"})},S=a(87),I=function(e){localStorage.total_items=e,document.getElementById("cart-items").textContent=e},N=function(e){var t={};t.id=e.id,t.title=e.volumeInfo.title,t.author=e.volumeInfo.authors[0],t.price=e.saleInfo.listPrice.amount+e.saleInfo.listPrice.currencyCode,t.image=e.volumeInfo.imageLinks.thumbnail;var a=JSON.parse(localStorage.books),n=JSON.parse(localStorage.books_count);n[t.id]?n[t.id]=parseInt(n[t.id])+1:(n[t.id]=1,a[t.id]=t),localStorage.books=JSON.stringify(a),localStorage.books_count=JSON.stringify(n),I(parseInt(localStorage.total_items)+1)},w=(a(64),function(e){var t=e.books;return Object(n.jsx)(j.a,{className:"show-container",children:t.map((function(e){return Object(n.jsxs)(S.a,{className:"show-card",style:{display:"inline-block"},bg:"light",children:[Object(n.jsx)(S.a.Img,{variant:"top",src:e.volumeInfo.imageLinks.thumbnail,alt:"image not available",width:"300",height:"250"}),Object(n.jsxs)(S.a.Body,{children:[Object(n.jsxs)(S.a.Title,{className:"text-muted",children:["Price"," ",e.saleInfo.listPrice?e.saleInfo.listPrice.amount:0," ",e.saleInfo.listPrice?e.saleInfo.listPrice.currencyCode:"INR"]}),Object(n.jsx)(f.a,{onClick:e.saleInfo.listPrice?function(){return function(e){N(e)}(e)}:function(){return null},variant:"dark",size:"sm",children:"Add to Cart"})]})]},e.id)}))})}),q=function(){var e=Object(g.a)(v.a.mark((function e(t){var a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=t.replace(/ /g,"+"),e.next=3,fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(t,"&filter=paid-ebooks&maxResults=10"),{mode:"cors"});case 3:return a=e.sent,e.next=6,a.json();case 6:return a=e.sent,n=(n=Object.keys(a.items)).filter((function(e){return a.items[e].volumeInfo.imageLinks})),a={totalItems:n.length,items:n.map((function(e){return a.items[e]}))},e.abrupt("return",a);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(e){var t=e.match,a=Object(c.useState)({}),r=Object(h.a)(a,2),s=r[0],i=r[1],o=Object(c.useState)(!1),l=Object(h.a)(o,2),u=l[0],b=l[1];Object(c.useEffect)((function(){(function(){var e=Object(g.a)(v.a.mark((function e(){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q(t.params.id);case 2:return a=e.sent,e.next=5,i(a);case 5:b(!0);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t.params.id]);var m=Object(n.jsx)(w,{books:s.items});return u?s.totalItems||(m=Object(n.jsx)(j.a,{style:{textAlign:"center"},children:Object(n.jsx)("p",{className:"text-danger",children:"No book found. Please enter the correct title."})})):m=Object(n.jsx)(y,{}),Object(n.jsxs)("div",{children:[Object(n.jsx)(x,{style:{top:"15%",marginTop:"5rem"}}),m]})},J=a(79),P=function(){return Object(n.jsx)(j.a,{children:Object(n.jsxs)(J.a,{children:[Object(n.jsx)("h1",{children:"About"}),Object(n.jsx)("p",{children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro fugiat magni facilis. Facilis, consequatur nisi molestias cupiditate sapiente labore officiis illo suscipit at nesciunt omnis doloribus mollitia neque porro earum ab numquam laudantium laboriosam itaque iure atque, beatae animi sequi. Architecto voluptatum impedit, molestias ipsam eius modi non aut optio, cumque quasi maxime? Iste, necessitatibus sed voluptatem nam at consequuntur ipsum et maxime corrupti animi eaque aliquam minima reiciendis unde consectetur tempore velit, debitis rerum ab sunt nihil nobis accusantium? Temporibus architecto nesciunt explicabo laboriosam vel exercitationem ut animi illum laborum corporis assumenda iusto consequuntur cumque, atque quibusdam quod ad!"}),Object(n.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://www.github.com/coder1033",children:Object(n.jsx)(d.a,{size:50,style:{color:"#111"}})})]})})},C=a(80),T=a(47),D=a(81),B=a(85),L=(a(65),function(e){localStorage.total_items=e,document.getElementById("cart-items").textContent=e}),A=function(e){var t=Object(c.useState)(0),a=Object(h.a)(t,2),r=a[0],s=a[1],i=e.books,o=e.books_count;return Object(c.useEffect)((function(){s(Object.keys(o).map((function(e){return parseInt(o[e])*parseInt(i[e].price)})).reduce((function(e,t){return e+t}),0))}),[o,r,i,s]),Object(n.jsxs)(B.a,{variant:"info",children:["Your Grand Total is ",r," INR"]})},F=function(){var e=Object(c.useState)({}),t=Object(h.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)({}),i=Object(h.a)(s,2),o=i[0],l=i[1],u=Object(c.useState)(!1),b=Object(h.a)(u,2),m=b[0],O=b[1];Object(c.useEffect)((function(){Object(g.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(JSON.parse(localStorage.books));case 2:return e.next=4,l(JSON.parse(localStorage.books_count));case 4:O(!0);case 5:case"end":return e.stop()}}),e)})))()}),[]);var x=function(){var e=Object(g.a)(v.a.mark((function e(t,a){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),O(!1),function(){var e=Object(g.a)(v.a.mark((function e(t,a){var n,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=JSON.parse(localStorage.books),c=JSON.parse(localStorage.books_count),L(parseInt(localStorage.total_items)+t-c[a]),c[a]=t,c[a]){e.next=10;break}return delete c[a],delete n[a],e.next=9,r(n);case 9:localStorage.books=JSON.stringify(n);case 10:return e.next=12,l(c);case 12:localStorage.books_count=JSON.stringify(c),O(!0);case 14:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()(parseInt(t.target.qty.value),a);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return m?parseInt(localStorage.total_items)?Object(n.jsxs)(j.a,{className:"show-cart-container",children:[Object(n.jsx)(A,{books:a,books_count:o}),Object.keys(o).map((function(e){return Object(n.jsxs)(J.a,{children:[Object(n.jsxs)(C.a,{children:[Object(n.jsx)(T.a,{className:"first-column",children:Object(n.jsx)(D.a,{thumbnail:!0,src:a[e].image})}),Object(n.jsxs)(T.a,{className:"last-column",children:[Object(n.jsx)("h3",{className:"mb-0",children:"Title"}),Object(n.jsx)("p",{className:"text-muted",children:a[e].title}),Object(n.jsx)("h3",{className:"mb-0",children:"Author"}),Object(n.jsx)("p",{className:"text-muted",children:a[e].author}),Object(n.jsx)("h3",{className:"mb-0",children:"Price"}),Object(n.jsx)("p",{className:"text-muted",children:parseInt(a[e].price)*parseInt(o[e])})]})]}),Object(n.jsxs)("form",{onSubmit:function(t){return x(t,e)},className:"mt-3",children:[Object(n.jsxs)("h5",{className:"mb-1",children:["Quantity(",Object(n.jsx)("small",{children:o[e]}),")"]}),Object(n.jsx)(f.a,{type:"submit",variant:"outline-dark",size:"sm",className:"py-0 px-1",children:"save"}),Object(n.jsx)("input",{className:"input-quantity",type:"number",placeholder:o[e],min:"0",id:"qty",required:!0})]})]},e)}))]}):Object(n.jsxs)(j.a,{className:"show-cart-container",children:[Object(n.jsx)(d.c,{size:200}),"There's nothing in your cart..."]}):Object(n.jsx)(y,{})};a(66);localStorage.books||(localStorage.books=JSON.stringify({}),localStorage.books_count=JSON.stringify({}),localStorage.total_items=JSON.stringify(0));var z=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(u.a,{collapseOnSelect:!0,expand:"sm",variant:"light",className:"navbar",children:Object(n.jsxs)(j.a,{children:[Object(n.jsx)(u.a.Brand,{href:"/#/",children:Object(n.jsx)("h1",{children:"Book Store"})}),Object(n.jsx)(u.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(n.jsxs)(u.a.Collapse,{id:"responsive-navbar-nav",children:[Object(n.jsxs)(b.a,{className:"mr-auto",children:[Object(n.jsx)(b.a.Link,{href:"/#/",children:"Home"}),Object(n.jsx)(b.a.Link,{href:"/#/about",children:"About"})]}),Object(n.jsxs)(b.a,{children:[Object(n.jsxs)(m.a,{title:"Genre",id:"collasible-nav-dropdown",children:[Object(n.jsx)(m.a.Item,{href:"/#/fiction",children:"Fiction"}),Object(n.jsx)(m.a.Divider,{}),Object(n.jsx)(m.a.Item,{href:"/#/mystery",children:"Mystery"}),Object(n.jsx)(m.a.Divider,{}),Object(n.jsx)(m.a.Item,{href:"/#/fantasy",children:"Fantasy"}),Object(n.jsx)(m.a.Divider,{}),Object(n.jsx)(m.a.Item,{href:"/#/action+adventure",children:"Action & Adventure"}),Object(n.jsx)(m.a.Divider,{}),Object(n.jsx)(m.a.Item,{href:"/#/biography",children:"Biography"}),Object(n.jsx)(m.a.Divider,{}),Object(n.jsx)(m.a.Item,{href:"/#/romance",children:"Romance"}),Object(n.jsx)(m.a.Divider,{}),Object(n.jsx)(m.a.Item,{href:"/#/horror",children:"Horror"}),Object(n.jsx)(m.a.Divider,{}),Object(n.jsx)(m.a.Item,{href:"/#/classics",children:"Classics"}),Object(n.jsx)(m.a.Divider,{}),Object(n.jsx)(m.a.Item,{href:"/#/science-fiction",children:"Sci-fi"})]}),Object(n.jsxs)(b.a.Link,{href:"/#/cart",children:["Cart",Object(n.jsx)(d.c,{})," ",Object(n.jsx)("span",{id:"cart-items",children:parseInt(localStorage.total_items)||0})]})]})]})]})}),Object(n.jsx)(o.a,{basename:"/",children:Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{exact:!0,path:"/",component:x}),Object(n.jsx)(l.a,{exact:!0,path:"/about",component:P}),Object(n.jsx)(l.a,{exact:!0,path:"/cart",component:F}),Object(n.jsx)(l.a,{path:"/:id",component:_})]})})]})},E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,88)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};a(71);i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(z,{})}),document.getElementById("root")),E()}},[[72,1,2]]]);
//# sourceMappingURL=main.d4a75f0b.chunk.js.map