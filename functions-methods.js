// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

console.log("1");

function getEmailDomain(emailAddress) {
    const at = emailAddress.indexOf("@") + 1;
    console.log(emailAddress.substring(at, emailAddress.length));
}

getEmailDomain("n.eeken@novi-education.nl") //geeft novi-education.nl
getEmailDomain("t.mellink@novi.nl") //geeft novi.nl
getEmailDomain("a.wiersma@outlook.com") //geeft outlook.com

markEndOfTask();

/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"


// let emailAddress = "n.eeken@novi.nl";
// if (emailAddress.includes("novi")) {
//     console.log("Waarde True")
// } else {
//     console.log("Waarde False")
// };
console.log("2");

function typeOfEmail(emailAddress) {
    let typeEmail = "";
    if (emailAddress.includes("@novi-education")) {
        typeEmail = "Student"
    } else if (emailAddress.includes("@novi.nl")) {
        typeEmail = "Medewerker"
    } else {
        typeEmail = "Extern"
    }
    return typeEmail;
}

console.log(typeOfEmail("n.eeken@novi.nl"));


markEndOfTask();

// console.log(ty)
/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

console.log("3");

function checkEmailValidity(emailAddress) {
    //All checks should return true to validate true
    let atIncluded = emailAddress.includes("@");
    let noComma = !(emailAddress.includes(","));
    let noFullStopAtEnd = (emailAddress.charAt(emailAddress.length-1) != ".");
    return (atIncluded && noComma && noFullStopAtEnd);
}

console.log(checkEmailValidity("n.eeken@novi.nl")); //geeft true - want @ en punt op de juiste plek
console.log(checkEmailValidity("tessmellink@novi.nl")); //geeft true - want @ en punt op de juiste plek
console.log(checkEmailValidity("n.eekenanovi.nl")); //geeft false - want geen @
console.log(checkEmailValidity("n.eeken@novinl.")); // geeft false - want de punt mag niet als laatst
console.log(checkEmailValidity("tessmellink@novi,nl")); // geeft false - want er staat een komma in

markEndOfTask();















function markEndOfTask() {
    console.log("----------------")
}