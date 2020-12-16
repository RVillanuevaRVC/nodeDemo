//refer https://medium.com/@dylan.sather/scrape-a-site-with-node-and-cheerio-in-5-minutes-4617daee3384
/*
//https://m.html.cn/qa/javascript/11761.html
1. $,是指prototype定义的一类方法


$("id")  得到的是页面id为"id"的元素
$F("id") 得到的是页面id为"id"的元素的值,这是只读的,不可写

2. 通用性方法


这个程序包里面包含了许多预定义的对象和通用性方法。编写这些方法的明显的目的就是为了减少你大量的重复编码和惯用法。

2.1. 使用 $()方法


$() 方法是在DOM中使用过于频繁的 document.getElementById() 方法的一个便利的简写，就像这个DOM方法一样，这个方法返回参数传入的id的那个元素。

比起DOM中的方法，这个更胜一筹。你可以传入多个id作为参数然后 $() 返回一个带有所有要求的元素的一个 Array 对象。下面的例子会向你描述这些。

<HTML>
	<HEAD>
		<TITLE> Test Page </TITLE>
		<mce:script src="prototype-1.3.1.js" mce_src="prototype-1.3.1.js"></mce:script>
		<mce:script type="text/javascript"><!--
			function test1()
			{
				var d = $(’myDiv’);
				alert(d.innerHTML);
			}
			function test2()
			{    
				var divs = $(’myDiv’,’myOtherDiv’);   
				for(i=0; i<divs.length; i++)   
				{      
					alert(divs[i].innerHTML);  
				}  
			}
		
// --></mce:script>
	</HEAD>
	<BODY> 
		<div id="myDiv"> 
			<p>This is a paragraph</p> 
		</div> 
		
		<div id="myOtherDiv">   
			<p>This is another paragraph</p>  
		</div> 
		
		<input type="button" value=Test1 οnclick="test1();"><br> 
		<input type="button" value=Test2 οnclick="test2();"><br>
	</BODY>
</HTML>

这个方法的另一个好处就是你可以传入id字符串或者元素对象自己，这使得在创建可以传入任何形式参数的方法的时候， 它变得非常有用。


*/
