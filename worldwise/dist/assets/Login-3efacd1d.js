import{u,a as p,r as t,j as s,B as x}from"./index-141e93bb.js";import{P as h}from"./PageNav-9cd80263.js";import"./Logo-4388082a.js";const f="_login_1mydq_1",g="_form_1mydq_8",j="_row_1mydq_22",a={login:f,form:g,row:j};function _(){const{isAuthenticated:o,login:l}=u(),r=p(),[i,m]=t.useState("jack@example.com"),[n,c]=t.useState("qwerty");t.useEffect(()=>{o&&r("/app",{replace:!0})},[o,r]);function d(e){e.preventDefault(),l(i,n)}return s.jsxs("main",{className:a.login,children:[s.jsx(h,{}),s.jsxs("form",{className:a.form,onSubmit:d,children:[s.jsxs("div",{className:a.row,children:[s.jsx("label",{htmlFor:"email",children:"Email address"}),s.jsx("input",{type:"email",id:"email",onChange:e=>m(e.target.value),value:i})]}),s.jsxs("div",{className:a.row,children:[s.jsx("label",{htmlFor:"password",children:"Password"}),s.jsx("input",{type:"password",id:"password",onChange:e=>c(e.target.value),value:n})]}),s.jsx("div",{children:s.jsx(x,{type:"primary",children:"Login"})})]})]})}export{_ as default};
