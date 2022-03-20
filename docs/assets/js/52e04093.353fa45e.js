"use strict";(self.webpackChunketlnetdocumentation=self.webpackChunketlnetdocumentation||[]).push([[8122],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9065:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={sidebar_position:8},c="Make a console application",l={unversionedId:"recipes/consoleApplication",id:"recipes/consoleApplication",title:"Make a console application",description:"Making a console application with ETL.NET is dramatically simple thanks to Paillave.EtlNet.ExecutionToolkit extensions.",source:"@site/docs/recipes/8_consoleApplication.md",sourceDirName:"recipes",slug:"/recipes/consoleApplication",permalink:"/Etl.Net/docs/recipes/consoleApplication",editUrl:"https://github.com/paillave/Etl.Net/blob/develop/documentation/docs/recipes/8_consoleApplication.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Handle traces",permalink:"/Etl.Net/docs/recipes/handleTraces"},next:{title:"Get many data",permalink:"/Etl.Net/docs/recipes/getManyData"}},p={},u=[],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"make-a-console-application"},"Make a console application"),(0,a.kt)("p",null,"Making a console application with ETL.NET is dramatically simple thanks to ",(0,a.kt)("inlineCode",{parentName:"p"},"Paillave.EtlNet.ExecutionToolkit")," extensions."),(0,a.kt)("p",null,"This package contains 2 classes that implements the interface ",(0,a.kt)("inlineCode",{parentName:"p"},"ITraceReporter")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SimpleConsoleExecutionDisplay")," to simply display the name of nodes who are completed and shows the number of rows it issued."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AdvancedConsoleExecutionDisplay")," shows from the start all the operators on a text mode scrollable screen. Every second this screen is updated to show the amount of issued row so far for each operator, and to show what operator has completed.")),(0,a.kt)("p",null,"These extensions are actually simple ",(0,a.kt)("a",{parentName:"p",href:"/docs/recipes/handleTraces"},"traces process definitions")," that can be found in the property ",(0,a.kt)("inlineCode",{parentName:"p"},"TraceProcessDefinition")," of the interface ",(0,a.kt)("inlineCode",{parentName:"p"},"ITraceReporter"),". This interface has also a method ",(0,a.kt)("inlineCode",{parentName:"p"},"Initialize")," that must be called right before triggering the process."),(0,a.kt)("p",null,"Here is how to do to show on a simple console the list of tasks that just completed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"var processRunner = StreamProcessRunner.Create<string[]>(DefineProcess);\nITraceReporter traceReporter = new SimpleConsoleExecutionDisplay();\nvar executionOptions = new ExecutionOptions<string[]>\n{\n    TraceProcessDefinition = traceReporter.TraceProcessDefinition,\n};\ntraceReporter.Initialize(structure);\nvar res = await processRunner.ExecuteAsync(args, executionOptions);\n")),(0,a.kt)("p",null,"If a detailed visual report is necessary ",(0,a.kt)("inlineCode",{parentName:"p"},"AdvancedConsoleExecutionDisplay")," shall be used. But this level of detail required the runtime to emit detailed traces:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"var processRunner = StreamProcessRunner.Create<string[]>(DefineProcess);\nITraceReporter traceReporter = new AdvancedConsoleExecutionDisplay();\nvar executionOptions = new ExecutionOptions<string[]>\n{\n    TraceProcessDefinition = traceReporter.TraceProcessDefinition,\n    UseDetailedTraces = true\n};\ntraceReporter.Initialize(structure);\nvar res = await processRunner.ExecuteAsync(args, executionOptions);\n")))}m.isMDXComponent=!0}}]);