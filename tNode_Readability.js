var read = require('node-readability');

var fs = require('fs');
//http://howtonode.org/really-simple-file-uploads
//https://xueqiu.com/6056806984/167047168
//https://mp.weixin.qq.com/s/slmK0OWX-5hqSKx1kyZNiw
//https://mp.weixin.qq.com/s/KIJ44DDyt905puV13oAvfg
read('https://xueqiu.com/4206051491/108258083', function(err, article, meta) 
{
  // Main Article
  console.log(article.content);
  // Title
  //console.log(article.title);

  // HTML Source Code
  //console.log(article.html);
  // DOM
  //console.log(article.document);

  // Response Object from Request Lib
  //console.log(meta);

  // Close article to clean up jsdom and prevent leaks
    var articleName = article.title+ '.html';
    fs.writeFile(articleName, article.content, function (err) 
    {
      if (err) 
          throw err;
      console.log('Saved!');
    });

    article.close();
});