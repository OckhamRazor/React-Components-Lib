webpackJsonp([2],{240:function(e,t,i){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}var r=i(1),a=s(r);i(241),i(242),i(243),i(244);var n=i(245),o="/assets/img/placeholder.png",l=[{imgLink:"#",imgSrc:"/assets/img/2.jpg"},{imgLink:"#",imgSrc:"/assets/img/3.jpg"},{imgLink:"#",imgSrc:"/assets/img/2.jpg"},{imgLink:"#",imgSrc:"/assets/img/1.jpg"}],d=3e3,u=a["default"].createClass({displayName:"SliderContainer",getInitialState:function(){return{mouse:!1,index:0,isShow:[!1,!1,!1,!0],isLoading:[!1,!1,!1,!0]}},timer:null,slider:function(){var e=this.state.index-1;e=e<0?l.length-1:e;var t=this.state.isShow,i=this.state.isLoading;i=i.map(function(t,i){return i===e||t}),t=t.map(function(t,i){return i===e}),this.setState({index:e,isShow:t,isLoading:i})},handleMouseoverNav:function(e){var t=+e.target.getAttribute("data-index"),i=this.state.isShow,s=this.state.isLoading;s=s.map(function(e,i){return i===t||e}),i=i.map(function(e,i){return i===t}),this.setState({index:t,isShow:i,isLoading:s})},handleMouseEnterImage:function(){clearInterval(this.timer),this.timer=null,this.setState({mouse:!0})},handleMouseLeaveImage:function(){this.timer=setInterval(this.slider,d),this.setState({mouse:!1})},handlePre:function(){var e=this.state.index+1;e=e>l.length-1?0:e;var t=this.state.isShow,i=this.state.isLoading;i=i.map(function(t,i){return i===e||t}),t=t.map(function(t,i){return i===e}),this.setState({index:e,isShow:t,isLoading:i})},handleNext:function(){this.slider()},componentDidMount:function(){var e=l.length;this.setState({index:e-1}),this.timer=setInterval(this.slider,d)},componentWillUnmount:function(){clearInterval(this.timer),this.timer=null},render:function(){return a["default"].createElement(n,{mouse:this.state.mouse,isShow:this.state.isShow,isLoading:this.state.isLoading,playList:l,placeholderSrc:o,onMouseoverNav:this.handleMouseoverNav,onMouseEnterImage:this.handleMouseEnterImage,onMouseLeaveImage:this.handleMouseLeaveImage,onPre:this.handlePre,onNext:this.handleNext})}});e.exports=u},241:function(e,t,i){e.exports=i.p+"assets/img/1.jpg"},242:function(e,t,i){e.exports=i.p+"assets/img/2.jpg"},243:function(e,t,i){e.exports=i.p+"assets/img/3.jpg"},244:function(e,t,i){e.exports=i.p+"assets/img/placeholder.png"},245:function(e,t,i){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}function r(e){return n["default"].createElement("div",{className:"slider",onMouseEnter:e.onMouseEnterImage,onMouseLeave:e.onMouseLeaveImage},n["default"].createElement("ul",{className:"slider-list"},e.playList.map(function(t,i){return n["default"].createElement("li",{className:e.isShow[i]===!0?"slider-item":"slider-item hide",key:i},n["default"].createElement("a",{target:"_blank",href:t.imgLink},n["default"].createElement("img",{src:e.isLoading[i]===!0?e.playList[i].imgSrc:e.placeholderSrc,className:"slider-img"})))})),n["default"].createElement("ul",{className:"slider-nav"},e.playList.map(function(t,i){return n["default"].createElement("li",{className:e.isShow[i]===!0?"slider-active":"",key:i,"data-index":i,onMouseOver:e.onMouseoverNav},e.playList.length-i)})),n["default"].createElement("div",{className:e.mouse?"slider-arrow slider-pre slider-arrow-active":"slider-arrow slider-pre",onClick:e.onPre}," < "),n["default"].createElement("div",{className:e.mouse?"slider-arrow slider-next slider-arrow-active":"slider-arrow slider-next",onClick:e.onNext}," > "))}var a=i(1),n=s(a);i(246);var o=n["default"].PropTypes;r.propTypes={mouse:o.bool.isRequired,isShow:o.array.isRequired,isLoading:o.array.isRequired,placeholderSrc:o.string.isRequired,playList:o.array.isRequired,onMouseoverNav:o.func.isRequired,onMouseEnterImage:o.func.isRequired,onMouseLeaveImage:o.func.isRequired,onPre:o.func.isRequired,onNext:o.func.isRequired},e.exports=r},246:function(e,t,i){var s=i(247);"string"==typeof s&&(s=[[e.id,s,""]]);i(232)(s,{});s.locals&&(e.exports=s.locals)},247:function(e,t,i){t=e.exports=i(231)(),t.push([e.id,".slider{width:750px;height:450px}.slider,.slider-list{position:relative}.slider-item{position:absolute;left:0;top:0;transition:opacity .2s ease-out;opacity:1;z-index:1}.hide{z-index:0;opacity:0}.slider-item img{width:750px;height:450px}.slider-nav{position:absolute;color:#fff;display:flex;flex-direction:row-reverse;z-index:2;bottom:0;left:50%;transform:translate(-50%)}.slider-nav li{margin-left:.2em;margin-right:.2em;margin-bottom:.2em;width:1.2em;height:1.2em;line-height:1.2em;border-radius:50%;background:silver;text-align:center}.slider-nav .slider-active{background:orange}.slider-arrow{display:none;position:absolute;z-index:2;background:rgba(0,0,0,.3);width:2em;height:2.5em;line-height:2.5em;text-align:center;top:calc(50% - 1.25em);font-weight:600;font-size:1.2em;color:#fff8dc;cursor:pointer}.slider-pre{left:0;border-radius:0 5px 5px 0}.slider-next{right:0;border-radius:5px 0 0 5px}.slider-arrow-active{display:block}",""])}});