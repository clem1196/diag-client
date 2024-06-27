import{d as nt,o as it,r as $,a as _,b as i,e as c,f as t,t as d,w as N,v as O,g as at,F as B,h as I,u as w,i as v,j as T,m as F,p as ct,k as rt,R as ut,l as j,n as dt}from"./index-Q8u7QvsL.js";import{g as _t}from"./diagnosis-Ca66f_EQ.js";import vt from"./diagnosisGraphics-BvAmnH-E.js";import{_ as ht}from"./diagnosisAdd.vue_vue_type_script_setup_true_lang-BU4iGF6z.js";import{_ as pt}from"./diagnosisEdit.vue_vue_type_script_setup_true_lang-DD_wDPG-.js";import{_ as ft}from"./diagnosisDelete.vue_vue_type_script_setup_true_lang-VEQirVWG.js";import"./helpers.segment-Dc4JXg8Y.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./diagnosis-C12lJr_m.js";const bt={class:"container-fluid"},mt={key:0},gt={key:0,class:"card card-title"},kt={class:"bi-check-circle-fill text-success"},Ct={key:1,class:"card card-title"},yt={class:"card card-search"},xt={class:"row row-search"},wt=t("i",{class:"bi-person-fill-add"},null,-1),Dt=[wt],zt=t("label",{class:"form-check-label",for:"switDiagnosisPatient"},null,-1),Mt={class:"col-auto"},Vt={class:"row m-2"},Ft={class:"col-auto"},St=t("i",{class:"bi-search"},null,-1),Lt={class:"row"},At=t("div",{class:"col-auto"},[t("button",{type:"submit",class:"btn-form"},"Search")],-1),Pt={class:"col-auto"},Et={key:1,disabled:"",type:"button",class:"btn-form"},Rt={class:"col-auto mt-1"},$t=t("i",{class:"bi-search"},null,-1),Nt=t("i",{class:"bi-printer"},null,-1),Ot=[Nt],Bt={class:"scale-table"},It={class:"table table-hover text-center"},Tt=t("i",{class:"bi-filter"},null,-1),jt=t("i",{class:"bi-filter"},null,-1),Kt=t("i",{class:"bi-filter"},null,-1),Ut=t("i",{class:"bi-filter"},null,-1),Gt=t("i",{class:"bi-filter"},null,-1),Ht=t("i",{class:"bi-filter"},null,-1),Jt=t("i",{class:"bi-filter"},null,-1),Qt=t("th",null,[t("button",{class:"btn btn-sm th-font-size"},"Action")],-1),Wt={class:"color-td"},Xt={class:"color-td"},Yt={class:"color-td"},Zt={class:"color-td"},qt={class:"color-td"},te={class:"color-td"},ee={class:"color-td"},se={class:"colorBarra"},oe=t("i",{class:"bi-card-checklist"},null,-1),le=["onClick"],ne=t("i",{class:"bi-pencil-fill"},null,-1),ie=[ne],ae=["onClick"],ce=t("i",{class:"bi-trash-fill"},null,-1),re=[ce],ue={key:0,class:"text-success"},de={key:1,class:"text-danger"},_e={key:0,class:"pagination justify-content-center"},ve=t("li",{class:"page-item disabled"},[t("button",{class:"page-link size"},"Pages")],-1),he=t("button",{type:"button",class:"page-link size"},"First",-1),pe=[he],fe=t("button",{type:"button",class:"page-link size"},"First",-1),be=[fe],me=t("button",{class:"page-link size",type:"button"},[t("i",{class:"bi-chevron-left"})],-1),ge=[me],ke=t("button",{type:"button",class:"page-link size"},[t("i",{class:"bi-chevron-left"})],-1),Ce=[ke],ye=["onClick"],xe={key:0,type:"button",class:"page-link size"},we={key:0,type:"button",class:"page-link size"},De=t("i",{class:"bi-chevron-right"},null,-1),ze=[De],Me=t("button",{type:"button",class:"page-link size"},[t("i",{class:"bi-chevron-right"})],-1),Ve=[Me],Fe=t("button",{type:"button",class:"page-link size"},"Last",-1),Se=[Fe],Le=t("button",{type:"button",class:"page-link size"},"Last",-1),Ae=[Le],Pe={class:"page-item disabled"},Ee={class:"page-link size"},Ge=nt({__name:"diagnosisPatientDetail",props:{title:{type:String,default:"Detalles"}},setup(Re){const D=ct();it(async()=>{if(D.params.name!==void 0){const o=await _t();if((o==null?void 0:o.statusText)=="OK"){console.log(D.params.name);let l=await(o==null?void 0:o.data.results.filter(e=>e.patient===D.params.name));h.values=l}console.log(h),f(r.value),S()}});const h=$([]),r=_(1),b=_(3),C=_(!0),y=_(!0);let u=$([]);const p=_(""),z=_(!1),M=_(!1),V=_(!1);let x=_(0);const g=_(""),k=_(""),a=_(!1),K=()=>{z.value=!0},U=()=>{z.value=!1},G=o=>{console.log(o),x.value=o,M.value=!0},H=()=>{M.value=!1},J=o=>{console.log(o),x.value=o,V.value=!0},Q=()=>{V.value=!1},S=async()=>{let o=await document.getElementsByClassName("color-td");for(let l=0;l<o.length;l++){const e=o[l];(e.textContent==="Saludable"||e.textContent==="Normal")&&e.setAttribute("style","color:#4CAF50;"),(e.textContent==="Riesgo inicial"||e.textContent==="Riesgo final"||e.textContent==="Bajo"||e.textContent==="Alto"||e.textContent==="Severo")&&e.setAttribute("style","color:#FF9800;"),(e.textContent==="Peligro inicial"||e.textContent==="Peligro final"||e.textContent==="Muy alto")&&e.setAttribute("style","color:#FF5722;"),(e.textContent==="Leve"||e.textContent==="Moderado")&&e.setAttribute("style","color:#CDDC39;"),(e.textContent==="Leve"||e.textContent==="Moderado")&&e.setAttribute("style","color:#CDDC39;")}console.log(typeof o[6].textContent)},W=()=>{window.print()},X=()=>{const o=(s,n)=>s.diagnosis_id-n.diagnosis_id,l=(s,n)=>n.diagnosis_id-s.diagnosis_id,e=u.values;return a.value?(a.value=!1,e.sort(o)):(a.value=!0,console.log(a),e.sort(l))},Y=()=>{const o=(s,n)=>s.test.localeCompare(n.test),l=(s,n)=>n.test.localeCompare(s.test),e=u.values;return a.value?(a.value=!1,e.sort(o)):(a.value=!0,e.sort(l))},Z=()=>{const o=(s,n)=>parseFloat(s.result)-parseFloat(n.result),l=(s,n)=>parseFloat(n.result)-parseFloat(s.result),e=u.values;return a.value?(a.value=!1,e.sort(o)):(a.value=!0,console.log(a),e.sort(l))},q=()=>{const o=(s,n)=>s.pi-n.pi,l=(s,n)=>n.pi-s.pi,e=u.values;return a.value?(a.value=!1,e.sort(o)):(a.value=!0,console.log(a),e.sort(l))},tt=()=>{const o=(s,n)=>s.ideal-n.ideal,l=(s,n)=>n.ideal-s.ideal,e=u.values;return a.value?(a.value=!1,e.sort(o)):(a.value=!0,console.log(a),e.sort(l))},et=()=>{const o=(s,n)=>s.pf-n.pf,l=(s,n)=>n.pf-s.pf,e=u.values;return a.value?(a.value=!1,e.sort(o)):(a.value=!0,console.log(a),e.sort(l))},st=()=>{const o=(s,n)=>s.interpretation.localeCompare(n.interpretation),l=(s,n)=>n.interpretation.localeCompare(s.interpretation),e=u.values;return a.value?(a.value=!1,e.sort(o)):(a.value=!0,e.sort(l))},L=()=>{if(p.value.length==0)f(1);else{const o=l=>h.values.filter(s=>s.diagnosis_id!==null&&s.diagnosis_id!==void 0&&s.diagnosis_id.toString().indexOf(l)>-1||s.patient!==null&&s.patient!==void 0&&s.patient.toLowerCase().indexOf(l.toLowerCase())>-1||s.test!==null&&s.test!==void 0&&s.test.toLowerCase().indexOf(l.toLowerCase())>-1||s.result!==null&&s.result!==void 0&&s.result.toString().indexOf(l)>-1||s.pi!==null&&s.pi!==void 0&&s.pi.toString().indexOf(l)>-1||s.ideal!==null&&s.ideal!==void 0&&s.ideal.toString().indexOf(l)>-1||s.pf!==null&&s.pf!==void 0&&s.pf.toString().indexOf(l)>-1||s.interpretation!==null&&s.interpretation!==void 0&&s.interpretation.toLowerCase().indexOf(l.toLowerCase())>-1);if(o(p.value).length>0)u.values=o(p.value),C.value=!1,k.value=u.values.length+" records found",g.value="";else{let l=[];u.values=l.values,C.value=!1,k.value="",g.value="No records found"}}},ot=()=>{y.value==!0?y.value=!1:y.value=!0},lt=o=>o==r.value?"active":"",m=()=>Math.ceil(h.values.length/b.value),f=async o=>{let l=[];if(u.values=l.values,p.value="",g.value="",k.value="",C.value=!0,r.value=o,u.values.length>0){let e=o*b.value-b.value,s=o*b.value;u.slice(e,s)}else{let e=o*b.value-b.value,s=o*b.value,n=h.values;u.values=n.slice(e,s)}},A=()=>{r.value>1&&r.value--,f(1)},P=()=>{r.value>1&&r.value--,f(r.value)},E=()=>{r.value<m()&&r.value++,f(r.value)},R=()=>{r.value<m()&&r.value++,f(m())};return(o,l)=>(i(),c("div",bt,[o.$route.params.name!==void 0?(i(),c("div",mt,[h.values.length===13?(i(),c("div",gt,[t("i",kt,d(o.$route.params.name+": ")+"Test Completo",1)])):(i(),c("div",Ct,d(o.$route.params.name+`(${h.values.length} de 13)`),1)),t("div",yt,[t("div",xt,[t("a",{onClick:K,type:"button",class:"col-1 icon-add",title:"Create diagnosis"},Dt),t("div",{class:"col-auto"},[t("div",{class:"form-switch form-check",title:"Clasic mode"},[zt,t("input",{onClick:ot,type:"checkbox",name:"inputNameSwitch",class:"form-check-input myCheck",id:"switDiagnosisPatient"})])]),t("div",Mt,[y.value==!0?(i(),c("form",{key:0,onKeyup:L},[t("div",Vt,[t("div",Ft,[St,N(t("input",{"onUpdate:modelValue":l[0]||(l[0]=e=>p.value=e),type:"search",id:"inputMode1",name:"inputMode1",class:"form-control form-control-sm search"},null,512),[[O,p.value]])])])],32)):(i(),c("form",{key:1,onSubmit:at(L,["prevent"])},[t("div",Lt,[At,t("div",Pt,[k.value.length>0||g.value.length>0?(i(),c("button",{key:0,onClick:l[1]||(l[1]=e=>f(1)),type:"button",class:"btn-form cancel"}," Exit ")):(i(),c("button",Et,"Exit"))]),t("div",Rt,[$t,N(t("input",{"onUpdate:modelValue":l[2]||(l[2]=e=>p.value=e),id:"inputMode2",name:"inputMode2",class:"form-control form-control-sm search",type:"search"},null,512),[[O,p.value]])])])],32))]),t("div",{class:"col-auto icon-print",title:"Print"},[t("a",{onClick:W,type:"button"},Ot)])])]),t("div",Bt,[t("table",It,[t("thead",null,[t("tr",{class:"thead-tr"},[t("th",null,[Tt,t("button",{onClick:X,class:"btn btn-sm th-font-size"},"Id")]),t("th",null,[jt,t("button",{onClick:Y,class:"btn btn-sm th-font-size"},"Test")]),t("th",null,[Kt,t("button",{onClick:Z,class:"btn btn-sm th-font-size"},"Result")]),t("th",null,[Ut,t("button",{onClick:q,class:"btn btn-sm th-font-size"},"Ri")]),t("th",null,[Gt,t("button",{onClick:tt,class:"btn btn-sm th-font-size"},"Ideal")]),t("th",null,[Ht,t("button",{onClick:et,class:"btn btn-sm th-font-size"},"Rf")]),t("th",null,[Jt,t("button",{onClick:st,class:"btn btn-sm th-font-size"}," Interpretation ")]),Qt])]),t("tbody",null,[(i(!0),c(B,null,I(w(u).values,e=>(i(),c("tr",{key:e.diagnosis_id,class:"tbody-tr"},[t("td",Wt,d(e.diagnosis_id),1),t("td",Xt,d(e.test),1),t("td",Yt,d(e.result),1),t("td",Zt,d(e.pi),1),t("td",qt,d(e.ideal),1),t("td",te,d(e.pf),1),t("td",ee,d(e.interpretation),1),t("td",se,[T(w(ut),{to:"/diagnosis/detail/"+e.diagnosis_id,class:"btn btn-outline-info btn-sm",title:"Detail"},{default:rt(()=>[oe]),_:2},1032,["to"]),j(" | "),t("button",{onClick:s=>G(e.diagnosis_id),class:"btn btn-outline-warning btn-sm",title:"Edit"},ie,8,le),j(" | "),t("button",{onClick:s=>J(e.diagnosis_id),class:"btn btn-outline-danger btn-sm",title:"Delete"},re,8,ae)])]))),128))]),k.value.length>0?(i(),c("small",ue,d(k.value),1)):v("",!0),g.value.length>0?(i(),c("small",de,d(g.value),1)):v("",!0)])]),t("nav",{onClick:S,"aria-label":"Page navigation"},[C.value?(i(),c("ul",_e,[ve,r.value>=2?(i(),c("li",{key:0,onClick:A,class:"page-item"},pe)):(i(),c("li",{key:1,onClick:A,class:"page-item disabled"},be)),r.value>=2?(i(),c("li",{key:2,onClick:P,class:"page-item"},ge)):(i(),c("li",{key:3,onClick:P,class:"page-item disabled"},Ce)),(i(!0),c(B,null,I(m(),e=>(i(),c("li",{key:e,onClick:s=>f(e),class:dt(["page-item",lt(e)])},[r.value-1<e&&e<r.value+3?(i(),c("button",xe,d(e),1)):v("",!0)],10,ye))),128)),r.value<m()?(i(),c("li",{key:4,onClick:E,class:"page-item"},[r.value<m()?(i(),c("button",we,ze)):v("",!0)])):(i(),c("li",{key:5,onClick:E,class:"page-item disabled"},Ve)),r.value<m()?(i(),c("li",{key:6,onClick:R,class:"page-item"},Se)):(i(),c("li",{key:7,onClick:R,class:"page-item disabled"},Ae)),t("li",Pe,[t("button",Ee,"Total: "+d(h.values.length),1)])])):v("",!0)]),T(vt)])):v("",!0),z.value?(i(),F(ht,{key:1,"close-form-add":U})):v("",!0),M.value?(i(),F(pt,{key:2,"close-form-edit":H,"edit-id":w(x)},null,8,["edit-id"])):v("",!0),V.value?(i(),F(ft,{key:3,"close-form-delete":Q,"delete-id":w(x)},null,8,["delete-id"])):v("",!0)]))}});export{Ge as default};