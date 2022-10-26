/// Table Data collection
function addRow() {
          
    ///  Data reciver  
    window.addEventListener('load', () => {
   
    /* const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    const phone = params.get('phone'); */


    const Name = sessionStorage.getItem('client-name');
    const Phone = sessionStorage.getItem('client-phone');

    document.getElementById('result-name').innerHTML = Name;
    document.getElementById('result-phone').innerHTML = Phone;

}) 
    
    let carModel = document.getElementById("model");
    let carOwner = document.getElementById("client-name");
    let carColor = document.getElementById("color");
    let licNum = document.getElementById("licence");


    let table = document.getElementById("myTableData");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 
    row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(1).innerHTML= carModel.value;
    row.insertCell(2).innerHTML= carOwner.value, 'result-name' ;
    row.insertCell(3).innerHTML= carColor.value;
    row.insertCell(4).innerHTML= licNum.value;
    row.insertCell(5).innerHTML= myTable.rowIndex ;

}
 /// Delete Row
function deleteRow(obj) {
      
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
}

function load() {
    console.log("Page load finished");
}



/// Row counter - Number in the queue 
function qNumber(i){
    for (let i = 0; i < 100; i++) {
        qNum += "Queue number " + i + "<br>";
        return qNum;
    }

}

/// 2

function myFunction() {
    var x = document.getElementsByTagName("tr");
    var txt = "";
    var i;
    for (i = 0; i < x.length;i++) {
      txt = txt + "The index of Row "+(i+1)+" is: "+x[i].rowIndex+"<br>";

    }
}
