var btn =document.querySelector(".button");
var btnNew =document.querySelector(".btn-new");


btn.addEventListener("click", ()=>{
  
    document.getElementById("cont").style="display: block;";

    var myNm= document.getElementById("fname").value;
    document.getElementById("nm").innerHTML= myNm;

    var mylNm= document.getElementById("lname").value;
    document.querySelector(".last-name").innerHTML= mylNm;

    var age= document.getElementById("age").value;
    document.querySelector(".inPassAge").innerHTML= age;

    var departing= document.getElementById("departing").value;
    document.querySelector(".dep").innerHTML= departing;

    var returning= document.getElementById("Returning").value;
    document.querySelector(".ret").innerHTML= returning;

    var mail= document.getElementById("email").value;
    document.querySelector(".myMail").innerHTML= mail;

    var from= document.getElementById("fromcity").value;
    document.querySelector(".fmCity").innerHTML= from;

    var to= document.getElementById("Tocity").value;
    document.querySelector(".tCity").innerHTML= to;

    var opt= document.getElementById("flight").value;
    document.querySelector(".option").innerHTML= opt;

    var clas= document.getElementById("flightClass").value;
    document.querySelector(".clss").innerHTML= clas;

    var child= document.getElementById("Child").value;
    document.querySelector(".child").innerHTML= child;

    var total= document.getElementById("Total").value;
    document.querySelector(".totall").innerHTML= total;

    alert("Ticket Generated, Press ok to see");

    document.querySelector('.btn-new').style="display: block;";
})

btnNew.addEventListener("click", ()=>{
    document.querySelector(".container").style="display: none;";
    document.querySelector('.btn-new').style="display: none;";
})

