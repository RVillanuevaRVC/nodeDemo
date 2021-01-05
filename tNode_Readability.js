var read = require('node-readability');

var fs = require('fs');
//http://howtonode.org/really-simple-file-uploads
//https://xueqiu.com/6056806984/167047168
//https://mp.weixin.qq.com/s/slmK0OWX-5hqSKx1kyZNiw
//https://mp.weixin.qq.com/s/KIJ44DDyt905puV13oAvfg
//https://xueqiu.com/4206051491/108258083


//https://xueqiu.com/4206051491/110796276
//https://xueqiu.com/4206051491/113469272
//https://xueqiu.com/4206051491/113814823
//https://xueqiu.com/4206051491/115813656
//https://xueqiu.com/4206051491/117932140
//https://xueqiu.com/4206051491/118377080
//https://xueqiu.com/4206051491/119590301
//https://xueqiu.com/4206051491/122723161
//https://xueqiu.com/4206051491/136598839
//https://xueqiu.com/4206051491/137685352
//https://xueqiu.com/4206051491/137685643
//https://xueqiu.com/4206051491/137687035
//https://xueqiu.com/4206051491/137688181
//https://xueqiu.com/4206051491/137692013
//https://xueqiu.com/4206051491/139446240
//https://xueqiu.com/4206051491/141932558
//https://xueqiu.com/2860692072/142793352



//https://xueqiu.com/2860692072/125997664
//https://xueqiu.com/2860692072/142816713
//https://xueqiu.com/2860692072/143159148
//https://xueqiu.com/2860692072/151544919
//https://xueqiu.com/2860692072/153035204
//https://xueqiu.com/2860692072/164428236
//https://xueqiu.com/2860692072/161962926
//https://xueqiu.com/2860692072/161567115
//https://mp.weixin.qq.com/s?__biz=MzA3MzM4OTg1OQ==&mid=2732593625&idx=1&sn=2b84828deb86d364bc08e3ebac11f81d&chksm=b81b73958f6cfa831fdde2dab7241e33979ed704bc5f45ea2d13231415b27f0bb68868cf27e7&mpshare=1&scene=1&srcid=&from=groupmessage&ascene=1&devicetype=android-28&version=27000439&nettype=WIFI&abtest_cookie=BQABAAgACgALABIAEwAGAJ2GHgAjlx4AW5keANSZHgDcmR4A4JkeAAAA&lang=zh_CN&pass_ticket=mfhMOa4TqGSaB6ipR8Rs%2FiCShR%2FV67sxbrvzWxOIDs%2FRz74zKJCuKJP6sfQwNHLM&wx_header=1
//


//https://xueqiu.com/2860692072/141607277
//https://xueqiu.com/2860692072/144538499
//https://xueqiu.com/2860692072/154369517
//https://xueqiu.com/2860692072/158602677
//https://xueqiu.com/2860692072/160711288
//

//https://xueqiu.com/2860692072/161512486
//https://xueqiu.com/2860692072/161541739


//https://xueqiu.com/9507152383/136612495
//https://xueqiu.com/9507152383/135705491
//https://xueqiu.com/9507152383/102173018
//https://xueqiu.com/9507152383/116808235
//https://xueqiu.com/9507152383/123722034
//https://xueqiu.com/9507152383/125247807
//

read('https://mp.weixin.qq.com/s?__biz=MzIwMTY1NDg4Nw==&mid=2247490780&idx=1&sn=154bd2c5e2501775e6152f88c010796b&chksm=96ebcbd4a19c42c292eff1a60d6fa96cbf84b471c39cadce51f523aa7809e9e9833fee5607be&scene=21#wechat_redirect', function(err, article, meta) 
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
    var articleName = /*article.title+ */ 'TXSW.html';
    fs.writeFile(articleName, article.content, function (err) 
    {
      if (err) 
          throw err;
      console.log('Saved!');
    });

    article.close();
});