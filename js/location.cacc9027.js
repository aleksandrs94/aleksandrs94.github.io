(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["location"],{"172d":function(e,t,o){"use strict";o.r(t);var n,a,r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"map"}})},s=[],l=o("1da1"),i=(o("96cf"),o("d81d"),o("159b"),o("d3b7"),o("99af"),"AIzaSyADSLr2XDD6vvf7tuLO2_50ihg8RxynEN8"),f="gmapsCallback",m=!!window.google,c=new Promise((function(e,t){n=e,a=t}));function p(){if(m)return c;m=!0,window[f]=function(){return n(window.google)};var e=document.createElement("script");return e.async=!0,e.defer=!0,e.src="https://maps.googleapis.com/maps/api/js?key=".concat(i,"&callback=").concat(f),e.onerror=a,document.querySelector("head").appendChild(e),c}var y=o("6483"),u={name:"Location",data:function(){return{map:null,zoomOut:!0,locations:[{lat:56.955067,lng:24.117528}],mapLatLng:{lat:56.955067,lng:24.117528}}},mounted:function(){this.createMap()},methods:{createMap:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var o,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p();case 2:o=t.sent,e.map=new o.maps.Map(document.getElementById("map"),{zoom:14,center:e.mapLatLng,disableDefaultUI:!0,gestureHandling:"none",styles:y}),e.locations.forEach((function(t){a={url:"img/location.png",scaledSize:new o.maps.Size(50,50),origin:new o.maps.Point(0,0)},n=new o.maps.Marker({position:new o.maps.LatLng(t.lat,t.lng),map:e.map,icon:a}),o.maps.event.addListener(n,"click",(function(t,o){switch(e.map.panTo(e.getPosition()),e.map.zoom){case 14:e.zoomOut=!0,e.map.setZoom(10);break;case 10:e.zoomOut?e.map.setZoom(6):e.map.setZoom(14);break;case 6:e.zoomOut?e.map.setZoom(3):e.map.setZoom(10);break;case 3:e.zoomOut=!1,e.map.setZoom(6);break;default:e.map.setZoom(14)}}))}));case 5:case"end":return t.stop()}}),t)})))()}}},g=u,d=(o("e5ea"),o("2877")),h=Object(d["a"])(g,r,s,!1,null,"300e1664",null);t["default"]=h.exports},6483:function(e){e.exports=JSON.parse('[{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]')},"8fd2":function(e,t,o){},e5ea:function(e,t,o){"use strict";o("8fd2")}}]);
//# sourceMappingURL=location.cacc9027.js.map