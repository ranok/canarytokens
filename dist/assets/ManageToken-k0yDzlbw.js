import{_ as p}from"./TokenDisplay.vue_vue_type_script_setup_true_lang-Dg1SD5At.js";import{d as k,r as m,a as s,c as d,b as _}from"./index-DBVwcgNu.js";import"./BaseCodeSnippet.vue_vue_type_script_setup_true_lang-CKq4KqUD.js";import"./BaseCopyButton-Dj2XHnLN.js";const i={key:0},y=k({__name:"ManageToken",props:{tokenBackendResponse:{}},setup(r){var n,o,t;const a=r,e=m({token:(t=(o=(n=a.tokenBackendResponse)==null?void 0:n.canarydrop)==null?void 0:o.canarytoken)==null?void 0:t._value,hostname:a.tokenBackendResponse.canarydrop.generated_hostname||""}),c=`${e.value.token}@${e.value.hostname.split(/\.(.+)/)[1]}`;return(l,u)=>e.value?(s(),_(p,{key:1,"token-data":c})):(s(),d("div",i,"Error loading"))}});export{y as default};
