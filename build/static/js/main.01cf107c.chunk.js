(this.webpackJsonppostme=this.webpackJsonppostme||[]).push([[0],{42:function(e,t,n){e.exports=n(53)},53:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(5),r=n.n(l),o=n(26),u=n(7);var i=function(){return c.a.createElement("header",null,c.a.createElement("h1",null,"Post me"))};var m=function(){var e=(new Date).getFullYear();return c.a.createElement("footer",null,c.a.createElement("p",null,"Copyright \xa9 ",e))},s=n(78),f=n(82),E=n(83);function b(e){var t=c.a.useState(null),n=Object(u.a)(t,2),a=n[0],l=n[1];return c.a.createElement("div",null,c.a.createElement("div",{class:"menu"},c.a.createElement(s.a,{style:{fontFamily:"Montserrat",fontSize:"1.2rem"},"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){l(e.currentTarget),console.log(e.currentTarget)}},"Click to Create"),c.a.createElement(f.a,{id:"simple-menu",anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:function(){l(null)}},c.a.createElement(E.a,{style:{fontFamily:"Montserrat",fontSize:"1.2rem"},name:"note",onClick:function(){l(null),e.onChoose("note")}},"New note"),c.a.createElement(E.a,{style:{fontFamily:"Montserrat",fontSize:"1.2rem"},name:"list",onClick:function(){l(null),e.onChoose("list")}},"New list"))))}var p=n(19),v=n(81);var d=function(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),l=n[0],r=n[1],i=Object(a.useState)([]),m=Object(u.a)(i,2),s=m[0],f=m[1],E=Object(a.useState)({title:"",content:[]}),b=Object(u.a)(E,2),d=b[0],j=b[1],O=Object(a.useState)(!1),C=Object(u.a)(O,2),h=C[0],g=C[1];return c.a.createElement(v.a,{container:!0,justify:"center"},c.a.createElement(v.a,{item:!0,xs:12,sm:12,md:6,lg:5},c.a.createElement("form",null,c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("input",{placeholder:"Name of list",onChange:function(e){var t=e.target.value;j((function(e){return Object(p.a)({},e,{title:t})}))},type:"text",value:d.title}),c.a.createElement("input",{className:"list-input",placeholder:"List items",onChange:function(e){var t=e.target.value;r(t),j((function(e){return Object(p.a)({},e,{content:t})}))},type:"text",value:l}),c.a.createElement("button",{className:"add-button",onClick:function(e){f((function(e){return[].concat(Object(o.a)(e),[l])})),j((function(e){return Object(p.a)({},e,{content:s})})),e.preventDefault(),r("")}},"+")),c.a.createElement("div",null,c.a.createElement("ul",{className:"list-area"},s.map((function(e,t){return c.a.createElement("div",{onClick:function(){var e;e=t,f((function(t){return t.filter((function(t,n){return n!==e}))}))}},c.a.createElement("li",{className:"lists",style:{textDecoration:"none"}},e))})))),c.a.createElement("button",{className:"confirm-button",onClick:function(e){j((function(e){return Object(p.a)({},e,{content:s})})),e.preventDefault(),g(!0)}},"Confirm List")),h&&c.a.createElement("button",{className:"submit-button",onClick:function(t){e.onAdd(d),f([]),j({title:"",content:[]}),t.preventDefault()}},"Post me"))))},j=n(32),O=n.n(j);var C=function(e){var t=Object(a.useState)(!1),n=Object(u.a)(t,2),l=n[0],r=n[1];return c.a.createElement("li",{className:"post-list-item",onClick:function(e){r((function(e){return!e}))},style:{textDecoration:l?"line-through":"none"}},e.text)};var h=function(e){return c.a.createElement(v.a,{item:!0,xs:12,sm:12,md:6,lg:4},c.a.createElement("div",{className:"post"},c.a.createElement("h1",null,e.title),c.a.createElement("ul",{className:"post-list-content"},e.content.map((function(e){return c.a.createElement("div",null,c.a.createElement(C,{text:e}))}))),c.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},c.a.createElement(O.a,null))))},g=n(31);var y=function(e){var t=Object(a.useState)(!1),n=Object(u.a)(t,2),l=n[0],r=n[1],o=Object(a.useState)({title:"",content:""}),i=Object(u.a)(o,2),m=i[0],s=i[1];function f(e){var t=e.target,n=t.name,a=t.value;s((function(e){return Object(p.a)({},e,Object(g.a)({},n,a))}))}return c.a.createElement(v.a,{container:!0,justify:"center"},c.a.createElement(v.a,{item:!0,xs:12,sm:12,md:6,lg:5},c.a.createElement("form",{action:""},c.a.createElement("input",{name:"title",placeholder:"Title",type:"text",onChange:f,value:m.title}),c.a.createElement("textarea",{name:"content",placeholder:"Contents",id:"",cols:"30",onClick:function(){r(!0)},rows:l?"5":"1",onChange:f,value:m.content}),c.a.createElement("button",{className:"submit-button",onClick:function(t){e.onAdd(m),s({title:"",content:""}),t.preventDefault()}},"Post me"))))};var k=function(e){return c.a.createElement(v.a,{item:!0,xs:12,sm:12,md:6,lg:4},c.a.createElement("div",{className:"post"},c.a.createElement("h1",null,e.title),c.a.createElement("p",null,e.content),c.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},c.a.createElement(O.a,null))))};var S=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],l=t[1],r=Object(a.useState)(!1),s=Object(u.a)(r,2),f=(s[0],s[1]),E=Object(a.useState)([]),p=Object(u.a)(E,2),j=p[0],O=p[1];function C(e){O((function(t){return t.filter((function(t,n){return n!==e}))}))}var g=Object(a.useState)([]),S=Object(u.a)(g,2),N=S[0],x=S[1];function D(e){x((function(t){return t.filter((function(t,n){return n!==e}))}))}return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement(i,null),c.a.createElement(b,{onChoose:function(e){"list"===e?(l(!0),f(!1)):"note"===e&&(f(!0),l(!1))}}),n?c.a.createElement(d,{onAdd:function(e){O((function(t){return[].concat(Object(o.a)(t),[e])}))}}):c.a.createElement(y,{onAdd:function(e){x((function(t){return[].concat(Object(o.a)(t),[e])}))}}),c.a.createElement(v.a,{container:!0,spacing:3,direction:"row",justify:"center"},j.map((function(e,t){return c.a.createElement(h,{key:t,id:t,title:e.title,content:e.content,onDelete:C})}))),c.a.createElement(v.a,{container:!0,spacing:3,direction:"row",justify:"center"},N.map((function(e,t){return c.a.createElement(k,{key:t,id:t,title:e.title,content:e.content,onDelete:D})})))),c.a.createElement(m,null))};r.a.render(c.a.createElement(S,null),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.01cf107c.chunk.js.map