(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(29),r=a.n(i),c=a(9),o=a(2),u=a(1);var l=function(e){return console.log(e),Object(u.jsx)("span",{children:"About this page: I built it because I love movies."})},j=a(17),m=a.n(j),d=a(30),b=a(11),v=a(12),p=a(14),h=a(13),O=a(31),x=a.n(O),g=a(5),y=a.n(g);function f(e){var t=e.id,a=e.year,s=e.title,n=e.summary,i=e.poster,r=e.genres;return Object(u.jsx)(c.b,{to:{pathname:"/movie/".concat(t),state:{year:a,title:s,summary:n,poster:i,genres:r}},children:Object(u.jsxs)("div",{className:"movie",children:[Object(u.jsx)("img",{src:i,alt:s,title:s}),Object(u.jsxs)("div",{className:"movie_data",children:[Object(u.jsx)("h3",{className:"movie_title",children:s}),Object(u.jsx)("h5",{className:"movie_year",children:a}),Object(u.jsx)("ul",{className:"genres",children:r.map((function(e,t){return Object(u.jsx)("li",{className:"movie_genres",children:e},t)}))}),Object(u.jsxs)("p",{className:"movie_summary",children:[n.slice(0,180),"..."]})]})]})})}f.prototype={id:y.a.number.isRequired,year:y.a.number.isRequired,title:y.a.string.isRequired,summary:y.a.string.isRequired,poster:y.a.string.isRequired,genres:y.a.arrayOf(y.a.string).isRequired};var N=f,_=(a(62),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(b.a)(this,a);for(var s=arguments.length,n=new Array(s),i=0;i<s;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(m.a.mark((function t(){var a,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:a=t.sent,s=a.data.data.movies,e.setState({movies:s,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return Object(u.jsx)("section",{className:"container",children:t?Object(u.jsx)("div",{className:"loader",children:Object(u.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(u.jsx)("div",{className:"movies",children:a.map((function(e){return Object(u.jsx)(N,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),a}(n.a.Component)),k=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(b.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(u.jsx)("span",{children:e.state.title}):null}}]),a}(n.a.Component);a(63);var q=function(){return Object(u.jsxs)("div",{className:"nav",children:[Object(u.jsx)(c.b,{to:"/",children:"HOME"}),Object(u.jsx)(c.b,{to:"/about",children:"ABOUT"})]})};var M=function(){return Object(u.jsxs)(c.a,{children:[Object(u.jsx)(q,{}),Object(u.jsx)(o.a,{path:"/",exact:!0,component:_}),Object(u.jsx)(o.a,{path:"/about",component:l}),Object(u.jsx)(o.a,{path:"/movie/:id",component:k})]})};r.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(M,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.8b3ea404.chunk.js.map