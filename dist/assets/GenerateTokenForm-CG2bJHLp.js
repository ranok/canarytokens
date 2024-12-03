import{_ as C,a as x}from"./GenerateTokenSettingsNotifications.vue_vue_type_script_setup_true_lang-DwL5GacY.js";import{d as k,a as s,c as l,r as o,D as T,i,u as p,a6 as $,a7 as q,ai as V,p as I}from"./index-pt1RmN_n.js";const S="https://challenges.cloudflare.com/turnstile/v0/api.js",g="cfTurnstileOnLoad";let m=typeof window<"u"&&window.turnstile!==void 0?"ready":"unloaded",h;const D=k({name:"VueTurnstile",emits:["update:modelValue","error","unsupported","expired","before-interactive","after-interactive"],props:{siteKey:{type:String,required:!0},modelValue:{type:String,required:!0},resetInterval:{type:Number,required:!1,default:295*1e3},size:{type:String,required:!1,default:"normal"},theme:{type:String,required:!1,default:"auto"},language:{type:String,required:!1,default:"auto"},action:{type:String,required:!1,default:""},appearance:{type:String,required:!1,default:"always"},renderOnMount:{type:Boolean,required:!1,default:!0}},data(){return{resetTimeout:void 0,widgetId:void 0}},computed:{turnstileOptions(){return{sitekey:this.siteKey,theme:this.theme,language:this.language,size:this.size,callback:this.callback,action:this.action,appearance:this.appearance,"error-callback":this.errorCallback,"expired-callback":this.expiredCallback,"unsupported-callback":this.unsupportedCallback,"before-interactive-callback":this.beforeInteractiveCallback,"after-interactive-callback":this.afterInteractivecallback}}},methods:{afterInteractivecallback(){this.$emit("after-interactive")},beforeInteractiveCallback(){this.$emit("before-interactive")},expiredCallback(){this.$emit("expired")},unsupportedCallback(){this.$emit("unsupported")},errorCallback(a){this.$emit("error",a)},callback(a){this.$emit("update:modelValue",a),this.startResetTimeout()},reset(){window.turnstile&&(this.$emit("update:modelValue",""),window.turnstile.reset())},remove(){this.widgetId&&(window.turnstile.remove(this.widgetId),this.widgetId=void 0)},render(){this.widgetId=window.turnstile.render(this.$refs.turnstile,this.turnstileOptions)},startResetTimeout(){this.resetTimeout=setTimeout(()=>{this.reset()},this.resetInterval)}},async mounted(){const a=new Promise((t,e)=>{h={resolve:t,reject:e},m==="ready"&&t(void 0)});window[g]=()=>{h.resolve(),m="ready"},await(()=>{if(m==="unloaded"){m="loading";const t=`${S}?onload=${g}&render=explicit`,e=document.createElement("script");e.src=t,e.async=!0,e.addEventListener("error",()=>{h.reject("Failed to load Turnstile.")}),document.head.appendChild(e)}return a})(),this.renderOnMount&&this.render()},beforeUnmount(){this.remove(),clearTimeout(this.resetTimeout)}}),O=(a,t)=>{const e=a.__vccOpts||a;for(const[n,r]of t)e[n]=r;return e},A={ref:"turnstile"};function j(a,t,e,n,r,d){return s(),l("div",A,null,512)}const _=O(D,[["render",j]]),R={key:0},B={key:1},F={key:2},z={key:0},E={key:1},N=k({__name:"GenerateTokenForm",setup(a){const t=o(""),e=o(""),n="0x4AAAAAAAy-hRjXYO2cCoDX",r=o(!0),d=o(!1),v=o(0);async function w(){r.value=!0,d.value=!1;try{const u=await V(t.value);v.value=u.data.quota}catch(u){d.value=!0,console.log(u,"Getting CC Details failed.")}finally{r.value=!1}}return T(t,()=>{t.value!==""&&w()}),(u,c)=>{const y=I,b=x;return r.value?(s(),l("div",R,[i(p(_),{class:"flex align-center justify-center mt-24","site-key":p(n),theme:"light",modelValue:t.value,"onUpdate:modelValue":c[0]||(c[0]=f=>t.value=f)},null,8,["site-key","modelValue"])])):d.value?(s(),l("div",B,[i(y,{class:"mt-24",variant:"danger",message:"Oops, something went wrong!"})])):(s(),l("div",F,[v.value>0?(s(),l("div",z,[i(C,{"memo-helper-example":"Credit Card placed in payment card database"}),$(i(b,{id:"cf_turnstile_response",type:"text",placeholder:"cf_turnstile_response",label:"cf_turnstile_response","full-width":"",value:e.value,required:""},null,8,["value"]),[[q,!1]]),i(p(_),{class:"flex align-center justify-center mt-24","site-key":p(n),theme:"light",modelValue:e.value,"onUpdate:modelValue":c[1]||(c[1]=f=>e.value=f)},null,8,["site-key","modelValue"])])):(s(),l("div",E,[i(y,{class:"mt-24",variant:"warning",message:`Sorry, we've run out of Credit Card tokens!
 New cards are added to the pool everyday so please try again later.`})]))]))}}});export{N as default};
