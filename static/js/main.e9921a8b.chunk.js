(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,c){},13:function(t,e,c){},15:function(t,e,c){"use strict";c.r(e);var n=c(7),o=c.n(n),a=c(2),i=c(3),s=c(5),l=c(4),r=c(1),u=c.n(r),h=(c(12),c(13),c(0)),m=function(t){Object(s.a)(c,t);var e=Object(l.a)(c);function c(){var t;Object(a.a)(this,c);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).timeId=void 0,t.state={date:new Date},t}return Object(i.a)(c,[{key:"componentDidMount",value:function(){this.tick()}},{key:"componentDidUpdate",value:function(t){var e=[t.clockName,this.props.clockName],c=e[0],n=e[1];c!==n&&console.log("The clock was renamed from ".concat(c," to ").concat(n))}},{key:"componentWillUnmount",value:function(){this.timeId&&clearInterval(this.timeId)}},{key:"tick",value:function(){var t=this;this.timeId=setInterval((function(){t.setState({date:new Date}),console.log(t.state.date.toLocaleTimeString())}),1e3)}},{key:"render",value:function(){return Object(h.jsx)("p",{className:"clock-text",children:"Current time: ".concat(this.state.date.toLocaleTimeString())})}}]),c}(u.a.Component),k=function(t){Object(s.a)(c,t);var e=Object(l.a)(c);function c(){var t;Object(a.a)(this,c);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={isClockVisible:!0,clockName:0},t.showClock=function(){t.setState({isClockVisible:!0})},t.hideClock=function(){t.setState({isClockVisible:!1})},t.setRandomName=function(){t.setState({clockName:Math.floor(256*Math.random())})},t}return Object(i.a)(c,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"React clock"}),Object(h.jsx)("button",{type:"button",onClick:this.showClock,className:"App__button",children:"Show Clock"}),Object(h.jsx)("button",{type:"button",onClick:this.hideClock,className:"App__button",children:"Hide Clock"}),Object(h.jsx)("button",{type:"button",onClick:this.setRandomName,className:"App__button",children:"Set Random Name"}),this.state.isClockVisible&&Object(h.jsx)(m,{clockName:this.state.clockName})]})}}]),c}(u.a.Component),d=k;o.a.render(Object(h.jsx)(d,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e9921a8b.chunk.js.map