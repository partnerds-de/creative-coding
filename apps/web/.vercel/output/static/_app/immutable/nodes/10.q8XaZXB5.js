import{s as g,p as A,u as D,f as h,a as b,g as v,h as R,d as u,c as w,j,i as c,F as E,v as F,w as H,x as I,o as L,C as P,S as T,D as U}from"../chunks/scheduler.lc6pDmfW.js";import{S as C,i as y,f as V,b as S,d as k,m as M,a as _,t as d,e as q}from"../chunks/index._UJvAQqJ.js";import{P as x}from"../chunks/store.tFljVPwL.js";import{P as z}from"../chunks/Pane.xoQjdWIQ.js";import{s as B,i as G}from"../chunks/peerUtils.OfQ6oFS9.js";function J(i){let s,a,l,n,o;function t(e){i[4](e)}let p={};i[1]!==void 0&&(p.params=i[1]),a=new z({props:p}),A.push(()=>V(a,"params",t));const m=i[3].default,r=D(m,i,i[2],null);return{c(){s=h("div"),S(a.$$.fragment),n=b(),r&&r.c(),this.h()},l(e){s=v(e,"DIV",{class:!0});var f=R(s);k(a.$$.fragment,f),f.forEach(u),n=w(e),r&&r.l(e),this.h()},h(){j(s,"class","m-2 max-w-sm rounded overflow-hidden")},m(e,f){c(e,s,f),M(a,s,null),c(e,n,f),r&&r.m(e,f),o=!0},p(e,[f]){const $={};!l&&f&2&&(l=!0,$.params=e[1],E(()=>l=!1)),a.$set($),r&&r.p&&(!o||f&4)&&F(r,m,e,e[2],o?I(m,e[2],f,null):H(e[2]),null)},i(e){o||(_(a.$$.fragment,e),_(r,e),o=!0)},o(e){d(a.$$.fragment,e),d(r,e),o=!1},d(e){e&&(u(s),u(n)),q(a),r&&r.d(e)}}}function K(i,s,a){let l,n=P,o=()=>(n(),n=T(m,e=>a(1,l=e)),m);i.$$.on_destroy.push(()=>n());let{$$slots:t={},$$scope:p}=s,{params:m}=s;o(),m.subscribe(e=>B(e)),L(async()=>{const e=new URL(window.location.href).searchParams.get("k")??"";G(e)});function r(e){l=e,m.set(l)}return i.$$set=e=>{"params"in e&&o(a(0,m=e.params)),"$$scope"in e&&a(2,p=e.$$scope)},[m,l,p,t,r]}class N extends C{constructor(s){super(),y(this,s,K,J,g,{params:0})}}function O(i){let s,a="Test Controller",l,n,o;return n=new N({props:{params:x}}),{c(){s=h("h1"),s.textContent=a,l=b(),S(n.$$.fragment)},l(t){s=v(t,"H1",{"data-svelte-h":!0}),U(s)!=="svelte-1lyqcvu"&&(s.textContent=a),l=w(t),k(n.$$.fragment,t)},m(t,p){c(t,s,p),c(t,l,p),M(n,t,p),o=!0},p:P,i(t){o||(_(n.$$.fragment,t),o=!0)},o(t){d(n.$$.fragment,t),o=!1},d(t){t&&(u(s),u(l)),q(n,t)}}}class ee extends C{constructor(s){super(),y(this,s,null,O,g,{})}}export{ee as component};
