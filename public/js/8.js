(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+SZM":function(t,s,e){"use strict";var a=e("Q7Qx"),r={data:function(){return{show:!0}},watch:{"$page.flash":{handler:function(){this.show=!0},deep:!0}}},i=e("KHd+"),o=Object(i.a)(r,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[t.$page.flash.success&&t.show?e("div",{staticClass:"mb-8 flex items-center justify-between bg-green-500 rounded max-w-3xl"},[e("div",{staticClass:"flex items-center"},[e("svg",{staticClass:"ml-4 mr-2 flex-shrink-0 w-4 h-4 fill-white",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[e("polygon",{attrs:{points:"0 11 2 9 7 14 18 3 20 5 7 18"}})]),t._v(" "),e("div",{staticClass:"py-4 text-white text-sm font-medium"},[t._v(t._s(t.$page.flash.success))])]),t._v(" "),e("button",{staticClass:"group mr-2 p-2",attrs:{type:"button"},on:{click:function(s){t.show=!1}}},[e("svg",{staticClass:"block w-2 h-2 fill-green-800 group-hover:fill-white",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"235.908",height:"235.908",viewBox:"278.046 126.846 235.908 235.908"}},[e("path",{attrs:{d:"M506.784 134.017c-9.56-9.56-25.06-9.56-34.62 0L396 210.18l-76.164-76.164c-9.56-9.56-25.06-9.56-34.62 0-9.56 9.56-9.56 25.06 0 34.62L361.38 244.8l-76.164 76.165c-9.56 9.56-9.56 25.06 0 34.62 9.56 9.56 25.06 9.56 34.62 0L396 279.42l76.164 76.165c9.56 9.56 25.06 9.56 34.62 0 9.56-9.56 9.56-25.06 0-34.62L430.62 244.8l76.164-76.163c9.56-9.56 9.56-25.06 0-34.62z"}})])])]):t._e(),t._v(" "),(t.$page.flash.error||Object.keys(t.$page.errors).length>0)&&t.show?e("div",{staticClass:"mb-8 flex items-center justify-between bg-red-500 rounded max-w-3xl"},[e("div",{staticClass:"flex items-center"},[e("svg",{staticClass:"ml-4 mr-2 flex-shrink-0 w-4 h-4 fill-white",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[e("path",{attrs:{d:"M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z"}})]),t._v(" "),t.$page.flash.error?e("div",{staticClass:"py-4 text-white text-sm font-medium"},[t._v(t._s(t.$page.flash.error))]):e("div",{staticClass:"py-4 text-white text-sm font-medium"},[1===Object.keys(t.$page.errors).length?e("span",[t._v("There is one form error.")]):e("span",[t._v("There are "+t._s(Object.keys(t.$page.errors).length)+" form errors.")])])]),t._v(" "),e("button",{staticClass:"group mr-2 p-2",attrs:{type:"button"},on:{click:function(s){t.show=!1}}},[e("svg",{staticClass:"block w-2 h-2 fill-red-800 group-hover:fill-white",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"235.908",height:"235.908",viewBox:"278.046 126.846 235.908 235.908"}},[e("path",{attrs:{d:"M506.784 134.017c-9.56-9.56-25.06-9.56-34.62 0L396 210.18l-76.164-76.164c-9.56-9.56-25.06-9.56-34.62 0-9.56 9.56-9.56 25.06 0 34.62L361.38 244.8l-76.164 76.165c-9.56 9.56-9.56 25.06 0 34.62 9.56 9.56 25.06 9.56 34.62 0L396 279.42l76.164 76.165c9.56 9.56 25.06 9.56 34.62 0 9.56-9.56 9.56-25.06 0-34.62L430.62 244.8l76.164-76.163c9.56-9.56 9.56-25.06 0-34.62z"}})])])]):t._e()])}),[],!1,null,null,null).exports,l=e("MY0P"),n=e("lrC8"),h={components:{Icon:l.a},props:{url:String},methods:{isUrl:function(){for(var t=this,s=arguments.length,e=new Array(s),a=0;a<s;a++)e[a]=arguments[a];return""===e[0]?""===this.url:e.filter((function(s){return t.url.startsWith(s)})).length}}},c=Object(i.a)(h,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"mb-4"},[e("inertia-link",{staticClass:"flex items-center group py-3",attrs:{href:t.route("dashboard")}},[e("icon",{staticClass:"w-4 h-4 mr-2",class:t.isUrl("")?"fill-white":"fill-indigo-400 group-hover:fill-white",attrs:{name:"dashboard"}}),t._v(" "),e("div",{class:t.isUrl("")?"text-white":"text-indigo-300 group-hover:text-white"},[t._v("Dashboard")])],1)],1),t._v(" "),e("div",{staticClass:"mb-4"},[e("inertia-link",{staticClass:"flex items-center group py-3",attrs:{href:t.route("organizations")}},[e("icon",{staticClass:"w-4 h-4 mr-2",class:t.isUrl("organizations")?"fill-white":"fill-indigo-400 group-hover:fill-white",attrs:{name:"office"}}),t._v(" "),e("div",{class:t.isUrl("organizations")?"text-white":"text-indigo-300 group-hover:text-white"},[t._v("Organizations")])],1)],1),t._v(" "),e("div",{staticClass:"mb-4"},[e("inertia-link",{staticClass:"flex items-center group py-3",attrs:{href:t.route("contacts")}},[e("icon",{staticClass:"w-4 h-4 mr-2",class:t.isUrl("contacts")?"fill-white":"fill-indigo-400 group-hover:fill-white",attrs:{name:"users"}}),t._v(" "),e("div",{class:t.isUrl("contacts")?"text-white":"text-indigo-300 group-hover:text-white"},[t._v("Contacts")])],1)],1),t._v(" "),e("div",{staticClass:"mb-4"},[e("inertia-link",{staticClass:"flex items-center group py-3",attrs:{href:t.route("reports")}},[e("icon",{staticClass:"w-4 h-4 mr-2",class:t.isUrl("reports")?"fill-white":"fill-indigo-400 group-hover:fill-white",attrs:{name:"printer"}}),t._v(" "),e("div",{class:t.isUrl("reports")?"text-white":"text-indigo-300 group-hover:text-white"},[t._v("Reports")])],1)],1)])}),[],!1,null,null,null).exports,v={components:{Dropdown:a.a,FlashMessages:o,Icon:l.a,Logo:n.a,MainMenu:c},data:function(){return{showUserMenu:!1,accounts:null}},methods:{url:function(){return location.pathname.substr(1)},hideDropdownMenus:function(){this.showUserMenu=!1}}},d=Object(i.a)(v,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("portal-target",{attrs:{name:"dropdown",slim:""}}),t._v(" "),e("div",{staticClass:"md:flex md:flex-col"},[e("div",{staticClass:"md:h-screen md:flex md:flex-col",on:{click:t.hideDropdownMenus}},[e("div",{staticClass:"md:flex md:flex-shrink-0"},[e("div",{staticClass:"bg-indigo-900 md:flex-shrink-0 md:w-56 px-6 py-4 flex items-center justify-between md:justify-center"},[e("inertia-link",{staticClass:"mt-1",attrs:{href:"/"}},[e("logo",{staticClass:"fill-white",attrs:{width:"120",height:"28"}})],1),t._v(" "),e("dropdown",{staticClass:"md:hidden",attrs:{placement:"bottom-end"}},[e("svg",{staticClass:"fill-white w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[e("path",{attrs:{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}})]),t._v(" "),e("div",{staticClass:"mt-2 px-8 py-4 shadow-lg bg-indigo-800 rounded",attrs:{slot:"dropdown"},slot:"dropdown"},[e("main-menu",{attrs:{url:t.url()}})],1)])],1),t._v(" "),e("div",{staticClass:"bg-white border-b w-full p-4 md:py-0 md:px-12 text-sm md:text-md flex justify-between items-center"},[e("div",{staticClass:"mt-1 mr-4"},[t._v(t._s(t.$page.auth.user.account.name))]),t._v(" "),e("dropdown",{staticClass:"mt-1",attrs:{placement:"bottom-end"}},[e("div",{staticClass:"flex items-center cursor-pointer select-none group"},[e("div",{staticClass:"text-gray-700 group-hover:text-indigo-600 focus:text-indigo-600 mr-1 whitespace-no-wrap"},[e("span",[t._v(t._s(t.$page.auth.user.first_name))]),t._v(" "),e("span",{staticClass:"hidden md:inline"},[t._v(t._s(t.$page.auth.user.last_name))])]),t._v(" "),e("icon",{staticClass:"w-5 h-5 group-hover:fill-indigo-600 fill-gray-700 focus:fill-indigo-600",attrs:{name:"cheveron-down"}})],1),t._v(" "),e("div",{staticClass:"mt-2 py-2 shadow-xl bg-white rounded text-sm",attrs:{slot:"dropdown"},slot:"dropdown"},[e("inertia-link",{staticClass:"block px-6 py-2 hover:bg-indigo-500 hover:text-white",attrs:{href:t.route("users.edit",t.$page.auth.user.id)}},[t._v("My Profile")]),t._v(" "),e("inertia-link",{staticClass:"block px-6 py-2 hover:bg-indigo-500 hover:text-white",attrs:{href:t.route("users")}},[t._v("Manage Users")]),t._v(" "),e("inertia-link",{staticClass:"block px-6 py-2 hover:bg-indigo-500 hover:text-white",attrs:{href:t.route("logout"),method:"post"}},[t._v("Logout")])],1)])],1)]),t._v(" "),e("div",{staticClass:"md:flex md:flex-grow md:overflow-hidden"},[e("main-menu",{staticClass:"hidden md:block bg-indigo-800 flex-shrink-0 w-56 p-12 overflow-y-auto",attrs:{url:t.url()}}),t._v(" "),e("div",{staticClass:"md:flex-1 px-4 py-8 md:p-12 md:overflow-y-auto",attrs:{"scroll-region":""}},[e("flash-messages"),t._v(" "),t._t("default")],2)],1)])])],1)}),[],!1,null,null,null);s.a=d.exports},MY0P:function(t,s,e){"use strict";var a={props:{name:String}},r=e("KHd+"),i=Object(r.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return"apple"===t.name?e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",viewBox:"0 0 100 100"}},[e("g",{attrs:{"fill-rule":"nonzero"}},[e("path",{attrs:{d:"M46.173 19.967C49.927-1.838 19.797-.233 14.538.21c-.429.035-.648.4-.483.8 2.004 4.825 14.168 31.66 32.118 18.957zm13.18 1.636c1.269-.891 1.35-1.614.047-2.453l-2.657-1.71c-.94-.607-1.685-.606-2.532.129-5.094 4.42-7.336 9.18-8.211 15.24 1.597.682 3.55.79 5.265.328 1.298-4.283 3.64-8.412 8.088-11.534z"}}),e("path",{attrs:{d:"M88.588 67.75c9.65-27.532-13.697-45.537-35.453-32.322-1.84 1.118-4.601 1.118-6.441 0-21.757-13.215-45.105 4.79-35.454 32.321 5.302 15.123 17.06 39.95 37.295 29.995.772-.38 1.986-.38 2.758 0 20.235 9.955 31.991-14.872 37.295-29.995z"}})])]):"book"===t.name?e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[e("path",{attrs:{d:"M6 4H5a1 1 0 1 1 0-2h11V1a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V5a1 1 0 0 0-1-1h-7v8l-2-2-2 2V4z"}})]):"cheveron-down"===t.name?e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[e("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})]):"cheveron-right"===t.name?e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[e("polygon",{attrs:{points:"12.95 10.707 13.657 10 8 4.343 6.586 5.757 10.828 10 6.586 14.243 8 15.657 12.95 10.707"}})]):"dashboard"===t.name?e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[e("path",{attrs:{d:"M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z"}})]):"location"===t.name?e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[e("path",{attrs:{d:"M10 20S3 10.87 3 7a7 7 0 1 1 14 0c0 3.87-7 13-7 13zm0-11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"}})]):"office"===t.name?e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",viewBox:"0 0 100 100"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M7 0h86v100H57.108V88.418H42.892V100H7V0zm9 64h11v15H16V64zm57 0h11v15H73V64zm-19 0h11v15H54V64zm-19 0h11v15H35V64zM16 37h11v15H16V37zm57 0h11v15H73V37zm-19 0h11v15H54V37zm-19 0h11v15H35V37zM16 11h11v15H16V11zm57 0h11v15H73V11zm-19 0h11v15H54V11zm-19 0h11v15H35V11z"}})]):"printer"===t.name?e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[e("path",{attrs:{d:"M4 16H0V6h20v10h-4v4H4v-4zm2-4v6h8v-6H6zM4 0h12v5H4V0zM2 8v2h2V8H2zm4 0v2h2V8H6z"}})]):"shopping-cart"===t.name?e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[e("path",{attrs:{d:"M4 2h16l-3 9H4a1 1 0 1 0 0 2h13v2H4a3 3 0 0 1 0-6h.33L3 5 2 2H0V0h3a1 1 0 0 1 1 1v1zm1 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"}})]):"store-front"===t.name?e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[e("path",{attrs:{d:"M18 9.87V20H2V9.87a4.25 4.25 0 0 0 3-.38V14h10V9.5a4.26 4.26 0 0 0 3 .37zM3 0h4l-.67 6.03A3.43 3.43 0 0 1 3 9C1.34 9 .42 7.73.95 6.15L3 0zm5 0h4l.7 6.3c.17 1.5-.91 2.7-2.42 2.7h-.56A2.38 2.38 0 0 1 7.3 6.3L8 0zm5 0h4l2.05 6.15C19.58 7.73 18.65 9 17 9a3.42 3.42 0 0 1-3.33-2.97L13 0z"}})]):"trash"===t.name?e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[e("path",{attrs:{d:"M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"}})]):"users"===t.name?e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[e("path",{attrs:{d:"M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z"}})]):t._e()}),[],!1,null,null,null);s.a=i.exports},Q7Qx:function(t,s,e){"use strict";var a=e("8L3F"),r={props:{placement:{type:String,default:"bottom-end"},boundary:{type:String,default:"scrollParent"},autoClose:{type:Boolean,default:!0}},data:function(){return{show:!1}},watch:{show:function(t){var s=this;t?this.$nextTick((function(){s.popper=new a.a(s.$el,s.$refs.dropdown,{placement:s.placement,modifiers:{preventOverflow:{boundariesElement:s.boundary}}})})):this.popper&&setTimeout((function(){return s.popper.destroy()}),100)}},mounted:function(){var t=this;document.addEventListener("keydown",(function(s){27===s.keyCode&&(t.show=!1)}))}},i=e("KHd+"),o=Object(i.a)(r,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("button",{attrs:{type:"button"},on:{click:function(s){t.show=!0}}},[t._t("default"),t._v(" "),t.show?e("portal",{attrs:{to:"dropdown"}},[e("div",[e("div",{staticStyle:{position:"fixed",top:"0",right:"0",left:"0",bottom:"0","z-index":"99998",background:"black",opacity:".2"},on:{click:function(s){t.show=!1}}}),t._v(" "),e("div",{ref:"dropdown",staticStyle:{position:"absolute","z-index":"99999"},on:{click:function(s){s.stopPropagation(),t.show=!t.autoClose}}},[t._t("dropdown")],2)])]):t._e()],2)}),[],!1,null,null,null);s.a=o.exports},gtDZ:function(t,s,e){"use strict";e.r(s);var a={metaInfo:{title:"Reports"},layout:e("+SZM").a},r=e("KHd+"),i=Object(r.a)(a,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("h1",{staticClass:"mb-8 font-bold text-3xl"},[this._v("Reports")])])}],!1,null,null,null);s.default=i.exports},lrC8:function(t,s,e){"use strict";var a=e("KHd+"),r=Object(a.a)({},(function(){var t=this.$createElement,s=this._self._c||t;return s("svg",{attrs:{viewBox:"0 0 1185 266",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M77.463 265c-19.497 0-35.318-15.405-35.318-34.39v-22.054C17.987 202.676 0 181.326 0 155.948V55.206C0 25.291 24.946 1 55.668 1h154.664C241.054 1 266 25.29 266 55.206v100.806c0 29.916-24.946 54.206-55.668 54.206H145.67c-2.823 0-5.383 1.407-6.827 3.58-10.7 17.067-24.158 31.897-39.98 43.915-6.236 4.794-13.654 7.287-21.4 7.287zM55.701 27.336c-15.771 0-28.65 12.465-28.65 27.87v100.806c0 15.342 12.813 27.87 28.65 27.87 7.49 0 13.536 5.881 13.536 13.168v33.624c0 4.922 4.272 7.99 8.214 7.99 1.709 0 3.286-.575 4.732-1.662 13.273-10.1 24.576-22.565 33.578-36.947 6.309-10.036 17.743-16.237 29.965-16.237h64.727c15.77 0 28.65-12.464 28.65-27.87V55.206c0-15.341-12.814-27.87-28.65-27.87H55.7z"}}),this._v(" "),s("path",{attrs:{d:"M395.752 2.4c37.152 0 65.088 27.936 65.088 64.8 0 36.576-27.936 64.8-65.088 64.8h-46.368v72H322.6V2.4h73.152zm0 104.544c22.176 0 38.592-16.992 38.592-39.744 0-23.04-16.416-39.744-38.592-39.744h-46.368v79.488h46.368zM502.6 33.792c-9.504 0-16.992-7.488-16.992-16.704 0-9.216 7.488-16.992 16.992-16.992 9.216 0 16.704 7.776 16.704 16.992 0 9.216-7.488 16.704-16.704 16.704zM489.928 204V60h25.056v144h-25.056zM625 56.256c33.696 0 55.872 22.464 55.872 59.328V204h-25.056v-86.976c0-23.616-13.536-36.864-35.712-36.864-23.04 0-41.76 13.536-41.76 47.52V204h-25.056V60h25.056v20.736C589 63.744 604.84 56.256 625 56.256zM835.24 60h24.768v137.952c0 44.928-36 67.392-73.44 67.392-32.256 0-56.448-12.384-68.256-35.136l21.888-12.384c6.624 13.536 18.72 24.192 46.944 24.192 29.952 0 48.096-16.992 48.096-44.064v-20.448c-11.52 17.568-29.952 28.8-54.144 28.8-40.896 0-73.44-33.12-73.44-75.168 0-41.76 32.544-74.88 73.44-74.88 24.192 0 42.624 10.944 54.144 28.512V60zm-51.264 122.4c29.088 0 51.264-22.176 51.264-51.264 0-28.8-22.176-50.976-51.264-50.976-29.088 0-51.264 22.176-51.264 50.976 0 29.088 22.176 51.264 51.264 51.264zM946.8 205.08c-28.21 0-45.63-20.8-41.08-48.88 4.42-27.17 26.91-46.28 53.56-46.28 19.37 0 31.59 9.36 38.35 22.36l-23.79 12.61c-3.25-5.85-9.1-9.49-16.9-9.49-12.35 0-23.14 9.23-25.35 22.1-2.08 11.83 4.29 22.1 17.16 22.1 8.06 0 13.91-4.03 18.59-10.14l21.58 13.65c-9.36 13.78-24.44 21.97-42.12 21.97zm126.36-59.93c-1.95 11.18-8.58 19.5-18.2 24.44l11.7 33.28h-26l-9.36-28.6h-8.32l-5.07 28.6h-26l16.12-91h36.4c18.33 0 32.24 13.65 28.73 33.28zm-43.42-9.36l-2.99 16.9h10.66c5.07.13 8.84-2.99 9.75-8.32.91-5.33-1.82-8.58-7.02-8.58h-10.4zM1184.05 112l-15.99 91h-26l7.67-43.81-25.48 33.54h-2.34l-14.82-35.23-7.93 45.5h-26l15.99-91h26l13.65 37.31 27.95-37.31h27.3z"}})])}),[],!1,null,null,null);s.a=r.exports}}]);