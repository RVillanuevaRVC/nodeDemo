const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
const {JWT} = require('google-auth-library');
const privatekey = require('./greenFieldDemo-credential.json');


const jwtClient = new JWT(
    {
        email: privatekey.client_email,
        key: privatekey.private_key,
        scopes: ['https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/calendar'],
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

/*
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
*/

//------------------------------------------------------------------>
//test on google calendar
// Create a new calender instance.
//calendar ID :  ua3slt7atnb5mjg80snfc9bfu8@group.calendar.google.com
const calendar = google.calendar({ version: 'v3', auth: jwtClient });

// Create a new event start date instance for temp uses in our calendar.
const eventStartTime = new Date();
eventStartTime.setDate(eventStartTime.getDay() + 2);

// Create a new event end date instance for temp uses in our calendar.
const eventEndTime = new Date();
eventEndTime.setDate(eventEndTime.getDay() + 4);
eventEndTime.setMinutes(eventEndTime.getMinutes() + 45);

// Create a dummy event for temp uses in our calendar
const event = {
  summary: `Meeting with Sam`,
  location: `3595 California St, San Francisco, CA 94118`,
  description: `Meet with David to talk about the new client project and how to integrate the calendar for booking.`,
  colorId: 1,
  start: {
    dateTime: eventStartTime,
    timeZone: 'America/Denver',
  },
  end: {
    dateTime: eventEndTime,
    timeZone: 'America/Denver',
  },
};

/*
//The code below works fine
calendar.events.insert(
    {
        auth: jwtClient,
        calendarId: 'ua3slt7atnb5mjg80snfc9bfu8@group.calendar.google.com',
        resource: event,
    }, function(err, event) 
    {
        if (err) 
        {
            console.log('There was an error contacting the Calendar service: ' + err);
            return;
        }
        console.log('Event created: %s', event.htmlLink);
    }
  );
*/

/*
//Code below partially works
// Check if we a busy and have an event on our calendar for the same time.
calendar.freebusy.query(
  {
    resource: {
      timeMin: eventStartTime,
      timeMax: eventEndTime,
      timeZone: 'America/Denver',
      items: [{ id: 'ua3slt7atnb5mjg80snfc9bfu8@group.calendar.google.com' }],
    },
  }).then( res => 
  {
        // Check for errors in our query and log them if they exist.
 
        //res.data.calendars.calendar.
        console.log(res);
        // Create an array of all events on our calendar during that time.
        
        const eventArr = res.data.calendars.primary.busy

        // Check if event array is empty which means we are not busy
        if (eventArr.length === 0)
        {
                   // If we are not busy create a new calendar event.
                return calendar.events.insert(
                { calendarId: 'ua3slt7atnb5mjg80snfc9bfu8@group.calendar.google.com', resource: event },
                err => {
                // Check for errors and log them if they exist.
                if (err) return console.error('Error Creating Calender Event:', err)
                // Else log that the event was created.
                return console.log('Calendar event successfully created.')
                }
            );
        }
        

        // If event array is not empty log that we are busy.
        return console.log(`Sorry I'm busy...`)
  })
  .catch(err =>{
    if (err) 
        return console.error('Free Busy Query Error: ', err)
  }
);
*/