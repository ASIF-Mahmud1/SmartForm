var userData = {

name :'',
email : '',
html : {likes :[], dislikes:[]},
css : {likes :[], dislikes:[]} ,
js : {likes :[], dislikes:[]} ,
strength: {css: '', js: '', html: ''} ,
currentQuestion : '#welcome'
};

function catchClassLikeFish(classname, arrary, name )
{
  var a= document.getElementsByClassName(classname);
  var length= document.getElementsByClassName(classname).length;

  var counter=0;
  for(var i=0;i<length;i++)
  {
    if(a[i].firstElementChild.firstElementChild.checked==true)
    {
      alert(a[i].innerText);
      arrary[name][counter]= a[i].firstElementChild.textContent; counter++;
    }
  }
}

if(localStorage.getItem('userData'))
{
  userData= JSON.parse(localStorage.getItem('userData'));

  $('#welcome').hide();
  $(userData.currentQuestion).show();
  $('#name').val(userData.name);
  $('#email').val(userData.email);
  //console.log(localStorage.getItem('userData').name);
}

else
{
  localStorage.setItem('userData', JSON.stringify(userData));
//  console.log(localStorage);
}



$('#start').click(function()
{
//  console.log("start");
  $('#welcome').hide();
  $('#q1').show();

  userData.currentQuestion= "#q1";
  localStorage.setItem('userData' , JSON.stringify(userData));
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
  userData.name= $('#name').val();
  userData.email= $('#email').val();
  $('#welcome').hide();
  $('#q1').hide();
  $('#q2').show();


  userData.currentQuestion="#q2";
  localStorage.setItem('userData', JSON.stringify(userData));

  //console.log($('#name').val());
  //console.log($('#email').val());
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
  var temp="likes";

  catchClassLikeFish("loveOfHTML" , userData.html,temp);
//  catchClassLikeFish("hateOfHTML");


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

//var s= document.getElementsByName('likesHTML');
//alert(s.length);
//for(var i=0;i<s.length;i++)
//{
  //if(s[i].checked==true)
//  {
  //  console.log("Mofo You Clicked Me");
//  }
//}
