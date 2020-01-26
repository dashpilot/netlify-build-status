const getStatus = require('./index')
const token = 'YOUR_NETLIFY_TOKEN';
const site_id = 'YOUR_SITE_ID';

getStatus(token, site_id).then(response => {
  console.log(response);
});