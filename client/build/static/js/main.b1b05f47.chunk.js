(this["webpackJsonpevent-finder"]=this["webpackJsonpevent-finder"]||[]).push([[0],{169:function(e,t,n){},196:function(e,t){},198:function(e,t){},211:function(e,t){},213:function(e,t){},241:function(e,t){},243:function(e,t){},244:function(e,t){},249:function(e,t){},251:function(e,t){},257:function(e,t){},259:function(e,t){},278:function(e,t){},290:function(e,t){},293:function(e,t){},325:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(59),s=n.n(c),i=(n(169),n(8)),l=n(5),o=n.n(l),u=n(11),d=n(24),j=n.n(d),b="CREATE_USER",m="GET_USER",x="LOGIN_USER",f="UPDATE_USER",h="LOGOUT_USER",O="SEARCH_EVENTS",p="SEARCH_USERS",v="CLEAR_SEARCH_USERS",g="LOAD_MORE",N="SEARCH_ATTRACTIONS",w="GET_ATTRACTIONS",y="GET_ATTRACTION_DETAILS",k="GET_EVENT_DETAIL",E="ADD_ARTIST",T="REMOVE_ARTIST",S=n(159),A=n.n(S),R=n(2),C=n(160),D=n(161),_="sY0V0bcC0RC1F9yjSh1wrBB70hXSQswG",I="https://app.ticketmaster.com/discovery/v2",F=function(){function e(){Object(C.a)(this,e)}return Object(D.a)(e,null,[{key:"request",value:function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r,a=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:{},t.includes("discovery")?(t=t.replace("/discovery/v2",""),r="".concat(I,"/").concat(t)):r="".concat(I,"/").concat(t,".json"),e.prev=2,e.next=5,j()({url:r,method:"get",params:Object(R.a)(Object(R.a)({},n),{},{apikey:_})});case 5:return e.abrupt("return",e.sent.data);case 8:e.prev=8,e.t0=e.catch(2),console.error("API Error:",e.t0.response);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"searchEvents",value:function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(R.a)({},t),t.location&&(+t.location?n.postalCode=t.location:n.city=t.location,delete n.location),e.next=5,this.request("events",Object(R.a)(Object(R.a)({},n),{},{size:10}));case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"searchAttractions",value:function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(R.a)({},t),e.next=3,this.request("attractions",Object(R.a)(Object(R.a)({},n),{},{size:50}));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getEventDetail",value:function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("events/".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getAttractions",value:function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("attractions",{classificationName:t,size:8});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"loadMore",value:function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getAttractionDetails",value:function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("/attractions/".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),U=F,M="https://react-event-finder.herokuapp.com",L=function(e){return{type:x,user:e}},H=function(){return{type:h}},P=function(e){return{type:m,user:e}},q=function(e){return{type:E,artist:e}},G=function(e){return function(){var t=Object(u.a)(o.a.mark((function t(n){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.delete("".concat(M,"/users/").concat(e.username,"/artists"),{data:e});case 3:r=t.sent,n(Y(r.data.id)),t.next=11;break;case 7:return t.prev=7,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",t.t0);case 11:case 12:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},Y=function(e){return{type:T,id:e}},z=function(e){return function(){var t=Object(u.a)(o.a.mark((function t(n){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,U.searchEvents(e);case 3:r=t.sent,n(B(r)),t.next=11;break;case 7:return t.prev=7,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",t.t0);case 11:case 12:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},B=function(e){return{type:O,searchResults:e}},J=function(e){return{type:N,searchAttractionsResults:e}},V=function(e){return{type:g,results:e}},Q=function(e){return{type:w,attractions:e}},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return{type:y,attractionDetails:e}},X=n(6),K=n(12),Z=n(0),$=function(e){var t=e.name,n=e.img,r=e.id,a=e.eventCount;return Object(Z.jsx)("div",{className:"relative w-full h-28 sm:h-44 md:h-32 xl:h-48",children:Object(Z.jsxs)(K.b,{to:"/attraction/".concat(r),children:[Object(Z.jsx)("img",{src:n,alt:"".concat(t),className:"h-full w-full rounded object-cover"}),Object(Z.jsxs)("div",{className:"absolute bottom-0 bg-gray-900 bg-opacity-40 text-white rounded ml-2 mb-2 p-2",children:[Object(Z.jsx)("p",{className:"font-semibold text-sm sm:text-base",children:t}),Object(Z.jsxs)("p",{className:"text-xs sm:text-sm",children:[a," events"]})]})]})})},ee=function(e){var t=e.title,n=e.attractions;return Object(Z.jsx)("div",{className:"w-full flex flex-col items-center",children:Object(Z.jsxs)("div",{className:"lg:w-5/6 xl:w-4/5",children:[Object(Z.jsx)("div",{className:"mb-4 text-xl",children:Object(Z.jsx)("h3",{className:"font-bold",children:t})}),Object(Z.jsx)("div",{className:"grid grid-cols-2 gap-2 md:grid-cols-4",children:n.map((function(e){return Object(Z.jsx)($,{name:e.name,img:e.images[1].url,eventCount:e.upcomingEvents._total,id:e.id},e.id)}))})]})})},te=function(){var e=Object(i.c)((function(e){return e.attractionsReducer.attractionsHome}));return Object(Z.jsx)("div",{className:"flex flex-col items-center",children:Object(Z.jsx)("div",{className:"w-full px-3",children:Object.keys(e).map((function(t){return Object(Z.jsx)("div",{className:"mb-10",children:Object(Z.jsx)(ee,{title:e[t].title,attractions:e[t].attractions})},t)}))})})},ne=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.userReducer.user})),n=t.artists;return Object(Z.jsx)(Z.Fragment,{children:n?Object(Z.jsxs)("div",{className:"sm:px-3",children:[Object(Z.jsx)("h2",{className:"text-2xl font-semibold mb-10",children:"My Artists"}),n.map((function(n){return Object(Z.jsxs)("div",{className:"border-b flex items-center justify-between py-4 px-1 hover:bg-gray-100",children:[Object(Z.jsxs)("div",{className:"flex items-center",children:[Object(Z.jsx)("div",{className:"",children:Object(Z.jsx)("img",{alt:n.name,src:n.photoUrl,className:"w-16 md:w-24 rounded mr-4 md:mr-10"})}),Object(Z.jsx)("div",{className:"pr-4",children:Object(Z.jsx)("p",{className:"text-sm sm:text-base font-semibold",children:n.name})})]}),Object(Z.jsx)("div",{children:Object(Z.jsx)("button",{onClick:function(){return r=n.id,void e(G({id:r,username:t.username}));var r},className:"text-sm text-red-500 hover:underline",children:"Remove"})})]},n.id)}))]}):null})},re=function(){return Object(Z.jsx)("div",{className:"flex justify-center px-3",children:Object(Z.jsx)("div",{className:"w-full md:w-4/5 lg:w-4/6 xl:w-3/5",children:Object(Z.jsx)(ne,{})})})},ae=n(13),ce=n(20),se=n.n(ce),ie=function(e){var t=e.name,n=e.segment,r=e.genre,a=e.img,c=e.id;return Object(Z.jsx)(K.b,{to:"/attraction/".concat(c),children:Object(Z.jsxs)("div",{className:"border-b flex items-center hover:bg-gray-200 py-4",children:[Object(Z.jsx)("div",{className:"mr-10",children:Object(Z.jsx)("img",{src:a,alt:t,className:"w-20"})}),Object(Z.jsxs)("div",{children:[Object(Z.jsx)("p",{className:"font-semibold",children:t}),Object(Z.jsxs)("p",{className:"text-gray-500 text-sm",children:[n," / ",r]})]})]})})},le=function(e){e.attractionId,e.attractionName;var t=Object(i.c)((function(e){return e.searchReducer})),n=t.attractions;return Object(Z.jsx)(Z.Fragment,{children:n?n.map((function(e){return Object(Z.jsx)("div",{children:Object(Z.jsx)(ie,{name:e.name,segment:e.classifications[0].segment?e.classifications[0].segment.name:null,genre:e.classifications[0].genre?e.classifications[0].genre.name:null,img:e.images[0].url,id:e.id})},e.id)})):Object(Z.jsx)("p",{children:"Couldn't find anything matching your search."})})},oe=n(22),ue=n.n(oe),de=function(e){var t=e.name,n=(e.id,e.img,e.date),r=e.time,a=e.venue,c=e.ticketUrl;return Object(Z.jsxs)("div",{className:"border-b flex justify-between py-4 px-2 hover:bg-gray-100",children:[Object(Z.jsxs)("div",{className:"flex flex-col md:flex-row",children:[Object(Z.jsxs)("div",{className:"mr-10 flex items-baseline md:flex-col md:w-28",children:[Object(Z.jsx)("p",{className:"text-indigo-600 font-semibold mr-3 uppercase",children:ue()(n).format("MMM D")}),Object(Z.jsx)("p",{className:"text-gray-500",children:ue()("".concat(n," ").concat(r)).format("ddd h:mm a")})]}),Object(Z.jsxs)("div",{className:"pr-2",children:[Object(Z.jsx)("p",{className:"font-semibold",children:t}),Object(Z.jsx)("p",{className:"text-gray-500 text-sm",children:a})]})]}),Object(Z.jsx)("div",{className:"mt-1",children:Object(Z.jsx)("a",{href:c,target:"_blank",rel:"noreferrer",children:Object(Z.jsx)("button",{className:"bg-blue-600 px-6 py-2 tracking-wider rounded text-white hover:bg-blue-800",children:"Tickets"})})})]})},je=function(e){var t,n=e.attractionId,a=e.attractionName,c=Object(i.b)(),s=Object(i.c)((function(e){return e.searchReducer})),l=s.events;t=s.link?s.link.href:null;var d=Object(X.e)().search,j=se.a.parse(d),b=j.location,m=j.keyword;Object(r.useEffect)((function(){n||0===l.length&&c(z(se.a.parse(d)))}),[n,c,l.length,d]);return Object(Z.jsx)(Z.Fragment,{children:l?Object(Z.jsxs)("div",{className:"",children:[a&&Object(Z.jsxs)("p",{className:"mb-10 font-semibold text-xl",children:["Upcoming Events for ",a]}),0===l.length?Object(Z.jsx)("div",{children:m||b?Object(Z.jsxs)("p",{children:["Unfortunately, there are no upcoming events for ",m," matching your criteria."]}):Object(Z.jsx)("p",{children:"Unfortunately, there are no upcoming events for this artist."})}):Object(Z.jsx)(Z.Fragment,{children:l.map((function(e){return Object(Z.jsx)("div",{children:Object(Z.jsx)(de,{name:e.name,date:e.dates.start.localDate,time:e.dates.start.localTime,img:e.images[2].url,id:e.id,ticketUrl:e.url,venue:e._embedded?e._embedded.venues[0].name:null})},e.id)}))}),t&&Object(Z.jsx)("div",{className:"flex justify-center",children:Object(Z.jsx)("div",{className:"flex justify-center w-1/2 my-10",children:Object(Z.jsx)("button",{onClick:function(){var e;c((e=t,function(){var t=Object(u.a)(o.a.mark((function t(n){var r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,U.loadMore(e);case 3:r=t.sent,n(V(r)),t.next=11;break;case 7:return t.prev=7,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",t.t0);case 11:case 12:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()))},className:"w-full py-2 px-4 border border-blue-600 rounded hover:bg-blue-600 hover:text-white",children:"Load More"})})})]}):null})},be=function(){var e=Object(r.useState)("attractions"),t=Object(ae.a)(e,2),n=t[0],a=t[1],c=Object(X.e)().search,s=se.a.parse(c).keyword;return Object(Z.jsx)("div",{className:"flex justify-center px-3",children:Object(Z.jsxs)("div",{className:"lg:w-3/5",children:[Object(Z.jsx)("div",{className:"text-2xl mb-8",children:Object(Z.jsxs)("p",{children:["Searching for ",Object(Z.jsxs)("span",{className:"font-semibold text-indigo-700",children:['"',s,'"']})]})}),Object(Z.jsxs)("div",{className:"flex text-xl",children:[Object(Z.jsx)("button",{onClick:function(){a("attractions")},className:"mb-8 mr-6 py-2 ".concat("attractions"===n?"border-b-4 border-blue-500":"border-b-4 border-transparent"),children:"Attractions"}),Object(Z.jsx)("button",{onClick:function(){a("events")},className:"mb-8 py-2 ".concat("events"===n?"border-b-4 border-blue-500":"border-b-4 border-transparent"),children:"Events"})]}),Object(Z.jsx)("div",{children:"attractions"===n?Object(Z.jsx)(le,{}):Object(Z.jsx)(je,{})})]})})},me=n(31),xe=n(162),fe=n(39),he=function(){var e=Object(i.b)(),t=Object(X.f)(),n=Object(X.g)().attractionId,a=Object(r.useState)(!1),c=Object(ae.a)(a,2),s=c[0],l=c[1],d=Object(i.c)((function(e){return e.attractionsReducer.details})),b=Object(i.c)((function(e){return e.userReducer.user}));Object(r.useEffect)((function(){var t;e((t=n,function(){var e=Object(u.a)(o.a.mark((function e(n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.getAttractionDetails(t);case 2:r=e.sent,n(W(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),e(z({attractionId:n})),b.loggedIn&&l(b.artists.map((function(e){return e.id})).includes(n))}),[n,e,b.loggedIn,b.artists]);var m=function(){var r;b.loggedIn?(e((r={id:n,name:d.name,photoUrl:d.images[2].url,username:b.username},function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.post("".concat(M,"/users/").concat(r.username,"/artists"),r);case 3:n=e.sent,t(q(n.data.artist)),e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 11:case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())),l(!0)):t("/login")},x=function(){e(G({id:n,username:b.username})),l(!1)};return Object(Z.jsx)(Z.Fragment,{children:d?Object(Z.jsx)("div",{className:"flex justify-center px-3",children:Object(Z.jsxs)("div",{className:"flex flex-col items-center md:w-4/5 lg:w-3/5",children:[Object(Z.jsxs)("div",{className:"sm:grid sm:grid-cols-2 w-full",children:[Object(Z.jsx)("div",{className:"sm:order-last lg:flex lg:justify-end",children:d.images?Object(Z.jsx)("img",{alt:d.name,className:"rounded mb-4 w-full",src:d.images[2].url}):null}),Object(Z.jsxs)("div",{children:[Object(Z.jsx)("p",{className:"text-5xl mb-4",children:d.name}),d.classifications?Object(Z.jsxs)("p",{className:"mb-4 ml-1 text-xl text-gray-500",children:[d.classifications[0].segment.name," / ",d.classifications[0].genre.name]}):null,s?Object(Z.jsxs)("div",{className:"flex ml-1",children:[Object(Z.jsx)("button",{onClick:x,className:"mr-2",children:Object(Z.jsx)(me.a,{icon:fe.b,className:"text-xl text-red-500"})}),Object(Z.jsx)("p",{className:"text-sm text-gray-400 italic",children:"Following"})]}):Object(Z.jsxs)("div",{className:"flex ml-1",children:[Object(Z.jsx)("button",{onClick:m,className:"mr-2",children:Object(Z.jsx)(me.a,{icon:xe.a,className:"text-xl text-gray-700"})}),Object(Z.jsx)("p",{className:"text-sm text-gray-400",children:"Follow"})]})]})]}),Object(Z.jsx)("div",{className:"w-full mt-10",children:Object(Z.jsx)(je,{attractionId:d.id,attractionName:d.name})})]})}):Object(Z.jsx)("p",{children:"loading"})})},Oe=n(26),pe=function(e){var t=e.attractionId,n=Object(i.b)(),a=Object(X.f)(),c=Object(X.e)().search,s=se.a.parse(c),l=s.location,o=s.keyword,u=s.startDateTime,d=s.sort,j=s.radius,b=s.classificationName;"arts"===b&&(b="arts&theatre");var m={startDateTime:u||ue()().format(),location:l||"",classificationName:b||"all",sort:d||"date,asc",radius:j||"50"},x=Object(r.useState)(m),f=Object(ae.a)(x,2),h=f[0],O=f[1],p=function(e){var t=e.target,n=t.name,r=t.value;O((function(e){return Object(R.a)(Object(R.a)({},e),{},Object(Oe.a)({},n,r))})),console.log(h)};return Object(Z.jsx)("div",{className:"sm:w-1/2 xl:w-1/3",children:Object(Z.jsx)("form",{onSubmit:function(e){e.preventDefault(),t?n(z({attractionId:t,startDateTime:ue()(h.startDateTime).format()})):(n(z(Object(R.a)(Object(R.a)(Object(R.a)({},se.a.parse(c)),h),{},{classificationName:"all"===h.classificationName?"":h.classificationName,startDateTime:ue()(h.startDateTime).format()}))),a({pathname:"/discover",search:"?location=".concat(h.location||"","&keyword=").concat(o||"","&startDateTime=").concat(ue()(h.startDateTime).format(),"&classificationName=").concat(h.classificationName,"&sort=").concat(h.sort,"&radius=").concat(h.radius)}))},children:Object(Z.jsxs)("div",{className:"flex flex-col",children:[Object(Z.jsxs)("div",{className:"mb-2",children:[Object(Z.jsx)("input",{type:"text",name:"location",id:"location",value:h.location,onChange:p,placeholder:"Enter city or zip",className:"border-blue-500 rounded mb-2 w-full"}),Object(Z.jsx)("input",{type:"date",id:"datePicker",name:"startDateTime",value:h.startDateTime,onChange:p,className:"border-blue-500 rounded w-full"})]}),Object(Z.jsx)("div",{children:Object(Z.jsx)("button",{className:"bg-gray-200 px-3 py-2 rounded text-gray-700 text-sm ml-1",children:"Apply Filters"})})]})})})},ve=function(){var e=Object(X.e)().search,t=se.a.parse(e),n=t.location,r=t.startDateTime,a=t.classificationName;"arts"===a&&(a="arts & theater");return Object(Z.jsx)("div",{className:"flex justify-center px-3",children:Object(Z.jsxs)("div",{className:"lg:w-3/5",children:[Object(Z.jsx)("div",{children:Object(Z.jsxs)("div",{className:"text-2xl mb-10",children:[Object(Z.jsxs)("p",{className:"inline",children:["Showing upcoming ",Object(Z.jsx)("span",{className:"font-semibold text-indigo-700",children:a})," events"]}),n?Object(Z.jsxs)("p",{className:"inline",children:[" near ",Object(Z.jsx)("span",{className:"font-semibold text-indigo-700",children:n})]}):null,r?Object(Z.jsxs)("p",{className:"inline",children:[" starting ",Object(Z.jsx)("span",{className:"font-semibold text-indigo-700",children:ue()(r).format("MMM D YYYY")})]}):null]})}),Object(Z.jsx)("div",{className:"mb-10",children:Object(Z.jsx)(pe,{})}),Object(Z.jsx)("div",{children:Object(Z.jsx)(je,{})})]})})},ge=function(){var e=Object(i.b)(),t=Object(X.f)(),n=Object(r.useState)({username:"",password:"",usernameError:"",passwordError:""}),a=Object(ae.a)(n,2),c=a[0],s=a[1],l=function(e){var t=e.target,n=t.name,r=t.value;s((function(e){return Object(R.a)(Object(R.a)({},e),{},Object(Oe.a)({},n,r))}))};return Object(Z.jsx)("div",{className:"flex justify-center px-3",children:Object(Z.jsx)("div",{className:"w-full sm:w-3/4 md:w-1/2 lg:w-5/12 xl:w-1/4",children:Object(Z.jsx)("div",{className:"rounded bg-white",children:Object(Z.jsxs)("form",{onSubmit:function(n){n.preventDefault();var r,a=function(){var e=!0;return c.username?s((function(e){return Object(R.a)(Object(R.a)({},e),{},{firstNameError:""})})):(s((function(e){return Object(R.a)(Object(R.a)({},e),{},{usernameError:"Username cannot be blank"})})),e=!1),c.password||(s((function(e){return Object(R.a)(Object(R.a)({},e),{},{passwordError:"Password cannot be blank"})})),e=!1),e}();if(a)try{e((r={username:c.username,password:c.password},function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.post("".concat(M,"/users/login"),r,{headers:{"Content-Type":"application/json"}});case 3:n=e.sent,localStorage.setItem("token",JSON.stringify(n.data.token)),t(L(n.data.user)),e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 12:case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())),t("/")}catch(i){return console.log(i),i}},className:"",children:[Object(Z.jsxs)("div",{className:"mb-3",children:[Object(Z.jsx)("label",{htmlFor:"username",className:"block text-sm text-gray-700 mb-1",children:"Username"}),Object(Z.jsx)("input",{type:"text",name:"username",id:"username",maxLength:"25",value:c.username,onChange:l,className:"w-full border-gray-300 rounded focus:border-blue-400 focus:ring-blue-500 focus:ring-opacity-50"}),c.usernameError?Object(Z.jsx)("p",{className:"text-xs text-red-500 mt-1",children:c.usernameError}):null]}),Object(Z.jsxs)("div",{className:"mb-3",children:[Object(Z.jsx)("label",{htmlFor:"password",className:"block text-sm text-gray-700 mb-1",children:"Password"}),Object(Z.jsx)("input",{type:"text",name:"password",id:"password",maxLength:"25",value:c.password,onChange:l,className:"w-full border-gray-300 rounded shadow-sm focus:border-blue-400 focus:ring-blue-500 focus:ring-opacity-50"}),c.passwordError?Object(Z.jsx)("p",{className:"text-xs text-red-500 mt-1",children:c.passwordError}):null]}),Object(Z.jsx)("button",{className:"text-white uppercase tracking-wider bg-blue-500 mt-4 py-3 rounded w-full hover:bg-blue-600  focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-600",children:"Login"})]})})})})},Ne=function(){return Object(Z.jsxs)(X.c,{children:[Object(Z.jsx)(X.a,{path:"/login",element:Object(Z.jsx)(ge,{})}),Object(Z.jsx)(X.a,{path:"/profile",element:Object(Z.jsx)(re,{})}),Object(Z.jsx)(X.a,{path:"/attraction/:attractionId",element:Object(Z.jsx)(he,{})}),Object(Z.jsx)(X.a,{path:"/search",element:Object(Z.jsx)(be,{})}),Object(Z.jsx)(X.a,{path:"/discover",element:Object(Z.jsx)(ve,{})}),Object(Z.jsx)(X.a,{path:"/",element:Object(Z.jsx)(te,{})})]})},we=function(){var e=Object(X.e)().search,t=se.a.parse(e),n=t.location,a=t.keyword,c=Object(r.useState)({location:"",keyword:""}),s=Object(ae.a)(c,2),l=s[0],d=s[1],j=Object(i.b)(),b=Object(X.f)();Object(r.useEffect)((function(){d({location:n||"",keyword:a||""})}),[e,a,n]);return Object(Z.jsx)("div",{children:Object(Z.jsx)("form",{onSubmit:function(e){e.preventDefault();try{j((t=l,function(){var e=Object(u.a)(o.a.mark((function e(n){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.searchAttractions(t);case 3:r=e.sent,n(J(r)),e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 11:case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())),j(z(l)),b({pathname:"/search",search:"?keyword=".concat(l.keyword)})}catch(n){console.log(n)}var t},children:Object(Z.jsxs)("div",{className:"flex items-center",children:[Object(Z.jsx)("input",{type:"text",placeholder:"Search events and attractions",name:"keyword",value:l.keyword,onChange:function(e){var t=e.target,n=t.name,r=t.value;d((function(e){return Object(R.a)(Object(R.a)({},e),{},Object(Oe.a)({},n,r))}))},className:"rounded bg-white placeholder-opacity-80 w-72 px-4 py-2 mr-3 lg:mr-2"}),Object(Z.jsx)("button",{children:Object(Z.jsx)(me.a,{icon:fe.c,className:"text-xl text-white"})})]})})})},ye=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.userReducer.user})),n=Object(r.useState)(!1),a=Object(ae.a)(n,2),c=a[0],s=a[1],l=function(){e((function(e){localStorage.removeItem("token"),e(H())})),o("/")},o=Object(X.f)(),u=function(t){e(z({classificationName:t})),o({pathname:"/discover",search:"?classificationName=".concat(t)})};return Object(Z.jsx)("nav",{className:"relative flex flex-wrap items-center justify-between px-2 py-3 lg:py-6 bg-blue-500 mb-3",children:Object(Z.jsxs)("div",{className:"container px-2 mx-auto flex flex-wrap items-center justify-between lg:px-0",children:[Object(Z.jsxs)("div",{className:"w-full px-1 relative flex justify-between lg:px-0 lg:w-auto lg:static lg:block lg:justify-start lg:mr-6",children:[Object(Z.jsx)(K.b,{to:"/",className:"font-semibold text-2xl italic leading-relaxed inline-block py-2 whitespace-nowrap text-white",children:"EventFinder"}),Object(Z.jsx)("button",{className:"text-white cursor-pointer text-2xl leading-none px-1 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none",type:"button",onClick:function(){return s(!c)},children:Object(Z.jsx)(me.a,{icon:fe.a})})]}),Object(Z.jsxs)("div",{className:"flex-col flex-grow items-start lg:flex lg:flex-row lg:justify-between"+(c?" flex":" hidden"),id:"example-navbar-danger",children:[Object(Z.jsx)("div",{className:"lg:flex lg:flex-row",children:Object(Z.jsxs)("ul",{className:"flex flex-col lg:flex-row list-none lg:ml-auto",children:[Object(Z.jsx)(we,{}),Object(Z.jsx)("li",{className:"nav-item lg:ml-6",children:Object(Z.jsx)("button",{onClick:function(){return u("music")},className:"px-2 py-2 flex items-center text-lg font-semibold leading-snug text-white hover:opacity-75",children:"Concerts"})}),Object(Z.jsx)("li",{className:"nav-item",children:Object(Z.jsx)("button",{onClick:function(){return u("sports")},className:"px-2 py-2 flex items-center text-lg font-semibold leading-snug text-white hover:opacity-75",children:"Sports"})}),Object(Z.jsx)("li",{className:"nav-item",children:Object(Z.jsx)("button",{onClick:function(){return u("arts&theatre")},className:"px-2 py-2 flex items-center text-lg font-semibold leading-snug text-white hover:opacity-75",children:"Arts & Theater"})})]})}),Object(Z.jsx)("div",{className:"lg:flex lg:flex-row",children:Object(Z.jsx)("ul",{className:"flex flex-col lg:flex-row list-none lg:ml-auto",children:t.loggedIn?Object(Z.jsxs)(Z.Fragment,{children:[Object(Z.jsx)("li",{className:"nav-item px-2 py-2 flex items-center text-lg font-semibold leading-snug text-white hover:opacity-75",children:Object(Z.jsx)(K.b,{to:"/profile",children:Object(Z.jsx)("button",{className:"font-semibold mr-4",children:"My Profile"})})}),Object(Z.jsx)("li",{className:"nav-item px-2 py-2 flex items-center text-lg font-semibold leading-snug text-white hover:opacity-75",children:Object(Z.jsx)("button",{onClick:l,className:"font-semibold",children:"Logout"})})]}):Object(Z.jsx)(Z.Fragment,{children:Object(Z.jsx)("li",{className:"nav-item px-2 py-2 flex items-center text-lg font-semibold leading-snug text-white hover:opacity-75",children:Object(Z.jsx)(K.b,{to:"/login",children:Object(Z.jsx)("button",{className:"font-semibold",children:"Login"})})})})})})]})]})})},ke=function(){return Object(Z.jsx)("div",{className:"flex justify-center py-10 text-sm text-gray-600",children:Object(Z.jsx)("p",{children:"EventFinder 2021"})})},Ee=function(){var e=Object(i.b)(),t=localStorage.getItem("token")||null;return Object(r.useEffect)((function(){var n;t&&e((n=t,function(){var e=Object(u.a)(o.a.mark((function e(t){var r,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=A.a.decode(JSON.parse(n)),a=r.username,e.next=4,j.a.get("".concat(M,"/users/").concat(a));case 4:c=e.sent,t(P(c.data.user)),e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())),e(function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r,a,c,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={},e.next=4,U.getAttractions("music");case 4:return r=e.sent,e.next=7,U.getAttractions("sports");case 7:return a=e.sent,e.next=10,U.getAttractions("film");case 10:return c=e.sent,e.next=13,U.getAttractions("arts&theatre");case 13:s=e.sent,n.music=r._embedded.attractions,n.sports=a._embedded.attractions,n.films=c._embedded.attractions,n.artsAndTheatre=s._embedded.attractions,t(Q(n)),e.next=25;break;case 21:return e.prev=21,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",e.t0);case 25:case 26:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(t){return e.apply(this,arguments)}}())}),[t,e]),Object(Z.jsxs)("div",{className:"flex flex-col min-h-screen",children:[Object(Z.jsx)("div",{className:"mb-10",children:Object(Z.jsx)(ye,{})}),Object(Z.jsx)("div",{className:"",children:Object(Z.jsx)(Ne,{})}),Object(Z.jsx)("div",{className:"flex flex-grow"}),Object(Z.jsx)("div",{children:Object(Z.jsx)(ke,{})})]})},Te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,326)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))},Se=n(40),Ae=n(47),Re={events:[],link:"",eventDetail:{},attractions:[],users:[]},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:var n;return n=t.searchResults._embedded?t.searchResults._embedded.events:[],Object(R.a)(Object(R.a)({},e),{},{events:n,link:t.searchResults._links.next});case g:return Object(R.a)(Object(R.a)({},e),{},{events:[].concat(Object(Ae.a)(e.events),Object(Ae.a)(t.results._embedded.events)),link:t.results._links.next});case k:return Object(R.a)(Object(R.a)({},e),{},{eventDetail:t.eventDetail});case N:return Object(R.a)(Object(R.a)({},e),{},{attractions:t.searchAttractionsResults._embedded.attractions});case p:return Object(R.a)(Object(R.a)({},e),{},{users:t.users});case v:return Object(R.a)(Object(R.a)({},e),{},{users:[]});default:return e}},De={attractionsHome:{music:{title:"Music",attractions:[]},sports:{title:"Sports",attractions:[]},films:{title:"Films",attractions:[]},artsAndTheatre:{title:"Arts & Theatre",attractions:[]}},details:{}},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(R.a)(Object(R.a)({},e),{},{attractionsHome:Object(R.a)(Object(R.a)({},e.attractionsHome),{},{music:Object(R.a)(Object(R.a)({},e.attractionsHome.music),{},{attractions:t.attractions.music}),sports:Object(R.a)(Object(R.a)({},e.attractionsHome.sports),{},{attractions:t.attractions.sports}),films:Object(R.a)(Object(R.a)({},e.attractionsHome.films),{},{attractions:t.attractions.films}),artsAndTheatre:Object(R.a)(Object(R.a)({},e.attractionsHome.artsAndTheatre),{},{attractions:t.attractions.artsAndTheatre})})});case y:return Object(R.a)(Object(R.a)({},e),{},{details:t.attractionDetails});default:return e}},Ie={user:{loggedIn:!1,artists:[]}},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:case x:case m:return Object(R.a)(Object(R.a)({},e),{},{user:Object(R.a)(Object(R.a)({},t.user),{},{loggedIn:!0})});case f:return Object(R.a)(Object(R.a)({},e),{},{user:Object(R.a)(Object(R.a)({},e.user),{},{firstName:t.user.firstName,lastName:t.user.lastName,email:t.user.email})});case h:return Ie;case E:return Object(R.a)(Object(R.a)({},e),{},{user:Object(R.a)(Object(R.a)({},e.user),{},{artists:[].concat(Object(Ae.a)(e.user.artists),[t.artist])})});case T:return Object(R.a)(Object(R.a)({},e),{},{user:Object(R.a)(Object(R.a)({},e.user),{},{artists:e.user.artists.filter((function(e){return e.id!==t.id}))})});default:return e}},Ue=Object(Se.combineReducers)({searchReducer:Ce,attractionsReducer:_e,userReducer:Fe}),Me=n(164),Le=n(163),He=function(){var e=Object(X.e)().pathname;return Object(r.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},Pe=Object(Se.createStore)(Ue,Object(Le.composeWithDevTools)(Object(Se.applyMiddleware)(Me.a)));s.a.render(Object(Z.jsx)(a.a.StrictMode,{children:Object(Z.jsx)(i.a,{store:Pe,children:Object(Z.jsxs)(K.a,{children:[Object(Z.jsx)(He,{}),Object(Z.jsx)(Ee,{})]})})}),document.getElementById("root")),Te()}},[[325,1,2]]]);
//# sourceMappingURL=main.b1b05f47.chunk.js.map