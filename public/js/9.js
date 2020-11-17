(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{Aa5a:function(t,e,s){"use strict";s.r(e);var r=s("+SZM"),a=s("Z84v"),o=s("Ujtf"),n=s("pF+r"),i=s("SdmG"),l=s("GO1j"),u={metaInfo:function(){return{title:"".concat(this.form.first_name," ").concat(this.form.last_name)}},layout:r.a,components:{LoadingButton:a.a,SelectInput:o.a,TextInput:n.a,FileInput:i.a,TrashedMessage:l.a},props:{errors:Object,user:Object},remember:"form",data:function(){return{sending:!1,form:{first_name:this.user.first_name,last_name:this.user.last_name,email:this.user.email,password:this.user.password,owner:this.user.owner,photo:null}}},methods:{submit:function(){var t=this,e=new FormData;e.append("first_name",this.form.first_name||""),e.append("last_name",this.form.last_name||""),e.append("email",this.form.email||""),e.append("password",this.form.password||""),e.append("owner",this.form.owner?"1":"0"),e.append("photo",this.form.photo||""),e.append("_method","put"),this.$inertia.post(this.route("users.update",this.user.id),e,{onStart:function(){return t.sending=!0},onFinish:function(){return t.sending=!1},onSuccess:function(){0===Object.keys(t.$page.errors).length&&(t.form.photo=null,t.form.password=null)}})},destroy:function(){confirm("Are you sure you want to delete this user?")&&this.$inertia.delete(this.route("users.destroy",this.user.id))},restore:function(){confirm("Are you sure you want to restore this user?")&&this.$inertia.put(this.route("users.restore",this.user.id))}}},c=s("KHd+"),m=Object(c.a)(u,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"mb-8 flex justify-start max-w-3xl"},[s("h1",{staticClass:"font-bold text-3xl"},[s("inertia-link",{staticClass:"text-indigo-400 hover:text-indigo-600",attrs:{href:t.route("users")}},[t._v("Users")]),t._v(" "),s("span",{staticClass:"text-indigo-400 font-medium"},[t._v("/")]),t._v("\n      "+t._s(t.form.first_name)+" "+t._s(t.form.last_name)+"\n    ")],1),t._v(" "),t.user.photo?s("img",{staticClass:"block w-8 h-8 rounded-full ml-4",attrs:{src:t.user.photo}}):t._e()]),t._v(" "),t.user.deleted_at?s("trashed-message",{staticClass:"mb-6",on:{restore:t.restore}},[t._v("\n    This user has been deleted.\n  ")]):t._e(),t._v(" "),s("div",{staticClass:"bg-white rounded shadow overflow-hidden max-w-3xl"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[s("div",{staticClass:"p-8 -mr-6 -mb-8 flex flex-wrap"},[s("text-input",{staticClass:"pr-6 pb-8 w-full lg:w-1/2",attrs:{error:t.errors.first_name,label:"First name"},model:{value:t.form.first_name,callback:function(e){t.$set(t.form,"first_name",e)},expression:"form.first_name"}}),t._v(" "),s("text-input",{staticClass:"pr-6 pb-8 w-full lg:w-1/2",attrs:{error:t.errors.last_name,label:"Last name"},model:{value:t.form.last_name,callback:function(e){t.$set(t.form,"last_name",e)},expression:"form.last_name"}}),t._v(" "),s("text-input",{staticClass:"pr-6 pb-8 w-full lg:w-1/2",attrs:{error:t.errors.email,label:"Email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),t._v(" "),s("text-input",{staticClass:"pr-6 pb-8 w-full lg:w-1/2",attrs:{error:t.errors.password,type:"password",autocomplete:"new-password",label:"Password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),t._v(" "),s("select-input",{staticClass:"pr-6 pb-8 w-full lg:w-1/2",attrs:{error:t.errors.owner,label:"Owner"},model:{value:t.form.owner,callback:function(e){t.$set(t.form,"owner",e)},expression:"form.owner"}},[s("option",{domProps:{value:!0}},[t._v("Yes")]),t._v(" "),s("option",{domProps:{value:!1}},[t._v("No")])]),t._v(" "),s("file-input",{staticClass:"pr-6 pb-8 w-full lg:w-1/2",attrs:{error:t.errors.photo,type:"file",accept:"image/*",label:"Photo"},model:{value:t.form.photo,callback:function(e){t.$set(t.form,"photo",e)},expression:"form.photo"}})],1),t._v(" "),s("div",{staticClass:"px-8 py-4 bg-gray-100 border-t border-gray-200 flex items-center"},[t.user.deleted_at?t._e():s("button",{staticClass:"text-red-600 hover:underline",attrs:{tabindex:"-1",type:"button"},on:{click:t.destroy}},[t._v("Delete User")]),t._v(" "),s("loading-button",{staticClass:"btn-indigo ml-auto",attrs:{loading:t.sending,type:"submit"}},[t._v("Update User")])],1)])])],1)}),[],!1,null,null,null);e.default=m.exports},GO1j:function(t,e,s){"use strict";var r={components:{Icon:s("MY0P").a}},a=s("KHd+"),o=Object(a.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"p-4 bg-yellow-400 rounded flex items-center justify-between max-w-3xl"},[s("div",{staticClass:"flex items-center"},[s("icon",{staticClass:"flex-shrink-0 w-4 h-4 fill-yellow-800 mr-2",attrs:{name:"trash"}}),t._v(" "),s("div",{staticClass:"text-sm font-medium text-yellow-800"},[t._t("default")],2)],1),t._v(" "),s("button",{staticClass:"text-sm text-yellow-800 hover:underline",attrs:{tabindex:"-1",type:"button"},on:{click:function(e){return t.$emit("restore")}}},[t._v("Restore")])])}),[],!1,null,null,null);e.a=o.exports},SdmG:function(t,e,s){"use strict";var r={props:{value:File,label:String,accept:String,errors:{type:Array,default:function(){return[]}}},watch:{value:function(t){t||(this.$refs.file.value="")}},methods:{filesize:function(t){var e=Math.floor(Math.log(t)/Math.log(1024));return 1*(t/Math.pow(1024,e)).toFixed(2)+" "+["B","kB","MB","GB","TB"][e]},browse:function(){this.$refs.file.click()},change:function(t){this.$emit("input",t.target.files[0])},remove:function(){this.$emit("input",null)}}},a=s("KHd+"),o=Object(a.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.label?s("label",{staticClass:"form-label"},[t._v(t._s(t.label)+":")]):t._e(),t._v(" "),s("div",{staticClass:"form-input p-0",class:{error:t.errors.length}},[s("input",{ref:"file",staticClass:"hidden",attrs:{type:"file",accept:t.accept},on:{change:t.change}}),t._v(" "),t.value?s("div",{staticClass:"flex items-center justify-between p-2"},[s("div",{staticClass:"flex-1 pr-1"},[t._v(t._s(t.value.name)+" "),s("span",{staticClass:"text-gray-500 text-xs"},[t._v("("+t._s(t.filesize(t.value.size))+")")])]),t._v(" "),s("button",{staticClass:"px-4 py-1 bg-gray-500 hover:bg-gray-700 rounded-sm text-xs font-medium text-white",attrs:{type:"button"},on:{click:t.remove}},[t._v("\n        Remove\n      ")])]):s("div",{staticClass:"p-2"},[s("button",{staticClass:"px-4 py-1 bg-gray-500 hover:bg-gray-700 rounded-sm text-xs font-medium text-white",attrs:{type:"button"},on:{click:t.browse}},[t._v("\n        Browse\n      ")])])]),t._v(" "),t.errors.length?s("div",{staticClass:"form-error"},[t._v(t._s(t.errors[0]))]):t._e()])}),[],!1,null,null,null);e.a=o.exports}}]);