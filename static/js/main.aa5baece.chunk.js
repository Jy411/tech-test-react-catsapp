(this["webpackJsonptech-test-react-catsapp"]=this["webpackJsonptech-test-react-catsapp"]||[]).push([[0],{138:function(e,t,a){e.exports=a(173)},168:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){},172:function(e,t,a){},173:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(19),l=a.n(r),o=a(16),i=a(10),s=a(6),C=(a(80),a(13)),m=a(62),d=Object(m.b)({name:"feed",initialState:{catArr:[],likedCats:[],dataLoaded:!1},reducers:{addLikeCat:function(e,t){e.likedCats.push(t.payload)},removeLikeCat:function(e,t){var a=e.likedCats.findIndex((function(e){return e.id===t.payload.id}));-1!==a&&e.likedCats.splice(a,1)},storeCat:function(e,t){e.catArr.push(t.payload)},updateSplash:function(e,t){e.dataLoaded=t.payload}}}),u=d.actions,f=u.addLikeCat,E=u.removeLikeCat,p=u.storeCat,h=u.updateSplash,w=d.reducer,g=(a(81),function(){var e=Object(C.b)(),t=a(81);return Object(n.useEffect)((function(){t.get("https://cdn.ivodigital.com/catsapp/felines.json").then((function(t){t.data.data.map((function(t){e(p(t))}))})).catch((function(e){console.log(e)})).then((function(){setTimeout((function(){e(h(!0))}),2e3)}))}),[]),c.a.createElement("div",{className:"splashContainer"},c.a.createElement("svg",{width:"70",height:"70",viewBox:"0 0 70 70",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M23.3459 0.0781675C22.3725 0.362857 21.6944 0.781518 20.9725 1.52952C19.742 2.80225 18.9819 4.57737 18.7248 6.78232C18.5389 8.40114 18.7358 9.80784 19.3319 11.0917C19.6217 11.7225 19.8295 12.0407 20.2561 12.4929C21.0272 13.3134 21.8748 13.7321 22.7881 13.7321C23.2967 13.7321 23.6577 13.6316 24.2264 13.3413C26.2116 12.3254 27.6116 10.0479 27.978 7.2568C28.1256 6.11804 28.0272 4.44898 27.7483 3.47769C27.2998 1.89795 26.2116 0.6308 24.8991 0.1619C24.4944 0.0167646 23.6959 -0.0278933 23.3459 0.0781675Z",fill:"#A88E74"}),c.a.createElement("path",{d:"M10.2812 0.267937C8.95228 0.714508 7.85306 2.04864 7.43744 3.7177C7.37728 3.94657 7.30072 4.51036 7.26244 4.9681C7.04369 7.71451 7.9679 10.5056 9.67415 12.2249C10.3523 12.9115 11.3148 13.5032 12.0859 13.7097C13.1906 14.0056 14.6452 13.3525 15.4437 12.2025C16.2093 11.1029 16.5702 9.81897 16.5702 8.17783C16.5702 7.20653 16.4718 6.4362 16.2421 5.53747C15.5695 2.90829 14.0984 1.0606 12.0859 0.334923C11.5937 0.156294 10.7132 0.122801 10.2812 0.267937Z",fill:"#A88E74"}),c.a.createElement("path",{d:"M31.3906 10.9187C30.1218 11.1922 28.8257 12.0965 27.9453 13.3078C27.0703 14.5247 26.5398 15.8923 26.3046 17.5391C26.1734 18.4713 26.1679 18.8397 26.2773 19.5375C26.4523 20.6371 26.8898 21.5805 27.5351 22.2448C27.9836 22.7081 28.4101 22.9761 28.9461 23.1156C30.1601 23.445 31.7406 22.8979 32.9929 21.7145C33.8023 20.9553 34.6664 19.5375 35.0546 18.3261C35.4156 17.2153 35.5906 15.7919 35.4921 14.815C35.4046 13.9442 35.0656 12.9729 34.6226 12.3142C34.4695 12.0853 34.0046 11.6053 33.7421 11.3987C33.1187 10.9075 32.2437 10.7289 31.3906 10.9187Z",fill:"#A88E74"}),c.a.createElement("path",{d:"M3.0898 11.5941C1.69527 11.8118 0.639801 12.7384 0.273395 14.067C-4.23656e-05 15.0718 -0.0656674 16.138 0.0874576 17.1874C0.355426 19.0407 1.14839 20.7097 2.35152 21.9434C3.1773 22.7863 3.93746 23.2719 4.97652 23.6236C6.20699 24.0311 7.29527 23.7353 8.18121 22.7584C8.93589 21.9266 9.22574 21.0726 9.28042 19.5096C9.3023 18.8118 9.29136 18.555 9.19292 17.9801C8.89214 16.177 8.13199 14.6643 6.89605 13.3916C6.0648 12.5375 5.1023 11.8955 4.35855 11.7002C4.03043 11.6108 3.33589 11.555 3.0898 11.5941Z",fill:"#A88E74"}),c.a.createElement("path",{d:"M17.2375 18.756C14.6617 19.0909 12.1516 20.6092 10.5711 22.803C9.23125 24.6563 8.19766 26.5821 7.525 28.4912C7.07109 29.7695 6.67188 31.4665 6.67188 32.1307C6.67188 33.6379 7.61797 35.1339 8.91406 35.6754C9.41172 35.8819 10.0297 35.9713 10.6094 35.921C11.6539 35.8373 12.3648 35.6419 14.2461 34.9162C16.2586 34.1403 16.7781 33.9952 17.9812 33.85C19.6273 33.6491 20.7266 33.8835 23.1328 34.933C25.2601 35.8596 25.7414 36.0047 26.6328 36.0047C28.3008 36.0047 29.6351 35.1116 30.0398 33.7272C30.182 33.2248 30.1929 31.9744 30.0562 31.3995C29.7117 29.9481 29.0828 28.4912 28.1203 26.9059C25.9601 23.3501 24.2922 21.3796 22.2851 20.0119C21.3937 19.4035 20.5461 19.0351 19.5726 18.8397C19.0695 18.7336 17.768 18.689 17.2375 18.756Z",fill:"#A88E74"}),c.a.createElement("path",{d:"M57.7773 34.079C55.5953 34.6818 53.9328 36.8254 53.3476 39.7895C52.839 42.3628 53.2382 44.6069 54.4851 46.2145C55.3492 47.3254 56.7492 47.9282 57.8484 47.6659C58.2586 47.5654 59.0625 47.1467 59.5328 46.7895C60.807 45.8126 61.764 44.2719 62.2125 42.4801C62.4586 41.4976 62.5242 40.8222 62.4914 39.689C62.4476 38.1539 62.289 37.3892 61.8133 36.4402C61.3429 35.5024 60.7086 34.8102 59.9429 34.3971C59.232 34.0176 58.4281 33.9003 57.7773 34.079Z",fill:"#A88E74"}),c.a.createElement("path",{d:"M45.0296 34.1906C43.7882 34.4194 42.596 35.6196 42.0656 37.177C41.6226 38.4721 41.5953 40.5765 41.9945 42.1842C42.6671 44.8636 44.1875 46.8006 46.2382 47.5877C46.6812 47.7607 47.3046 47.7942 47.7968 47.677C49.3335 47.303 50.482 45.8628 50.9195 43.7472C51.0617 43.0773 51.089 41.6036 50.9742 40.8054C50.5312 37.6682 48.9781 35.2958 46.7906 34.4083C46.4351 34.2631 45.6367 34.0845 45.4562 34.1124C45.4343 34.1124 45.2429 34.1515 45.0296 34.1906Z",fill:"#A88E74"}),c.a.createElement("path",{d:"M66.2539 44.8301C63.7984 45.1651 61.7039 47.4147 60.9547 50.5184C60.7468 51.3947 60.6429 52.4442 60.7031 53.1029C60.8179 54.3421 61.2445 55.4027 61.9336 56.1452C62.7593 57.0383 63.6125 57.3397 64.75 57.1388C67.0742 56.7257 69.1195 54.3756 69.7758 51.3724C69.9289 50.6747 70.0219 49.5917 69.9781 48.9777C69.8687 47.37 69.0594 45.8628 67.9492 45.2097C67.4406 44.9083 66.7679 44.7576 66.2539 44.8301Z",fill:"#A88E74"}),c.a.createElement("path",{d:"M37.242 45.6395C36.3287 45.8349 35.4592 46.5048 35.0381 47.3253C34.4857 48.3971 34.3271 50.1555 34.6443 51.724C34.874 52.8572 35.4756 54.2248 36.1263 55.1124C37.4771 56.9433 39.6264 58.0653 41.1248 57.7137C41.6225 57.5964 42.06 57.3229 42.5467 56.8261C43.4162 55.9441 43.7498 54.9505 43.7607 53.2535C43.7662 51.4617 43.2084 49.748 42.1201 48.2296C41.7154 47.6658 40.8623 46.8174 40.3373 46.4601C39.1724 45.6563 38.2592 45.4162 37.242 45.6395Z",fill:"#A88E74"}),c.a.createElement("path",{d:"M51.5976 52.7568C49.8093 53.0024 48.0921 53.8062 46.5663 55.1069C45.9046 55.6707 45.4069 56.2512 44.696 57.2895C43.0335 59.7065 42.0491 61.8612 41.4147 64.4737C41.1905 65.378 41.1577 65.5845 41.1577 66.1204C41.1577 66.6116 41.1796 66.8182 41.2835 67.1531C41.6827 68.4649 42.5249 69.386 43.6569 69.7488C44.0124 69.866 44.1929 69.8884 44.7562 69.8884C45.9101 69.8884 46.5772 69.7209 48.8304 68.8557C50.8812 68.0742 51.3132 67.9514 52.5272 67.8174C54.146 67.6388 55.2507 67.8844 57.7882 68.9896C59.9046 69.9051 60.3858 70.0391 61.3593 69.9777C62.3765 69.9163 63.1147 69.6037 63.7436 68.9673C64.4382 68.2695 64.6788 67.5271 64.6241 66.2879C64.5421 64.5072 63.6616 62.4753 61.6108 59.3381C59.9593 56.8038 58.4663 55.1571 56.7874 54.0183C55.8796 53.4043 55.0866 53.0526 54.1241 52.8349C53.6483 52.7289 52.139 52.6786 51.5976 52.7568Z",fill:"#A88E74"})),c.a.createElement("p",{className:"splashTitle defaultFont"},"Catsat"))}),v=(a(168),a(29)),b=function(e){var t=e.cat,a=t.id,n=Object(C.b)(),r=Object(C.c)((function(e){return e.feed.likedCats}));return c.a.createElement("div",{className:"catCard",style:{backgroundColor:e.cardColor}},c.a.createElement(v.b,{to:"/detail/".concat(a)},c.a.createElement("div",{className:"catPhotoContainer"},c.a.createElement("img",{className:"catPhoto",src:e.imgSrc,width:"160px",height:"140px",alt:"meow"}))),c.a.createElement("div",{className:"catInfoContainer"},c.a.createElement("div",{className:"leftCol"},c.a.createElement("span",{className:"catName"},e.catName),c.a.createElement("br",null),c.a.createElement("span",{className:"catOwner"},"Owned by",c.a.createElement("br",null),e.ownerName)),c.a.createElement("div",{className:"rightCol"},c.a.createElement("svg",{onClick:function(){return function(e){r.includes(e)?n(E(e)):n(f(e))}(t)},width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("circle",{cx:"18",cy:"18",r:"18",fill:"white"}),c.a.createElement("path",{d:"M25.3667 12.8417C24.9411 12.4158 24.4357 12.078 23.8795 11.8476C23.3233 11.6171 22.7271 11.4985 22.1251 11.4985C21.523 11.4985 20.9268 11.6171 20.3706 11.8476C19.8144 12.078 19.309 12.4158 18.8834 12.8417L18.0001 13.725L17.1167 12.8417C16.257 11.9819 15.0909 11.4989 13.8751 11.4989C12.6592 11.4989 11.4931 11.9819 10.6334 12.8417C9.77365 13.7014 9.29065 14.8675 9.29065 16.0833C9.29065 17.2992 9.77365 18.4653 10.6334 19.325L11.5167 20.2083L18.0001 26.6917L24.4834 20.2083L25.3667 19.325C25.7926 18.8994 26.1304 18.394 26.3608 17.8378C26.5913 17.2816 26.7099 16.6854 26.7099 16.0833C26.7099 15.4813 26.5913 14.8851 26.3608 14.3289C26.1304 13.7727 25.7926 13.2673 25.3667 12.8417Z",fill:r.includes(t)?"#F46D5C":"none",stroke:"#F46D5C","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})))))},k=function(e){var t=e.catData;return c.a.createElement(o.Grid,{xs:12,justify:"space-evenly",alignItems:"center"},c.a.createElement(b,{cat:t,cardColor:t.background_color,imgSrc:t.image_url,catName:t.name,ownerName:t.owner.name,id:t.id}))},N=(a(170),function(){var e=Object(C.c)((function(e){return e.feed.likedCats}));return c.a.createElement(c.a.Fragment,null,0===e.length?c.a.createElement(o.Grid,{xs:12,justify:"center",alignItems:"center"},c.a.createElement("p",{className:"textStyle"},"You haven\u2019t liked any cats, you monster.")):e.map((function(e){return c.a.createElement(k,{catData:e})})))}),L=(a(171),a(90),function(){var e=a(90),t=Object(n.useState)(1),r=Object(s.a)(t,2),l=r[0],i=r[1],m=Object(C.c)((function(e){return e.feed.catArr})),d=Object(C.c)((function(e){return e.feed.dataLoaded})),u=function(e){i(e)},f=e({activeBtn:1===l,feedBtn:2===l,feedBtnText:!0}),E=e({feedBtn:1===l,activeBtn:2===l,feedBtnText:!0});return d?c.a.createElement(o.Grid.Container,{justify:"center",alignItems:"center"},c.a.createElement(o.Grid,{xs:24,justify:"center",alignItems:"center"},c.a.createElement("p",{className:"feedHeader defaultFont"},"Catsat")),c.a.createElement(o.Grid,{xs:14,justify:"center",alignItems:"center"},c.a.createElement("p",{className:"feedSubtitle defaultFont"},"Look after cute cats for strangers for free.")),c.a.createElement(o.Grid,{xs:18,justify:"center",alignItems:"center"},c.a.createElement("div",{className:"btnGroup"},c.a.createElement("button",{className:f,onClick:function(){return u(1)}},"All cats"),c.a.createElement(o.Spacer,{x:1}),c.a.createElement("button",{className:E,onClick:function(){return u(2)}},"Liked"))),1===l&&m.map((function(e){return c.a.createElement(k,{key:e.id,catData:e})})),2===l&&c.a.createElement(N,null)):c.a.createElement(g,null)}),j=(a(172),function(){var e=Object(C.b)(),t=Object(C.c)((function(e){return e.feed.likedCats})),a=Object(C.c)((function(e){return e.feed.catArr})),r=Object(n.useState)({id:0,name:"Jeremiah",age:21,description:"This grumpy cat started following me back home while I was taking a walk. It won't leave me now. Please help.",image_url:"https://cataas.com/cat/6010b5d147d128001b7bbb8c",background_color:"#f37171",owner:{name:"Anonymous",phone:"07711223344",email:"deborah@email.com",address:"Keltan House, 115 Mare St, London, E8 4RT"}}),l=Object(s.a)(r,2),o=l[0],m=l[1],d=Object(i.f)().catId;Object(n.useEffect)((function(){a.map((function(e){e.id===parseInt(d)&&(console.log(e),m(e))}))}),[]);return c.a.createElement("div",{className:"container",style:{backgroundColor:o.background_color}},c.a.createElement("div",{className:"imageContainer"},c.a.createElement("img",{src:o.image_url,className:"catImage",alt:"meow meow missing"}),c.a.createElement(v.b,{to:{pathname:"/",state:{dataLoaded:!0}}},c.a.createElement("svg",{className:"closeIcon",width:"36",height:"36",viewBox:"0 0 36 36",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("circle",{cx:"18",cy:"18",r:"18",fill:"white"}),c.a.createElement("path",{d:"M23 13L13 23",stroke:"#143154",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),c.a.createElement("path",{d:"M13 13L23 23",stroke:"#143154",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})))),c.a.createElement("div",{className:"catDetailContainer"},c.a.createElement("div",{className:"nameAgeContainer"},c.a.createElement("span",{className:"name"},o.name),c.a.createElement("span",{className:"age"},o.age," years old")),c.a.createElement("div",{className:"likeBtn"},c.a.createElement("svg",{onClick:function(){return function(a){t.includes(a)?e(E(a)):e(f(a))}(o)},width:"112",height:"36",viewBox:"0 0 112 36",fill:t.includes(o)?"#F46D5C":"none",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("circle",{cx:"18",cy:"18",r:"18",fill:"white"}),c.a.createElement("rect",{width:"112",height:"36",rx:"18",fill:"white"}),c.a.createElement("path",{d:"M41.3666 12.8417C40.941 12.4158 40.4356 12.078 39.8794 11.8476C39.3232 11.6171 38.727 11.4985 38.1249 11.4985C37.5229 11.4985 36.9267 11.6171 36.3705 11.8476C35.8143 12.078 35.3089 12.4158 34.8833 12.8417L33.9999 13.725L33.1166 12.8417C32.2569 11.9819 31.0908 11.4989 29.8749 11.4989C28.6591 11.4989 27.493 11.9819 26.6333 12.8417C25.7735 13.7014 25.2905 14.8675 25.2905 16.0833C25.2905 17.2992 25.7735 18.4653 26.6333 19.325L27.5166 20.2083L33.9999 26.6917L40.4833 20.2083L41.3666 19.325C41.7924 18.8994 42.1302 18.394 42.3607 17.8378C42.5912 17.2816 42.7098 16.6854 42.7098 16.0833C42.7098 15.4813 42.5912 14.8851 42.3607 14.3289C42.1302 13.7727 41.7924 13.2673 41.3666 12.8417V12.8417Z",stroke:"#F46D5C","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),c.a.createElement("path",{d:"M53.2071 23V11.672H55.9591V20.616H60.3431V23H53.2071ZM64.3329 12.488C64.3329 12.6907 64.2903 12.8827 64.2049 13.064C64.1303 13.2347 64.0236 13.384 63.8849 13.512C63.7569 13.64 63.5969 13.7413 63.4049 13.816C63.2236 13.8907 63.0316 13.928 62.8289 13.928C62.4023 13.928 62.0449 13.7893 61.7569 13.512C61.4689 13.224 61.3249 12.8827 61.3249 12.488C61.3249 12.296 61.3623 12.1147 61.4369 11.944C61.5116 11.7627 61.6183 11.608 61.7569 11.48C61.8956 11.352 62.0556 11.2507 62.2369 11.176C62.4183 11.0907 62.6156 11.048 62.8289 11.048C63.0316 11.048 63.2236 11.0853 63.4049 11.16C63.5969 11.2347 63.7569 11.336 63.8849 11.464C64.0236 11.592 64.1303 11.7467 64.2049 11.928C64.2903 12.0987 64.3329 12.2853 64.3329 12.488ZM61.5169 23V15.032H64.1409V23H61.5169ZM74.7793 23H71.5313L68.9233 19.176H68.8753V23H66.2353V10.904H68.8753V18.264H68.9233L71.4673 15.032H74.6513L71.5793 18.632L74.7793 23ZM80.9417 18.104C80.9417 17.688 80.8084 17.3307 80.5417 17.032C80.2857 16.7333 79.8964 16.584 79.3737 16.584C79.1177 16.584 78.883 16.6267 78.6697 16.712C78.4564 16.7867 78.2697 16.8933 78.1097 17.032C77.9497 17.1707 77.8217 17.336 77.7257 17.528C77.6297 17.7093 77.5764 17.9013 77.5657 18.104H80.9417ZM83.3577 19.112C83.3577 19.2187 83.3577 19.3253 83.3577 19.432C83.3577 19.5387 83.3524 19.64 83.3417 19.736H77.5657C77.587 19.96 77.651 20.1627 77.7577 20.344C77.875 20.5253 78.019 20.6853 78.1897 20.824C78.371 20.952 78.5684 21.0533 78.7817 21.128C79.0057 21.2027 79.235 21.24 79.4697 21.24C79.8857 21.24 80.2377 21.1653 80.5257 21.016C80.8137 20.856 81.0484 20.6533 81.2297 20.408L83.0537 21.56C82.6804 22.104 82.1844 22.5253 81.5657 22.824C80.9577 23.112 80.2484 23.256 79.4377 23.256C78.8404 23.256 78.275 23.1653 77.7417 22.984C77.2084 22.792 76.739 22.52 76.3337 22.168C75.939 21.8053 75.6244 21.3627 75.3897 20.84C75.1657 20.3173 75.0537 19.72 75.0537 19.048C75.0537 18.3973 75.1657 17.8107 75.3897 17.288C75.6137 16.7547 75.9177 16.3067 76.3017 15.944C76.6857 15.5707 77.139 15.2827 77.6617 15.08C78.1844 14.8773 78.7497 14.776 79.3577 14.776C79.9444 14.776 80.483 14.8773 80.9737 15.08C81.4644 15.272 81.8857 15.5547 82.2377 15.928C82.5897 16.3013 82.8617 16.7547 83.0537 17.288C83.2564 17.8213 83.3577 18.4293 83.3577 19.112Z",fill:"#F46D5C"})))),c.a.createElement("div",{className:"catBioContainer"},c.a.createElement("div",{className:"catBio"},c.a.createElement("span",null,o.description))),c.a.createElement("div",{className:"ownerBioContainer"},c.a.createElement("span",{className:"ownerName"},"Owned By ",o.owner.name),c.a.createElement("div",{className:"ownerBio"},c.a.createElement("div",{className:"bioCol1"},c.a.createElement("span",null,"Phone"),c.a.createElement("span",null,"Email"),c.a.createElement("span",null,"Location")),c.a.createElement("div",{className:"bioCol2"},c.a.createElement("span",{className:"altFont"},o.owner.phone),c.a.createElement("span",{className:"altFont"},o.owner.email),c.a.createElement("span",{className:"altFont"},o.owner.address)))))}),y=function(){return c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",component:L}),c.a.createElement(i.a,{path:"/detail/:catId",component:j}))},x=function(){return c.a.createElement(y,null)},O=function(){return c.a.createElement(o.GeistProvider,null,c.a.createElement(o.CssBaseline,null),c.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=a(131),B=Object(m.a)({reducer:{feed:w}}),Z=a(134),A=a(135),I=a(136),H=a(137),F=function(e){Object(H.a)(a,e);var t=Object(I.a)(a);function a(){return Object(Z.a)(this,a),t.apply(this,arguments)}return Object(A.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),a}(n.PureComponent),S=Object(i.g)(F);l.a.render(c.a.createElement(C.a,{store:B},c.a.createElement(v.a,null,c.a.createElement(M.a,null,c.a.createElement("title",null,"Catsat"),c.a.createElement("meta",{property:"og:title",content:"Catsat"}),c.a.createElement("meta",{property:"og:site_name",content:"Catsat"})),c.a.createElement(S,null,c.a.createElement(O,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},80:function(e,t,a){}},[[138,1,2]]]);
//# sourceMappingURL=main.aa5baece.chunk.js.map