(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["instagramblock"],{5435:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{attrs:{id:"instagram-block"}},[o("div",{staticClass:"content",class:e.$mq},[o("div",{class:e.$mq,attrs:{id:"instafeed"},on:{click:function(t){e.prepareOverlay(t),this.toggleOverlayVisability(!0)}}}),o("vue-easy-lightbox",{attrs:{visible:e.overlayVisible,imgs:e.imgs,index:e.index},on:{hide:function(t){return e.toggleOverlayVisability(!1)}},scopedSlots:e._u([{key:"toolbar",fn:function(){return[o("button",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],on:{click:e.props.toolbarMethods.zoomIn}},[e._v("zoom in")]),o("button",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],on:{click:e.props.toolbarMethods.zoomOut}},[e._v("zoom out")]),o("button",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],on:{click:e.props.toolbarMethods.rotateLeft}},[e._v("Anticlockwise rotation")]),o("button",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],on:{click:e.props.toolbarMethods.rotateRight}},[e._v("clockwise rotation")])]},proxy:!0}])}),e._m(0)],1)])},r=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("form",{attrs:{"data-aos":"fade-up",action:"https://www.instagram.com/aleksandrs_sprudzans",target:"_blank",rel:"noopener"}},[o("button",{staticClass:"button",attrs:{type:"submit"}},[e._v("Follow Me On Instagram →")])])}],s=(o("d3b7"),o("bc3a")),i=o.n(s),a=o("c70e"),u=o.n(a),c={name:"InstagramBlock",data:function(){return{isFetching:!1,overlayVisible:!1,index:0,imgs:[]}},mounted:function(){var e=this;this.isFetching=!0,i.a.get("https://aleksandrs94-token-agent.herokuapp.com/token.json").then((function(e){var t=new u.a({accessToken:e.data.token,limit:10,template:'<a class="click" data-aos="fade-up" target="_blank" rel="noopener" aria-label="{{caption}}">\n                      <img class="insta" loading="lazy" title="{{caption}}" src="{{image}}" alt="{{caption}}" />\n                    </a>'});t.run()})).catch((function(e){})).finally((function(){e.isFetching=!1}))},methods:{prepareOverlay:function(e){for(var t=document.querySelectorAll("img.insta"),o=0;o<t.length;o++){var n={};n.src=t[o].src,n.title=t[o].title,this.imgs.push(n),e.toElement.src===t[o].src&&(this.index=o)}},toggleOverlayVisability:function(e){this.overlayVisible=e}}},l=c,p=(o("6a8d"),o("2877")),f=Object(p["a"])(l,n,r,!1,null,null,null);t["default"]=f.exports},"6a8d":function(e,t,o){"use strict";o("fb76")},c70e:function(e,t,o){var n,r,s,i=o("7037").default;o("4de4"),o("4e82"),o("a434"),o("4d63"),o("ac1f"),o("25f0"),o("fb6a"),o("d3b7"),function(o,i){r=[],n=i,s="function"===typeof n?n.apply(t,r):n,void 0===s||(e.exports=s)}(0,(function(){function e(e,t){if(!e)throw new Error(t)}function t(t){e(!t||"object"==i(t),"options must be an object, got "+t+" ("+i(t)+")");var o={accessToken:null,accessTokenTimeout:5e3,after:null,apiTimeout:5e3,debug:!1,error:null,filter:null,limit:null,mock:!1,render:null,sort:null,success:null,target:"instafeed",template:'<a href="{{link}}"><img title="{{caption}}" src="{{image}}" /></a>',templateBoundaries:["{{","}}"],transform:null};if(t)for(var n in o)void 0!==t[n]&&(o[n]=t[n]);e("string"==typeof o.target||"object"==i(o.target),"target must be a string or DOM node, got "+o.target+" ("+i(o.target)+")"),e("string"==typeof o.accessToken||"function"==typeof o.accessToken,"accessToken must be a string or function, got "+o.accessToken+" ("+i(o.accessToken)+")"),e("number"==typeof o.accessTokenTimeout,"accessTokenTimeout must be a number, got "+o.accessTokenTimeout+" ("+i(o.accessTokenTimeout)+")"),e("number"==typeof o.apiTimeout,"apiTimeout must be a number, got "+o.apiTimeout+" ("+i(o.apiTimeout)+")"),e("boolean"==typeof o.debug,"debug must be true or false, got "+o.debug+" ("+i(o.debug)+")"),e("boolean"==typeof o.mock,"mock must be true or false, got "+o.mock+" ("+i(o.mock)+")"),e("object"==i(o.templateBoundaries)&&2===o.templateBoundaries.length&&"string"==typeof o.templateBoundaries[0]&&"string"==typeof o.templateBoundaries[1],"templateBoundaries must be an array of 2 strings, got "+o.templateBoundaries+" ("+i(o.templateBoundaries)+")"),e(!o.template||"string"==typeof o.template,"template must null or string, got "+o.template+" ("+i(o.template)+")"),e(!o.error||"function"==typeof o.error,"error must be null or function, got "+o.error+" ("+i(o.error)+")"),e(!o.after||"function"==typeof o.after,"after must be null or function, got "+o.after+" ("+i(o.after)+")"),e(!o.success||"function"==typeof o.success,"success must be null or function, got "+o.success+" ("+i(o.success)+")"),e(!o.filter||"function"==typeof o.filter,"filter must be null or function, got "+o.filter+" ("+i(o.filter)+")"),e(!o.transform||"function"==typeof o.transform,"transform must be null or function, got "+o.transform+" ("+i(o.transform)+")"),e(!o.sort||"function"==typeof o.sort,"sort must be null or function, got "+o.sort+" ("+i(o.sort)+")"),e(!o.render||"function"==typeof o.render,"render must be null or function, got "+o.render+" ("+i(o.render)+")"),e(!o.limit||"number"==typeof o.limit,"limit must be null or number, got "+o.limit+" ("+i(o.limit)+")"),this._state={running:!1},this._options=o}return t.prototype.run=function(){var e=this,t=null,o=null,n=null,r=null;return this._debug("run","options",this._options),this._debug("run","state",this._state),this._state.running?(this._debug("run","already running, skipping"),!1):(this._state.running=!0,this._debug("run","getting dom node"),(t="string"==typeof this._options.target?document.getElementById(this._options.target):this._options.target)?(this._debug("run","got dom node",t),this._debug("run","getting access token"),this._getAccessToken((function(s,i){if(s)return e._debug("onTokenReceived","error",s),void e._fail(new Error("error getting access token: "+s.message));o="https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token="+i,e._debug("onTokenReceived","request url",o),e._makeApiRequest(o,(function(o,s){if(o)return e._debug("onResponseReceived","error",o),void e._fail(new Error("api request error: "+o.message));e._debug("onResponseReceived","data",s),e._success(s);try{n=e._processData(s),e._debug("onResponseReceived","processed data",n)}catch(t){return void e._fail(t)}if(e._options.mock)e._debug("onResponseReceived","mock enabled, skipping render");else{try{r=e._renderData(n),e._debug("onResponseReceived","html content",r)}catch(t){return void e._fail(t)}t.innerHTML=r}e._finish()}))})),!0):(this._fail(new Error("no element found with ID "+this._options.target)),!1))},t.prototype._processData=function(e){var t="function"==typeof this._options.transform,o="function"==typeof this._options.filter,n="function"==typeof this._options.sort,r="number"==typeof this._options.limit,s=[],a=null,u=null,c=null,l=null;if(this._debug("processData","hasFilter",o,"hasTransform",t,"hasSort",n,"hasLimit",r),"object"!=i(e)||"object"!=i(e.data)||e.data.length<=0)return null;for(var p=0;p<e.data.length;p++){if(u=this._getItemData(e.data[p]),t)try{c=this._options.transform(u),this._debug("processData","transformed item",u,c)}catch(e){throw this._debug("processData","error calling transform",e),new Error("error in transform: "+e.message)}else c=u;if(o){try{l=this._options.filter(c),this._debug("processData","filter item result",c,l)}catch(e){throw this._debug("processData","error calling filter",e),new Error("error in filter: "+e.message)}l&&s.push(c)}else s.push(c)}if(n)try{s.sort(this._options.sort)}catch(e){throw this._debug("processData","error calling sort",e),new Error("error in sort: "+e.message)}return r&&(a=s.length-this._options.limit,this._debug("processData","checking limit",s.length,this._options.limit,a),a>0&&s.splice(s.length-a,a)),s},t.prototype._getItemData=function(e){var t=null,o=null;switch(e.media_type){case"IMAGE":t="image",o=e.media_url;break;case"VIDEO":t="video",o=e.thumbnail_url;break;case"CAROUSEL_ALBUM":t="album",o=e.media_url}return{caption:e.caption,id:e.id,image:o,link:e.permalink,model:e,timestamp:e.timestamp,type:t,username:e.username}},t.prototype._renderData=function(e){var t="string"==typeof this._options.template,o="function"==typeof this._options.render,n=null,r=null,s="";if(this._debug("renderData","hasTemplate",t,"hasRender",o),"object"!=i(e)||e.length<=0)return null;for(var a=0;a<e.length;a++){if(n=e[a],o)try{r=this._options.render(n,this._options),this._debug("renderData","custom render result",n,r)}catch(e){throw this._debug("renderData","error calling render",e),new Error("error in render: "+e.message)}else t&&(r=this._basicRender(n));r?s+=r:this._debug("renderData","render item did not return any content",n)}return s},t.prototype._basicRender=function(e){for(var t=new RegExp(this._options.templateBoundaries[0]+"([\\s\\w.]+)"+this._options.templateBoundaries[1],"gm"),o=this._options.template,n=null,r="",s=0,i=null,a=null;null!==(n=t.exec(o));)i=n[1],r+=o.slice(s,n.index),(a=this._valueForKeyPath(i,e))&&(r+=a.toString()),s=t.lastIndex;return s<o.length&&(r+=o.slice(s,o.length)),r},t.prototype._valueForKeyPath=function(e,t){for(var o=/([\w]+)/gm,n=null,r=t;null!==(n=o.exec(e));){if("object"!=i(r))return null;r=r[n[1]]}return r},t.prototype._fail=function(e){!this._runHook("error",e)&&console&&"function"==typeof console.error&&console.error(e),this._state.running=!1},t.prototype._finish=function(){this._runHook("after"),this._state.running=!1},t.prototype._success=function(e){this._runHook("success",e),this._state.running=!1},t.prototype._makeApiRequest=function(e,t){var o=!1,n=this,r=null,s=function(e,n){o||(o=!0,t(e,n))};(r=new XMLHttpRequest).timeout=this._options.apiTimeout,r.ontimeout=function(e){s(new Error("api request timed out"))},r.onerror=function(e){s(new Error("api connection error"))},r.onload=function(e){var t=r.getResponseHeader("Content-Type"),o=null;if(n._debug("apiRequestOnLoad","loaded",e),n._debug("apiRequestOnLoad","response status",r.status),n._debug("apiRequestOnLoad","response content type",t),t.indexOf("application/json")>=0)try{o=JSON.parse(r.responseText)}catch(e){return n._debug("apiRequestOnLoad","json parsing error",e,r.responseText),void s(new Error("error parsing response json"))}200===r.status?s(null,o):o&&o.error?s(new Error(o.error.code+" "+o.error.message)):s(new Error("status code "+r.status))},r.open("GET",e,!0),r.send()},t.prototype._getAccessToken=function(e){var t=!1,o=this,n=null,r=function(o,r){t||(t=!0,clearTimeout(n),e(o,r))};if("function"==typeof this._options.accessToken){this._debug("getAccessToken","calling accessToken as function"),n=setTimeout((function(){o._debug("getAccessToken","timeout check",t),r(new Error("accessToken timed out"),null)}),this._options.accessTokenTimeout);try{this._options.accessToken((function(e,n){o._debug("getAccessToken","received accessToken callback",t,e,n),r(e,n)}))}catch(e){this._debug("getAccessToken","error invoking the accessToken as function",e),r(e,null)}}else this._debug("getAccessToken","treating accessToken as static",i(this._options.accessToken)),r(null,this._options.accessToken)},t.prototype._debug=function(){var e=null;this._options.debug&&console&&"function"==typeof console.log&&((e=[].slice.call(arguments))[0]="[Instafeed] ["+e[0]+"]",console.log.apply(null,e))},t.prototype._runHook=function(e,t){var o=!1;if("function"==typeof this._options[e])try{this._options[e](t),o=!0}catch(t){this._debug("runHook","error calling hook",e,t)}return o},t}))},fb76:function(e,t,o){}}]);