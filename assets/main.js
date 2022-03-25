function myFunction() {
    //costo del prezzo per km
    const price_km = 0.29

    var user_name = document.getElementById("myName").value;
    var user_km = document.getElementById("myKm").value;
    var old_age = document.getElementById("myAge").value;
    console.log(old_age)

    //calcolo del prezzo per km
    const prezzo = user_km * price_km;
    console.log(prezzo);

    //sconto del 40%
    function calcPerc(num) {
        return ((num/100) * 60).toFixed(2);
    }

    //sconto del 20%
    function calcPerc_20(num) {
        return ((num/100) * 80).toFixed(2);
    }

    //condizioni per lo sconto da erogare
    if (old_age == 'anziano'){
        var sconto = calcPerc(prezzo);
        document.getElementById('sct').innerHTML = sconto + '$';
        document.getElementById('sct_2').innerHTML = 'Non puo usufruire di questo sconto';
        document.getElementById('name').innerHTML = user_name
    } else if (old_age == 'ragazzo') {
        var sconto_2 = calcPerc_20(prezzo);
        document.getElementById('sct_2').innerHTML = sconto_2 + '$';
        document.getElementById('sct').innerHTML = 'Non puo usufruire di questo sconto';
    } else {
        document.getElementById('no_sct').innerHTML = prezzo.toFixed(2) + '$'
    }

}
