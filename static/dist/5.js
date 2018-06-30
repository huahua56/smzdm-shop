webpackJsonp([5],{533:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(591),o=n.n(a);for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);var r=n(618),i=n(135),c=i(o.a,r.a,!1,null,null,null);e.default=c.exports},534:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(542),s=a(o),r=n(546),i=a(r),c=n(550),u=a(c),d=n(554),l=a(d);e.default={components:{"header-component":s.default,"footer-component":i.default,"nav-component":u.default,"tags-component":l.default}}},535:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{search:""}},methods:{goSearch:function(){this.$router.push({path:"/search",query:{search:this.search}})}},mounted:function(){this.search=this.$route.query.search}}},536:function(t,e,n){"use strict";function a(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){function a(o,s){try{var r=e[o](s),i=r.value}catch(t){return void n(t)}if(!r.done)return Promise.resolve(i).then(function(t){a("next",t)},function(t){a("throw",t)});t(i)}return a("next")})}}Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{showModal:!1,showLogin:!0,signinEmail:"",signinPassword:"",signupUsername:"",signupEmail:"",signupPassword:"",signupRepassword:""}},computed:{user:function(){return this.$store.getters.currentUser},cates:function(){return this.$store.getters.cates}},methods:{signin:function(){var t=this;return a(regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={email:t.signinEmail,password:t.signinPassword},e.next=3,t.$store.dispatch({type:"signin",user:n});case 3:t.showModal=!1;case 4:case"end":return e.stop()}},e,t)}))()},signup:function(){var t=this;return a(regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={username:t.signupUsername,email:t.signupEmail,password:t.signupPassword,repassword:t.signupRepassword},e.next=3,t.$store.dispatch({type:"signup",user:n});case 3:t.showModal=!1;case 4:case"end":return e.stop()}},e,t)}))()},logout:function(){this.$store.dispatch({type:"logout"})}},mounted:function(){this.$store.dispatch({type:"getCates"})}}},537:function(t,e,n){"use strict";function a(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){function a(o,s){try{var r=e[o](s),i=r.value}catch(t){return void n(t)}if(!r.done)return Promise.resolve(i).then(function(t){a("next",t)},function(t){a("throw",t)});t(i)}return a("next")})}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(557),s=function(t){return t&&t.__esModule?t:{default:t}}(o),r=n(136);e.default={components:{"side-component":s.default},data:function(){return{tags:[]}},methods:{getTags:function(t){var e=this;return a(regeneratorRuntime.mark(function n(){var a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.fetch.get(r.tag.findByPage(t));case 2:a=n.sent,a.data.ok&&(e.tags=a.data.tags.docs);case 4:case"end":return n.stop()}},n,e)}))()}},mounted:function(){this.getTags(1)}}},538:function(t,e,n){"use strict"},539:function(t,e,n){"use strict";function a(t){n(540)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(534),s=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);var i=n(562),c=n(135),u=a,d=c(s.a,i.a,!1,u,"data-v-2b70891e",null);e.default=d.exports},540:function(t,e,n){var a=n(541);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(524)("95ef5e3e",a,!0,{})},541:function(t,e,n){e=t.exports=n(202)(!1),e.push([t.i,".layout[data-v-2b70891e]{background:#f5f5f5}",""])},542:function(t,e,n){"use strict";function a(t){n(543)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(535),s=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);var i=n(545),c=n(135),u=a,d=c(s.a,i.a,!1,u,"data-v-06df5774",null);e.default=d.exports},543:function(t,e,n){var a=n(544);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(524)("47f26cea",a,!0,{})},544:function(t,e,n){e=t.exports=n(202)(!1),e.push([t.i,".container[data-v-06df5774]{padding-top:20px;padding-bottom:20px}.logo[data-v-06df5774]{font-size:28px;color:#f04848}.input-group input[data-v-06df5774]{border:2px solid #f04848}.input-group input[data-v-06df5774]:focus,.input-group input[data-v-06df5774]:hover{outline:none;-webkit-box-shadow:none;box-shadow:none}.input-group .btn[data-v-06df5774]{font-size:13px;color:#fff;background:#f04848;border:2px solid #f04848;border-left:1px solid #f04848}.input-group .btn[data-v-06df5774]:focus,.input-group .btn[data-v-06df5774]:hover{outline:none;-webkit-box-shadow:none;box-shadow:none}.hot-search[data-v-06df5774]{margin:4px 0;font-size:12px}",""])},545:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[t._m(0),t._v(" "),n("div",{staticClass:"col-sm-6 search"},[n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v(" "),n("span",{staticClass:"input-group-btn"},[n("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:t.goSearch}},[n("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"}})])])]),t._v(" "),n("div",{staticClass:"hot-search"},[n("span",[t._v("热门搜索")]),t._v(" "),n("router-link",{attrs:{to:"/search?search=专享"}},[t._v("专享")])],1)])])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-sm-3"},[n("div",{staticClass:"logo"},[t._v("什么值得买")])])}],s={render:a,staticRenderFns:o};e.a=s},546:function(t,e,n){"use strict";function a(t){n(547)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(549),s=n(135),r=a,i=s(null,o.a,!1,r,"data-v-8f09ce18",null);e.default=i.exports},547:function(t,e,n){var a=n(548);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(524)("3f700ca3",a,!0,{})},548:function(t,e,n){e=t.exports=n(202)(!1),e.push([t.i,"footer[data-v-8f09ce18]{padding:50px 0;font-size:14px;color:#ccc;background:#333}",""])},549:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",{staticClass:"container"},[t._v("\n        page footer\n    ")])])}],s={render:a,staticRenderFns:o};e.a=s},550:function(t,e,n){"use strict";function a(t){n(551)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(536),s=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);var i=n(553),c=n(135),u=a,d=c(s.a,i.a,!1,u,"data-v-a2764630",null);e.default=d.exports},551:function(t,e,n){var a=n(552);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(524)("46df186a",a,!0,{})},552:function(t,e,n){e=t.exports=n(202)(!1),e.push([t.i,"nav[data-v-a2764630]{color:#fff;background:#333}.container[data-v-a2764630]{font-size:0}.container a[data-v-a2764630]{display:inline-block;padding:10px 24px;color:#fff;font-size:14px;text-align:center}.container a.active[data-v-a2764630],.container a[data-v-a2764630]:focus,.container a[data-v-a2764630]:hover{background:#464646;text-decoration:none}.vmodal-body[data-v-a2764630]{text-align:center}.vmodal-body .title[data-v-a2764630]{display:inline-block;margin:0 10px 20px;color:#666}.vmodal-body .title.active[data-v-a2764630],.vmodal-body .title[data-v-a2764630]:focus,.vmodal-body .title[data-v-a2764630]:hover{color:#333;text-decoration:none}.vmodal-body .title.active[data-v-a2764630]{color:#333;border-bottom:2px solid #f04848}.vmodal-body .content input[data-v-a2764630]{width:80%;margin:10px auto}.vmodal-body .content .sign-btn[data-v-a2764630]{display:block;width:80%;padding:4px 0;margin:20px auto 0;color:#fff;background:#f04848;font-size:16px;text-align:center;cursor:pointer}.vmodal-body .content .sign-btn[data-v-a2764630]:focus,.vmodal-body .content .sign-btn[data-v-a2764630]:hover{text-decoration:none}",""])},553:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("div",{staticClass:"container"},[n("router-link",{attrs:{to:"/",exact:""}},[t._v("首页")]),t._v(" "),t._l(t.cates.cates,function(e){return t.cates.cates?n("router-link",{key:e.url,attrs:{to:"/category/"+e.url}},[t._v(t._s(e.name))]):t._e()}),t._v(" "),n("div",{staticClass:"pull-right"},[t.user&&t.user.ok?[n("router-link",{attrs:{to:"/user"}},[t._v(t._s(t.user.user.username))]),t._v(" "),t.user&&t.user.user&&t.user.user.isAdmin?n("router-link",{attrs:{to:"/admin/categories"}},[t._v("管理")]):t._e(),t._v(" "),n("a",{attrs:{href:"#"},on:{click:t.logout}},[t._v("退出")])]:[n("a",{attrs:{href:"#"},on:{click:function(e){t.showModal=!0,t.showLogin=!0}}},[t._v("登录")]),t._v(" "),n("a",{attrs:{href:"#"},on:{click:function(e){t.showModal=!0,t.showLogin=!1}}},[t._v("注册")])]],2)],2),t._v(" "),t.showModal?n("modal",{on:{close:function(e){t.showModal=!1}}},[n("div",{staticClass:"vmodal-body",attrs:{slot:"body"},slot:"body"},[n("a",{staticClass:"title",class:t.showLogin?"active":"",attrs:{href:"#"},on:{click:function(e){t.showLogin=!0}}},[t._v("登录")]),t._v(" "),n("a",{staticClass:"title",class:t.showLogin?"":"active",attrs:{href:"#"},on:{click:function(e){t.showLogin=!1}}},[t._v("注册")]),t._v(" "),n("div",{staticClass:"content"},[t.showLogin?n("form",[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.signinEmail,expression:"signinEmail"}],staticClass:"form-control",attrs:{type:"email",placeholder:"邮箱"},domProps:{value:t.signinEmail},on:{input:function(e){e.target.composing||(t.signinEmail=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.signinPassword,expression:"signinPassword"}],staticClass:"form-control",attrs:{type:"password",placeholder:"密码"},domProps:{value:t.signinPassword},on:{input:function(e){e.target.composing||(t.signinPassword=e.target.value)}}})]),t._v(" "),n("a",{staticClass:"sign-btn",on:{click:t.signin}},[t._v("登录")])]):n("form",[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.signupUsername,expression:"signupUsername"}],staticClass:"form-control",attrs:{type:"text",placeholder:"昵称"},domProps:{value:t.signupUsername},on:{input:function(e){e.target.composing||(t.signupUsername=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.signupEmail,expression:"signupEmail"}],staticClass:"form-control",attrs:{type:"email",placeholder:"邮箱"},domProps:{value:t.signupEmail},on:{input:function(e){e.target.composing||(t.signupEmail=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.signupPassword,expression:"signupPassword"}],staticClass:"form-control",attrs:{type:"password",placeholder:"密码"},domProps:{value:t.signupPassword},on:{input:function(e){e.target.composing||(t.signupPassword=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.signupRepassword,expression:"signupRepassword"}],staticClass:"form-control",attrs:{type:"password",placeholder:"确认密码"},domProps:{value:t.signupRepassword},on:{input:function(e){e.target.composing||(t.signupRepassword=e.target.value)}}})]),t._v(" "),n("a",{staticClass:"sign-btn",on:{click:t.signup}},[t._v("注册")])])])])]):t._e()],1)},o=[],s={render:a,staticRenderFns:o};e.a=s},554:function(t,e,n){"use strict";function a(t){n(555)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(537),s=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);var i=n(561),c=n(135),u=a,d=c(s.a,i.a,!1,u,"data-v-369cc652",null);e.default=d.exports},555:function(t,e,n){var a=n(556);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(524)("9ad46d40",a,!0,{})},556:function(t,e,n){e=t.exports=n(202)(!1),e.push([t.i,"a[data-v-369cc652]{display:inline-block;padding:1px 2px;margin:0 2px 2px 0;color:#666;font-size:14px}a[data-v-369cc652]:focus,a[data-v-369cc652]:hover{color:#333;text-decoration:none}",""])},557:function(t,e,n){"use strict";function a(t){n(558)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(538),s=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);var i=n(560),c=n(135),u=a,d=c(s.a,i.a,!1,u,"data-v-619b4ada",null);e.default=d.exports},558:function(t,e,n){var a=n(559);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(524)("48fa0c91",a,!0,{})},559:function(t,e,n){e=t.exports=n(202)(!1),e.push([t.i,".side[data-v-619b4ada]{padding:10px;margin:20px 0;background:#fff}.side-header[data-v-619b4ada]{padding:0 10px;margin:0 0 10px;font-size:20px;border-left:2px solid #f04848}.side-body[data-v-619b4ada]{padding:10px;border-top:1px solid #eee;font-size:0}",""])},560:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"side"},[n("div",{staticClass:"side-header"},[t._t("header")],2),t._v(" "),n("div",{staticClass:"side-body"},[t._t("body")],2)])},o=[],s={render:a,staticRenderFns:o};e.a=s},561:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("side-component",[n("div",{attrs:{slot:"header"},slot:"header"},[t._v("标签")]),t._v(" "),n("div",{attrs:{slot:"body"},slot:"body"},t._l(t.tags,function(e){return n("router-link",{key:e._id,attrs:{to:"/tag/"+e.name}},[t._v(t._s(e.name))])}))])},o=[],s={render:a,staticRenderFns:o};e.a=s},562:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout"},[n("header-component"),t._v(" "),n("nav-component"),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-9"},[t._t("body")],2),t._v(" "),n("div",{staticClass:"col-sm-3"},[n("tags-component"),t._v(" "),t._t("side")],2)])]),t._v(" "),n("footer-component")],1)},o=[],s={render:a,staticRenderFns:o};e.a=s},591:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(539),o=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default={data:function(){return{}},components:{"layout-component":o.default},head:{title:{inner:"页面不存在"}}}},618:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("layout-component",[n("div",{attrs:{slot:"body"},slot:"body"},[t._v("page not found")])])},o=[],s={render:a,staticRenderFns:o};e.a=s}});
//# sourceMappingURL=5.js.map