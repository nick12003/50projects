(this.webpackJsonp50projects=this.webpackJsonp50projects||[]).push([[51],{78:function(n,e,t){"use strict";t.r(e);var o,i=t(13),a=t(24),s=t(1),r=t(14),c=t(2),p=Object(r.a)((function(n){var e=n.className,t=Array(4).fill(Array(4).fill()),o=Object(s.useState)(!1),i=Object(a.a)(o,2),r=i[0],p=i[1];return Object(c.jsxs)("div",{className:e,children:[Object(c.jsx)("button",{className:"magic",onClick:function(){p(!r)},children:"Magic \ud83c\udfa9"}),Object(c.jsx)("div",{className:"boxes ".concat(r?"":"big"),children:t.map((function(n,e){return Object(c.jsx)("div",{className:"row",children:n.map((function(n,t){return Object(c.jsx)("div",{className:"box",style:{backgroundPosition:"".concat(125*-t,"px ").concat(125*-e,"px")}},t)}))})}))})]})}))(o||(o=Object(i.a)(["\n    & {\n        background-color: #fafafa;\n        font-family: 'Roboto', sans-serif;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        height: calc(100vh - 80px);\n        position: relative;\n        top: 80px;\n        overflow: hidden;\n    }\n    \n    .magic {\n        background-color: #f9ca24;\n        color: #fff;\n        font-family: 'Poppins', sans-serif;\n        border: 0;\n        border-radius: 3px;\n        font-size: 16px;\n        padding: 12px 20px;\n        cursor: pointer;\n        position: absolute;\n        top: 20px;\n        letter-spacing: 1px;\n        box-shadow: 0 3px rgba(249, 202, 36, 0.5);\n        z-index: 100;\n    }\n    \n    .magic:focus {\n        outline: none;\n    }\n    \n    .magic:active {\n        box-shadow: none;\n        transform: translateY(2px);\n    }\n    \n    .boxes {\n        display: flex;\n        flex-wrap: wrap;\n        height: 500px;\n        width: 500px;\n        position: relative;\n        transition: 0.4s ease;\n    }\n    \n    .boxes.big {\n        width: 600px;\n        height: 600px;\n    }\n    \n    .boxes.big .box {\n        transform: rotateZ(360deg);\n    }\n\n    .row{\n        width: 100%;\n        display: flex;\n        justify-content: space-around;\n    }\n    \n    .box {\n        background-image: url('https://media.giphy.com/media/EZqwsBSPlvSda/giphy.gif');\n        background-repeat: no-repeat;\n        background-size: 500px 500px;\n        position: relative;\n        height: 125px;\n        width: 125px;\n        transition: 0.4s ease;\n    }\n    \n    .box::after {\n        content: '';\n        background-color: #f6e58d;\n        position: absolute;\n        top: 8px;\n        right: -15px;\n        height: 100%;\n        width: 15px;\n        transform: skewY(45deg);\n    }\n    \n    .box::before {\n        content: '';\n        background-color: #f9ca24;\n        position: absolute;\n        bottom: -15px;\n        left: 8px;\n        height: 15px;\n        width: 100%;\n        transform: skewX(45deg);\n    }\n"])));e.default=p}}]);
//# sourceMappingURL=51.570b7003.chunk.js.map