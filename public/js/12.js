(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{LPp3:function(t,e,r){"use strict";r.r(e);var s=r("+SZM"),a=r("Z84v"),o=r("Ujtf"),n=r("pF+r"),l=r("SdmG"),i={metaInfo:{title:"Create User"},layout:s.a,components:{LoadingButton:a.a,SelectInput:o.a,TextInput:n.a,FileInput:l.a},props:{errors:Object},remember:"form",data:function(){return{sending:!1,form:{first_name:null,last_name:null,email:null,password:null,owner:!1,photo:null}}},methods:{submit:function(){var t=this,e=new FormData;e.append("first_name",this.form.first_name||""),e.append("last_name",this.form.last_name||""),e.append("email",this.form.email||""),e.append("password",this.form.password||""),e.append("owner",this.form.owner?"1":"0"),e.append("photo",this.form.photo||""),this.$inertia.post(this.route("users.store"),e,{onStart:function(){return t.sending=!0},onFinish:function(){return t.sending=!1}})}}},p=r("KHd+"),u=Object(p.a)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",{staticClass:"mb-8 font-bold text-3xl"},[r("inertia-link",{staticClass:"text-indigo-400 hover:text-indigo-600",attrs:{href:t.route("users")}},[t._v("Users")]),t._v(" "),r("span",{staticClass:"text-indigo-400 font-medium"},[t._v("/")]),t._v(" Create\n  ")],1),t._v(" "),r("div",{staticClass:"bg-white rounded shadow overflow-hidden max-w-3xl"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[r("div",{staticClass:"p-8 -mr-6 -mb-8 flex flex-wrap"},[r("text-input",{staticClass:"pr-6 pb-8 w-full lg:w-1/2",attrs:{error:t.errors.first_name,label:"First name"},model:{value:t.form.first_name,callback:function(e){t.$set(t.form,"first_name",e)},expression:"form.first_name"}}),t._v(" "),r("text-input",{staticClass:"pr-6 pb-8 w-full lg:w-1/2",attrs:{error:t.errors.last_name,label:"Last name"},model:{value:t.form.last_name,callback:function(e){t.$set(t.form,"last_name",e)},expression:"form.last_name"}}),t._v(" "),r("text-input",{staticClass:"pr-6 pb-8 w-full lg:w-1/2",attrs:{error:t.errors.email,label:"Email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),t._v(" "),r("text-input",{staticClass:"pr-6 pb-8 w-full lg:w-1/2",attrs:{error:t.errors.password,type:"password",autocomplete:"new-password",label:"Password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),t._v(" "),r("select-input",{staticClass:"pr-6 pb-8 w-full lg:w-1/2",attrs:{error:t.errors.owner,label:"Owner"},model:{value:t.form.owner,callback:function(e){t.$set(t.form,"owner",e)},expression:"form.owner"}},[r("option",{domProps:{value:!0}},[t._v("Yes")]),t._v(" "),r("option",{domProps:{value:!1}},[t._v("No")])]),t._v(" "),r("file-input",{staticClass:"pr-6 pb-8 w-full lg:w-1/2",attrs:{error:t.errors.photo,type:"file",accept:"image/*",label:"Photo"},model:{value:t.form.photo,callback:function(e){t.$set(t.form,"photo",e)},expression:"form.photo"}})],1),t._v(" "),r("div",{staticClass:"px-8 py-4 bg-gray-100 border-t border-gray-200 flex justify-end items-center"},[r("loading-button",{staticClass:"btn-indigo",attrs:{loading:t.sending,type:"submit"}},[t._v("Create User")])],1)])])])}),[],!1,null,null,null);e.default=u.exports},SdmG:function(t,e,r){"use strict";var s={props:{value:File,label:String,accept:String,errors:{type:Array,default:function(){return[]}}},watch:{value:function(t){t||(this.$refs.file.value="")}},methods:{filesize:function(t){var e=Math.floor(Math.log(t)/Math.log(1024));return 1*(t/Math.pow(1024,e)).toFixed(2)+" "+["B","kB","MB","GB","TB"][e]},browse:function(){this.$refs.file.click()},change:function(t){this.$emit("input",t.target.files[0])},remove:function(){this.$emit("input",null)}}},a=r("KHd+"),o=Object(a.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.label?r("label",{staticClass:"form-label"},[t._v(t._s(t.label)+":")]):t._e(),t._v(" "),r("div",{staticClass:"form-input p-0",class:{error:t.errors.length}},[r("input",{ref:"file",staticClass:"hidden",attrs:{type:"file",accept:t.accept},on:{change:t.change}}),t._v(" "),t.value?r("div",{staticClass:"flex items-center justify-between p-2"},[r("div",{staticClass:"flex-1 pr-1"},[t._v(t._s(t.value.name)+" "),r("span",{staticClass:"text-gray-500 text-xs"},[t._v("("+t._s(t.filesize(t.value.size))+")")])]),t._v(" "),r("button",{staticClass:"px-4 py-1 bg-gray-500 hover:bg-gray-700 rounded-sm text-xs font-medium text-white",attrs:{type:"button"},on:{click:t.remove}},[t._v("\n        Remove\n      ")])]):r("div",{staticClass:"p-2"},[r("button",{staticClass:"px-4 py-1 bg-gray-500 hover:bg-gray-700 rounded-sm text-xs font-medium text-white",attrs:{type:"button"},on:{click:t.browse}},[t._v("\n        Browse\n      ")])])]),t._v(" "),t.errors.length?r("div",{staticClass:"form-error"},[t._v(t._s(t.errors[0]))]):t._e()])}),[],!1,null,null,null);e.a=o.exports}}]);