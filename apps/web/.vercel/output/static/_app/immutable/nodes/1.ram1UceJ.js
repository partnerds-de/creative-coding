import{s as b,f,l as u,a as x,g as h,h as d,m as v,d as l,c as y,i as c,r as g,n as E,C as $,y as C}from"../chunks/scheduler.lc6pDmfW.js";import{S,i as q}from"../chunks/index._UJvAQqJ.js";import{p as H}from"../chunks/stores.Xo9b1ojZ.js";function P(i){let a,s=i[0].status+"",r,o,n,p=i[0].error?.message+"",m;return{c(){a=f("h1"),r=u(s),o=x(),n=f("p"),m=u(p)},l(e){a=h(e,"H1",{});var t=d(a);r=v(t,s),t.forEach(l),o=y(e),n=h(e,"P",{});var _=d(n);m=v(_,p),_.forEach(l)},m(e,t){c(e,a,t),g(a,r),c(e,o,t),c(e,n,t),g(n,m)},p(e,[t]){t&1&&s!==(s=e[0].status+"")&&E(r,s),t&1&&p!==(p=e[0].error?.message+"")&&E(m,p)},i:$,o:$,d(e){e&&(l(a),l(o),l(n))}}}function j(i,a,s){let r;return C(i,H,o=>s(0,r=o)),[r]}class A extends S{constructor(a){super(),q(this,a,j,P,b,{})}}export{A as component};
