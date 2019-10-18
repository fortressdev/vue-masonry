/*!
 * Vue.js plugin for Masonry layouts 
 *  https://github.com/shershen08/vue-masonry/ 
 *  file:vue-masonry-plugin-window.js
 */
window["vue-masonry-plugin"]=function(i){var n={};function o(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return i[t].call(e.exports,e,e.exports,o),e.l=!0,e.exports}return o.m=i,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(i,n,function(t){return e[t]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=8)}([function(t,e,i){var n,o;"undefined"!=typeof window&&window,void 0===(o="function"==typeof(n=function(){"use strict";function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{};return(i[t]=i[t]||{})[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var n=this._onceEvents&&this._onceEvents[t],o=0;o<i.length;o++){var r=i[o];n&&n[r]&&(this.off(t,r),delete n[r]),r.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t})?n.call(e,i,e,t):n)||(t.exports=o)},function(t,e,i){var n,o;window,void 0===(o="function"==typeof(n=function(){"use strict";function v(t){var e=parseFloat(t),i=-1==t.indexOf("%")&&!isNaN(e);return i&&e}var i="undefined"==typeof console?function(){}:function(t){console.error(t)},y=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],_=y.length;function E(t){var e=getComputedStyle(t);return e||i("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e}var b,I=!1;function x(t){if(function(){if(I)return;I=!0;var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style.boxSizing="border-box";var e=document.body||document.documentElement;e.appendChild(t);var i=E(t);b=200==Math.round(v(i.width)),x.isBoxSizeOuter=b,e.removeChild(t)}(),"string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var e=E(t);if("none"==e.display)return function(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<_;e++){var i=y[e];t[i]=0}return t}();var i={};i.width=t.offsetWidth,i.height=t.offsetHeight;for(var n=i.isBorderBox="border-box"==e.boxSizing,o=0;o<_;o++){var r=y[o],s=e[r],a=parseFloat(s);i[r]=isNaN(a)?0:a}var h=i.paddingLeft+i.paddingRight,u=i.paddingTop+i.paddingBottom,c=i.marginLeft+i.marginRight,d=i.marginTop+i.marginBottom,l=i.borderLeftWidth+i.borderRightWidth,f=i.borderTopWidth+i.borderBottomWidth,m=n&&b,p=v(e.width);!1!==p&&(i.width=p+(m?0:h+l));var g=v(e.height);return!1!==g&&(i.height=g+(m?0:u+f)),i.innerWidth=i.width-(h+l),i.innerHeight=i.height-(u+f),i.outerWidth=i.width+c,i.outerHeight=i.height+d,i}}return x})?n.call(e,i,e,t):n)||(t.exports=o)},function(t,e,i){var n,o,r;window,o=[i(4),i(1)],void 0===(r="function"==typeof(n=function(t,u){"use strict";var e=t.create("masonry");e.compatOptions.fitWidth="isFitWidth";var i=e.prototype;return i._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},i.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],e=t&&t.element;this.columnWidth=e&&u(e).outerWidth||this.containerWidth}var i=this.columnWidth+=this.gutter,n=this.containerWidth+this.gutter,o=n/i,r=i-n%i;o=Math[r&&r<1?"round":"floor"](o),this.cols=Math.max(o,1)},i.getContainerWidth=function(){var t=this._getOption("fitWidth")?this.element.parentNode:this.element,e=u(t);this.containerWidth=e&&e.innerWidth},i._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=Math[e&&e<1?"round":"ceil"](t.size.outerWidth/this.columnWidth);i=Math.min(i,this.cols);for(var n=this[this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition"](i,t),o={x:this.columnWidth*n.col,y:n.y},r=n.y+t.size.outerHeight,s=i+n.col,a=n.col;a<s;a++)this.colYs[a]=r;return o},i._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},i._getTopColGroup=function(t){if(t<2)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;n<i;n++)e[n]=this._getColGroupY(n,t);return e},i._getColGroupY=function(t,e){if(e<2)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},i._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols;i=1<t&&i+t>this.cols?0:i;var n=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=n?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},i._manageStamp=function(t){var e=u(t),i=this._getElementOffset(t),n=this._getOption("originLeft")?i.left:i.right,o=n+e.outerWidth,r=Math.floor(n/this.columnWidth);r=Math.max(0,r);var s=Math.floor(o/this.columnWidth);s-=o%this.columnWidth?0:1,s=Math.min(this.cols-1,s);for(var a=(this._getOption("originTop")?i.top:i.bottom)+e.outerHeight,h=r;h<=s;h++)this.colYs[h]=Math.max(a,this.colYs[h])},i._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},i._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},i.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},e})?n.apply(e,o):n)||(t.exports=r)},function(t,i,n){var o,r;!function(e){"use strict";o=[n(0)],void 0===(r=function(t){return function(e,t){"use strict";var o=e.jQuery,r=e.console;function s(t,e){for(var i in e){t[i]=e[i]}return t}var i=Array.prototype.slice;function a(t){if(Array.isArray(t)){return t}var e=typeof t=="object"&&typeof t.length=="number";if(e){return i.call(t)}return[t]}function h(t,e,i){if(!(this instanceof h)){return new h(t,e,i)}var n=t;if(typeof t=="string"){n=document.querySelectorAll(t)}if(!n){r.error("Bad element for imagesLoaded "+(n||t));return}this.elements=a(n);this.options=s({},this.options);if(typeof e=="function"){i=e}else{s(this.options,e)}if(i){this.on("always",i)}this.getImages();if(o){this.jqDeferred=new o.Deferred}setTimeout(this.check.bind(this))}(h.prototype=Object.create(t.prototype)).options={},h.prototype.getImages=function(){this.images=[];this.elements.forEach(this.addElementImages,this)},h.prototype.addElementImages=function(t){if(t.nodeName=="IMG"){this.addImage(t)}if(this.options.background===true){this.addElementBackgroundImages(t)}var e=t.nodeType;if(!e||!u[e]){return}var i=t.querySelectorAll("img");for(var n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if(typeof this.options.background=="string"){var r=t.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}};var u={1:true,9:true,11:true};function n(t){this.img=t}function c(t,e){this.url=t;this.element=e;this.img=new Image}return h.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,t),n=i.exec(e.backgroundImage)}},h.prototype.addImage=function(t){var e=new n(t);this.images.push(e)},h.prototype.addBackground=function(t,e){var i=new c(t,e);this.images.push(i)},h.prototype.check=function(){var n=this;function e(t,e,i){setTimeout(function(){n.progress(t,e,i)})}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach(function(t){t.once("progress",e),t.check()}):this.complete()},h.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&r&&r.log("progress: "+i,t,e)},h.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},(n.prototype=Object.create(t.prototype)).check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},n.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},n.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},n.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},n.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},n.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},n.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},(c.prototype=Object.create(n.prototype)).check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},c.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},c.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},h.makeJQueryPlugin=function(t){(t=t||e.jQuery)&&((o=t).fn.imagesLoaded=function(t,e){return new h(this,t,e).jqDeferred.promise(o(this))})},h.makeJQueryPlugin(),h}(e,t)}.apply(i,o))||(t.exports=r)}("undefined"!=typeof window?window:this)},function(t,e,i){var n,r;!function(o){"use strict";n=[i(0),i(1),i(5),i(7)],void 0===(r=function(t,e,i,n){return function(t,e,r,s,n){"use strict";var a=t.console,h=t.jQuery,i=function(){},u=0,c={};function o(t,e){var i=s.getQueryElement(t);if(!i){if(a){a.error("Bad element for "+this.constructor.namespace+": "+(i||t))}return}this.element=i;if(h){this.$element=h(this.element)}this.options=s.extend({},this.constructor.defaults);this.option(e);var n=++u;this.element.outlayerGUID=n;c[n]=this;this._create();var o=this._getOption("initLayout");if(o){this.layout()}}o.namespace="outlayer",o.Item=n,o.defaults={containerStyle:{position:"relative"},initLayout:true,originLeft:true,originTop:true,resize:true,resizeContainer:true,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var d=o.prototype;function l(t){function e(){t.apply(this,arguments)}e.prototype=Object.create(t.prototype);e.prototype.constructor=e;return e}s.extend(d,e.prototype),d.option=function(t){s.extend(this.options,t)},d._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&this.options[e]!==undefined?this.options[e]:this.options[t]},o.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},d._create=function(){this.reloadItems();this.stamps=[];this.stamp(this.options.stamp);s.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");if(t){this.bindResize()}},d.reloadItems=function(){this.items=this._itemize(this.element.children)},d._itemize=function(t){var e=this._filterFindItemElements(t);var i=this.constructor.Item;var n=[];for(var o=0;o<e.length;o++){var r=e[o];var s=new i(r,this);n.push(s)}return n},d._filterFindItemElements=function(t){return s.filterFindElements(t,this.options.itemSelector)},d.getItemElements=function(){return this.items.map(function(t){return t.element})},d.layout=function(){this._resetLayout();this._manageStamps();var t=this._getOption("layoutInstant");var e=t!==undefined?t:!this._isLayoutInited;this.layoutItems(this.items,e);this._isLayoutInited=true},d._init=d.layout,d._resetLayout=function(){this.getSize()},d.getSize=function(){this.size=r(this.element)},d._getMeasurement=function(t,e){var i=this.options[t];var n;if(!i){this[t]=0}else{if(typeof i=="string"){n=this.element.querySelector(i)}else if(i instanceof HTMLElement){n=i}this[t]=n?r(n)[e]:i}},d.layoutItems=function(t,e){t=this._getItemsForLayout(t);this._layoutItems(t,e);this._postLayout()},d._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},d._layoutItems=function(t,i){this._emitCompleteOnItems("layout",t);if(!t||!t.length){return}var n=[];t.forEach(function(t){var e=this._getItemLayoutPosition(t);e.item=t;e.isInstant=i||t.isLayoutInstant;n.push(e)},this);this._processLayoutQueue(n)},d._getItemLayoutPosition=function(){return{x:0,y:0}},d._processLayoutQueue=function(t){this.updateStagger();t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},d.updateStagger=function(){var t=this.options.stagger;if(t===null||t===undefined){this.stagger=0;return}this.stagger=m(t);return this.stagger},d._positionItem=function(t,e,i,n,o){if(n){t.goTo(e,i)}else{t.stagger(o*this.stagger);t.moveTo(e,i)}},d._postLayout=function(){this.resizeContainer()},d.resizeContainer=function(){var t=this._getOption("resizeContainer");if(!t){return}var e=this._getContainerSize();if(e){this._setContainerMeasure(e.width,true);this._setContainerMeasure(e.height,false)}},d._getContainerSize=i,d._setContainerMeasure=function(t,e){if(t===undefined){return}var i=this.size;if(i.isBorderBox){t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth}t=Math.max(t,0);this.element.style[e?"width":"height"]=t+"px"},d._emitCompleteOnItems=function(e,t){var i=this;function n(){i.dispatchEvent(e+"Complete",null,[t])}var o=t.length;if(!t||!o){n();return}var r=0;function s(){r++;if(r==o){n()}}t.forEach(function(t){t.once(e,s)})},d.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;this.emitEvent(t,n);if(h){this.$element=this.$element||h(this.element);if(e){var o=h.Event(e);o.type=t;this.$element.trigger(o,i)}else{this.$element.trigger(t,i)}}},d.ignore=function(t){var e=this.getItem(t);if(e){e.isIgnored=true}},d.unignore=function(t){var e=this.getItem(t);if(e){delete e.isIgnored}},d.stamp=function(t){t=this._find(t);if(!t){return}this.stamps=this.stamps.concat(t);t.forEach(this.ignore,this)},d.unstamp=function(t){t=this._find(t);if(!t){return}t.forEach(function(t){s.removeFrom(this.stamps,t);this.unignore(t)},this)},d._find=function(t){if(!t){return}if(typeof t=="string"){t=this.element.querySelectorAll(t)}t=s.makeArray(t);return t},d._manageStamps=function(){if(!this.stamps||!this.stamps.length){return}this._getBoundingRect();this.stamps.forEach(this._manageStamp,this)},d._getBoundingRect=function(){var t=this.element.getBoundingClientRect();var e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},d._manageStamp=i,d._getElementOffset=function(t){var e=t.getBoundingClientRect();var i=this._boundingRect;var n=r(t);var o={left:e.left-i.left-n.marginLeft,top:e.top-i.top-n.marginTop,right:i.right-e.right-n.marginRight,bottom:i.bottom-e.bottom-n.marginBottom};return o},d.handleEvent=s.handleEvent,d.bindResize=function(){t.addEventListener("resize",this);this.isResizeBound=true},d.unbindResize=function(){t.removeEventListener("resize",this);this.isResizeBound=false},d.onresize=function(){this.resize()},s.debounceMethod(o,"onresize",100),d.resize=function(){if(!this.isResizeBound||!this.needsResizeLayout()){return}this.layout()},d.needsResizeLayout=function(){var t=r(this.element);var e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},d.addItems=function(t){var e=this._itemize(t);if(e.length){this.items=this.items.concat(e)}return e},d.appended=function(t){var e=this.addItems(t);if(!e.length){return}this.layoutItems(e,true);this.reveal(e)},d.prepended=function(t){var e=this._itemize(t);if(!e.length){return}var i=this.items.slice(0);this.items=e.concat(i);this._resetLayout();this._manageStamps();this.layoutItems(e,true);this.reveal(e);this.layoutItems(i)},d.reveal=function(t){this._emitCompleteOnItems("reveal",t);if(!t||!t.length){return}var i=this.updateStagger();t.forEach(function(t,e){t.stagger(e*i);t.reveal()})},d.hide=function(t){this._emitCompleteOnItems("hide",t);if(!t||!t.length){return}var i=this.updateStagger();t.forEach(function(t,e){t.stagger(e*i);t.hide()})},d.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},d.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},d.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t){return i}}},d.getItems=function(t){t=s.makeArray(t);var i=[];t.forEach(function(t){var e=this.getItem(t);if(e){i.push(e)}},this);return i},d.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e);if(!e||!e.length){return}e.forEach(function(t){t.remove();s.removeFrom(this.items,t)},this)},d.destroy=function(){var t=this.element.style;t.height="";t.position="";t.width="";this.items.forEach(function(t){t.destroy()});this.unbindResize();var e=this.element.outlayerGUID;delete c[e];delete this.element.outlayerGUID;if(h){h.removeData(this.element,this.constructor.namespace)}},o.data=function(t){t=s.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&c[e]},o.create=function(t,e){var i=l(o);i.defaults=s.extend({},o.defaults);s.extend(i.defaults,e);i.compatOptions=s.extend({},o.compatOptions);i.namespace=t;i.data=o.data;i.Item=l(n);s.htmlInit(i,t);if(h&&h.bridget){h.bridget(t,i)}return i};var f={ms:1,s:1e3};function m(t){if(typeof t=="number"){return t}var e=t.match(/(^\d*\.?\d*)(\w*)/);var i=e&&e[1];var n=e&&e[2];if(!i.length){return 0}i=parseFloat(i);var o=f[n]||1;return i*o}return o.Item=n,o}(o,t,e,i,n)}.apply(e,n))||(t.exports=r)}(window)},function(t,e,i){var n,o,r;r=window,n=[i(6)],void 0===(o=function(t){return function(u,r){"use strict";var c={extend:function(t,e){for(var i in e)t[i]=e[i];return t},modulo:function(t,e){return(t%e+e)%e}},i=Array.prototype.slice;c.makeArray=function(t){if(Array.isArray(t))return t;if(null==t)return[];var e="object"==typeof t&&"number"==typeof t.length;return e?i.call(t):[t]},c.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},c.getParent=function(t,e){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,r(t,e))return t},c.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},c.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},c.filterFindElements=function(t,n){t=c.makeArray(t);var o=[];return t.forEach(function(t){if(t instanceof HTMLElement)if(n){r(t,n)&&o.push(t);for(var e=t.querySelectorAll(n),i=0;i<e.length;i++)o.push(e[i])}else o.push(t)}),o},c.debounceMethod=function(t,e,n){n=n||100;var o=t.prototype[e],r=e+"Timeout";t.prototype[e]=function(){var t=this[r];clearTimeout(t);var e=arguments,i=this;this[r]=setTimeout(function(){o.apply(i,e),delete i[r]},n)}},c.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},c.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var d=u.console;return c.htmlInit=function(a,h){c.docReady(function(){var t=c.toDashed(h),o="data-"+t,e=document.querySelectorAll("["+o+"]"),i=document.querySelectorAll(".js-"+t),n=c.makeArray(e).concat(c.makeArray(i)),r=o+"-options",s=u.jQuery;n.forEach(function(e){var t,i=e.getAttribute(o)||e.getAttribute(r);try{t=i&&JSON.parse(i)}catch(t){return void(d&&d.error("Error parsing "+o+" on "+e.className+": "+t))}var n=new a(e,t);s&&s.data(e,h,n)})})},c}(r,t)}.apply(e,n))||(t.exports=o)},function(t,e,i){var n,o;!function(){"use strict";void 0===(o="function"==typeof(n=function(){"use strict";var n=function(){var t=window.Element.prototype;if(t.matches){return"matches"}if(t.matchesSelector){return"matchesSelector"}var e=["webkit","moz","ms","o"];for(var i=0;i<e.length;i++){var n=e[i];var o=n+"MatchesSelector";if(t[o]){return o}}}();return function t(e,i){return e[n](i)}})?n.call(e,i,e,t):n)||(t.exports=o)}(window)},function(t,e,i){var n,o,r;window,o=[i(0),i(1)],void 0===(r="function"==typeof(n=function(t,e){"use strict";var i=document.documentElement.style,n="string"==typeof i.transition?"transition":"WebkitTransition",o="string"==typeof i.transform?"transform":"WebkitTransform",r={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[n],s={transform:o,transition:n,transitionDuration:n+"Duration",transitionProperty:n+"Property",transitionDelay:n+"Delay"};function a(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var h=a.prototype=Object.create(t.prototype);h.constructor=a,h._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},h.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},h.getSize=function(){this.size=e(this.element)},h.css=function(t){var e=this.element.style;for(var i in t){var n=s[i]||i;e[n]=t[i]}},h.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),n=t[e?"left":"right"],o=t[i?"top":"bottom"],r=parseFloat(n),s=parseFloat(o),a=this.layout.size;-1!=n.indexOf("%")&&(r=r/100*a.width),-1!=o.indexOf("%")&&(s=s/100*a.height),r=isNaN(r)?0:r,s=isNaN(s)?0:s,r-=e?a.paddingLeft:a.paddingRight,s-=i?a.paddingTop:a.paddingBottom,this.position.x=r,this.position.y=s},h.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=i?"paddingLeft":"paddingRight",r=i?"left":"right",s=i?"right":"left",a=this.position.x+t[o];e[r]=this.getXValue(a),e[s]="";var h=n?"paddingTop":"paddingBottom",u=n?"top":"bottom",c=n?"bottom":"top",d=this.position.y+t[h];e[u]=this.getYValue(d),e[c]="",this.css(e),this.emitEvent("layout",[this])},h.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},h.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},h._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=t==this.position.x&&e==this.position.y;if(this.setPosition(t,e),!o||this.isTransitioning){var r=t-i,s=e-n,a={};a.transform=this.getTranslate(r,s),this.transition({to:a,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})}else this.layoutPosition()},h.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop");return"translate3d("+(t=i?t:-t)+"px, "+(e=n?e:-e)+"px, 0)"},h.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},h.moveTo=h._transitionTo,h.setPosition=function(t,e){this.position.x=parseFloat(t),this.position.y=parseFloat(e)},h._nonTransition=function(t){for(var e in this.css(t.to),t.isCleaning&&this._removeStyles(t.to),t.onTransitionEnd)t.onTransitionEnd[e].call(this)},h.transition=function(t){if(parseFloat(this.layout.options.transitionDuration)){var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);this.element.offsetHeight;null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0}else this._nonTransition(t)};var u="opacity,"+function(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}(o);h.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:u,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(r,this,!1)}},h.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},h.onotransitionend=function(t){this.ontransitionend(t)};var c={"-webkit-transform":"transform"};h.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,i=c[t.propertyName]||t.propertyName;if(delete e.ingProperties[i],function(t){for(var e in t)return!1;return!null}(e.ingProperties)&&this.disableTransition(),i in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[i]),i in e.onEnd){var n=e.onEnd[i];n.call(this),delete e.onEnd[i]}this.emitEvent("transitionEnd",[this])}},h.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(r,this,!1),this.isTransitioning=!1},h._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var d={transitionProperty:"",transitionDuration:"",transitionDelay:""};return h.removeTransitionStyles=function(){this.css(d)},h.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},h.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},h.remove=function(){n&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),this.hide()):this.removeElem()},h.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={};e[this.getHideRevealTransitionEndProperty("visibleStyle")]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},h.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},h.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},h.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={};e[this.getHideRevealTransitionEndProperty("hiddenStyle")]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},h.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},h.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},a})?n.apply(e,o):n)||(t.exports=r)},function(t,e,i){"use strict";i.r(e);function u(t){var e={};return Array.prototype.slice.call(t).forEach(function(t){-1<Object.keys(s).indexOf(t.name)&&(-1<t.name.indexOf("origin")?e[s[t.name]]=function(t){return"true"===(t+"").toLowerCase()}(t.value):"column-width"===t.name||"gutter"===t.name?e[s[t.name]]=function(t){return isNaN(t)?t:parseInt(t)}(t.value):e[s[t.name]]=t.value)}),e}function n(){}var o=i(2),c=i.n(o),r=i(3),d=i.n(r),s={"column-width":"columnWidth","transition-duration":"transitionDuration","item-selector":"itemSelector","origin-left":"originLeft","origin-top":"originTop","fit-width":"fitWidth",stamp:"stamp",gutter:"gutter","percent-position":"percentPosition","horizontal-order":"horizontalOrder",stagger:"stagger"},l="vuemasonry.itemAdded",f="vuemasonry.itemRemoved",m="vuemasonry.imageLoaded",p="vuemasonry.destroy";n.install=function(s,t){var a=new s({}),h="VueMasonry";s.directive("masonry",{props:["transitionDuration"," itemSelector"],inserted:function(t,e){if(!c.a)throw new Error("Masonry plugin is not defined. Please check it's connected and parsed correctly.");function i(){n.reloadItems(),n.layout()}var n=new c.a(t,u(t.attributes)),o=e.value||h;s.nextTick(function(){i()});function r(t){i()}a.$on("".concat(l,"__").concat(o),r),a.$on("".concat(f,"__").concat(o),r),a.$on("".concat(m,"__").concat(o),r),a.$on("".concat(p,"__").concat(o),function t(e){a.$off("".concat(l,"__").concat(o),r),a.$off("".concat(f,"__").concat(o),r),a.$off("".concat(m,"__").concat(o),r),a.$off("".concat(p,"__").concat(o),t),n.destroy()})},unbind:function(t,e){var i=e.value||h;a.$emit("".concat(p,"__").concat(i))}}),s.directive("masonryTile",{inserted:function(t,e){var i=e.value||h;a.$emit("".concat(l,"__").concat(i),{element:t}),new d.a(t,function(){a.$emit("".concat(m,"__").concat(i),{element:t})})},unbind:function(t,e){var i=e.value||h;a.$emit("".concat(f,"__").concat(i),{element:t})}}),s.prototype.$redrawVueMasonry=function(t){var e=t||h;a.$emit("".concat(l,"__").concat(e))}},i.d(e,"VueMasonryPlugin",function(){return n});e.default=n}]);