document.getElementById("submit-button").addEventListener("click", buildServ);
document.getElementById("petnum").addEventListener('change', NumPetFunc);
document.getElementById("petnum").addEventListener('change', Namefunc);
document.getElementById("Reset-button").addEventListener("click", resetall);

function resetall() {
    
  if (confirm("Are you sure you want to Reset?")) {
      location.reload();
  }
}

function Namefunc() {
    let smith = document.getElementById('petnum')

    if (smith.value == "1"){
        var hidden = 'none';
        document.getElementById('PetTwo').style.display = hidden;
        document.getElementById('PetThree').style.display = hidden;
        document.getElementById('PetFour').style.display = hidden;
        document.getElementById('PetFive').style.display = hidden;
        document.getElementById('PetSix').style.display = hidden;
    }
    else if (smith.value == "2"){
        var style = this.value == "2" ? 'block' : 'none';
        var hidden = 'none';
        document.getElementById('PetTwo').style.display = style;
        document.getElementById('PetThree').style.display = hidden;
        document.getElementById('PetFour').style.display = hidden;
        document.getElementById('PetFive').style.display = hidden;
        document.getElementById('PetSix').style.display = hidden;
    }
    else if (smith.value == "3"){
        var style = this.value == "3" ? 'block' : 'none';
        var hidden = 'none';
        document.getElementById('PetTwo').style.display = style;
        document.getElementById('PetThree').style.display = style;
        document.getElementById('PetFour').style.display = hidden;
        document.getElementById('PetFive').style.display = hidden;
        document.getElementById('PetSix').style.display = hidden;
    }
    else if (smith.value == "4"){
        var style = this.value == "4" ? 'block' : 'none';
        var hidden = 'none';
        document.getElementById('PetTwo').style.display = style;
        document.getElementById('PetThree').style.display = style;
        document.getElementById('PetFour').style.display = style;
        document.getElementById('PetFive').style.display = hidden;
        document.getElementById('PetSix').style.display = hidden;
    }
    else if (smith.value == "5"){
        var style = this.value == "5" ? 'block' : 'none';
        var hidden = 'none';
        document.getElementById('PetTwo').style.display = style;
        document.getElementById('PetThree').style.display = style;
        document.getElementById('PetFour').style.display = style;
        document.getElementById('PetFive').style.display = style;
        document.getElementById('PetSix').style.display = hidden;
    }
    else if (smith.value == "6"){
        var style = this.value == "6" ? 'block' : 'none';
        document.getElementById('PetTwo').style.display = style;
        document.getElementById('PetThree').style.display = style;
        document.getElementById('PetFour').style.display = style;
        document.getElementById('PetFive').style.display = style;
        document.getElementById('PetSix').style.display = style;
    }

};


  function NumPetFunc() {
    let Pnum = document.getElementById('petnum')

    if (Pnum.value == "1"){
        var hidden = 'none';
        document.getElementById('One-Pet').style.display = style;
        document.getElementById('Two-Pet').style.display = hidden;
        document.getElementById('Three-Pet').style.display = hidden;
        document.getElementById('Four-Pet').style.display = hidden;
        document.getElementById('Five-Pet').style.display = hidden;
        document.getElementById('Six-Pet').style.display = hidden; 
        console.log(Pnum)
    }
    else if (Pnum.value == "2"){
        var style = this.value == "2" ? 'block' : 'none';
        var hidden = 'none';
        document.getElementById('One-Pet').style.display = style;
        document.getElementById('Two-Pet').style.display = style;
        document.getElementById('Three-Pet').style.display = hidden;
        document.getElementById('Four-Pet').style.display = hidden;
        document.getElementById('Five-Pet').style.display = hidden;
        document.getElementById('Six-Pet').style.display = hidden; 
        console.log(Pnum)
    }
    else if (Pnum.value == "3"){
        var style = this.value == "3" ? 'block' : 'none';
        var hidden = 'none';
        document.getElementById('One-Pet').style.display = style;
        document.getElementById('Two-Pet').style.display = style;
        document.getElementById('Three-Pet').style.display = style;
        document.getElementById('Four-Pet').style.display = hidden;
        document.getElementById('Five-Pet').style.display = hidden;
        document.getElementById('Six-Pet').style.display = hidden; 
        console.log(Pnum)
    }
    else if (Pnum.value == "4"){
        var style = this.value == "4" ? 'block' : 'none';
        var hidden = 'none';
        document.getElementById('One-Pet').style.display = style;
        document.getElementById('Two-Pet').style.display = style;
        document.getElementById('Three-Pet').style.display = style;
        document.getElementById('Four-Pet').style.display = style;
        document.getElementById('Five-Pet').style.display = hidden;
        document.getElementById('Six-Pet').style.display = hidden; 
        console.log(Pnum)
    }
    else if (Pnum.value == "5"){
        var style = this.value == "5" ? 'block' : 'none';
        var hidden = 'none';
        document.getElementById('One-Pet').style.display = style;
        document.getElementById('Two-Pet').style.display = style;
        document.getElementById('Three-Pet').style.display = style;
        document.getElementById('Four-Pet').style.display = style;
        document.getElementById('Five-Pet').style.display = style;
        document.getElementById('Six-Pet').style.display = hidden; 
        console.log(Pnum)
    }
    else if (Pnum.value == "6"){
        var style = this.value == "6" ? 'block' : 'none';
        document.getElementById('One-Pet').style.display = style;
        document.getElementById('Two-Pet').style.display = style;
        document.getElementById('Three-Pet').style.display = style;
        document.getElementById('Four-Pet').style.display = style;
        document.getElementById('Five-Pet').style.display = style;
        document.getElementById('Six-Pet').style.display = style;  
        console.log(Pnum)      
    }

};

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }


function buildServ() {

    var PName = document.getElementById('MEEPpet1').value;
    var PName2 = document.getElementById('MEEPpet2').value;
    var PName3 = document.getElementById("MEEPpet3").value;
    var PName4 = document.getElementById("MEEPpet4").value;
    var PName5 = document.getElementById("MEEPpet5").value;
    var PName6 = document.getElementById("MEEPpet6").value;

    var ServUsed = document.getElementById("Used").value;
    var WPBAL = document.getElementById("Plan").value;
    var InstallPaid = document.getElementById("Paid").value;
    var RPF = document.getElementById("RPF").value;
    var EndDate = document.getElementById("EndDate").value;
    var BK = document.getElementById("BK").value;

    var ServUsed2 = document.getElementById("Used2").value;
    var WPBAL2 = document.getElementById("Plan2").value;
    var InstallPaid2 = document.getElementById("Paid2").value;
    var RPF2 = document.getElementById("RPF2").value;
    var EndDate2 = document.getElementById("EndDate2").value;
    var BK2 = document.getElementById("BK2").value;

    var ServUsed3 = document.getElementById("Used3").value;
    var WPBAL3 = document.getElementById("Plan3").value;
    var InstallPaid3 = document.getElementById("Paid3").value;
    var RPF3 = document.getElementById("RPF3").value;
    var EndDate3 = document.getElementById("EndDate3").value;
    var BK3 = document.getElementById("BK3").value;

    var ServUsed4 = document.getElementById("Used4").value;
    var WPBAL4 = document.getElementById("Plan4").value;
    var InstallPaid4 = document.getElementById("Paid4").value;
    var RPF4 = document.getElementById("RPF4").value;
    var EndDate4 = document.getElementById("EndDate4").value;
    var BK4 = document.getElementById("BK4").value;

    var ServUsed5 = document.getElementById("Used5").value;
    var WPBAL5 = document.getElementById("Plan5").value;
    var InstallPaid5 = document.getElementById("Paid5").value;
    var RPF5 = document.getElementById("RPF5").value;
    var EndDate5 = document.getElementById("EndDate5").value;
    var BK5 = document.getElementById("BK5").value;

    var ServUsed6 = document.getElementById("Used6").value;
    var WPBAL6 = document.getElementById("Plan6").value;
    var InstallPaid6 = document.getElementById("Paid6").value;
    var RPF6 = document.getElementById("RPF6").value;
    var EndDate6 = document.getElementById("EndDate6").value;
    var BK6 = document.getElementById("BK6").value;

      let result = "Canceling a Wellness Plan is all based on usage. We figure in how much the hospitals have provided in services and how many payments you have made, and then we come to a final balance based on whichever costs less: the remaining balance of future Plan payments, or the remaining costs of service after deducting past payments. This means you will either pay for the services you have used, Or the remaining 12 month plan balance, whichever is the lesser of the two.";
      
  let PetNameBox = [];

  let CxlBox = [];
  let BKBox = [];
  let FinalInstallBox = [];
  let InstallAmtBox = [];

  let Pnum = document.getElementById('petnum')
  if (Pnum.value == "1"){
    var petloop = {NL:[
        {  Name: PName,
            Serv: ServUsed,
            WPBAL: WPBAL,
            AMT: InstallPaid,
            RPF: RPF,
            EndDate: EndDate,
            BK: BK}
      ]}
  } else if (Pnum.value == "2"){
    var petloop = {NL:[
        {  Name: PName,
            Serv: ServUsed,
            WPBAL: WPBAL,
            AMT: InstallPaid,
            RPF: RPF,
            EndDate: EndDate,
            BK: BK},
        {  Name: PName2,
            Serv: ServUsed2,
            WPBAL: WPBAL2,
            AMT: InstallPaid2,
            RPF: RPF2,
            EndDate: EndDate2,
            BK: BK2}
    ]}
  } else if (Pnum.value == "3"){
    var petloop = {NL:[
        {  Name: PName,
            Serv: ServUsed,
            WPBAL: WPBAL,
            AMT: InstallPaid,
            RPF: RPF,
            EndDate: EndDate,
            BK: BK},
        {  Name: PName2,
            Serv: ServUsed2,
            WPBAL: WPBAL2,
            AMT: InstallPaid2,
            RPF: RPF2,
            EndDate: EndDate2,
            BK: BK2},
        {  Name: PName3,
            Serv: ServUsed3,
            WPBAL: WPBAL3,
            AMT: InstallPaid3,
            RPF: RPF3,
            EndDate: EndDate3,
            BK: BK3}
    ]}
  } else if (Pnum.value == "4"){
    var petloop = {NL:[
        {  Name: PName,
            Serv: ServUsed,
            WPBAL: WPBAL,
            AMT: InstallPaid,
            RPF: RPF,
            EndDate: EndDate,
            BK: BK},
        {  Name: PName2,
            Serv: ServUsed2,
            WPBAL: WPBAL2,
            AMT: InstallPaid2,
            RPF: RPF2,
            EndDate: EndDate2,
            BK: BK2},
        {  Name: PName3,
            Serv: ServUsed3,
            WPBAL: WPBAL3,
            AMT: InstallPaid3,
            RPF: RPF3,
            EndDate: EndDate3,
            BK: BK3},
        {  Name: PName4,
            Serv: ServUsed4,
            WPBAL: WPBAL4,
            AMT: InstallPaid4,
            RPF: RPF4,
            EndDate: EndDate4,
            BK: BK4}
    ]}
  } else if (Pnum.value == "5"){
    var petloop = {NL:[
        {  Name: PName,
            Serv: ServUsed,
            WPBAL: WPBAL,
            AMT: InstallPaid,
            RPF: RPF,
            EndDate: EndDate,
            BK: BK},
        {  Name: PName2,
            Serv: ServUsed2,
            WPBAL: WPBAL2,
            AMT: InstallPaid2,
            RPF: RPF2,
            EndDate: EndDate2,
            BK: BK2},
        {  Name: PName3,
            Serv: ServUsed3,
            WPBAL: WPBAL3,
            AMT: InstallPaid3,
            RPF: RPF3,
            EndDate: EndDate3,
            BK: BK3},
        {  Name: PName4,
            Serv: ServUsed4,
            WPBAL: WPBAL4,
            AMT: InstallPaid4,
            RPF: RPF4,
            EndDate: EndDate4,
            BK: BK4},
        {  Name: PName5,
            Serv: ServUsed5,
            WPBAL: WPBAL5,
            AMT: InstallPaid5,
            RPF: RPF5,
            EndDate: EndDate5,
            BK: BK5}
    ]}
  } else if (Pnum.value == "6"){
    var petloop = {NL:[
        {  Name: PName,
            Serv: ServUsed,
            WPBAL: WPBAL,
            AMT: InstallPaid,
            RPF: RPF,
            EndDate: EndDate,
            BK: BK},
        {  Name: PName2,
            Serv: ServUsed2,
            WPBAL: WPBAL2,
            AMT: InstallPaid2,
            RPF: RPF2,
            EndDate: EndDate2,
            BK: BK2},
        {  Name: PName3,
            Serv: ServUsed3,
            WPBAL: WPBAL3,
            AMT: InstallPaid3,
            RPF: RPF3,
            EndDate: EndDate3,
            BK: BK3},
        {  Name: PName4,
            Serv: ServUsed4,
            WPBAL: WPBAL4,
            AMT: InstallPaid4,
            RPF: RPF4,
            EndDate: EndDate4,
            BK: BK4},
        {  Name: PName5,
            Serv: ServUsed5,
            WPBAL: WPBAL5,
            AMT: InstallPaid5,
            RPF: RPF5,
            EndDate: EndDate5,
            BK: BK5},
        {  Name: PName6,
            Serv: ServUsed6,
            WPBAL: WPBAL6,
            AMT: InstallPaid6,
            RPF: RPF6,
            EndDate: EndDate6,
            BK: BK6}
    ]}
  } 

  let prof = petloop['NL'];
for(let i=0, len=prof.length; i<len; i++){
//    console.log(prof[i]);
    PetNameBox.push(prof[i].Name)
//    console.log(prof[i].Name);
console.log(prof[i].Name)
}

var filtername = PetNameBox.filter(function(x) {
  return x !== "";
});

console.log(filtername);


  let profile = petloop['NL'];
  for(let i=0, len=profile.length; i<len; i++){
  //    console.log(profile[i]);
      PetNameBox.push(profile[i].Name)
      CxlBox.push(profile[i].CxlCost)
      BKBox.push(profile[i].BK)
      FinalInstallBox.push(profile[i].today)
      InstallAmtBox.push(profile[i].x)
  //    console.log(profile[i].Name);
  }

  let filteredlistloop = profile.filter((profile) => {
    return profile.Name != "";
  })


  console.log(filteredlistloop)
  console.log(filteredlistloop[0].Name);
  console.log(filteredlistloop[0].Serv);
  console.log(filteredlistloop[0].WPBAL);
  console.log(filteredlistloop[0].AMT);
  console.log(filteredlistloop[0].RPF);


  let MEEPcmwc = filteredlistloop;
  for(let i=0, len=MEEPcmwc.length; i<len; i++){
    var PName = (MEEPcmwc[i].Name);
    var ServUsed = (MEEPcmwc[i].Serv);
    var WPBAL = (MEEPcmwc[i].WPBAL);
    var InstallPaid = (MEEPcmwc[i].AMT);
    var RPF = (MEEPcmwc[i].RPF);
    var EndDate = (MEEPcmwc[i].EndDate);

    if ( (parseInt(ServUsed) > parseInt(WPBAL) && parseInt(WPBAL) <= parseInt(InstallPaid)) ){
        var P = "Looking at "+PName+"'s plan, as all 12 installments have been paid we can close their plan today at no cost";
        var note = "- adv $0 per WP BAL for "+PName+" - Cxled "+PName+" at no cost ";
        
        } else if ( parseInt(ServUsed) > parseInt(WPBAL) ) {
        
          var RPFc=(RPF*20);  // Total cost of all RPF's
          var w=(WPBAL - RPFc); //cost of plan without RPF's
          var x=(w/12).toFixed(2);     //cost of each installment
          var CxlCost=(WPBAL-InstallPaid).toFixed(2); //cxlcost for services cxl
          var q=Math.round(CxlCost/x); //number of remaining installments on wellness plan 
          
          var P = "Looking at "+PName+"'s plan, as $"+ServUsed+" of services were used and the plan costs $"+WPBAL+", we can close for the lesser of the two amounts being the cost of the plan. We then subtract the $"+InstallPaid+" of installments paid, which leaves the cost to close today of $"+CxlCost+". This can either be paid today or over the remaining "+q+" installments of $"+x+" each month before the plan expires on "+EndDate+".";
          
          var note = "-adv $"+CxlCost+" or "+q+" installments of "+x+" per WP BAL for "+PName+" ";
        
        } else if ( (parseInt(ServUsed) < parseInt(WPBAL) && parseInt(ServUsed) <= parseInt(InstallPaid)) ){
        var P = "Looking at "+PName+"'s plan, as all services used have been paid for with the monthly installments we can close the plan today at no cost.";
        var note = "-adv $0 per Services for "+PName+" - cxled at $0 ";
        
        } else if ( parseInt(ServUsed) < parseInt(WPBAL) ) {
          var RPFc=(RPF*20);  // Total cost of all RPF's
          var w=(WPBAL - RPFc); //cost of plan without RPF's
          var x=(w/12).toFixed(2);     //cost of each installment
          var CxlCost=(ServUsed-InstallPaid).toFixed(2); //cxlcost for services cxl
          var q=Math.round(CxlCost/x); //number of remaining installments on wellness plan 
          let y=Math.trunc(CxlCost/x);  //Number of installments to call after = services cxl
          let z=Math.abs([x*y]-CxlCost).toFixed(2); //remaining balance to pay when they call back after - services cxl
        
          let BK = document.getElementById("BK").value;
              var today = new Date();{
              var dd = today.getDate();
              var mm = today.getMonth();
              var yyyy = today.getFullYear();
              
              if(parseInt(BK) < dd)
              {
                  var mm= ((mm+2) + y);
              } else {
              
                 var mm = ((mm+1) + y);
              }
                  
                  if(mm>12) 
                  {
                      mm=mm-12;
                  } 
                  
                  today = mm+'/'+BK+'/'+yyyy;
                  console.log(today);
                  console.log(y);
                  console.log(mm);
                  }
          
            var P = "Looking at "+PName+"'s plan, as $"+ServUsed+" of services were used and the plan costs $"+WPBAL+", we can close for the lesser of the two amounts being the cost of the services used. We then subtract the $"+InstallPaid+" of installments paid, which leaves the cost to close today of $"+CxlCost+". This can either be paid today or we can let each monthly installment of $"+x+" lower the balance each month over time, I do recommend calling back before the installment on "+today+" to pay the remaining $"+z+". Please keep in mind if you do not reach out the plan will fulfil the year and end automatically on "+EndDate+" and You will also want to avoid using anymore services as closing the plan is based on usage; using more services will adjust the cost to cancel accordingly.";
          
            var note = "-adv $"+CxlCost+" per Services for "+PName+" adv to cb before " +today+ " to pay the remaining $"+z+" to avoid overpymt ";
        }



        MEEPcmwc[i].CxlCost=CxlCost;
        MEEPcmwc[i].InstAmt=x;
        MEEPcmwc[i].P=P;
        MEEPcmwc[i].note=note;



        };


  console.log(MEEPcmwc)
  
  let scribe = profile.filter((profile) => {
    return profile.CxlCost > '0'
  })
  console.log(scribe)
  
  
  if (scribe.length == 6) {
    var Ending = "The $"+scribe[0].CxlCost+" for "+scribe[0].Name+", $"+scribe[1].CxlCost+" for "+scribe[1].Name+", $"+scribe[2].CxlCost+ " for "+scribe[2].Name+", The $"+scribe[3].CxlCost+" for "+scribe[3].Name+", The $"+scribe[4].CxlCost+" for "+scribe[4].Name+", and The $"+scribe[5].CxlCost+" for "+scribe[5].Name+", can either be paid today or over the remaining installments. Which option do you prefer?";

    var EndNote = ""+MEEPcmwc[0].note+""+MEEPcmwc[1].note+""+MEEPcmwc[2].note+""+MEEPcmwc[3].note+""+MEEPcmwc[4].note+""+MEEPcmwc[5].note+"";

    var P = ""+MEEPcmwc[0].P+"<br><br>"+MEEPcmwc[1].P+"<br><br>"+MEEPcmwc[2].P+"<br><br>"+MEEPcmwc[3].P+"<br><br>"+MEEPcmwc[4].P+"<br><br>"+MEEPcmwc[5].P+"";

  } else if (scribe.length == 5) {
    var Ending = "The $"+scribe[0].CxlCost+" for "+scribe[0].Name+", $"+scribe[1].CxlCost+" for "+scribe[1].Name+", $"+scribe[2].CxlCost+ " for "+scribe[2].Name+", The $"+scribe[3].CxlCost+" for "+scribe[3].Name+", and The $"+scribe[4].CxlCost+" for "+scribe[4].Name+" can either be paid today or over the remaining installments. Which option do you prefer?";

  } else if (scribe.length == 4) {
    var Ending = "The $"+scribe[0].CxlCost+" for "+scribe[0].Name+", $"+scribe[1].CxlCost+" for "+scribe[1].Name+", $"+scribe[2].CxlCost+ " for "+scribe[2].Name+", and The $"+scribe[3].CxlCost+" for "+scribe[3].Name+" can either be paid today or over the remaining installments. Which option do you prefer?";

  } else if (scribe.length == 3) {
    var Ending = "The $"+scribe[0].CxlCost+" for "+scribe[0].Name+", $"+scribe[1].CxlCost+" for "+scribe[1].Name+", and the $"+scribe[2].CxlCost+ " for "+scribe[2].Name+" can either be paid today or over the remaining installments. Which option do you prefer?";

  } else if (scribe.length == 2) {
    var Ending = "The $"+scribe[0].CxlCost+" for "+scribe[0].Name+" and $"+scribe[1].CxlCost+" for "+scribe[1].Name+" can either be paid today or over the remaining installments. Which option do you prefer?";

  } else if (scribe.length == 1) {
    var Ending = "The $"+scribe[0].CxlCost+" for "+scribe[0].Name+" can either be paid today or over the remaining installments. Which option do you prefer?";

  } else {
    var Ending = "";
  }

  if (MEEPcmwc.length == 6) {
    var EndNote = ""+MEEPcmwc[0].note+""+MEEPcmwc[1].note+""+MEEPcmwc[2].note+""+MEEPcmwc[3].note+""+MEEPcmwc[4].note+""+MEEPcmwc[5].note+"";

    var P = ""+MEEPcmwc[0].P+"<br><br>"+MEEPcmwc[1].P+"<br><br>"+MEEPcmwc[2].P+"<br><br>"+MEEPcmwc[3].P+"<br><br>"+MEEPcmwc[4].P+"<br><br>"+MEEPcmwc[5].P+"";

  } else if (MEEPcmwc.length == 5) {
    var EndNote = ""+MEEPcmwc[0].note+""+MEEPcmwc[1].note+""+MEEPcmwc[2].note+""+MEEPcmwc[3].note+""+MEEPcmwc[4].note+"";

    var P = ""+MEEPcmwc[0].P+"<br><br>"+MEEPcmwc[1].P+"<br><br>"+MEEPcmwc[2].P+"<br><br>"+MEEPcmwc[3].P+"<br><br>"+MEEPcmwc[4].P+"";

  } else if (MEEPcmwc.length == 4) {
    var EndNote = ""+MEEPcmwc[0].note+""+MEEPcmwc[1].note+""+MEEPcmwc[2].note+""+MEEPcmwc[3].note+"";

    var P = ""+MEEPcmwc[0].P+"<br><br>"+MEEPcmwc[1].P+"<br><br>"+MEEPcmwc[2].P+"<br><br>"+MEEPcmwc[3].P+"";

  } else if (MEEPcmwc.length == 3) {
    var EndNote = ""+MEEPcmwc[0].note+""+MEEPcmwc[1].note+""+MEEPcmwc[2].note+"";

    var P = ""+MEEPcmwc[0].P+"<br><br>"+MEEPcmwc[1].P+"<br><br>"+MEEPcmwc[2].P+"";

  } else if (MEEPcmwc.length == 2) {
    var EndNote = ""+MEEPcmwc[0].note+""+MEEPcmwc[1].note+"";

    var P = ""+MEEPcmwc[0].P+"<br><br>"+MEEPcmwc[1].P+"";

  } else if (MEEPcmwc.length == 1) {
    var EndNote = ""+MEEPcmwc[0].note+"";

    var P = ""+MEEPcmwc[0].P+"";

  } else {
    var EndNote = "";

    var P = "";
  }
  
  document.getElementById("Pet1").innerHTML = P;
  document.getElementById("result").innerHTML = result;
  document.getElementById("Ending").innerHTML = Ending;
  document.getElementById("EndNote").innerHTML = EndNote;
   
  
};
  