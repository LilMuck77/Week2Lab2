$(document).ready(
    function () {
        //add event handlers
        $("#calcButton").click(calculateLateFee);
        $("#alertButton").click(showPopup);
        $("#pizzaButton").click(calculatePizzaShare);


        //all other functions (logic)


        function showPopup() {

            alert("Hello!");
        }


        function calculateLateFee() {
            //number of books
            var numBooks = $("#numberOfBooks").val();
            //parse number
            numBooks = parseFloat(numBooks);
            //number of dvds
            var numDvDs = $("#numberOfDvDs").val();
            //parse number
            numDvDs = parseFloat(numDvDs);
            //number of days late
            var numDaysLate = $("#daysLate").val();
            //parse number
            numDaysLate = parseFloat(numDaysLate);
            //multiply books by cost by days late
            var costOfBooks = numBooks * 0.25 * numDaysLate;
            //multiply dvds by cost by days late
            var costOfDvDs = numDvDs * 0.50 * numDaysLate;
            var totalCost = costOfBooks + costOfDvDs;
            //put results in span.
            $("#lateFeeOutput").text(totalCost).toFixed(2);

        }

        function calculatePizzaShare()
        {
            //number of people sharing + parse
            var numberOfPeople = $("#numPeople").val();
            numberOfPeople = parseFloat(numberOfPeople);
            //number of pizzas + parse
            var pizzaAmount = $("#numPizzas").val();
            pizzaAmount = parseFloat(pizzaAmount);
            //number of toppings + parse
            var toppingAmount = $("#numToppings").val();
            toppingAmount = parseFloat(toppingAmount);
            //total cost of pizza
            var totalCostPizza = pizzaAmount * 15;
            //total cost of toppings
            var totalCostToppings = toppingAmount * 1.25
            //total cost together
            var finalCost = totalCostPizza + totalCostToppings;
            //total cost per person
            var costPerPerson = finalCost / numberOfPeople;

            //display totals
          $("#sharePriceOutput").text(costPerPerson).toFixed(2);
        }
    }
)