(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{250:function(t,e,n){var content=n(252);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(50).default)("761e863a",content,!0,{sourceMap:!1})},251:function(t,e,n){"use strict";n(250)},252:function(t,e,n){var o=n(49)(!1);o.push([t.i,".list.itemAcquisitionList[data-v-9d6bd7ee]{z-index:30;position:absolute;top:130px;right:60px;width:195px}.list.itemAcquisitionList>li[data-v-9d6bd7ee]{position:absolute;top:0;width:100%;transition:all .6s;color:#fff}.list.itemAcquisitionList>li>.wrap[data-v-9d6bd7ee]{position:relative;-webkit-animation:item-acquisition-list-wrap-data-v-9d6bd7ee 5s 1;animation:item-acquisition-list-wrap-data-v-9d6bd7ee 5s 1}.list.itemAcquisitionList>li .image.item[data-v-9d6bd7ee]{position:absolute;left:-19px;bottom:-5px;width:50px;height:50px}.list.itemAcquisitionList>li .image.item img[data-v-9d6bd7ee]{position:absolute;top:50%;left:50%;transform:translate3d(-50%,-50%,0);z-index:1}.list.itemAcquisitionList>li .name[data-v-9d6bd7ee]{position:absolute;bottom:0;left:0;width:100%;height:26px;padding-left:40px;border-top-left-radius:13px;border-bottom-left-radius:13px;background:linear-gradient(90deg,rgba(0,0,0,.5) 0,rgba(0,0,0,.3) 40%,rgba(0,0,0,.05));color:#fff;font-size:15px;font-weight:700;line-height:27px;text-align:left}@-webkit-keyframes item-acquisition-list-wrap-data-v-9d6bd7ee{0%{opacity:0;transform:translate3d(20px,0,0)}5%{opacity:1;transform:translateZ(0)}90%{opacity:1;transform:translateZ(0)}to{opacity:0;transform:translate3d(20px,0,0)}}@keyframes item-acquisition-list-wrap-data-v-9d6bd7ee{0%{opacity:0;transform:translate3d(20px,0,0)}5%{opacity:1;transform:translateZ(0)}90%{opacity:1;transform:translateZ(0)}to{opacity:0;transform:translate3d(20px,0,0)}}",""]),t.exports=o},258:function(t,e,n){"use strict";n.r(e);n(243);var o=n(112),r=n(113),c=n(246),l=n(247),f=n(244),d=n(21),m=(n(48),n(28),n(245)),h=n(255);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},x=function(t){Object(c.a)(n,t);var e=v(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).itemAcquisitionList=[],t}return Object(r.a)(n,[{key:"created",value:function(){this.$nuxt.$on("zeldaItemAcquisition",this.onPushAcquisition)}},{key:"beforeDestroy",value:function(){this.$nuxt.$off("zeldaItemAcquisition")}},{key:"onPushAcquisition",value:function(t){this.itemAcquisitionList.push(t),this.changeItemAcquisitionListTranslate(this.itemAcquisitionList.length)}},{key:"itemAnimationEnd",value:function(t){Object(h.remove)(this.itemAcquisitionList,(function(e){return e.timeStamp===t.key})),this.itemAcquisitionList.length<=1&&(this.itemAcquisitionList=[]),this.$forceUpdate()}},{key:"changeItemAcquisitionListTranslate",value:function(t){var e=t;this.itemAcquisitionList.forEach((function(t){t.y=60*e,e-=1}))}}]),n}(m.b),A=x=y([Object(m.a)({directives:{itemAcquisitionListItem:{inserted:function(element,t,e){element.addEventListener("animationend",(function(){e.context.itemAnimationEnd(e)}),!0)}}}})],x),w=(n(251),n(37)),component=Object(w.a)(A,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"list itemAcquisitionList"},t._l(t.itemAcquisitionList,(function(e){return n("li",{directives:[{name:"itemAcquisitionListItem",rawName:"v-itemAcquisitionListItem"}],key:e.timeStamp,style:{transform:"translate3d(0,"+e.y+"px, 0)"}},[n("div",{staticClass:"wrap"},[n("p",{staticClass:"image item"},[n("img",{attrs:{src:e.image,width:"100%"}})]),t._v(" "),n("p",{staticClass:"name"},[t._v(t._s(e.name))])])])})),0)}),[],!1,null,"9d6bd7ee",null);e.default=component.exports}}]);