var EmailsInput=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function l(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(n,...e){if(null==n)return t;const r=n.subscribe(...e);return r.unsubscribe?()=>r.unsubscribe():r}function c(t,n){t.appendChild(n)}function i(t,n,e){t.insertBefore(n,e||null)}function a(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function d(){return f(" ")}function p(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function h(t){return function(n){n.target===this&&t.call(this,n)}}function g(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function m(t,n){(null!=n||t.value)&&(t.value=n)}function v(t,n,e){t.classList[e?"add":"remove"](n)}let $;function b(t){$=t}const y=[],x=[],E=[],_=[],k=Promise.resolve();let w=!1;function A(t){E.push(t)}let C=!1;const q=new Set;function D(){if(!C){C=!0;do{for(let t=0;t<y.length;t+=1){const n=y[t];b(n),N(n.$$)}for(y.length=0;x.length;)x.pop()();for(let t=0;t<E.length;t+=1){const n=E[t];q.has(n)||(q.add(n),n())}E.length=0}while(y.length);for(;_.length;)_.pop()();w=!1,C=!1,q.clear()}}function N(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}const L=new Set;function O(t,n){-1===t.$$.dirty[0]&&(y.push(t),w||(w=!0,k.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function j(l,u,c,i,a,s,f=[-1]){const d=$;b(l);const p=u.props||{},h=l.$$={fragment:null,ctx:null,props:s,update:t,not_equal:a,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:e(),dirty:f};let g=!1;var m,v;h.ctx=c?c(l,p,(t,n,...e)=>{const r=e.length?e[0]:n;return h.ctx&&a(h.ctx[t],h.ctx[t]=r)&&(h.bound[t]&&h.bound[t](r),g&&O(l,t)),n}):[],h.update(),g=!0,r(h.before_update),h.fragment=!!i&&i(h.ctx),u.target&&(u.hydrate?h.fragment&&h.fragment.l(function(t){return Array.from(t.childNodes)}(u.target)):h.fragment&&h.fragment.c(),u.intro&&((m=l.$$.fragment)&&m.i&&(L.delete(m),m.i(v))),function(t,e,l){const{fragment:u,on_mount:c,on_destroy:i,after_update:a}=t.$$;u&&u.m(e,l),A(()=>{const e=c.map(n).filter(o);i?i.push(...e):r(e),t.$$.on_mount=[]}),a.forEach(A)}(l,u.target,u.anchor),D()),b(d)}const z=[];function B(t,n,e){const r=t.slice();return r[16]=n[e],r[18]=e,r}function S(t){let n,e=t[2],r=[];for(let n=0;n<e.length;n+=1)r[n]=T(B(t,e,n));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();n=f("")},m(t,e){for(let n=0;n<r.length;n+=1)r[n].m(t,e);i(t,n,e)},p(t,o){if(36&o){let l;for(e=t[2],l=0;l<e.length;l+=1){const u=B(t,e,l);r[l]?r[l].p(u,o):(r[l]=T(u),r[l].c(),r[l].m(n.parentNode,n))}for(;l<r.length;l+=1)r[l].d(1);r.length=e.length}},d(t){!function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(r,t),t&&a(n)}}}function T(t){let n,e,r,o,l,u,h=t[16].value+"";function m(...n){return t[13](t[16],...n)}return{c(){n=s("span"),e=f(h),r=d(),o=s("span"),o.textContent="✕",l=d(),g(o,"class","delete-email-button svelte-gqanwv"),g(o,"role","button"),g(n,"class","email-chip svelte-gqanwv"),v(n,"email-valid",t[16].valid),v(n,"email-invalid",!t[16].valid)},m(t,a){i(t,n,a),c(n,e),c(n,r),c(n,o),c(n,l),u=p(o,"click",m)},p(r,o){t=r,4&o&&h!==(h=t[16].value+"")&&function(t,n){n=""+n,t.data!==n&&(t.data=n)}(e,h),4&o&&v(n,"email-valid",t[16].valid),4&o&&v(n,"email-invalid",!t[16].valid)},d(t){t&&a(n),u()}}}function Z(n){let e,o,l,u,f=n[2].length>0&&S(n);return{c(){e=s("div"),f&&f.c(),o=d(),l=s("input"),g(l,"class","emails-input svelte-gqanwv"),g(l,"type","email"),g(l,"placeholder",n[1]),g(e,"class","input-wrapper svelte-gqanwv")},m(t,r){var a;i(t,e,r),f&&f.m(e,null),c(e,o),c(e,l),m(l,n[0]),u=[p(l,"input",n[14]),p(l,"keydown",n[6]),p(l,"blur",n[15]),p(l,"paste",(a=n[7],function(t){return t.preventDefault(),a.call(this,t)})),p(e,"click",h(M))]},p(t,[n]){t[2].length>0?f?f.p(t,n):(f=S(t),f.c(),f.m(e,o)):f&&(f.d(1),f=null),2&n&&g(l,"placeholder",t[1]),1&n&&l.value!==t[0]&&m(l,t[0])},i:t,o:t,d(t){t&&a(e),f&&f.d(),r(u)}}}function I(t){if("string"!=typeof t)return void console.error("Email must be a string");return{value:t,valid:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)}}function M(t){t.target.lastElementChild.focus()}function P(n,e,r){let o;const c=function(n,e=t){let r;const o=[];function u(t){if(l(n,t)&&(n=t,r)){const t=!z.length;for(let t=0;t<o.length;t+=1){const e=o[t];e[1](),z.push(e,n)}if(t){for(let t=0;t<z.length;t+=2)z[t][0](z[t+1]);z.length=0}}}return{set:u,update:function(t){u(t(n))},subscribe:function(l,c=t){const i=[l,c];return o.push(i),1===o.length&&(r=e(u)||t),l(n),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}([]);var i,a;let s;function f(t){let n;if(t)n=t.trim();else{if(!s)return;n=s.trim(),r(0,s="")}d(n)}function d(t){if(!t)return;const n=I(t);void 0!==n&&c.update(t=>[...t,n])}function p(t){c.update(n=>n.filter(n=>n.value!==t))}function h(){c.update(t=>{const n=[...t];return n.pop(),n})}i=c,a=t=>r(2,o=t),n.$$.on_destroy.push(u(i,a));let g;return n.$$.update=()=>{4&n.$$.dirty&&r(1,g=o.length>0?"add more people...":"Enter email adresses...")},[s,g,o,c,f,p,function(t){switch(t.key){case"Tab":f();break;case",":case"Enter":t.preventDefault(),f();break;case"Backspace":s&&0!==s.length||h()}},function(t){(function(t){return t.clipboardData?t.clipboardData.getData("text/plain"):""})(t).split(",").map(f)},function(){return function(t){let n;return u(t,t=>n=t)(),n}(c)},function(t=[]){if(t instanceof Array){const n=t.map(I);c.set(n)}},function(t){"function"==typeof t?c.subscribe(t):console.error("Callback must be a function")},d,h,t=>p(t.value),function(){s=this.value,r(0,s)},()=>f()]}return class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}{constructor(t){super(),j(this,t,P,Z,l,{getEmails:8,replaceEmails:9,onEmailsChange:10})}get getEmails(){return this.$$.ctx[8]}get replaceEmails(){return this.$$.ctx[9]}get onEmailsChange(){return this.$$.ctx[10]}}}();
//# sourceMappingURL=emailsInput.js.map
