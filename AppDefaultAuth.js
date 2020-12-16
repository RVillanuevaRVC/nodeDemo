//Application Default Credentials
//refer to https://github.com/googleapis/google-auth-library-nodejs
const {GoogleAuth} = require('google-auth-library');

/**
* Instead of specifying the type of client you'd like to use (JWT, OAuth2, etc)
* this library will automatically choose the right client based on the environment.
*/
async function main() 
{
  const auth = new GoogleAuth({scopes: 'https://www.googleapis.com/auth/cloud-platform'});
  console.log(auth) ;
  const client = await auth.getClient();
  console.log(client) ;
  const projectId = await auth.getProjectId();
  console.log(projectId) ;
  const url = `https://dns.googleapis.com/dns/v1/projects/${projectId}`;
  console.log(url) ;
  const res = await client.request({ url });
  console.log(res.data);
}

main().catch(console.error);