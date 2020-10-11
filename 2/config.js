////// do not change: ///////
window.C = {};
C.translations = {};

////// can be changed: ///////
C.projectEnabled = true;
C.projectId = 'sarajarvi-project-2'; //important: change this ID when copying/forking this project
C.lowerLimit = 1; //the lowest amount that is possible to spend
C.upperLimit = 100; //the highest amount that is possible to spend
C.doneAmounts = [1,3,4,5,6,8,9,10,12,13,14,16,20,23,24,25,27,30,33,34,36,37,40,45,46,48,50,51,52,53,55,57,58,60,67,75,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]; //amounts that are verified to be already done (donation already received)
C.elementsByRow = 10; //number of buttons in one row
C.backgroundImage = 'background.jpg'; //path to the background image
C.currency = ''; //symbol for currency to show (use '' for no currency)
C.fontSize = '13px'; //font size of the amounts in the buttons
C.redirectAfterClick = true; //if true user is redirected to an url after clicking on a donation button (see "translations --> redirectURL" below)
C.redirectDelayMs = 1000; //delay in milliseconds, before the redirect is done (so that the user can see the change of the button to semi-transparent)

C.translations['confirmDonate'] = {
    'en' : "Do you want to donate the amount of {0}{1}? Clicking on 'OK' will mark this amount as done and redirect you to a page with payment information.",
    'de' : 'Möchtest du wirklich den Betrag von {0}{1} spenden? Ein Klick auf "OK" wird den Betrag als "gespendet" markieren und dich zu einer Seite mit Zahlungsinformationen weiterleiten.',
    'fi' : 'Haluatko lahjoittaa summan {0}{1}? Painamalla ”OK” summa tulee valituksi ja sinut ohjataan sivulle, jossa on lahjoitustiedot.',
    'sv' : 'Vill du donera summan {0}{1}? när du klickar på "OK" så kommer du att sändas vidare till en sida med donations info.'
};
C.translations['confirmUndo'] = {
    'en' : "Do you really want to unmark the amount {0}{1}? Please only do this if you clicked on this button before and you now decided to not spend the money.",
    'de' : 'Möchtest du wirklich die Markierung des Betrags von {0}{1} rückgängig machen? Bitte führe diesen Schritt nur aus, wenn du zuvor auf den Button geklickt hast und nun entschieden hast den Betrag doch nicht zu spenden.',
    'fi' : 'Oletko varma, että haluat poistaa valinnan summasta {0}{1} Tee näin ainoastaan, jos painoit nappulaa aiemmin ja päätitkin olla lahjoittamatta summaa.',
    'sv' : 'Är du säker på att du vill avbryta donationen för summan {0}{1}, gör det endast om det var du som reserverade den.'
};
C.translations['redirectURL'] = {
    'en' : 'https://viviletigo.wixsite.com/ourweddingsite',
    'de' : 'https://viviletigo.wixsite.com/ourweddingsite',
    'fi' : 'https://viviletigo.wixsite.com/ourweddingsite',
    'sv' : 'https://viviletigo.wixsite.com/ourweddingsite'
};
/////////////////////////////
