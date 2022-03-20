"use strict";(self.webpackChunketlnetdocumentation=self.webpackChunketlnetdocumentation||[]).push([[8946],{3905:function(e,t,M){M.d(t,{Zo:function(){return l},kt:function(){return I}});var n=M(67294);function a(e,t,M){return t in e?Object.defineProperty(e,t,{value:M,enumerable:!0,configurable:!0,writable:!0}):e[t]=M,e}function i(e,t){var M=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),M.push.apply(M,n)}return M}function N(e){for(var t=1;t<arguments.length;t++){var M=null!=arguments[t]?arguments[t]:{};t%2?i(Object(M),!0).forEach((function(t){a(e,t,M[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(M)):i(Object(M)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(M,t))}))}return e}function r(e,t){if(null==e)return{};var M,n,a=function(e,t){if(null==e)return{};var M,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)M=i[n],t.indexOf(M)>=0||(a[M]=e[M]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)M=i[n],t.indexOf(M)>=0||Object.prototype.propertyIsEnumerable.call(e,M)&&(a[M]=e[M])}return a}var u=n.createContext({}),j=function(e){var t=n.useContext(u),M=t;return e&&(M="function"==typeof e?e(t):N(N({},t),e)),M},l=function(e){var t=j(e.components);return n.createElement(u.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},D=n.forwardRef((function(e,t){var M=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),D=j(M),I=a,z=D["".concat(u,".").concat(I)]||D[I]||g[I]||i;return M?n.createElement(z,N(N({ref:t},l),{},{components:M})):n.createElement(z,N({ref:t},l))}));function I(e,t){var M=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=M.length,N=new Array(i);N[0]=D;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r.mdxType="string"==typeof e?e:a,N[1]=r;for(var j=2;j<i;j++)N[j]=M[j];return n.createElement.apply(null,N)}return n.createElement.apply(null,M)}D.displayName="MDXCreateElement"},56317:function(e,t,M){M.r(t),M.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return I},frontMatter:function(){return r},metadata:function(){return j},toc:function(){return g}});var n=M(87462),a=M(63366),i=(M(67294),M(3905)),N=["components"],r={sidebar_position:2},u="Installation & Execution",j={unversionedId:"quickstart/installation",id:"quickstart/installation",title:"Installation & Execution",description:"How it works",source:"@site/docs/quickstart/installation.md",sourceDirName:"quickstart",slug:"/quickstart/installation",permalink:"/Etl.Net/docs/quickstart/installation",editUrl:"https://github.com/paillave/Etl.Net/blob/develop/documentation/docs/quickstart/installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"How it works",permalink:"/Etl.Net/docs/quickstart/principle"},next:{title:"Backbone",permalink:"/Etl.Net/docs/tutorials/backbone"}},l={},g=[{value:"ETL.NET packages",id:"etlnet-packages",level:2},{value:"Definition of the ETL process and its execution",id:"definition-of-the-etl-process-and-its-execution",level:2},{value:"Learn more",id:"learn-more",level:2}],D={toc:g};function I(e){var t=e.components,r=(0,a.Z)(e,N);return(0,i.kt)("wrapper",(0,n.Z)({},D,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installation--execution"},"Installation & Execution"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"How it works",src:M(88528).Z,width:"636",height:"300"})),(0,i.kt)("p",null,"No actual installation is necessary. Just add a NuGet reference to the core package into a .NET project. On top of it, add any NuGet reference to the necessary extensions packages depending on what is needed."),(0,i.kt)("p",null,"The core package is ",(0,i.kt)("inlineCode",{parentName:"p"},"Paillave.EtlNet.Core")," that must be referenced into anything that deals with ETL.NET. Other packages ",(0,i.kt)("inlineCode",{parentName:"p"},"Paillave.EtlNet.*")," are extensions."),(0,i.kt)("p",null,"These are the types of extensions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Operators for extra processes, input or output"),(0,i.kt)("li",{parentName:"ul"},"Extra behavior related to the runtime")),(0,i.kt)("p",null,"Once references are added, the ETL process can be described in .NET and run anywhere in the application."),(0,i.kt)("h2",{id:"etlnet-packages"},"ETL.NET packages"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"NuGet Package"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Paillave.EtlNet.Core")),(0,i.kt)("td",{parentName:"tr",align:null},"Core"),(0,i.kt)("td",{parentName:"tr",align:null},"Contains the streaming mechanism, the runtime, and every essential operator that can be expected in any regular ETL")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Paillave.EtlNet.Autofac")),(0,i.kt)("td",{parentName:"tr",align:null},"Runtime extension"),(0,i.kt)("td",{parentName:"tr",align:null},"Some operators like Entity Framework Core extension or Sql Server extension may need some resources to work like a connection. This works using Dependency Injection. ETL.NET offers a very primitive DI implementation out of the box that can be replaced by this autofac wrapper implementation")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Paillave.EtlNet.Dropbox")),(0,i.kt)("td",{parentName:"tr",align:null},"Input/Output"),(0,i.kt)("td",{parentName:"tr",align:null},"Read or write file directly on dropbox")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Paillave.EtlNet.EntityFrameworkCore")),(0,i.kt)("td",{parentName:"tr",align:null},"Input/Output"),(0,i.kt)("td",{parentName:"tr",align:null},"Bulkload, save, upsert, read, make lookups using Entity Framework Core context")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Paillave.EtlNet.ExcelFile")),(0,i.kt)("td",{parentName:"tr",align:null},"Input/Output"),(0,i.kt)("td",{parentName:"tr",align:null},"Read or write Excel files tables")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Paillave.EtlNet.ExecutionToolkit")),(0,i.kt)("td",{parentName:"tr",align:null},"Runtime extension"),(0,i.kt)("td",{parentName:"tr",align:null},"Visualization of processes and libraries to make a console application dedicated to ETL.NET executions")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Paillave.EtlNet.FileSystem")),(0,i.kt)("td",{parentName:"tr",align:null},"Input/Output"),(0,i.kt)("td",{parentName:"tr",align:null},"Read or write files on the local file system")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Paillave.EtlNet.FromConfigurationConnectors")),(0,i.kt)("td",{parentName:"tr",align:null},"Runtime extension"),(0,i.kt)("td",{parentName:"tr",align:null},"Provides connectors to the runtime using a configuration file")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Paillave.EtlNet.Ftp")),(0,i.kt)("td",{parentName:"tr",align:null},"Input/Output"),(0,i.kt)("td",{parentName:"tr",align:null},"Read or write files on FTP or FTPS")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Paillave.EtlNet.Mail")),(0,i.kt)("td",{parentName:"tr",align:null},"Input/Output"),(0,i.kt)("td",{parentName:"tr",align:null},"Send emails, or read emails attached files from SMTP folders")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Paillave.EtlNet.Sftp")),(0,i.kt)("td",{parentName:"tr",align:null},"Input/Output"),(0,i.kt)("td",{parentName:"tr",align:null},"Read or write files on SFTP")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Paillave.EtlNet.SqlServer")),(0,i.kt)("td",{parentName:"tr",align:null},"Input/Output"),(0,i.kt)("td",{parentName:"tr",align:null},"Upsert, read into Sql Server directly using drivers")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Paillave.EtlNet.TextFile")),(0,i.kt)("td",{parentName:"tr",align:null},"Input/Output"),(0,i.kt)("td",{parentName:"tr",align:null},"Parse or create text files in csv (separated or fixed size columns)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Paillave.EtlNet.XmlFile")),(0,i.kt)("td",{parentName:"tr",align:null},"Input/Output"),(0,i.kt)("td",{parentName:"tr",align:null},"Parse XML files. Note: writing XML is not implemented at the moment")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Paillave.EtlNet.Zip")),(0,i.kt)("td",{parentName:"tr",align:null},"Input/Output"),(0,i.kt)("td",{parentName:"tr",align:null},"Read files from zipped files. Note: creating a zip file is not implemented at the moment")))),(0,i.kt)("h2",{id:"definition-of-the-etl-process-and-its-execution"},"Definition of the ETL process and its execution"),(0,i.kt)("p",null,"The definition will be done in a method that receives the trigger stream as a parameter."),(0,i.kt)("p",null,"The execution will be done by calling the runtime."),(0,i.kt)("p",null,"Traces can be handled by a process defined using the stream of events given by the runtime."),(0,i.kt)("p",null,"Here is the simplest way to define and trigger an ETL that starts using a string parameter from the command line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:'title="Program.cs"',title:'"Program.cs"'},'using System;\nusing System.Threading.Tasks;\nusing Paillave.Etl.Core;\n\nnamespace MyEtlApplication\n{\n    class Program\n    {\n        static async Task Main(string[] args)\n        {\n            var processRunner = StreamProcessRunner.Create<string>(DefineProcess);\n            processRunner.DebugNodeStream += (sender, e) => { /* PLACE A CONDITIONAL BREAKPOINT HERE FOR DEBUG ex: e.NodeName == "parse file" */ };\n            var executionOptions = new ExecutionOptions<string> { TraceProcessDefinition = DefineTraceProcess };\n            var res = await processRunner.ExecuteAsync(args[0], executionOptions);\n            Console.Write(res.Failed ? "Failed" : "Succeeded");\n        }\n        private static void DefineProcess(ISingleStream<string> contextStream)\n        {\n            // TODO: Define the ETL process here\n        }\n        private static void DefineTraceProcess(IStream<TraceEvent> traceStream, ISingleStream<string> contentStream)\n        {\n            // TODO: Define the ETL process to handle traces here\n        }\n    }\n}\n')),(0,i.kt)("h2",{id:"learn-more"},"Learn more"),(0,i.kt)("p",null,"Learn about the ",(0,i.kt)("a",{parentName:"p",href:"/docs/tutorials/backbone"},"most essential features"),", and get it touch with ",(0,i.kt)("a",{parentName:"p",href:"/docs/recipes/dealWithFiles"},"common patterns and recipes"),"."))}I.isMDXComponent=!0},88528:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjM2IiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDYzNiAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik00NzYuMjMgMTkyLjdDNDc2LjI0IDE5Mi42MSA0NzYuMjcgMTkyLjUxIDQ3Ni4yOCAxOTIuNDJDNDc4Ljk3IDE3Mi4xOSA0NjYuMzIgMTU1LjEgNDQ4LjA0IDE1NC4yNEM0NDIuMDUgMTUzLjk2IDQzNi4yMyAxNTUuNDggNDMwLjk5IDE1OC4zMkM0MjguNTQgMTM3Ljg5IDQxMy43NyAxMjIuMzIgMzkzLjkxIDEyMS4zOUMzNzQuNDggMTIwLjQ4IDM1Ni4xMiAxMzMuODkgMzQ4LjAyIDE1My4xM0MzNDUuMDUgMTUwLjg0IDM0MS40NSAxNDkuNDEgMzM3LjQxIDE0OS4yM0MzMzQuNDkgMTQ5LjA5IDMzMS42MiAxNDkuNjEgMzI4LjkxIDE1MC42NkMzMjguOTEgMTUwLjY2IDMyNi4zOSAxNzcuNDYgMzI1LjA2IDE3Ny41NUMzMjUuMDYgMTc3LjQ2IDMyNS4wOCAxNzcuMzggMzI1LjA4IDE3Ny4yOUMzMjUuODQgMTU4Ljk3IDMxMi43NyAxMzguNDggMjk3LjQ5IDEzOS40OEMyOTIuNDkgMTM5LjgxIDI4Ny43NSAxNDEuNzMgMjgzLjYgMTQ0Ljc3QzI4MC42MSAxMjguOTIgMjY1LjEzIDEyMC44NiAyNTEuMzYgMTIxLjg1QzIzNS4xMyAxMjMuMDIgMjIwLjgzIDEzNi42NiAyMTUuNSAxNTQuNjJDMjEyLjg2IDE1Mi44NiAyMDUuOTkgMTUyLjE1IDIwMS45NyAxNTMuM0MxOTIuMjYgMTU2LjA4IDE4Ny42MyAxNjQuMDUgMTg3LjM3IDE3NS4xQzE4Ny4zNSAxNzYuMDkgMTg3LjM3IDE3Ny4wNSAxODcuNDUgMTc4QzE0OS4zNiAxOTEuMTggMTYxLjY3IDIyOS4yNyAxNjEuNjkgMjMwLjAyQzE5Mi4xMSAyMzAuMDggNDU4Ljk3IDIyOS43OCA0OTMuMTQgMjMwLjE3QzQ5NC45MSAyMjYuODkgNDk2LjQgMjIyLjQ1IDQ5Ni42NyAyMjAuMzVDNDk4LjYzIDIwNS43IDQ4OS40NiAxOTMuMzMgNDc2LjIzIDE5Mi43WiIgZmlsbD0idXJsKCNwYWludDBfcmFkaWFsKSIvPgo8cGF0aCBkPSJNMzIxLjM2IDU0LjgxMDFIMjA1LjU0VjU3LjU2MDFIMzIxLjM2VjU0LjgxMDFaIiBmaWxsPSIjOTA4RDg5Ii8+CjxwYXRoIGQ9Ik0yMjQuODQgMjE5LjY3SDE4Ny45NVY1Ni40NUwyMjQuODQgMTguOTJWMjE5LjY3Wk0xOTMuNDUgMjE0LjE3SDIxOS4zNFYzMi4zN0wxOTMuNDUgNTguN1YyMTQuMTdaIiBmaWxsPSIjOTA4RDg5Ii8+CjxwYXRoIGQ9Ik0yNjQuMDcgNzMuMDMwMUgxNTcuNDZWNTQuOTQwMUgyNzQuMDRMMjY0LjA3IDczLjAzMDFaTTE2MC4yMSA3MC4yODAxSDI2Mi40NUwyNjkuMzggNTcuNzAwMUgxNjAuMjFWNzAuMjgwMVoiIGZpbGw9IiM5MDhEODkiLz4KPHBhdGggZD0iTTE5MS42MiAyMTYuODFMMTg5LjY3IDIxNC44NkwyMjAuOTYgMTgzLjU4TDE5MC4wNyAxNTIuNjlWMTUwLjc0TDIyMC45NiAxMTkuODVMMTg5Ljg3IDg4Ljc3MDFWODYuODIwMUwyMTkuOSA1Ni43OTAxTDIwNS41IDQyLjM5MDFMMjA3LjQ1IDQwLjQ1MDFMMjIyLjgyIDU1LjgyMDFWNTcuNzcwMUwxOTIuNzkgODcuODAwMUwyMjMuODcgMTE4Ljg4VjEyMC44M0wxOTIuOTkgMTUxLjcyTDIyMy44NyAxODIuNjFWMTg0LjU1TDE5MS42MiAyMTYuODFaIiBmaWxsPSIjOTA4RDg5Ii8+CjxwYXRoIGQ9Ik0yMjEuOTMgMjE2LjgxTDE4OS42NyAxODQuNTVWMTgyLjYxTDIyMC41NiAxNTEuNzJMMTg5LjY3IDEyMC44M1YxMTguODhMMjIwLjc2IDg3LjhMMTkwLjczIDU3Ljc3VjU1LjgyTDIyMS44NyAyNC42N0wyMjMuODIgMjYuNjJMMTkzLjY1IDU2Ljc5TDIyMy42OCA4Ni44MlY4OC43N0wxOTIuNTkgMTE5Ljg1TDIyMy40OCAxNTAuNzRWMTUyLjY5TDE5Mi41OSAxODMuNThMMjIzLjg3IDIxNC44NkwyMjEuOTMgMjE2LjgxWiIgZmlsbD0iIzkwOEQ4OSIvPgo8cGF0aCBkPSJNMTcyLjE5IDIzNC45M0wxNjYuODEgMjMzLjhMMTcwLjkzIDIxNC4wOUgyNDEuNjdMMjQ1LjYxIDIzMi44OUwyNDAuMjIgMjM0LjAyTDIzNy4yIDIxOS41OUgxNzUuNEwxNzIuMTkgMjM0LjkzWiIgZmlsbD0iIzkwOEQ4OSIvPgo8cGF0aCBkPSJNMzI5LjM3IDI3Ni44NEMzMzAuNjEgMjc1LjEzIDM1MS42MyAyNDUuNjYgMzUxLjYxIDIyNS40N0MzNTEuNiAyMDQuODggMzI5LjcyIDE5Ni4zNiAzMjkuMjkgMTk2LjJWMTk2LjE5SDMyOS4yOEgzMjkuMjdWMTk2LjJDMzI4Ljg0IDE5Ni4zNyAzMDYuOTggMjA0LjkxIDMwNi45OSAyMjUuNUMzMDcgMjQ1LjY5IDMyOC4wNiAyNzUuMTMgMzI5LjMgMjc2Ljg0VjI3Ni45MkMzMjkuMyAyNzYuOTIgMzI5LjMyIDI3Ni44OSAzMjkuMzMgMjc2Ljg4QzMyOS4zNCAyNzYuODkgMzI5LjM2IDI3Ni45MiAzMjkuMzYgMjc2LjkyTDMyOS4zNyAyNzYuODRaIiBmaWxsPSIjRjdCNTQ4Ii8+CjxwYXRoIGQ9Ik0zMjguNDQgMjAxLjIzQzMyOC40NCAyMDEuMjMgMzE3LjE2IDIwOS4yNCAzMTQuMSAyMjIuMDlDMzEyLjk5IDIyNi43NCAzMTQuMTEgMjM1LjA2IDMxNC4xMSAyMzUuMDZMMzE4Ljk3IDIzMC41N0MzMTguOTcgMjMwLjU3IDMxOS41MyAyMzguMDkgMzI0LjUxIDI0NC4zOUMzMjkuNDkgMjUwLjY5IDMyOS40OSAyNTguNTcgMzI5LjQ5IDI1OC41N0MzMjkuNDkgMjU4LjU3IDMzNS40IDI1MS42MiAzMzcuMzYgMjQ3LjA1QzM0MS45MSAyMzYuMzggMzM3LjkgMjI1LjEgMzM3LjkgMjI1LjFDMzM3LjkgMjI1LjEgMzQzLjQzIDIyOC45OCAzNDQuOTUgMjMxLjc2QzM0NS4xOSAyMjYuMSAzNDYuNDEgMjEwLjQzIDMyOC40NCAyMDEuMjNaIiBmaWxsPSIjRkZFNUI5Ii8+CjxwYXRoIGQ9Ik0zNjAuNDkgMTQ4Ljk1TDM4NC43NiAxNzYuNUwzODAuNzEgMjMwLjMxSDM3NC40OUMzNzQuNDkgMjMwLjMxIDM2Ny45NCAyMDQuODIgMzQ4LjkyIDE5NC43NkMzMzQuMzEgMTg3LjAzIDM2MC40OSAxNDguOTUgMzYwLjQ5IDE0OC45NVoiIGZpbGw9IiNCMkIyQjIiLz4KPHBhdGggZD0iTTI5OC45IDE0OC45OUwyNzQuNjcgMTc2LjU3TDI3OC43OSAyMzAuMzdIMjg1LjAxQzI4NS4wMSAyMzAuMzcgMjkxLjUzIDIwNC44OCAzMTAuNTQgMTk0Ljc5QzMyNS4xNCAxODcuMDQgMjk4LjkgMTQ4Ljk5IDI5OC45IDE0OC45OVoiIGZpbGw9IiMzM0Q1RjkiLz4KPHBhdGggZD0iTTM2MC40OSAxNDguOTVMMzg0Ljc2IDE3Ni41TDM4MC43MSAyMzAuMzFIMzc0LjQ5QzM3NC40OSAyMzAuMzEgMzY3Ljk0IDIwNC44MiAzNDguOTIgMTk0Ljc2QzMzNC4zMSAxODcuMDMgMzYwLjQ5IDE0OC45NSAzNjAuNDkgMTQ4Ljk1WiIgZmlsbD0iIzMzRDVGOSIvPgo8cGF0aCBkPSJNMzU2LjY2IDc2LjU3MDFDMzQ2LjQ2IDQyLjAzMDEgMzI5LjQ4IDI5LjgwMDEgMzI5LjIyIDI5LjYxMDFWMjkuNjAwMUMzMjkuMjIgMjkuNjAwMSAzMjkuMjEgMjkuNjAwMSAzMjkuMjEgMjkuNjEwMUwzMjkuMiAyOS42MDAxVjI5LjYxMDFDMzI4Ljk0IDI5LjgwMDEgMzExLjk3IDQyLjA2MDEgMzAxLjgxIDc2LjYxMDFDMjkxLjU3IDExMS40MyAyOTguMTEgMTY2LjEyIDMwOC4zNiAxOTUuNjhDMzExLjgxIDIwNS42MyAzMjkuMDQgMjA2LjE2IDMyOS4zIDIwNi4xNkgzMjkuMzFIMzI5LjMyQzMyOS41OSAyMDYuMTUgMzQ2LjgyIDIwNS42IDM1MC4yNSAxOTUuNjRDMzYwLjQ2IDE2Ni4wNyAzNjYuOTQgMTExLjM3IDM1Ni42NiA3Ni41NzAxWiIgZmlsbD0iIzFEQUNDQyIvPgo8cGF0aCBkPSJNMzU0LjA2IDY4LjcxQzM1My42MSA2Ny40NiAzNTMuMTYgNjYuMjIgMzUyLjcgNjUuMDRDMzUyLjQzIDY0LjM0IDM1Mi4xNSA2My42OSAzNTEuODcgNjMuMDJDMzUxLjQ0IDYxLjk4IDM1MS4wMSA2MC45NCAzNTAuNTggNTkuOTZDMzUwLjI4IDU5LjI5IDM0OS45OCA1OC42NiAzNDkuNjggNTguMDJDMzQ5LjI1IDU3LjEgMzQ4LjgzIDU2LjE5IDM0OC40IDU1LjMzQzM0OC4wOSA1NC43MSAzNDcuNzkgNTQuMTMgMzQ3LjQ4IDUzLjUzQzM0Ny4wNSA1Mi43IDM0Ni42MiA1MS44OSAzNDYuMTkgNTEuMTFDMzQ1Ljg4IDUwLjU2IDM0NS41OCA1MC4wMiAzNDUuMjggNDkuNUMzNDQuODUgNDguNzUgMzQ0LjQyIDQ4LjAyIDM0My45OSA0Ny4zMkMzNDMuNjkgNDYuODMgMzQzLjQgNDYuMzYgMzQzLjEgNDUuODlDMzQyLjY3IDQ1LjIxIDM0Mi4yNCA0NC41NSAzNDEuODEgNDMuOTJDMzQxLjUzIDQzLjUgMzQxLjI1IDQzLjA5IDM0MC45NyA0Mi42OUMzNDAuNTQgNDIuMDcgMzQwLjExIDQxLjQ4IDMzOS42OSA0MC45QzMzOS40NCA0MC41NSAzMzkuMTggNDAuMiAzMzguOTMgMzkuODdDMzM4LjUgMzkuMyAzMzguMDcgMzguNzcgMzM3LjY2IDM4LjI1QzMzNy40NCAzNy45OCAzMzcuMjIgMzcuNjkgMzM3IDM3LjQzQzMzNi41NiAzNi45IDMzNi4xNSAzNi40MiAzMzUuNzMgMzUuOTRDMzM1LjU2IDM1Ljc0IDMzNS4zOCAzNS41MyAzMzUuMjEgMzUuMzRDMzM0Ljc0IDM0LjgyIDMzNC4zIDM0LjM1IDMzMy44OCAzMy45QzMzMy43OSAzMy44MSAzMzMuNjkgMzMuNjkgMzMzLjYgMzMuNkMzMzIuNTggMzIuNTUgMzMxLjcgMzEuNzIgMzMxIDMxLjFDMzMwLjg2IDMwLjk3IDMzMC43NSAzMC44OCAzMzAuNjIgMzAuNzdDMzMwLjQ0IDMwLjYyIDMzMC4yNSAzMC40NSAzMzAuMTEgMzAuMzNDMzI5Ljk1IDMwLjIgMzI5LjgzIDMwLjEgMzI5LjcyIDMwLjAxQzMyOS42NyAyOS45NyAzMjkuNjEgMjkuOTIgMzI5LjU3IDI5Ljg5QzM1Mi4wMiA4OC45OCAzNTkuNTUgMTQ1LjQ2IDM0My4yMiAyMDIuODRDMzQ2LjM0IDIwMS4yOCAzNDkuMDggMTk5LjAxIDM1MC4yNCAxOTUuNjVDMzYwLjQ2IDE2Ni4wOCAzNjYuOTMgMTExLjM4IDM1Ni42NSA3Ni41N0MzNTYuMDMgNzQuNDkgMzU1LjM5IDcyLjQ5IDM1NC43MyA3MC41N0MzNTQuNTIgNjkuOTMgMzU0LjI5IDY5LjMzIDM1NC4wNiA2OC43MVoiIGZpbGw9IiMxMTg5QTUiLz4KPHBhdGggZD0iTTMyOS4yNSAxMTAuNzRDMzM1LjYwNyAxMTAuNzQgMzQwLjc2IDEwNS41ODcgMzQwLjc2IDk5LjIzQzM0MC43NiA5Mi44NzMyIDMzNS42MDcgODcuNzIgMzI5LjI1IDg3LjcyQzMyMi44OTMgODcuNzIgMzE3Ljc0IDkyLjg3MzIgMzE3Ljc0IDk5LjIzQzMxNy43NCAxMDUuNTg3IDMyMi44OTMgMTEwLjc0IDMyOS4yNSAxMTAuNzRaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMzI5LjI5IDE1MS4xOEMzMjkuMjggMTUxLjE3IDMyOS4yOCAxNTEuMTggMzI5LjI3IDE1MS4xOEMzMjkuMjYgMTUxLjE4IDMyOS4yNiAxNTEuMTggMzI5LjI1IDE1MS4xOFYxNTEuMTlDMzI1LjMgMTUxLjM0IDMyMC45OSAxNzMuNTcgMzIwLjk5IDE3My41N0wzMjguMDcgMjMwLjM1SDMyOC41MkgzMzAuMzVIMzMwLjU3TDMzNy41OCAxNzMuNTZDMzM3LjU4IDE3My41NSAzMzMuMjQgMTUxLjMzIDMyOS4yOSAxNTEuMThaIiBmaWxsPSIjMzNENUY5Ii8+CjxwYXRoIGQ9Ik0zMjkuNTIgNjguMTQwMUMzMzcuODIgNjguMTMwMSAzNDUuNTIgNjYuMjkwMSAzNTEuOTUgNjMuMTQwMUMzNDEuOTYgMzguODAwMSAzMjkuNDQgMjkuNzcwMSAzMjkuMjIgMjkuNjEwMVYyOS42MDAxQzMyOS4yMiAyOS42MDAxIDMyOS4yMSAyOS42MDAxIDMyOS4yMSAyOS42MTAxTDMyOS4yIDI5LjYwMDFWMjkuNjEwMUMzMjguOTcgMjkuNzcwMSAzMTYuNTUgMzguNzcwMSAzMDYuNiA2Mi45NDAxQzMxMy4xMiA2Ni4yMjAxIDMyMS4wMSA2OC4xNTAxIDMyOS41MiA2OC4xNDAxWiIgZmlsbD0iIzMzRDVGOSIvPgo8cGF0aCBkPSJNMzQxLjU1IDY2Ljc5QzM0NS4yNyA2NS45NCAzNDguNzcgNjQuNyAzNTEuOTUgNjMuMTRDMzQyLjg3IDQxLjAzIDMzMS43MSAzMS41NSAzMjkuNTggMjkuODhDMzM0Ljg5IDQyLjAxIDMzOC44IDU0LjM4IDM0MS41NSA2Ni43OVoiIGZpbGw9IiMxREFDQ0MiLz4KPHBhdGggZD0iTTE2Ny41MiAyNzcuMTFIMTUzLjc3VjIzMC4wNUgyOTcuMDVWMjQzLjgxSDE2Ny41MlYyNzcuMTFaIiBmaWxsPSIjOTA4RDg5Ii8+CjxwYXRoIGQ9Ik00OTEuMzcgMjc3LjExSDUwNS4xM1YyMzAuMDVIMzYxLjg1VjI0My44MUg0OTEuMzdWMjc3LjExWiIgZmlsbD0iIzkwOEQ4OSIvPgo8ZGVmcz4KPHJhZGlhbEdyYWRpZW50IGlkPSJwYWludDBfcmFkaWFsIiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDMzOC4wNDcgMjcyLjcpIHNjYWxlKDE4Ny4zNjIgMTc4Ljk2OCkiPgo8c3RvcCBvZmZzZXQ9IjAuMTE1OSIgc3RvcC1jb2xvcj0id2hpdGUiLz4KPHN0b3Agb2Zmc2V0PSIwLjk2OTUiIHN0b3AtY29sb3I9IiNCOEQ2RjciLz4KPC9yYWRpYWxHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K"}}]);