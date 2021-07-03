function compute()
{
    // Get input values
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // Check input
    if (principal.trim() == '')
    {
        alert("Enter a positive number")
        document.getElementById("result").innerHTML="";
        document.getElementById("principal").focus();
        return
    }

    if (principal <=0)
    {
        alert("Enter a positive number")
        document.getElementById("result").innerHTML="";
        document.getElementById("principal").focus();
        return
    }
    
    // Calculate displayed information
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var amount =  interest + principal;

    // Construct the result message
    var resultMessage = "If you deposit <mark>"+principal+"</mark>,\
                         <br\>at an interest rate of <mark>"+rate+"%</mark>\
                         <br\>You will receive an amount of <mark>"+amount+"</mark>,\
                         <br\>in the year <mark>"+year+"</mark>\<br\>";

    // Display result message
    document.getElementById("result").innerHTML=resultMessage;
    document.getElementById("principal").focus();
}
        

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval.toString()+"%";
}