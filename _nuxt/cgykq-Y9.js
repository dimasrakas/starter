const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Dtyw9X83.js","./DKCNSedU.js","./DC6ZllJU.js","./BPNmOApp.js","./C-v3KzvZ.js"])))=>i.map(i=>d[i]);
import{u as f}from"./DmhsmdE2.js";import{x as v,Q as p,_ as g,a as d,R as l,S as h,v as _,G as y,I as r}from"./DKCNSedU.js";import{q as C,w as m,e as w,s as P,j as $,u as N}from"./DC6ZllJU.js";import{u as j}from"./BPNmOApp.js";import{_ as T}from"./u_vXZRWG.js";const x=async e=>{const{content:t}=v().public;typeof(e==null?void 0:e.params)!="function"&&(e=C(e));const a=e.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${p(a)}.${t.integrity}`}/${w(a)}.json`):m(`/navigation/${p(a)}.${t.integrity}.json`);if(P())return(await g(()=>import("./Dtyw9X83.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(o=>o.generateNavigation))(a);const n=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:$(a),previewToken:j().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n},D=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(e){const{query:t}=l(e),a=h(()=>{var n;return typeof((n=t.value)==null?void 0:n.params)=="function"?t.value.params():t.value});if(!a.value&&_("dd-navigation").value){const{navigation:n}=N();return{navigation:n}}const{data:s}=await f(`content-navigation-${p(a.value)}`,()=>x(a.value));return{navigation:s}},render(e){const t=y(),{navigation:a}=e,s=o=>r(T,{to:o._path},()=>o.title),n=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),n(i.children,u+1)]):r("li",null,s(i)))),c=o=>n(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):c(a)}}),L=D;export{L as default};
