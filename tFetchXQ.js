
const cheerio= require("cheerio");
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

read('https://xueqiu.com/4206051491/113469272', function(err, article, meta) 
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
    
    /*
    var varPath = 'c:\\WS\\Demo\\' ;
    var articleName = ;//varPath+ 'Original\\'+ 'XQ1.html';
    fs.writeFile(articleName, article.content, function (err) 
    {
      if (err) 
          throw err;
      console.log('Saved!');
    });

    article.close();
    */

    //inside the curve brace is the code to merge with template
    {
        //load the template HTML file
        //fs.readFile(varSrcFile1,)
        const varSrcFile1 = 'c:\\WS\\demo\\Template\\Heti-Template.html' ;

        var varSrcData1 ;

        try {
            varSrcData1 = fs.readFileSync(varSrcFile1, 'utf8') ;
            //console.log(varSrcData1) ;
        } catch (err) 
        {
            console.error(err)
        } ;

        var varTemplate = cheerio.load(varSrcData1) ;
        let articleBody = varTemplate("#ArticleID") ;

        //load the file to be converted
        const varSrcFile2 = 'c:\\WS\\demo\\Original\\XQ1.html' ;

        var varSrcData2 ;
        try 
        {
            varSrcData2 = fs.readFileSync(varSrcFile2, 'utf8') ;
            //console.log(varSrcData2) ;
        }catch (err) 
        {
            console.error(err)
        } ;

        var varOrigianlContent = cheerio.load(varSrcData2) ;
        let articlecontent = varOrigianlContent('.article__bd__detail') ;
        
        //append the content from original to template
        articleBody.append(articlecontent[0]) ;




        var mergeFileName = 'c:\\WS\\demo\\Styled\\XQ_1.html' ;
        fs.writeFile(mergeFileName, varTemplate.html(), function (err) 
        {
            if (err) 
                throw err;
            console.log('Saved!');
        });

    }
});