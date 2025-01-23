import{_ as T,c as q,a as x,b as V}from"./GenerateTokenSettingsNotifications.vue_vue_type_script_setup_true_lang-cd2sv76w.js";import{d as E,ai as h,D as C,a as i,c as f,f as _,Q as y,h as S,E as b,y as B,r as m,i as o,j as p,b as v,I as L}from"./index-C-hFe8R8.js";const k=["for"],$=["id","name"],w=E({__name:"BaseRadioInput",props:{id:{},name:{},label:{}},emits:["hasError","selectValue"],setup(c,{emit:s}){const r=c,t=s,{value:l,errorMessage:a}=h(r.name);function d(e){l.value=e.target.value,t("selectValue",e.target.value)}return C(a,()=>{t("hasError",a.value)}),(e,u)=>(i(),f("label",{for:e.id||e.name,class:"flex flex-row text-sm text-grey-400"},[_("input",y(e.$attrs,{id:e.id,type:"radio",name:e.name,onChange:d}),null,16,$),S(" "+b(e.label),1)],8,k))}}),I=B(w,[["__scopeId","data-v-57b39aad"]]),N={class:"text-center"},A={class:"text-xs leading-0 text-red"},D={id:"radio-group-action",class:"flex flex-wrap gap-16 mt-8 mb-32 justify-evenly sm:flex-row"},O=E({__name:"GenerateTokenForm",setup(c){const s=m(""),r=m(""),t=l=>{r.value=l};return(l,a)=>{const d=q,e=I,u=x,g=V;return i(),f(L,null,[o(g,{"setting-type":"Canarytoken"},{default:p(()=>[_("div",N,[o(d,{id:"radio-group-action"},{default:p(()=>a[4]||(a[4]=[S(" Action")])),_:1}),_("div",A,b(s.value),1),_("div",D,[o(e,{id:"insert",value:"INSERT",required:"",name:"sql_server_sql_action",label:"INSERT",onSelectValue:t,onHasError:a[0]||(a[0]=n=>s.value=n)}),o(e,{id:"update",value:"UPDATE",name:"sql_server_sql_action",label:"UPDATE",onSelectValue:t,onHasError:a[1]||(a[1]=n=>s.value=n)}),o(e,{id:"delete",value:"DELETE",name:"sql_server_sql_action",label:"DELETE",onSelectValue:t,onHasError:a[2]||(a[2]=n=>s.value=n)}),o(e,{id:"select",value:"SELECT",name:"sql_server_sql_action",label:"SELECT",onSelectValue:t,onHasError:a[3]||(a[3]=n=>s.value=n)})]),r.value==="SELECT"?(i(),v(u,{key:0,id:"sql_server_view_name",label:"On this View",placeholder:"YOUR_VIEW_NAME",required:""})):(i(),v(u,{key:1,id:"sql_server_table_name",label:"On this Table",placeholder:"YOUR_TABLE_NAME",required:""}))])]),_:1}),o(T,{"memo-helper-example":"SELECT SQL Server token on SQL01/CreditCards"})],64)}}});export{O as default};
