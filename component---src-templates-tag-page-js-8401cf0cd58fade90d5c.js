(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Kgxr:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return m}));a("91GP"),a("Z2Ku"),a("L9s1");var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),s=a("p3AD"),i=a("IP2g"),o=a("wHSu"),c=a("6Gk8"),g=a("Bl7J"),u=a("rgsX"),p=a("vrFN");t.default=function(e){var t=e.data,a=e.pageContext,n=e.location,m=a.tag,d=a.index,f=t.site.siteMetadata.title,E=t.allMarkdownRemark.edges,w=t.site.siteMetadata.settings.postsPerOnePage,k=(d-1)*w,y=d*w>E?E:d*w,b=E.filter((function(e){return e.node.frontmatter.tags.includes(m)})),v=b.slice(k,y),x=Math.ceil(b.length/w),h=l.a.createElement("nav",null,l.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},l.a.createElement("li",null,d>1&&l.a.createElement(r.Link,{to:"tags/"+m+"/page"+(d-1),rel:"prev"},"← New Posts")),l.a.createElement("li",null,d!==x&&l.a.createElement(r.Link,{to:"tags/"+m+"/page"+(d+1),rel:"next"},"Old Posts →"))));return l.a.createElement(g.a,{location:n,title:f},l.a.createElement(p.a,{title:"All posts"}),l.a.createElement(c.a,null),l.a.createElement("h2",{style:{marginTop:Object(s.a)(1),marginBottom:Object(s.a)(1)}},l.a.createElement(i.a,{icon:o.a,style:{marginRight:"10px"}}),"Tag: ",m," (",b.length,"posts)"),h,v.map((function(e){var t=e.node;return l.a.createElement(u.a,Object.assign({},t,{key:t.fields.slug}))})),h)};var m="523172278"}}]);
//# sourceMappingURL=component---src-templates-tag-page-js-8401cf0cd58fade90d5c.js.map