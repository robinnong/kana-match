(function(a){function e(e){for(var n,o,s=e[0],c=e[1],p=e[2],k=0,u=[];k<s.length;k++)o=s[k],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&u.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(a[n]=c[n]);l&&l(e);while(u.length)u.shift()();return i.push.apply(i,p||[]),t()}function t(){for(var a,e=0;e<i.length;e++){for(var t=i[e],n=!0,s=1;s<t.length;s++){var c=t[s];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),a=o(o.s=t[0]))}return a}var n={},r={app:0},i=[];function o(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=a,o.c=n,o.d=function(a,e,t){o.o(a,e)||Object.defineProperty(a,e,{enumerable:!0,get:t})},o.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},o.t=function(a,e){if(1&e&&(a=o(a)),8&e)return a;if(4&e&&"object"===typeof a&&a&&a.__esModule)return a;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var n in a)o.d(t,n,function(e){return a[e]}.bind(null,n));return t},o.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return o.d(e,"a",e),e},o.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var p=0;p<s.length;p++)e(s[p]);var l=c;i.push([0,"chunk-vendors"]),t()})({0:function(a,e,t){a.exports=t("56d7")},"0292":function(a,e,t){"use strict";var n=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("section",{staticClass:"chart animate__animated animate__fadeIn"},[t("form",{staticClass:"chartOptions",attrs:{action:""}},[t("div",{staticClass:"fieldset"},[t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:a.chartType,expression:"chartType"}],attrs:{type:"radio",id:"hiragana",name:"type",value:"hiragana",checked:""},domProps:{checked:a._q(a.chartType,"hiragana")},on:{change:function(e){a.chartType="hiragana"}}}),t("label",{attrs:{for:"hiragana"}},[a._v("Hiragana")])]),t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:a.chartType,expression:"chartType"}],attrs:{type:"radio",id:"katakana",name:"type",value:"katakana"},domProps:{checked:a._q(a.chartType,"katakana")},on:{change:function(e){a.chartType="katakana"}}}),t("label",{attrs:{for:"katakana"}},[a._v("Katakana")])])]),t("div",{staticClass:"fieldset"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.checkedFilters,expression:"checkedFilters"}],attrs:{type:"checkbox",id:"basic",value:"basic",checked:""},domProps:{checked:Array.isArray(a.checkedFilters)?a._i(a.checkedFilters,"basic")>-1:a.checkedFilters},on:{change:function(e){var t=a.checkedFilters,n=e.target,r=!!n.checked;if(Array.isArray(t)){var i="basic",o=a._i(t,i);n.checked?o<0&&(a.checkedFilters=t.concat([i])):o>-1&&(a.checkedFilters=t.slice(0,o).concat(t.slice(o+1)))}else a.checkedFilters=r}}}),t("label",{attrs:{for:"basic"}},[a._v("Basic")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.checkedFilters,expression:"checkedFilters"}],attrs:{type:"checkbox",id:"dakuon",value:"dakuon"},domProps:{checked:Array.isArray(a.checkedFilters)?a._i(a.checkedFilters,"dakuon")>-1:a.checkedFilters},on:{change:function(e){var t=a.checkedFilters,n=e.target,r=!!n.checked;if(Array.isArray(t)){var i="dakuon",o=a._i(t,i);n.checked?o<0&&(a.checkedFilters=t.concat([i])):o>-1&&(a.checkedFilters=t.slice(0,o).concat(t.slice(o+1)))}else a.checkedFilters=r}}}),t("label",{attrs:{for:"dakuon"}},[a._v("Dakuon")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.checkedFilters,expression:"checkedFilters"}],attrs:{type:"checkbox",id:"handakuon",value:"handakuon"},domProps:{checked:Array.isArray(a.checkedFilters)?a._i(a.checkedFilters,"handakuon")>-1:a.checkedFilters},on:{change:function(e){var t=a.checkedFilters,n=e.target,r=!!n.checked;if(Array.isArray(t)){var i="handakuon",o=a._i(t,i);n.checked?o<0&&(a.checkedFilters=t.concat([i])):o>-1&&(a.checkedFilters=t.slice(0,o).concat(t.slice(o+1)))}else a.checkedFilters=r}}}),t("label",{attrs:{for:"handakuon"}},[a._v("Handakuon")])])]),t("ul",{staticClass:"hiraganaList"},a._l(a.chart,(function(e,n){return t("li",{key:n},[t("span",{staticClass:"cardKana"},[a._v(a._s(e.kana))]),t("span",{staticClass:"cardRomaji"},[a._v(a._s(e.romaji))])])})),0)])},r=[],i=t("993c"),o=t("713e"),s={name:"Chart",data(){return{chartType:"hiragana",checkedFilters:["basic"]}},computed:{chart:function(){const a=a=>this.checkedFilters.includes(a.type);return"hiragana"===this.chartType?i["a"].filter(e=>a(e)):o["a"].filter(e=>a(e))}}},c=s,p=t("2877"),l=Object(p["a"])(c,n,r,!1,null,null,null);e["a"]=l.exports},"3a62":function(a,e,t){},"56d7":function(a,e,t){"use strict";t.r(e),function(a){t("3a62");var e=t("5ee5"),n=t.n(e),r=t("8c4f"),i=t("612c"),o=t("57da"),s=t("0292"),c=t("cb2c");n.a.use(r["a"]);const p=new r["a"]({mode:"history",base:a,routes:[{path:"/kana-match/",name:"home",component:o["a"]},{path:"/kana-match/chart",name:"chart",component:s["a"]},{path:"/kana-match/quiz/:type",name:"quiz",component:c["a"],props:!0}]});new n.a({router:p,render:a=>a(i["a"])}).$mount("#app")}.call(this,"/")},"57da":function(a,e,t){"use strict";var n=function(){var a=this,e=a.$createElement;a._self._c;return a._m(0)},r=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("section",{staticClass:"wrapper home"},[t("div",{staticClass:"about"},[t("h2",[a._v("About")]),t("p",[a._v("Kana Match is a place where you can test your knowledge of the Japanese kana alphabet. I created this project as a way to practice building a Vue.js app. A work in progress. Feel free to check out the "),t("a",{attrs:{href:"https://github.com/robinnong/robin-nong-beyond-bootcamp"}},[a._v("GitHub repository")]),a._v(" or send me suggestions for features! I'm always looking for user feedback 👋")])])])}],i=t("2877"),o={},s=Object(i["a"])(o,n,r,!1,null,null,null);e["a"]=s.exports},"612c":function(a,e,t){"use strict";var n=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{attrs:{id:"app"}},[t("header",[t("button",{attrs:{"aria-label":"Toggle navigation menu"},on:{click:function(e){a.isOpen=!a.isOpen}}},[t("svg",{attrs:{"aria-hidden":"true",version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"24px",height:"24px",viewBox:"0 0 24 24","enable-background":"new 0 0 24 24","xml:space":"preserve"}},[t("path",{attrs:{fill:"#FFFFFF",d:"M3,18h18v-2H3V18z M3,13h18v-2H3V13z M3,6v2h18V6H3z"}})])]),t("router-link",{attrs:{to:{name:"home"}}},[t("h1",[a._v("Kana Match"),t("span",{attrs:{"aria-hidden":"true"}},[a._v("🔥")])])])],1),t("main",[t("Nav",{class:{navOpen:a.isOpen},on:{"close-nav":a.closeNav}}),t("div",{staticClass:"main"},[t("router-view",{staticClass:"view",on:{"show-modal":function(e){a.isModalOn=!0},"increment-score":function(){return a.score++}}})],1),t("transition",{attrs:{name:"fadeIn"}},[!0===a.isModalOn?t("Modal",{attrs:{finalScore:a.score,result:a.result},on:{"close-modal":a.closeModal}}):a._e()],1)],1)])},r=[],i=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("nav",{on:{click:a.closeNav}},[t("div",[a._m(0),t("router-link",{attrs:{to:{name:"chart"}}},[a._v("Kana")]),a._m(1),t("router-link",{attrs:{to:{name:"quiz",params:{type:"hiragana"}}}},[a._v("Hiragana")]),t("router-link",{attrs:{to:{name:"quiz",params:{type:"katakana"}}}},[a._v("Kanakana")])],1),a._m(2)])},o=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("h3",[t("span",{attrs:{"aria-hidden":"true"}},[a._v("📚")]),a._v(" Charts")])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("h3",[t("span",{attrs:{"aria-hidden":"true"}},[a._v("🎮")]),a._v(" Quizes")])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("p",[a._v("© 2020 "),t("a",{attrs:{href:"https://www.robinnong.com/"}},[a._v("Robin Nong")]),a._v(".")])}],s={name:"Nav",methods:{closeNav(a){this.$emit("close-nav",a)}}},c=s,p=t("2877"),l=Object(p["a"])(c,i,o,!1,null,null,null),k=l.exports,u=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"modalOuter",on:{click:a.closeModal}},[t("div",{staticClass:"modalInner"},[t("h3",{staticClass:"finalMessage"},[a._v(a._s(a.result.message))]),t("p",{staticClass:"grade"},[a._v(a._s(a.result.grade))]),t("p",[a._v(a._s(a.finalScore)+" of 30 matches correct")]),t("button",{attrs:{id:"modalButton"},on:{click:a.closeModal}},[a._v("Exit")])])])},d=[],m={name:"Modal",props:["finalScore","result"],methods:{closeModal(a){this.$emit("close-modal",a)}}},h=m,y=Object(p["a"])(h,u,d,!1,null,null,null),j=y.exports,b={name:"app",components:{Nav:k,Modal:j},data(){return{score:0,isModalOn:!1,isOpen:!1}},computed:{result:function(){return v(this.score)}},methods:{closeNav(){this.isOpen=!1},closeModal(a){(null===a.target.closest(".modalInner")||"modalButton"===a.target.id)&&(this.isModalOn=!1),this.score=0}}};function v(a){return 0===a?{grade:"F",message:"Keep Studying! 😢"}:a>0&&a<15?{grade:"D",message:"Keep Studying! 😢"}:a>15&&a<21?{grade:"C",message:"Keep Studying! 😁"}:a>21&&a<24?{grade:"B",message:"Good Job! 😄"}:a>24&&a<30?{grade:"A",message:"Excellent! 😄"}:30===a?{grade:"A+",message:"Perfect! 🎉"}:void 0}var f=b,_=Object(p["a"])(f,n,r,!1,null,null,null);e["a"]=_.exports},"713e":function(a,e,t){"use strict";const n=[{kana:"ア",romaji:"A",type:"basic"},{kana:"イ",romaji:"I",type:"basic"},{kana:"ウ",romaji:"U",type:"basic"},{kana:"エ",romaji:"E",type:"basic"},{kana:"オ",romaji:"O",type:"basic"},{kana:"カ",romaji:"KA",type:"basic"},{kana:"キ",romaji:"KI",type:"basic"},{kana:"ク",romaji:"KU",type:"basic"},{kana:"ケ",romaji:"KE",type:"basic"},{kana:"コ",romaji:"KO",type:"basic"},{kana:"ガ",romaji:"GA",type:"dakuon"},{kana:"ギ",romaji:"GI",type:"dakuon"},{kana:"グ",romaji:"GU",type:"dakuon"},{kana:"ゲ",romaji:"GE",type:"dakuon"},{kana:"ゴ",romaji:"GO",type:"dakuon"},{kana:"サ",romaji:"SA",type:"basic"},{kana:"シ",romaji:"SHI",type:"basic"},{kana:"ス",romaji:"SU",type:"basic"},{kana:"セ",romaji:"SE",type:"basic"},{kana:"ソ",romaji:"SO",type:"basic"},{kana:"ザ",romaji:"ZA",type:"dakuon"},{kana:"ジ",romaji:"JI",type:"basic"},{kana:"ズ",romaji:"ZU",type:"dakuon"},{kana:"ゼ",romaji:"ZE",type:"dakuon"},{kana:"ゾ",romaji:"ZO",type:"dakuon"},{kana:"タ",romaji:"TA",type:"basic"},{kana:"チ",romaji:"CHI",type:"basic"},{kana:"ツ",romaji:"TSU",type:"basic"},{kana:"テ",romaji:"TE",type:"basic"},{kana:"ト",romaji:"TO",type:"basic"},{kana:"ダ",romaji:"DA",type:"dakuon"},{kana:"ヂ",romaji:"JI",type:"dakuon"},{kana:"ヅ",romaji:"DZU",type:"dakuon"},{kana:"デ",romaji:"DE",type:"dakuon"},{kana:"ド",romaji:"DO",type:"dakuon"},{kana:"ナ",romaji:"NA",type:"basic"},{kana:"ニ",romaji:"NI",type:"basic"},{kana:"ヌ",romaji:"NU",type:"basic"},{kana:"ネ",romaji:"NE",type:"basic"},{kana:"ノ",romaji:"NO",type:"basic"},{kana:"ハ",romaji:"HA",type:"basic"},{kana:"ヒ",romaji:"HI",type:"basic"},{kana:"フ",romaji:"FU",type:"basic"},{kana:"ヘ",romaji:"HE",type:"basic"},{kana:"ホ",romaji:"HO",type:"basic"},{kana:"バ",romaji:"BA",type:"dakuon"},{kana:"ビ",romaji:"BI",type:"dakuon"},{kana:"ブ",romaji:"BU",type:"dakuon"},{kana:"ベ",romaji:"BE",type:"dakuon"},{kana:"ボ",romaji:"BO",type:"dakuon"},{kana:"パ",romaji:"PA",type:"handakuon"},{kana:"ピ",romaji:"PI",type:"handakuon"},{kana:"プ",romaji:"PU",type:"handakuon"},{kana:"ペ",romaji:"PE",type:"handakuon"},{kana:"ポ",romaji:"PO",type:"handakuon"},{kana:"マ",romaji:"MA",type:"basic"},{kana:"ミ",romaji:"MI",type:"basic"},{kana:"ム",romaji:"MU",type:"basic"},{kana:"メ",romaji:"ME",type:"basic"},{kana:"モ",romaji:"MO",type:"basic"},{kana:"ヤ",romaji:"YA",type:"basic"},{kana:"ユ",romaji:"YU",type:"basic"},{kana:"ヨ",romaji:"YO",type:"basic"},{kana:"ラ",romaji:"RA",type:"basic"},{kana:"リ",romaji:"RI",type:"basic"},{kana:"ル",romaji:"RU",type:"basic"},{kana:"レ",romaji:"RE",type:"basic"},{kana:"ロ",romaji:"RO",type:"basic"},{kana:"ワ",romaji:"WA",type:"basic"},{kana:"ヲ",romaji:"WO",type:"basic"},{kana:"ン",romaji:"N",type:"basic"}];e["a"]=n},"993c":function(a,e,t){"use strict";const n=[{kana:"あ",romaji:"A",type:"basic"},{kana:"い",romaji:"I",type:"basic"},{kana:"う",romaji:"U",type:"basic"},{kana:"え",romaji:"E",type:"basic"},{kana:"お",romaji:"O",type:"basic"},{kana:"か",romaji:"KA",type:"basic"},{kana:"き",romaji:"KI",type:"basic"},{kana:"く",romaji:"KU",type:"basic"},{kana:"け",romaji:"KE",type:"basic"},{kana:"こ",romaji:"KO",type:"basic"},{kana:"が",romaji:"GA",type:"dakuon"},{kana:"ぎ",romaji:"GI",type:"dakuon"},{kana:"ぐ",romaji:"GU",type:"dakuon"},{kana:"げ",romaji:"GE",type:"dakuon"},{kana:"ご",romaji:"GO",type:"dakuon"},{kana:"さ",romaji:"SA",type:"basic"},{kana:"し",romaji:"SHI",type:"basic"},{kana:"す",romaji:"SU",type:"basic"},{kana:"せ",romaji:"SE",type:"basic"},{kana:"そ",romaji:"SO",type:"basic"},{kana:"ざ",romaji:"ZA",type:"dakuon"},{kana:"じ",romaji:"JI",type:"basic"},{kana:"ず",romaji:"ZU",type:"dakuon"},{kana:"ぜ",romaji:"ZE",type:"dakuon"},{kana:"ぞ",romaji:"ZO",type:"dakuon"},{kana:"た",romaji:"TA",type:"basic"},{kana:"ち",romaji:"CHI",type:"basic"},{kana:"つ",romaji:"TSU",type:"basic"},{kana:"て",romaji:"TE",type:"basic"},{kana:"と",romaji:"TO",type:"basic"},{kana:"だ",romaji:"DA",type:"dakuon"},{kana:"ぢ",romaji:"JI",type:"dakuon"},{kana:"づ",romaji:"DZU",type:"dakuon"},{kana:"で",romaji:"DE",type:"dakuon"},{kana:"ど",romaji:"DO",type:"dakuon"},{kana:"な",romaji:"NA",type:"basic"},{kana:"に",romaji:"NI",type:"basic"},{kana:"ぬ",romaji:"NU",type:"basic"},{kana:"ね",romaji:"NE",type:"basic"},{kana:"の",romaji:"NO",type:"basic"},{kana:"は",romaji:"HA",type:"basic"},{kana:"ひ",romaji:"HI",type:"basic"},{kana:"ふ",romaji:"FU",type:"basic"},{kana:"へ",romaji:"HE",type:"basic"},{kana:"ほ",romaji:"HO",type:"basic"},{kana:"ば",romaji:"BA",type:"dakuon"},{kana:"び",romaji:"BI",type:"dakuon"},{kana:"ぶ",romaji:"BU",type:"dakuon"},{kana:"べ",romaji:"BE",type:"dakuon"},{kana:"ぼ",romaji:"BO",type:"dakuon"},{kana:"ぱ",romaji:"PA",type:"handakuon"},{kana:"ぴ",romaji:"PI",type:"handakuon"},{kana:"ぷ",romaji:"PU",type:"handakuon"},{kana:"ぺ",romaji:"PE",type:"handakuon"},{kana:"ぽ",romaji:"PO",type:"handakuon"},{kana:"ま",romaji:"MA",type:"basic"},{kana:"み",romaji:"MI",type:"basic"},{kana:"む",romaji:"MU",type:"basic"},{kana:"め",romaji:"ME",type:"basic"},{kana:"も",romaji:"MO",type:"basic"},{kana:"や",romaji:"YA",type:"basic"},{kana:"ゆ",romaji:"YU",type:"basic"},{kana:"よ",romaji:"YO",type:"basic"},{kana:"ら",romaji:"RA",type:"basic"},{kana:"り",romaji:"RI",type:"basic"},{kana:"る",romaji:"RU",type:"basic"},{kana:"れ",romaji:"RE",type:"basic"},{kana:"ろ",romaji:"RO",type:"basic"},{kana:"わ",romaji:"WA",type:"basic"},{kana:"を",romaji:"WO",type:"basic"},{kana:"ん",romaji:"N",type:"basic"}];e["a"]=n},cb2c:function(a,e,t){"use strict";var n=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("section",{staticClass:"quiz wrapper animate__animated animate__fadeIn"},[a._m(0),t("div",{staticClass:"cardsContainer"},[t("ul",{staticClass:"promptCards"},a._l(a.promptCards,(function(e,n){return t("li",[t("span",[a._v(a._s(e))]),t("div",[t("transition",{attrs:{name:"fade"}},[a.clicks===n?t("span",{staticClass:"key"},[a._v(a._s(n+1))]):a._e()]),t("transition",{attrs:{name:"fade"}},[a.clicks>n?t("span",[a._v(a._s(Object.keys(a.answerLog)[n]))]):a._e()])],1)])})),0),t("ul",{staticClass:"answerCards"},a._l(a.answerCards,(function(e,n){return t("AnswerCard",{key:n,attrs:{id:e,card:e,currentCard:a.answerLog[e]},on:{"set-current-card":a.setCurrentCard}})})),1)]),t("p",{staticClass:"round"},[a._v(a._s(a.round)+" / 5")]),t("button",{staticClass:"nextButton",attrs:{type:"button"},on:{click:a.validateAnswers}},[a._v("Next >")])])},r=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("p",[a._v("Tap to match "),t("span",{attrs:{role:"img","aria-hidden":"true"}},[a._v("💭")])])}],i=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("li",{class:{disabled:a.currentCard},on:{click:a.setCurrentCard}},[t("div",[t("span",[a._v(a._s(a.card))])])])},o=[],s={name:"AnswerCard",props:["currentCard","card"],methods:{setCurrentCard(a){this.$emit("set-current-card",a)}}},c=s,p=t("2877"),l=Object(p["a"])(c,i,o,!1,null,null,null),k=l.exports,u=t("993c"),d=t("713e"),m={name:"Quiz",components:{AnswerCard:k},props:["type"],data(){return{clicks:0,round:0,answerKey:{},answerLog:{},currentCard:"",isCorrect:!1}},computed:{promptSet:function(){const a="hiragana"===this.type?h(u["a"],6):h(d["a"],6);return a.forEach(a=>this.answerKey[a.romaji]=a.kana),a},promptCards:function(){return this.promptSet.map(a=>a.kana)},answerCards:function(){return h(this.promptSet,this.promptSet.length).map(a=>a.romaji)}},watch:{round:function(){6===this.round&&(this.showModal(),this.round=1),this.clicks=0}},methods:{validateAnswers(){for(const a in this.answerLog)this.answerLog[a]===this.answerKey[a]&&this.$emit("increment-score");this.answerKey={},this.answerLog={},this.round++},showModal(a){this.$emit("show-modal",a)},setCurrentCard(a){this.clicks<6&&(this.currentCard=a.currentTarget.id,this.answerLog[a.currentTarget.id]=this.promptCards[this.clicks],this.clicks++,this.isCorrect=!0)}}};function h(a,e){let t=[];for(let n=0;n<e;n++){const e=Math.floor(Math.random()*a.length);t.includes(a[e])?n-=1:t.push(a[e])}return t}var y=m,j=Object(p["a"])(y,n,r,!1,null,null,null);e["a"]=j.exports}});
//# sourceMappingURL=app.843dbf68.js.map