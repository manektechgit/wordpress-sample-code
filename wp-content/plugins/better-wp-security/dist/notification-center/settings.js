this.itsec=this.itsec||{},this.itsec["notification-center"]=this.itsec["notification-center"]||{},this.itsec["notification-center"].settings=(window.itsecWebpackJsonP=window.itsecWebpackJsonP||[]).push([[19],{"1ZqX":function(e,t){!function(){e.exports=this.wp.data}()},GRId:function(e,t){!function(){e.exports=this.wp.element}()},K9lf:function(e,t){!function(){e.exports=this.wp.compose}()},Mmq9:function(e,t){!function(){e.exports=this.wp.url}()},RUGT:function(e,t,n){"use strict";n.d(t,"b",(function(){return W})),n.d(t,"a",(function(){return ee}));var r={};n.r(r),n.d(r,"registerProvider",(function(){return X})),n.d(r,"REGISTER_PROVIDER",(function(){return Y}));var i={};n.r(i),n.d(i,"getProviders",(function(){return J}));var c=n("QILm"),o=n.n(c),a=n("pVnL"),s=n.n(a),l=n("J4zp"),u=n.n(l),b=n("GRId"),f=n("55Ip"),O=n("Ty5D"),p=n("LhCv"),j=n("YLtl"),m=n("tI+e"),d=n("l3Sj"),h=n("1ZqX"),g=n("K9lf"),v=n("RxS6"),y=n("gdqT"),_=n("ppSj"),E=n("49++"),S=n("lwsE"),w=n.n(S),I=n("W8MJ"),N=n.n(I),P=n("tmk3"),R=n.n(P),k=n("92Nh"),C=n.n(k);function L(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return D(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,o=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){a=!0,c=e},f:function(){try{o||null==n.return||n.return()}finally{if(a)throw c}}}}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var x=new WeakMap,A=new WeakMap,F=new WeakMap,T=new WeakMap,M=new WeakMap,U=function(){function e(t,n){w()(this,e),x.set(this,{writable:!0,value:void 0}),A.set(this,{writable:!0,value:void 0}),F.set(this,{writable:!0,value:void 0}),T.set(this,{writable:!0,value:void 0}),M.set(this,{writable:!0,value:void 0}),C()(this,x,t),C()(this,A,n),C()(this,F,n.select(ee).getProviders()),this._prepare()}return N()(e,[{key:"_prepare",value:function(){var e=this;C()(this,M,R()(this,x).split(/\s+/g).map((function(e){return e.trim().toLowerCase()})).filter((function(e){return!!e})));var t=R()(this,x).endsWith(" ");C()(this,T,new RegExp(R()(this,M).map((function(n,r){return r+1!==R()(e,M).length||t?"(?=.*\\b".concat(Object(j.escapeRegExp)(n),"\\b)"):"(?=.*\\b".concat(Object(j.escapeRegExp)(n),")")})).join("")+".+","gi"))}},{key:"_stringMatch",value:function(e){return e&&R()(this,T).test(e)}},{key:"_keywordMatch",value:function(e){var t=this;return!(!e||!e.length)&&e.some((function(e){return R()(t,M).some((function(n,r){return e.includes(" ")?t._stringMatch(e):r===R()(t,M).length-1?e.startsWith(n):n===e}))}))}},{key:"getResults",value:function(){var e=this;if(R()(this,x).length<3)return[{},0];var t,n=0,r=[],i={stringMatch:function(t){return e._stringMatch(t)},keywordMatch:function(t){return e._keywordMatch(t)}},c=L(R()(this,F));try{for(c.s();!(t=c.n()).done;){var o=t.value,a={title:o.title,items:[],groups:{}};n+=o.callback({evaluate:i,results:a,registry:R()(this,A)}),!a.items.length&&Object(j.isEmpty)(a.groups)||r.push(a)}}catch(e){c.e(e)}finally{c.f()}return[r,n]}}]),e}(),W=(n("YSGj"),Object(b.forwardRef)((function(e,t){var n=e.onPick,r=void 0===n?j.noop:n,i=e.showResults,c=Object(b.useState)(""),o=u()(c,2),a=o[0],l=o[1],f=Object(b.useState)(!1),O=u()(f,2),p=O[0],E=O[1],S=Object(b.useRef)(),w=Object(b.useRef)(),I=Object(b.useState)([]),N=u()(I,2),P=N[0],R=N[1],k=Object(h.useRegistry)(),C=Object(b.useCallback)((function(e){var t=new U(e,k).getResults();R(t[0]),Object(y.speak)(Object(d.sprintf)(Object(d._n)("%d result found.","%d results found.",t[1],"better-wp-security"),t[1]))}),[k]),L=Object(g.useDebounce)(C,50),D=Object(b.useCallback)((function(e){S.current&&(e.preventDefault(),S.current.focus())}),[S]);return Object(g.useKeyboardShortcut)("/",D),Object(b.createElement)("div",s()({className:"itsec-search"},Object(_.c)((function(){return E(!1)}))),Object(b.createElement)("div",null,Object(b.createElement)(m.TextControl,{type:"search",placeholder:Object(d.__)("Search","better-wp-security"),label:Object(d.__)("Search","better-wp-security"),hideLabelFromVision:!0,value:a,onChange:function(e){l(e),L(e)},onFocus:function(){return E(!0)},onKeyDown:function(e){e.keyCode===v.DOWN&&(e.preventDefault(),w.current.focus())},ref:Object(_.e)([t,S])}),(p||i)&&a.length>=3&&Object(b.createElement)(H,{results:P,exitSearch:function(e){r(e),E(!1)},ref:w,onPick:r})))}))),H=Object(b.forwardRef)((function(e,t){var n=e.results,r=e.exitSearch,i=e.onPick,c=Object(b.useRef)();Object(b.useImperativeHandle)(t,(function(){return{focus:function(){c.current.focus()}}}));var o,a=Object(g.useInstanceId)(H,"itsec-search"),l=a+"__result__",f=(o=Object(O.h)(),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"push";return o[t](Object(p.b)(e))}),h=Object(b.useState)(""),y=u()(h,2),_=y[0],S=y[1];return Object(j.isEmpty)(n)?null:Object(b.createElement)(React.Fragment,null,Object(b.createElement)(m.VisuallyHidden,{id:a+"__label"},Object(d.__)("Search Results","better-wp-security")),Object(b.createElement)(E.b,{className:"itsec-search__results",id:a,active:_&&l+_,onNavigate:function(e){return S(e.substr(l.length))},onKeyDown:function(e){var t=e.keyCode;!_||t!==v.ENTER&&t!==v.SPACE||(i(_),f(_),r())},onFocus:function(){if(!_&&!Object(j.isEmpty)(n)){var e,t=u()(Object.entries(n)[0],2)[1];if(null!==(e=t.items)&&void 0!==e&&e.length)S(t.items[0].route);else if(!Object(j.isEmpty)(t.groups)){var r=u()(Object.entries(t.groups)[0],2)[1];S(r.items[0].route)}}},role:"listbox",descendantRoles:"option",ref:c,"aria-labelledby":a+"__label"},Object(j.map)(n,(function(e,t){return Object(b.createElement)(q,s()({key:t},e,{active:_,idPrefix:l,exitSearch:r}))}))))}));function q(e){var t=e.title,n=e.items,r=e.groups,i=o()(e,["title","items","groups"]),c=Object(g.useInstanceId)(H,"itsec-search__kind");return Object(b.createElement)("ul",{className:"itsec-search__kind",role:"group","aria-labelledby":c},Object(b.createElement)("li",{role:"presentation",id:c},t),(n||[]).map((function(e){return Object(b.createElement)(V,s()({key:e.route},e,i))})),Object(j.map)(r,(function(e,t){return Object(b.createElement)(G,s()({key:t},e,i))})))}function G(e){var t=e.title,n=e.items,r=o()(e,["title","items"]),i=Object(g.useInstanceId)(H,"itsec-search__group");return Object(b.createElement)("ul",{className:"itsec-search__group",role:"group","aria-labelledby":i},Object(b.createElement)("li",{role:"presentation",id:i},Object(b.createElement)("span",null,t)),(n||[]).map((function(e){return Object(b.createElement)(V,s()({key:e.route},e,r))})))}function V(e){var t=e.title,n=e.description,r=e.route,i=e.active,c=e.idPrefix,o=e.exitSearch;return Object(b.createElement)("li",{className:"itsec-search__result",role:"option","aria-selected":i===r||void 0,id:c+r,"aria-label":t},Object(b.createElement)(f.a,{to:r,tabIndex:-1,onClick:function(){return o(r)}},Object(b.createElement)("span",null,t),Object(b.createElement)(E.n,{content:n,noHtml:!0,tagName:"p"})))}function X(e,t,n,r){return{type:Y,slug:e,title:t,priority:n,callback:r}}var Y="REGISTER_PROVIDER",K=n("pPDe"),J=Object(K.a)((function(e){return Object(j.sortBy)(e.providers,"priority")}),(function(e){return e.providers})),B=n("lSNA"),Z=n.n(B);function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){Z()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Q={providers:{}};var ee="ithemes-security/search";Object(h.registerStore)(ee,{actions:r,selectors:i,reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return $($({},e),{},{providers:$($({},e.providers),{},Z()({},t.slug,Object(j.omit)(t,["type"])))});default:return e}}})},RxS6:function(e,t){!function(){e.exports=this.wp.keycodes}()},Tqx9:function(e,t){!function(){e.exports=this.wp.primitives}()},TvNi:function(e,t){!function(){e.exports=this.wp.plugins}()},VfXU:function(e,t,n){},XrbI:function(e,t,n){"use strict";n.r(t);var r=n("GRId"),i=n("l3Sj"),c=n("TvNi"),o=n("YLtl"),a=n("ywyh"),s=n.n(a),l=n("1ZqX"),u=n("ppSj"),b=n("on51"),f=n("RUGT"),O=n("oYJ/"),p=n("lSNA"),j=n.n(p),m=n("Ty5D"),d=n("49++");function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){j()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e){var t=e.asyncNotifications,n=e.asyncUsersAndRoles,c=Object(m.k)(),a=c.url,s=c.path,u=Object(m.j)().root,f=Object(b.useNavigation)().goNext,p=t.status,j=t.value,d=n.status,h=n.value,g=Object(l.useSelect)((function(e){return e(O.c).getError("notification-center")})),v=Object(l.useDispatch)(O.c).saveSettings;if("success"!==p&&("pending"!==p||!j)||"success"!==d)return null;if("onboard"===u)return Object(r.createElement)(x,{usersAndRoles:h,onSubmit:f,saveLabel:Object(i.__)("Continue","better-wp-security"),allowUndo:!1,allowCleanSave:!0,apiError:g});var _=Object(r.createElement)(b.ChildPages,{pages:Object(o.map)(j,(function(e){return{title:e.l10n.label,to:"".concat(a,"/").concat(e.slug),id:e.slug}}))});return Object(r.createElement)(m.d,null,Object(r.createElement)(m.b,{path:"".concat(s,"/:child")},_,Object(r.createElement)(y,{notifications:j,usersAndRoles:h,apiError:g})),Object(r.createElement)(m.b,{path:s},_,Object(r.createElement)(x,{usersAndRoles:h,onSubmit:function(){return v("notification-center")},apiError:g})))}function y(e){var t=e.notifications,n=e.usersAndRoles,i=e.apiError,c=Object(m.j)().child,o=Object(l.useSelect)((function(e){return{isDirty:e(O.c).areSettingsDirty("notification-center"),isSaving:e(O.c).isSavingSettings("notification-center"),settings:e(O.c).getEditedSetting("notification-center","notifications")}})),a=o.isDirty,s=o.isSaving,u=o.settings,b=Object(l.useDispatch)(O.c),f=b.editSetting,p=b.saveSettings,d=b.resetSettingEdits,h=Object(r.useCallback)((function(e){return f("notification-center","notifications",g(g({},u),{},j()({},c,e)))}),[c,f,u]);return u?Object(r.createElement)(React.Fragment,null,Object(r.createElement)(_,{notification:c}),Object(r.createElement)(P,{notification:t[c],usersAndRoles:n,settings:u[c]||{},onChange:h,isSaving:s,isDirty:a,onSubmit:function(){return p("notification-center")},onUndo:function(){return d("notification-center")},apiError:i})):null}function _(e){var t=e.notification,n=Object(m.k)();return Object(r.createElement)(b.HelpFill,null,Object(r.createElement)(b.PageHeader,{title:Object(i.__)("Notifications","better-wp-security"),breadcrumbs:Object(r.createElement)(b.Breadcrumbs,{match:n,title:Object(i.__)("Help","better-wp-security")})}),Object(r.createElement)(d.j,{topic:"notification-center-".concat(t),fallback:"notification-center"}))}var E=n("tI+e"),S=n("K9lf");n("an8x");function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){j()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=["a","i","b","h2","h3","h4","h5","h6","p"];function P(e){var t=e.notification,n=e.settings,c=e.onChange,o=e.usersAndRoles,a=e.isSaving,s=e.isDirty,l=e.onSubmit,u=e.onUndo,f=e.apiError,O=!t.optional||n.enabled;return Object(r.createElement)(React.Fragment,null,Object(r.createElement)(b.PageHeader,{title:t.l10n.label,description:t.l10n.description}),Object(r.createElement)(b.PrimaryForm,{saveLabel:Object(i.__)("Save All","better-wp-security"),saveDisabled:!s,isSaving:a,onSubmit:l,apiError:f,buttons:[Object(r.createElement)(E.Button,{key:"undo",onClick:u,disabled:!s},Object(i.__)("Undo Changes","better-wp-security"))]},t.optional&&Object(r.createElement)(E.CheckboxControl,{className:"itsec-nc-notification__enabled",label:Object(i.__)("Enabled","better-wp-security"),checked:n.enabled,onChange:function(e){return c(I(I({},n),{},{enabled:e}))}}),O&&Object(r.createElement)(React.Fragment,null,Object(r.createElement)(R,{notification:t,settings:n,onChange:c}),Object(r.createElement)(k,{notification:t,settings:n,onChange:c}),Object(r.createElement)(C,{notification:t,settings:n,onChange:c,usersAndRoles:o}))))}function R(e){var t=e.notification,n=e.settings,c=e.onChange,a=Object(r.createElement)("span",null,Object(i.sprintf)(Object(i.__)("You can use HTML in your message. Allowed HTML includes: %s.","better-wp-security"),N.join(", "))," ",!!t.tags&&Object(r.createInterpolateElement)(Object(i.__)("This notification supports email tags. Tags are formatted as follows <tag />.","better-wp-security"),{tag:Object(r.createElement)("code",null,"{{ $tag_name }}")}));return Object(r.createElement)(b.PrimaryFormSection,{heading:Object(i.__)("Customize","better-wp-security")},t.subject_editable&&Object(r.createElement)(E.TextControl,{label:Object(i.__)("Subject","better-wp-security"),placeholder:t.l10n.subject,value:n.subject||t.l10n.subject,onChange:function(e){return c(I(I({},n),{},{subject:e}))}}),t.message_editable&&Object(r.createElement)(React.Fragment,null,Object(r.createElement)(E.TextareaControl,{label:Object(i.__)("Message","better-wp-security"),placeholder:t.l10n.message,rows:10,value:n.message||t.l10n.message,onChange:function(e){return c(I(I({},n),{},{message:e}))},help:a}),t.tags&&Object(r.createElement)("dl",null,Object(o.map)(t.l10n.tags,(function(e,t){return Object(r.createElement)(r.Fragment,{key:t},Object(r.createElement)("dt",null,Object(r.createElement)("code",null,t)),Object(r.createElement)("dd",null,e))})))))}function k(e){var t=e.notification,n=e.settings,c=e.onChange,a=Object(S.useInstanceId)(C,"itsec-nc-notification__schedule");return Object(o.isPlainObject)(t.schedule)?Object(r.createElement)(b.PrimaryFormSection,{heading:Object(r.createElement)("label",{htmlFor:a},Object(i.__)("Schedule","better-wp-security"))},Object(r.createElement)(E.SelectControl,{id:a,options:t.l10n.schedule,value:n.schedule,onChange:function(e){return c(I(I({},n),{},{schedule:e}))}})):null}function C(e){var t=e.notification,n=e.settings,c=e.onChange,o=e.usersAndRoles,a=Object(S.useInstanceId)(C,"itsec-nc-notification__recipients");switch(t.recipient){case"user":return Object(r.createElement)(b.PrimaryFormSection,{className:"itsec-nc-notification__recipients",heading:Object(i.__)("Recipient","better-wp-security")},Object(i.__)("Site Users","better-wp-security"));case"admin":return Object(r.createElement)(b.PrimaryFormSection,{className:"itsec-nc-notification__recipients",heading:Object(i.__)("Recipient","better-wp-security")},Object(i.__)("Admin Emails","better-wp-security"));case"per-use":return Object(r.createElement)(b.PrimaryFormSection,{className:"itsec-nc-notification__recipients",heading:Object(i.__)("Recipient","better-wp-security")},Object(i.__)("Specified when sending","better-wp-security"));case"email-list":return Object(r.createElement)(b.PrimaryFormSection,{heading:Object(r.createElement)("label",{htmlFor:a},Object(i.__)("Recipient","better-wp-security"))},Object(r.createElement)(d.v,{id:a,help:Object(i.__)("The email address(es) this notification will be sent to. One address per line.","better-wp-security"),value:n.email_list,onChange:function(e){return c(I(I({},n),{},{email_list:e}))}}));case"user-list":return Object(r.createElement)(b.PrimaryFormSection,{className:"itsec-nc-notification__recipients itsec-nc-notification__recipients--user-list",heading:Object(r.createElement)("label",{htmlFor:a},Object(i.__)("Recipient","better-wp-security"))},Object(r.createElement)(E.SelectControl,{value:n.recipient_type,onChange:function(e){return c(I(I({},n),{},{recipient_type:e}))},id:a,options:[{value:"default",label:Object(i.__)("Default Recipients","better-wp-security")},{value:"custom",label:Object(i.__)("Custom","better-wp-security")}]}),"custom"===n.recipient_type&&Object(r.createElement)(T,{help:Object(i.__)("Select which users should be emailed.","better-wp-security"),value:n.user_list,onChange:function(e){return c(I(I({},n),{},{user_list:e}))},usersAndRoles:o}))}}function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){j()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e){var t=e.usersAndRoles,n=e.onSubmit,c=e.saveLabel,o=void 0===c?Object(i.__)("Save All","better-wp-security"):c,a=e.allowUndo,s=void 0===a||a,u=e.allowCleanSave,f=void 0!==u&&u,p=e.apiError,j=Object(l.useSelect)((function(e){return{isDirty:e(O.c).areSettingsDirty("notification-center"),isSaving:e(O.c).isSavingSettings("notification-center"),fromEmail:e(O.c).getEditedSetting("notification-center","from_email")||"",defaultRecipients:e(O.c).getEditedSetting("notification-center","default_recipients")||{}}})),m=j.isDirty,h=j.isSaving,g=j.fromEmail,v=j.defaultRecipients,y=Object(l.useDispatch)(O.c),_=y.editSetting,S=y.resetSettingEdits;return Object(r.createElement)(React.Fragment,null,Object(r.createElement)(b.PageHeader,{title:Object(i.__)("Notification Center","better-wp-security"),description:Object(i.__)("Manage and configure email notifications sent by iThemes Security related to various settings modules.","better-wp-security")}),Object(r.createElement)(b.PrimaryForm,{saveLabel:o,saveDisabled:!m&&!f,isSaving:h,onSubmit:n,apiError:p,buttons:s&&[Object(r.createElement)(E.Button,{key:"undo",onClick:function(){return S("notification-center")},disabled:!m},Object(i.__)("Undo Changes","better-wp-security"))]},Object(r.createElement)(E.TextControl,{type:"email",value:g,onChange:function(e){return _("notification-center","from_email",e)},label:Object(i.__)("From Email","better-wp-security"),help:Object(i.__)("iThemes Security will send notifications from this email address. Leave blank to use the WordPress default.","better-wp-security")}),Object(r.createElement)(b.PrimaryFormSection,{heading:Object(i.__)("Default Recipients")},Object(r.createElement)(T,{help:Object(i.__)("Set the default recipients for any admin-facing notifications.","better-wp-security"),value:v.user_list||[],onChange:function(e){return _("notification-center","default_recipients",D(D({},v),{},{user_list:e}))},usersAndRoles:t}))),Object(r.createElement)(b.HelpFill,null,Object(r.createElement)(b.PageHeader,{title:Object(i.__)("Notifications","better-wp-security")}),Object(r.createElement)(d.j,{topic:"notification-center"})))}var A=n("RIqP"),F=n.n(A);n("VfXU");function T(e){var t=e.value,n=e.onChange,c=e.usersAndRoles,o=e.help;return Object(r.createElement)("fieldset",{className:"itsec-nc-user-role-list"},o&&Object(r.createElement)("legend",null,o),Object(r.createElement)("ul",{className:"itsec-nc-user-role-list__group"},c.roles.map((function(e){var c=e.value,o=e.label;return Object(r.createElement)("li",{key:c},Object(r.createElement)(E.CheckboxControl,{label:Object(i.sprintf)(Object(i.__)("All “%s” Users","better-wp-security"),o),checked:t.includes(c),onChange:function(e){return n(e?[].concat(F()(t),[c]):t.filter((function(e){return e!==c})))}}))}))),Object(r.createElement)("ul",{className:"itsec-nc-user-role-list__group"},c.users.map((function(e){var i=e.value,c=e.label;return Object(r.createElement)("li",{key:i},Object(r.createElement)(E.CheckboxControl,{label:c,checked:t.includes(i),onChange:function(e){return n(e?[].concat(F()(t),[i]):t.filter((function(e){return e!==i})))}}))}))))}n("oaF6");var M=function(){return s()({path:"/ithemes-security/rpc/notification-center/available-users-roles"})};function U(){var e,t,n=Object(l.useSelect)((function(e){return e(O.c).getActiveModules()})),c=Object(u.a)(Object(r.useCallback)((function(){return s()({path:"/ithemes-security/rpc/notification-center/notifications"})}),[n])),a=Object(u.a)(M);return e=c.value,t=Object(l.useDispatch)(f.a).registerProvider,Object(r.useEffect)((function(){t("notifications",Object(i.__)("Notifications","better-wp-security"),50,(function(t){var n=t.evaluate,r=t.results;return Object(o.reduce)(e,(function(e,t,i){return n.stringMatch(t.l10n.label)||n.stringMatch(t.l10n.description)?(r.items.push({title:t.l10n.label,description:t.l10n.description,route:"/settings/notification-center/".concat(i)}),e++):e}),0)}))}),[e]),Object(r.createElement)(b.Page,{id:"notification-center",title:Object(i.__)("Notifications","better-wp-security"),icon:"bell",priority:20,roots:["onboard","settings"],key:c.status+a.status},(function(){return Object(r.createElement)(v,{asyncNotifications:c,asyncUsersAndRoles:a})}))}n.p=window.itsecWebpackPublicPath,Object(i.setLocaleData)({"":{}},"ithemes-security-pro"),Object(c.registerPlugin)("itsec-notification-center-settings",{render:function(){return Object(r.createElement)(U,null)}})},YLtl:function(e,t){!function(){e.exports=this.lodash}()},YSGj:function(e,t,n){},an8x:function(e,t,n){},cDcd:function(e,t){!function(){e.exports=this.React}()},faye:function(e,t){!function(){e.exports=this.ReactDOM}()},gdqT:function(e,t){!function(){e.exports=this.wp.a11y}()},l3Sj:function(e,t){!function(){e.exports=this.wp.i18n}()},oaF6:function(e,t,n){},on51:function(e,t){!function(){e.exports=this.itsec.pages.settings}()},rl8x:function(e,t){!function(){e.exports=this.wp.isShallowEqual}()},"tI+e":function(e,t){!function(){e.exports=this.wp.components}()},ywyh:function(e,t){!function(){e.exports=this.wp.apiFetch}()}},[["XrbI",0,5,1,4,2,3]]]);