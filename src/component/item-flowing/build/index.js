module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=require("react")},function(e,t,n){e.exports=n(3)()},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(1),i=n.n(a);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var l=function(e){var t=e.flowItems,n=e.changedTime,a=e.topTime,i=e.className,c=e.loop,l=u(Object(r.useState)([]),2),s=l[0],f=l[1],p=Object(r.useRef)();Object(r.useEffect)((function(){c?void 0!==a&&void 0!==n?a>n?function(){for(var e=a/n,r=e-t.length,o=[],i=0;i<=r;i++)t.forEach((function(t){o.length<e&&o.push(t)}));f.apply(void 0,[o])}():console.log("topTime value can't be smaller than changedTime value!"):console.log("Must be sent as both topTime and cnagedTime values props."):void 0!==a&&void 0!==n?console.log("When loop is false, values ​​of topTime and changedTime cannot be sent as props at the same time."):void 0===a&&void 0===n?console.log("Send value topTime or changedTime as props."):f.apply(void 0,[t])}),[]),Object(r.useEffect)((function(){if(s.length>0)for(var e=0;e<s.length;e++)!function(e){setTimeout((function(){p.current.innerText=s[e]}),d(e))}(e)}),[s]);var d=function(e){return n&&void 0===a?n*e:a&&void 0===n?a/t.length*e:c&&void 0!==a&&void 0!==n?n*e:void 0};return o.a.createElement("span",{className:i,ref:p},t[0])};t.default=l,l.propTypes={flowItems:i.a.array.isRequired,changedTime:i.a.number,topTime:i.a.number,className:i.a.string,loop:i.a.bool},l.defaultProps={loop:!0,changedTime:1e3}},function(e,t,n){"use strict";var r=n(4);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}]);