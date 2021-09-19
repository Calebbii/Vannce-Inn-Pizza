$(document).ready(function() {

    function Pizza(size,topping,crust,quantity) {
        this.sizeAmount = size;
        this.toppingAmount = topping;
        this.crustAmount = crust;
        this.quantityOfPizza = quantity;   
    }
    function Addtotable() {
        var size = $("#size").val();
        var topping = $("#topping").val();
        var crust = $("#crust").val();
        var quantity = $("#quantity").val();
        console.log(size);

        var sizeAmount;
        if( size === 'small') {
            sizeAmount = 200
        }
        else if( size === 'medium') {
            sizeAmount = 400
        }
        else if( size === 'large') {
            sizeAmount = 600
        }

        var toppingAmount;
        if( topping === 'pepperoni') {
            toppingAmount = 200
        }
        else if(topping === 'mushroom') {
            toppingAmount = 150
        }
        else if(topping === 'onion') {
            toppingAmount = 100
        }
        else if(topping === 'bacon') {
            toppingAmount = 200
        }
        else if(topping === 'sausage') {
            toppingAmount = 150
        }


        var crustAmount;
        if(crust === 'stuffed crust') {
            crustAmount = 100
        }
        else if(crust === 'cracker crust') {
            crustAmount = 100
        }
        else if(crust === 'flat bread crust') {
            crustAmount = 50
        }
        else if(crust === 'cheese crust pizza') {
            crustAmount = 150
        }
        else if(crust === 'thick crust pizza') {
            crustAmount = 150
        }

        var amount = quantity * (sizeAmount + toppingAmount + crustAmount);

        $("tbody").append(`<tr>
            <td>${''}</td>
            <td>${size}</td> 
            <td>${topping}</td> 
            <td>${crust}</td> 
            <td>${quantity}</td> 
            <td>${amount}</td>
            </tr>`
            );

    }


    $("#addToCart").click(function() {
        Addtotable();
        
    });
    function delivery() {
        var location = $("#location").val();
        if(location.length === 0) {
            alert("Please provide your location");
        }
        else {
        alert("We only charge a delivery fee of 150ksh to deliver to " + location);
        }

    }
    $("#place").click(function(){
        delivery();
    });
});