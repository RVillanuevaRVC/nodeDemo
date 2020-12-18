//https://morioh.com/p/36eb0ada6507
//This is demo on useing node.js, Cheerio.js and other to scrape article from XueQiu and WeChat for better reading experiences purpose
//another text about how https://medium.com/javascript-in-plain-english/cheerio-script-for-turning-html-pages-into-json-files-8e9363106904
//and one more https://www.nodejsconnect.com/blog/articles/basic-web-scraping-nodejs-and-cheeriojs


//the article in xueqiu html path:
//#app > div.container.article__container > article
//

//the code below works except the links in the doc are still pointing to original site
const request= require("request-promise")
const cheerio= require("cheerio");
var fs = require('fs');

request("https://xueqiu.com/2860692072/136517057", 
    (error, response, html) => 
    {
        if(!error && response.statusCode==200) 
        {
            const $= cheerio.load(html);
            
            let varArticle = $('#app > div.container.article__container > article') ;
            console.log(varArticle.text()) ;

            $content = $('#app > div.container.article__container > article').html(),
            fs.writeFile('content.html', $content, function(err)
            {
                console.log('content.html successfully written to HTML folder');
            }) ;
        }
    }
);

/*
//below is code from https://www.nodejsconnect.com/blog/articles/basic-web-scraping-nodejs-and-cheeriojs
function scrapePage () 
{
    //make an HTTP request for the page to be scraped
    request(pageURL, function(error, response, responseHtml)
    {        

        //write the entire scraped page to the local file system
        fs.writeFile(__dirname + '/HTML/entire-page.html', responseHtml, function(err){
            console.log('entire-page.html successfully written to HTML folder');
        })

        //write isolated sections of the entire scraped page to the local file system

        //create the cheerio object
        var $ = cheerio.load(responseHtml),
            //create a reference to the header element
            $header = $('header').html(),
            $content = $('#mainContent').html(),
            $footer = $('footer').html();

        //write the header to the local file system
        fs.writeFile(__dirname + '/HTML/header.html', $header, function(err){
            console.log('header.html successfully written to HTML folder');
        });

        //write the content to the local file system
        fs.writeFile(__dirname + '/HTML/content.html', $content, function(err){
            console.log('content.html successfully written to HTML folder');
        })

        //write the footer to the local file system
        fs.writeFile(__dirname + '/HTML/footer.html', $footer, function(err){
            console.log('footer.html successfully written to HTML folder');
        });
    });
}
*/