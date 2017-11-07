
//ran quote
  document.getElementById("CliRanArt").onclick=function(){
  window.open("https://en.wikipedia.org/wiki/Special:Random")
};
//search stuff layout
  document.getElementById("seaBox").innerHTML='<i class="fa fa-search"></i>';

  document.getElementById("seaBox").onclick=function(){  
  document.getElementById("seaBox").innerHTML="<input class='input'id='input'  value='type to Seach'>";                  document.getElementById("clear").innerHTML="<input type='button' value='X'  class='btn btn-primary'>";
}

  document.getElementById("clear").onclick=function(){
  document.getElementById("seaBox").innerHTML='<i class="fa fa-search"></i>';
  document.getElementById("clear").innerHTML="";
  document.getElementById("returnedData").innerHTML="";
  document.getElementById("control").style.paddingTop='200px';  
  }
 
  
  document.getElementById("seaCli").onclick=function(){
  var input=document.getElementById("input").value;
   
  var link="https://en.wikipedia.org/w/api.php?action=opensearch&search=";
  var url=link+input;

    //---------------------
    
 $.ajax({
    url: url,   
    jsonp: "callback",
    dataType: 'jsonp',
    success: function (result) {
          //console.log(result);
if(result[2].length==0){return alert("Search brings no data, Please try another wording");}     document.getElementById("control").style.paddingTop='1px'; 
console.log(result[1].length);
      
var iterrator;
var dataShower=" ";
for(iterrator=0; iterrator<result[1].length; iterrator++){
  
  dataShower+="<div id='result'><a href='#' id='apiData' onClick=window.open('"+result[3][iterrator]+"') >"+"<br /><div id='heading'>"+result[1][iterrator]+"</div><br /><div id='bodyData'>"+result[2][iterrator]+"</div></a></div>";
}

document.getElementById("returnedData").innerHTML = dataShower;  
   
    },
   error:function (results){ alert("its not working");}
 
 });
 
  }