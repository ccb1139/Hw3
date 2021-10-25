//Global error varible 
var error = 0;
var errorMSG = document.getElementById("errorMSG");
errorMSG.style.display = "none";

function findMin(){
    if(Number(arguments[0]) < Number(arguments[1])){
        return arguments[0];
    }
    else{
        return arguments[1];
    }
}

function checkError(value){
    var num1 = document.getElementById(num1);
    
    // Check to make sure the numbers are within the correct Bounds
    if(Number(value) < -50 || Number(value) > 50){
        errorMSG.style.display =  "inline-block";
        document.getElementById("errorMSG").innerHTML = "Please enter a number bewtween -50 and 50";
        document.getElementById('nums').reset();
        error = 1;
        
    }
    else{
        errorMSG.style.display = "none";
        document.getElementById("errorMSG").innerHTML = "";
        error = 0;
    }
}


function table() {
    //Checks for errors before creating table
    if(error == 1) { return; }


    var one = Math.round(document.getElementById("num1").value);
    var two = Math.round(document.getElementById("num2").value);
    var three = Math.round(document.getElementById("num3").value);
    var four = Math.round(document.getElementById("num4").value);

    var tableXLimDown = findMin(one, two) - 2;
    var tableYLimDown = findMin(three, four) - 2;
    
    
    

    var myTableDiv = document.getElementById("table");

    var table = document.createElement('TABLE');
    //table.border = '1';
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);

    for (var i = 0; i < Math.abs(two - one) + 2; i++) {
        
        var tr = document.createElement('TR');
        tableBody.appendChild(tr);

        
        tableXLimDown++;
        tableYLimDown = findMin(three, four) - 2;
        for (var j = 0; j < Math.abs(three - four) + 2; j++) {
            var th = document.createElement('TH');
            var td = document.createElement('TD');
            
        
            tableYLimDown++;
            
            if(i == 0 && j == 0){
                th.appendChild(document.createTextNode("  "));
                tr.appendChild(th);
            }
            else if(i == 0){
                th.appendChild(document.createTextNode(tableYLimDown));
                tr.appendChild(th);
            }
            else if(j == 0){
                th.appendChild(document.createTextNode(tableXLimDown));
                tr.appendChild(th);
            }
            else {
                td.appendChild(document.createTextNode(tableYLimDown * tableXLimDown));
                tr.appendChild(td);
            }
            
            
            
        }
    }
    if(myTableDiv.hasChildNodes()){
        myTableDiv.removeChild(myTableDiv.firstChild);
        myTableDiv.appendChild(table);
    }
    else{
        myTableDiv.appendChild(table);
    }
    
}


