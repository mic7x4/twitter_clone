(this.webpackJsonptwitter_clone=this.webpackJsonptwitter_clone||[]).push([[0],{73:function(e,t,s){},74:function(e,t,s){},75:function(e,t,s){},76:function(e,t,s){},83:function(e,t,s){},84:function(e,t,s){},85:function(e,t,s){},89:function(e,t,s){},91:function(e,t,s){"use strict";s.r(t);var c=s(2),a=s.n(c),n=s(24),i=s.n(n),r=(s(73),s(74),s(75),s(46)),j=s.n(r),o=(s(76),s(4));var l=function(e){var t=e.active,s=e.text,c=e.Icon;return Object(o.jsxs)("div",{className:"sidebarOption ".concat(t&&"sidebarOption--active"),children:[Object(o.jsx)(c,{}),Object(o.jsx)("h2",{children:s})]})},d=s(51),b=s.n(d),x=s(52),p=s.n(x),O=s(53),m=s.n(O),u=s(54),h=s.n(u),f=s(55),v=s.n(f),_=s(56),g=s.n(_),N=s(57),w=s.n(N),I=s(58),y=s.n(I),S=s(105);var k=function(){return Object(o.jsxs)("div",{className:"sidebar",children:[Object(o.jsx)(j.a,{className:"sidebar__twitterIcon"}),Object(o.jsx)(l,{active:!0,Icon:b.a,text:"Home"}),Object(o.jsx)(l,{Icon:p.a,text:"Explorer"}),Object(o.jsx)(l,{Icon:m.a,text:"Notifications"}),Object(o.jsx)(l,{Icon:h.a,text:"Messages"}),Object(o.jsx)(l,{Icon:v.a,text:"Bookmarks"}),Object(o.jsx)(l,{Icon:g.a,text:"Lists"}),Object(o.jsx)(l,{Icon:w.a,text:"Profiles"}),Object(o.jsx)(l,{Icon:y.a,text:"More"}),Object(o.jsx)(S.a,{variant:"outlined",className:"sidebar__tweet",fullWidth:!0,children:"Tweet"})]})},C=s(36),T=(s(83),s(106)),z=s(59),B=s.n(z),M=s(60),W=s.n(M),H=s(61),K=s.n(H),L=s(62),E=s.n(L),A=s(63),D=s.n(A),J=(s(84),Object(c.forwardRef)((function(e,t){var s=e.displayName,c=e.username,a=e.verified,n=e.text,i=e.image,r=e.avatar;return Object(o.jsxs)("div",{className:"post",ref:t,children:[Object(o.jsx)("div",{className:"post__avatar",children:Object(o.jsx)(T.a,{src:r})}),Object(o.jsxs)("div",{className:"post__body",children:[Object(o.jsxs)("div",{className:"post__header",children:[Object(o.jsx)("div",{className:"post__headerText",children:Object(o.jsxs)("h3",{children:[s,a&&Object(o.jsxs)("span",{children:[" ",Object(o.jsx)(B.a,{className:"post__badge"})]}),Object(o.jsxs)("span",{className:"post__headeSpecial",children:[" @",c]})]})}),Object(o.jsx)("div",{className:"post__headerDescription",children:Object(o.jsx)("p",{children:n})})]}),Object(o.jsx)("img",{src:i,alt:""}),Object(o.jsxs)("div",{className:"post__footer",children:[Object(o.jsx)(W.a,{fontSize:"small"}),Object(o.jsx)(K.a,{fontSize:"small"}),Object(o.jsx)(E.a,{fontSize:"small"}),Object(o.jsx)(D.a,{fontSize:"small"})]})]})]})}))),R=(s(85),s(66).a.initializeApp({apiKey:"AIzaSyC2K5fTfZl90iWMlTa8Zq_UOLTm_RpCVT0",authDomain:"twitter-clone-4d6a0.firebaseapp.com",projectId:"twitter-clone-4d6a0",storageBucket:"twitter-clone-4d6a0.appspot.com",messagingSenderId:"49991690094",appId:"1:49991690094:web:a1e1fdf422be8e55c9c37f",measurementId:"G-J1KN5GCX31"}).firestore());var F=function(){var e=Object(c.useState)(""),t=Object(C.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(""),i=Object(C.a)(n,2),r=i[0],j=i[1];return Object(o.jsx)("div",{className:"tweetBox",children:Object(o.jsxs)("form",{children:[Object(o.jsxs)("div",{className:"tweetbox__input",children:[Object(o.jsx)(T.a,{src:"https://pbs.twimg.com/profile_images/1359436602024599554/dLKHeiWF_400x400.jpg"}),Object(o.jsx)("input",{type:"text",placeholder:"What's happening?",onChange:function(e){a(e.target.value)}})]}),Object(o.jsx)("input",{type:"text",onChange:function(e){j(e.target.value)},className:"tweetbox__imageInput",placeholder:"Enter image URL"}),Object(o.jsx)(S.a,{type:"submit",onClick:function(e){e.preventDefault(),R.collection("posts").add({displayName:"Black Hustle",username:"youngsaucecrook",verified:!0,text:s,image:r,avatar:"https://pbs.twimg.com/profile_images/1359436602024599554/dLKHeiWF_400x400.jpg"}),a(""),j("")},className:"tweetBox__tweetButton",children:"Tweet"})]})})},G=s(64);var U=function(){var e=Object(c.useState)([]),t=Object(C.a)(e,2),s=t[0],a=t[1];return Object(c.useEffect)((function(){R.collection("posts").onSnapshot((function(e){return a(e.docs.map((function(e){return e.data()})))}))}),[]),Object(o.jsxs)("div",{className:"feed",children:[Object(o.jsx)("div",{className:"feed__header",children:Object(o.jsx)("h2",{children:"Home"})}),Object(o.jsx)(F,{}),Object(o.jsx)(G.a,{children:s.map((function(e){return Object(o.jsx)(J,{displayName:e.displayName,username:e.username,verified:e.verified,text:e.text,avatar:e.avatar,image:e.image},e.text)}))})]})},Z=(s(89),s(41)),q=s(65),P=s.n(q);var V=function(){return Object(o.jsxs)("div",{className:"widgets",children:[Object(o.jsxs)("div",{className:"widgets__input",children:[Object(o.jsx)(P.a,{className:"widgets__searchIcon"}),Object(o.jsx)("input",{type:"text",className:"",placeholder:"Search Twitter"})]}),Object(o.jsxs)("div",{className:"widgets__widgetContainer",children:[Object(o.jsx)("h2",{children:"What's happening"}),Object(o.jsx)(Z.c,{tweetId:"1364637822888607745"}),Object(o.jsx)(Z.b,{sourceType:"profile",screenName:"MicCrook",options:{height:400}}),Object(o.jsx)(Z.a,{url:"https://www.facebook.com/CrookzArt",options:{text:"#reactjs is awesome",via:"MicCrook"}})]})]})};var X=function(){return Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)(k,{}),Object(o.jsx)(U,{}),Object(o.jsx)(V,{})]})};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(X,{})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.d73eddc6.chunk.js.map