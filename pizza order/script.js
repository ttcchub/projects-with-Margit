/// Toppings Checkbox 
window.addEventListener("DOMContentLoaded",() => {
	const Checklist = new Checklist("form3");
});

class Checklist {
	constructor(qs) {
		this.el = document.querySelector(qs);
		this.el?.addEventListener("change",this.checkForSelected.bind(this));
		this.init();
	}
	init() {
		const inputs = this.el.querySelectorAll("input");
		Array.from(inputs).forEach(el => {
			el.checked = false;
		});
	}
	checkForSelected(e) {
		const tar = e.target;
		const isTop = tar.hasAttribute("data-top");

		this.updateChecks(tar.name,isTop);
	}
	updateChecks(name,isTop) {
		if (name) {
			const topCheck = this.el.querySelector(`[name="${name}"][data-top]`);
			const checkItems = this.el.querySelectorAll(`[name="${name}"]:not([data-top])`);
			const checked = Array.from(checkItems).filter(el => el.checked);
			const notAllChecked = checked.length < checkItems.length;

			if (isTop) {
				Array.from(checkItems).forEach(el => {
					el.checked = notAllChecked;
				});
			} else {
				topCheck.checked = !notAllChecked;
				topCheck.indeterminate = checked.length > 0 && notAllChecked;
			}
		}
	}
}

/// Email checker 
const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  const validate = () => {
    const $email = $('#email');
    const email = $('#email').val();
    $email.text('');
  
    if (validateEmail(email)) {
      $email.text(email + ' is valid :)');
      $email.css('color', 'green');
    } else {
      $email.text(email + ' is not valid :(');
      $email.css('color', 'red');
    }
    return false;
  }
  $('#email').on('input', validate);


/// Confirming provided infromation \\\
function addressFunction() {
  if (document.getElementById(
    "same").checked) {
        document.getElementById(
          "secondaryaddress" ).value = 
        document.getElementById(
          "primaryaddress" ).value ;
          //Name
          document.getElementById(
            "secondaryName" ).value = 
          document.getElementById(
            "primaryName" ).value ;
            //Phone
            document.getElementById(
              "secondaryPhone" ).value = 
            document.getElementById(
              "primaryPhone" ).value ;
              // Email
              document.getElementById(
                "secondaryMail" ).value = $('#email');
          //Buttons & Check order details
      document.getElementById("Button2").style.visibility = 'visible';
      document.form1.price[i].checked == true;
      document.form2.price2[i].checked == true;


      } else {
          document.getElementById(
            "secondaryaddress").value = "";
            document.getElementById(
              "secondaryName").value = "";
              document.getElementById(
                "secondaryPhone").value = "";
                document.getElementById(
                  "secondaryMail").value = "";
          document.getElementById("Button2").style.visibility = 'hidden';
  }
}

// DropDown-list changes:
var e = document.getElementById("onDev");
function onDev() {
  var value = e.value;
  var value = e.options[e.selectedIndex].value;
  console.log(value, text);
}

///  DropDown-list value output: 
type="text/javascript" 
var e = document.getElementById("DelivOption");
function update() {
  var select = document.getElementById('DelivOption');
  var option = select.options[select.selectedIndex];

  document.getElementById('Dvalue').value = option.value;
  return option.value;
}

// total amount counter
function DisplayPrice(price) {
  var val1 = 0;
  for (i = 0; i < document.form1.price.length; i++) {
      if (document.form1.price[i].checked == true) {
          val1 += Number(document.form1.price[i].value);
      }
  }
  let val2 = 0; 
  val2 += document.getElementById("DelivOption").value;
  let val3 = 0;
  for (i = 0; i < document.form3.price3.length; i++) {
    if (document.form3.price3[i].checked == true) {
      val1 += Number(document.form3.price3[i].value);
      }
  }
  let sum = Number(val1) + Number(val2) + Number(val3);
  document.getElementById('totalSum').value = sum;
  return sum;
}

/// /// \\\\/// ///  /// WORK iiN PROGRESS ////// /// \\\\/// /// \\\\

///Purchase button Data transfer in DB Table
function handlePurchase () {
  ///data
  const Name =  document.getElementById('primaryName').value;
  const Phone = document.getElementById('primaryPhone').value;
  const Email = document.getElementById('email').value;

  //order 

/// concat // spreas operator
  let clientData = {Name, Phone, Email};
  let dataArr = []
  dataArr.push(clientData)
  // localStorage.setItem('client-name', Name);
  localStorage.setItem('client', JSON.stringify(dataArr));
  return
}

