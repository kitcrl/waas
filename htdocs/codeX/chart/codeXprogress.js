/*****************************************************************************/
/*                                                                           */
/*            DVLab (Data Visualization Lab) Web version 1.0                 */
/*                                                                           */
/*****************************************************************************/
/*****************************************************************************/
/*                                                                           */
/*  File Name         : xprogress.js                                         */
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
function codeXprogress()
{
  this.id = 0;
  this.callback = null;
  this.tm = 0;
  this.attr = 
  {
    zoom : 1.0,
    scale : 1.0,
    id : 0,
    position : [ 0, 0 ],
    width : 0,
    height: 0,
    direction : 0, //// 0: Left to Right, 1: Right to Left, 2: Top to Bottom,  3: Bottom to Top, 4: from Center to Left-Right, 5: from Center to Top-Bottom
    title :
    {
      str : null,
      foreground :
      {
        color : '#FFFFFF',
        size : '12px',
        weight : 'normal',
        font : 'Times New Roman',
      },
      background :
      {
        color : 'transparent',
      },
      width : '100%',
      height : '100%',
    },
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
  },
  this.value =
  {
    v:0, //// width
    h: '100%', //// height
    realv : 0,
    base:0,
    bounds:10,
    max:100,
    ratio : 1.0,
    title :
    {
      str : null,
      foreground :
      {
        color : '#FFFFFF',
        size : '12px',
        weight : 'normal',
        font : 'Times New Roman',
      },
      background :
      {
        color : 'transparent',
      },
      width : '100%',
      height : '100%',
    },
    color: '#AAAAAA',
    continuous : true,
    curr : 0,
    delta  : [0.1, 0.3],
    border :
    {
      color : '#000000',
      type  : 'dotted',
      thick : 1,
      radius : 0.0,
      opacity : 1.0,
    },
  },

  this.SetValue = function(id,a)
  {
  };
  this.GetValue = function(id,a)
  {
  };

  this.SetTitle = function(title)
  {
    this.attr.title.str  = '<div style="'
    this.attr.title.str += 'float:left;position:relative;';
    this.attr.title.str += 'width:100%;';
    this.attr.title.str += 'height:' + this.attr.title.height + ';';
    this.attr.title.str += 'display:flex;justify-content:center;align-items:center;">';
    this.attr.title.str += '<div style="';
    this.attr.title.str += 'float:left;';
    this.attr.title.str += 'position:relative;';
    this.attr.title.str += 'display:flex;justify-content:flex-start;align-items:center;';
    this.attr.title.str += 'width:' + this.attr.title.width + ';';
    this.attr.title.str += 'height:100%;';
    this.attr.title.str += 'background-color:' + this.attr.title.background.color +';';
    this.attr.title.str += 'color:' + this.attr.title.foreground.color + ';';
    this.attr.title.str += 'font-size:' + this.attr.title.foreground.size + ';';
    this.attr.title.str += 'font-weight:' + this.attr.title.foreground.weight + ';';
    this.attr.title.str += 'font-family:' + this.attr.title.foreground.font + ';';
    this.attr.title.str += '">';
    this.attr.title.str += title;
    this.attr.title.str += '</div>';
    this.attr.title.str += '</div>';
  };
  this.SetMark = function()
  {

  };
  this.SetValueText = function(title, asdw)
  {
    this.value.title.str  = '<div style="'
    this.value.title.str += 'float:left;position:relative;';
    this.value.title.str += 'width:100%;';
    this.value.title.str += 'height:' + this.value.title.height + ';';
    this.value.title.str += 'display:flex;';
    this.value.title.str += 'justify-content:center;';
    this.value.title.str += 'align-items:center;">';
    this.value.title.str += '<div style="';
    this.value.title.str += 'float:left;';
    this.value.title.str += 'position:relative;';
    this.value.title.str += 'display:flex;';
    if ( asdw == 'a' ) this.value.title.str += 'justify-content:flex-start;';
    else if ( asdw == 'd' ) this.value.title.str += 'justify-content:flex-end;';
    this.value.title.str += 'align-items:center;';
    this.value.title.str += 'width:' + this.value.title.width + ';';
    this.value.title.str += 'height:100%;';
    this.value.title.str += 'background-color:' + this.value.title.background.color +';';
    this.value.title.str += 'color:' + this.value.title.foreground.color + ';';
    this.value.title.str += 'font-size:' + this.value.title.foreground.size + ';';
    this.value.title.str += 'font-weight:' + this.value.title.foreground.weight + ';';
    this.value.title.str += 'font-family:' + this.value.title.foreground.font + ';';
    this.value.title.str += '">';
    this.value.title.str += title;
    this.value.title.str += '</div>';
    this.value.title.str += '</div>';

  };

  //// main draw
  this.DrawProgress = function()
  {
    //if ( this.callback != null ) this.callback(0xE000100B);
    var hght = 100;
    var doc = '';
    var vdoc = null;
    if ( this.attr.title.str != null )
    {
      doc += this.attr.title.str;
      hght = hght - GetNumberPart(this.attr.title.height);
      //hght = hght + '%';
    }
    if ( this.value.title.str != null )
    {
      vdoc = this.value.title.str;
      hght = hght - GetNumberPart(this.value.title.height);
    }
    hght = hght + '%';

    doc += '<div style="float:left;position:relative;';
    doc += 'width:100%;';
    doc += 'height:' + hght + ';';
    doc += 'display:flex;justify-content:center;align-items:flex-start;background-color:transparent;">';
    doc += '<div ';
    doc += 'id="';
    doc += this.id + '_progress" ';
    doc += 'style="float:left;position:relative;display:flex;';
    doc += 'justify-content:flex-start;align-items:center;';
    doc += 'top:';
    doc += this.attr.position[0] + 'px;';
    doc += 'left:';
    doc += this.attr.position[1] + 'px;';
    doc += 'width:';
    doc += this.attr.width + ';';
    doc += 'height:';
    doc += this.attr.height + ';';
    doc += 'border:';
    doc += this.attr.border.thick + 'px ';
    doc += this.attr.border.type + ' ';
    doc += this.attr.border.color + ';';
    doc += 'background-color:';
    doc += this.attr.background.color + ';';
    doc += 'border-radius:';
    doc += this.attr.border.radius + 'px;';
    doc += 'opacity:';
    doc += this.attr.border.opacity + ';';
    doc += '">';
    doc += '<div ';
    doc += 'id="';
    doc += this.id + '_progress_value" ';
    doc += 'style="float:left;position:relative;';
    doc += 'top:0px;';
    doc += 'left:0px;';
    doc += 'width:';
    doc += this.value.v + ';';
    doc += 'height:';
    doc += this.value.h + ';';
    doc += 'border:';
    doc += this.value.border.thick + 'px ';
    doc += this.value.border.type + ' ';
    doc += this.value.border.color + ';';
    doc += 'background-color:';
    doc += this.value.color + ';';
    doc += 'border-radius:';
    doc += this.value.border.radius + 'px;';
    doc += 'opacity:';
    doc += this.value.border.opacity + ';';
    doc += '">';
    doc += '</div>';
    doc += '</div>';
    doc += '</div>';
    if ( vdoc != null ) doc += vdoc;

    $('#' + this.id).html(doc).show();
    this.DrawValue();

    if ( this.attr.tmr.delay != null )
    {
      clearTimeout(this.attr.tmr.id);
      this.attr.tmr.id = setTimeout(this.DrawProgress.bind(this), this.attr.tmr.delay);
    }
    if ( this.callback != null ) this.callback(0xE000100A);
  };

  this.PeriodicDraw = function(id, delay)
  {
    this.id = id;
    this.attr.tmr.delay = delay;
    if ( this.callback != null ) this.callback(0xE000105B);
    this.DrawProgress();
  };

}




