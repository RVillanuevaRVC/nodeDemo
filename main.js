const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
const {JWT} = require('google-auth-library');
const privatekey = require('./greenFieldDemo-credential.json');


const jwtClient = new JWT(
    {
        email: privatekey.client_email,
        key: privatekey.private_key,
        scopes: ['https://www.googleapis.com/auth/drive'],
    }
);

jwtClient.authorize(function (err, tokens) 
    {
        if (err) 
        {
            console.log(err);
            return;
        } else 
        {
            console.log("Successfully connected!");
            //console.log(tokens);
        }
    }
);

//Google Drive API
//let drive = google.drive('v3');
const drive = google.drive({version: 'v3', jwtClient/*auth*/});
//drive.file.get({})

/*------------------------------------------------------------------>
//function listFile()
//the code below works fine
//drive.files.list({auth: jwtClient,q: "name contains 'RVDemo'"}, (err, res) =>
drive.files.list({auth: jwtClient}, (err, res) => 
    {
        if (err) 
            return console.log('-->The API returned an error: ' + err);

        const files = res.data.files;
        if (files.length) 
        {
            console.log('Files:');
            files.map((file) => {
                console.log(`${file.name} (${file.id})`);
            });
        } 
        else {
            console.log('No files found.');
        }
  }
);
//end of list file
*/

/*------------------------------------------------------------------>
  //test on download file
  //Code below works now
   //https://drive.google.com/file/d/1W9rAgKVi2LrZhFiAVayf_-q1wUWLqV76/view?usp=sharing
    var varfileId = '1W9rAgKVi2LrZhFiAVayf_-q1wUWLqV76';
    var dest = fs.createWriteStream('./dl-2.txt');

    drive.files.get({ auth: jwtClient,fileId: varfileId, alt: 'media' })
        .then(result => 
            { 
                console.log(result.data); 
                dest.write(result.data) ;
                //console.log
            })
        .catch(err=>
            { 
                console.log('Erroer happend------------>');
                console.log(err); 
            });
    //end of test download file
*/


/*
//------------------------------------------------------------------>
//test on upload text file
//Code below works now
const res = drive.files.create({auth: jwtClient,requestBody: {name: 'DrvTest.txt',
        mimeType: 'text/plain',
        parents:['1rMkdKUZYrguYvaG0dXNWR7zVCzMYpZc_']},
    media: {mimeType: 'text/plain',body: 'Hello World,DrvAPI'}
}).then (result => 
    { 
        console.log(result); 
        //dest.write(result.data) ;
        //console.log
    })
.catch(err=>
    { 
        console.log('Erroer happend------------>');
        console.log(err); 
    });
;
//console.log(res.data) ;
*/


//------------------------------------------------------------------>
//test on upload Photo file
//Code below works now
const res = drive.files.create({auth: jwtClient,requestBody: {name: 'testimage.png',
        mimeType: 'image/png',
        parents:['1rMkdKUZYrguYvaG0dXNWR7zVCzMYpZc_']},
    media: {mimeType: 'image/png',body: fs.createReadStream('awesome.png')}
}).then (result => 
    { 
        console.log(result); 
        //dest.write(result.data) ;
        //console.log
    })
.catch(err=>
    { 
        console.log('Erroer happend------------>');
        console.log(err); 
    });
;
//console.log(res.data) ;

