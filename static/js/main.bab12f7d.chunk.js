(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(3),c=n.n(s),r=n(4),a=n(5),i=n(7),l=n(6),o=n(1),d=n(0),u=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(r.a)(this,n);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={pressedKey:""},e.hundleDocumentKeybordEvent=function(t){e.setState({pressedKey:t.key})},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.hundleDocumentKeybordEvent)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.hundleDocumentKeybordEvent)}},{key:"render",value:function(){var e=this.state.pressedKey;return Object(d.jsxs)("div",{className:"p-3",children:[Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("symbol",{id:"info-fill",viewBox:"0 0 16 16",children:Object(d.jsx)("path",{d:"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"})})}),Object(d.jsxs)("div",{className:"App alert alert-primary d-flex align-items-center",role:"alert",children:[Object(d.jsx)("svg",{className:"bi flex-shrink-0 me-2",role:"img",children:Object(d.jsx)("use",{href:"#info-fill"})}),Object(d.jsx)("div",{className:"App__message display-3",children:e.length?"The last pressed key is [".concat(e,"]"):"Nothing was pressed yet"})]})]})}}]),n}(o.Component);n(13);c.a.render(Object(d.jsx)(u,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.bab12f7d.chunk.js.map