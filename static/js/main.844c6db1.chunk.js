(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e){e.exports={qualities:["My good qualities are:","Helpful","Responsive","Friendly","Reliability","Rational","Give advice","Good ideas","Awareness"],description:{title:"Summary",text:"Energetic Front-End developer with 8+ years of experience. Seeking to know new IT things every day. Versatile Fron-End Developer with 2+ years of experience implementing complexweb apps and internal frameworks, specializing in Web Apps development utilizing React ecosystem.",idea:"My main focus is to make my work better than I made yesterday. To improve myself and our life. I am not competing with anyone except myself."},personal_info:["Skype:cobrascript","E-mail:cobrascript@yandex.ru","Portfolio:github.com/snikos","LinkedIn:linkedin.com/in/snikos","Country:Russia"],experiences:{title:"My Experiences",list:["JavaScript:High","jQuery:High","Vue:Middle","Lodash:Middle","HTML:High","CSS:Expert","SCSS:Middle","Bootstrap:Cool","Git:Middle","Sequalize:Middle","Element Plus:Middle","CI/CD:Middle"],also_skills:["Webpack:Middle","Git:Normal","Npm:Good","Photoshop:Good"]},experiencesAlso:{title:"Also My Experience includes basic skill with PEVN (PostgreSQL, Express, Vue 3, Node.js):",list:["PEVN:Junior","MySQL+Ajax+Php:Middle"]},languages:["Russian:Native","English:Intermediate"]}},function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(7),c=a.n(s),r=(a(14),a(1)),i=a(2),o=a(4),m=a(3),u=a(5),p=a(8),d=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleClick=function(){a.setState({toggleClass:""===a.state.toggleClass?"hover":""})},a.state={toggleClass:"hover",timer:0},a.playLogo(1e4),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"playLogo",value:function(e){var t=this;this.timer=setTimeout(function(){t.handleClick(),t.playLogo(e)},e)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"oil ".concat(this.state.toggleClass),onClick:this.handleClick},l.a.createElement("span",{className:"b"},l.a.createElement("figure",{className:"ox"})),l.a.createElement("span",{className:"b"},l.a.createElement("figure",{className:"ox"})),l.a.createElement("span",{className:"b"},l.a.createElement("figure",{className:"ox"})),l.a.createElement("span",{className:"b"},l.a.createElement("figure",{className:"ox"}))))}}]),t}(n.Component);function E(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"col-12 col-sm-8 col-md-6"},l.a.createElement(d,null),l.a.createElement("div",{className:"cv-logo_box"},l.a.createElement("h5",{className:"m-1"},"Web Master Snikos"),l.a.createElement("p",{className:"m-1"},"CV for Front-End Developer"))),l.a.createElement("div",{className:"col-12 col-sm-4 col-md-6"},l.a.createElement("p",{className:"text-center m-3"},l.a.createElement("a",{href:"/my-cv/files/cvsnikos.pdf",download:!0},"Download CV"))))}var g=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleClick=function(){a.setState({toggleClass:"go"!==a.state.toggleClass?"go":""})},a.state={toggleClass:""},a.startGo(),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"startGo",value:function(){var e=this;setTimeout(function(){e.setState({toggleClass:"go"})},1500)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"my-quality ".concat(this.state.toggleClass),onClick:this.handleClick},l.a.createElement("div",{className:"my-quality_block my-quality_main"},this.props.lists.map(function(e,t){return 0===t?l.a.createElement("span",{key:e,className:"my-quality_title"},e):l.a.createElement("span",{key:e,className:"my-quality_subblock my-quality_box".concat(t)},l.a.createElement("span",{className:"my-quality_subtitle"},e))}))))}}]),t}(n.Component);function b(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h6",{className:"cv-h6 text-info"},e.desc.title),l.a.createElement("p",{className:"cv-text_p"},e.desc.text),l.a.createElement("p",{className:"cv-text_p"},e.desc.idea))}function v(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h6",{className:"cv-h6 text-info"},"Languages"),l.a.createElement("ul",{className:"row cv-ul"},e.langs.map(function(e,t){return l.a.createElement("li",{key:e,className:"col-6 col-sm-4 col-md-4 col-lg-3"},l.a.createElement("div",{className:"btn-boom btn-boom-cv boom-c-1"},l.a.createElement("div",{className:"boom-hover"},l.a.createElement("span",{className:"out-text"},e.split(":")[0])),l.a.createElement("div",{className:"boom-shadow"}),l.a.createElement("div",{className:"boom-overlay"}),l.a.createElement("div",{className:"boom-inner"},l.a.createElement("b",{className:"cv-ul__b2"},"Level: ",e.split(":")[1]))))})))}function h(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h6",{className:"cv-h6 text-info"},e.expers.title),l.a.createElement("ul",{className:"row cv-ul"},e.expers.list.map(function(e,t){return l.a.createElement("li",{key:e,className:"col-6 col-sm-4 col-md-4 col-lg-3"},l.a.createElement("div",{className:"btn-boom btn-boom-cv boom-c-1"},l.a.createElement("div",{className:"boom-hover"},l.a.createElement("span",{className:"out-text"},e.split(":")[0])),l.a.createElement("div",{className:"boom-shadow"}),l.a.createElement("div",{className:"boom-overlay"}),l.a.createElement("div",{className:"boom-inner"},l.a.createElement("b",{className:"cv-ul__b2"},"Level: ",e.split(":")[1]))))})))}function f(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"wrap"},l.a.createElement("div",{id:"gear",className:"gear"})))}function N(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"col-12 col-sm-12 col-md-8 col-lg-9"},l.a.createElement(f,null),l.a.createElement(b,{desc:e.exp.description}),l.a.createElement(g,{lists:e.exp.qualities}),l.a.createElement(h,{expers:e.exp.experiences}),l.a.createElement(h,{expers:e.exp.experiencesAlso}),l.a.createElement(v,{langs:e.exp.languages})))}function y(e){var t=String(Object.keys(e)).split("_").join(" ");return l.a.createElement(l.a.Fragment,null,l.a.createElement("h6",{className:"cv-h6 bg-info text-white p-2"},t),l.a.createElement("ul",{className:"list-group"},e.personal_info.map(function(e){return l.a.createElement("li",{key:e,className:"list-group-item"},l.a.createElement("b",{className:"cv-ul__b"},e.split(":")[0]),l.a.createElement("span",{className:"cv-ul__span"},e.split(":")[1]))}),l.a.createElement("li",{className:"list-group-item"},l.a.createElement("button",{className:"btn btn-sm btn-success",onClick:function(){return window.print()}},"Print CV-pdf"))))}function x(e){var t=String(Object.keys(e)).split("_").join(" ");return l.a.createElement(l.a.Fragment,null,l.a.createElement("h6",{className:"cv-h6 bg-info text-white p-2"},t),l.a.createElement("ul",{className:"list-group"},e.other_my_skills.map(function(e){return l.a.createElement("li",{key:e,className:"list-group-item super-id"},l.a.createElement("b",{className:"cv-ul__b"},e.split(":")[0]))})))}function k(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"col-12 col-sm-12 col-md-4 col-lg-3 bg-light"},l.a.createElement(y,{personal_info:e.exp.personal_info}),l.a.createElement(x,{other_my_skills:e.exp.experiences.also_skills})))}function w(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",{className:"cv-powerby m-3"},e.list.map(function(e){return l.a.createElement("span",{className:"m-1",key:e},e)})))}var j=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,this.props.children)}}]),t}(n.Component),C=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"h5 bg-".concat(this.props.theme," text-black"),style:{display:"none"}},"MoonFooter")}}]),t}(n.Component);function _(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"col-12 col-sm-12 col-md-12"},l.a.createElement(w,{list:e.lists})),l.a.createElement("div",{className:"col-12 col-sm-12 col-md-12"},l.a.createElement(j,null,l.a.createElement(C,{theme:"light"}))))}a(15),a(16),a(17),a(18),a(19);var O=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={listFoo:["CV Powered by: ","Javascript","React","Components","Css3 Animation","Three.js","TweenMax.js"],start:p},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row bg-light"},l.a.createElement(E,{list:this.state.start})),l.a.createElement("div",{className:"row"},l.a.createElement(N,{exp:this.state.start}),l.a.createElement(k,{exp:this.state.start})),l.a.createElement("div",{className:"row bg-light"},l.a.createElement(_,{lists:this.state.listFoo})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(20);c.a.render(l.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.844c6db1.chunk.js.map