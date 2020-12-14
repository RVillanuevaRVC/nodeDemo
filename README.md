# nodeDemo
refer to article below
https://isd-soft.com/tech_blog/accessing-google-apis-using-service-account-node-js/
https://medium.com/@jason_dark/how-to-connect-to-the-g-suite-apis-using-a-service-account-key-with-node-js-659e97981a04
https://dev.to/mornir/create-a-service-account-to-authenticate-with-google-5b1k
https://cloud.google.com/docs/authentication/getting-started#auth-cloud-implicit-nodejs
https://github.com/extrabacon/google-oauth-jwt





https://www.derpturkey.com/service-to-service-google-api-calls-with-node/

https://flaviocopes.com/google-api-authentication/

https://googleapis.dev/nodejs/google-auth-library/5.2.2/classes/JWT.html#authorize


https://www.linkedin.com/pulse/upload-file-google-drive-nodejs-bhavya-jain


function storeFiles(auth) {
      console.log("auth", JSON.stringify(auth));
    const drive = google.drive({version: 'v3', auth});
    var fileMetadata = {
            'name': 'ImageTest.jpeg'
    };
    var media = {
            mimeType: 'image/jpeg',
            //PATH OF THE FILE FROM YOUR COMPUTER
            body: fs.createReadStream('C:/Users/bhavya.jain/Downloads/traveltattoo.jpg')
    };
    drive.files.create({
        resource: fileMetadata,
        media: media,
        fields: 'id'
    }, function (err, file) {
    if (err) {
        // Handle error
        console.error(err);
    } else {
        console.log('File Id: ', file.data.id);
    }
 });
  }
