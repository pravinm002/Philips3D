/*if($.browser.msie) 
{
	if(parseInt($.browser.version)<=9)
	{
		location.href = "inner.html?"+location.href.split("?")[1];
	}

}*/
onResizeFn = function(e, _bool)
{
	var shellWidth = parseInt($('#shellHolder').css("width"));//1024;
	var shellHeight= parseInt($('#shellHolder').css("height"));//680;
	var newShellHeight;
	var newShellWidth;
	var agent=navigator.userAgent.toLowerCase();
    var is_ipad = ((agent.indexOf('ipad') != -1));

	var actWid = Number($(window).width());
	var actHgt = Number($(window).height());
	if(actHgt < actWid)
	{
		newShellHeight = actHgt;
		var scale = Number(shellHeight/newShellHeight).toFixed(2);
		newShellWidth = (shellWidth/shellHeight)*newShellHeight;
		var _aleft = (actWid/2)-(Number(newShellWidth)/2);
		if(_aleft<0)
		{
			newShellWidth = actWid;
			//scale = Number(shellWidth/newShellWidth).toFixed(2); // Commented by Govinda to fix the Gizmo going out of the display area.
			scale = Number(shellWidth/newShellWidth).toFixed(2);
			newShellHeight = (shellHeight/shellWidth)*newShellWidth;
		}
		if(_bool)
		{
			var _nscale = 1/scale;
			if(_nscale < 0.6)
			{
				_nscale = 0.6;
			}
			$('#shellHolder').css(
			{
				"width":(parseInt($('#shellHolder').css("width")) * _nscale)+"px",
				"height":(parseInt($('#shellHolder').css("height")) * _nscale)+"px",
			});
			 setTimeout(onResizeFn, 100);
		}
		else
		{
			if(scale != 1)
			{
				$('#shellHolder').css(
				{
					"transform": "translate(-"+(shellWidth/2)+"px,-"+(shellHeight/2)+"px) scale("+(1/scale)+","+(1/scale)+") translate("+(shellWidth/2)+"px,"+(shellHeight/2)+"px)",
					"-ms-transform": "translate(-"+(shellWidth/2)+"px,-"+(shellHeight/2)+"px) scale("+(1/scale)+","+(1/scale)+") translate("+(shellWidth/2)+"px,"+(shellHeight/2)+"px)",
					"-webkit-transform": "translate(-"+(shellWidth/2)+"px,-"+(shellHeight/2)+"px) scale("+(1/scale)+","+(1/scale)+") translate("+(shellWidth/2)+"px,"+(shellHeight/2)+"px)"
				});
			}
			else
			{
				$('#shellHolder').css(
				{
					"transform": "",
					"-ms-transform": "",
					"-webkit-transform": ""
				});
			}
		}
	}
	else
	{
		newShellWidth = actWid;
		var scale = Number(shellWidth/newShellWidth).toFixed(2);
		newShellHeight = (shellHeight/shellWidth)*newShellWidth;
		if(_bool)
		{
			var _nscale = 1/scale;
			if(_nscale < 0.6)
			{
				_nscale = 0.6;
			}
			$('#shellHolder').css(
			{
				"width":(parseInt($('#shellHolder').css("width")) * _nscale)+"px",
				"height":(parseInt($('#shellHolder').css("height")) * _nscale)+"px",
			});
			 setTimeout(onResizeFn(), 100);
		}
		else
		{
			if(scale != 1)
			{
				$('#shellHolder').css(
				{
					"transform": "translate(-"+(shellWidth/2)+"px,-"+(shellHeight/2)+"px) scale("+(1/scale)+","+(1/scale)+") translate("+(shellWidth/2)+"px,"+(shellHeight/2)+"px)",
					"-ms-transform": "translate(-"+(shellWidth/2)+"px,-"+(shellHeight/2)+"px) scale("+(1/scale)+","+(1/scale)+") translate("+(shellWidth/2)+"px,"+(shellHeight/2)+"px)",
					"-webkit-transform": "translate(-"+(shellWidth/2)+"px,-"+(shellHeight/2)+"px) scale("+(1/scale)+","+(1/scale)+") translate("+(shellWidth/2)+"px,"+(shellHeight/2)+"px)"
				});
			}
			else
			{
				$('#shellHolder').css(
				{
					"transform": "",
					"-ms-transform": "",
					"-webkit-transform": ""
				});
			}
		}
	}
	scaleVal = scale;
	var _left = (actWid/2)-(Number(newShellWidth)/2);
	var _top = (actHgt/2)-(Number(newShellHeight)/2);
	$('#shellHolder').css("left", _left);
	$('#shellHolder').css("top", _top);
}

$(window).mouseup(function(e) {
	if(document.getElementById("shellHolder").contentWindow)
	{
		document.getElementById("shellHolder").contentWindow.onWindowMouseUp();
	}
});