function trouve_paiement(PR, IN, PE) {
    var PAY = (PR * IN) / (1 - Math.pow(1 + IN, -PE))
    return PAY
    }

    function monthlyPayment(p, n, i) {
        return p * i * (Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
      }

    const submitButton = document.getElementById("submitBtn");

    submitButton.addEventListener("click", function(event) {
        event.preventDefault(); 
    
    let principal = parseFloat(document.getElementById("Montanttotal").value);
    let interest =parseFloat(document.getElementById("Interest").value)/100;
    let terme = parseFloat(document.getElementById("time").value);
    let paye_mensuel = (Math.round(trouve_paiement(principal, interest / 12, terme * 12)).toFixed(2));


    document.getElementById("Costprojet").innerHTML = paye_mensuel + " $"; // Ensure proper addition
});