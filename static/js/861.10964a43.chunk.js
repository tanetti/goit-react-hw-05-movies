"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[861],{806:function(n,e,t){t.d(e,{IQ:function(){return f},HI:function(){return d},XT:function(){return s},Jh:function(){return h},Hg:function(){return u}});var r=t(861),i=t(757),o=t.n(i),a=t(44),c="e915ca6542c1415913257f822128d2ab";a.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var n=(0,r.Z)(o().mark((function n(){var e,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"/trending/movie/day",e={api_key:c},n.next=4,(0,a.Z)("/trending/movie/day",{params:e});case 4:if(200===(null===(t=n.sent)||void 0===t?void 0:t.status)){n.next=7;break}throw new Error;case 7:return n.abrupt("return",t.data.results);case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"/search/movie",t={api_key:c,query:e},n.next=4,(0,a.Z)("/search/movie",{params:t});case 4:if(200===(null===(r=n.sent)||void 0===r?void 0:r.status)){n.next=7;break}throw new Error;case 7:return n.abrupt("return",r.data.results);case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r,i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="/movie/".concat(e),r={api_key:c},n.next=4,(0,a.Z)(t,{params:r});case 4:if(200===(null===(i=n.sent)||void 0===i?void 0:i.status)){n.next=7;break}throw new Error;case 7:return n.abrupt("return",i.data);case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r,i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="/movie/".concat(e,"/credits"),r={api_key:c},n.next=4,(0,a.Z)(t,{params:r});case 4:if(200===(null===(i=n.sent)||void 0===i?void 0:i.status)){n.next=7;break}throw new Error;case 7:return n.abrupt("return",i.data.cast);case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r,i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="/movie/".concat(e,"/reviews"),r={api_key:c},n.next=4,(0,a.Z)(t,{params:r});case 4:if(200===(null===(i=n.sent)||void 0===i?void 0:i.status)){n.next=7;break}throw new Error;case 7:return n.abrupt("return",i.data.results);case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},153:function(n,e,t){t.r(e),t.d(e,{default:function(){return A}});var r,i,o,a,c,u,s,d,f,h,m=t(885),l=t(791),p=t(739),v=t(919),g=t(806),x=[{path:"cast",text:"Cast"},{path:"reviews",text:"Reviews"}],w=t(168),b=t(444),Z=t(731),j=b.ZP.ul(r||(r=(0,w.Z)(["\n  list-style: none;\n\n  display: flex;\n  justify-content: center;\n\n  margin: ",";\n  margin-bottom: ",";\n  padding: ",";\n"])),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[4]})),k=b.ZP.li(i||(i=(0,w.Z)(["\n  &:not(:last-child) {\n    margin-right: ",";\n  }\n"])),(function(n){return n.theme.space[4]})),y=(0,b.ZP)(Z.OL)(o||(o=(0,w.Z)(["\n  display: inline-block;\n\n  padding: ",";\n\n  border-radius: ",";\n\n  font-weight: ",";\n\n  text-decoration: none;\n  color: inherit;\n\n  transition: ",",\n    ",";\n\n  &.active {\n    color: ",";\n    background-color: ",";\n  }\n\n  &:hover:not(.active),\n  &:focus:not(.active) {\n    color: ",";\n  }\n\n  &:not(:last-child) {\n    margin-right: ",";\n  }\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.radii.generic}),(function(n){return n.theme.fontWeights.semiBold}),(function(n){return n.theme.transitions.color}),(function(n){return n.theme.transitions.backgroundColor}),(function(n){return n.theme.colors.whiteText}),(function(n){return n.theme.colors.mainAccent}),(function(n){return n.theme.colors.mainAccent}),(function(n){return n.theme.space[4]})),_=t(184),P=function(){return(0,_.jsx)(j,{children:x.map((function(n){var e=n.path,t=n.text;return(0,_.jsx)(k,{children:(0,_.jsx)(y,{to:e,children:t})},e)}))})},W=b.ZP.div(a||(a=(0,w.Z)(["\n  margin-bottom: ",";\n\n  @media screen and (min-width: 768px) {\n    display: grid;\n    grid-template-columns: 240px 1fr;\n  }\n"])),(function(n){return n.theme.space[5]})),E=b.ZP.img(c||(c=(0,w.Z)(["\n  display: block;\n\n  width: 100%;\n  max-width: 342px;\n  height: auto;\n  margin-left: auto;\n  margin-right: auto;\n\n  object-fit: contain;\n\n  border-radius: ",";\n\n  @media screen and (max-width: 767.98px) {\n    margin-bottom: ",";\n  }\n"])),(function(n){return n.theme.radii.generic}),(function(n){return n.theme.space[4]})),C=b.ZP.h2(u||(u=(0,w.Z)(["\n  margin: ",";\n  margin-bottom: ",";\n\n  @media screen and (max-width: 767.98px) {\n    text-align: center;\n  }\n"])),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[4]})),O=b.ZP.div(s||(s=(0,w.Z)(["\n  padding: ",";\n"])),(function(n){return n.theme.space[4]})),S=b.ZP.p(d||(d=(0,w.Z)(["\n  padding: ",";\n  margin: ",";\n\n  &:not(:last-child) {\n    margin-bottom: ",";\n  }\n"])),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[4]})),z=b.ZP.span(f||(f=(0,w.Z)(["\n  display: block;\n  margin-bottom: ",";\n\n  font-size: ",";\n  font-weight: ",";\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.fontWeights.semiBold})),B=t(828),H=t(793),I=function(n){var e=n.movieDetails,t=e.poster_path,r=e.original_title,i=e.release_date,o=e.vote_average,a=e.overview,c=e.genres;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(W,{children:[(0,_.jsx)(E,{src:t?"https://image.tmdb.org/t/p/w342/".concat(t):B,alt:r,width:245,height:368}),(0,_.jsxs)(O,{children:[(0,_.jsx)(C,{children:"".concat(r," (").concat(i.substring(0,4),")")}),(0,_.jsx)(S,{children:"User score: ".concat(Math.round(10*o),"%")}),(0,_.jsxs)(S,{children:[(0,_.jsx)(z,{children:"Overview"}),a||"Overview not found"]}),(0,_.jsxs)(S,{children:[(0,_.jsx)(z,{children:"Genres"}),c.lenth?c.map((function(n){return n.name})).join(", "):"Genres not specified"]})]})]}),(0,_.jsx)(P,{}),(0,_.jsx)(l.Suspense,{fallback:(0,_.jsx)(H.a,{}),children:(0,_.jsx)(p.j3,{})})]})},T=t(677),U=(0,b.ZP)(Z.rU)(h||(h=(0,w.Z)(["\n  display: inline-block;\n\n  margin-bottom: ",";\n  padding: ",";\n\n  border-radius: ",";\n\n  font-weight: ",";\n\n  text-decoration: none;\n  color: inherit;\n\n  transition: ",",\n    ",";\n\n  &:hover,\n  &:focus {\n    color: ",";\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.radii.generic}),(function(n){return n.theme.fontWeights.semiBold}),(function(n){return n.theme.transitions.color}),(function(n){return n.theme.transitions.backgroundColor}),(function(n){return n.theme.colors.whiteText}),(function(n){return n.theme.colors.mainAccent})),A=function(){var n=(0,p.UO)().movieID,e=(0,p.TH)().state,t=(0,l.useState)(null),r=(0,m.Z)(t,2),i=r[0],o=r[1],a=(0,l.useState)("idle"),c=(0,m.Z)(a,2),u=c[0],s=c[1],d=(0,l.useRef)(null!==e&&void 0!==e?e:"/");return(0,l.useEffect)((function(){s("pending"),(0,g.HI)(n).then((function(n){o(n),s("resolved")})).catch((function(){return s("rejected")}))}),[n]),(0,_.jsx)(v.$,{children:(0,_.jsxs)(v.W,{children:[(0,_.jsx)(U,{to:d.current,children:"< Go back"}),"pending"===u&&(0,_.jsx)(H.a,{}),"rejected"===u&&(0,_.jsx)(T.v,{children:"Ooops, something went wrong"}),"resolved"===u&&i&&(0,_.jsx)(I,{movieDetails:i})]})})}},677:function(n,e,t){t.d(e,{v:function(){return o}});var r,i=t(168),o=t(444).ZP.p(r||(r=(0,i.Z)(["\n  margin: ",";\n  padding: "," ",";\n\n  font-size: ",";\n  font-weight: ",";\n  text-align: center;\n"])),(function(n){return n.theme.space[0]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[0]}),(function(n){return n.theme.fontSizes.l}),(function(n){return n.theme.fontWeights.semiBold}))},919:function(n,e,t){t.d(e,{W:function(){return a.W},$:function(){return o}});var r,i=t(168),o=t(444).ZP.section(r||(r=(0,i.Z)(["\n  width: 100%;\n  padding: "," 0;\n"])),(function(n){return n.theme.space[4]})),a=t(659)},828:function(n,e,t){n.exports=t.p+"static/media/no-image.a664c017f69941b2f369.png"}}]);
//# sourceMappingURL=861.10964a43.chunk.js.map