//https://cloud.google.com/text-to-speech/docs/libraries
//https://cloud.google.com/text-to-speech/?_ga=2.232553494.-889949602.1608294185&_gac=1.83795300.1608294233.Cj0KCQiAw_H-BRD-ARIsALQE_2Nx1-EBb4-yCycAbybro5rA7jqt0zmwCTHvYV0UyJ4m-kjdNXP-lCIaAhaLEALw_wcB#section-2
//https://www.woolha.com/tutorials/node-js-google-cloud-text-to-speech-api-examples
//https://github.com/googleapis/nodejs-text-to-speech

//code from the github project nodejs-text-to-speech
// Imports the Google Cloud client library
const textToSpeech = require('@google-cloud/text-to-speech');

// Import other required libraries
const fs = require('fs');
const util = require('util');
// Creates a client
const client = new textToSpeech.TextToSpeechClient();
async function quickStart() {
  // The text to synthesize
  const text = 'hello, world!';

  // Construct the request
  const request = {
    input: {text: text},
    // Select the language and SSML voice gender (optional)
    voice: {languageCode: 'en-US', ssmlGender: 'NEUTRAL'},
    // select the type of audio encoding
    audioConfig: {audioEncoding: 'MP3'},
  };

  // Performs the text-to-speech request
  const [response] = await client.synthesizeSpeech(request);
  // Write the binary audio content to a local file
  const writeFile = util.promisify(fs.writeFile);
  await writeFile('output.mp3', response.audioContent, 'binary');
  console.log('Audio content written to file: output.mp3');
}
quickStart();
