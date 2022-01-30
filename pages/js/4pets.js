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
    
    if(parseInt(BK) > parseInt(dd))
    {
        var mm= (y+1);
    } else if(parseInt(BK) < parseInt(dd)){
    
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

///Pet 3

let PName3 = document.getElementById("PetName3").value;
    
//G1
var ServUsed3 = document.getElementById("Used3").value;
var WPBAL3 = document.getElementById("Plan3").value;
let InstallPaid3 = document.getElementById("Paid3").value;
let RPF3 = document.getElementById("RPF3").value;
let EndDate3 = document.getElementById("EndDate3").value;


let RPFc3=(RPF3*20);  // Total cost of all RPF's
let w3=(WPBAL3 - RPFc3); //cost of plan without RPF's
let x3=(w3/12).toFixed(2);     //cost of each installment
let CxlCost5=(ServUsed3-InstallPaid3).toFixed(2); //cxlcost for services cxl
let y3=Math.trunc(CxlCost5/x3);  //Number of installments to call after = services cxl
let z3=Math.abs([x3*y3]-CxlCost5).toFixed(2); //remaining balance to pay when they call back after - services cxl
let CxlCost6=(WPBAL3-InstallPaid3).toFixed(2); // Cost to close per services cxl
let q3=Math.round(CxlCost6/x3); //number of remaining installments on wellness plan - WP Cxl

let BK3 = document.getElementById("BK3").value;

var today3 = new Date();{
var dd3 = today3.getDate();
var yyyy3 = today3.getFullYear();

if(parseInt(BK3) > parseInt(dd3))
{
    var mm3= (y3+1);
} else if(parseInt(BK3) < parseInt(dd3)){

   var mm3 = (y3+2);
}

if(mm3>12) 
{
    mm3=mm3-12;
} 

today3 = mm3+'/'+BK3+'/'+yyyy3;
console.log(today3);
console.log(y3);
}


//make below if statement a var to use in multipet cxl - this is going to be fun =.=
if (parseInt(ServUsed3) < parseInt(WPBAL3)) {
           
            ///services used cxl

    var P3 = "Looking at "+PName3+"'s plan, as $"+ServUsed3+" of services were used and the plan costs $"+WPBAL3+", we can close for the lesser of the two amounts being the cost of the services used. We then subtract the $"+InstallPaid3+" of installments paid, which leaves the cost to close today of $"+CxlCost5+". This can either be paid today or we can let each monthly installment of $"+x3+" lower the balance each month over time, I do recommend calling back before the installment on "+today3+" to pay the remaining $"+z3+". Please keep in mind if you do not reach out the plan will fulfil the year and end automatically on "+EndDate3+" and You will also want to avoid using anymore services as closing the plan is based on usage; using more services will adjust the cost to cancel accordingly.";

    var note3 = "-adv $"+CxlCost5+" per Services for "+PName3+" adv to cb before " +today3+ " to pay the remaining $"+z3+" to avoid overpymt ";
    var Ending3 = " $"+CxlCost5+" for "+PName3;  

    } else {
                ///WP BAL cxl

        var P3 = "Looking at "+PName3+"'s plan, as $"+ServUsed3+" of services were used and the plan costs $"+WPBAL3+", we can close for the lesser of the two amounts being the cost of the plan. We then subtract the $"+InstallPaid3+" of installments paid, which leaves the cost to close today of $"+CxlCost6+". This can either be paid today or over the remaining "+q3+" installments of $"+x3+" each month before the plan expires on "+EndDate3+".";

        var note3 = "-adv $"+CxlCost6+" or "+q3+" installments per WP BAL for "+PName3+" ";
        var Ending3 = " $"+CxlCost6+" for "+PName3;               
    } 

///Pet 4

let PName4 = document.getElementById("PetName4").value;
    
//G1
var ServUsed4 = document.getElementById("Used4").value;
var WPBAL4 = document.getElementById("Plan4").value;
let InstallPaid4 = document.getElementById("Paid4").value;
let RPF4 = document.getElementById("RPF4").value;
let EndDate4 = document.getElementById("EndDate4").value;


let RPFc4=(RPF4*20);  // Total cost of all RPF's
let w4=(WPBAL4 - RPFc4); //cost of plan without RPF's
let x4=(w4/12).toFixed(2);     //cost of each installment
let CxlCost7=(ServUsed4-InstallPaid4).toFixed(2); //cxlcost for services cxl
let y4=Math.trunc(CxlCost7/x4);  //Number of installments to call after = services cxl
let z4=Math.abs([x4*y4]-CxlCost7).toFixed(2); //remaining balance to pay when they call back after - services cxl
let CxlCost8=(WPBAL4-InstallPaid4).toFixed(2); // Cost to close per services cxl
let q4=Math.round(CxlCost8/x4); //number of remaining installments on wellness plan - WP Cxl

let BK4 = document.getElementById("BK4").value;

var today4 = new Date();{
var dd4 = today4.getDate();
var yyyy4 = today4.getFullYear();

if(parseInt(BK4) > parseInt(dd4))
{
    var mm4= (y4+1);
} else if(parseInt(BK4) < parseInt(dd4)){

   var mm4 = (y4+2);
}

if(mm4>12) 
{
    mm4=mm4-12;
} 

today4 = mm4+'/'+BK4+'/'+yyyy4;
console.log(today4);
console.log(y4);
}

//make below if statement a var to use in multipet cxl - this is going to be fun =.=
if (parseInt(ServUsed4) < parseInt(WPBAL4)) {
           
            ///services used cxl

        var P4 = "Looking at "+PName4+"'s plan, as $"+ServUsed4+" of services were used and the plan costs $"+WPBAL4+", we can close for the lesser of the two amounts being the cost of the services used. We then subtract the $"+InstallPaid4+" of installments paid, which leaves the cost to close today of $"+CxlCost7+". This can either be paid today or we can let each monthly installment of $"+x4+" lower the balance each month over time, I do recommend calling back before the installment on "+today4+" to pay the remaining $"+z4+". Please keep in mind if you do not reach out the plan will fulfil the year and end automatically on "+EndDate4+" and You will also want to avoid using anymore services as closing the plan is based on usage; using more services will adjust the cost to cancel accordingly.";

            var note4 = "-adv $"+CxlCost7+" per Services for "+PName4+" adv to cb before " +today4+ " to pay the remaining $"+z4+" to avoid overpymt ";
        var Ending4 = " $"+CxlCost7+" for "+PName4;  

    } else {
                ///WP BAL cxl

        var P4 = "Looking at "+PName4+"'s plan, as $"+ServUsed4+" of services were used and the plan costs $"+WPBAL4+", we can close for the lesser of the two amounts being the cost of the plan. We then subtract the $"+InstallPaid4+" of installments paid, which leaves the cost to close today of $"+CxlCost8+". This can either be paid today or over the remaining "+q4+" installments of $"+x4+" each month before the plan expires on "+EndDate4+".";

        var note4 = "-adv $"+CxlCost8+" or "+q4+" installments per WP BAL for "+PName4+" ";
        var Ending4 = " $"+CxlCost8+" for "+PName4;               
    } 



document.getElementById("Pet1").innerHTML = P1;
document.getElementById("Pet2").innerHTML = P2;
document.getElementById("Pet3").innerHTML = P3;
document.getElementById("Pet4").innerHTML = P4;
document.getElementById("result").innerHTML = result;
document.getElementById("note2").innerHTML = note+note2+note3+note4;
document.getElementById("Ending").innerHTML = "The "+Ending+", the"+Ending2+", the"+Ending3+", and "+Ending4+" can either be processed today to close, or we can let the monthly installments lower the balance over time. Which option do you prefer?";

}