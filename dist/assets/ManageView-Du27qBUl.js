const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ManageToken-BdZD26Dl.js","assets/TokenDisplay.vue_vue_type_script_setup_true_lang-DnZC5xSO.js","assets/index-B_YBSFCz.js","assets/index-Dwwo4rL_.css","assets/ManageToken-BAywVSpG.js","assets/TokenDisplay.vue_vue_type_script_setup_true_lang-8Ttcq_hG.js","assets/BaseCodeSnippet.vue_vue_type_script_setup_true_lang-CiF6lhg-.js","assets/BaseCopyButton-CHm5Bxep.js","assets/BaseCopyButton-BVl_HsmY.css","assets/BaseCodeSnippet-D6zLgBnL.css","assets/ManageToken-B6NVbz0f.js","assets/TokenDisplay.vue_vue_type_script_setup_true_lang-Ad8P7pAq.js","assets/ManageToken-C2vA7Qi0.js","assets/TokenDisplay.vue_vue_type_script_setup_true_lang-CGvSRKnS.js","assets/ManageToken-Cz-cHyUX.js","assets/TokenDisplay.vue_vue_type_script_setup_true_lang-DZBn9SPH.js","assets/BaseSwitch-By3nk_YB.js","assets/BaseSwitch-DoZCPshJ.css","assets/ManageToken-B-6WtH1M.js","assets/TokenDisplay.vue_vue_type_script_setup_true_lang-D-chpuO0.js","assets/ManageToken-CUeD-C9Y.js","assets/TokenDisplay.vue_vue_type_script_setup_true_lang-BmF0sERB.js","assets/TokenDisplay-BlTd1c62.css","assets/ManageToken-Dbbb1i6G.js","assets/TokenDisplay.vue_vue_type_script_setup_true_lang-Dq-t-zR9.js","assets/ManageToken-BfnEonJN.js","assets/TokenDisplay.vue_vue_type_script_setup_true_lang-s_GNBctX.js","assets/ManageToken-CHDxhy5f.js","assets/TokenDisplay.vue_vue_type_script_setup_true_lang-DU3bXQV4.js","assets/ManageToken-Dmwzidsm.js","assets/TokenDisplay.vue_vue_type_script_setup_true_lang-Dk080l-O.js","assets/ManageToken-DzrT6-h9.js","assets/TokenDisplay.vue_vue_type_script_setup_true_lang-7ujfoINS.js","assets/ManageToken-Cokv2QJZ.js","assets/TokenDisplay.vue_vue_type_script_setup_true_lang-BdfVSOj8.js","assets/ManageToken-B14B91zs.js","assets/TokenDisplay.vue_vue_type_script_setup_true_lang-dYKUdsFV.js","assets/ManageToken-n6gL0L2Z.js","assets/TokenDisplay.vue_vue_type_script_setup_true_lang-CQzB6CnQ.js","assets/ManageToken-vgFIZfzP.js","assets/TokenDisplay.vue_vue_type_script_setup_true_lang-CvXFdOW_.js","assets/pwaIconService-CEXrhOhO.js","assets/ManageToken-BNC46G-p.js","assets/TokenDisplay.vue_vue_type_script_setup_true_lang-Bo21_QcF.js","assets/ManageToken-TRJYt0tY.js","assets/ManageToken-D9w_hPqL.js","assets/TokenDisplay.vue_vue_type_script_setup_true_lang-Bdp3uFPn.js","assets/ManageToken-Dhi7AhT_.js","assets/TokenDisplay.vue_vue_type_script_setup_true_lang-B9mRFziU.js","assets/ManageToken-B-kmW33j.js","assets/TokenDisplay.vue_vue_type_script_setup_true_lang-CIthrBre.js","assets/ManageToken-q5AQ5Dtd.js","assets/generateSVNToken-Cj9IhP0E.js","assets/ManageToken-DUYZhARN.js","assets/TokenDisplay.vue_vue_type_script_setup_true_lang-CDtwKvMf.js","assets/ManageToken-BdhpRG9n.js","assets/TokenDisplay.vue_vue_type_script_setup_true_lang-B0NxDqNb.js","assets/ManageToken-a6zfuXd3.js","assets/TokenDisplay.vue_vue_type_script_setup_true_lang-DyYJu88R.js","assets/ManageToken-BbHR-Ofi.js","assets/TokenDisplay.vue_vue_type_script_setup_true_lang-CJFEKW5a.js"])))=>i.map(i=>d[i]);
import{A as H}from"./AppLayoutOneColumn-DqNr6K0I.js";import{d as O,r as p,o as K,S as m,a as i,c as h,b as x,w as C,u as E,e as T,T as D,G as j,U,s as Y,f as u,g as P,h as w,i as d,j as f,_ as q,k as N,n as F,l as W,t as B,m as z,p as $,q as G,v as J,x as Z,y as Q,z as X,A as ee,B as oe,C as ae,D as te,E as V,F as ne,H as se,I as le,J as re,K as ue,L as ie,M as _e,N as t}from"./index-B_YBSFCz.js";import{_ as de}from"./BaseSwitch-By3nk_YB.js";const ce={class:"flex flex-col gap-24"},S="An error occurred. Please try again.",me=O({__name:"SettingsToken",props:{tokenBackendResponse:{}},setup(R){const n=R;function s(){return n.tokenBackendResponse.canarydrop.type===D.WEB_BUG||n.tokenBackendResponse.canarydrop.type===D.WEB_IMAGE}function l(){return n.tokenBackendResponse.canarydrop.type===D.WEB_IMAGE}const v=p(n.tokenBackendResponse.canarydrop.alert_email_recipient),a=p(n.tokenBackendResponse.canarydrop.alert_webhook_url),M=p(s()),b=p(l()),e=p({[m.EMAIL]:!1,[m.WEB_HOOK]:!1,[m.BROWSER_SCANNER]:!1,[m.WEB_IMAGE]:!1}),k=p({[m.EMAIL]:!1,[m.WEB_HOOK]:!1,[m.BROWSER_SCANNER]:!1,[m.WEB_IMAGE]:!1}),_=p({[m.EMAIL]:!1,[m.WEB_HOOK]:!1,[m.BROWSER_SCANNER]:!1,[m.WEB_IMAGE]:!1});K(()=>{Object.keys(m).forEach(c=>{const r=j[c];e.value[c]=!!n.tokenBackendResponse.canarydrop[r],k.value[c]=!1,_.value[c]=!1})});function I(c){return c?"on":"off"}async function A(c,r){var o;const y={value:I(r),token:(o=n.tokenBackendResponse.canarydrop.canarytoken)==null?void 0:o._value,auth:n.tokenBackendResponse.canarydrop.auth,setting:U[c]};Object.keys(_.value).forEach(g=>{_.value[g]=!1}),k.value[c]=!0;try{const g=await Y(y);g.status===200?e.value[c]=r:(console.log("Error:",g.data.detail),_.value[c]=!0)}catch(g){console.log(g,"error!"),_.value[c]=!0}finally{k.value[c]=!1}}return(c,r)=>{const y=de;return i(),h("div",ce,[v.value?(i(),x(y,{key:0,id:"email-alert",modelValue:e.value.EMAIL,"onUpdate:modelValue":r[0]||(r[0]=o=>e.value.EMAIL=o),label:"Email alerts","helper-message":c.tokenBackendResponse.canarydrop.alert_email_recipient,loading:k.value.EMAIL,"has-error":_.value.EMAIL,"error-message":S,onClick:r[1]||(r[1]=C(o=>A(E(m).EMAIL,!e.value.EMAIL),["prevent"]))},null,8,["modelValue","helper-message","loading","has-error"])):T("",!0),a.value?(i(),x(y,{key:1,id:"webhook-alert",modelValue:e.value.WEB_HOOK,"onUpdate:modelValue":r[2]||(r[2]=o=>e.value.WEB_HOOK=o),label:"Webhook reporting","helper-message":n.tokenBackendResponse.canarydrop.alert_webhook_url,loading:k.value.WEB_HOOK,"has-error":_.value.WEB_HOOK,"error-message":S,onClick:r[3]||(r[3]=C(o=>A(E(m).WEB_HOOK,!e.value.WEB_HOOK),["prevent"]))},null,8,["modelValue","helper-message","loading","has-error"])):T("",!0),M.value?(i(),x(y,{key:2,id:"browser-alert",modelValue:e.value.BROWSER_SCANNER,"onUpdate:modelValue":r[4]||(r[4]=o=>e.value.BROWSER_SCANNER=o),label:"Browser scanner","helper-message":"Runs Javascript fingerprinting when the token is browsed",loading:k.value.BROWSER_SCANNER,"has-error":_.value.BROWSER_SCANNER,"error-message":S,onClick:r[5]||(r[5]=C(o=>A(E(m).BROWSER_SCANNER,!e.value.BROWSER_SCANNER),["prevent"]))},null,8,["modelValue","loading","has-error"])):T("",!0),b.value?(i(),x(y,{key:3,id:"custom-image",modelValue:e.value.WEB_IMAGE,"onUpdate:modelValue":r[6]||(r[6]=o=>e.value.WEB_IMAGE=o),label:"Custom web image","helper-message":"Serve your alternative image",loading:k.value.WEB_IMAGE,"has-error":_.value.WEB_IMAGE,"error-message":S,onClick:r[7]||(r[7]=C(o=>A(E(m).WEB_IMAGE,!e.value.WEB_IMAGE),["prevent"]))},null,8,["modelValue","loading","has-error"])):T("",!0)])}}}),pe={class:"grid sm:grid-cols-[1fr_5fr] border gap-32 border-grey-200 items-center p-32 bg-white rounded-3xl shadow-solid-shadow-grey"},ve={class:"justify-center hidden sm:flex"},ke=["src"],ge={class:"text-left"},fe={class:"mt-16 leading-relaxed text-balance text-grey-500"},Ee=O({__name:"BannerTextCanarytools",setup(R){return(n,s)=>{const l=q;return i(),h("div",pe,[u("div",ve,[u("img",{src:E(P)("thinkst_canary_logo.png"),alt:"logo Canarytokens",class:"w-full sm:block max-w-[8rem]"},null,8,ke)]),u("div",ge,[s[2]||(s[2]=u("p",{class:"text-xl font-semibold leading-normal text-grey-800"}," We hope you enjoy the free version of Canarytokens! ",-1)),u("p",fe,[s[1]||(s[1]=w(" For more (non-public) tokens, support, mass-deployment-tools and better management of your deployed tokens, check out our commercial offering at ")),d(l,{class:"font-semibold",href:"https://canary.tools",target:"_blank"},{default:f(()=>s[0]||(s[0]=[w("https://canary.tools")])),_:1})])])])}}}),ye={class:"relative mb-16"},he=["src","alt"],Te={key:1,class:"flex flex-row justify-center w-full"},xe=O({__name:"DeleteTokenModal",props:{auth:{},token:{},type:{},closeModal:{type:Function}},setup(R){const n=N(),s=p(!1),l=p(""),v=p(""),a=R,M=async()=>{s.value=!0,l.value="";const b={auth:a.auth,token:a.token};try{const e=await z(b);e.status===200?(v.value="Yay! Your Canarytoken, plus associated alerts, has been successfully deleted.",setTimeout(()=>{a.closeModal(),n.push({name:"home"})},3e3)):e.status===404?(a.closeModal(),n.push({name:"error"})):l.value="Oh no! Something went wrong when deleting your Canarytoken."}catch(e){console.log(e,"err!"),l.value=e.toString()}finally{s.value=!1}};return(b,e)=>{const k=$,_=G,I=J;return i(),x(I,{"documentation-link":"","has-back-button":!1,title:"Delete token","has-close-button":!0},{footer:f(()=>[u("div",null,[l.value||v.value?(i(),x(k,{key:0,class:F(`w-[90%] m-auto ${l.value?"mb-16":""}`),variant:v.value?"success":"danger",message:l.value||v.value},null,8,["class","variant","message"])):T("",!0),v.value?T("",!0):(i(),h("div",Te,[d(_,{variant:"grey",class:"mr-8",onClick:e[0]||(e[0]=A=>b.closeModal())},{default:f(()=>e[2]||(e[2]=[w("No, keep it")])),_:1}),d(_,{variant:"danger",loading:s.value,onClick:e[1]||(e[1]=A=>M())},{default:f(()=>e[3]||(e[3]=[w("Yes, delete")])),_:1},8,["loading"])]))])]),default:f(()=>[u("span",ye,[d(W,{title:E(B)[a.type].label,"logo-img-url":E(B)[a.type].icon,class:"h-[6rem] w-[6rem]","has-shadow":!0,"has-animation":!0},null,8,["title","logo-img-url"]),u("img",{src:E(P)("token_icons/delete_token_badge.png"),alt:`${E(B)[a.type].label}`,class:"absolute w-[1.3rem] bottom-[.5rem] right-[.3rem]"},null,8,he)]),e[4]||(e[4]=u("div",{class:"text-center"},[u("p",{class:"text-xl font-semibold leading-normal text-grey-800"}," Are you sure you want to delete this Canarytoken? "),u("p",{class:"mt-8 leading-normal text-normal text-grey-300"}," All associated alerts will be permanently lost ")],-1))]),_:1})}}}),we={class:"flex flex-row items-center justify-between mt-32"},Re=O({__name:"DeleteTokenButton",props:{memo:{},token:{},auth:{},type:{}},setup(R){function n(s,l,v){const{open:a,close:M}=Z({component:xe,attrs:{type:s,auth:l,token:v,closeModal:()=>M()}});a()}return(s,l)=>{const v=G;return i(),h("div",we,[l[2]||(l[2]=u("div",{class:"flex flex-col"},[u("span",null,"Delete Canarytoken"),u("span",{class:"text-xs leading-4 text-grey-500 pr-[3rem]"},"Remove this Canarytoken and delete all related alerts")],-1)),u("div",null,[d(v,{variant:"danger",border:!0,onClick:l[0]||(l[0]=a=>n(s.type,s.auth,s.token))},{default:f(()=>l[1]||(l[1]=[w("Delete")])),_:1})])])}}}),be={},Ae={class:"flex flex-row items-center self-start flex-grow gap-16 py-8 w-full bg-grey-100 rounded-2xl min-h-[3rem] text-grey"},Me={class:"py-8 text-pretty"};function Be(R,n){const s=X("font-awesome-icon");return i(),h("div",null,[n[0]||(n[0]=u("h3",{class:"inline-block mb-8 text-grey-500"},"Your Memo for this token",-1)),u("div",Ae,[d(s,{icon:"quote-left",class:"pl-16 text-2xl text-grey-300"}),u("p",Me,[ee(R.$slots,"default")])])])}const Oe=Q(be,[["render",Be]]),Ie={key:0,class:"flex flex-col items-center gap-8 mb-24"},Ce={class:"text-xl text-center text-grey-800"},Ve={key:1,class:"flex flex-col items-center w-full gap-8"},Se={key:3,class:"md:mx-32 md:max-w-[50vw] w-full"},De={class:"flex flex-col justify-center p-16 md:p-32 rounded-3xl bg-grey-50"},Le={class:"flex flex-col w-full gap-8"},Pe={key:0},Ne={key:1},We={class:"font-bold"},$e=["href"],Ge={class:"flex justify-center sm:max-w-[50vw]"},He=O({__name:"ManageToken",setup(R){const n=oe(),s=N(),l=p(!1),v=p(null),a=p(),M=p(),b=p({props:{}}),e=p(0),k=p(),_=ae(()=>a.value.canarydrop.expected_referrer==="microsoftonline.com"?D.AZURE_ENTRA_CONFIG:a.value.canarydrop.type);function I(){const y=n.params.auth,o=n.params.token;s.push({name:"history",params:{auth:y,token:o}})}function A(){window.open(k.value.public_location,"_blank")}async function c(){l.value=!0;const y={auth:n.params.auth,token:n.params.token};try{const o=await ie(y);l.value=!1,a.value=o.data,M.value=`token_icons/${B[_.value].icon}`,e.value=a.value.canarydrop.triggered_details.hits.length,k.value=a.value.canarydrop.key_exposed_details,r()}catch(o){console.log(o,"err!"),v.value=o.toString(),s.push({name:"error"})}finally{l.value=!1}}async function r(){b.value=await re(()=>_e(Object.assign({"./tokens/adobe_pdf/ManageToken.vue":()=>t(()=>import("./ManageToken-BdZD26Dl.js"),__vite__mapDeps([0,1,2,3])),"./tokens/aws_keys/ManageToken.vue":()=>t(()=>import("./ManageToken-BAywVSpG.js"),__vite__mapDeps([4,5,6,7,2,3,8,9])),"./tokens/azure_id/ManageToken.vue":()=>t(()=>import("./ManageToken-B6NVbz0f.js"),__vite__mapDeps([10,11,2,3,6,7,8,9])),"./tokens/azure_id_config/ManageToken.vue":()=>t(()=>import("./ManageToken-C2vA7Qi0.js"),__vite__mapDeps([12,13,2,3])),"./tokens/clonedsite/ManageToken.vue":()=>t(()=>import("./ManageToken-Cz-cHyUX.js"),__vite__mapDeps([14,15,16,2,3,17,6,7,8,9])),"./tokens/cmd/ManageToken.vue":()=>t(()=>import("./ManageToken-B-6WtH1M.js"),__vite__mapDeps([18,19,2,3])),"./tokens/credit_card_v2/ManageToken.vue":()=>t(()=>import("./ManageToken-CUeD-C9Y.js"),__vite__mapDeps([20,21,2,3,7,8,22])),"./tokens/cssclonedsite/ManageToken.vue":()=>t(()=>import("./ManageToken-Dbbb1i6G.js"),__vite__mapDeps([23,24,6,7,2,3,8,9])),"./tokens/dns/ManageToken.vue":()=>t(()=>import("./ManageToken-BfnEonJN.js"),__vite__mapDeps([25,26,6,7,2,3,8,9])),"./tokens/fast_redirect/ManageToken.vue":()=>t(()=>import("./ManageToken-CHDxhy5f.js"),__vite__mapDeps([27,28,6,7,2,3,8,9])),"./tokens/kubeconfig/ManageToken.vue":()=>t(()=>import("./ManageToken-Dmwzidsm.js"),__vite__mapDeps([29,30,2,3])),"./tokens/log4shell/ManageToken.vue":()=>t(()=>import("./ManageToken-DzrT6-h9.js"),__vite__mapDeps([31,32,6,7,2,3,8,9])),"./tokens/ms_excel/ManageToken.vue":()=>t(()=>import("./ManageToken-Cokv2QJZ.js"),__vite__mapDeps([33,34,2,3])),"./tokens/ms_word/ManageToken.vue":()=>t(()=>import("./ManageToken-B14B91zs.js"),__vite__mapDeps([35,36,2,3])),"./tokens/my_sql/ManageToken.vue":()=>t(()=>import("./ManageToken-n6gL0L2Z.js"),__vite__mapDeps([37,38,16,2,3,17,6,7,8,9])),"./tokens/pwa/ManageToken.vue":()=>t(()=>import("./ManageToken-vgFIZfzP.js"),__vite__mapDeps([39,40,2,3,41])),"./tokens/qr_code/ManageToken.vue":()=>t(()=>import("./ManageToken-BNC46G-p.js"),__vite__mapDeps([42,43,2,3])),"./tokens/signed_exe/ManageToken.vue":()=>t(()=>import("./ManageToken-TRJYt0tY.js"),__vite__mapDeps([44,2,3])),"./tokens/slow_redirect/ManageToken.vue":()=>t(()=>import("./ManageToken-D9w_hPqL.js"),__vite__mapDeps([45,46,6,7,2,3,8,9])),"./tokens/smtp/ManageToken.vue":()=>t(()=>import("./ManageToken-Dhi7AhT_.js"),__vite__mapDeps([47,48,6,7,2,3,8,9])),"./tokens/sql_server/ManageToken.vue":()=>t(()=>import("./ManageToken-B-kmW33j.js"),__vite__mapDeps([49,50,6,7,2,3,8,9])),"./tokens/svn/ManageToken.vue":()=>t(()=>import("./ManageToken-q5AQ5Dtd.js"),__vite__mapDeps([51,52,6,7,2,3,8,9])),"./tokens/web/ManageToken.vue":()=>t(()=>import("./ManageToken-DUYZhARN.js"),__vite__mapDeps([53,54,6,7,2,3,8,9])),"./tokens/web_image/ManageToken.vue":()=>t(()=>import("./ManageToken-BdhpRG9n.js"),__vite__mapDeps([55,56,6,7,2,3,8,9])),"./tokens/windows_dir/ManageToken.vue":()=>t(()=>import("./ManageToken-a6zfuXd3.js"),__vite__mapDeps([57,2,3,58])),"./tokens/wireguard/ManageToken.vue":()=>t(()=>import("./ManageToken-BbHR-Ofi.js"),__vite__mapDeps([59,60,6,7,2,3,8,9]))}),`./tokens/${_.value}/ManageToken.vue`,4))}return r(),te(()=>n.params.token,c,{immediate:!0}),(y,o)=>{const g=ue,L=$;return i(),h(le,null,[a.value?(i(),h("div",Ie,[d(W,{title:E(B)[_.value].label,"logo-img-url":E(B)[_.value].icon,class:"h-[4rem] w-[4rem]","has-shadow":!1},null,8,["title","logo-img-url"]),u("h2",Ce,V(E(B)[_.value].label),1)])):T("",!0),l.value?(i(),h("div",Ve,[d(g,{type:"circle",class:"w-[60px] h-[60px]"}),d(g,{type:"header",class:"w-[200px]"}),d(g,{type:"rectangle",class:"md:max-w-[50vw] w-full h-[250px] mt-16"})])):T("",!0),v.value?(i(),x(L,{key:2,variant:"danger",message:"Oh no! Something went wrong when managing your Canarytoken data. Please refresh the page or try again later."})):T("",!0),a.value?(i(),h("div",Se,[u("div",De,[(i(),x(se,null,{fallback:f(()=>[u("div",Le,[d(g,{class:"w-[100px]",type:"text"}),d(g,{class:"w-full",type:"header"})])]),default:f(()=>[(i(),x(ne(b.value),{"token-backend-response":a.value},null,8,["token-backend-response"]))]),_:1})),d(Oe,{class:"mt-32"},{default:f(()=>[w(V(a.value.canarydrop.memo),1)]),_:1}),d(me,{"token-backend-response":a.value,class:"mt-32"},null,8,["token-backend-response"]),d(L,{class:"mt-32",variant:e.value?"danger":"info","text-link":e.value?"Check History":"",onClick:I},{default:f(()=>[e.value?(i(),h("span",Ne,[o[0]||(o[0]=w(" This Canarytoken has been triggered ")),u("span",We,V(e.value),1),w(" time"+V(e.value>1?"s":""),1)])):(i(),h("span",Pe,"This Canarytoken has never been triggered"))]),_:1},8,["variant","text-link"]),k.value?(i(),x(L,{key:0,class:"mt-32",variant:"warning","text-link":"Go to token",onClick:A},{default:f(()=>[o[1]||(o[1]=w(" This Canarytoken has been found ")),u("a",{class:"font-bold",href:k.value.public_location,target:"_blank"},"here",8,$e),o[2]||(o[2]=w(" on the internet. Please replace it with a new Canarytoken. "))]),_:1})):T("",!0),d(Re,{memo:a.value.canarydrop.memo,token:a.value.canarydrop.canarytoken._value,auth:a.value.canarydrop.auth,type:a.value.canarydrop.type},null,8,["memo","token","auth","type"])]),u("div",Ge,[d(Ee,{class:"mt-32 mb-8"})])])):T("",!0)],64)}}}),Ye=O({__name:"ManageView",setup(R){return(n,s)=>(i(),x(H,null,{default:f(()=>[d(He)]),_:1}))}});export{Ye as default};
