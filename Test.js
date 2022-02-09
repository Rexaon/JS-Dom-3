document.write("Nummeret var " +randomnumber);
var randomnumber = Math.round(Math.random() * 100);
var gjetning=0;

while (true) {
    var sayi = window.prompt("Skriv inn et tall", "");
    sayi = Number(sayi);
    gjetning++;

    if (randomnumber == sayi) {
        window.alert("Gratulerer"+" Du fant nummeret "+gjetning +". gang");
        break;
    } else if (randomnumber > sayi) {
        window.alert("Gå opp");
    } else {
        window.alert("Gå ned");
    }
}