import{x as o,B as n,I as i,G as a,d as e,$ as l,e as t,a0 as s,a1 as r,a2 as d,A as c}from"./index-319f1921.js";import{r as g,u}from"./use-route-02d83514.js";const[p,b]=o("button");const f=c(e({name:p,props:n({},g,{tag:i("button"),text:String,icon:String,type:i("default"),size:i("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:i("button"),loadingSize:a,loadingText:String,loadingType:String,iconPosition:i("left")}),emits:["click"],setup(o,{emit:n,slots:i}){const a=u(),e=()=>o.loading?i.loading?i.loading():t(d,{size:o.loadingSize,type:o.loadingType,class:b("loading")},null):i.icon?t("div",{class:b("icon")},[i.icon()]):o.icon?t(s,{name:o.icon,class:b("icon"),classPrefix:o.iconPrefix},null):void 0,c=()=>{let n;if(n=o.loading?o.loadingText:i.default?i.default():o.text,n)return t("span",{class:b("text")},[n])},g=()=>{const{color:n,plain:i}=o;if(n){const o={color:i?n:"white"};return i||(o.background=n),n.includes("gradient")?o.border=0:o.borderColor=n,o}},p=i=>{o.loading?r(i):o.disabled||(n("click",i),a())};return()=>{const{tag:n,type:i,size:a,block:s,round:r,plain:d,square:u,loading:f,disabled:x,hairline:m,nativeType:y,iconPosition:B}=o,S=[b([i,a,{plain:d,block:s,round:r,square:u,loading:f,disabled:x,hairline:m}]),{[l]:m}];return t(n,{type:y,class:S,style:g(),disabled:x,onClick:p},{default:()=>[t("div",{class:b("content")},["left"===B&&e(),c(),"right"===B&&e()])]})}}}));export{f as B};
