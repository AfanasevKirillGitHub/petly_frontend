"use strict";(self.webpackChunkpetly_frontend=self.webpackChunkpetly_frontend||[]).push([[411],{6411:function(n,e,i){i.r(e),i.d(e,{RegisterPage:function(){return xn}});var r,t,o,d,a,p,s,l,x,h,g,c,u,m,b,f,w,y,Z,j,v,P,E=i(9439),k=i(9230),D=i(168),C=i(82),z=i(1087),B=C.ZP.input(r||(r=(0,D.Z)(["\nborder-radius: 40px;\nborder: 1px solid rgba(245, 146, 86, 0.5);\nbackground-color: rgba(253, 247, 242, 1);\noutline: none;\n\n@media (max-width: 767px) {\n    padding-top: 11px;\n    padding-right: 14px;\n    padding-bottom: 12px;\n    padding-left: 14px;\n    height: 40px;\n    width: 280px;\n    font-weight: 400;\n    font-size: 14px;  \n    line-height: 1.35;  \n}\n@media (min-width: 768px) {\n    padding-top: 14px;\n    padding-right: 32px;\n    padding-bottom: 13px;\n    padding-left: 32px;\n    height: 52;\n    width: 448px;\n    font-weight: 400;\n    font-size: 18px;  \n    line-height: 1.39;\n}\n\n"]))),F=C.ZP.button(t||(t=(0,D.Z)(["\nborder-radius: 40px;\nborder: 2px solid #F59256;\nbackground-color: #F59256;\ncolor: white;\ncursor: pointer;\n:disabled {\n    background-color: rgba(245,146,86,0.5);\n    border: none\n}\n\n@media (max-width: 767px) {\n    height: 44px;\n    width: 280px;\n    font-weight: 500;\n    font-size: 20px;  \n    line-height: 1.35;  \n    margin-bottom: 40px;\n    margin-top: 16px;\n\n};\n@media (min-width: 768px) {\n    height: 44px;\n    width: 458px;\n    font-weight: 500;\n    font-size: 20px;  \n    line-height: 1.35;\n    margin-bottom: 40px;\n};\n@media (min-width: 1280px) {\n    height: 48px;\n};\n"]))),G=C.ZP.div(o||(o=(0,D.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);\n    padding: 40px 20px;\n@media (max-width: 767px) {\n    width: 95%;\n};\n@media (min-width: 768px) {\n    background-color: #FFF;\n    padding-top: 60px;\n    padding-right: 80px;\n    padding-bottom: 60px;\n    padding-left: 80px;\n    width: 608;\n    height: 583;\n    border-radius: 40px;\n}\n@media (min-width: 1280px) {\n    width: 618px;\n};\n\n"]))),R=(C.ZP.form(d||(d=(0,D.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n"]))),C.ZP.h2(a||(a=(0,D.Z)(["\n    margin-bottom: 13px;\n\n@media (max-width: 767px) {\n    font-weight: 700;\n    font-size: 24px;\n    line-height: 1.375;\n    \n};\n@media (min-width: 768px) {\n    font-weight: 500;\n    font-size: 36px;\n    line-height: 1.36;\n};\n\n"])))),T=C.ZP.div(p||(p=(0,D.Z)(["\nposition: relative;\n@media (max-width: 767px) { \n    margin-bottom: 24px;\n};\n@media (min-width: 768px) { \n    margin-bottom: 40px;\n};\n"]))),q=C.ZP.span(s||(s=(0,D.Z)(["\nposition: absolute;\nfont-size: 12px;\nleft: 20px;\nbottom: -40%;\n"]))),S=C.ZP.a(l||(l=(0,D.Z)(["\n margin-bottom: 13px;\n height: 24px\n\n"]))),L=C.ZP.span(x||(x=(0,D.Z)(["\n    position: absolute;\n    right: 15px;\n    top: 55%;\n    transform: translateY(-50%);\n    cursor: pointer;\n    color: #F59256;\n\n    @media (min-width: 768px) {\n        right: 20px;  \n    }\n"]))),M=C.ZP.p(h||(h=(0,D.Z)(["\n  color: ",";\n\n"])),(function(n){return n.theme.colors.greyText})),N=(0,C.ZP)(z.OL)(g||(g=(0,D.Z)(["\n  color: ",";\n  text-decoration: underline;\n"])),(function(n){return n.theme.colors.blue})),A=i(3527),O=i(3728),$=i(2791),_=i(8617),I=i(3329),J=function(n){var e=n.onToggle,i=n.getData,r=(0,k.$G)().t,t=(0,$.useState)("password"),o=(0,E.Z)(t,2),d=o[0],a=o[1],p=(0,$.useState)("password"),s=(0,E.Z)(p,2),l=s[0],x=s[1],h=(0,A.G)("",{isEmail:!0}),g=(0,A.G)("",{isPassword:!0}),c=(0,A.G)("",{isSamePassword:g.value});return(0,I.jsxs)(G,{children:[(0,I.jsx)(R,{children:r("Registration")}),(0,I.jsxs)(S,{href:"https://your-pets.onrender.com/api/users/google",children:[" ",(0,I.jsx)(O.JM8,{style:{width:"1.5em",height:"1.5em"}})]}),(0,I.jsxs)(T,{children:[(0,I.jsx)(B,{style:{border:h.isDirty&&!h.emailError?"1px solid green":h.isDirty&&h.emailError&&"1px solid red"},type:"email",value:h.value,onChange:function(n){return h.onChange(n)},onBlur:function(n){return h.onBlur(n)},name:"email",placeholder:r("Email"),required:!0}),h.isDirty&&h.emailError&&(0,I.jsx)(q,{style:{color:"red"},children:r("Enter a valid Email")})||h.isDirty&&!h.emailError&&(0,I.jsx)(q,{style:{color:"green"},children:r("Email is correct")})]}),(0,I.jsxs)(T,{children:[(0,I.jsx)(B,{style:{border:g.isDirty&&!g.passwordError?"1px solid green":g.isDirty&&g.passwordError&&"1px solid red"},type:d,value:g.value,onChange:function(n){return g.onChange(n)},onBlur:function(n){return g.onBlur(n)},name:"password",placeholder:r("Password"),required:!0}),g.isDirty&&g.passwordError&&(0,I.jsx)(q,{style:{color:"red"},children:r("Enter a valid Password")}),g.isDirty&&!g.passwordError&&(0,I.jsx)(q,{style:{color:"green"},children:r("Password is correct")}),(0,I.jsx)(L,{onClick:function(){a("password"===d?"text":"password")},children:"password"===d?(0,I.jsx)(_.Rbo,{}):(0,I.jsx)(_.MBb,{})})]}),(0,I.jsxs)(T,{children:[(0,I.jsx)(B,{style:{border:c.isDirty&&g.value===c.value?"1px solid green":c.isDirty&&g.value!==c.value&&"1px solid red"},type:l,value:c.value,onChange:function(n){return c.onChange(n)},onBlur:function(n){return c.onBlur(n)},name:"confirmPassword",placeholder:r("Confirm Password"),required:!0}),c.isDirty&&g.value===c.value&&(0,I.jsx)(q,{style:{color:"green"},children:r("confirmPassword is correct")}),c.isDirty&&g.value!==c.value&&(0,I.jsx)(q,{style:{color:"red"},children:r("confirmPassword is not correct")}),(0,I.jsx)(L,{onClick:function(){x("password"===l?"text":"password")},children:"password"===l?(0,I.jsx)(_.Rbo,{}):(0,I.jsx)(_.MBb,{})})]}),(0,I.jsx)(F,{disabled:!c.confirmError,type:"button",onClick:function(){i({email:h.value,password:g.value}),e()},children:r("Next")}),(0,I.jsxs)(M,{children:[r("Already have an account"),"? ",(0,I.jsx)(N,{to:"/login",children:r("Login")})]})]})},Y=i(1413),H=i(5048),K=i(5322),Q=C.ZP.input(c||(c=(0,D.Z)(["\nborder-radius: 40px;\nborder: 1px solid rgba(245, 146, 86, 0.5);\nbackground-color: rgba(253, 247, 242, 1);\noutline: none;\n\n\n@media (max-width: 767px) {\n    padding-top: 11px;\n    padding-right: 14px;\n    padding-bottom: 12px;\n    padding-left: 14px;\n    height: 40px;\n    width: 280px;\n    font-weight: 400;\n    font-size: 14px;  \n    line-height: 1.35;  \n}\n@media (min-width: 768px) {\n    padding-top: 14px;\n    padding-right: 32px;\n    padding-bottom: 13px;\n    padding-left: 32px;\n    height: 52;\n    width: 448px;\n    font-weight: 400;\n    font-size: 18px;  \n    line-height: 1.39;\n}\n\n"]))),U=C.ZP.button(u||(u=(0,D.Z)(["\nborder-radius: 40px;\nborder: 2px solid #F59256;\nbackground-color: #F59256;\ncolor: white;\ncursor: pointer;\n:disabled {\n    background-color: rgba(245,146,86,0.5);\n    border: none\n}\n\n@media (max-width: 767px) {\n    height: 44px;\n    width: 280px;\n    font-weight: 500;\n    font-size: 20px;  \n    line-height: 1.35;  \n    margin-bottom: 12px;\n    margin-top: 16px;\n};\n@media (min-width: 768px) {\n    height: 44px;\n    width: 458px;\n    font-weight: 500;\n    font-size: 20px;  \n    line-height: 1.35;\n    margin-bottom: 16px;\n};\n@media (min-width: 1280px) {\n    height: 48px;\n};\n"]))),V=C.ZP.button(m||(m=(0,D.Z)(["\nborder-radius: 40px;\nborder: 2px solid #F59256;\nbackground-color: #F59256;\ncolor: white;\ncursor: pointer;\n\n\n@media (max-width: 767px) {\n    height: 44px;\n    width: 280px;\n    font-weight: 500;\n    font-size: 20px;  \n    line-height: 1.35;  \n    margin-bottom: 40px;\n    margin-top: 16px;\n};\n@media (min-width: 768px) {\n    height: 44px;\n    width: 458px;\n    font-weight: 500;\n    font-size: 20px;  \n    line-height: 1.35;\n    margin-bottom: 40px;\n};\n@media (min-width: 1280px) {\n    height: 48px;\n};\n"]))),W=C.ZP.div(b||(b=(0,D.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);\n    padding: 40px 20px;\n@media (max-width: 767px) {\n    width: 95%;\n    /* height: 100vh */\n};\n@media (min-width: 768px) {\n    background-color: #FFF;\n    padding-top: 60px;\n    padding-right: 80px;\n    padding-bottom: 60px;\n    padding-left: 80px;\n    width: 608px;\n    height: 643px;\n    border-radius: 40px;\n}\n@media (min-width: 1280px) {\n    width: 618px;\n    height: 667px;\n};\n\n"]))),X=C.ZP.form(f||(f=(0,D.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n"]))),nn=C.ZP.h2(w||(w=(0,D.Z)(["\n    margin-bottom: 40px;\n\n@media (max-width: 767px) {\n    font-weight: 700;\n    font-size: 24px;\n    line-height: 1.375;\n    \n};\n@media (min-width: 768px) {\n    font-weight: 500;\n    font-size: 36px;\n    line-height: 1.36;\n};\n"]))),en=C.ZP.div(y||(y=(0,D.Z)(["\nposition: relative;\n@media (max-width: 767px) { \n    margin-bottom: 24px;\n};\n@media (min-width: 768px) { \n    margin-bottom: 40px;\n};\n"]))),rn=C.ZP.span(Z||(Z=(0,D.Z)(["\nposition: absolute;\nfont-size: 12px;\nleft: 20px;\nbottom: -40%;\n"]))),tn=C.ZP.p(j||(j=(0,D.Z)(["\n  color: ",";\n\n"])),(function(n){return n.theme.colors.greyText})),on=(0,C.ZP)(z.OL)(v||(v=(0,D.Z)(["\n  color: ",";\n  text-decoration: underline;\n"])),(function(n){return n.theme.colors.blue})),dn=function(n){var e=n.onToggle,i=n.dataForm1,r=(0,H.I0)(),t=(0,k.$G)().t,o=(0,A.G)("",{isName:!0}),d=(0,A.G)("",{isCity:!0}),a=(0,A.G)("",{isPhone:!0});return(0,I.jsxs)(W,{children:[(0,I.jsx)(nn,{children:t("Registration")}),(0,I.jsxs)(X,{onSubmit:function(n){n.preventDefault();var e=n.currentTarget,t=(0,Y.Z)((0,Y.Z)({},i),{},{name:o.value,city:d.value,phone:a.value});r((0,K.y1)(t)),e.reset()},autoComplete:"off",children:[(0,I.jsxs)(en,{children:[(0,I.jsx)(Q,{style:{border:o.isDirty&&!o.nameError?"1px solid green":o.isDirty&&o.nameError&&"1px solid red"},onChange:function(n){return o.onChange(n)},onBlur:function(n){return o.onBlur(n)},value:o.value,type:"text",name:"name",placeholder:t("Name"),required:!0}),o.isDirty&&o.nameError&&(0,I.jsx)(rn,{style:{color:"red"},children:t("Enter your name pls")}),o.isDirty&&!o.nameError&&(0,I.jsx)(rn,{style:{color:"green"},children:t("Name is valid")})]}),(0,I.jsxs)(en,{children:[(0,I.jsx)(Q,{style:{border:d.isDirty&&!d.cityError?"1px solid green":d.isDirty&&d.cityError&&"1px solid red"},onChange:function(n){return d.onChange(n)},onBlur:function(n){return d.onBlur(n)},value:d.value,type:"text",name:"city",placeholder:t("City, Region"),required:!0}),d.isDirty&&d.cityError&&(0,I.jsx)(rn,{style:{color:"red"},children:t("Enter your city pls")}),d.isDirty&&!d.cityError&&(0,I.jsx)(rn,{style:{color:"green"},children:t("City is valid")})]}),(0,I.jsxs)(en,{children:[(0,I.jsx)(Q,{style:{border:a.isDirty&&!a.PhoneError?"1px solid green":a.isDirty&&a.PhoneError&&"1px solid red"},onChange:function(n){return a.onChange(n)},onBlur:function(n){return a.onBlur(n)},value:a.value,type:"tel",name:"phone",placeholder:t("Mobile Phone +380..."),required:!0}),a.isDirty&&a.PhoneError&&(0,I.jsx)(rn,{style:{color:"red"},children:t("Enter your phone pls")}),a.isDirty&&!a.PhoneError&&(0,I.jsx)(rn,{style:{color:"green"},children:t("Phone is valid")})]}),(0,I.jsx)(U,{disabled:o.nameError||d.cityError||a.PhoneError,type:"submit",children:t("Registration")}),(0,I.jsx)(V,{onClick:e,type:"button",children:t("Back")})]}),(0,I.jsxs)(tn,{children:[t("Already have an account"),"? ",(0,I.jsx)(on,{to:"/login",children:t("Login")})]})]})},an=i(5865),pn=i(8223),sn=i(4161),ln=C.ZP.div(P||(P=(0,D.Z)(["\n height: 100%;\n display:flex;\n justify-content:center;\n align-items:center;\n  @media screen and (max-width: 767px) {\n    height: 600px;\n    background: url(",");\n    background-size: 500px auto;\n    background-position: bottom -50px left 0px;\n    background-repeat: no-repeat;\n  }\n  @media screen and (min-width: 768px) and (max-width: 1279px) {\n    height: 1100px;\n    background: url(",");\n    background-size: 768px auto;\n    background-position: bottom 0px left 0px;\n    background-repeat: no-repeat;\n  }\n  @media screen and (min-width: 1280px) {\n    height: 100vh;\n    background-image: url(",");\n    background-position: bottom 0px left 0px;\n    background-size: 1240px, contain;\n    background-repeat: no-repeat;\n  }\n\n"])),an,pn,sn),xn=function(){var n=(0,$.useState)(!0),e=(0,E.Z)(n,2),i=e[0],r=e[1],t=(0,$.useState)({}),o=(0,E.Z)(t,2),d=o[0],a=o[1],p=function(){r(!i)};return(0,I.jsx)(ln,{children:i?(0,I.jsx)(J,{getData:function(n){a(n)},onToggle:p}):(0,I.jsx)(dn,{dataForm1:d,onToggle:p})})}}}]);
//# sourceMappingURL=411.1b5fdfbc.chunk.js.map