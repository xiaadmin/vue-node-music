webpackJsonp([0],{"F4+m":function(t,s,e){"use strict";e.d(s,"a",function(){return n});var i=e("4YfN"),a=e.n(i),l=e("R4Sj"),n={computed:a()({},Object(l.c)(["playlist"])),mounted:function(){this.handlePlaylist(this.playlist)},activated:function(){this.handlePlaylist(this.playlist)},watch:{playlist:function(t){this.handlePlaylist(t)}},methods:{handlePlaylist:function(){throw new Error("component must implement handlePlaylist method")}}}},XpMz:function(t,s){},cT8k:function(t,s,e){"use strict";var i=e("4YfN"),a=e.n(i),l=e("9Wym"),n=e("qwAB"),r=e("y/jF"),o=e("9cIF"),c=e("PvFA"),h=e("3Q4o"),d=e("W/7t"),g=e("F4+m"),u=e("R4Sj"),p=Object(h.b)("transform"),y=Object(h.b)("backdrop-filter"),m={mixins:[g.a],name:"MusicList",components:{List:l.a,Scroll:n.a,Loading:r.a},data:function(){return{scrollY:0,vkey:"",index:0}},props:{song:{type:Array,default:null},title:{type:String,default:""},bgimg:{type:String,default:""},rank:{type:Boolean,default:!1}},computed:a()({backgroundimg:function(){return"background-image: url("+this.bgimg+")"}},Object(u.c)(["sequencelist","currentIndex","playlist"])),methods:a()({handlePlaylist:function(t){var s=t.length>0?"60px":"";this.$refs.scroll.$el.style.bottom=s,this.$refs.scroll.refresh()},randomPlayAll:function(){var t=Math.floor(Math.random()*(this.song.length+1));this.setPlayMode(d.a.random),this.selectPlay({list:this.song,index:t}),this._getSongVkey(this.song[t].mid)},_getSongVkey:function(t){var s=this;Object(o.b)(t).then(function(t){s.vkey=t.req_0.data.midurlinfo[0].purl,""===s.vkey&&s.SET_CURRENT_URL("")})},scroll:function(t){this.scrollY=t.y},back:function(){this.$router.back()},selectItem:function(t,s){this.index=s,this._getSongVkey(t.mid),this.selectPlay({list:this.song,index:s})}},Object(u.b)(["selectPlay"]),Object(u.d)({setCurrentIndex:"SET_CURRENT_INDEX",setPlayMode:"SET_PLAY_MODE",SET_CURRENT_URL:"SET_CURRENT_URL"})),mounted:function(){this.imageHeight=this.$refs.backgroundimg.clientHeight,this.maxtranslateY=40-this.imageHeight,this.$refs.scroll.$el.style.top=this.imageHeight+"px"},created:function(){this.probeType=3,this.listenScroll=!0},watch:{vkey:function(){var t=Object(c.c)(this.vkey);this.SET_CURRENT_URL(t),console.log(t)},scrollY:function(t){var s=Math.max(this.maxtranslateY,t),e=0,i=1,a=0,l=Math.abs(t/this.imageHeight);this.$refs.layer.style[p]="translate3d(0, "+s+"px, 0)",t>0?(i=1+l,e=10):a=Math.min(20*l,20),this.$refs.filter.style[y]="blur("+a+"px)",t<this.maxtranslateY?(e=10,this.$refs.backgroundimg.style.paddingTop=0,this.$refs.backgroundimg.style.height="40px",this.$refs.wrapperplay.style.display="none"):(this.$refs.backgroundimg.style.paddingTop="70%",this.$refs.backgroundimg.style.height=0,this.$refs.wrapperplay.style.display=""),this.$refs.backgroundimg.style[p]="scale("+i+")",this.$refs.backgroundimg.style.zIndex=e}}},f={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"musiclist"},[e("div",{staticClass:"back",on:{click:t.back}},[e("i",{staticClass:"icon-back"})]),t._v(" "),e("h1",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),e("div",{ref:"backgroundimg",staticClass:"bg-image",style:t.backgroundimg},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.song.length>0,expression:"song.length > 0"}],ref:"wrapperplay",staticClass:"wrapper-play"},[e("div",{staticClass:"play",on:{click:t.randomPlayAll}},[e("i",{staticClass:"icon-play"}),t._v(" "),e("span",{staticClass:"play-text"},[t._v("随机播放全部")])])]),t._v(" "),e("div",{ref:"filter",staticClass:"filter"})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.song,expression:"song"}],ref:"layer",staticClass:"bg-layer"}),t._v(" "),e("scroll",{ref:"scroll",staticClass:"list",attrs:{"probe-type":t.probeType,"listen-scroll":t.listenScroll,data:t.song},on:{scroll:t.scroll}},[e("div",{staticClass:"song-list-wrapper"},[e("list",{attrs:{songs:t.song,rank:t.rank},on:{select:t.selectItem}})],1),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!this.song.length,expression:"!this.song.length"}],staticClass:"loading-container"},[e("loading")],1)])],1)},staticRenderFns:[]};var v=e("C7Lr")(m,f,!1,function(t){e("XpMz")},"data-v-c47b851a",null);s.a=v.exports}});
//# sourceMappingURL=0.350a444f2dc217c8954c.js.map