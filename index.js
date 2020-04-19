const server = require("./api/server.js");


// heroku will use the process.env.port to dynamically set it up on their server 
// so the heroku use .PORT 
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});


// in the package.json heroku is looking under the script object
// a property called start because this is the default of it.
// plus heroku to run   --- npm start ----