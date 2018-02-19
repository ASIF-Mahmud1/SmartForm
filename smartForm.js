var userData = {

name :'',
email : '',
html : {likes :[], dislikes:[]},
css : {likes :[], dislikes:[]} ,
js : {likes :[], dislikes:[]} ,
strength: {css: '', js: '', html: ''} ,
currentQuestion : '#welcome'
};



$('#start').click(function()
{
//  console.log("start");
  $('#welcome').hide();
  $('#q1').show();
});

$('name').change(function(event)
{
  //console.log(event);
  console.log($('#name').val());
});

$('#next').click(function()
{
  if($('#name').val() && $('#email').val())
  {
  userData.name= $('name').val();
  userData.email= $('email').val();
  $('#welcome').hide();
  $('#q1').hide();
  $('#q2').show();
}

else
{
  alert('Please Enter Name & email');
}
});

$('#html').click(function()
{
  //$('#welcome').show();
  $('#q2').hide();
  $('#q2a').show();
}
);

$('#css').click(function()
{
  //$('#welcome').show();
  $('#q2').hide();
  $('#q2b').show();
}
);

$('#javascript').click(function()
{
  //$('#welcome').show();
  $('#q2').hide();
  $('#q2c').show();
}
);

$("#prev1").click(function()
{
  //$('#welcome').show();
  $('#q2a').hide();
  $('#q2').show();
}
);

$("#prev2").click(function()
{
  //$('#welcome').show();
  $('#q2b').hide();
  $('#q2').show();
}
);

$("#prev3").click(function()
{
  //$('#welcome').show();
  $('#q2c').hide();
  //$('#q2b').hide();
//  $('#q2c').hide();
  $('#q2').show();
}
);


$("#prev4").click(function()
{
  //$('#welcome').show();
//  $('#q3').hide();
  //$('#q2b').hide();
//  $('#q2c').hide();
//  $('#q2a').show();
//  $('#q2b').show();
//  $('#q2c').show();

//  $('#q3').parent();
//$(this).hide();

$('#q3').hide();
$('#q2').show();

}
);

$("#next1").click(function()
{
  //$('#welcome').show();
  $('#q2a').hide();
  //$('#q2b').hide();
//  $('#q2c').hide();
  $('#q3').show();
}
);

$("#next2").click(function()
{
  //$('#welcome').show();
  $('#q2b').hide();
  //$('#q2b').hide();
//  $('#q2c').hide();
  $('#q3').show();
}
);

$("#next3").click(function()
{
  //$('#welcome').show();
  $('#q2c').hide();
  //$('#q2b').hide();
//  $('#q2c').hide();
  $('#q3').show();
}
);

$("#next4").click(function()
{
  //$('#welcome').show();
  $('#q3').hide();
  //$('#q2b').hide();
//  $('#q2c').hide();
  $('#thanks').show();
}
);
var userData = {

name :'',
email : '',
html : {likes :[], dislikes:[]},
css : {likes :[], dislikes:[]} ,
js : {likes :[], dislikes:[]} ,
strength: {css: '', js: '', html: ''} ,
currentQuestion : '#welcome'
};



$('#start').click(function()
{
//  console.log("start");
  $('#welcome').hide();
  $('#q1').show();
});

$('name').change(function(event)
{
  //console.log(event);
  console.log($('#name').val());
});

$('#next').click(function()
{
  if($('#name').val() && $('#email').val())
  {
  userData.name= $('name').val();
  userData.email= $('email').val();
  $('#welcome').hide();
  $('#q1').hide();
  $('#q2').show();
}

else
{
  alert('Please Enter Name & email');
}
});

$('#html').click(function()
{
  //$('#welcome').show();
  $('#q2').hide();
  $('#q2a').show();
}
);

$('#css').click(function()
{
  //$('#welcome').show();
  $('#q2').hide();
  $('#q2b').show();
}
);

$('#javascript').click(function()
{
  //$('#welcome').show();
  $('#q2').hide();
  $('#q2c').show();
}
);

$("#prev1").click(function()
{
  //$('#welcome').show();
  $('#q2a').hide();
  $('#q2').show();
}
);

$("#prev2").click(function()
{
  //$('#welcome').show();
  $('#q2b').hide();
  $('#q2').show();
}
);

$("#prev3").click(function()
{
  //$('#welcome').show();
  $('#q2c').hide();
  //$('#q2b').hide();
//  $('#q2c').hide();
  $('#q2').show();
}
);


$("#prev4").click(function()
{
  //$('#welcome').show();
//  $('#q3').hide();
  //$('#q2b').hide();
//  $('#q2c').hide();
//  $('#q2a').show();
//  $('#q2b').show();
//  $('#q2c').show();

//  $('#q3').parent();
//$(this).hide();

$('#q3').hide();
$('#q2').show();

}
);

$("#next1").click(function()
{
  //$('#welcome').show();
  $('#q2a').hide();
  //$('#q2b').hide();
//  $('#q2c').hide();
  $('#q3').show();
}
);

$("#next2").click(function()
{
  //$('#welcome').show();
  $('#q2b').hide();
  //$('#q2b').hide();
//  $('#q2c').hide();
  $('#q3').show();
}
);

$("#next3").click(function()
{
  //$('#welcome').show();
  $('#q2c').hide();
  //$('#q2b').hide();
//  $('#q2c').hide();
  $('#q3').show();
}
);

$("#next4").click(function()
{
  //$('#welcome').show();
  $('#q3').hide();
  //$('#q2b').hide();
//  $('#q2c').hide();
  $('#thanks').show();
}
);
