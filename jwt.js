// Copyright 2017, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

/**
 * The JWT authorization is ideal for performing server-to-server
 * communication without asking for user consent. Usually, you aren't
 * going to directly instantiate a JWT instance.  Typically, this is acquired
 * by using the `auth.getClient()` method.
 *
 * Suggested reading for Admin SDK users using service accounts:
 * https://developers.google.com/admin-sdk/directory/v1/guides/delegation
 **/


 //refer to:
 //https://github.com/googleapis/google-auth-library-nodejs/blob/master/samples/jwt.js

 const {google} = require('googleapis');
const {JWT} = require('google-auth-library');
//https://www.googleapis.com/auth/drive
//https://www.googleapis.com/auth/drive.file

async function main() 
{
    
    const keys = require('./greenFieldDemo-credential.json');
    const client = new JWT(
        {
            email: keys.client_email,
            key: keys.private_key,
            scopes: ['https://www.googleapis.com/auth/drive'],
        }
    );
    
    
    //const url = `https://drive.google.com/drive/folders/1rMkdKUZYrguYvaG0dXNWR7zVCzMYpZc_`;
    //const url = 'https://www.googleapis.com/drive/v3/files' ;
    // file id const url = 'https://drive.google.com/file/d/1W9rAgKVi2LrZhFiAVayf_-q1wUWLqV76/view?usp=sharing'
    //const url = 'https://www.googleapis.com/drive/v2/files' ;
    //const url = 'https://www.googleapis.com/drive/v3/files/1W9rAgKVi2LrZhFiAVayf_-q1wUWLqV76' ;
    //console.log(url) ;
    
    
    //const res = await client.request({url});
    //console.log('----------------DNS Info:------------------------');
    //console.log('response:'+ res.data);
    
    // After acquiring an access_token, you may want to check on the audience, expiration,
    // or original scopes requested.  You can do that with the `getTokenInfo` method.
    //const tokenInfo = await client.getTokenInfo(client.credentials.access_token);
    //console.log(tokenInfo);
    

    /*
    //trial on request something
    //refer to https://isd-soft.com/tech_blog/accessing-google-apis-using-service-account-node-js/
   let google = require('googleapis');
   let drive = google.drive('v3');
   drive.files.list({auth: client,q: "name contains 'TV'"}, function (err, response) 
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
            } 
            else 
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
}


const args = process.argv.slice(2);
main(...args).catch(console.error);