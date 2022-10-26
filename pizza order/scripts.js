
///////////////////////////////////////////////////////////////////////////////////////////////
///                            // ↓↓↓  * * * // WIP // * * *  ↓↓↓ //                        ///
///////////////////////////////////////////////////////////////////////////////////////////////

//Working with LocalStorage 
const dataArr = localStorage.getItem ('client');

///  Data reciver inside Span output >Name<
window.addEventListener('load', () => {
    /* const params = (new URL(document.location)).searchParams;
    const name = params.get('name');
    const phone = params.get('phone'); */

    /*   const Name = localStorage.getItem('client-name');
    document.getElementById('RESULT-name').innerHTML = Name;    */
    console.log (typeof(dataArr))
    document.getElementById('client').innerHTML = dataArr;
    return dataArr
})


/// Received client data as a new container:
//Input text reciever & structure in new class
class clientBluePrint {
  constructor(Name, Phone, Email) {
    this.blueName = Name ;
    this.bluePhone = Phone;
    this.blueEmail = Email;
  }
}

const newData = JSON.parse (dataArr[0].value);
document.getElementById("demoData").innerHTML = newData;



// Blue print means - draft / like a container groupe  for each new recieved indo
// Reciever of size (radioButtons) +  Toppings(checkboxes) + Deliveru (Drop-list) 
// And after all - structure all info  in new class by there specifications

// class orderBluePrint {
//  constructor(Size, Toppings, Delivery ) {
//    this.blueSize = Size;
//    this.blueToppings = Toppings;
//    this.blueDelivery = Delivery;
//  }
// }

// const newOrder = new orderBluePrint ();
// const newData = clientBluePrint.concat(orderBluePrint);
// console.log (newData);



///////////////////////////////////////////////////////////////////////////////////////////////
///                            // ↑↑↑ * * * // WIP // * * * ↑↑↑ //                          ///
///////////////////////////////////////////////////////////////////////////////////////////////



/// Table Data collection
function addRow() {

    let table = document.getElementById("myTableData");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    let pizzaSize = document.getElementById("sizeP");
    let toppingsAdd = document.getElementById("toppingS");
    let deliveryAdd = document.getElementById("delivery");
    let contactData = document.getElementById("contact-data");


        ///calling from JSON transfered data
    const recivedData = JSON.parse(dataArr);
    recivedName= recivedData[0].Name;
    recivedPhone = recivedData[0].Phone;
    recivedEmail = recivedData[0].Email;


    console.log (recivedName, recivedPhone , recivedEmail);

    row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(1).innerHTML= pizzaSize.value;
    row.insertCell(2).innerHTML= toppingsAdd.value;
    row.insertCell(3).innerHTML= recivedPhone;
    row.insertCell(4).innerHTML= recivedName;

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


///Table search data 

function myFunction() {
    var input, filter, table, tr, td, i, txtValue;

    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();

    table = document.getElementById("myTableData");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
    return
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




///  search plus data structiuing in container   https://www.youtube.com/watch?v=DzXmAKdEYIs 


// https://stackoverflow.com/questions/68912537/how-to-add-new-object-in-object-class-using-prompt-input-in-javascript


/// Separate data structure and input in table 



