"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[8744],{18252:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return r},default:function(){return l}});var s=t(58168),o=t(80045),i=(t(88763),t(15680)),c=t(83407);const n=["components"],r={},d={_frontmatter:r},p=c.A;function l(e){let{components:a}=e,t=(0,o.A)(e,n);return(0,i.mdx)(p,(0,s.A)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"getting-started-with-lightroom-api"},"Getting started with Lightroom API"),(0,i.mdx)("p",null,"The first step in accessing the Lightroom API is making sure your organization is provisioned with access to Firefly Services. Once you have confirmed your have access you will need to create a project in the Adobe Developer Console and obtain a set of credentials. Follow the guide below create a project and make your first ",(0,i.mdx)("inlineCode",{parentName:"p"},"hello world")," call."),(0,i.mdx)("h3",{id:"getting-started-from-the-adobe-developer-console"},"Getting started from the Adobe Developer Console"),(0,i.mdx)("p",null," After you have confirmed you have access to Firefly Services you will need to create a project in the Adobe Developer Console. If you have already obtained a set of credentials you can skip these steps."),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Go to ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/console/home"},"https://developer.adobe.com/console/home")," and ",(0,i.mdx)("strong",{parentName:"p"},"sign in to the Developer Console"),".")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Select ",(0,i.mdx)("strong",{parentName:"p"},"Create new project")," under the ",(0,i.mdx)("strong",{parentName:"p"},"Quick start")," section on the middle of your screen:\n",(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"49.375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/ff-services-docs/static/8f108a9c85f508a21e3522454350e7b3/5530d/CreateNewProjectConsole.webp 320w","/ff-services-docs/static/8f108a9c85f508a21e3522454350e7b3/0c8fb/CreateNewProjectConsole.webp 640w","/ff-services-docs/static/8f108a9c85f508a21e3522454350e7b3/94b1e/CreateNewProjectConsole.webp 1280w","/ff-services-docs/static/8f108a9c85f508a21e3522454350e7b3/183a8/CreateNewProjectConsole.webp 1411w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/ff-services-docs/static/8f108a9c85f508a21e3522454350e7b3/dd4a7/CreateNewProjectConsole.png 320w","/ff-services-docs/static/8f108a9c85f508a21e3522454350e7b3/0f09e/CreateNewProjectConsole.png 640w","/ff-services-docs/static/8f108a9c85f508a21e3522454350e7b3/bbbf7/CreateNewProjectConsole.png 1280w","/ff-services-docs/static/8f108a9c85f508a21e3522454350e7b3/8f817/CreateNewProjectConsole.png 1411w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/ff-services-docs/static/8f108a9c85f508a21e3522454350e7b3/bbbf7/CreateNewProjectConsole.png",alt:"Screenshot",title:"Screenshot",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Choose ",(0,i.mdx)("strong",{parentName:"p"},"Add API"),":\n",(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"46.25%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/ff-services-docs/static/c597f0b26bdb303b1b6336a79d79ae93/5530d/AddAPIConsole.webp 320w","/ff-services-docs/static/c597f0b26bdb303b1b6336a79d79ae93/0c8fb/AddAPIConsole.webp 640w","/ff-services-docs/static/c597f0b26bdb303b1b6336a79d79ae93/94b1e/AddAPIConsole.webp 1280w","/ff-services-docs/static/c597f0b26bdb303b1b6336a79d79ae93/259ac/AddAPIConsole.webp 1349w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/ff-services-docs/static/c597f0b26bdb303b1b6336a79d79ae93/dd4a7/AddAPIConsole.png 320w","/ff-services-docs/static/c597f0b26bdb303b1b6336a79d79ae93/0f09e/AddAPIConsole.png 640w","/ff-services-docs/static/c597f0b26bdb303b1b6336a79d79ae93/bbbf7/AddAPIConsole.png 1280w","/ff-services-docs/static/c597f0b26bdb303b1b6336a79d79ae93/d8823/AddAPIConsole.png 1349w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/ff-services-docs/static/c597f0b26bdb303b1b6336a79d79ae93/bbbf7/AddAPIConsole.png",alt:"Screenshot",title:"Screenshot",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Select the ",(0,i.mdx)("strong",{parentName:"p"},"Lightroom - Firefly Services ")," and click on ",(0,i.mdx)("strong",{parentName:"p"},"Next"),":\n",(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1056px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"42.1875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/ff-services-docs/static/78bfae897dcc7617e26df82d16b96252/5530d/AddAPIConsoleLRFF.webp 320w","/ff-services-docs/static/78bfae897dcc7617e26df82d16b96252/0c8fb/AddAPIConsoleLRFF.webp 640w","/ff-services-docs/static/78bfae897dcc7617e26df82d16b96252/dca56/AddAPIConsoleLRFF.webp 1056w"],sizes:"(max-width: 1056px) 100vw, 1056px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/ff-services-docs/static/78bfae897dcc7617e26df82d16b96252/dd4a7/AddAPIConsoleLRFF.png 320w","/ff-services-docs/static/78bfae897dcc7617e26df82d16b96252/0f09e/AddAPIConsoleLRFF.png 640w","/ff-services-docs/static/78bfae897dcc7617e26df82d16b96252/cb866/AddAPIConsoleLRFF.png 1056w"],sizes:"(max-width: 1056px) 100vw, 1056px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/ff-services-docs/static/78bfae897dcc7617e26df82d16b96252/cb866/AddAPIConsoleLRFF.png",alt:"Screenshot",title:"Screenshot",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Select ",(0,i.mdx)("strong",{parentName:"p"},"Save configured API"),":\n",(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"43.4375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/ff-services-docs/static/ec83b4955ba15e8570f20032d74b24fe/5530d/ServicePrincipalConsole.webp 320w","/ff-services-docs/static/ec83b4955ba15e8570f20032d74b24fe/0c8fb/ServicePrincipalConsole.webp 640w","/ff-services-docs/static/ec83b4955ba15e8570f20032d74b24fe/94b1e/ServicePrincipalConsole.webp 1280w","/ff-services-docs/static/ec83b4955ba15e8570f20032d74b24fe/0b34d/ServicePrincipalConsole.webp 1920w","/ff-services-docs/static/ec83b4955ba15e8570f20032d74b24fe/d5269/ServicePrincipalConsole.webp 2560w","/ff-services-docs/static/ec83b4955ba15e8570f20032d74b24fe/3b2f5/ServicePrincipalConsole.webp 3233w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/ff-services-docs/static/ec83b4955ba15e8570f20032d74b24fe/dd4a7/ServicePrincipalConsole.png 320w","/ff-services-docs/static/ec83b4955ba15e8570f20032d74b24fe/0f09e/ServicePrincipalConsole.png 640w","/ff-services-docs/static/ec83b4955ba15e8570f20032d74b24fe/bbbf7/ServicePrincipalConsole.png 1280w","/ff-services-docs/static/ec83b4955ba15e8570f20032d74b24fe/ac7a9/ServicePrincipalConsole.png 1920w","/ff-services-docs/static/ec83b4955ba15e8570f20032d74b24fe/c7a69/ServicePrincipalConsole.png 2560w","/ff-services-docs/static/ec83b4955ba15e8570f20032d74b24fe/2d526/ServicePrincipalConsole.png 3233w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/ff-services-docs/static/ec83b4955ba15e8570f20032d74b24fe/bbbf7/ServicePrincipalConsole.png",alt:"Screenshot",title:"Screenshot",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "),"\nThe ",(0,i.mdx)("strong",{parentName:"p"},"OAuth Server-to-Server")," authentication method is selected by default. This is the recommended authentication method as the JWT method will be deprecated soon.")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Add the Lightroom API to your project by clicking on ",(0,i.mdx)("strong",{parentName:"p"},"Add to Project")," and selecting ",(0,i.mdx)("strong",{parentName:"p"},"API"),"\n",(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1016px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.8125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/ff-services-docs/static/e9934fa1f0d17928b5004f66e8d45d5f/5530d/AddAnotherAPI.webp 320w","/ff-services-docs/static/e9934fa1f0d17928b5004f66e8d45d5f/0c8fb/AddAnotherAPI.webp 640w","/ff-services-docs/static/e9934fa1f0d17928b5004f66e8d45d5f/de60b/AddAnotherAPI.webp 1016w"],sizes:"(max-width: 1016px) 100vw, 1016px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/ff-services-docs/static/e9934fa1f0d17928b5004f66e8d45d5f/dd4a7/AddAnotherAPI.png 320w","/ff-services-docs/static/e9934fa1f0d17928b5004f66e8d45d5f/0f09e/AddAnotherAPI.png 640w","/ff-services-docs/static/e9934fa1f0d17928b5004f66e8d45d5f/e26aa/AddAnotherAPI.png 1016w"],sizes:"(max-width: 1016px) 100vw, 1016px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/ff-services-docs/static/e9934fa1f0d17928b5004f66e8d45d5f/e26aa/AddAnotherAPI.png",alt:"Screenshot",title:"Screenshot",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Select ",(0,i.mdx)("strong",{parentName:"p"},"Generate access token"),":\n",(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.43750000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/ff-services-docs/static/7f517318a4fd1a1cd85fdc32058c1da0/5530d/GenerateAccessTokenFromConsole.webp 320w","/ff-services-docs/static/7f517318a4fd1a1cd85fdc32058c1da0/0c8fb/GenerateAccessTokenFromConsole.webp 640w","/ff-services-docs/static/7f517318a4fd1a1cd85fdc32058c1da0/94b1e/GenerateAccessTokenFromConsole.webp 1280w","/ff-services-docs/static/7f517318a4fd1a1cd85fdc32058c1da0/5993e/GenerateAccessTokenFromConsole.webp 1415w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/ff-services-docs/static/7f517318a4fd1a1cd85fdc32058c1da0/dd4a7/GenerateAccessTokenFromConsole.png 320w","/ff-services-docs/static/7f517318a4fd1a1cd85fdc32058c1da0/0f09e/GenerateAccessTokenFromConsole.png 640w","/ff-services-docs/static/7f517318a4fd1a1cd85fdc32058c1da0/bbbf7/GenerateAccessTokenFromConsole.png 1280w","/ff-services-docs/static/7f517318a4fd1a1cd85fdc32058c1da0/49e93/GenerateAccessTokenFromConsole.png 1415w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/ff-services-docs/static/7f517318a4fd1a1cd85fdc32058c1da0/bbbf7/GenerateAccessTokenFromConsole.png",alt:"Screenshot",title:"Screenshot",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Congratulations! You have just created a token. You can ",(0,i.mdx)("strong",{parentName:"p"},"copy")," the token :\n",(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"52.5%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/ff-services-docs/static/17eca42c50634b78c8db259887200596/5530d/AccessTokenCurlConsole.webp 320w","/ff-services-docs/static/17eca42c50634b78c8db259887200596/0c8fb/AccessTokenCurlConsole.webp 640w","/ff-services-docs/static/17eca42c50634b78c8db259887200596/94b1e/AccessTokenCurlConsole.webp 1280w","/ff-services-docs/static/17eca42c50634b78c8db259887200596/0b34d/AccessTokenCurlConsole.webp 1920w","/ff-services-docs/static/17eca42c50634b78c8db259887200596/d5269/AccessTokenCurlConsole.webp 2560w","/ff-services-docs/static/17eca42c50634b78c8db259887200596/68fb3/AccessTokenCurlConsole.webp 2879w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/ff-services-docs/static/17eca42c50634b78c8db259887200596/dd4a7/AccessTokenCurlConsole.png 320w","/ff-services-docs/static/17eca42c50634b78c8db259887200596/0f09e/AccessTokenCurlConsole.png 640w","/ff-services-docs/static/17eca42c50634b78c8db259887200596/bbbf7/AccessTokenCurlConsole.png 1280w","/ff-services-docs/static/17eca42c50634b78c8db259887200596/ac7a9/AccessTokenCurlConsole.png 1920w","/ff-services-docs/static/17eca42c50634b78c8db259887200596/c7a69/AccessTokenCurlConsole.png 2560w","/ff-services-docs/static/17eca42c50634b78c8db259887200596/49703/AccessTokenCurlConsole.png 2879w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/ff-services-docs/static/17eca42c50634b78c8db259887200596/bbbf7/AccessTokenCurlConsole.png",alt:"Screenshot",title:"Screenshot",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "))),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Once you’ve created your token, you can follow the steps below to make your first API call."),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Open your terminal and paste the code below."),(0,i.mdx)("li",{parentName:"ul"},'Replace the variables "YOUR_ACCESS_TOKEN" with the token you generated on Adobe I/O Console.'),(0,i.mdx)("li",{parentName:"ul"},"Replace <YOUR_CLIENT_ID>. You can find this on the same page you generated your token on."),(0,i.mdx)("li",{parentName:"ul"},"Once all variables have been replaced you can run the command.")))),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-shell"},'curl --request GET \\\n  --url https://image.adobe.io/pie/psdService/hello \\\n  --header "Authorization: Bearer <YOUR_ACCESS_TOKEN>" \\\n  --header "x-api-key: <YOUR_CLIENT_ID>"\n')),(0,i.mdx)("p",null,"If you are using Windows machine don't use the backslash for the curl commands. e.g"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-shell"},'curl --request GET --url https://image.adobe.io/pie/psdService/hello --header "Authorization: Bearer <YOUR_ACCESS_TOKEN>" --header "x-api-key: <YOUR_CLIENT_ID>"\n')),(0,i.mdx)("p",null,"Congratulations! You just made your first request to the Photoshop API."),(0,i.mdx)("h2",{id:"build-something-cool"},"Build something cool"),(0,i.mdx)("p",null,"Once you've acquired your credentials and Access Token, you're ready to utilize them for building your application with the Lightroom API. Explore our SDK and API Reference for further guidance."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://github.com/Firefly-Services"},"Firefly Services SDK")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"../api/"},"Lightroom API Reference"))))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-lightroom-getting-started-index-md-6af8e680fd12c621ac1d.js.map