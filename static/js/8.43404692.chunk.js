(this.webpackJsonp50projects=this.webpackJsonp50projects||[]).push([[8],{44:function(n,e,t){"use strict";t.r(e);var i,r=t(13),c=t(97),a=t(24),l=t(1),s=t(14),o=t(2),f=Object(s.a)((function(n){var e=n.className,t=Object(l.useState)(Array(8).fill().map((function(n){return{full:!1}}))),i=Object(a.a)(t,2),r=i[0],s=i[1],f=Object(l.useState)(0),u=Object(a.a)(f,2),d=u[0],p=u[1];return Object(o.jsxs)("div",{className:e,children:[Object(o.jsx)("h1",{children:"Drink Water"}),Object(o.jsx)("h3",{children:"Goal: 2 Liters"}),Object(o.jsxs)("div",{className:"cup",children:[8===d?"":Object(o.jsxs)("div",{className:"remained",style:{visibility:"".concat(8===d?"hidden":"visible")},children:[Object(o.jsxs)("span",{children:[2-250*d/1e3,"L"]}),Object(o.jsx)("small",{children:"Remained"})]}),Object(o.jsx)("div",{className:"percentage",style:{visibility:"".concat(0===d?"hidden":"visible"),height:"".concat(d/8*100,"%")},children:"".concat(d/8*100,"%")})]}),Object(o.jsx)("p",{className:"text",children:"Select how many glasses of water that you have drank"}),Object(o.jsx)("div",{className:"cups",children:r.map((function(n,e){var t=n.full;return Object(o.jsx)("div",{className:"cup cup-small ".concat(t?"full":""),onClick:function(){var n=Object(c.a)(r);s(n.map((function(n,t){return t===e&&n.full&&e===d-1?{full:!1}:t<=e?{full:!0}:{full:!1}}))),p(e+1===d?e:e+1)},children:"250 ml"},e)}))})]})}))(i||(i=Object(r.a)(["\n    & {\n        background-color: #3494e4;\n        color: #fff;\n        font-family: 'Montserrat', sans-serif;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        height: calc(100vh - 80px);\n        position: relative;\n        top: 80px;\n    }\n    \n    h1 {\n        margin: 10px 0 0;\n    }\n    \n    h3 {\n        font-weight: 400;\n        margin: 10px 0;\n    }\n    \n    .cup {\n        background-color: #fff;\n        border: 4px solid #144fc6;\n        color: #144fc6;\n        border-radius: 0 0 40px 40px;\n        height: 330px;\n        width: 150px;\n        margin: 30px 0;\n        display: flex;\n        flex-direction: column;\n        overflow: hidden;\n    }\n    \n    .cup.cup-small {\n        height: 95px;\n        width: 50px;\n        border-radius: 0 0 15px 15px;\n        background-color: rgba(255, 255, 255, 0.9);\n        cursor: pointer;\n        font-size: 14px;\n        align-items: center;\n        justify-content: center;\n        text-align: center;\n        margin: 5px;\n        transition: 0.3s ease;\n    }\n    \n    .cup.cup-small.full {\n        background-color: #6ab3f8;\n        color: #fff;\n    }\n    \n    .cups {\n        display: flex;\n        flex-wrap: wrap;\n        align-items: center;\n        justify-content: center;\n        width: 280px;\n    }\n    \n    .remained {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        text-align: center;\n        flex: 1;\n        transition: 0.3s ease;\n    }\n    \n    .remained span {\n        font-size: 20px;\n        font-weight: bold;\n    }\n    \n    .remained small {\n        font-size: 12px;\n    }\n    \n    .percentage {\n        background-color: #6ab3f8;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-weight: bold;\n        font-size: 30px;\n        height: 0;\n        transition: 0.3s ease;\n    }\n    \n    .text {\n        text-align: center;\n        margin: 0 0 5px;\n    }\n  \n"])));e.default=f},97:function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var i=t(17);var r=t(25);function c(n){return function(n){if(Array.isArray(n))return Object(i.a)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||Object(r.a)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=8.43404692.chunk.js.map