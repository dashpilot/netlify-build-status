const NetlifyAPI = require('netlify')

module.exports = async (token, siteid) => {
  const client = new NetlifyAPI(token)
  const deploys = await client.listSiteDeploys({
    siteId: siteid
  });
  return deploys[0].state;
}