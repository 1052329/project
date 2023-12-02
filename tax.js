let income = document.querySelector("#input");
let button = document.querySelector("#btn");
let Totaltax = document.querySelector("#TT");
let month = document.querySelector("#MI");
let net = document.querySelector("#NI");
let rate = document.querySelector("#TR");
let display = document.querySelector("#inc");
let tax =0;
let storage=0;
button.addEventListener("click",calculate);


function calculate()
{
tax = 0;
storage=income.value;

if(income.value >= 11000)
{
    tax+=1100;
    income.value -=11000;
}
else if(income.value < 11000)
{
    tax = income.value*0.1;
    income.value=0;
    
}
console.log(income.value, tax);

secondtax();
thirdtax();
fourthtax();
fivetax();
sixthtax();
seventhtax();

TR.textContent = tax/storage;
MI.textContent = (storage-tax)/12;
NI.textContent= storage-tax;
TT.textContent = tax;

display.textContent = storage;


}

function secondtax()
{
    if(income.value<33725)
    {
        tax+=income.value*0.12;
        income.value=0;
        console.log(income.value, tax,storage);
        
    }
    else if(income.value>=33725)
    {
        tax+=33725*0.12;
        income.value-=33725;
        console.log(income.value, tax,storage);
    }
}

function thirdtax()
{

    if(income.value<50650)
    {
        tax+= income.value*0.22;
        income.value=0;
    }
    else if(income.value>=50650)
    {
        tax+=50650*0.22;
        income.value-=50650;
        console.log(income.value,tax,storage);
    }
}
function fourthtax()
{
    if(income.value<86725)
    {
        tax+= income.value*0.24;
        income.value=0;
    }
    else if(income.value>=86725)
    {
        tax+=86725*0.24;
        income.value-=86725;
        console.log(income.value,tax,storage);
    }
    
}
function fivetax()
{
    if(income.value<49150)
    {
        tax+= income.value*0.32;
        income.value=0;
    }
    else if(income.value>=49150)
    {
        tax+=49150*0.32;
        income.value-=49150;
        console.log(income.value,tax,storage);
    }

}
function sixthtax()
{
    if(income.value<346875)
    {
        tax+= income.value*0.35;
        income.value=0;
    }
    else if(income.value>=346875)
    {
        tax+=346875*0.35;
        income.value-=346875;
        console.log(income.value,tax,storage);
    }   
}
function seventhtax ()
{
    if(income.value!=0)
    {
        tax+=income.value*0.37;
        income.value=0;
    }
    console.log(income.value,tax,storage);

}