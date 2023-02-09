//Author: Trystan Wong

//Event Handler for index.html
eventHandler = function(event){
    //text from instructions is saved into txt
    var txt = document.getElementById("notes").value;

    //checking for the keyword vegan in the instructions
    var vegan = "vegan";
          var Vegan = "Vegan";
          if (txt.indexOf(vegan) != -1 || txt.indexOf(Vegan) != -1) {
              alert("WARNING: Our cheesecakes countain dairy products.");
          }
    else {
        //hide all inputs after order submitted
        $("#options").hide();
        $("#notes").hide();
        $("#order_button").hide();
        $("#n_label").hide();

        //obtain quantity from drop down menu
        var quantity = document.getElementById("quantity");
        var user_quantity = quantity.options[quantity.selectedIndex].text;    
        var flavors = document.getElementsByName("topping");
        var order_flavor = "";
        for (i = 0; i < flavors.length; i++) {
        if (flavors[i].checked) {
        
            order_flavor = flavors[i].value;

        }
    }
        //print out details of order after order is completed
        document.getElementById("order_thanks").innerHTML = "Thank you! Your order has been placed!";
        document.getElementById("order_quantity").innerHTML = "Quantity: " + user_quantity;
        document.getElementById("order_flavor").innerHTML = "Topping: " + order_flavor;
        document.getElementById("order_instr").innerHTML = "Special Instructions: " + txt;
    }
}

//This function gets called when #order_button is pressed
$(function(){
    $("#order_button").click(eventHandler);
      
});

/* toggle visibility on user click of the dropdown menu*/
function month_dropdown() {
    document.getElementById("month_dropdown").classList.toggle("show");
}

// Dropdown menu closes if the user clicks outside of the menu
window.onclick = function(event) {
  	if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
        	    openDropdown.classList.remove('show');
      	    }
        }
  	}
}

//change the text of the month button to the selected month
function changeButtonText(value) {
	document.getElementById("selected_month").innerText = value;
}