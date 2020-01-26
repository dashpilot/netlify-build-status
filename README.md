# netlify-build-status

NPM package to get the current status of your Netlify build. Useful in conjunction with Netlify CMS or with your own Netlify integration

# About

Although Netlify CMS allows non-technical users to easily update their site, the build step takes time, and there is currently no way to see the status of the build process. This can be confusing for users who are used to Wordpress and other 'monolithic' CMS systems. This NPM package allows you to keep polling the current status of the build, and inform users when the build is ready.

### Other uses

If you use Netlify in your build process, this module provides an alternative to the build status on the Netlify Dashboard (which can also be laggy sometimes).

# How to use?

To use this Node module you need a Netlify API token (User Settings > Applications > Personal Access Tokens) and your Netlify site id (Settings > General > Site Details > API ID)

# Example

```javascript
const getStatus = require('@dashpilot/netlify-build-status')
const token = 'YOUR_NETLIFY_TOKEN';
const site_id = 'YOUR_SITE_ID';

getStatus(token, site_id).then(response => {
  console.log(response); // the response will contain the build status of the latest build
});
```
