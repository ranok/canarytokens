import{_ as p}from"./TokenDisplay.vue_vue_type_script_setup_true_lang-DwLlnq5D.js";import{d as k,r as d,a as s,c as m,b as _}from"./index-DBVwcgNu.js";import"./BaseSwitch-DUN9O3e_.js";import"./BaseCodeSnippet.vue_vue_type_script_setup_true_lang-CKq4KqUD.js";import"./BaseCopyButton-Dj2XHnLN.js";const i={key:0},R=k({__name:"ManageToken",props:{tokenBackendResponse:{}},setup(c){var n,o,t,r;const e=c,a=d({hostname:e.tokenBackendResponse.canarydrop.generated_hostname||"",token:((t=(o=(n=e.tokenBackendResponse)==null?void 0:n.canarydrop)==null?void 0:o.canarytoken)==null?void 0:t._value)||"",auth:((r=e.tokenBackendResponse.canarydrop)==null?void 0:r.auth)||"",encoded:!0});return(l,u)=>a.value?(s(),_(p,{key:1,"token-data":a.value},null,8,["token-data"])):(s(),m("div",i,"Error loading"))}});export{R as default};
