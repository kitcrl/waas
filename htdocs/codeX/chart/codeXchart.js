/*****************************************************************************/
/*                                                                           */
/*            DVLab (Data Visualization Lab) Web version 1.0                 */
/*                                                                           */
/*****************************************************************************/
/*****************************************************************************/
/*                                                                           */
/*  File Name         : xchart.js                                            */
/*                                                                           */
/*  Description       : This file contains all the necessary constants ,     */
/*                      type definitions according to CAST specifications,	 */
/*                      common system headers.                               */
/*                                                                           */
/*                                                                           */
/*  Issues / Problems : None                                                 */
/*                                                                           */
/*  Revision History  :                                                      */
/*                                                                           */
/*        DD MM YYYY   Author(s)        Changes (Describe the changes made)  */
/*        06 01 2019   Shin Seunghyeok  Draft                                */
/*        15 11 2019   Shin Seunghyeok  Final Draft                          */
/*                                                                           */
/*****************************************************************************/
function codeXchart()
{
  this.canvas = 0;
  this.context = 0;
  this.callback = null;
  this.periodicF = 0;
  this.tm = 0;
  /*** Canvas Attribute ***/
  this.attr = 
  {
    zoom : 1.0,
    scale : 1.0,
    id : 0,
    position : [ 0, 0 ],
    width : 0,
    height: 0,
    dim : '2d',
    update :
    {
      period: 1000, /// update rate, msec
    },
    tmr :
    {
      id : 0,
      delay : 0,
      period: 1,
    },
    border :
    {
      color : '#000000',
      type  : 'dotted',
      thick : 1,
      radius : 0.0,
      opacity : 1.0,
    },
    background :
    {
      color : '#FFFFFF',
    },
    drawing :
    {
      continuous : true,
    },
    type: 'QUADRANT', /// RADIAL
  },
  /*** Graph Attribute ***/
  this.axis =
  {
    thick : 1,
    color : '#000000',
    quadrant :
    {
      bgn : [0, 0],
      end : [100, 100],
      x :
      {
        base:0,
        bounds:10,
        max:10,
        thick:1,
        color:'#000000',
        size : 5,
        unit:
        {
          bound : 1,
          ratio : 1,
        },
        strong : ///// 강조점
        {
          use : 1,
          bounds: 5,
          thick : 2,
          color : '#aa0000',
          size  : 10,
        },
        bias :
        {
          use : 0,  /// 0:Not Use or External, 1: Internal
          base : 0,  /// Start Value
          offset : 0, /// Offset from base
          tm : 0,  /// time based
          marking_offset : 10,
          v : null, /// display value
        },
        elapsed : 0,
      },
      y :
      {
        base:0,
        bounds:10,
        max:10,
        thick:1,
        color:'#000000',
        size : 5,
        unit:
        {
          bound : 1,
          ratio : 1,
        },
        strong : ///// 강조점
        {
          use : 1,
          bounds: 5,
          thick : 2,
          color : '#aa0000',
          size  : 10,
        },
        bias :
        {
          use : 0,  /// 0:Not Use or External, 1: Internal
          base : 0,  /// Start Value
          offset : 0, /// Offset from base
          tm : 0,  /// time based
          marking_offset : 10,
          v : null, /// display value
        },
        elapsed : 0,
      },
    },
    radial :
    {
      center : [0, 0],
      radius : [10, 10],
      mradius : [10, 10],
      ccw    : [0, 2*Math.PI],
      gradient :
      {
        bgn : [0, 0],
        end : [100, 100],
        callback : null,
      },
    },
    polygon :
    {
      center : [0, 0],
    },
  },
  this.face = 
  {
    background :
    {
      color : 'transparent', //'#FFFFFF',
    },
    color : '#000000',
    thick : 1,
    font :
    {
      family : 'Courier New',
      size : 12,
      color : '#FFFFFF',
    },
  },

  this.legend = 0,

  this.value = 
  {
    v : 0,
    coord :
    {
      xy : [0, 0], //// (x, y) coordination
      index : 0,
    },
    curr : 0,
    delta  : [0.1, 0.3],
    ratio: 1.0, //// 실측값의 측정 비율
    max : 180, 
  },

  this.X = function(a)
  {
    if ( this.attr.type == 'XY' || this.attr.type == 'QUADRANT' )
      return (a);
    else if ( this.attr.type == 'CIRCLE' || this.attr.type == 'RADIAL' )
      return (a);
  };
  this.Y = function(a)
  {
    if ( this.attr.type == 'XY' || this.attr.type == 'QUADRANT' )
      return (this.context.canvas.height-a);
    else if ( this.attr.type == 'CIRCLE' || this.attr.type == 'RADIAL')
      return (this.context.canvas.height-a);
  };
  this.x = function(a)
  {
    if ( this.attr.type == 'XY' || this.attr.type == 'QUADRANT' )
      return ( (a/this.axis.quadrant.x.unit.ratio)*this.axis.quadrant.x.unit.bound + this.X(this.axis.quadrant.bgn[0]) ) ;
    else if ( this.attr.type == 'CIRCLE' || this.attr.type == 'RADIAL')
      return (a + this.axis.radial.center[0]);
  };
  this.y = function(a)
  {
    if ( this.attr.type == 'XY' || this.attr.type == 'QUADRANT' )
      return ( this.Y( (a/this.axis.quadrant.y.unit.ratio)*this.axis.quadrant.y.unit.bound + this.axis.quadrant.bgn[1])) ;
    else if ( this.attr.type == 'CIRCLE' || this.attr.type == 'RADIAL') ;
      return ( this.Y( a+ this.axis.radial.center[1]) );
  };

  this.SetCallback = function(callback)
  {
    this.callback = callback;
  };
  this.ClearCanvas = function()
  {
    this.context.clearRect(0, 0, this.context.canvas.width , this.context.canvas.height );
  };


  this.SetScale = function(scl)
  {
    this.attr.scale = scl;
    this.context.canvas.width  *= this.attr.scale;
    this.context.canvas.height *= this.attr.scale;
  };

  this.DrawCanvas = function(id)
  {
    var  cvs;
    cvs  = "<canvas ";
    cvs += "id='"+this.attr.id+"' ";
    cvs += "style='";
    cvs += "position:absolute;";
    cvs += "width:"+this.attr.width+"px;";
    cvs += "height:"+this.attr.height+"px;";
    cvs += "background:"+this.attr.background.color+";";
    cvs += "left:"+this.attr.position[0]+"px;";
    cvs += "top:"+this.attr.position[1]+"px;";
    cvs += "border:"+this.attr.border.thick+"px "+this.attr.border.type+" "+this.attr.border.color+";";
    cvs += "'>";
    cvs += "</canvas>";
    $('#' + id).html(cvs).show();
  };
  this.StrokeCanvas = function()
  {
    this.canvas = document.getElementById(this.attr.id);
    this.context = this.canvas.getContext(this.attr.dim);
    this.context.canvas.width = this.attr.width*this.attr.scale;
    this.context.canvas.height = this.attr.height*this.attr.scale;
  };
  this.DrawGraph = function()
  {
    if ( this.callback != null ) this.callback(this, 0xE000101B); /// IO Input Before
    if ( this.attr.type == 'XY' || this.attr.type == 'QUADRANT' )
    {
      this.DrawXYAxis();
      this.DrawXMark();
      this.DrawYMark();
      if ( this.callback != null ) this.callback(this, 0xE00010DB); // IO Draw Before
      this.DrawValue();
      if ( this.callback != null ) this.callback(this, 0xE00010DA); // IO Draw After
    }
    else
    if ( this.attr.type == 'CIRCLE' || this.attr.type == 'RADIAL')
    {
      this.DrawCircleAxis();
      this.DrawValue();
    }
    this.DrawLegend();
    if ( this.callback != null ) this.callback(this, 0xE000101A); /// IO Input After
  };

  this.DrawCircleAxis = function()
  {
    this.context.beginPath();
    this.context.strokeStyle = this.axis.color;
    if ( this.axis.radial.gradient.callback != null )
    {
      this.axis.radial.gradient.callback(this, 0xE000DE52);
    }
    if ( this.axis.radial.radius[0] != this.axis.radial.radius[1] )
    {
      this.Ellipse( this.X(this.axis.radial.center[0]), this.Y(this.axis.radial.center[1]), this.axis.radial.radius[0], this.axis.radial.radius[1], this.axis.radial.ccw[0], this.axis.radial.ccw[1] );
    }
    else
    {
      this.context.arc( this.X(this.axis.radial.center[0]), this.Y(this.axis.radial.center[1]), this.axis.radial.radius[0], this.axis.radial.ccw[0], this.axis.radial.ccw[1] );
    }
    this.context.lineWidth = this.axis.thick;
    this.context.stroke();
    return;
  };
  this.DrawXYAxis = function()
  {
    this.context.beginPath();
    this.context.moveTo(this.X(this.axis.quadrant.bgn[0]), this.Y(this.axis.quadrant.bgn[1]));
    this.context.lineTo(this.X(this.axis.quadrant.bgn[0]), this.Y(this.axis.quadrant.bgn[1]+this.axis.quadrant.end[1]));
    this.context.moveTo(this.X(this.axis.quadrant.bgn[0]), this.Y(this.axis.quadrant.bgn[1]));
    this.context.lineTo(this.X(this.axis.quadrant.bgn[0]+this.axis.quadrant.end[0]), this.Y(this.axis.quadrant.bgn[1]));
    this.context.lineWidth = this.axis.thick;
    this.context.strokeStyle = this.axis.color;
    this.context.stroke();
  };

  this.DrawXMark = function()
  {
    var cnt;
    var ofst = 0;
    this.axis.quadrant.x.unit.bound = this.context.canvas.width / this.axis.quadrant.x.bounds ;
    for ( cnt =0; cnt <= this.axis.quadrant.x.bounds; cnt++)
    {
      if ( this.X(this.axis.quadrant.bgn[0])+ofst >= this.X(this.axis.quadrant.bgn[0]+this.axis.quadrant.end[0]) ) break;
      this.context.beginPath();

      if ( (this.axis.quadrant.x.strong.use!=0) && ((cnt%this.axis.quadrant.x.strong.bounds)==0) )
      {
        this.context.moveTo(this.X(this.axis.quadrant.bgn[0]+ofst), this.Y(this.axis.quadrant.bgn[1]-(this.axis.quadrant.x.strong.size/2)));
        this.context.lineTo(this.X(this.axis.quadrant.bgn[0]+ofst), this.Y(this.axis.quadrant.bgn[1]+(this.axis.quadrant.x.strong.size/2)));
        this.context.lineWidth = this.axis.quadrant.x.strong.thick;
        this.context.strokeStyle = this.axis.quadrant.x.strong.color;
      }
      else
      {
        this.context.moveTo(this.X(this.axis.quadrant.bgn[0]+ofst), this.Y(this.axis.quadrant.bgn[1]-(this.axis.quadrant.x.size/2)));
        this.context.lineTo(this.X(this.axis.quadrant.bgn[0]+ofst), this.Y(this.axis.quadrant.bgn[1]+(this.axis.quadrant.x.size/2)));
        this.context.lineWidth = this.axis.quadrant.x.thick;
        this.context.strokeStyle = this.axis.quadrant.x.color;
      }
      this.context.stroke();
      ofst += this.axis.quadrant.x.unit.bound;
    }
    return this.axis.quadrant.x.max = cnt-1;
  };

  this.DrawYMark = function()
  {
    var cnt;
    var ofst = 0;
    this.axis.quadrant.y.unit.bound = this.context.canvas.height / this.axis.quadrant.y.bounds ;
    for ( cnt =0; cnt <= this.axis.quadrant.y.bounds; cnt++)
    {
      if ( this.Y(this.axis.quadrant.bgn[1]+ofst) <= this.Y(this.axis.quadrant.bgn[1]+this.axis.quadrant.end[1]) ) break;
      this.context.beginPath();
      if ( (this.axis.quadrant.y.strong.use!=0) && ((cnt%this.axis.quadrant.y.strong.bounds)==0) )
      {
        this.context.moveTo(this.X(this.axis.quadrant.bgn[0]-(this.axis.quadrant.y.strong.size/2)), this.Y(this.axis.quadrant.bgn[1]+ofst));
        this.context.lineTo(this.X(this.axis.quadrant.bgn[0]+(this.axis.quadrant.y.strong.size/2)), this.Y(this.axis.quadrant.bgn[1]+ofst));
        this.context.lineWidth = this.axis.quadrant.y.strong.thick;
        this.context.strokeStyle = this.axis.quadrant.y.strong.color;
      }
      else
      {
        this.context.moveTo(this.X(this.axis.quadrant.bgn[0]-(this.axis.quadrant.y.size/2)), this.Y(this.axis.quadrant.bgn[1]+ofst));
        this.context.lineTo(this.X(this.axis.quadrant.bgn[0]+(this.axis.quadrant.y.size/2)), this.Y(this.axis.quadrant.bgn[1]+ofst));
        this.context.lineWidth = this.axis.quadrant.y.thick;
        this.context.strokeStyle = this.axis.quadrant.y.color;
      }
      this.context.stroke();
      ofst += this.axis.quadrant.y.unit.bound;
    }
    return this.axis.quadrant.y.max = cnt-1;
  };

  this.DrawLegend = function()
  {

    if ( this.axis.quadrant.x.bias.use == 1)
    {
      this.DrawXBias(0, -3.5, this.axis.quadrant.x.bias.v, "Normal 8px Courier New");
    }
    if ( this.axis.quadrant.y.bias.use == 1)
    {
      this.DrawYBias(-5.5, 0, this.axis.quadrant.y.bias.v, "Normal 8px Courier New");
    }
  };

  this.UpdateXYBias = function(type,unit)
  {
    var now = new Date();
    
    if ( this.tm == 0 )
    {
      this.tm = now;
    }

    //console.log(now + ", " + now/unit + ", " + parseInt(now/unit));

    if ( parseInt(now.getTime()/unit) != parseInt(this.tm.getTime()/unit))
    {
      this.axis.quadrant.x.bias.base++;
      this.tm = now;
      if ( type == 'N' )
      {
      }
      else if ( type == 'T' )
      {
        this.axis.quadrant.x.bias.v = this.axis.quadrant.x.bias.tm = this.tm;
      }
    }
  };

  //// main draw
  this.DrawChart = function(id)
  {
    this.ClearCanvas();
    this.StrokeCanvas();
    this.DrawCanvas(id);
    if ( this.callback != null ) this.callback(this, 0xE000105B); /// IO Start Before
    this.DrawGraph();
  };


  this.PeriodicDrawGraph = function()
  {
    this.StrokeCanvas();
    this.ClearCanvas();
    this.DrawGraph();
    clearTimeout(this.attr.tmr.id);
    this.attr.tmr.id = setTimeout(this.PeriodicDrawGraph.bind(this), this.attr.tmr.delay);
  };

  //// main draw
  this.PeriodicDrawChart = function(id, delay)
  {
    this.DrawCanvas(id);
    this.attr.tmr.delay = delay;
    if ( this.callback != null ) this.callback(this, 0xE000105B); /// IO Start Before
    this.PeriodicDrawGraph();
  };

  this.Polarccw = function(a,b,c,d,e)
  {
    this.context.arc(a,b,c, -1*e, -1*d );
  };
  this.Polarcw = function(a,b,c,d,e)
  {
    this.context.arc(a,b,c,-1*d,-1*e);
  };
  this.Clarck = function(a,b,c,d)
  {
    this.context.arc(a,b,c,(-0.5)*Math.PI, d-(0.5*Math.PI));
  };
  this.Ellipse = function(x, y, rx, ry, o, d)
  {
    x0 = x-(rx);
    x1 = x+(rx);
    y0 = y-(ry);
    y1 = y+(ry);

    this.context.moveTo(x0, y);
    this.context.bezierCurveTo(x0, y0, x1, y0, x1, y);
    this.context.bezierCurveTo(x1, y1, x0, y1, x0, y);
  };

  this.SetText = function(a,b,c,d,e,f)
  {
    this.context.font = (f!=null)?f:this.face.font.size + 'px ' + this.face.font.family;
    this.context.fillStyle = e!=null?e:this.face.font.color;
    this.context.fillText(d, a, b, c);
  };


  this.DrawXBias = function(xofst,yofst,val,font)
  {
    var cnt;
    var ofst = 0;
    var dispv;
    this.axis.quadrant.x.unit.bound = bound = this.context.canvas.width / this.axis.quadrant.x.bounds ;
    for ( cnt =0; cnt <= this.axis.quadrant.x.bounds; cnt++)
    {
      if ( this.X(this.axis.quadrant.bgn[0])+ofst >= this.X(this.axis.quadrant.bgn[0]+this.axis.quadrant.end[0]) ) break;
      if ( val == null )
      {
        dispv = ((this.axis.quadrant.x.bias.base+this.axis.quadrant.x.bias.offset+cnt)*this.axis.quadrant.x.unit.ratio).toString();
      }
      else
      {
        //v = new Date(val - (this.axis.quadrant.x.bounds + cnt)*1000);
        v = new Date(val);
        //console.log(this.axis.quadrant.x.bounds + ", " + cnt)
        _v = v.getTime() + (this.axis.quadrant.x.bounds + cnt)*1000;
        nv = new Date(_v);
        hour=nv.getHours();
        min=nv.getMinutes();
        sec=nv.getSeconds();

        dispv = PAD(hour,2) + ":" + PAD(min, 2) + ":" + PAD(sec,2);
      }
      if ( (cnt%this.axis.quadrant.x.unit.marking_offset) == 0 )
        this.SetText( this.x((xofst+cnt)*this.axis.quadrant.x.unit.ratio), this.y(yofst), 20, dispv, this.face.font.color, font);
      ofst += this.axis.quadrant.x.unit.bound;
    }
  };
  this.DrawYBias = function(xofst,yofst,val,font)
  {
    var cnt;
    var ofst = 0;
    var dispv;
    this.axis.quadrant.y.unit.bound = this.context.canvas.height / this.axis.quadrant.y.bounds ;
    for ( cnt =0; cnt <= this.axis.quadrant.y.bounds; cnt++)
    {
      if ( this.Y(this.axis.quadrant.bgn[1]+ofst) <= this.Y(this.axis.quadrant.bgn[1]+this.axis.quadrant.end[1]) ) break;
      if ( val == null )
      {
        dispv = ((this.axis.quadrant.y.bias.base+this.axis.quadrant.y.bias.offset+cnt)*this.axis.quadrant.y.unit.ratio).toString();
      }
      else
      {
        dispv = val*this.axis.quadrant.y.unit.ratio;
      }
      if ( (cnt%this.axis.quadrant.y.unit.marking_offset) == 0 )
        this.SetText( this.x(xofst), this.y((yofst+cnt)*this.axis.quadrant.y.unit.ratio), 10, dispv, this.face.font.color, font);
      ofst += this.axis.quadrant.y.unit.bound;
    }
  };
  this.SetXYBias = function(base,offset)
  {
    this.axis.quadrant.x.bias.base = base;
    this.axis.quadrant.x.bias.offset = offset;
  };


  ////// Common Method
  this.DrawLine = function(s,e,thick,color,fillcolor)
  {
    this.context.beginPath();
    this.context.moveTo(this.x(s[0]), this.y(s[1]));
    this.context.lineTo(this.x(e[0]), this.y(e[1]));
    this.context.lineWidth = thick!=null?thick:this.face.thick;
    this.context.strokeStyle = color!=null?color:this.face.color;
    this.context.fillStyle = fillcolor!=null?fillcolor:this.face.background.color;
    this.context.fill();
    this.context.stroke();
  };

  this.DrawVLine = function(s,e,thick,color,fillcolor,opacity,vthick,vcolor,vfillcolor,vopacity)
  {
    this.context.beginPath();
    this.context.moveTo(this.x(s[0]), this.y(s[1]));
    this.context.lineTo(this.x(e[0]), this.y(e[1]));
    this.context.lineWidth = thick!=null?thick:this.face.thick;
    this.context.strokeStyle = color!=null?color:this.face.color;
    this.context.fillStyle = fillcolor!=null?fillcolor:this.face.background.color;
    this.context.globalAlpha = opacity;
    this.context.fill();
    this.context.stroke();
    if ( vthick!=null )
    {
      this.context.beginPath();
      this.context.moveTo(this.x(s[0]), this.y(s[1]));
      this.context.lineTo(this.x(s[0]), this.y(0));
      this.context.moveTo(this.x(e[0]), this.y(e[1]));
      this.context.lineTo(this.x(e[0]), this.y(0));
      this.context.lineWidth = vthick!=null?vthick:this.face.thick;
      this.context.strokeStyle = vcolor!=null?vcolor:this.face.color;
      this.context.fillStyle = vfillcolor!=null?vfillcolor:this.face.background.color;
      this.context.globalAlpha = vopacity;
      this.context.fill();
      this.context.stroke();
    }
  };



  this.DrawRect = function(s,e,thick,color,fillcolor)
  {
    this.context.beginPath();
    this.context.moveTo(this.x(s[0]), this.y(s[1]));
    this.context.lineTo(this.x(s[0]), this.y(e[1]));
    this.context.lineTo(this.x(e[0]), this.y(e[1]));
    this.context.lineTo(this.x(e[0]), this.y(s[1]));
    this.context.lineTo(this.x(s[0]), this.y(s[1]));
    this.context.lineWidth = thick!=null?thick:this.face.thick;
    this.context.strokeStyle = color!=null?color:this.face.color;
    this.context.fillStyle = fillcolor!=null?fillcolor:this.face.background.color;
    this.context.fill();
    this.context.stroke();
  };
  this.DrawRectLine = function(s,e,vline,thick,color,fillcolor)
  {
    this.context.beginPath();
    if ( vline == true )
    {
      this.context.moveTo(this.x(s[0]), this.y(s[1]));
      this.context.lineTo(this.x(s[0]), this.y(e[1]));
    }
    else
    {
      this.context.moveTo(this.x(s[0]), this.y(e[1]));
    }
    this.context.lineTo(this.x(e[0]), this.y(e[1]));
    if ( vline == true )
    {
      this.context.lineTo(this.x(e[0]), this.y(s[1]));
    }
    this.context.lineWidth = thick!=null?thick:this.face.thick;
    this.context.strokeStyle = color!=null?color:this.face.color;
    this.context.fillStyle = fillcolor!=null?fillcolor:this.face.background.color;
    this.context.fill();
    this.context.stroke();
  };

  this.DrawDPulse = function(s,l,vline,ofst,thick,color,fillcolor)
  {
    var _l = s[0]+l;
    var lv = this.x(_l);
    //console.log( this.X(_a) + ', ' + this.X(this.x(_l)));

    if ( this.axis.quadrant.end[0] + this.axis.quadrant.bgn[0] < this.x(_l))
    {
      lv = this.axis.quadrant.end[0] + this.axis.quadrant.bgn[0];
    }

    this.context.beginPath();
    if ( ofst == null ) ofst = 0;

    if ( (vline == null) || (vline == false) )
    {
      this.context.moveTo(this.x(s[0]), this.y(s[1]+ofst));
      this.context.lineTo(lv, this.y(s[1]+ofst));
    }
    else
    {
      this.context.moveTo(this.x(s[0]), this.y(ofst));
      if ( s[1] != 0 )
      {
        this.context.lineTo(this.x(s[0]), this.y(s[1]+ofst));
        this.context.lineTo(lv, this.y(s[1]+ofst));
      }
      this.context.lineTo(lv, this.y(ofst));
    }
    this.context.lineWidth = thick!=null?thick:this.face.thick;
    this.context.strokeStyle = color!=null?color:this.face.color;
    this.context.fillStyle = fillcolor!=null?fillcolor:this.face.background.color;
    this.context.fill();
    this.context.stroke();
  };

  this.DrawPoint = function(p,r,color)
  {
    this.context.beginPath();
    this.context.arc(this.x(p[0]), this.y(p[1]),r,0,Math.PI*2);
    this.context.lineWidth = this.face.thick;
    this.context.strokeStyle = color!=null?color:this.face.color;
    this.context.fillStyle = color!=null?color:this.face.background.color;
    this.context.fill();
    this.context.stroke();
  };

  this.DrawCircle = function(p,r,color)
  {
    this.context.beginPath();
    this.context.arc(this.x(p[0]), this.y(p[1]),r,0,Math.PI*2);
    this.context.lineWidth = this.face.thick;
    this.context.strokeStyle = color!=null?color:this.face.color;
    this.context.fillStyle = this.attr.background.color;
    this.context.fill();
    this.context.stroke();
  };


  this.UpdatePeriodicValue = function(msec)
  {
    var now = new Date();
    if ( this.tm == 0 )
    {
      this.tm = now;
    }

    //console.log(now + ", " + now/unit + ", " + parseInt(now/unit));

    if ( parseInt(now.getTime()/msec) != parseInt(this.tm.getTime()/msec))
    {
      return true;
    }
    return false;
  };



}




