import{_ as i}from"./BaseSwitch-BIpS5qv-.js";import{d as C,r as p,o as S,a as O,c as T,f as r,i as m,j as U,h as b,w as f,I as k,$ as A,q as D}from"./index-pt1RmN_n.js";import{_ as w}from"./BaseCodeSnippet.vue_vue_type_script_setup_true_lang-CKZZ42r-.js";function R(s,o,t){const n=`SET @bb = CONCAT("CHANGE REPLICATION SOURCE TO SOURCE_PASSWORD='my-secret-pw', SOURCE_RETRY_COUNT=1, SOURCE_PORT=3306, SOURCE_HOST='${s}', SOURCE_USER='${o}", @@lc_time_names, @@hostname, "';")`,d=btoa(`SET @bb = CONCAT("CHANGE REPLICATION SOURCE TO SOURCE_PASSWORD='my-secret-pw', SOURCE_RETRY_COUNT=1, SOURCE_PORT=3306, SOURCE_HOST='${s}', SOURCE_USER='${o}", @@lc_time_names, @@hostname, "';"`);return t?`SET @b = ${d};
SET @s2 = FROM_BASE64(@b);
PREPARE stmt1 FROM @s2;
EXECUTE stmt1;
PREPARE stmt2 FROM @bb;
EXECUTE stmt2;
START REPLICA;`:`${n};
PREPARE stmt FROM @bb;
EXECUTE stmt;
START REPLICA;`}const v=C({__name:"TokenDisplay",props:{tokenData:{}},setup(s){const o=s,t=p(o.tokenData.encoded||!0),n=p("");S(()=>{n.value=R(o.tokenData.hostname,o.tokenData.token,t.value)});function d(){t.value=!t.value,n.value=R(o.tokenData.hostname,o.tokenData.token,t.value)}function E(){var e,l;const c={fmt:"my_sql",auth:(e=o.tokenData)==null?void 0:e.auth,token:(l=o.tokenData)==null?void 0:l.token,encoded:t.value};A(c).then(a=>{window.location.href=a.request.responseURL}).catch(a=>{console.log(a,"err")}).finally(()=>{console.log("File downloaded")})}return(c,e)=>{const l=w,a=D,_=i;return O(),T(k,null,[e[3]||(e[3]=r("p",{class:"mt-16 mb-16"},"1. Insert it into a MySQL dump of your own",-1)),m(l,{lang:"sql",label:"Your MYSQL code",code:n.value},null,8,["code"]),e[4]||(e[4]=r("p",{class:"mt-32"}," 2. Download a (pseudo) random MySQL dump with a token already embedded in it ",-1)),m(a,{class:"mt-16",onClick:E},{default:U(()=>e[2]||(e[2]=[b("Download a MySQL Dump file")])),_:1}),m(_,{id:"encoded_mysql",modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=u=>t.value=u),class:"mt-16",label:"Encode Snippet","helper-message":"Encode snippet to make it harder to spot",onInput:e[1]||(e[1]=f(u=>d(),["stop"]))},null,8,["modelValue"])],64)}}});export{v as _};
