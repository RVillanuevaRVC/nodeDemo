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
        }
    }
);

//Google Drive API
//let drive = google.drive('v3');
const drive = google.drive({version: 'v3', jwtClient/*auth*/});
//drive.file.get({})

drive.files.list({auth: jwtClient/*,q: "name contains 'RVDemo'"*/}, (err, res) => 
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

/*
drive.files.list({auth: jwtClient,q: "name contains 'TV'"}, function (err, response) 
    {
        if (err) 
        {
            console.log('The API returned an error: ' + err);
            return;
        }

        var files = response.files;
        if (files.length == 0) 
        {
            console.log('No files found.');
        } else 
        {
            console.log('Files from Google Drive:');
            for (var i = 0; i < files.length; i++) 
            {
                var file = files[i];
                console.log('%s (%s)', file.name, file.id);
            }
        }
    }
);
*/