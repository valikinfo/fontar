/* eric meyer reset /
@import url('https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.css');
*/
/* font awesome
@import url('https://fontawesome.com/v4.7/assets/font-awesome/css/font-awesome.css');
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
*/

@import url('//fonts.googleapis.com/css2?family=Astloch:wght@400&family=UnifrakturCook:wght@700&family=UnifrakturMaguntia&display=swap');

* {
  margin: 0;
  padding: 0;
}

@font-face {
  font-family: test1;
  src: url('transfonter.woff') format('woff');
}

@font-face {
  font-family: test2;
  src: url('font2web.woff') format('woff');
}

body {
  _background-color: #ddf9ed;
  background-color: rgb(240,240,240);
  _padding: 10px;
  overflow: hidden;
}

.nofloat {
  display: block;
  float: none;
  clear: both;
}

#debug {
  background-color: #fffff0;
  width: 80%;
  min-width: 300px;
  max-width: 800px;
  height: 24px;
  margin: 10px auto 0;
  line-height: 1em;
  font-family: courier, monospace;
  text-align: center;
}

#test-scr {
  position: absolute;
  left: 5px;
  top: 5px;
  width: 30px;
}

#test-js {
  position: absolute;
  right: 5px;
  top: 35px;
  width: 30px;
}

#test-type {
  position: absolute;
  right: 5px;
  top: 5px;
  width: 30px;
}

.buttons {
  margin: 6px;
  font-size: 0;
}

.buttons-center {
  text-align: center;
}

.btn {
  display: inline-block;
  margin-right: 3px;
  box-sizing: border-box;
  width: 26px;
  height: 26px;
  border: 1px solid #bbb;
  background-color: #fff;
  text-align: center;
  line-height: 24px;
  cursor: pointer;
  font: 14px 'segoe ui', arial, helvetica, sans-serif;
}

.btn#zindex {
  width: 80px;
  float: left;
}

#browse1,
#browse2 {
  display: none;
}

#fileopen1,
#fileopen2 {
  float: left;
  width: 24px;
  border-radius: 0;
}

.toolbar {
  margin: 0 auto;
  width: 100%;
  height: 58px;
	min-width: 300px;
	max-width: 600px;
  box-sizing: border-box;
  padding: 5px 0;
  background-color: #fff;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  font-size: 0 !important;
}

.toolmain div {
  box-sizing: border-box;
}

.toolmain {
  position: relative;
  box-sizing: content-box;
  _float: left;
    display: inline-block;
  z-index: 10;
  padding: 0 5px;
  width: 60px;
  height: 46px;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
}

.toolmain div::selection,
.toolmain span::selection {
  background-color: transparent;
}

.toolmain + .toolmain {
  border-left: none;
}
.toolminus,
.toolplus {
  position: absolute;
  z-index: 40;
  left: 5px;
  top: 14px;
  width: 18px;
  height: 32px;
  line-height: 28px;
  text-align: center;
  font-size: 14px;
  font-family: 'segoe ui', arial, helvetica, sans-serif;
  color: #216dc7;
  cursor: pointer;
}

.toolplus {
  left: unset;
  right: 5px;
}

._toolminus::before, 
._toolplus::before {
  content: '>';
}

.toolminus i,
.toolplus i {
  font-size: 9px;
  font-weight: 200;
  color: rgba(50,150,200,1);
}

.toolimg {
  position: absolute;
  z-index: 20;
  top: 14px;
  left: 18px;
  border: none;
  width: 32px;
  height: 32px;
  overflow: hidden;
  text-align: center;
  font-size: 22px;
  font-weight: 200;
    line-height: 24px;
  font-family: 'segoe ui', arial, helvetica, sans-serif;
  cursor: pointer;
    _border: 1px dotted #888;
    padding: 2px 0 0 2px;
}

.toolimg i {
  font-size: 20px;
}

.font .toolimg {
  font-family: 'UnifrakturCook', cursive; /** best with A **/
  font-size: 24px;
  line-height: 25px;
}

.font .toolimg {
  font-family: 'UnifrakturMaguntia', cursive; /** best with E **/
  font-size: 23px;
  line-height: 30px;
}

.size .toolimg {
  _background-image: url('https://raw.githubusercontent.com/valikinfo/valikinfo.github.io/main/icon-matrix-px.png');
  _background-position: -101px -51px;
  _background-repeat: no-repeat;
}

.weight .toolimg {
  _background-image: url('https://raw.githubusercontent.com/valikinfo/valikinfo.github.io/main/icon-matrix-px.png');
  _background-position: -101px -51px;
  _background-repeat: no-repeat;
  font-weight: 400;
}

.fntclr .toolimg,
.bgclr .toolimg {
  cursor: pointer;
}

.bgclr .toolimg:hover,
.bgclr .toolminus:hover ~ .toolimg ,
.bgclr .toolplus:hover ~ .toolimg {
  background-color: rgba(1,1,1,0) !important;
}

.bgclr .toolimg .fa::before {
  text-shadow: 0 0 3px #fff;
}

.decor .toolimg {
  font-size: 22px;
  text-decoration: underline;
}

.fntclr .toolimg {
  font-size: 22px;
  font-weight: 200;
  border-bottom: 4px solid #e61e42;
}

.fntclr .toolminus,
.fntclr .toolplus,
.bgclr .toolminus,
.bgclr .toolplus {
  _display: none;
}

.toolvalue {
  position: absolute;
  z-index: 60;
  left: 5px;
  top: 0;
  width: 60px;
  height: 12px;
  line-height: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
  font-size: 12px;
  font-family: 'segoe ui', arial, helvetica, sans-serif;
  color: #333;
}

.toolvalue span {
  color: rgba(250,85,30,1);
}

.toolback {
  position: absolute;
  top: 14px;
  width: 60px;
  height: 32px;
  border: none;
  background-color: white;
}

.toolminus:hover ~ .toolback,
.toolimg:hover ~ .toolback,
.toolplus:hover ~ .toolback {
  background-color: rgba(165,200,240,.5);
  background-color: #fce48a;
}

.tooltext {
  display: none;
  position: absolute;
  left: 5px;
  bottom: 0;
  width: 60px;
  height: 14px;
  overflow: hidden;
  white-space: nowrap;
  line-height: 12px;
  border: none;
  text-align: center;
  font-size: 12px;
  font-family: 'segoe ui', arial, helvetica, sans-serif;
  color: #000;
}

.toolmain.resize div {
  margin: 0;
}

#viewsizeV {
  position: absolute;
  left: 23px;
  top: 14px;
  width: 24px;
  height: 32px;
  color: #216dc7;
}

#viewsizeV > #viewminusV,
#viewsizeV > #viewplusV {
  position: absolute;
  left: 0;
  top: 0;
  width: 24px;
  height: 16px;
  line-height: 7px;
  border: none;
  border-radius: 4px 4px 0 0;
  font-size: 10px;
}

#viewsizeV > #viewplusV {
  top: unset;
  bottom: 0;
  border-radius: 0 0 4px 4px;
  line-height: 17px;
}

#viewsizeH {
  position: absolute;
  left: 5px;
  top: 15px;
  width: 60px;
  color: #216dc7;
}

#viewsizeH > #viewminusH,
#viewsizeH > #viewplusH {
  position: absolute;
  left: 0;
  top: 4px;
  margin-left: 0;
  width: 18px;
  height: 24px;
  line-height: 21px;
  border: none;
  border-radius: 4px 0 0 4px;
  font-size: 10px;
}

#viewsizeH > #viewplusH {
  left: unset;
  right: 0;
  border-radius: 0 4px 4px 0;
}

#viewsizeV > div:hover,
#viewsizeH > div:hover {
  background-color: rgba(165,200,240,.5);
  background-color: #fce48a;
}

#d0 {
  margin: 10px auto;
  width: 600px;
  min-width: 300px;
  max-width: 90%;
  height: 200px;
  position: relative;
  -webkit-transition: all 500ms;
  transition: all .5s;
  background-color: #fff; /** must be on #d0 as the default for .d1 **/
  color: #333; /** must be on #d0 as the default for .d1 **/
}

.d1 {
  position: absolute;
  overflow: scroll;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  border: 10px solid #fff;
  border-right: 0px solid #fff;
  z-index: 1;
  line-height: 24px; /** must be on .d1, as the default for children **/
  _line-height: auto; /** must be on .d1, as the default for children **/
  font-size: 20px; /** must be on .d1, as the default for children **/
  background-color: #fff; /** must be on .d1, as the default for children **/
  color: #333; /** must be on .d1, as the default for children **/
}

#d11 {
  _border-top: 4px solid green;
  z-index: 2;
}

#d12 {
  _border-top: 4px solid #1c69b7;
  z-index: 1;
}

.d2 {
  font-weight: normal;
  min-height: 100%;
  overflow: hidden;
  outline: none;
}

#d21 {
}

#d22 {
}

.scroll-cover {
  position: absolute;
  content: "";
  right: 0;
  top: 0;
  /** the actual width is calculated with JS **/
  width: 1px;
  height: 100%;
  background-color: #fff;
  z-index: 100;
}

.hidden {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

.fa.fa-caret-left,
.fa.fa-caret-right {
  _display: none;
  color: #444;
  font-size: 0.8em
}

/** fontlists */
.font-list {
  position: relative;
  float: left;
  box-sizing: border-box;
  margin-right: 3px;
  border: 1px solid #bbb;
  background-color: #fff;
  width: 200px;
  height: 26px;
  z-index: 1000;
  text-align: left;
}

/** style inactive lists */
.fontbar:not(.active) .font-list {
  border: 1px solid #ddd;
  color: rgba(0,0,0,0.5);
}

.fontbar:not(.active) .list-arr {
  display: none !important;
}

.fontbar:not(.active) .fileopen {
  border: 1px solid #ddd;
  color: rgba(0,0,0,0.5);
  cursor: default;
}

._fontbar:not(.active) .font-list:hover::after {
  content: 'click ‘see font’ to change';
  display: block;
  margin-left: 20px;
  margin-top: -15px;
  width: 200px;
  height: 30px;;
  border: 0 solid;
  background-color: #f5eea2;
  background-color: rgba(252,228,138,0.8) !important;
  color: #000 !important;
  cursor: default;
}

.font-list-body {
  _position: relative;
  box-sizing: border-box;
  margin: 26px 0 0 0;
  width: 100%;
  height: 0;
  background-color: #fff;
  border: 0 solid #ddd;
  border-top: none;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 0;
}
.font-list-body.closed {
  height: 0;
  border-width: 0;
}

.font-list-body.open {
  height: 300px;
  border-width: 1px;
}

.list-arr {
  display: none;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 20;
  box-sizing: border-box;
  width: 26px;
  height: 24px;
  cursor: pointer;
  font-family: 'segoe ui', 'helvetica neue', sans-serif;
}

.font-list:hover .list-arr {
  display: block;
}

body.d21 #font-list2 .list-arr,
body.d22 #font-list1 .list-arr {
  _display: none;
}

.list-arr span {
  display: inline-block;
  width: 14px;
  transform: scaleX(2.0);
  transform-origin: 0% 100%;
  text-align: center;
  font-size: 12px;
  line-height: 20px;
  color: #216dc7;
}

.list-arr:hover {
  background-color: #fce48a;
    _background-color: #cce48a;
}

.list-arr:hover ~ .font-list-body .font-item.active {
  background-color: #fce48a;
  z-index: 10;
}

.font-list-body .recents {
  display: flex;
  /** ie10 e12 ff20* ch21 sf7 o12.1 **/
  flex-direction: column-reverse;
}

.font-list .recents div:nth-child(2) {
  /** first child, default, is hidden */
  border-bottom: 1px solid #ddd;
}

.font-item {
  cursor: pointer;
}

.font-item {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 31px;
  padding: 0 5px;
  overflow: hidden;
  font-size: 16px;
  line-height: 30px;
  white-space: nowrap;
  text-overflow: ellipsis;
}

/** don’t hilite the inactive bar **/ 
.fontbar.active .font-item:hover {
  background-color: #fce48a;
}

body.d21 #font-list2 .font-item:hover,
body.d22 #font-list1 .font-item:hover {
  _background-color: inherit;
}

.font-item.active {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  height: 25px;
  line-height: 25px;
  padding-right: 30px;
  font-family: inherit;
  font-weight: inherit;
}

.font-item.recent.active {
  border-bottom-width: 0 !important;
}

.font-item.default.recent {
  /** hide the default item from recents **/
  display: none;
}

.font-item.default.active {
  /** show the default item if the only, exceptional **/
  display: block;
}

body.d21 #font-list2 .font-item.active,
body.d22 #font-list1 .font-item.active {
  _cursor: default;
}

.fontbar { /* ?! */
  margin: 0 auto;
  font-size: 0;
  text-align: center;
}

#fontbar {
  margin: 5px auto;
  padding: 3px;
  width: 100%;
	height: 28px;
  min-width: 300px;
	max-width: 600px;
  background-color: #fff;
  _border-top: 1px solid #ddd;
  _border-bottom: 1px solid #ddd;
  font-size: 0 !important;
  text-align: center;
}

#fontbar #fontbar-cont {
  width: 560px;
  margin: 0 auto;
}

/* fontlists **/
