import{d as m,r as i,a as p,c as k,f as l,i as a,I as u,p as c}from"./index-tvY-knJ6.js";import{_ as d}from"./TokenDisplay.vue_vue_type_script_setup_true_lang-Cjq6Q6m3.js";import"./BaseSwitch-CUn2qwGI.js";import"./BaseCodeSnippet.vue_vue_type_script_setup_true_lang-DD07ZsCL.js";import"./BaseCopyButton-BSot4VMX.js";const y=m({__name:"ActivatedToken",props:{tokenData:{}},emits:["howToUse"],setup(o){const t=o,n=i({hostname:t.tokenData.hostname||"",token:t.tokenData.token||"",auth:t.tokenData.auth_token||"",encoded:!0});return(s,e)=>{const r=c;return p(),k(u,null,[e[1]||(e[1]=l("p",null,"There are two ways you can use this token:",-1)),a(d,{"token-data":n.value},null,8,["token-data"]),a(r,{class:"mt-24",variant:"info",message:"When the MySQL statements are run, your Canarytoken will be triggered.","text-link":"More tips?",onClick:e[0]||(e[0]=()=>s.$emit("howToUse"))})],64)}}});export{y as default};
