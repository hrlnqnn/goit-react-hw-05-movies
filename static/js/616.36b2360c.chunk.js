"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[616],{616:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(439),a=n(87),i=n(689),s=n(791),o=n(818),c={movie:"MovieDetails_movie__e4Hw7",image:"MovieDetails_image__E07wX",movieDescription:"MovieDetails_movieDescription__blLzU",movieName:"MovieDetails_movieName__SDlMp",gridContainer:"MovieDetails_gridContainer__VvA59",movieItemTitle:"MovieDetails_movieItemTitle__5zjoM",voteFocus:"MovieDetails_voteFocus__SWCOU",votesUnactive:"MovieDetails_votesUnactive__jh8MO",aboutTitle:"MovieDetails_aboutTitle__BBuI0",aboutText:"MovieDetails_aboutText__+zYxI",btnContainer:"MovieDetails_btnContainer__rRwbE"},u=n(184),l=function(){var e,t,n=(0,i.TH)(),l=(0,s.useState)(null),v=(0,r.Z)(l,2),m=v[0],d=v[1],p=(0,i.UO)().id;if((0,s.useEffect)((function(){p&&(0,o.Pg)(p).then((function(e){d(e)}))}),[p]),!m)return null;var h=m.poster_path,f=m.original_title,_=m.title,x=m.name,j=m.vote_average,b=m.vote_count,g=m.popularity,w=m.overview,N=null!==(e=null===(t=n.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies";return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a.rU,{to:N,children:"Go back"}),(0,u.jsxs)("div",{className:c.movie,children:[(0,u.jsx)("div",{className:c.imgContainer,width:"240",children:(0,u.jsx)("img",{className:c.image,src:"https://image.tmdb.org/t/p/w500".concat(h),alt:f})}),(0,u.jsxs)("div",{className:c.movieDescription,children:[(0,u.jsx)("h2",{className:c.movieName,children:_||x}),(0,u.jsxs)("div",{className:c.gridContainer,children:[(0,u.jsx)("i",{className:c.movieItemTitle,children:"Vote / Votes"}),(0,u.jsxs)("div",{className:c.value,children:[(0,u.jsx)("span",{className:c.voteFocus,children:j}),(0,u.jsx)("span",{children:" / "}),(0,u.jsx)("span",{className:c.votesUnactive,children:b})]}),(0,u.jsx)("i",{className:c.movieItemTitle,children:"Popularity"}),(0,u.jsx)("span",{className:c.value,children:g}),(0,u.jsx)("i",{className:c.movieItemTitle,children:"Original Title"}),(0,u.jsx)("span",{className:c.value,children:f})]}),(0,u.jsx)("h3",{className:c.aboutTitle,children:"About"}),(0,u.jsx)("article",{className:c.aboutText,children:w})]}),(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{className:c.btnContainer,children:[(0,u.jsx)(a.rU,{to:"reviews",state:{from:N},children:"Go through the reviews"}),(0,u.jsx)(a.rU,{to:"cast",state:{from:N},children:"Get to know the team"})]}),(0,u.jsx)(s.Suspense,{fallback:(0,u.jsx)("div",{children:"Loading..."}),children:(0,u.jsx)(i.j3,{})})]})]})]})}},818:function(e,t,n){n.d(t,{JN:function(){return o},Ku:function(){return v},Pg:function(){return u},Ph:function(){return c},fI:function(){return l}});var r=n(861),a=n(757),i=n.n(a),s=n(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3/",s.Z.defaults.params={api_key:"f9c0bb738fb5ed39704a871786e56353"};var o=function(){var e=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/trending/movie/day",{params:{page:1}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/search/movie",{params:{query:t}});case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t,"/reviews"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t,"/credits"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=616.36b2360c.chunk.js.map