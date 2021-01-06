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
//refer to https://cheerio.js.org/
//https://slacker.ro/2020/02/09/web-scraping-and-parsing-html-with-node-js-and-cheerio/
//http://zetcode.com/javascript/cheerio/

/*
const request= require("request-promise")
const cheerio= require("cheerio");


//code below works fine with the URI given
request("https://www.bullion-rates.com/gold/INR/2007-1-history.htm", 
    (error, response, html) => 
    {
        if(!error && response.statusCode==200) 
        {
            const $= cheerio.load(html);





            
            
            //const output= datarow.find("th").text();

            //console.log(output) ;

            
            
            //$(".DataRow").each((i, data) => {
            //    const item= $(data).text();
            //    const item1= $(data).text();
            //    const item2= $(data).text();

            //    console.log(item, item1, item2);
            //}) ;
            
        }
    }
);



//yahoo finance Company Profile--cash flow
//https://finance.yahoo.com/quote/BAM/cash-flow?p=BAM


//sina finance Compnay Profile--cash flow
//https://quotes.sina.com.cn/usstock/hq/cash.php?s=bam&t=annual


//code below works fine now
request("https://quotes.sina.com.cn/usstock/hq/cash.php?s=bam&t=annual", 
    (error, response, html) => 
    {
        if(!error && response.statusCode==200) 
        {
            
            const $= cheerio.load(html);
            
            //let title = $('title');
            //console.log(title.text());
            //let idClose = $('#tip_mk_close') ;
            //console.log(idClose) ;
            //body > div.wrap > div.news.keyratios > div.tbl_wrap > table:nth-child(5) > tbody
            //let varBody = $('body') ;
            //let varDivwrap 
            //let datatbl= $('data_tbl os_tbl');
            //console.log(datatbl.get(0)) ;
            //body > div.wrap > div.news.keyratios > div.tbl_wrap > table:nth-child(5) > tbody > tr:nth-child(5) > td:nth-child(2)
            //body > div.wrap > div.news.keyratios > div.tbl_wrap > table:nth-child(5) > tbody
            //let varDivTblWrap = $('body > div.wrap > div.news.keyratios > div.tbl_wrap') ;
            //console.log(varDivTblWrap) ;
            let varTblBody = $('body > div.wrap > div.news.keyratios > div.tbl_wrap > table:nth-child(5) > tbody') ;
            //console.log(varTblBody) ;
            let varRecord = varTblBody.children().first() ;
            console.log(varRecord.get(0).tagName);
            console.log(varRecord.text()) ;

            varRecord = varRecord.next() ;
            console.log(varRecord.get(0).tagName);
            console.log(varRecord.text()) ;

            varRecord = varRecord.next() ;
            console.log(varRecord.get(0).tagName);
            console.log(varRecord.text()) ;

            varRecord = varRecord.next() ;
            console.log(varRecord.get(0).tagName);
            console.log(varRecord.text()) ;

            varRecord = varRecord.next() ;
            console.log(varRecord.get(0).tagName);
            console.log(varRecord.text()) ;

            varRecord = varRecord.next() ;
            console.log(varRecord.get(0).tagName);
            console.log(varRecord.text()) ;
        }
    }
);



//https://www.codingwithstefan.com/table-example/
//https://medium.com/@stefanhyltoft/scraping-html-tables-with-nodejs-request-and-cheerio-e3c6334f661b

//code below works for the table
request("https://www.codingwithstefan.com/table-example/", 
    (error, response, html) => 
    {
        if(!error && response.statusCode==200) 
        {
            const $= cheerio.load(html);
            let varTbl = $('table') ;
            //console.log(varTbl) ;
            let varTblBody = varTbl.children('tbody') ;
            //console.log(varTblBody) ;

            //vatTblBody.children
            let varRecord = varTblBody.children().first() ;
            console.log(varRecord.get(0).tagName);
            console.log(varRecord.text()) ;

            varRecord = varRecord.next() ;
            console.log(varRecord.get(0).tagName);
            console.log(varRecord.text()) ;

            varRecord = varRecord.next() ;
            console.log(varRecord.get(0).tagName);
            console.log(varRecord.text()) ;

            varRecord = varRecord.next() ;
            console.log(varRecord.get(0).tagName);
            console.log(varRecord.text()) ;
        }
    }
);
*/


//Below code works fine to merge two html files
// one is template file with head and style
//another one is content file 
//https://morpheusdata.com/cloud-blog/consolidation-how-to-combine-html-content-in-nodejs/
//try this to merge files
//manul http://zetcode.com/javascript/cheerio/
const cheerio= require("cheerio");
var fs = require('fs');

//fs.readFile(varSrcFile1,)
const varSrcFile1 = 'c:\\WS\\Demo\\template.html' ;

var varSrcData1 ;

try {
    varSrcData1 = fs.readFileSync(varSrcFile1, 'utf8') ;
    console.log(varSrcData1) ;
 } catch (err) {
    console.error(err)
} ;

var varTemplate = cheerio.load(varSrcData1) ;

const varSrcFile2 = 'c:\\WS\\Demo\\content.html' ;

var varSrcData2 ;
try {
    varSrcData2 = fs.readFileSync(varSrcFile2, 'utf8') ;
    console.log(varSrcData2) ;
 } catch (err) {
    console.error(err)
} ;

var varContent = cheerio.load(varSrcData2) ;
console.log(varContent) ;


let articleBody = varTemplate("#ArticleID") ;
console.log('---------------------> Template') ;
console.log(articleBody) ;

let articlecontent = varContent(".article__bd__detail") ;
//console.log('++++++++++++++++++++++content') ;
//console.log(articlecontent) ;

articleBody.append(articlecontent[0]) ;
//articleBody.append(articlecontent) ;
//console.log('=============================merged') ;
//console.log(articleBody) ;



var mergeFileName = 'c:\\WS\\demo\\merged-3.html' ;
fs.writeFile(mergeFileName, varTemplate.html(), function (err) 
{
  if (err) 
      throw err;
  console.log('Saved!');
});