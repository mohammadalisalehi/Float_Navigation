
// ------------------------------------------------------fixHeader

document.addEventListener("scroll", fixHeader);
function fixHeader ()
{
	var CNum1 = document.getElementsByClassName("num1")[0];
	var CNum2 = document.getElementsByClassName("num2")[0];
	var CNum3 = document.getElementsByClassName("num3")[0];

	var sec2 = parseInt(CNum1.offsetTop);
	var sec2 = parseInt(CNum2.offsetTop);
	var sec3 = parseInt(CNum3.offsetTop);

	var headerHeight = document.getElementsByTagName("header")[0].offsetHeight;

	var body = document.body;
	var scroll = document.body.scrollTop;
	var cName = "";

	if(scroll < 150)
	{
		cName = "";
	}
	else if (scroll > 150)
	{
		cName = " fix";
		if ((scroll)+headerHeight > sec2)
		{
			cName += " sec2";
		}
		if ((scroll)+headerHeight > sec3)
		{
			cName += " sec3";
		}
	}
	body.className = cName;
}

// ----------------------------------------------------------pop up
document.addEventListener("scroll", popup);
var div = document.getElementsByClassName("div")[0];
var pop = parseInt(div.offsetTop);

function popup ()
{
	var scroll = document.body.scrollTop;
	var cName  = "";
	if(scroll > pop - 445)
	{
		cName += "popup";
	}
	div.className = cName;
}

// ----------------------------------------------------------aside move
document.getElementsByClassName("button")[0].addEventListener("click", moveSidebar);

function moveSidebar()
{
	var aside = document.getElementById('aside');
	if(aside.className)
	{
		aside.className = "";
	}
	else
	{
		aside.className = "active";
	}
}
