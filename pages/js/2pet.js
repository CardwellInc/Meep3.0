    // Event Listener for WPBAL
    document.getElementById("submit-button").addEventListener("click", buildServ);
    document.getElementById("Reset-button").addEventListener("click", resetall);

    // Event Function
    function resetall() {
    
        if (confirm("Are you sure you want to Reset?")) {
            location.reload();
        }
    }


function buildServ() {


    let result = "Canceling a Wellness Plan is all based on usage. We figure in how much the hospitals have covered in services and how many payments you have made, and then we come to a final balance based on whichever costs less: the remaining balance of future Plan payments, or the remaining costs of service after deducting past payments. This means you will either pay for the services you have used, Or the remaining 12 month plan balance, whichever is the lesser of the two.";



///Pet 1

let PName = document.getElementById("PetName").value;
    
//G1
var ServUsed = document.getElementById("Used").value;
var WPBAL = document.getElementById("Plan").value;
let InstallPaid = document.getElementById("Paid").value;
let RPF = document.getElementById("RPF").value;
let EndDate = document.getElementById("EndDate").value;



let RPFc=(RPF*20);  // Total cost of all RPF's
let w=(WPBAL - RPFc); //cost of plan without RPF's
let x=(w/12).toFixed(2);     //cost of each installment
let CxlCost=(ServUsed-InstallPaid).toFixed(2); //cxlcost for services cxl
let y=Math.trunc(CxlCost/x);  //Number of installments to call after = services cxl
let z=Math.abs([x*y]-CxlCost).toFixed(2); //remaining balance to pay when they call back after - services cxl
let CxlCost2=(WPBAL-InstallPaid).toFixed(2); // Cost to close per services cxl
let q=Math.round(CxlCost2/x); //number of remaining installments on wellness plan - WP Cxl

let BK = document.getElementById("BK").value;

var today = new Date();{
var dd = today.getDate();
var yyyy = today.getFullYear();

if(parseInt(BK) < parseInt(dd))
{
    var mm= (y+1);
} else if(parseInt(BK) > parseInt(dd)){

   var mm = (y+2);
}

if(mm>12) 
{
    mm=mm-12;
} 

today = mm+'/'+BK+'/'+yyyy;
console.log(today);
console.log(y);
}


//make below if statement a var to use in multipet cxl - this is going to be fun =.=
if (parseInt(ServUsed) < parseInt(WPBAL)) {
           
    ///services used cxl

var P1 = "Looking at "+PName+"'s plan, as $"+ServUsed+" of services were used and the plan costs $"+WPBAL+", we can close for the lesser of the two amounts being the cost of the services used. We then subtract the $"+InstallPaid+" of installments paid, which leaves the cost to close today of $"+CxlCost+". This can either be paid today or we can let each monthly installment of $"+x+" lower the balance each month over time, I do recommend calling back before the installment on "+today+" to pay the remaining $"+z+". Please keep in mind if you do not reach out the plan will fulfil the year and end automatically on "+EndDate+" and You will also want to avoid using anymore services as closing the plan is based on usage; using more services will adjust the cost to cancel accordingly.";

var note = "-adv $"+CxlCost+" per Services for "+PName+" adv to cb before " +today+ " to pay the remaining $"+z+" to avoid overpymt ";

var Ending = " $"+CxlCost+" for "+PName;  


} else {

        ///WP BAL cxl

    var P1 = "Looking at "+PName+"'s plan, as $"+ServUsed+" of services were used and the plan costs $"+WPBAL+", we can close for the lesser of the two amounts being the cost of the plan. We then subtract the $"+InstallPaid+" of installments paid, which leaves the cost to close today of $"+CxlCost2+". This can either be paid today or over the remaining "+q+" installments of $"+x+" each month before the plan expires on "+EndDate+".";

    var note = "-adv $"+CxlCost2+" or "+q+" installments per WP BAL for "+PName+" ";
        
    var Ending = " $"+CxlCost2+" for "+PName;  
}    
 

///Pet 2

let PName2 = document.getElementById("PetName2").value;
    
//G1
var ServUsed2 = document.getElementById("Used2").value;
var WPBAL2 = document.getElementById("Plan2").value;
let InstallPaid2 = document.getElementById("Paid2").value;
let RPF2 = document.getElementById("RPF2").value;
let EndDate2 = document.getElementById("EndDate2").value;



let RPFc2=(RPF2*20);  // Total cost of all RPF's
let w2=(WPBAL2 - RPFc2); //cost of plan without RPF's
let x2=(w2/12).toFixed(2);     //cost of each installment
let CxlCost3=(ServUsed2-InstallPaid2).toFixed(2); //cxlcost for services cxl
let y2=Math.trunc(CxlCost3/x2);  //Number of installments to call after = services cxl
let z2=Math.abs([x2*y2]-CxlCost3).toFixed(2); //remaining balance to pay when they call back after - services cxl
let CxlCost4=(WPBAL2-InstallPaid2).toFixed(2); // Cost to close per services cxl
let q2=Math.round(CxlCost4/x2); //number of remaining installments on wellness plan - WP Cxl

let BK2 = document.getElementById("BK2").value;

var today2 = new Date();{
var dd2 = today2.getDate();
var yyyy2 = today2.getFullYear();

if(parseInt(BK2) > parseInt(dd2))
{
    var mm2= (y2+1);
} else if(parseInt(BK2) < parseInt(dd2)){

   var mm2 = (y2+2);
}

if(mm2>12) 
{
    mm2=mm2-12;
} 

today2 = mm2+'/'+BK2+'/'+yyyy2;
console.log(today2);
console.log(y2);
}


//make below if statement a var to use in multipet cxl - this is going to be fun =.=
if (parseInt(ServUsed2) < parseInt(WPBAL2)) {
           
    ///services used cxl

var P2 = "Looking at "+PName2+"'s plan, as $"+ServUsed2+" of services were used and the plan costs $"+WPBAL2+", we can close for the lesser of the two amounts being the cost of the services used. We then subtract the $"+InstallPaid2+" of installments paid, which leaves the cost to close today of $"+CxlCost3+". This can either be paid today or we can let each monthly installment of $"+x2+" lower the balance each month over time, I do recommend calling back before the installment on "+today2+" to pay the remaining $"+z2+". Please keep in mind if you do not reach out the plan will fulfil the year and end automatically on "+EndDate2+" and You will also want to avoid using anymore services as closing the plan is based on usage; using more services will adjust the cost to cancel accordingly.";

var note2 = "-adv $"+CxlCost3+" per Services for "+PName2+" adv to cb before " +today2+ " to pay the remaining $"+z2+" to avoid overpymt ";

var Ending2 = " $"+CxlCost3+" for "+PName2;  


} else {

        ///WP BAL cxl

    var P2 = "Looking at "+PName2+"'s plan, as $"+ServUsed2+" of services were used and the plan costs $"+WPBAL2+", we can close for the lesser of the two amounts being the cost of the plan. We then subtract the $"+InstallPaid2+" of installments paid, which leaves the cost to close today of $"+CxlCost4+". This can either be paid today or over the remaining "+q2+" installments of $"+x2+" each month before the plan expires on "+EndDate2+".";

    var note2 = "-adv $"+CxlCost4+" or "+q2+" installments per WP BAL for "+PName2+" ";
        
    var Ending2 = " $"+CxlCost4+" for "+PName2;  
}    

document.getElementById("Pet1").innerHTML = P1;
document.getElementById("Pet2").innerHTML = P2;
document.getElementById("result").innerHTML = result;
document.getElementById("note2").innerHTML = note+note2;
document.getElementById("Ending").innerHTML = "The "+Ending+" and "+Ending2+" can either be processed today to close, or we can let the monthly installments lower the balance over time. Which option do you prefer?";

}