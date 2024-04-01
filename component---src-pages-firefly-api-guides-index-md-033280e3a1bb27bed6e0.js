"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[6442],{4564:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return u}});var n=a(58168),i=a(80045),o=(a(88763),a(15680)),s=a(83407);const r=["components"],d={},p=(c="InlineAlert",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)});var c;const l={_frontmatter:d},m=s.A;function u(e){let{components:t}=e,a=(0,i.A)(e,r);return(0,o.mdx)(m,(0,n.A)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"quickstart-guide"},"Quickstart Guide"),(0,o.mdx)("p",null,"This guide will show you how to make your first successful call to the Firefly ",(0,o.mdx)("a",{parentName:"p",href:"./api/image_generation/"},"Text to Image API"),"."),(0,o.mdx)("p",null,"You need a valid API key and an access token to call the Firefly Text To Image endpoint. If you don't have an API key (aka: client id) or access token yet, visit the ",(0,o.mdx)("a",{parentName:"p",href:"../../guides/get-started.md/"},"Getting Started guide")," for instructions."),(0,o.mdx)("p",null,"If you already have a project configured with Firefly Services in the ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/console"},"Adobe Developer Console"),", you can generate an access token there, or use the credentials from it (client ID and client secret) to generate an access token with the following ",(0,o.mdx)("inlineCode",{parentName:"p"},"curl")," command, replacing the",(0,o.mdx)("inlineCode",{parentName:"p"},"{CLIENT_ID}")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"{CLIENT_SECRET}")," values with your own."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},"curl -X POST 'https://ims-na1.adobelogin.com/ims/token/v3' \\\n-H 'Content-Type: application/x-www-form-urlencoded' \\\n-d 'grant_type=client_credentials&client_id={CLIENT_ID}&client_secret={CLIENT_SECRET}&scope=openid,AdobeID,session,additional_info,read_organizations,firefly_api,ff_apis'\n")),(0,o.mdx)(p,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"Access tokens expire every 24 hours and it is wise that you rotate them programmatically before they expire. The token endpoint above returns expiry information alongside the token itself. Read more about this in our ",(0,o.mdx)("a",{parentName:"p",href:"./concepts/authentication/index.md"},"auth guide"),". Once you have this token, you are ready to make your first request to the text-to-image endpoint."),(0,o.mdx)("p",null,"Now, replace your API key and access token in the example below, and you're all set to make your first request to the text-to-image endpoint."),(0,o.mdx)("h2",{id:"request-headers"},"Request Headers"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"X-Api-Key"),": This is a required parameter -- provide your client ID from the Developer Console project."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Authorization"),": This is a required header -- provide your access token."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Content-Type"),": Specifies the media type of the request body.")),(0,o.mdx)("h2",{id:"example-request"},"Example Request"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-bash"},'curl --location \'https://firefly-api.adobe.io/v2/images/generate\' \\\n--header \'X-Api-Key: {CLIENT_ID}\' \\\n--header \'Authorization: {ACCESS_TOKEN}\' \\\n--header \'Content-Type: application/json\' \\\n--data \'{\n    "n": 1,\n    "prompt": "Horse on a field.",\n    "contentClass": "photo",\n    "size": {\n        "width": 2048,\n        "height": 2048\n    },\n    "styles": {\n        "presets": ["concept_art"]\n    } \n}\'\n')),(0,o.mdx)("h2",{id:"responses"},"Responses"),(0,o.mdx)("p",null,"Got a 200 response code? Great! Your API call was successful. Here is an example response:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "version": "2.10.2",\n  "size": {\n    "width": 2048,\n    "height": 2048\n  },\n  "predictedPhotoSettings": {\n    "aperture": 5.6,\n    "shutterSpeed": 0.0005,\n    "fieldOfView": 50\n  },\n  "outputs": [\n    {\n      "seed": 290878684,\n      "image": {\n          "id": "{IMAGE_ID}",\n          "presignedUrl": "https://pre-signed-firefly-prod.s3.amazonaws.com/images/{IMAGE_ID}?..."\n      }\n    }\n  ]\n}\n')),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/ff-services-docs/static/4d8844ed89ddcd8b51aa520ec6c75b32/5530d/horse_t2i_sample.webp 320w","/ff-services-docs/static/4d8844ed89ddcd8b51aa520ec6c75b32/0c8fb/horse_t2i_sample.webp 640w","/ff-services-docs/static/4d8844ed89ddcd8b51aa520ec6c75b32/94b1e/horse_t2i_sample.webp 1280w","/ff-services-docs/static/4d8844ed89ddcd8b51aa520ec6c75b32/0b34d/horse_t2i_sample.webp 1920w","/ff-services-docs/static/4d8844ed89ddcd8b51aa520ec6c75b32/96d48/horse_t2i_sample.webp 2048w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/ff-services-docs/static/4d8844ed89ddcd8b51aa520ec6c75b32/8980b/horse_t2i_sample.jpg 320w","/ff-services-docs/static/4d8844ed89ddcd8b51aa520ec6c75b32/56d4e/horse_t2i_sample.jpg 640w","/ff-services-docs/static/4d8844ed89ddcd8b51aa520ec6c75b32/62aaf/horse_t2i_sample.jpg 1280w","/ff-services-docs/static/4d8844ed89ddcd8b51aa520ec6c75b32/aaf92/horse_t2i_sample.jpg 1920w","/ff-services-docs/static/4d8844ed89ddcd8b51aa520ec6c75b32/09658/horse_t2i_sample.jpg 2048w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/jpeg"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/ff-services-docs/static/4d8844ed89ddcd8b51aa520ec6c75b32/62aaf/horse_t2i_sample.jpg",alt:"Horse on a field, photo, concept_art",title:"Horse on a field, photo, concept_art",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("h3",{id:"error-codes"},"Error Codes"),(0,o.mdx)("p",null,"To learn more about each response code, head over to the ",(0,o.mdx)("a",{parentName:"p",href:"../guides/api/upload_image/index.md"},(0,o.mdx)("strong",{parentName:"a"},"Try it")," (Responses)")," section."),(0,o.mdx)("h3",{id:"rate-limits"},"Rate Limits"),(0,o.mdx)("p",null,"Read more about the text-to-image API's throttling limits ",(0,o.mdx)("a",{parentName:"p",href:"./concepts/rate-limits/index.md"},"here")),(0,o.mdx)("h2",{id:"try-it-yourself"},"Try it yourself"),(0,o.mdx)("p",null,"Go ahead and try making calls using the ",(0,o.mdx)("strong",{parentName:"p"},"Try it")," feature on the ",(0,o.mdx)("strong",{parentName:"p"},"API Reference")," page. Configure the headers and send a request. Once you get a 200 response code, the response body will contain a pre-signed URL of your image."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-firefly-api-guides-index-md-033280e3a1bb27bed6e0.js.map