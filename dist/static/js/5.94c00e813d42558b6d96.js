webpackJsonp([5],{BRgg:function(t,e,s){"use strict";e.a=function(){var t=o()({},r.b,{_:"1556195229904",g_tk:5381,uin:0,format:"json",inCharset:"utf-8",outCharset:"utf-8",notice:0,platform:"h5",needNewCode:1});return l.a.get("/api/getTopList",{params:t}).then(function(t){return a.a.resolve(t.data)})},e.b=function(t){var e=o()({},r.b,{_:"getUCGI7047995226621737",g_tk:5381,loginUin:0,hostUin:0,format:"json",inCharset:"utf8",outCharset:"utf-8",notice:0,platform:"yqq.json",needNewCode:0,data:'{"detail":{"module":"musicToplist.ToplistInfoServer","method":"GetDetail","param":{"topId":'+t+',"offset":0,"num":50}},"comm":{"ct":24,"cv":0}}'});return l.a.get("/api/getTopMusicList",{params:e}).then(function(t){return a.a.resolve(t.data)})};var n=s("rVsN"),a=s.n(n),i=s("aA9S"),o=s.n(i),r=s("T452"),c=s("1gPV"),l=s.n(c)},Kjo5:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("4YfN"),a=s.n(n),i=s("BRgg"),o=s("T452"),r=s("qwAB"),c=s("y/jF"),l=s("F4+m"),u=s("R4Sj"),p={mixins:[l.a],name:"Rank",components:{Scroll:r.a,Loading:c.a},data:function(){return{topList:[]}},created:function(){this._getTopList()},methods:a()({selectItem:function(t){this.$router.push({path:"/rank/"+t.id}),this.setTopList(t)},handlePlaylist:function(t){var e=t.length>0?"60px":"";this.$refs.rank.style.bottom=e,this.$refs.toplist.refresh()},_getTopList:function(){var t=this;Object(i.a)().then(function(e){e.code===o.a&&(t.topList=e.data.topList)})}},Object(u.d)({setTopList:"SET_TOP_LIST"}))},f={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"rank",staticClass:"rank"},[s("scroll",{ref:"toplist",staticClass:"toplist",attrs:{data:t.topList}},[s("ul",t._l(t.topList,function(e,n){return s("li",{key:n,staticClass:"item",on:{click:function(s){return t.selectItem(e)}}},[s("div",{staticClass:"icon"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.picUrl,expression:"item.picUrl"}],attrs:{width:"100",height:"100",alt:""}})]),t._v(" "),s("ul",{staticClass:"songlist"},t._l(e.songList,function(e,n){return s("li",{key:n,staticClass:"song"},[s("span",[t._v(t._s(n+1))]),t._v(" "),s("span",[t._v(t._s(e.songname)+"-"+t._s(e.singername))])])}),0)])}),0),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!this.topList.length,expression:"!this.topList.length"}],staticClass:"loading-container"},[s("loading")],1)]),t._v(" "),s("router-view")],1)},staticRenderFns:[]};var d=s("C7Lr")(p,f,!1,function(t){s("L80n")},"data-v-7acd75e4",null);e.default=d.exports},L80n:function(t,e){}});
//# sourceMappingURL=5.94c00e813d42558b6d96.js.map