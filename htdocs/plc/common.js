function cShof()
{
  this._key = 0;
  this._skey = 0;
  this._sid = 0;

  this.setParam = function(a,b,c)
  {
    this._key = a;
    this._skey = b;
    this._sid = c;
  };

}


function setKey(key, skey, sid)
{
  shof.setParam(key, skey, sid);
}





