import{d as H,o as J,r as P,a as h,b as i,e as c,f as t,t as _,w as E,v as N,g as Q,F as R,h as A,u as V,i as $,j as S,k as F,l as I,R as L,m as ot,n as nt,p as at}from"./index-CCETXx4L.js";import{g as W}from"./diagnosis-Ca66f_EQ.js";import it from"./diagnosisCreate-CmTMH-23.js";import"./diagnosis-OtAIOZ42.js";import"./helpers.segment-Dc4JXg8Y.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const ct={class:"container-fluid"},ut={class:"card card-title"},rt={class:"card card-search"},dt={class:"row row-search"},vt=t("label",{class:"form-check-label",for:"switDiagnosisPatient"},null,-1),_t={class:"col-auto"},ht={class:"row m-2"},pt={class:"col-auto"},ft=t("i",{class:"bi-search"},null,-1),bt={class:"row"},mt=t("div",{class:"col-auto"},[t("button",{type:"submit",class:"btn-form"},"Search")],-1),gt={class:"col-auto"},kt={key:1,disabled:"",type:"button",class:"btn-form"},yt={class:"col-auto mt-1"},Ct=t("i",{class:"bi-search"},null,-1),xt=t("div",{class:"col-auto icon-print",title:"Print"},[t("a",{type:"button"},[t("i",{class:"bi-printer"})])],-1),wt={class:"scale-table"},Dt={class:"table table-hover text-center"},$t=t("thead",null,[t("tr",{class:"thead-tr"},[t("th")])],-1),zt={key:0,class:"text-success"},Vt={key:1,class:"text-danger"},Mt=H({__name:"diagnosisPatientList",props:{title:{type:String,default:"Pacientes"}},setup(T){J(async()=>{const v=await W();(v==null?void 0:v.statusText)=="OK"&&(console.log(v.data.patients),b.values=v.data.patients),console.log(b.values),b.length>0&&M(r.value)});const b=P([]),r=h(1),m=h(),x=h(!0),y=h(!0);let u=P([]);const d=h(""),k=h(""),g=h(""),w=()=>{y.value==!0?y.value=!1:y.value=!0},a=()=>{if(console.log(b.values),b.values.length>0)if(d.value.length==0&&b.values.length>0)M(1);else{const v=p=>b.values.filter(C=>C.patient!==null&&C.patient!==void 0&&C.patient.toLowerCase().indexOf(p.toLowerCase())>-1);if(v(d.value).length>0)u.values=v(d.value),x.value=!1,g.value=u.values.length+" records found",k.value="";else{let p=[];u.values=p.values,x.value=!1,g.value="",k.value="No records found"}}},M=async v=>{let p=[];if(u.values=p.values,d.value="",k.value="",g.value="",x.value=!0,r.value=v,u.values.length>0){let f=v*m.value-m.value,C=v*m.value;u.slice(f,C)}else{let f=v*m.value-m.value,C=v*m.value,O=b.values;u.values=O.slice(f,C)}};return(v,p)=>(i(),c("div",ct,[t("div",ut,_(T.title),1),t("div",null,[t("div",rt,[t("div",dt,[t("div",{class:"col-auto"},[t("div",{class:"form-switch form-check",title:"Clasic mode"},[vt,t("input",{onClick:w,type:"checkbox",name:"inputNameSwitch",class:"form-check-input myCheck",id:"switDiagnosisPatient"})])]),t("div",_t,[y.value==!0?(i(),c("form",{key:0,onKeyup:a},[t("div",ht,[t("div",pt,[ft,E(t("input",{"onUpdate:modelValue":p[0]||(p[0]=f=>d.value=f),type:"search",id:"inputMode1",name:"inputMode1",class:"form-control form-control-sm search"},null,512),[[N,d.value]])])])],32)):(i(),c("form",{key:1,onSubmit:Q(a,["prevent"])},[t("div",bt,[mt,t("div",gt,[g.value.length>0||k.value.length>0?(i(),c("button",{key:0,onClick:p[1]||(p[1]=f=>M(1)),type:"button",class:"btn-form cancel"}," Exit ")):(i(),c("button",kt,"Exit"))]),t("div",yt,[Ct,E(t("input",{"onUpdate:modelValue":p[2]||(p[2]=f=>d.value=f),id:"inputMode2",name:"inputMode2",class:"form-control form-control-sm search",type:"search"},null,512),[[N,d.value]])])])],32))]),xt])]),t("div",wt,[t("table",Dt,[$t,t("tbody",null,[(i(!0),c(R,null,A(V(u).values,f=>(i(),c("tr",{key:f.diagnosis_id,class:"tbody-tr"},[t("td",null,[S(V(L),{class:"td-decoration",to:"/diagnosis/"+f.patient,title:"Detail"},{default:F(()=>[I(_(f.patient),1)]),_:2},1032,["to"])])]))),128))]),g.value.length>0?(i(),c("small",zt,_(g.value),1)):$("",!0),k.value.length>0?(i(),c("small",Vt,_(k.value),1)):$("",!0)])])])]))}}),St={class:"container-fluid"},Ft=t("div",{class:"card card-title"}," Diagnosis ",-1),Lt={class:"card card-search"},Pt={class:"row row-search"},Et=t("i",{class:"bi-person-fill-add"},null,-1),Nt=[Et],Ot=t("label",{class:"form-check-label",for:"switDiagnosisPatient"},null,-1),Rt={class:"col-auto"},At={class:"row m-2"},It={class:"col-auto"},Tt=t("i",{class:"bi-search"},null,-1),Bt={class:"row"},Kt=t("div",{class:"col-auto"},[t("button",{type:"submit",class:"btn-form"},"Search")],-1),Ut={class:"col-auto"},jt={key:1,disabled:"",type:"button",class:"btn-form"},Gt={class:"col-auto mt-1"},Ht=t("i",{class:"bi-search"},null,-1),Jt=t("i",{class:"bi-printer"},null,-1),Qt=[Jt],Wt={class:"scale-table"},Xt={class:"table table-hover text-center"},Yt=t("i",{class:"bi-filter"},null,-1),Zt=t("i",{class:"bi-filter"},null,-1),qt=t("i",{class:"bi-filter"},null,-1),te=t("i",{class:"bi-filter"},null,-1),ee=t("i",{class:"bi-filter"},null,-1),se=t("i",{class:"bi-filter"},null,-1),le=t("i",{class:"bi-filter"},null,-1),oe=t("i",{class:"bi-filter"},null,-1),ne=t("th",null,[t("button",{class:"btn btn-sm th-font-size"},"Action")],-1),ae={class:"color-td"},ie={class:"color-td"},ce={class:"color-td"},ue={class:"color-td"},re={class:"color-td"},de={class:"color-td"},ve={class:"color-td"},_e={class:"color-td"},he=t("i",{class:"bi-card-checklist size-checklist"},null,-1),pe=t("i",{class:"bi-pencil-fill size-pencil"},null,-1),fe=t("i",{class:"bi-trash-fill size-trash"},null,-1),be={key:0,class:"text-success"},me={key:1,class:"text-danger"},ge={key:0,class:"pagination justify-content-center"},ke=t("li",{class:"page-item disabled"},[t("button",{class:"page-link size"},"Pages")],-1),ye=t("button",{type:"button",class:"page-link size"},"First",-1),Ce=[ye],xe=t("button",{type:"button",class:"page-link size"},"First",-1),we=[xe],De=t("button",{class:"page-link size",type:"button"},[t("i",{class:"bi-chevron-left"})],-1),$e=[De],ze=t("button",{type:"button",class:"page-link size"},[t("i",{class:"bi-chevron-left"})],-1),Ve=[ze],Me=["onClick"],Se={key:0,type:"button",class:"page-link size"},Fe={key:0,type:"button",class:"page-link size"},Le=t("i",{class:"bi-chevron-right"},null,-1),Pe=[Le],Ee=t("button",{type:"button",class:"page-link size"},[t("i",{class:"bi-chevron-right"})],-1),Ne=[Ee],Oe=t("button",{type:"button",class:"page-link size"},"Last",-1),Re=[Oe],Ae=t("button",{type:"button",class:"page-link size"},"Last",-1),Ie=[Ae],Te={class:"page-item disabled"},Be={class:"page-link size"},Qe=H({__name:"diagnosisList",props:{title:{type:String,default:"Detalles"}},setup(T){nt(),J(async()=>{const l=await W();(l==null?void 0:l.statusText)=="OK"&&(b.values=l==null?void 0:l.data.results,console.log(l==null?void 0:l.data.results)),D(r.value),p()});const b=P([]),r=h(1),m=h(3),x=h(!0),y=h(!0);let u=P([]);const d=h(""),k=h(!1),g=h(""),w=h(""),a=h(!1),M=()=>{k.value=!0},v=()=>{k.value=!1},p=async()=>{let l=await document.getElementsByClassName("color-td");for(let o=0;o<l.length;o++){const e=l[o];(e.textContent==="Saludable"||e.textContent==="Normal")&&e.setAttribute("style","background-color: #4CAF50; color:white;"),(e.textContent==="Riesgo inicial"||e.textContent==="Riesgo final"||e.textContent==="Bajo"||e.textContent==="Alto"||e.textContent==="Severo")&&e.setAttribute("style","background-color: #FF9800; color:white;"),(e.textContent==="Peligro inicial"||e.textContent==="Peligro final"||e.textContent==="Muy alto")&&e.setAttribute("style","background-color: #FF5722; color:white;"),(e.textContent==="Leve"||e.textContent==="Moderado")&&e.setAttribute("style","background-color: #CDDC39 ; color:white;"),(e.textContent==="Leve"||e.textContent==="Moderado")&&e.setAttribute("style","background-color: #CDDC39 ; color:white;")}console.log(typeof l[6].textContent)},f=()=>{window.print()},C=()=>{const l=(s,n)=>s.diagnosis_id-n.diagnosis_id,o=(s,n)=>n.diagnosis_id-s.diagnosis_id,e=u.values;return a.value?(a.value=!1,e.sort(l)):(a.value=!0,console.log(a),e.sort(o))},O=()=>{const l=(s,n)=>s.patient.localeCompare(n.patient),o=(s,n)=>n.patient.localeCompare(s.patient),e=u.values;return a.value?(a.value=!1,e.sort(l)):(a.value=!0,e.sort(o))},X=()=>{const l=(s,n)=>s.test.localeCompare(n.test),o=(s,n)=>n.test.localeCompare(s.test),e=u.values;return a.value?(a.value=!1,e.sort(l)):(a.value=!0,e.sort(o))},Y=()=>{const l=(s,n)=>parseFloat(s.result)-parseFloat(n.result),o=(s,n)=>parseFloat(n.result)-parseFloat(s.result),e=u.values;return a.value?(a.value=!1,e.sort(l)):(a.value=!0,console.log(a),e.sort(o))},Z=()=>{const l=(s,n)=>s.pi-n.pi,o=(s,n)=>n.pi-s.pi,e=u.values;return a.value?(a.value=!1,e.sort(l)):(a.value=!0,console.log(a),e.sort(o))},q=()=>{const l=(s,n)=>s.ideal-n.ideal,o=(s,n)=>n.ideal-s.ideal,e=u.values;return a.value?(a.value=!1,e.sort(l)):(a.value=!0,console.log(a),e.sort(o))},tt=()=>{const l=(s,n)=>s.pf-n.pf,o=(s,n)=>n.pf-s.pf,e=u.values;return a.value?(a.value=!1,e.sort(l)):(a.value=!0,console.log(a),e.sort(o))},et=()=>{const l=(s,n)=>s.interpretation.localeCompare(n.interpretation),o=(s,n)=>n.interpretation.localeCompare(s.interpretation),e=u.values;return a.value?(a.value=!1,e.sort(l)):(a.value=!0,e.sort(o))},B=()=>{if(d.value.length==0)D(1);else{const l=o=>b.values.filter(s=>s.diagnosis_id!==null&&s.diagnosis_id!==void 0&&s.diagnosis_id.toString().indexOf(o)>-1||s.patient!==null&&s.patient!==void 0&&s.patient.toLowerCase().indexOf(o.toLowerCase())>-1||s.test!==null&&s.test!==void 0&&s.test.toLowerCase().indexOf(o.toLowerCase())>-1||s.result!==null&&s.result!==void 0&&s.result.toString().indexOf(o)>-1||s.pi!==null&&s.pi!==void 0&&s.pi.toString().indexOf(o)>-1||s.ideal!==null&&s.ideal!==void 0&&s.ideal.toString().indexOf(o)>-1||s.pf!==null&&s.pf!==void 0&&s.pf.toString().indexOf(o)>-1||s.interpretation!==null&&s.interpretation!==void 0&&s.interpretation.toLowerCase().indexOf(o.toLowerCase())>-1);if(l(d.value).length>0)u.values=l(d.value),x.value=!1,w.value=u.values.length+" records found",g.value="";else{let o=[];u.values=o.values,x.value=!1,w.value="",g.value="No records found"}}},st=()=>{y.value==!0?y.value=!1:y.value=!0},lt=l=>l==r.value?"active":"",z=()=>Math.ceil(b.values.length/m.value),D=async l=>{let o=[];if(u.values=o.values,d.value="",g.value="",w.value="",x.value=!0,r.value=l,u.values.length>0){let e=l*m.value-m.value,s=l*m.value;u.slice(e,s)}else{let e=l*m.value-m.value,s=l*m.value,n=b.values;u.values=n.slice(e,s)}},K=()=>{r.value>1&&r.value--,D(1)},U=()=>{r.value>1&&r.value--,D(r.value)},j=()=>{r.value<z()&&r.value++,D(r.value)},G=()=>{r.value<z()&&r.value++,D(z())};return(l,o)=>(i(),c("div",St,[S(Mt),t("div",null,[Ft,t("div",Lt,[t("div",Pt,[t("a",{onClick:M,type:"button",class:"col-1 icon-add",title:"Create diagnosis"},Nt),t("div",{class:"col-auto"},[t("div",{class:"form-switch form-check",title:"Clasic mode"},[Ot,t("input",{onClick:st,type:"checkbox",name:"inputNameSwitch",class:"form-check-input myCheck",id:"switDiagnosisPatient"})])]),t("div",Rt,[y.value==!0?(i(),c("form",{key:0,onKeyup:B},[t("div",At,[t("div",It,[Tt,E(t("input",{"onUpdate:modelValue":o[0]||(o[0]=e=>d.value=e),type:"search",id:"inputMode1",name:"inputMode1",class:"form-control form-control-sm search"},null,512),[[N,d.value]])])])],32)):(i(),c("form",{key:1,onSubmit:Q(B,["prevent"])},[t("div",Bt,[Kt,t("div",Ut,[w.value.length>0||g.value.length>0?(i(),c("button",{key:0,onClick:o[1]||(o[1]=e=>D(1)),type:"button",class:"btn-form cancel"}," Exit ")):(i(),c("button",jt,"Exit"))]),t("div",Gt,[Ht,E(t("input",{"onUpdate:modelValue":o[2]||(o[2]=e=>d.value=e),id:"inputMode2",name:"inputMode2",class:"form-control form-control-sm search",type:"search"},null,512),[[N,d.value]])])])],32))]),t("div",{class:"col-auto icon-print",title:"Print"},[t("a",{onClick:f,type:"button"},Qt)])])]),t("div",Wt,[t("table",Xt,[t("thead",null,[t("tr",{class:"thead-tr"},[t("th",null,[Yt,t("button",{onClick:C,class:"btn btn-sm th-font-size"},"Id")]),t("th",null,[Zt,t("button",{onClick:O,class:"btn btn-sm th-font-size"}," FullName ")]),t("th",null,[qt,t("button",{onClick:X,class:"btn btn-sm th-font-size"},"Test")]),t("th",null,[te,t("button",{onClick:Y,class:"btn btn-sm th-font-size"},"Result")]),t("th",null,[ee,t("button",{onClick:Z,class:"btn btn-sm th-font-size"},"Ri")]),t("th",null,[se,t("button",{onClick:q,class:"btn btn-sm th-font-size"},"Ideal")]),t("th",null,[le,t("button",{onClick:tt,class:"btn btn-sm th-font-size"},"Rf")]),t("th",null,[oe,t("button",{onClick:et,class:"btn btn-sm th-font-size"}," Interpretation ")]),ne])]),t("tbody",null,[(i(!0),c(R,null,A(V(u).values,e=>(i(),c("tr",{key:e.diagnosis_id,class:"tbody-tr"},[t("td",ae,_(e.diagnosis_id),1),t("td",ie,_(e.patient),1),t("td",ce,_(e.test),1),t("td",ue,_(e.result),1),t("td",re,_(e.pi),1),t("td",de,_(e.ideal),1),t("td",ve,_(e.pf),1),t("td",_e,_(e.interpretation),1),t("td",null,[S(V(L),{to:"/diagnosis/detail/"+e.diagnosis_id,title:"Detail"},{default:F(()=>[he]),_:2},1032,["to"]),I(" | "),S(V(L),{to:"/diagnosis/edit/"+e.diagnosis_id,title:"Edit"},{default:F(()=>[pe]),_:2},1032,["to"]),I(" | "),S(V(L),{to:"/diagnosis/delete/"+e.diagnosis_id,title:"Delete"},{default:F(()=>[fe]),_:2},1032,["to"])])]))),128))]),w.value.length>0?(i(),c("small",be,_(w.value),1)):$("",!0),g.value.length>0?(i(),c("small",me,_(g.value),1)):$("",!0)])]),t("nav",{onClick:p,"aria-label":"Page navigation"},[x.value?(i(),c("ul",ge,[ke,r.value>=2?(i(),c("li",{key:0,onClick:K,class:"page-item"},Ce)):(i(),c("li",{key:1,onClick:K,class:"page-item disabled"},we)),r.value>=2?(i(),c("li",{key:2,onClick:U,class:"page-item"},$e)):(i(),c("li",{key:3,onClick:U,class:"page-item disabled"},Ve)),(i(!0),c(R,null,A(z(),e=>(i(),c("li",{key:e,onClick:s=>D(e),class:at(["page-item",lt(e)])},[r.value-1<e&&e<r.value+3?(i(),c("button",Se,_(e),1)):$("",!0)],10,Me))),128)),r.value<z()?(i(),c("li",{key:4,onClick:j,class:"page-item"},[r.value<z()?(i(),c("button",Fe,Pe)):$("",!0)])):(i(),c("li",{key:5,onClick:j,class:"page-item disabled"},Ne)),r.value<z()?(i(),c("li",{key:6,onClick:G,class:"page-item"},Re)):(i(),c("li",{key:7,onClick:G,class:"page-item disabled"},Ie)),t("li",Te,[t("button",Be,"Total: "+_(b.values.length),1)])])):$("",!0)])]),k.value?(i(),ot(it,{key:0,"close-form-create":v})):$("",!0)]))}});export{Qe as default};