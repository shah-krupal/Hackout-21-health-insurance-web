 
// Reading our test file

var healthIndex ;
const data = [BMI = 22.5, calorie = 550, cal = 2200, sleep = 6.45, h_point = 150, net = 2200, BP = 0, Cholestrol = 0,  cardiac = 0]
function calc()
{
    var id = window. prompt("Enter your id: "); 
    calculator(id) ;
}

/*let btn = document.createElement("button");
btn.innerHTML = "Login";
btn.type = "submit";
btn.name = "formBtn";
document.body.appendChild(btn);
btn.onclick(myFunction()) ;*/

calc() ;


/* 
A function to get input from excel sheet will be created here. This will return an array of data for a particular id customer 
We are taking an example by hardcoding that expected array */





// For 18-30 age--------------------------------------------------------------------------------

/* ---------This line of data will be imported from Excel file or database file-----------------*/


function calculator (data)
{

    let BMIPoint = 100 - Math.abs((BMI - 23) *100 / 23) ;             // example: for BMI = 35 BMIPoint = 47.82 

    let CalburntPoint = 100 - Math.abs((calorie - 750) / 15) ;        // makes CalburntPoint = 100 for 750 cal // 750 cal is 1hr football
    
    let CalinPoint = 100 - Math.abs((cal - 2000)*100 / 2000) ;        // for cal = 2000 point = 100 ;

    let sleepPoint = 100 - Math.abs((sleep - 7) * 100 / 7) ;          // for 7 hrs point = 100 // for 8 hrs point = 85 

    let HeartPoint ;                                                  // anything more than 200 will yield 100 points ;
    if (h_point >= 200){
        HeartPoint = 100 ;
    }
    else if (h_point >= 150){
        HeartPoint = 200 - h_point ;
    }
    else{
        HeartPoint = 25 ;
    }

    let NetcalPoint = 100 - Math.abs((net - 2000) / 10) ;             // for net = 1500 or 2500 , NetcalPoint = 50 

    let BPPoint ;                                                     // if ill -25 else 50
    if (BP){
        BPPoint = -25 ; 
    }
    else{
        BPPoint = 50 ;
    }

    let CardiacPoint ;
    if (cardiac){
        CardiacPoint = -25 ; 
    }
    else{
        CardiacPoint = 50 ;
    }

    let CholestrolPoint ;
    if (Cholestrol){
        CholestrolPoint = -25 ; 
    }
    else    {
        CholestrolPoint = 75 ;
    }


    healthIndex = (BMIPoint + CalburntPoint + CalinPoint + sleepPoint + HeartPoint + NetcalPoint + BPPoint + CholestrolPoint + CardiacPoint)/9
    console.log("HEALTH POINT : " + (healthIndex)) ;
}

function myFunctionbutton() {
    let b = document.getElementById("demo") ;
    b.style.width = '50%' ;
    b.style.alignContent = 'center' ;
    b.innerHTML = "Your Health Index : " + healthIndex;
    document.getElementById('invisible').style.display = 'block' ;
  }

  function myFunctioninvisible() {
    let b = document.getElementById("invisible") ;
    b.style.width = '45%' ;
    b.style.alignContent = 'center' ;
    b.innerHTML = "Discount!! " + disc_counter(healthIndex) + " %";
  }

  function disc_counter(x)
  {
      if (x > 90)
      return 50 ;
      else if (x > 80)
      return 30 ;
      else if (x > 70)
      return 20 ;
      else if (x > 40)
      return 10 ;
      else
      return ("Please take care") ;
  }
  function myFunction() {
    var x = window.matchMedia("(max-width: 767px)");
    if(x.matches){
        var x = document.getElementById("myLinks");
        // var y = document.getElementsByClassName("Content-Header");
        if (x.style.display === "block") {
            x.style.display = "none";

        } else {
            x.style.display = "block";
            // x.style.height = "100%";
            // x.style.minWidth = "4rem";
        }
    } 
}