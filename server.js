const express = require("express");
const next = require("next");
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.get("/Home", (req, res) => {
    app.render(req, res, "/Home");
  });
  server.get("/aboutus", (req, res) => {
    app.render(req, res, "/Aboutus");
  });

 
  // server.get('/CategoryList/:subcategory',(req,res)=>{
  //   const subcategory = parseInt(req.params.subcategory.split('-').pop());
  //   const queryParams = {
  //     subcategory:subcategory
  //   } // pass params to URL
  //   app.render(req,res,'/CategoryList',queryParams);
  // });

  server.all("*", (req, res) => {
    return handle (req, res, "/");
  });
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});