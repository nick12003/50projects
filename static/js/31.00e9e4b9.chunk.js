(this.webpackJsonp50projects=this.webpackJsonp50projects||[]).push([[31],{42:function(n,e,t){"use strict";t.r(e);var c,r=t(13),o=t(24),a=t(1),i=t(14),l=t(2),s=Object(i.a)((function(n){var e=n.className,t=Object(a.useState)(0),c=Object(o.a)(t,2),r=c[0],i=c[1],s=Object(a.useState)(null),d=Object(o.a)(s,2),u=d[0],p=d[1],h=Object(a.useState)(!1),b=Object(o.a)(h,2),f=b[0],g=b[1];return Object(l.jsx)("div",{className:e,children:Array(5).fill().map((function(n,e){return Object(l.jsx)("div",{className:"empty ".concat(u===e?"hovered":""),onDragOver:function(n){n.preventDefault(),p(e)},onDragEnter:function(n){p(e)},onDragLeave:function(n){p(null)},onDrop:function(n){i(e)},children:e===r?Object(l.jsx)("div",{className:"fill ".concat(f?"hold":""),draggable:"true",onDragStart:function(n){g(!0)},onDragEnd:function(n){g(!1),p(null)}}):""},e)}))})}))(c||(c=Object(r.a)(["\n    & {\n        background-color: steelblue;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        height: calc(100vh - 80px);\n        position: relative;\n        top: 80px;\n        overflow: hidden;\n        margin: 0;\n    }\n    \n    .empty {\n        height: 150px;\n        width: 150px;\n        margin: 10px;\n        border: solid 3px black;\n        background: white;\n    }\n    \n    .fill {\n        background-image: url('https://source.unsplash.com/random/150x150');\n        height: 145px;\n        width: 145px;\n        cursor: pointer;\n    }\n    \n    .hold {\n        border: solid 5px #ccc;\n    }\n    \n    .hovered {\n        background-color: #333;\n        border-color: white;\n        border-style: dashed;\n    }\n    \n    @media (max-width: 800px) {\n        & {\n            flex-direction: column;\n        }\n    }\n"])));e.default=s}}]);
//# sourceMappingURL=31.00e9e4b9.chunk.js.map