// https://jshint.com to check it all

// test js functions
document.getElementById("test-js").onclick = function() {
  erasecookie('fontname1');
  erasecookie('fontname2');
  var rgb = "rgb(255,255,255)";
  alert(rgb2hex(rgb)); 
};

window.onload = function() {
  fontlists();
  document.querySelector("body").classList.add("d21");
  // hideScroll("d11","scroll-cover1");
  // hideScroll("d12","scroll-cover2");
  // restore last time files
  var fontName1 = getcookie('fontname1');
  var fontType1 = getcookie('fonttype1');
  var blobURL1 = getcookie('fontblob1');
  var fontName2 = getcookie('fontname2');
  var fontType2 = getcookie('fonttype2');
  var blobURL2 = getcookie('fontblob2');
  if (blobURL1) {
    document.getElementsByTagName('head')[0].innerHTML = document.getElementsByTagName('head')[0].innerHTML + "\n<style>\n@font-face {font-family: " + fontName1 + "; src: url('" + blobURL1 + "') format('" + fontType1 + "');}\n</style>";
  }
  if (blobURL2) {
    document.getElementsByTagName('head')[0].innerHTML = document.getElementsByTagName('head')[0].innerHTML + "\n<style>\n@font-face {font-family: " + fontName2 + "; src: url('" + blobURL2 + "') format('" + fontType2 + "');}\n</style>";
  }
  faceid("d21",1,fontName1);
  // document.getElementById("d21").style.fontFamily = fontName1;
  faceid("d22",2,fontName2);
  // document.getElementById("d22").style.fontFamily = fontName2;
};

function activedivid() {
  var activediv = "d21";
  var activeparent = "d11";
  var zind = window.getComputedStyle(document.getElementById(activeparent), null).getPropertyValue('z-index');
  if (zind == "1") {
    activediv = "d22";
    activeparent = "d12";
  }
  return activediv;
}

// swap files
document.getElementById("zindex").onclick = function() {
  tofront("d21","d22");
};

// resize preview by id
document.getElementById("viewminusH").onclick = function() {
  viewsizeid("d0", "width", -10); // number is the step
};

document.getElementById("viewplusH").onclick = function() {
  viewsizeid("d0", "width", 10); // number is the step
};

document.getElementById("viewminusV").onclick = function() {
  viewsizeid("d0", "height", -10); // number is the step
};

document.getElementById("viewplusV").onclick = function() {
  viewsizeid("d0", "height", 10); // number is the step
};

function viewsizeid(viewid, dimension, viewstep) {
  var viewwidth = parseInt(document.getElementById(viewid).clientWidth) + viewstep + "px";
  var viewheight = parseInt(document.getElementById(viewid).clientHeight) + viewstep + "px";
  if (dimension == "width") {
    if (document.getElementById(viewid).clientWidth > 300) {
      document.getElementById("debug").innerHTML = viewwidth;
      document.getElementById(viewid).style.width = viewwidth;
    }
  } else {
    if (document.getElementById(viewid).clientHeight > 100) {
      document.getElementById("debug").innerHTML = viewheight;
      document.getElementById(viewid).style.height = viewheight;
    }
  }
}

/* resize fonts by id */
document.getElementById("sizebtn").onclick = function() {
  var id = activedivid();
  if (window.event.ctrlKey) {
    fontsizeid(id, -5);
  } else {
    fontsizeid(id, 5);
  }
};

document.getElementById("sizeminus").onclick = function() {
  var id = activedivid();
  fontsizeid(id, -1);
};

document.getElementById("sizeplus").onclick = function() {
  var id = activedivid();
  fontsizeid(id, 1);
};

function fontsizeid(divid, fntstep) {
  var fntsize1 = window.getComputedStyle(document.getElementById(divid), null).getPropertyValue('font-size');
  var fntsize2 = "";
  if (fntstep < 0) {
    if (parseInt(fntsize1) > Math.abs(fntstep)) {
      fntsize2 = parseInt(fntsize1) + fntstep + "px";
      if (fntsize2 < 0) {
        fntsize2 = parseInt(fntsize1) + "px";
      }
    }
  } else {
    fntsize2 = parseInt(fntsize1) + fntstep + "px";
  }
  // OK: var fntsize2_em = parseFloat((parseFloat(fntsize2) / getEmByID(divid)).toFixed(4));
  document.getElementById(divid).style.fontSize = fntsize2;
  // document.getElementById("debug").innerHTML = fntsize2;
  if (fntsize2 == "") {
    document.getElementById("fontsize").innerHTML = "size";
  } else {
    if (fntsize2 == window.getComputedStyle(document.querySelector(".d1"), null).getPropertyValue('font-size')) {
      document.getElementById("fontsize").innerHTML = "size";
    } else {
      document.getElementById("fontsize").innerHTML = "<span>" + fntsize2 + "</span>";
    }
  }
}

document.getElementById("weightbtn").onclick = function() {
  var id = activedivid();
  if (window.event.ctrlKey) {
    weightid(id, -1);
  } else {
    weightid(id, 1);
  }
};
document.getElementById("weightminus").onclick = function() {
  var id = activedivid();
  weightid(id, -1);
};

document.getElementById("weightplus").onclick = function() {
  var id = activedivid();
  weightid(id, 1);
};

function weightid(divid, weightact) {
  var weight1 = window.getComputedStyle(document.getElementById(divid), null).getPropertyValue('font-weight');
  var weight2 = weight1;
  var weight2inf = "";
  if (weight1 == "100") {
    weight2inf = "thin";
    if (weightact > 0) {
      weight2 = "200";
      weight2inf = "ultralight";
    }
    if (weightact < 0) {
      weight2 = "900";
      weight2inf = "black";
    }
  }
  if (weight1 == "200") {
    weight2inf = "ultralight";
    if (weightact > 0) {
      weight2 = "300";
      weight2inf = "light";
    }
    if (weightact < 0) {
      weight2 = "100";
      weight2inf = "thin";
    }
  }
  if (weight1 == "300") {
    weight2inf = "light";
    if (weightact > 0) {
      weight2 = "400";
      weight2inf = "normal";
    }
    if (weightact < 0) {
      weight2 = "200";
      weight2inf = "ultralight";
    }
  }
  if (weight1 == "400") {
    weight2inf = "normal";
    if (weightact > 0) {
      weight2 = "500";
      weight2inf = "medium";
    }
    if (weightact < 0) {
      weight2 = "300";
      weight2inf = "light";
    }
  }
  if (weight1 == "500") {
    weight2inf = "medium";
    if (weightact > 0) {
      weight2 = "600";
      weight2inf = "semibold";
    }
    if (weightact < 0) {
      weight2 = "400";
      weight2inf = "normal";
    }
  }
  if (weight1 == "600") {
    weight2inf = "semibold";
    if (weightact > 0) {
      weight2 = "700";
      weight2inf = "bold";
    }
    if (weightact < 0) {
      weight2 = "500";
      weight2inf = "medium";
    }
  }
  if (weight1 == "700") {
    weight2inf = "bold";
    if (weightact > 0) {
      weight2 = "800";
      weight2inf = "extrabold";
    }
    if (weightact < 0) {
      weight2 = "600";
      weight2inf = "semibold";
    }
  }
  if (weight1 == "800") {
    weight2inf = "extrabold";
    if (weightact > 0) {
      weight2 = "900";
      weight2inf = "black";
    }
    if (weightact < 0) {
      weight2 = "700";
      weight2inf = "bold";
    }
  }
  if (weight1 == "900") {
    weight2inf = "black";
    if (weightact > 0) {
      weight2 = "100";
      weight2inf = "thin";
    }
    if (weightact < 0) {
      weight2 = "800";
      weight2inf = "extrabold";
    }
  }
  document.getElementById(divid).style.fontWeight = weight2;
  document.getElementById("weight").innerHTML = '<span>' + weight2inf + '</span>';
  if (weight2 == "400") {
    document.getElementById("weight").innerHTML = "weight";
  }
}

//** cursive by id
document.getElementById("italicbtn").onclick = function() {
  var id = activedivid();
  if (window.event.ctrlKey) {
    italicid(id, -1);
  } else {
    italicid(id, 1);
  }
};

document.getElementById("italicminus").onclick = function() {
  var id = activedivid();
  italicid(id, -1);
};

document.getElementById("italicplus").onclick = function() {
  var id = activedivid();
  italicid(id, 1);
};

function italicid(divid, italicact) {
  var italic1 = window.getComputedStyle(document.getElementById(divid), null).getPropertyValue('font-style');
  var italic2 = italic1;
  if (italicact != 0) {
    if (italic1 == "normal") {
      italic2 = "italic";
    } else {
      italic2 = "normal";
    }
  }
  document.getElementById("italicbtn").style.fontStyle = italic2;
  document.getElementById(divid).style.fontStyle = italic2;
  if (italic2 == "normal") {
    document.getElementById("italic").innerHTML = "style";
  } else {
    document.getElementById("italic").innerHTML = "<span>" + italic2 + "</span>";
  }
}

//** underline by id
document.getElementById("decorbtn").onclick = function() {
  var id = activedivid();
  if (window.event.ctrlKey) {
    decorid(id, -1);
  } else {
    decorid(id, 1);
  }
};

document.getElementById("decorminus").onclick = function() {
  var id = activedivid();
  decorid(id, -1);
};

document.getElementById("decorplus").onclick = function() {
  var id = activedivid();
  decorid(id, 1);
};

function decorid(divid, decoract) {
  var decor1 = window.getComputedStyle(document.getElementById(divid), null).getPropertyValue('text-decoration');
  var decor2 = decor1;
  var decor2inf = "";
  if (decor1 == "none") {
    decor2inf = "decoration";
    if (decoract > 0) {
      decor2 = "underline";
      decor2inf = decor2;
    }
    if (decoract < 0) {
      decor2 = "underline overline";
      decor2inf = "under/over";
    }
  }
  if (decor1 == "underline") {
    decor2inf = decor1;
    if (decoract > 0) {
      decor2 = "line-through";
      decor2inf = "strike";
    }
    if (decoract < 0) {
      decor2 = "none";
      decor2inf = "decoration";
    }
  }
  if (decor1 == "line-through") {
    decor2inf = "strike";
    if (decoract > 0) {
      decor2 = "line-through double";
      decor2inf = "dbl strike";
    }
    if (decoract < 0) {
      decor2 = "underline";
      decor2inf = decor2;
    }
  }
  // text-decoration-style: c57.0 e79.0 ff36.0/-moz- 6.0 s12.1 o44.0
  if (decor1 == "line-through double") {
    decor2inf = "dbl strike";
    if (decoract > 0) {
      decor2 = "overline";
      decor2inf = decor2;
    }
    if (decoract < 0) {
      decor2 = "line-through";
      decor2inf = "strike";
    }
  }
  if (decor1 == "overline") {
    decor2inf = decor1;
    if (decoract > 0) {
      decor2 = "underline overline";
      decor2inf = "under/over";
    }
    if (decoract < 0) {
      decor2 = "line-through double";
      decor2inf = "dbl strike";
    }
  }
  if (decor1 == "underline overline") {
    decor2inf = "under/over";
    if (decoract > 0) {
      decor2 = "none";
      decor2inf = "decoration";
    }
    if (decoract < 0) {
      decor2 = "overline";
      decor2inf = decor2;
    }
  }
  document.getElementById(divid).style.textDecoration = decor2;
  if (decor2 == "none") {
    document.getElementById("decorsize").innerHTML = "decoration";
  } else {
    document.getElementById("decorsize").innerHTML = "<span>" + decor2inf + "</span>";
  }
}

//** font colour by id
setactivecolours("onload");

function setactivecolours(mode) {
  // mode as 'onload' for usual use, mode as 'swap' for swapping panes
  var fntclr0rgb = window.getComputedStyle(document.getElementById(activedivid()), null).getPropertyValue("color");
  var bgclr0rgb = window.getComputedStyle(document.getElementById(activedivid()).parentElement, null).getPropertyValue("background-color");
  var targetid = document.getElementById(activedivid()).parentElement.id;
  document.getElementById("fntclrbtn").style.color = fntclr0rgb;
  document.getElementById("bgclrbtn").style.backgroundColor = bgclr0rgb;
  if (mode == "swap") {
    // for swapping panes further call setting colour button labels
    var fntclr0hex = rgb2hex(fntclr0rgb);
    var bgclr0hex = rgb2hex(bgclr0rgb);
    setclrlabels("fntclrbtn", targetid, "color", fntclr0hex);
    setclrlabels("bgclrbtn", targetid, "background-color", bgclr0hex);
  }
}

document.getElementById("fntclrbtn").onclick = function() {
  pickerclick("fntclrbtn", activedivid(), "color");
};

document.getElementById("bgclrbtn").onclick = function() {
  var activediv = activedivid();
  var targetid = document.getElementById(activediv).parentElement.id;
  pickerclick("bgclrbtn", targetid, "background-color");
};

function pickerclick(btnid, targetid, property) {
  document.getElementById("picker").focus();
  document.getElementById("picker").click();
  document.getElementById("picker").onchange = function() {
    pickerchange(btnid, targetid, property);
  };
}

function pickerchange(btnid, targetid, property) {
  var colour1hex = document.getElementById("picker").value;
  document.getElementById(btnid).style.setProperty(property, colour1hex);
  document.getElementById(targetid).style.setProperty(property, colour1hex);
  setclrlabels(btnid, targetid, property, colour1hex);
}

function setclrlabels(btnid, targetid, property, colour) {
  // setting colour button labels
  if (btnid == "fntclrbtn") {
    var startfntclr_hex = rgb2hex(window.getComputedStyle(document.getElementById("d0"), null).getPropertyValue("color"));
    document.getElementById("fntclr").innerHTML = colour; /** hex **/
    document.getElementById("fntclr").innerHTML = "<span>" + hex2rgb(colour).r + "," + hex2rgb(colour).g + "," + hex2rgb(colour).b + "</span>";
    if (colour == startfntclr_hex) {
      document.getElementById("fntclr").innerHTML = "font colour";
    }
  }
  if (btnid == "bgclrbtn") {
    var startbackclr_hex = rgb2hex(window.getComputedStyle(document.getElementById("d0"), null).getPropertyValue("background-color"));
    document.getElementById(targetid).style.setProperty("border-color", colour); /** hex **/
    document.getElementById("bgclr").innerHTML = colour;
    document.getElementById("bgclr").innerHTML = "<span>" + hex2rgb(colour).r + "," + hex2rgb(colour).g + "," + hex2rgb(colour).b + "</span>";
    if (colour == startbackclr_hex) {
      document.getElementById("bgclr").innerHTML = "back colour";
    }
  }
}

/* transform case by id */
document.getElementById("casebtn").onclick = function() {
  var id = activedivid();
  if (window.event.ctrlKey) {
    caseid(id, -1);
  } else {
    caseid(id, 1);
  }
};

document.getElementById("caseminus").onclick = function() {
  var id = activedivid();
  caseid(id, -1);
};

document.getElementById("caseplus").onclick = function() {
  var id = activedivid();
  caseid(id, 1);
};

function caseid(divid, caseact) {
  var case1 = window.getComputedStyle(document.getElementById(divid), null).getPropertyValue('text-transform');
  var case2 = case1;
  var case2inf = "";
  var value = document.getElementById("case").innerText;
  if (value == "case") {
    case2inf = value;
    if (caseact == 1) {
      case2 = "capitalize";
      case2inf = "capitalise";
    }
    if (caseact == -1) {
      case2 = "small caps";
      case2inf = case2;
    }
  }
  if (value == "capitalize") {
    case2inf = "capitalise";
    if (caseact == 1) {
      case2 = "uppercase";
      case2inf = case2;
    }
    if (caseact == -1) {
      case2 = "case";
      case2inf = case2;
    }
  }
  if (value == "uppercase") {
    case2inf = value;
    if (caseact == 1) {
      case2 = "lowercase";
      case2inf = case2;
    }
    if (caseact == -1) {
      case2 = "capitalize";
      case2inf = "capitalise";
    }
  }
  if (value == "lowercase") {
    case2inf = value;
    if (caseact == 1) {
      case2 = "small caps";
      case2inf = case2;
    }
    if (caseact == -1) {
      case2 = "uppercase";
      case2inf = case2;
    }
  }
  if (value == "small caps") {
    case2inf = value;
    if (caseact == 1) {
      case2 = "case";
      case2inf = case2;
    }
    if (caseact == -1) {
      case2 = "lowercase";
      case2inf = case2;
    }
  }
  if (case2 !== "small caps") {
    document.getElementById(divid).style.textTransform = case2;
    document.getElementById(divid).style.fontVariant = "normal";
    document.getElementById("case").innerHTML = "<span>" + case2 + "</span>";
    if (case2 == "none") {
      document.getElementById("case").innerHTML = "case";
    }
    if (case2 == "case") {
      document.getElementById("case").innerHTML = "case";
    }
  } else {
    document.getElementById(divid).style.textTransform = "none";
    document.getElementById(divid).style.fontVariant = "small-caps";
    document.getElementById("case").innerHTML = "<span>" + case2 + "</span>";
  }
}

//** stretch/transform: scaleX by id
document.getElementById("stretchbtn").onclick = function() {
  var id = activedivid();
  if (window.event.ctrlKey) {
    stretchid(id, -0.05);
  } else {
    stretchid(id, 0.05);
  }
};

document.getElementById("stretchminus").onclick = function() {
  var id = activedivid();
  stretchid(id, -0.01);
};

document.getElementById("stretchplus").onclick = function() {
  var id = activedivid();
  stretchid(id, 0.01);
};

function stretchid(divid, stretchstep) {
  var stretch1 = window.getComputedStyle(document.getElementById(divid), null).getPropertyValue("transform");
  var stretch2 = 1.00;
  if (stretch1 == "none") {
    stretch1 = 1.00;
  } else {
    var matrixArray = stretch1.replace("matrix(", "").split(",");
    stretch1 = parseFloat((parseFloat(matrixArray[0])).toFixed(2));
  }
  if (stretchstep < 0) {
    if (stretch1 > 0.05) {
      // threw over 2 decimals!
      stretch2 = parseFloat((stretch1 + stretchstep).toFixed(2));
    }
  } else {
    stretch2 = parseFloat((stretch1 + stretchstep).toFixed(2));
  }
  document.getElementById(divid).style.transform = "scaleX(" + stretch2 + ")";
  // ??? the below line strangely worked
  // var widthnum = parseFloat(window.getComputedStyle(d0).width) / stretch2;
  var widthnum = document.querySelector("#d0").clientWidth / stretch2;
  var widthval = widthnum + "px";
  ////   var marginnum = widthnum * (stretch2 - 1) / 2;
  ////   var marginval = marginnum + "px";
  var scrollWidth = document.getElementById(divid).parentElement.offsetWidth - document.getElementById(divid).parentElement.clientWidth;
  if (widthnum > document.querySelector("#d0").clientWidth) {
    // correction for the (unscaled) 10px margin for scales < 100%
    widthnum = widthnum - widthnum * (10 / document.querySelector("#d0").clientWidth);
  }
  widthval = widthnum - scrollWidth + "px";
  document.getElementById(divid).style.setProperty("width", widthval);
  document.getElementById(divid).style.setProperty("transform-origin", "0 100%");
  ////  document.getElementById(divid).style.setProperty("margin-left",marginval);
  if (parseInt(stretch2 * 100) == 100) {
    document.getElementById("stretch").innerHTML = "stretch";
  } else {
    document.getElementById("stretch").innerHTML = "<span>" + parseInt(stretch2 * 100) + "%" + "</span>";
  }
}

//** opacity by id
document.getElementById("opacbtn").onclick = function() {
  var id = activedivid();
  if (window.event.ctrlKey) {
    opacityid(id, 0.1);
  } else {
    opacityid(id, -0.1);
  }
};

document.getElementById("opacminus").onclick = function() {
  var id = activedivid();
  opacityid(id, -0.05);
};

document.getElementById("opacplus").onclick = function() {
  var id = activedivid();
  opacityid(id, 0.05);
};

function opacityid(divid, opacstep) {
  var parent = document.getElementById(divid).parentElement.id;
  var opacity1 = window.getComputedStyle(document.getElementById(divid), null).getPropertyValue('opacity');
  var opacity2 = parseFloat(opacity1).toFixed(2);
  if (opacstep > 0) {
    if (opacity1 > 0) {
      if (opacity1 < 1 - opacstep) {
        opacity2 = (parseFloat(opacity1) + opacstep).toFixed(2);
      } else {
        opacity2 = 1;
      }
    }
  } else {
    if (opacity1 > Math.abs(opacstep)) {
      opacity2 = (parseFloat(opacity1) + parseFloat(opacstep)).toFixed(2);
    }
  }
  document.getElementById(divid).style.opacity = opacity2;
  document.getElementById(parent).style.opacity = opacity2;
  // document.getElementById("debug").innerHTML = opacity2;
  document.getElementById("opacity").innerHTML = "<span>" + opacity2 + "</span>";
  if (opacity2 == 1.0) {
    document.getElementById("opacity").innerHTML = "opacity";
  }
}

//** align by id
document.getElementById("alignbtn").onclick = function() {
  var id = activedivid();
  if (window.event.ctrlKey) {
    alignid(id, -1);
  } else {
    alignid(id, 1);
  }
};

document.getElementById("alignminus").onclick = function() {
  var id = activedivid();
  alignid(id, -1);
};

document.getElementById("alignplus").onclick = function() {
  var id = activedivid();
  alignid(id, 1);
};

function alignid(divid, alignaction) {
  var align1 = window.getComputedStyle(document.getElementById(divid), null).getPropertyValue('text-align');
  var align2 = align1;
  // sic! start is default (FF)
  if (align1 == "start") {
    if (alignaction > 0) {
      align2 = "center";
    }
    if (alignaction < 0) {
      align2 = "justify";
    }
  }
  if (align1 == "left") {
    if (alignaction > 0) {
      align2 = "center";
    }
    if (alignaction < 0) {
      align2 = "justify";
    }
  }
  if (align1 == "center") {
    if (alignaction > 0) {
      align2 = "right";
    }
    if (alignaction < 0) {
      align2 = "left";
    }
  }
  if (align1 == "right") {
    if (alignaction > 0) {
      align2 = "justify";
    }
    if (alignaction < 0) {
      align2 = "center";
    }
  }
  if (align1 == "justify") {
    if (alignaction > 0) {
      align2 = "left";
    }
    if (alignaction < 0) {
      align2 = "right";
    }
  }
  document.getElementById(divid).style.textAlign = align2;
  // document.getElementById("debug").innerHTML = align2;
  document.getElementById("alignsize").innerHTML = "<span>" + align2 + "</span>";
  if (align2 == "start") {
    document.getElementById("alignsize").innerHTML = "alignment";
  }
  if (align2 == "left") {
    document.getElementById("alignsize").innerHTML = "alignment";
  }
}

/*
function alignid(divid,action) {
  var align1 = window.getComputedStyle(document.getElementById(divid), null).getPropertyValue('text-align');
  var align2 = "";
  // sic! start is default (FF)
  if (align1 == "start") {
    if (action == "+") {
      align2 = "center";
    } else {
      align2 = "justify";
    }
  }
  if (align1 == "left") {
    if (action == "+") {
      align2 = "center";
    } else {
      align2 = "justify";
    }
  }
  if (align1 == "center") {
    if (action == "+") {
      align2 = "right";
    } else {
      align2 = "left";
    }
  }
  if (align1 == "right") {
    if (action == "+") {
      align2 = "justify";
    } else {
      align2 = "center";
    }
  }
  if (align1 == "justify") {
    if (action == "+") {
      align2 = "left";
    } else {
      align2 = "right";
    }
  }
  document.getElementById(divid).style.textAlign = align2;
  if (align2 == "left") {
  	document.getElementById("alignsize").innerHTML = "alignment";
  } else {
    document.getElementById("alignsize").innerHTML = "<span>" + align2 + "</span>";
  }
  if (align2 == "start") {
  	document.getElementById("alignsize").innerHTML = "alignment";
  }
}
*/
//** change line height by id
document.getElementById("linebtn").onclick = function() {
  var id = activedivid();
  if (window.event.ctrlKey) {
    linesizeid(id, -5);
  } else {
    linesizeid(id, 5);
  }
};

document.getElementById("lineminus").onclick = function() {
  var id = activedivid();
  linesizeid(id, -1);
};

document.getElementById("lineplus").onclick = function() {
  var id = activedivid();
  linesizeid(id, 1);
};

function linesizeid(divid, linestep) {
  var linesize1 = window.getComputedStyle(document.getElementById(divid), null).getPropertyValue('line-height');
  var linesize2 = "";
  if (linestep < 0) {
    if (parseInt(linesize1) > Math.abs(linestep)) {
      linesize2 = parseInt(linesize1) + linestep + "px";
      if (linesize2 < 0) {
        linesize2 = parseInt(linesize1) + "px";
      }
    }
  } else {
    linesize2 = parseInt(linesize1) + linestep + "px";
  }
  document.getElementById(divid).style.lineHeight = linesize2;
  // document.getElementById("debug").innerHTML = linesize2;
  if (linesize2 == "") {
    document.getElementById("linesize").innerHTML = "line height";
  } else {
    if (linesize2 == window.getComputedStyle(document.querySelector(".d1"), null).getPropertyValue('line-height')) {
      document.getElementById("linesize").innerHTML = "line height";
    } else {
      document.getElementById("linesize").innerHTML = "<span>" + linesize2 + "</span>";
    }
  }
}

//** letter-spacing by id
document.getElementById("letspacebtn").onclick = function() {
  var id = activedivid();
  if (window.event.ctrlKey) {
    letspaceid(id, -0.5);
  } else {
    letspaceid(id, 0.5);
  }
};

document.getElementById("letspaceminus").onclick = function() {
  var id = activedivid();
  letspaceid(id, -0.1);
};

document.getElementById("letspaceplus").onclick = function() {
  var id = activedivid();
  letspaceid(id, 0.1);
};

function letspaceid(divid, letspacestep) {
  var letspace1_px = window.getComputedStyle(document.getElementById(divid), null).getPropertyValue('letter-spacing');
  if (letspace1_px == "normal") {
    letspace1_px = 0;
  }
  var letspace2_px = parseFloat((parseFloat(letspace1_px) + letspacestep).toFixed(2));
  var letspace2_em = parseFloat((letspace2_px / getEmByID(divid)).toFixed(4));
  document.getElementById(divid).style.letterSpacing = letspace2_px + "px";
  if (letspace2_px == 0) {
    document.getElementById("letspace").innerHTML = "char space";
  } else {
    document.getElementById("letspace").innerHTML = "<span>" + letspace2_px + "px" + "</span>";
    document.getElementById("letspace").innerHTML = "<span>" + letspace2_em + "em" + "</span>";
  }
}

/* word-spacing by id */
document.getElementById("wordspacebtn").onclick = function() {
  var id = activedivid();
  if (window.event.ctrlKey) {
    wordspaceid(id, -0.5);
  } else {
    wordspaceid(id, 0.5);
  }
};

document.getElementById("wordspaceminus").onclick = function() {
  var id = activedivid();
  wordspaceid(id, -0.1);
};

document.getElementById("wordspaceplus").onclick = function() {
  var id = activedivid();
  wordspaceid(id, 0.1);
};

function wordspaceid(divid, wordspacestep) {
  var wordspace1_px = window.getComputedStyle(document.getElementById(divid), null).getPropertyValue('word-spacing');
  if (wordspace1_px == "normal") {
    wordspace1_px = 0;
  }
  var wordspace2_px = parseFloat((parseFloat(wordspace1_px) + wordspacestep).toFixed(2));
  var wordspace2_em = parseFloat((wordspace2_px / getEmByID(divid)).toFixed(4));
  document.getElementById(divid).style.wordSpacing = wordspace2_px + "px";
  if (wordspace2_px == 0) {
    document.getElementById("wordspace").innerHTML = "wordspace";
  } else {
    document.getElementById("wordspace").innerHTML = "<span>" + wordspace2_px + "px" + "</span>";
    document.getElementById("wordspace").innerHTML = "<span>" + wordspace2_em + "em" + "</span>";
  }
}

// ~~~~~~~~~~~~~~

function getEmByID(divid) {
  if (!document.getElementById(divid) || document.getElementById(divid).parentNode.tagName.toLowerCase() == "body") {
    return false;
  } else {
    // this is by the element ID, that's why the below and likes wouldn't work
    // !nowork! var elemFontSize = parseInt(window.getComputedStyle(divid, null).fontSize);
    var elemFontSize = parseFloat(window.getComputedStyle(document.getElementById(divid), null).getPropertyValue('font-size'));
    var parentFontSize = parseFloat(window.getComputedStyle(document.getElementById(divid).parentNode, null).getPropertyValue('font-size'));
    // var pxInEm = Math.floor((elemFontSize / parentFontSize * elemFontSize) * 100) / 100;
    var pxInEm = parseFloat((parentFontSize / elemFontSize * elemFontSize).toFixed(2));
    return pxInEm;
  }
}

function tofront(blockid1,blockid2) {
  var zind = window.getComputedStyle(document.getElementById(blockid1).parentElement, null).getPropertyValue('z-index');
  if (zind == "1") {
    document.getElementById(blockid1).parentElement.style.zIndex = "2";
    document.getElementById(blockid2).parentElement.style.zIndex = "1";
    document.querySelector("body").classList.remove(blockid2);
    document.querySelector("body").classList.add(blockid1);
    document.getElementById("zindex").innerHTML = "see font 2";
    document.getElementById("debug").innerHTML = "font 1 displayed";
  } else {
    document.getElementById(blockid1).parentElement.style.zIndex = "1";
    document.getElementById(blockid2).parentElement.style.zIndex = "2";
    document.querySelector("body").classList.remove(blockid1);
    document.querySelector("body").classList.add(blockid2);
    document.getElementById("zindex").innerHTML = "see font 1";
    document.getElementById("debug").innerHTML = "font 2 displayed";
  }
  swaparameters();
}

function swaparameters() {
  var activeid = activedivid();
  fontsizeid(activeid, 0);
  weightid(activeid, 0);
  italicid(activeid, 0);
  decorid(activeid, 0);
  setactivecolours("swap");
  caseid(activeid, 0);
  stretchid(activeid, 0);
  opacityid(activeid, 0);
  alignid(activeid, 0);
  linesizeid(activeid, 0);
  letspaceid(activeid, 0);
  wordspaceid(activeid, 0);
  //  document.getElementById("fntclrbtn").style.color = window.getComputedStyle(document.getElementById(activeid), null).getPropertyValue("color");
  //  document.getElementById("bgclrbtn").style.backgroundColor = window.getComputedStyle(document.getElementById(activeid).parentElement, null).getPropertyValue("background-color");
}

document.getElementById("fileopen1").onclick = function() {
  document.getElementById("browse1").click();
};

document.getElementById("fileopen2").onclick = function() {
  document.getElementById("browse2").click();
};

document.getElementById("browse1").onchange = function() {
  filepicker(this.files[0], 1);
};

document.getElementById("browse2").onchange = function() {
  filepicker(this.files[0], 2);
};

function filepicker(file, fileno) {
  // var file = this.files[0];
  if (file) {
    var picker = new FileReader();
    picker.onload = function(evt) {
      // console.log(evt);
    };
    picker.onerror = function(evt) {
      console.error("error reading the file", evt);
    };
    // picker.readAsDataURL(file);
    // picker.readAsText(file, "UTF-8")
    picker.abort();
    var blobURL = window.URL.createObjectURL(file);
    var fontName = file.name;
    var fileExt = file.name.replace(/^.+\./, "");
    var fontType = fileExt;
    if (fileExt == "ttf") {
      fontType = "truetype";
    }
    if (fileExt == "otf") {
      fontType = "truetype";
    }
    /* document.getElementById("item").innerHTML = 'file: ' + file.name;
    document.getElementById("blob").innerHTML = 'URL: ' + blobURL;
    document.getElementById("test").innerHTML = "CSS: @font-face {font-family: cc-font1; src: url('" + blobURL + "') format('" + fontType + "');}"; */
    document.getElementsByTagName('head')[0].innerHTML = document.getElementsByTagName('head')[0].innerHTML + "\n<style>\n@font-face {font-family: '" + fontName + "'; src: url('" + blobURL + "') format('" + fontType + "');}\n</style>";
    if (fileno == "1") {
      document.getElementById("d21").style.fontFamily = "'" + fontName + "'";
      if (window.getComputedStyle(document.getElementById("d11"), null).getPropertyValue('z-index') == "1") {
        tofront("d21","d22");
      }
    } else {
      document.getElementById("d22").style.fontFamily = "'" + fontName + "'";
      if (window.getComputedStyle(document.getElementById("d12"), null).getPropertyValue('z-index') == "1") {
        tofront("d21","d22");
      }
    }
    document.getElementById("debug").innerHTML = fontName + " set as font " + fileno;
    // revoke the previous blob to free memory
    if (blobURL) {
      window.URL.revokeObjectURL(getcookie('fontblob' + fileno));
    }
    erasecookie('fontname' + fileno);
    erasecookie('fonttype' + fileno);
    erasecookie('fontblob' + fileno);
    setcookie('fontname' + fileno, '"' + fontName + '"', 3650000);
    setcookie('fonttype' + fileno, fontType, 3650000);
    setcookie('fontblob' + fileno, blobURL, 3650000);
  }
}

function hideScroll(divid, coverid) {
  // calculate the scroll width
  var scrollWidth = document.getElementById(divid).offsetWidth - document.getElementById(divid).clientWidth;
  document.getElementById(coverid).style.width = scrollWidth + "px";
}

// https://stackoverflow.com/questions/14573223#answer-24103596
function setcookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getcookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function erasecookie(name) {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 UTC;';
}

function hex2rgb(hex) {
  // stackoverflow.com/questions/5623838#answer-5624139
  // call:
  // alert(hex2rgb("#0033ff").g); // "51";
  // alert(hex2rgb("#03f").g); // "51";
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function rgb2hex(rgb) {
  //stackoverflow.com/questions/1740700#answer-3627747
  if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;
  rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

  function hex(x) {
    return ("0" + parseInt(x).toString(16)).slice(-2);
  }
  return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

// ** font lists
for (var a = 0; a < document.querySelectorAll('.list-arr').length; a++) {
  // var listid = document.querySelectorAll('.list-arr')[a].parentElement.id.replace(/^\D+2/g,'');
  var listid = a + 1;
  document.querySelectorAll('.list-arr')[a].addEventListener('click', listarrowclick.bind(null,listid));
}
function listarrowclick (listid) {
  var activeid = activedivid();
  //// block opening the list for the inactive div
  // if (listid == activeid.replace(/^.*(.)$/g,'$1')) {
    if (document.querySelector('#font-list-body' + listid).offsetHeight > 50) {
      document.querySelector('#font-list-body' + listid + '.open').style.height = 0;
      document.querySelector('#font-list-body' + listid + '.open').style.borderWidth = 0;
      document.querySelector('#font-list-body' + listid + '.open').classList.remove('open');
    } else {
      document.querySelector('#font-list-body' + listid).style.height = '300px';
      document.querySelector('#font-list-body' + listid).style.borderWidth = '1px';
      document.querySelector('#font-list-body' + listid).classList.add('open');
    }
  // }
}

function fontcheck(fontname) {
  var fontexists = false;
  // compare with these base fonts
  var compareto = ['serif', 'sans-serif', 'monospace'];
  // use m or w as they are widest
  // use 'lli' to separate the same matching fonts
  var testtext = "wwwwwwwwwwlli";
  // the larger the better
  var testsize = '80px';
  // add a test span
  var testspan = document.createElement('span');
  testspan.innerHTML = testtext;
  testspan.style.fontSize = testsize;
  var basewidth = {};
  var baseheight = {};
  document.querySelector('body').appendChild(testspan);
  for (var a in compareto) {
    // get the default sizes for the base fonts
    testspan.style.fontFamily = compareto[a];
    // save width of each base font
    basewidth[compareto[a]] = testspan.offsetWidth;
    // save height of each default font
    baseheight[compareto[a]] = testspan.offsetHeight;
    if (fontname != 'default') {
      // 'fontname',[basefont]
      testspan.style.fontFamily = "'" + fontname + "'" + "," + compareto[a];
    } else {
      // to always handle default as present 
      testspan.style.fontFamily = 'serif';
    }
    if (testspan.offsetWidth == basewidth[compareto[a]]) {
      fontexists = false;
    } else {
      if (testspan.offsetHeight == baseheight[compareto[a]]) {
        fontexists = false;
      } else {
        fontexists = true;
        break;
      }
    }
  }
  document.querySelector('body').removeChild(testspan);
  return fontexists;
}

function fontlists() {
  // build a font list
  var fontarray = allfonts();
  // add manually
  // fontarray.push('Ubuntu');
  var fontlists = document.querySelectorAll('.font-list-body .all');
  for (var a = 0; a < fontarray.length; a++) {
    var available = fontcheck(fontarray[a]); // true or false
    if (available == true) {
      for (var b = 0; b < document.querySelectorAll('.font-list-body .all').length; b++) {
        var fontitem = fontlists[b].appendChild(document.createElement("div"));
        fontitem.innerHTML = fontarray[a];
        fontitem.style.fontFamily = '"' + fontarray[a] + '"';
        fontitem.className = 'font-item';
      }
    }
  }

  // assign unique indices, unused so far
  for (var a = 0; a < document.querySelectorAll('.font-item').length; a++) {
    document.querySelectorAll('.font-item')[a].setAttribute("ind",a);
  }  
  
  // part 2: add event listeners for items. 
  // must be done when all list items are already there.
  for (var a = 0; a < document.querySelectorAll('.font-item').length; a++) {
    var listid = document.querySelectorAll('.font-item')[a].parentElement.parentElement.id.replace(/^\D+/g,'');
    document.querySelectorAll('.font-item')[a].addEventListener('click', fontitemclick.bind(null,listid));
  }
  function fontitemclick(listid) {
    var activeid = activedivid();
    //// block opening the list for the inactive div
    // if (listid == activeid.replace(/^.*(.)$/g,'$1')) {
      if (document.querySelector('#font-list-body' + listid).offsetHeight > 50) {
        var recents = document.querySelector('#font-list-body' + listid + ' .recents');
        // move previous font to recents
        recents.appendChild(document.querySelector('#font-list-body' + listid + ' .font-item.active'));
        document.querySelector('#font-list-body' + listid + ' .font-item.active').classList.add('recent');
        document.querySelector('#font-list-body' + listid + ' .font-item.active').classList.remove('active');
        event.target.classList.add('active');
        // event.target.classList.add('recent');
        // event.target.setAttribute("active","yes");
        // var scrolltop = ind * 30 - 30;
        // document.querySelector('#font-list-body1').scrollTo({top: scrolltop, behavior: 'smooth'});
        document.querySelector('#font-list-body' + listid).style.height = 0;
        document.querySelector('#font-list-body' + listid).style.borderWidth = 0;
      } else {
        document.querySelector('#font-list-body' + listid).style.height = '300px';
        document.querySelector('#font-list-body' + listid).style.borderWidth = '1px';
      }
      var divid = activedivid().replace(/\d$/g,'') + listid;
      var fontfamily = document.querySelector('#font-list-body' + listid + ' .font-item.active').innerText;
      faceid(divid,listid,fontfamily);
    }
  // }
}

function faceid(divid,fileno,fontfamily) {
  document.getElementById(divid).style.fontFamily = fontfamily;
  document.getElementById('debug').innerHTML = '<span>' + fontfamily + '</span>';
  erasecookie('fontname' + fileno);
  erasecookie('fonttype' + fileno);
  erasecookie('fontblob' + fileno);
  setcookie('fontname' + fileno, fontfamily, 3650000);
}

function allfonts() {
  var fontarray = [
  // ** standard first, 'default' not included
  'sans-serif','serif','monospace','cursive','fantasy',
  // ** all other
  'Aharoni','Algerian','American Typewriter','Andale Mono','Apple Casual','Apple Chancery','Apple Garamond','Apple Symbols','Arial',/**'Arial Hebrew',**/'Arial Narrow','Arial Rounded MT Bold','Arial Unicode MS','Bahnschrift','Baskerville','Baskerville Old Face','Bauhaus 93','Bell MT','Berlin Sans FB','Berlin Sans FB Demi','Bernard MT Condensed','BierStadt','Big Caslon','Bitstream Charter','Bitstream Symbols','Bodoni MT','Bodoni MT Black','Bodoni MT Condensed','Bodoni MT Poster Compressed','Book Antiqua','Bookman Old Style','Braggadocio','Britannic Bold','Broadway','Brush Script','Brush Script MT','C059','Calibri','Calisto MT','Cambria','Cambria Math','Candara','Century','Century Gothic','Century Schoolbook','Century Schoolbook L','Chalkboard','Chalkduster','Charcoal','Charcoal CY','Charter','Chicago','Cochin','Colonna MT','Comic Sans','Comic Sans MS','Consolas','Constantia','Cooper','Cooper Black','Copperplate','Copperplate Gothic','Corbel','Corsiva Hebrew','Courier','Courier 10 Pitch','Courier New','D050000L','David','DejaVu Sans','DejaVu Sans Mono','DejaVu Serif','Didot','DIN','Dingbats','Droid Sans Fallback','Eras','Eras Bold ITC','Eras Demi ITC','Eras Light ITC','Eras Medium ITC','Footlight MT Light','Forte','Franklin Gothic','Franklin Gothic Book','Franklin Gothic Demi','Franklin Gothic Demi Cond','Franklin Gothic Heavy','Franklin Gothic Medium Cond','FrankRuehl','FreeMono','FreeSans','FreeSerif','Futura','Gabriola','Gadget','Garamond','Geneva','Geneva CY','Georgia','Gill Sans','Gill Sans MT','Gill Sans MT Condensed','Gill Sans MT Ext Condensed Bold','Gill Sans Ultra Bold','Gill Sans Ultra Bold Condensed','Gisha','Grandview','Helvetica','Helvetica CY','Helvetica Neue','Herculanum','Hoefler Text','HoloLens MDL2 Assets','Impact','Ink Free','ITC Bodoni 72','Keyboard','Kuenstler Script','LastResort','Levenim MT','Liberation Mono','Liberation Sans','Liberation Sans Narrow','Liberation Serif','Lucida Blackletter','Lucida Bright','Lucida Calligraphy','Lucida Console','Lucida Handwriting','Lucida Sans','Lucida Sans Unicode','Luminari','Marker Felt','Marlett','Menlo','Microsoft Sans Serif','Miriam, Miriam Fixed','Mistral','Monaco','Monaco CY','Monotype Corsiva','MS Outlook','Mshtakan','Narkisim','New Peninim','New York','Nimbus Mono L','Nimbus Mono PS','Nimbus Roman','Nimbus Roman No9 L','Nimbus Sans','Nimbus Sans L','Nimbus Sans Narrow','Noto Color Emoji','Noto Mono','OCR A Extended','OpenSymbol','Optima','P052','Palatino','Palatino Linotype','Papyrus','Phosphate','Playbill','Raanana','Rockwell','Rod','San Francisco Display','San Francisco Mono','San Francisco Text','San Francisco UI','Sand','Seaford','Segoe Chess','Segoe Fluent Icons','Segoe MDL2 Assets','Segoe Print','Segoe Script','Segoe SD','Segoe UI','Segoe UI Emoji','Segoe UI Historic','Segoe UI Symbol','SignPainter','Sitka Banner','Sitka Display','Sitka Heading','Sitka Small','Sitka Subheading','Sitka Text','Skeena','Skia','Snell Roundhand','Standard Symbols L','Standard Symbols PS','Stencil','STIX Two Math','STIX Two Text','Sylfaen','Symbol','Tahoma','Techno','Tenorite','Textile','Times','Times CY','Times New Roman','Trattatello','Trebuchet MS','Ubuntu','Ubuntu Condensed','Ubuntu Mono','URW Bookman','URW Bookman L','URW Chancery L','URW Gothic','URW Gothic L','URW Palladio L','Verdana','Vivaldi','Vladimir Script','Webdings','Wide Latin','Wingdings','Wingdings 2','Wingdings 3','Yrsa','Z003','Zapf Chancery','Zapf Dingbats','Zapfino'];
  // add manually
  // fontarray.push('Ubuntu');
  return fontarray;
}

// end font lists **

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/* weight by id */
/* old two-way function 
function weight(viewid) {
  if (document.getElementById(viewid).style.fontWeight !== "bold") {
    document.getElementById("debug").innerHTML = "bold";
    document.getElementById(viewid).style.fontWeight = "bold";
  } else {
    document.getElementById("debug").innerHTML = "normal";
    document.getElementById(viewid).style.fontWeight = "normal";
  }
}
*/

/*
document.getElementById("d11").onchange = function() {
  offsetScroll("d11","d21");
};
*/
/*
document.getElementById("d21").onchange = function() {
  offsetScroll("d11","d21");
};
*/
/*
document.getElementById("d21").oninput = function() {
	setScrollWidth("d11","scroll-cover1");
};

document.getElementById("d22").oninput = function() {
	hideScroll("d12","scroll-cover2");
};
*/
/*
document.getElementById("d21").onresize = function() {
	hideScroll("d11","scroll-cover1");
};

 document.getElementById("d22").onresize = function() {
	hideScroll("d12","scroll-cover2");
};
*/

/*
function offsetScroll(parentid,childid) {
  var parent = document.getElementById(parentid);
  // var child = document.getElementById(childid);
  var paddingLeft = parseFloat(window.getComputedStyle(document.getElementById(parent.id), null).getPropertyValue('padding-left'));
  var paddingRight = parseFloat(window.getComputedStyle(document.getElementById(parent.id), null).getPropertyValue('padding-right'));
  if (parent.offsetWidth - parent.clientWidth > 4)  {
    var scrollOffset = (parent.offsetWidth - parent.clientWidth);
    document.getElementById(parent.id).style.width = parent.offsetWidth - paddingLeft - paddingRight + scrollOffset + "px";
  } else {
    document.getElementById(parent.id).style.width = parent.offsetWidth - paddingLeft - paddingRight + "px";
  }
}
*/

// alert("fileno");

/**
// resize fonts by class //
// called like this:
document.getElementById("sizeminus").onclick = function() {
	fontsizecl("d2", "-1px");
};

function fontsizecl(divclass,fntstep) {
  var divs = document.getElementsByClassName(divclass);
	for (var i = 0; i < divs.length; i++) {
		var fntsize1 = window.getComputedStyle(divs[i], null).getPropertyValue('font-size');
		var fntsize2 = parseInt(fntsize1) + parseInt(fntstep) + "px";
		divs[i].style.fontSize = fntsize2;
		document.getElementById("debug").innerHTML = fntsize2;
    document.getElementById("fontsize").innerHTML = fntsize2;
	}
}
**/

/**
// change line height by class //
document.getElementById("lineminus").onclick = function() {
	linesizecl("d2", "-1px");
};

document.getElementById("lineplus").onclick = function() {
	linesizecl("d2","1px");
};

function linesizecl(divclass,linestep) {
  var divs = document.getElementsByClassName(divclass);
	for (var i = 0; i < divs.length; i++) {
		var linesize1 = window.getComputedStyle(divs[i], null).getPropertyValue('line-height');
		var linesize2 = parseInt(linesize1) + parseInt(linestep) + "px";
		divs[i].style.lineHeight = linesize2;
		document.getElementById("debug").innerHTML = linesize2;
    document.getElementById("linesize").innerHTML = linesize2;
	}
}
**/

// resize all previews by class
/*
document.getElementById("viewminus").onclick = function() {
	vertsizecl("d2", "-15px");
};

document.getElementById("viewplus").onclick = function() {
	vertsizecl("d2", "15px");
};

function vertsizecl(vwclass, htstep) {
	var views = document.getElementsByClassName(vwclass);
	for (var i = 0; i < views.length; ++i) {
		var vwheight = parseInt(views[i].clientHeight) + parseInt(htstep) + "px";
		views[i].style.height = vwheight;
	}
}
*/

/*
	var cusid_ele = document.getElementsByClassName('custid');
	for (var i = 0; i < cusid_ele.length; ++i) {
	    var item = cusid_ele[i];  
	    item.innerHTML = 'this is value';
	}
	*/

/*
var elems = document.querySelectorAll('.one');
for (var i = 0; i < elems.length; i++) {
    elems[i].innerHTML = 'content';
};
*/

/** way to add events through listeners 
document.getElementById("fileopen1").addEventListener("click",function(){
  document.getElementById("browse1").click();
},false);
**/

// http://classic.typetester.org
