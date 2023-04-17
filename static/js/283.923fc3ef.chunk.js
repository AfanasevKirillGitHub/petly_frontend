"use strict";(self.webpackChunkpetly_frontend=self.webpackChunkpetly_frontend||[]).push([[283],{4515:function(n,i,e){e.d(i,{G:function(){return d}});var t=e(1413),r=e(9439),o=e(2791),d=function(n,i){var e=(0,o.useState)(n),d=(0,r.Z)(e,2),p=d[0],a=d[1],x=(0,o.useState)(!1),h=(0,r.Z)(x,2),g=h[0],l=h[1],s=function(n,i){var e=(0,o.useState)(!1),t=(0,r.Z)(e,2),d=t[0],p=t[1],a=(0,o.useState)(!1),x=(0,r.Z)(a,2),h=x[0],g=x[1],l=(0,o.useState)(!1),s=(0,r.Z)(l,2),m=s[0],c=s[1];return(0,o.useEffect)((function(){for(var e in i)switch(e){case"minLength":n.length<i[e]?p(!0):p(!1);break;case"isEmail":/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(n).toLowerCase())?g(!1):g(!0);break;case"isSamePassword":n===i[e]&&""!==n?c(!0):c(!1);break;default:console.log("\u043d\u0435\u0442 \u0442\u0430\u043a\u043e\u0439 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438")}}),[n,i]),{minLengthError:d,emailError:h,confirmError:m}}(p,i);return(0,o.useEffect)((function(){l(""!==p)}),[p]),(0,t.Z)({value:p,onChange:function(n){a(n.target.value)},isDirty:g},s)}},9283:function(n,i,e){e.r(i),e.d(i,{RegisterPage:function(){return K}});var t,r,o,d,p,a,x,h,g,l,s,m,c,u,f,b,w=e(9439),y=e(9230),v=e(1087),Z=e(168),j=e(82),E=j.ZP.input(t||(t=(0,Z.Z)(["\nborder-radius: 40px;\nborder: 1px solid rgba(245, 146, 86, 0.5);\nbackground-color: rgba(253, 247, 242, 1);\noutline: none;\n\n\n\n@media (max-width: 767px) {\n    padding-top: 11px;\n    padding-right: 14px;\n    padding-bottom: 12px;\n    padding-left: 14px;\n    height: 40px;\n    width: 280px;\n    font-weight: 400;\n    font-size: 14px;  \n    line-height: 1.35;  \n    // margin-bottom: 24px;\n}\n@media (min-width: 768px) {\n    padding-top: 14px;\n    padding-right: 32px;\n    padding-bottom: 13px;\n    padding-left: 32px;\n    height: 52;\n    width: 448px;\n    font-weight: 400;\n    font-size: 18px;  \n    line-height: 1.39;\n    // margin-bottom: 40px;\n}\n\n"]))),L=j.ZP.button(r||(r=(0,Z.Z)(["\nborder-radius: 40px;\nborder: 2px solid #F59256;\nbackground-color: #F59256;\ncolor: white;\ncursor: pointer;\n:disabled {\n    background-color: rgba(245,146,86,0.5);\n    border: none\n}\n\n@media (max-width: 767px) {\n    // padding-top: 11px;\n    // padding-right: 14px;\n    // padding-bottom: 12px;\n    // padding-left: 14px;\n    height: 44px;\n    width: 280px;\n    font-weight: 500;\n    font-size: 20px;  \n    line-height: 1.35;  \n    margin-bottom: 40px;\n    margin-top: 16px;\n\n};\n@media (min-width: 768px) {\n    // padding-top: 14px;\n    // padding-right: 32px;\n    // padding-bottom: 13px;\n    // padding-left: 32px;\n    height: 44px;\n    width: 458px;\n    font-weight: 500;\n    font-size: 20px;  \n    line-height: 1.35;\n    margin-bottom: 40px;\n};\n@media (min-width: 1280px) {\n    // padding-top: 14px;\n    // padding-right: 32px;\n    // padding-bottom: 13px;\n    // padding-left: 32px;\n    height: 48px;\n    // width: 458px;\n    // font-weight: 400;\n    // font-size: 18px;  \n    // line-height: 1.39;\n};\n"]))),D=j.ZP.div(o||(o=(0,Z.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);\n\n@media (max-width: 767px) {\n    width: 100%;\n    height: 100vh\n};\n@media (min-width: 768px) {\n    background-color: #FFF;\n    padding-top: 60px;\n    padding-right: 80px;\n    padding-bottom: 60px;\n    padding-left: 80px;\n    width: 608;\n    height: 583;\n    border-radius: 40px;\n}\n@media (min-width: 1280px) {\n    width: 618px;\n    // height: 587px;\n};\n\n"]))),P=(j.ZP.form(d||(d=(0,Z.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n"]))),j.ZP.h2(p||(p=(0,Z.Z)(["\n    margin-bottom: 40px;\n\n@media (max-width: 767px) {\n    font-weight: 700;\n    font-size: 24px;\n    line-height: 1.375;\n    \n};\n@media (min-width: 768px) {\n    font-weight: 500;\n    font-size: 36px;\n    line-height: 1.36;\n};\n\n"])))),C=j.ZP.div(a||(a=(0,Z.Z)(["\nposition: relative;\n@media (max-width: 767px) { \n    margin-bottom: 24px;\n};\n@media (min-width: 768px) { \n    margin-bottom: 40px;\n};\n"]))),z=j.ZP.span(x||(x=(0,Z.Z)(["\nposition: absolute;\nfont-size: 12px;\nleft: 20px;\nbottom: -40%;\n"]))),k=e(4515),F=e(3329),S=function(n){var i=n.onToggle,e=n.getData,t=(0,y.$G)().t,r=(0,k.G)("",{isEmail:!0}),o=(0,k.G)("",{minLength:6}),d=(0,k.G)("",{isSamePassword:o.value});return(0,F.jsxs)(D,{children:[(0,F.jsx)(P,{children:t("Registration")}),(0,F.jsxs)(C,{children:[(0,F.jsx)(E,{style:{border:r.isDirty&&!r.emailError?"1px solid green":r.isDirty&&r.emailError&&"1px solid red"},type:"email",value:r.value,onChange:function(n){return r.onChange(n)},name:"email",placeholder:t("Email"),required:!0}),r.isDirty&&r.emailError&&(0,F.jsx)(z,{style:{color:"red"},children:t("Enter a valid Email")})||r.isDirty&&!r.emailError&&(0,F.jsx)(z,{style:{color:"green"},children:t("Email is correct")})]}),(0,F.jsxs)(C,{children:[(0,F.jsx)(E,{style:{border:o.isDirty&&!o.minLengthError?"1px solid green":o.isDirty&&o.minLengthError&&"1px solid red"},type:"password",value:o.value,onChange:function(n){return o.onChange(n)},name:"password",placeholder:t("Password"),required:!0}),o.isDirty&&o.minLengthError&&(0,F.jsx)(z,{style:{color:"red"},children:t("Enter a valid Password")}),o.isDirty&&!o.minLengthError&&(0,F.jsx)(z,{style:{color:"green"},children:t("Password is correct")})]}),(0,F.jsxs)(C,{children:[(0,F.jsx)(E,{style:{border:d.isDirty&&o.value===d.value?"1px solid green":d.isDirty&&o.value!==d.value&&"1px solid red"},type:"password",value:d.value,onChange:function(n){return d.onChange(n)},name:"confirmPassword",placeholder:t("Confirm Password"),required:!0}),d.isDirty&&o.value===d.value&&(0,F.jsx)(z,{style:{color:"green"},children:t("confirmPassword is correct")}),d.isDirty&&o.value!==d.value&&(0,F.jsx)(z,{style:{color:"red"},children:t("confirmPassword is not correct")})]}),(0,F.jsx)(L,{disabled:!d.confirmError,type:"button",onClick:function(){e({email:r.value,password:o.value}),i()},children:t("Next")}),(0,F.jsxs)("p",{children:[t("Already have an account"),"?",(0,F.jsx)(v.OL,{to:"/login",children:t("Login")})]})]})},G=e(1413),q=e(5048),R=e(5322),T=j.ZP.input(h||(h=(0,Z.Z)(["\nborder-radius: 40px;\nborder: 1px solid rgba(245, 146, 86, 0.5);\nbackground-color: rgba(253, 247, 242, 1);\noutline: none;\n\n\n@media (max-width: 767px) {\n    padding-top: 11px;\n    padding-right: 14px;\n    padding-bottom: 12px;\n    padding-left: 14px;\n    height: 40px;\n    width: 280px;\n    font-weight: 400;\n    font-size: 14px;  \n    line-height: 1.35;  \n    // margin-bottom: 24px;\n}\n@media (min-width: 768px) {\n    padding-top: 14px;\n    padding-right: 32px;\n    padding-bottom: 13px;\n    padding-left: 32px;\n    height: 52;\n    width: 448px;\n    font-weight: 400;\n    font-size: 18px;  \n    line-height: 1.39;\n    // margin-bottom: 40px;\n}\n\n"]))),A=j.ZP.button(g||(g=(0,Z.Z)(["\nborder-radius: 40px;\nborder: 2px solid #F59256;\nbackground-color: #F59256;\ncolor: white;\ncursor: pointer;\n// margin-bottom:not(:last-child) : 12px\n:disabled {\n    background-color: rgba(245,146,86,0.5);\n    border: none\n}\n\n\n@media (max-width: 767px) {\n    // padding-top: 11px;\n    // padding-right: 14px;\n    // padding-bottom: 12px;\n    // padding-left: 14px;\n    height: 44px;\n    width: 280px;\n    font-weight: 500;\n    font-size: 20px;  \n    line-height: 1.35;  \n    margin-bottom: 12px;\n    margin-top: 16px;\n};\n@media (min-width: 768px) {\n    // padding-top: 14px;\n    // padding-right: 32px;\n    // padding-bottom: 13px;\n    // padding-left: 32px;\n    height: 44px;\n    width: 458px;\n    font-weight: 500;\n    font-size: 20px;  \n    line-height: 1.35;\n    margin-bottom: 16px;\n};\n@media (min-width: 1280px) {\n    // padding-top: 14px;\n    // padding-right: 32px;\n    // padding-bottom: 13px;\n    // padding-left: 32px;\n    height: 48px;\n    // width: 458px;\n    // font-weight: 400;\n    // font-size: 18px;  \n    // line-height: 1.39;\n};\n"]))),N=j.ZP.button(l||(l=(0,Z.Z)(["\nborder-radius: 40px;\nborder: 2px solid #F59256;\nbackground-color: #F59256;\ncolor: white;\ncursor: pointer;\n\n\n\n@media (max-width: 767px) {\n    // padding-top: 11px;\n    // padding-right: 14px;\n    // padding-bottom: 12px;\n    // padding-left: 14px;\n    height: 44px;\n    width: 280px;\n    font-weight: 500;\n    font-size: 20px;  \n    line-height: 1.35;  \n    margin-bottom: 40px;\n    margin-top: 16px;\n};\n@media (min-width: 768px) {\n    // padding-top: 14px;\n    // padding-right: 32px;\n    // padding-bottom: 13px;\n    // padding-left: 32px;\n    height: 44px;\n    width: 458px;\n    font-weight: 500;\n    font-size: 20px;  \n    line-height: 1.35;\n    margin-bottom: 40px;\n};\n@media (min-width: 1280px) {\n    // padding-top: 14px;\n    // padding-right: 32px;\n    // padding-bottom: 13px;\n    // padding-left: 32px;\n    height: 48px;\n    // width: 458px;\n    // font-weight: 400;\n    // font-size: 18px;  \n    // line-height: 1.39;\n};\n"]))),$=j.ZP.div(s||(s=(0,Z.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);\n\n@media (max-width: 767px) {\n    width: 100%;\n    height: 100vh\n};\n@media (min-width: 768px) {\n    background-color: #FFF;\n    padding-top: 60px;\n    padding-right: 80px;\n    padding-bottom: 60px;\n    padding-left: 80px;\n    width: 608px;\n    height: 643px;\n    border-radius: 40px;\n}\n@media (min-width: 1280px) {\n    width: 618px;\n    height: 667px;\n};\n\n"]))),O=j.ZP.form(m||(m=(0,Z.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n"]))),_=j.ZP.h2(c||(c=(0,Z.Z)(["\n    margin-bottom: 40px;\n\n@media (max-width: 767px) {\n    font-weight: 700;\n    font-size: 24px;\n    line-height: 1.375;\n    \n};\n@media (min-width: 768px) {\n    font-weight: 500;\n    font-size: 36px;\n    line-height: 1.36;\n};\n"]))),B=j.ZP.div(u||(u=(0,Z.Z)(["\nposition: relative;\n@media (max-width: 767px) { \n    margin-bottom: 24px;\n};\n@media (min-width: 768px) { \n    margin-bottom: 40px;\n};\n"]))),I=j.ZP.span(f||(f=(0,Z.Z)(["\nposition: absolute;\nfont-size: 12px;\nleft: 20px;\nbottom: -40%;\n"]))),M=function(n){var i=n.onToggle,e=n.dataForm1,t=(0,q.I0)(),r=(0,y.$G)().t,o=(0,k.G)("",{minLength:2}),d=(0,k.G)("",{minLength:3}),p=(0,k.G)("",{minLength:10});return(0,F.jsxs)($,{children:[(0,F.jsx)(_,{children:r("Registration")}),(0,F.jsxs)(O,{onSubmit:function(n){n.preventDefault();var i=n.currentTarget,r=(0,G.Z)((0,G.Z)({},e),{},{name:o.value,city:d.value,phone:p.value});t((0,R.y1)(r)),i.reset()},autoComplete:"off",children:[(0,F.jsxs)(B,{children:[(0,F.jsx)(T,{style:{border:o.isDirty&&!o.minLengthError?"1px solid green":o.isDirty&&o.minLengthError&&"1px solid red"},onChange:function(n){return o.onChange(n)},value:o.value,type:"text",name:"name",placeholder:r("Name"),required:!0}),o.isDirty&&o.minLengthError&&(0,F.jsx)(I,{style:{color:"red"},children:r("Enter your name pls")}),o.isDirty&&!o.minLengthError&&(0,F.jsx)(I,{style:{color:"green"},children:r("Name is valid")})]}),(0,F.jsxs)(B,{children:[(0,F.jsx)(T,{style:{border:d.isDirty&&!d.minLengthError?"1px solid green":d.isDirty&&d.minLengthError&&"1px solid red"},onChange:function(n){return d.onChange(n)},value:d.value,type:"text",name:"city",placeholder:r("City, Region"),required:!0}),d.isDirty&&d.minLengthError&&(0,F.jsx)(I,{style:{color:"red"},children:r("Enter your city pls")}),d.isDirty&&!d.minLengthError&&(0,F.jsx)(I,{style:{color:"green"},children:r("City is valid")})]}),(0,F.jsxs)(B,{children:[(0,F.jsx)(T,{style:{border:p.isDirty&&!p.minLengthError?"1px solid green":p.isDirty&&p.minLengthError&&"1px solid red"},onChange:function(n){return p.onChange(n)},value:p.value,type:"tel",name:"phone",placeholder:r("Mobile Phone"),required:!0}),p.isDirty&&p.minLengthError&&(0,F.jsx)(I,{style:{color:"red"},children:r("Enter your phone pls")}),p.isDirty&&!p.minLengthError&&(0,F.jsx)(I,{style:{color:"green"},children:r("Phone is valid")})]}),(0,F.jsx)(A,{disabled:o.minLengthError||d.minLengthError||p.minLengthError,type:"submit",children:r("Registration")}),(0,F.jsx)(N,{onClick:i,type:"button",children:r("Back")})]}),(0,F.jsxs)("p",{children:[r("Already have an account"),"?",(0,F.jsx)(v.OL,{to:"/login",children:r("Login")})]})]})},H=e(2791),J=j.ZP.main(b||(b=(0,Z.Z)(["\n    display: flex;\n    justify-content: center;\n\n    @media (min-width: 768px) {\n        padding-top: 200px;\n    }\n    @media (min-width: 1280px) {\n        padding-top: 80px;\n    };\n}\n\n"]))),K=function(){var n=(0,H.useState)(!0),i=(0,w.Z)(n,2),e=i[0],t=i[1],r=(0,H.useState)({}),o=(0,w.Z)(r,2),d=o[0],p=o[1],a=function(){t(!e)};return(0,F.jsx)(J,{children:e?(0,F.jsx)(S,{getData:function(n){p(n)},onToggle:a}):(0,F.jsx)(M,{dataForm1:d,onToggle:a})})}}}]);
//# sourceMappingURL=283.923fc3ef.chunk.js.map