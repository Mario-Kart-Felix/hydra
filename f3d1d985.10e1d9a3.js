(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{236:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return o}));var n=a(2),r=a(9),i=(a(0),a(241)),c={id:"submitit_launcher",title:"Submitit Launcher plugin",sidebar_label:"Submitit Launcher plugin"},l={id:"plugins/submitit_launcher",title:"Submitit Launcher plugin",description:"!PyPI - License",source:"@site/docs/plugins/submitit_launcher.md",permalink:"/docs/next/plugins/submitit_launcher",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/plugins/submitit_launcher.md",version:"next",lastUpdatedBy:"J\xe9r\xe9my Rapin",lastUpdatedAt:1592861674,sidebar_label:"Submitit Launcher plugin",sidebar:"Docs",previous:{title:"RQ Launcher plugin",permalink:"/docs/next/plugins/rq_launcher"},next:{title:"Overriding packages",permalink:"/docs/next/advanced/overriding_packages"}},u=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Example",id:"example",children:[]}],p={rightToc:u};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://pypi.org/project/hydra-submitit-launcher/"}),Object(i.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/pypi/v/hydra-submitit-launcher",alt:"PyPI"}))),"\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/pypi/l/hydra-submitit-launcher",alt:"PyPI - License"})),"\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://img.shields.io/pypi/pyversions/hydra-submitit-launcher",alt:"PyPI - Python Version"})),"\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://pypistats.org/packages/hydra-submitit-launcher"}),Object(i.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/pypi/dm/hydra-submitit-launcher.svg",alt:"PyPI - Downloads"}))),"\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/plugins/hydra_submitit_launcher/example"}),Object(i.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/badge/-Example%20application-informational",alt:"Example application"}))),"\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/plugins/hydra_submitit_launcher"}),Object(i.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/badge/-Plugin%20source-informational",alt:"Plugin source"})))),Object(i.b)("p",null,"The Submitit Launcher plugin provides a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://slurm.schedmd.com/documentation.html"}),"SLURM ")," Launcher based on ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebookincubator/submitit"}),"Submitit"),"."),Object(i.b)("h3",{id:"installation"},"Installation"),Object(i.b)("p",null,"This plugin requires Hydra 1.0 (Release candidate)"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-commandline"}),"$ pip install hydra-submitit-launcher --pre\n")),Object(i.b)("h3",{id:"usage"},"Usage"),Object(i.b)("p",null,"Once installed, add ",Object(i.b)("inlineCode",{parentName:"p"},"hydra/launcher=submitit_slurm")," to your command line. Alternatively, override ",Object(i.b)("inlineCode",{parentName:"p"},"hydra/launcher")," in your config:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"defaults:\n  - hydra/launcher: submitit_slurm\n")),Object(i.b)("p",null,"Note that this plugin expects a valid environment in the target host. usually this means a shared file system between\nthe launching host and the target host."),Object(i.b)("p",null,"Submitit actually implements 2 different launchers: ",Object(i.b)("inlineCode",{parentName:"p"},"submitit_slurm")," to run on a SLURM cluster, and ",Object(i.b)("inlineCode",{parentName:"p"},"submitit_local")," for basic local tests."),Object(i.b)("p",null,"You can discover the slurm launcher parameters with:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"$ python foo.py hydra/launcher=submitit_slurm --cfg hydra -p hydra.launcher\n# @package hydra.launcher\ncls: hydra_plugins.hydra_submitit_launcher.submitit_launcher.SlurmSubmititLauncher\nparams:\n  submitit_folder: ${hydra.sweep.dir}/.submitit/%j\n  timeout_min: 60\n  cpus_per_task: 1\n  gpus_per_node: 0\n  tasks_per_node: 1\n  mem_gb: 4\n  nodes: 1\n  name: ${hydra.job.name}\n  partition: null\n  comment: null\n  constraint: null\n  exclude: null\n  signal_delay_s: 120\n  max_num_timeout: 0\n")),Object(i.b)("p",null,"Similarly, you can discover the local launcher parameters with:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"$ python my_app.py hydra/launcher=submitit_local --cfg hydra -p hydra.launcher\n# @package hydra.launcher\ncls: hydra_plugins.hydra_submitit_launcher.submitit_launcher.LocalSubmititLauncher\nparams:\n  submitit_folder: ${hydra.sweep.dir}/.submitit/%j\n  timeout_min: 60\n  cpus_per_task: 1\n  gpus_per_node: 0\n  tasks_per_node: 1\n  mem_gb: 4\n  nodes: 1\n  name: ${hydra.job.name} \n")),Object(i.b)("p",null,"You can set all these parameters in your configuration file and/or override them in the commandline: "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"python foo.py hydra/launcher=submitit_slurm hydra.launcher.params.timeout_min=3\n")),Object(i.b)("p",null,"For more details, including descriptions for each parameter, check out the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/blob/master/plugins/hydra_submitit_launcher/hydra_plugins/hydra_submitit_launcher/config.py"}),"config file"),". You can also check the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebookincubator/submitit"}),"Submitit documentation"),"."),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("p",null,"An ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/plugins/hydra_submitit_launcher/example"}),"example application")," using this launcher is provided in the plugin repository."),Object(i.b)("p",null,"Starting the app with ",Object(i.b)("inlineCode",{parentName:"p"},"python my_app.py task=1,2,3 -m")," will launch 3 executions (you can override the launcher to run locally for testing by adding ",Object(i.b)("inlineCode",{parentName:"p"},"hydra/launcher=submitit_local"),"):"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"$ python my_app.py task=1,2,3 -m\n[HYDRA] Sweep output dir : multirun/2020-05-28/15-05-22\n[HYDRA]        #0 : task=1\n[HYDRA]        #1 : task=2\n[HYDRA]        #2 : task=3\n")),Object(i.b)("p",null,"You will be able to see the output of the app in the output dir:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-commandline"}),"$ tree\n.\n\u251c\u2500\u2500 0\n\u2502\xa0\xa0 \u2514\u2500\u2500 my_app.log\n\u251c\u2500\u2500 1\n\u2502\xa0\xa0 \u2514\u2500\u2500 my_app.log\n\u251c\u2500\u2500 2\n\u2502\xa0\xa0 \u2514\u2500\u2500 my_app.log\n\u2514\u2500\u2500 multirun.yaml\n\n$ cat 0/my_app.log \n[2020-05-28 15:05:23,511][__main__][INFO] - Process ID 15887 executing task 1 ...\n[2020-05-28 15:05:24,514][submitit][INFO] - Job completed successfully\n")))}o.isMDXComponent=!0},241:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=o(a),m=n,h=s["".concat(c,".").concat(m)]||s[m]||b[m]||i;return a?r.a.createElement(h,l(l({ref:t},p),{},{components:a})):r.a.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var p=2;p<i;p++)c[p]=a[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);