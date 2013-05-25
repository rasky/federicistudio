function initImage(id) 
{
  image = document.getElementById(id);
  setOpacity(image, 0);
  image.style.visibility = "visible";
  fadeIn(id,0);
}

function initImageFadeOut(id) 
{
  image = document.getElementById(id);
  setOpacity(image, 100);
  image.style.visibility = "visible";
  fadeOut(id,100);
}

function initImageBounce(id) 
{
  image = document.getElementById(id);
  setOpacity(image, 100);
  image.style.visibility = "visible";
  fadeOutIn(id,100,-10);
}

function fadeIn(objId,opacity) 
{
  if (document.getElementById) 
  {
    obj = document.getElementById(objId);
    if (opacity <= 100) 
    {
      setOpacity(obj, opacity);
      opacity += 10;
      window.setTimeout("fadeIn('"+objId+"',"+opacity+")", 10);
    }
  }
}

function fadeOut(objId,opacity) 
{
  if (document.getElementById) 
  {
    obj = document.getElementById(objId);
    if (opacity >= 0) 
    {
	  opacity = opacity-10;
      setOpacity(obj, opacity);
      
      window.setTimeout("fadeOut('"+objId+"',"+opacity+")", 10);
    }
	else
	{
		obj.style.display="none";
	}
  }
}

function fadeOutIn(objId,opacity,variation) 
{
  if (document.getElementById) 
  {
    obj = document.getElementById(objId);
    if (opacity >= 80 && variation<0) 
    {
      setOpacity(obj, opacity);
      opacity += variation;
      window.setTimeout("fadeOutIn('"+objId+"',"+opacity+","+variation+")", 10);
    }
		if(opacity<80 && variation<0)
		{
			variation = -variation;
		}
		if(opacity<=100 && variation>0) 
		{
			setOpacity(obj, opacity);
      opacity += variation;
      window.setTimeout("fadeOutIn('"+objId+"',"+opacity+","+variation+")", 10);
		}
		if (opacity>100)
		{
			setOpacity(obj, 100);			
		}
  }
}

function setOpacity(obj, opacity) 
{
  opacity = (opacity == 100)?99.999:opacity;
  // IE/Win
  obj.style.filter = "alpha(opacity:"+opacity+")";
  // Safari<1.2, Konqueror
  obj.style.KHTMLOpacity = opacity/100;
  // Older Mozilla and Firefox
  obj.style.MozOpacity = opacity/100;
  // Safari 1.2, newer Firefox and Mozilla, CSS3
  obj.style.opacity = opacity/100;
}

function getStyle(oElm, strCssRule)
{
	var strValue = "";
	if(document.defaultView && document.defaultView.getComputedStyle)
	{
		strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
	}
	else if(oElm.currentStyle)
	{
		strCssRule = strCssRule.replace(/\-(\w)/g, function (strMatch, p1){return p1.toUpperCase();});
		strValue = oElm.currentStyle[strCssRule];
	}
	return strValue;
}
/*
function show(id)
{
	img=document.getElementById(id);
	//alert(getStyle(img,"color"));
	if(getStyle(img,"color")=="rgb(0, 0, 0)"||getStyle(img,"color")=="#000000"||getStyle(img,"color")=="black")
	{
		img.style.zIndex=101;
		img.style.display="block";
		initImage(id);
	}
}*/
/*
function hide(id)
{

	img=document.getElementById(id);
	//alert(img.style.color.toString());
	if(getStyle(img,"color")=="rgb(0, 0, 0)"||getStyle(img,"color")=="#000000")
	{
		initImageFadeOut(id);
		//img.style.display="none";
		//img.style.zIndex=0;
	}
	tooltip.hide();
}

*/
/*
function closedescription(id)
{
	id.parentNode.style.display="none";
}*/