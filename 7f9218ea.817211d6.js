(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{191:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(2),i=a(9),r=(a(0),a(243)),c={id:"overriding_packages",title:"Overriding packages"},o={id:"advanced/overriding_packages",title:"Overriding packages",description:"The contents of a config file can be relocated, or replicated, within the config, via package overrides.",source:"@site/docs/advanced/overriding_packages.md",permalink:"/docs/next/advanced/overriding_packages",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/advanced/overriding_packages.md",version:"next",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1591643677,sidebar:"Docs",previous:{title:"Submitit Launcher plugin",permalink:"/docs/next/plugins/submitit_launcher"},next:{title:"Command line overrides",permalink:"/docs/next/advanced/command_line_overrides"}},l=[{value:"Package specification",id:"package-specification",children:[]},{value:"Overriding the package in a file via a package directive",id:"overriding-the-package-in-a-file-via-a-package-directive",children:[]},{value:"Overriding the package via the defaults list",id:"overriding-the-package-via-the-defaults-list",children:[]},{value:"Overriding the package via the command line",id:"overriding-the-package-via-the-command-line",children:[]},{value:"History and future of the package directive",id:"history-and-future-of-the-package-directive",children:[]}],p={rightToc:l};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The contents of a config file can be relocated, or replicated, within the config, via package overrides."),Object(r.b)("h3",{id:"package-specification"},"Package specification"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text",metastring:'title="Definition of a package"',title:'"Definition',of:!0,a:!0,'package"':!0}),"PACKAGE      : _global_ | COMPONENT[.COMPONENT]*\nCOMPONENT    : _group_ | _name_ | \\w+\n\n_global_     : the top level package (equivalent to the empty string).\n_group_      : the config group in dot notation: foo/bar/zoo.yaml -> foo.bar\n_name_       : the config file name: foo/bar/zoo.yaml -> zoo\n")),Object(r.b)("h3",{id:"overriding-the-package-in-a-file-via-a-package-directive"},"Overriding the package in a file via a package directive"),Object(r.b)("p",null,"A ",Object(r.b)("inlineCode",{parentName:"p"},"@package directive")," specifies a common ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/terminology#package"}),"package")," for all nodes in the config file.\nIt must be placed at the top of each ",Object(r.b)("inlineCode",{parentName:"p"},"config group file"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text",metastring:'title="Package directive examples"',title:'"Package',directive:!0,'examples"':!0}),"# @package foo.bar\n# @package _global_\n# @package _group_\n# @package _group_._name_\n# @package foo._group_._name_\n")),Object(r.b)("h4",{id:"examples"},"Examples"),Object(r.b)("h5",{id:"a-package-directive-with-a-literal"},"A package directive with a literal"),Object(r.b)("div",{className:"row"},Object(r.b)("div",{className:"col col--6"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="mysql.yaml" {1-2}',title:'"mysql.yaml"',"{1-2}":!0}),"# @package foo.bar\n\ndb:\n  host: localhost\n  port: 3306\n"))),Object(r.b)("div",{className:"col  col--6"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="Interpretation" {1-2}',title:'"Interpretation"',"{1-2}":!0}),"foo:\n  bar:\n    db:\n      host: localhost\n      port: 3306\n")))),Object(r.b)("h5",{id:"a-package-directive-with-_group_-and-_name_"},"A package directive with ",Object(r.b)("inlineCode",{parentName:"h5"},"_group_")," and ",Object(r.b)("inlineCode",{parentName:"h5"},"_name_")),Object(r.b)("div",{className:"row"},Object(r.b)("div",{className:"col col--6"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="db/mysql.yaml" {1-2}',title:'"db/mysql.yaml"',"{1-2}":!0}),"# @package _group_._name_\n\nhost: localhost\nport: 3306\n"))),Object(r.b)("div",{className:"col  col--6"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="Interpretation" {1-2}',title:'"Interpretation"',"{1-2}":!0}),"db:\n  mysql:\n    host: localhost\n    port: 3306\n")))),Object(r.b)("h3",{id:"overriding-the-package-via-the-defaults-list"},"Overriding the package via the defaults list"),Object(r.b)("p",null,"The following example adds the ",Object(r.b)("inlineCode",{parentName:"p"},"mysql")," config in under the packages ",Object(r.b)("inlineCode",{parentName:"p"},"src")," and ",Object(r.b)("inlineCode",{parentName:"p"},"dst"),"."),Object(r.b)("div",{className:"row"},Object(r.b)("div",{className:"col col--6"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'}),"defaults:\n - db@db.src: mysql\n - db@db.dst: mysql\n\n\n\n\n"))),Object(r.b)("div",{className:"col  col--6"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="Interpretation"',title:'"Interpretation"'}),"db:\n  src:\n    host: localhost\n    port: 3306\n  dst:\n    host: localhost\n    port: 3306\n")))),Object(r.b)("h3",{id:"overriding-the-package-via-the-command-line"},"Overriding the package via the command line"),Object(r.b)("p",null,"Overriding the package for ",Object(r.b)("inlineCode",{parentName:"p"},"db")," specified in the defaults list from ",Object(r.b)("inlineCode",{parentName:"p"},"db.dst")," to ",Object(r.b)("inlineCode",{parentName:"p"},"backup"),": "),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ python my_app.py db@db.dst:backup\n$ python my_app.py db@db.dst:backup=postgresql # And change the config group option\n")),Object(r.b)("p",null,"Overriding the package of a config group option not in the defaults list:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"python my_app.py +webserver@prod=apache\n")),Object(r.b)("p",null,"For more details, see the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/advanced/command_line_overrides"}),"Command line overrides")," page."),Object(r.b)("h3",{id:"history-and-future-of-the-package-directive"},"History and future of the package directive"),Object(r.b)("p",null,"The primary config, named in ",Object(r.b)("inlineCode",{parentName:"p"},"@hydra.main()")," should not have a package directive."),Object(r.b)("p",null,"For config files in config groups the default depends on the version:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"In ",Object(r.b)("strong",{parentName:"li"},"Hydra 0.11"),", there was an implicit default of ",Object(r.b)("inlineCode",{parentName:"li"},"_global_")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Hydra 1.0")," the default is ",Object(r.b)("inlineCode",{parentName:"li"},"_global_"),Object(r.b)("br",{parentName:"li"}),"A warning is issued for each ",Object(r.b)("strong",{parentName:"li"},"config group file")," without a ",Object(r.b)("inlineCode",{parentName:"li"},"@package")," directive."),Object(r.b)("li",{parentName:"ul"},"In ",Object(r.b)("strong",{parentName:"li"},"Hydra 1.1")," the default for ",Object(r.b)("strong",{parentName:"li"},"config group files")," will become ",Object(r.b)("inlineCode",{parentName:"li"},"_group_"))),Object(r.b)("p",null,"By adding an explicit ",Object(r.b)("inlineCode",{parentName:"p"},"@package")," to your configs files, you guarantee that they",Object(r.b)("br",{parentName:"p"}),"\n","will not break when you upgrade to Hydra 1.1."))}b.isMDXComponent=!0},243:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=i.a.createContext({}),b=function(e){var t=i.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=b(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},g=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=b(a),g=n,m=d["".concat(c,".").concat(g)]||d[g]||s[g]||r;return a?i.a.createElement(m,o(o({ref:t},p),{},{components:a})):i.a.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var p=2;p<r;p++)c[p]=a[p];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,a)}g.displayName="MDXCreateElement"}}]);