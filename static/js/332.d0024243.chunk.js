"use strict";(self.webpackChunkcurrency_exchange=self.webpackChunkcurrency_exchange||[]).push([[332],{7587:function(e,t,n){n(2791);var r=n(184);t.Z=function(e){var t=e.children;return(0,r.jsx)("section",{className:"exchange_layout container-fluid",children:t})}},6332:function(e,t,n){n.r(t),n.d(t,{default:function(){return J}});var r=n(9434),c=function(e){return e.currencyList.data},a=function(e){return e.currencyList.status},u=function(e){return e.currencyList.error},o=function(e){return e.currencyList.focusedCell},i=function(e){return e.currencyList.changedCurrency},s=function(e){return e.currencyList.editTypeError},l=function(e){return e.currencyList.editValueError},d=n(8240),h=n(1087),p=n(184),y=function(e){var t=e.errorData,n=t.statusText,r=t.data;return(0,p.jsxs)("section",{className:"error-429",children:[(0,p.jsx)("h2",{className:"error-header",children:n}),(0,p.jsx)("span",{children:r}),(0,p.jsxs)("span",{children:["Try to ",(0,p.jsx)(h.rU,{to:"/",children:"reload page"})]})]})},f=function(e){return 429===e.status?(0,p.jsx)(y,{errorData:e}):null},v=function(e){var t=e.errorData;return(0,p.jsxs)("section",{className:"exchange_error",children:[(0,p.jsx)("span",{className:"error-default",children:"Oops! Something went wrong."}),f(t)]})},x=n(4923),g=n(9439),m=n(2791),b=n(4942),T=n(5821),C=n(7843),j=function(e){var t=e.event,n=e.initValue,r=e.setText;if(t.target){var c=t.target,a=c.value,u=function(e){var t=e.newValue,n=e.initValue,r=t/10,c=Math.abs(t-Number(n))>r;return T.Z.dispatch((0,C.Y_)({editErrorType:"editValueError",value:c})),c}({inputEl:c,newValue:Number(a),initValue:Number(n)}),o=function(e){var t=!e.inputEl.checkValidity();return T.Z.dispatch((0,C.Y_)({editErrorType:"editTypeError",value:t})),t}({inputEl:c});r(a),function(e){var t,n=e.inputEl,r=e.disabled,c=null===(t=n.closest(".exchange_cell-edit-group"))||void 0===t?void 0:t.querySelector(".btn-outline-primary");c&&(c.disabled=r)}({inputEl:c,disabled:u||o})}},N=function(e){var t=e.initText,n=e.text,r=e.ccy,c=e.exchangeType,a=e.setText,u=e.onChange;return(0,p.jsxs)("div",{className:"exchange_cell-edit-group",children:[(0,p.jsx)("input",{type:"text",className:"cell-input",value:n,"data-testid":"edit-cell-input",pattern:"^\\d*(\\.\\d{0,5})?$",onChange:function(e){return j({event:e,initValue:t,setText:a})}}),(0,p.jsxs)("div",{className:"btn-group",children:[(0,p.jsx)("button",{type:"button",className:"btn btn-outline-primary","data-testid":"edit-save-btn",onClick:function(){return function(e){var t=e.text,n=e.ccy,r=e.exchangeType,c=e.onChange;c&&c(t),T.Z.dispatch((0,C.Eb)((0,b.Z)({ccy:n},r,t))),T.Z.dispatch((0,C.GM)())}({text:n,ccy:r,exchangeType:c,onChange:u})},children:"\u2713"}),(0,p.jsx)("button",{type:"button",className:"btn btn-outline-danger","data-testid":"edit-close-btn",onClick:function(){return function(e){var t=e.initText;(0,e.setText)(t),T.Z.dispatch((0,C.GM)())}({initText:t,setText:a})},children:"\u2573"})]})]})},Z=function(e){var t=e.value,n=void 0===t?"":t,c=e.id,a=e.ccy,u=e.exchangeType,i=e.onChange,s=(0,m.useState)(n),l=(0,g.Z)(s,2),d=l[0],h=l[1],y=(0,r.v9)(o);return(0,m.useEffect)((function(){h(n)}),[n]),y===c?N({initText:n,text:d,ccy:a,exchangeType:u,setText:h,onChange:i}):y!==c?(0,p.jsx)("div",{"data-testid":"table-cell",onClick:function(){return function(e){var t=e.id,n=e.initText;(0,e.setText)(n),T.Z.dispatch((0,C.G6)(t))}({id:c,initText:n,setText:h})},children:d.substring(0,d.indexOf(".")+3)}):null},I=function(e){var t=e.value,n=e.id,r=e.ccy,c=e.exchangeType,a=t;return(0,p.jsx)("td",{className:"cur-value-col text-center","data-editable":"true",children:(0,p.jsx)(Z,{value:a,id:n,ccy:r,exchangeType:c,onChange:function(e){return a=e}})})},E=function(e){var t=e.currencyList,n=(0,r.v9)(s),c=(0,r.v9)(l);return(0,p.jsxs)("table",{className:"exchange_table table table-bordered table-hover table-fixed",children:[(0,p.jsx)("thead",{className:"table-dark",children:(0,p.jsxs)("tr",{children:[(0,p.jsx)("th",{scope:"col",className:"cur-name-col text-center",children:"Currency/Current Date"}),(0,p.jsx)("th",{scope:"col",className:"cur-value-col text-center",children:"Buy"}),(0,p.jsx)("th",{scope:"col",className:"cur-value-col text-center",children:"Sell"})]})}),(0,p.jsx)("tbody",{children:t.map((function(e){var t=e.ccy,n=e.buy,r=e.sale;return(0,p.jsxs)("tr",{children:[(0,p.jsxs)("th",{scope:"row",className:"text-center",children:[t,"/UAH"]}),(0,p.jsx)(I,{value:n,id:t+"ToBuy",ccy:t,exchangeType:"buy"}),(0,p.jsx)(I,{value:r,id:t+"ToSale",ccy:t,exchangeType:"sale"})]},t)}))}),(0,p.jsx)("tfoot",{children:(0,p.jsx)("tr",{children:(0,p.jsx)("td",{colSpan:3,children:(0,p.jsxs)("div",{className:"error-validation",children:[n?"* Numbers with a max of five decimal places are allowed.":"",c?"* Possible range of change +/- 10% from the initial value":""]})})})})]})},G=n(4165);function S(e,t,n,r,c,a,u){try{var o=e[a](u),i=o.value}catch(s){return void n(s)}o.done?t(i):Promise.resolve(i).then(r,c)}var _=function(){var e,t=(e=(0,G.Z)().mark((function e(){return(0,G.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L()||T.Z.dispatch((0,C.lK)()),e.abrupt("return");case 3:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,c){var a=e.apply(t,n);function u(e){S(a,r,c,u,o,"next",e)}function o(e){S(a,r,c,u,o,"throw",e)}u(void 0)}))});return function(){return t.apply(this,arguments)}}(),L=function(){var e="Error429",t=Number(localStorage.getItem(e))||0;if(4===t){return T.Z.dispatch((0,C.e2)({data:"Too many attempts to load data.",status:429,statusText:"Too many attempts"})),localStorage.removeItem(e),!0}return localStorage.setItem("Error429",JSON.stringify(t+1)),!1},w=function(){return(0,p.jsx)("button",{className:"currency-list_reload-btn exchange_btn btn btn-dark","data-toggle":"tooltip","data-placement":"top",title:"Reload currency data",onClick:_,children:"\u21bb"})},k=function(){var e=(0,r.v9)(c),t=(0,r.v9)(a),n=(0,r.v9)(u);return function(e){var t=(0,m.useRef)(),n=(0,m.useRef)(!1),r=(0,m.useRef)(!1),c=(0,m.useState)(0),a=(0,g.Z)(c,2),u=(a[0],a[1]);n.current&&(r.current=!0),(0,m.useEffect)((function(){return n.current||(t.current=e(),n.current=!0),u((function(e){return e+1})),function(){r.current&&t.current&&t.current()}}),[])}((function(){_()})),(0,p.jsxs)(d.Z,{classList:"currency-list",children:["loading"===t&&(0,p.jsx)(x.Z,{}),"success"===t&&(0,p.jsx)(w,{}),"success"===t&&(0,p.jsx)(E,{currencyList:e}),"failed"===t&&(0,p.jsx)(v,{errorData:n})]})},V=n(3433),F=function(e){return e.currencyCounter.currencyToChange},H=function(e){return e.currencyCounter.currencyToGet},O=n(9906),U=function(e){return{type:O.fY,payload:{currencyToChange:e}}},Y=function(e){return{type:O.lD,payload:{currencyValueToChange:e}}},A=function(e){var t=e.counterInput,n=e.amount,r=T.Z.getState().currencyCounter.currencyToChange,c=T.Z.getState().currencyCounter.currencyToGet;return r.name===c.name?n:"UAH"===r.name||"UAH"===c.name?function(e){var t=e.amount,n=e.stateToChange,r=e.stateToGet,c="UAH"===n.name?r:n,a=c.buy,u=c.sale;return"UAH"===n.name?Number(t)/Number(u):Number(t)*Number(a)}({counterInput:t,amount:n,stateToChange:r,stateToGet:c}).toFixed(4):function(e){var t=e.counterInput,n=e.amount,r=e.stateToChange,c=e.stateToGet,a="currencyToChange"===t?r.buy:c.buy,u="currencyToChange"===t?c.sale:r.sale;return Number(n)*Number(a)/Number(u)}({counterInput:t,amount:n,stateToChange:r,stateToGet:c}).toFixed(4)},D=function(e){var t=e.inputEl,n=e.counterInput,r=Number(t.value).toFixed(4),c="currencyToChange"===n?"currencyToGet":"currencyToChange";T.Z.dispatch(Y({counterInputType:n,value:r}));var a=A({counterInput:n,amount:r});T.Z.dispatch(Y({counterInputType:c,value:a}))},q=function(e){var t=e.counterInput,n=e.selectedOption,r=e.currencyListCCY;return(0,p.jsx)("div",{className:"input-drop-down input-group-append",children:(0,p.jsx)("select",{className:"form-select","aria-label":"Default select example",value:n.name,onChange:function(e){return function(e){var t,n=e.event,r=e.counterInput,c=n.target,a=null===(t=c.closest(".exchange_counter"))||void 0===t?void 0:t.querySelector("#currencyToChange"),u=c.value,o=T.Z.getState().currencyList.data,i=[{ccy:"UAH",sale:"1",buy:"1",base_ccy:"UAH"}].concat((0,V.Z)(o)).find((function(e){return e.ccy===u}));if(i){var s=i.ccy,l=i.sale,d=i.buy;T.Z.dispatch(U({counterInputType:r,counterCurrency:{name:s,value:"",sale:l,buy:d}})),D({counterInput:"currencyToChange",inputEl:a})}}({event:e,counterInput:t})},children:r.map((function(e){return(0,p.jsx)("option",{value:e,children:e},e)}))})})},M=function(e){var t=e.label,n=void 0===t?"":t,r=e.selectedOption,c=e.counterInput,a=e.currencyListCCY;return(0,p.jsxs)("div",{className:"input-group",children:[(0,p.jsxs)("div",{className:"form-floating mb-3",children:[(0,p.jsx)("input",{type:"text",className:"floating-input form-control",id:c,"aria-label":n,name:"floatingInput",pattern:"^\\d*(\\.\\d{0,5})?$",placeholder:n,value:r.value,onChange:function(e){return function(e){var t=e.event,n=e.counterInput,r=t.target;D({inputEl:r,counterInput:n})}({event:e,counterInput:c})}}),(0,p.jsx)("label",{className:"floating-input-label",htmlFor:"floatingInput",children:n})]}),(0,p.jsx)(q,{counterInput:c,selectedOption:r,currencyListCCY:a})]})},R=function(e){var t,n=e.event.target,r=null===(t=n.closest(".exchange_counter"))||void 0===t?void 0:t.querySelector("#currencyToChange"),c="8644"===n.value;n.innerHTML=c?"&#8646;":"&#8644;",n.value=c?"8646":"8644",T.Z.dispatch({type:O.Fe}),D({counterInput:"currencyToChange",inputEl:r})},P=n(1413),B=function(){var e=(0,m.useState)([]),t=(0,g.Z)(e,2),n=t[0],u=t[1],o=(0,r.v9)(a),s=(0,r.v9)(c),l=(0,r.v9)(F),h=(0,r.v9)(H),y=(0,r.v9)(i);return(0,m.useEffect)((function(){if(s.length&&!n.length){var e=s[0].base_ccy,t=s.map((function(e){return e.ccy}));!function(e){var t=e.selectedCurToGet,n=e.firstForeignCurrency;if(!t.name){var r=n.ccy,c=n.buy,a=n.sale,u={name:r,buy:c,sale:a,value:(1/Number(a)).toFixed(4)};T.Z.dispatch(U({counterInputType:"currencyToGet",counterCurrency:u}))}}({selectedCurToGet:h,firstForeignCurrency:s[0]}),u([e].concat((0,V.Z)(t)))}}),[s]),(0,m.useEffect)((function(){!function(e){var t=e.changedCurrency,n=e.selectedCurToChange,r=e.selectedCurToGet;if(t){var c=t.ccy,a=t.sale,u=t.buy,o=n.name===c?n:r;if(o.name===t.ccy){var i=n.name===c?"currencyToChange":"currencyToGet",s=document.querySelector("#currencyToChange");T.Z.dispatch(U({counterInputType:i,counterCurrency:(0,P.Z)((0,P.Z)({},o),{},{sale:a||o.sale,buy:u||o.buy})})),D({counterInput:"currencyToChange",inputEl:s})}}}({changedCurrency:y,selectedCurToChange:l,selectedCurToGet:h})}),[y]),(0,p.jsx)(d.Z,{children:"success"===o&&(0,p.jsxs)("section",{className:"exchange_counter",children:[(0,p.jsx)(M,{label:"Change",counterInput:"currencyToChange",selectedOption:l,currencyListCCY:n}),(0,p.jsx)("button",{type:"button",className:"exchange_btn btn-swap btn btn-dark",onClick:function(e){return R({event:e})},value:"8644",children:"\u21c4"}),(0,p.jsx)(M,{label:"Get",counterInput:"currencyToGet",selectedOption:h,currencyListCCY:n})]})})},$=n(7587),J=function(){return(0,p.jsx)($.Z,{children:(0,p.jsxs)("div",{className:"exchange_home-page row",children:[(0,p.jsx)(k,{}),(0,p.jsx)(B,{})]})})}}}]);
//# sourceMappingURL=332.d0024243.chunk.js.map