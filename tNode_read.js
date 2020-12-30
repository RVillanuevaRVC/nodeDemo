var read = require('node-read');
var fs = require('fs');

//https://seekingalpha.com/article/4396595-dont-let-door-hit-ya-2020-are-5-stocks-i-buying-in-2021
//https://mp.weixin.qq.com/s/KIJ44DDyt905puV13oAvfg
read('https://www.readworks.org/article/When-the-Empire-State-Building-Was-New/edb0da00-6aee-4ebc-ba25-3de550cef1be#!articleTab:content/', function(err, article, res) 
{

  // Main Article.
  console.log(article.content);
  
  // Title
  //console.log(article.title);

  // HTML 
  //console.log(article.html);
  
  // DOM
  //console.log(article.dom);
  var articleName = article.title+'2.html' ;
  fs.writeFile(articleName, article.content, function (err) 
  {
    if (err) 
        throw err;
    console.log('Saved!');
  });
  
});