import{_ as p}from"./TokenDisplay.vue_vue_type_script_setup_true_lang-hScXcl38.js";import{d as k,r as d,a as _,b as u}from"./index-HOUULui1.js";const i=k({__name:"ManageToken",props:{tokenBackendResponse:{}},setup(r){var n,a,o,t,s;const e=r,c=d({qrcode_png:(n=e.tokenBackendResponse)==null?void 0:n.qr_code,token:(t=(o=(a=e.tokenBackendResponse)==null?void 0:a.canarydrop)==null?void 0:o.canarytoken)==null?void 0:t._value,auth:(s=e.tokenBackendResponse.canarydrop)==null?void 0:s.auth});return(m,f)=>(_(),u(p,{"token-data":c.value},null,8,["token-data"]))}});export{i as default};
