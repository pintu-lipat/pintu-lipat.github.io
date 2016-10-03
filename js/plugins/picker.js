﻿!function(a){"function"==typeof define&&define.amd?define("picker",["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):this.Picker=a(jQuery)}(function(a){function b(o,q,s,w){function z(){return b._.node("div",b._.node("div",b._.node("div",b._.node("div",n.component.nodes(y.open),M.box),M.wrap),M.frame),M.holder,'tabindex="-1"')}function B(){O.data(q,n).addClass(M.input).val(O.data("value")?n.get("select",A.format):o.value),A.editable||O.on("focus."+y.id+" click."+y.id,function(C){C.preventDefault(),n.open()}).on("keydown."+y.id,v),e(o,{haspopup:!0,expanded:!1,readonly:!1,owns:o.id+"_root"})}function N(){e(n.$root[0],"hidden",!0)}function p(){n.$holder.on({keydown:v,"focus.toOpen":u,blur:function(){O.removeClass(M.target)},focusin:function(C){n.$root.removeClass(M.focused),C.stopPropagation()},"mousedown click":function(C){var D=C.target;D!=n.$holder[0]&&(C.stopPropagation(),"mousedown"!=C.type||a(D).is("input, select, textarea, button, option")||(C.preventDefault(),n.$holder[0].focus()))}}).on("click","[data-pick], [data-nav], [data-clear], [data-close]",function(){var C=a(this),D=C.data(),E=C.hasClass(M.navDisabled)||C.hasClass(M.disabled),F=h();F=F&&(F.type||F.href),(E||F&&!a.contains(n.$root[0],F))&&n.$holder[0].focus(),!E&&D.nav?n.set("highlight",n.component.item.highlight,{nav:D.nav}):!E&&"pick" in D?(n.set("select",D.pick),A.closeOnSelect&&n.close(!0)):D.clear?(n.clear(),A.closeOnClear&&n.close(!0)):D.close&&n.close(!0)})}function r(){var C;A.hiddenName===!0?(C=o.name,o.name=""):(C=["string"==typeof A.hiddenPrefix?A.hiddenPrefix:"","string"==typeof A.hiddenSuffix?A.hiddenSuffix:"_submit"],C=C[0]+o.name+C[1]),n._hidden=a('<input type=hidden name="'+C+'"'+(O.data("value")||o.value?' value="'+n.get("select",A.formatSubmit)+'"':"")+">")[0],O.on("change."+y.id,function(){n._hidden.value=o.value?n.get("select",A.formatSubmit):""})}function t(){x&&l?n.$holder.find("."+M.frame).one("transitionend",function(){n.$holder[0].focus()}):n.$holder[0].focus()}function u(C){C.stopPropagation(),O.addClass(M.target),n.$root.addClass(M.focused),n.open()}function v(C){var D=C.keyCode,E=/^(8|46)$/.test(D);return 27==D?(n.close(!0),!1):void ((32==D||E||!y.open&&n.component.key[D])&&(C.preventDefault(),C.stopPropagation(),E?n.clear().close():n.open()))}if(!o){return b}var x=!1,y={id:o.id||"P"+Math.abs(~~(Math.random()*new Date))},A=s?a.extend(!0,{},s.defaults,w):w||{},M=a.extend({},b.klasses(),A.klass),O=a(o),m=function(){return this.start()},n=m.prototype={constructor:m,$node:O,start:function(){return y&&y.start?n:(y.methods={},y.start=!0,y.open=!1,y.type=o.type,o.autofocus=o==h(),o.readOnly=!A.editable,o.id=o.id||y.id,"text"!=o.type&&(o.type="text"),n.component=new s(n,A),n.$root=a('<div class="'+M.picker+'" id="'+o.id+'_root" />'),N(),n.$holder=a(z()).appendTo(n.$root),p(),A.formatSubmit&&r(),B(),A.containerHidden?a(A.containerHidden).append(n._hidden):O.after(n._hidden),A.container?a(A.container).append(n.$root):O.after(n.$root),n.on({start:n.component.onStart,render:n.component.onRender,stop:n.component.onStop,open:n.component.onOpen,close:n.component.onClose,set:n.component.onSet}).on({start:A.onStart,render:A.onRender,stop:A.onStop,open:A.onOpen,close:A.onClose,set:A.onSet}),x=c(n.$holder[0]),o.autofocus&&n.open(),n.trigger("start").trigger("render"))},render:function(C){return C?(n.$holder=a(z()),p(),n.$root.html(n.$holder)):n.$root.find("."+M.box).html(n.component.nodes(y.open)),n.trigger("render")},stop:function(){return y.start?(n.close(),n._hidden&&n._hidden.parentNode.removeChild(n._hidden),n.$root.remove(),O.removeClass(M.input).removeData(q),setTimeout(function(){O.off("."+y.id)},0),o.type=y.type,o.readOnly=!1,n.trigger("stop"),y.methods={},y.start=!1,n):n},open:function(C){return y.open?n:(O.addClass(M.active),e(o,"expanded",!0),setTimeout(function(){n.$root.addClass(M.opened),e(n.$root[0],"hidden",!1)},0),C!==!1&&(y.open=!0,x&&k.css("overflow","hidden").css("padding-right","+="+d()),t(),j.on("click."+y.id+" focusin."+y.id,function(D){var E=D.target;E!=o&&E!=document&&3!=D.which&&n.close(E===n.$holder[0])}).on("keydown."+y.id,function(D){var E=D.keyCode,F=n.component.key[E],G=D.target;27==E?n.close(!0):G!=n.$holder[0]||!F&&13!=E?a.contains(n.$root[0],G)&&13==E&&(D.preventDefault(),G.click()):(D.preventDefault(),F?b._.trigger(n.component.key.go,n,[b._.trigger(F)]):n.$root.find("."+M.highlighted).hasClass(M.disabled)||(n.set("select",n.component.item.highlight),A.closeOnSelect&&n.close(!0)))})),n.trigger("open"))},close:function(C){return C&&(A.editable?o.focus():(n.$holder.off("focus.toOpen").focus(),setTimeout(function(){n.$holder.on("focus.toOpen",u)},0))),O.removeClass(M.active),e(o,"expanded",!1),setTimeout(function(){n.$root.removeClass(M.opened+" "+M.focused),e(n.$root[0],"hidden",!0)},0),y.open?(y.open=!1,x&&k.css("overflow","").css("padding-right","-="+d()),j.off("."+y.id),n.trigger("close")):n},clear:function(C){return n.set("clear",null,C)},set:function(E,H,I){var C,D,F=a.isPlainObject(E),G=F?E:{};if(I=F&&a.isPlainObject(H)?H:I||{},E){F||(G[E]=H);for(C in G){D=G[C],C in n.component.item&&(void 0===D&&(D=null),n.component.set(C,D,I)),("select"==C||"clear"==C)&&O.val("clear"==C?"":n.get(C,A.format)).trigger("change")}n.render()}return I.muted?n:n.trigger("set",G)},get:function(C,D){if(C=C||"value",null!=y[C]){return y[C]}if("valueSubmit"==C){if(n._hidden){return n._hidden.value}C="value"}if("value"==C){return o.value}if(C in n.component.item){if("string"==typeof D){var E=n.component.get(C);return E?b._.trigger(n.component.formats.toString,n.component,[D,E]):""}return n.component.get(C)}},on:function(E,H,I){var C,D,F=a.isPlainObject(E),G=F?E:{};if(E){F||(G[E]=H);for(C in G){D=G[C],I&&(C="_"+C),y.methods[C]=y.methods[C]||[],y.methods[C].push(D)}}return n},off:function(){var C,D,E=arguments;for(C=0,namesCount=E.length;C<namesCount;C+=1){D=E[C],D in y.methods&&delete y.methods[D]}return n},trigger:function(C,D){var E=function(F){var G=y.methods[F];G&&G.map(function(H){b._.trigger(H,n,[D])})};return E("_"+C),E(C),n}};return new m}function c(m){var n,o="position";return m.currentStyle?n=m.currentStyle[o]:window.getComputedStyle&&(n=getComputedStyle(m)[o]),"fixed"==n}function d(){if(k.height()<=i.height()){return 0}var m=a('<div style="visibility:hidden;width:100px" />').appendTo("body"),n=m[0].offsetWidth;m.css("overflow","scroll");var o=a('<div style="width:100%" />').appendTo(m),p=o[0].offsetWidth;return m.remove(),n-p}function e(m,n,o){if(a.isPlainObject(n)){for(var p in n){f(m,p,n[p])}}else{f(m,n,o)}}function f(m,n,o){m.setAttribute(("role"==n?"":"aria-")+n,o)}function g(m,n){a.isPlainObject(m)||(m={attribute:n}),n="";for(var o in m){var p=("role"==o?"":"aria-")+o,q=m[o];n+=null==q?"":p+'="'+m[o]+'"'}return n}function h(){try{return document.activeElement}catch(m){}}var i=a(window),j=a(document),k=a(document.documentElement),l=null!=document.documentElement.style.transition;return b.klasses=function(m){return m=m||"picker",{picker:m,opened:m+"--opened",focused:m+"--focused",input:m+"__input",active:m+"__input--active",target:m+"__input--target",holder:m+"__holder",frame:m+"__frame",wrap:m+"__wrap",box:m+"__box"}},b._={group:function(m){for(var n,o="",p=b._.trigger(m.min,m);p<=b._.trigger(m.max,m,[p]);p+=m.i){n=b._.trigger(m.item,m,[p]),o+=b._.node(m.node,n[0],n[1],n[2])}return o},node:function(m,n,o,p){return n?(n=a.isArray(n)?n.join(""):n,o=o?' class="'+o+'"':"",p=p?" "+p:"","<"+m+o+p+">"+n+"</"+m+">"):""},lead:function(m){return(10>m?"0":"")+m},trigger:function(m,n,o){return"function"==typeof m?m.apply(n,o||[]):m},digits:function(m){return/\d/.test(m[1])?2:1},isDate:function(m){return{}.toString.call(m).indexOf("Date")>-1&&this.isInteger(m.getDate())},isInteger:function(m){return{}.toString.call(m).indexOf("Number")>-1&&m%1===0},ariaAttr:g},b.extend=function(m,n){a.fn[m]=function(o,p){var q=this.data(m);return"picker"==o?q:q&&"string"==typeof o?b._.trigger(q[o],q,[p]):this.each(function(){var r=a(this);r.data(m)||new b(this,m,n,o)})},a.fn[m].defaults=n.defaults},b});