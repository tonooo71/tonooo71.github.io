/*! For license information please see component---src-templates-tag-template-tsx-b57e8af5f32256a0af3c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"1xLx":function(e,t,a){e.exports={feed__item:"Feed-module--feed__item--2D5rE","feed__item-title":"Feed-module--feed__item-title--3nigr","feed__item-title-link":"Feed-module--feed__item-title-link--iFMRs","feed__item-description":"Feed-module--feed__item-description--1uO8e","feed__item-meta-time":"Feed-module--feed__item-meta-time--3t1fg","feed__item-meta-divider":"Feed-module--feed__item-meta-divider--N-Q0A","feed__item-meta-category-link":"Feed-module--feed__item-meta-category-link--23f8F","feed__item-readmore":"Feed-module--feed__item-readmore--1u6bI"}},"2YrS":function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a("q1tI"),i=a.n(n),l=a("Wbzz"),o=a("1xLx"),r=a.n(o),d=function(e){var t=e.edges;return i.a.createElement("div",{className:r.a.feed},t.map((function(e){var t,a,n,o,d,m,s,u,_;return null==(null==e||null===(t=e.node)||void 0===t?void 0:t.fields)||null==(null==e||null===(a=e.node)||void 0===a||null===(n=a.fields)||void 0===n?void 0:n.slug)||null==(null==e||null===(o=e.node)||void 0===o||null===(d=o.fields)||void 0===d?void 0:d.categorySlug)||null==(null==e||null===(m=e.node)||void 0===m||null===(s=m.frontmatter)||void 0===s?void 0:s.category)||null==(null==e||null===(u=e.node)||void 0===u||null===(_=u.frontmatter)||void 0===_?void 0:_.date)?null:i.a.createElement("div",{className:r.a.feed__item,key:e.node.fields.slug},i.a.createElement("div",{className:r.a["feed__item-meta"]},i.a.createElement("time",{className:r.a["feed__item-meta-time"],dateTime:new Date(e.node.frontmatter.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})},new Date(e.node.frontmatter.date).toLocaleDateString("en-US",{year:"numeric",month:"long"})),i.a.createElement("span",{className:r.a["feed__item-meta-divider"]}),i.a.createElement("span",{className:r.a["feed__item-meta-category"]},i.a.createElement(l.Link,{to:e.node.fields.categorySlug,className:r.a["feed__item-meta-category-link"]},e.node.frontmatter.category))),i.a.createElement("h2",{className:r.a["feed__item-title"]},i.a.createElement(l.Link,{className:r.a["feed__item-title-link"],to:e.node.fields.slug},e.node.frontmatter.title)),i.a.createElement("p",{className:r.a["feed__item-description"]},e.node.frontmatter.description),i.a.createElement(l.Link,{className:r.a["feed__item-readmore"],to:e.node.fields.slug},"Read"))})))}},BGiJ:function(e,t,a){"use strict";a.d(t,"a",(function(){return _}));var n=a("q1tI"),i=a.n(n),l=a("UbMB"),o=a.n(l),r=a("Wbzz"),d=a("jxKE"),m=a("U4DU"),s=a.n(m),u=o.a.bind(s.a),_=function(e){var t=e.prevPagePath,a=e.nextPagePath,n=e.hasNextPage,l=e.hasPrevPage,o=u({"pagination__prev-link":!0,"pagination__prev-link--disable":!l}),m=u({"pagination__next-link":!0,"pagination__next-link--disable":!n});return i.a.createElement("div",{className:s.a.pagination},i.a.createElement("div",{className:s.a.pagination__prev},i.a.createElement(r.Link,{rel:"prev",to:l?t:"/",className:o},d.b.PREV_PAGE)),i.a.createElement("div",{className:s.a.pagination__next},i.a.createElement(r.Link,{rel:"next",to:n?a:"/",className:m},d.b.NEXT_PAGE)))}},DAw1:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),l=a("Ng2+"),o=a("Kh1g"),r=a("2YrS"),d=a("Ag2N"),m=a("BGiJ"),s=a("eZYV");t.default=function(e){var t=e.data,a=e.pageContext,n=Object(s.b)(),u=n.title,_=n.subtitle,c=a.tag,g=a.currentPage,f=a.prevPagePath,p=a.nextPagePath,v=a.hasPrevPage,P=a.hasNextPage;if(null==g||null==f||null==p||null==v||null==P)return null;var k=t.allMarkdownRemark.edges,h=g>0?'All Posts tagged as "'+c+'" - Page '+g+" - "+u:'All Posts tagged as "'+c+'" - '+u;return i.a.createElement(l.a,{title:h,description:_},i.a.createElement(o.a,null),i.a.createElement(d.a,{title:c},i.a.createElement(r.a,{edges:k}),i.a.createElement(m.a,{prevPagePath:f,nextPagePath:p,hasPrevPage:v,hasNextPage:P})))}},U4DU:function(e,t,a){e.exports={pagination:"Pagination-module--pagination--2H3nO",pagination__prev:"Pagination-module--pagination__prev--bet5s","pagination__prev-link":"Pagination-module--pagination__prev-link--1Nzs6","pagination__prev-link--disable":"Pagination-module--pagination__prev-link--disable--Yklx9",pagination__next:"Pagination-module--pagination__next--3hFiN","pagination__next-link":"Pagination-module--pagination__next-link--3FUtA","pagination__next-link--disable":"Pagination-module--pagination__next-link--disable--30UwZ"}},UbMB:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(this&&this[n]||n);else if(Array.isArray(n))e.push(i.apply(this,n));else if("object"===l)for(var o in n)a.call(n,o)&&n[o]&&e.push(this&&this[o]||o)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()}}]);
//# sourceMappingURL=component---src-templates-tag-template-tsx-b57e8af5f32256a0af3c.js.map