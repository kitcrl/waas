//var mdb = new MongoDB();

function MongoDB()
{
  this.url;
  this.curl;
  this.dbname = "local";
  this.collection = "cmds";
  this.port = "28017";
  this.obj = new Object();
  this.tobj = new Object();
  this.pno;
  this.spno;
  this.epno;
  this.tpno;
  this.rows;
  this.pages;
  this.wurl;
  this.query = "";
}
