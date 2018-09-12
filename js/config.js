////// do not change: ///////
window.C = {};
C.translations = {};

////// can be changed: ///////
C.projectId = 'sarajarvi-house-project-costa-rica'; //important: change this ID when copying/forking this project
C.lowerLimit = 1; //the lowest amount that is possible to spend
C.upperLimit = 350; //the highest amount that is possible to spend
C.doneAmounts = [1,2,3,4,5,7,13,20,26,31,36,41,43,45,46,48,49,50,54,60,62,67,71,80,81,84,95,96,98,99,100,101,102,103,104,105,110,112,116,118,120,121,124,125,128,134,152,153,154,156,167,176,179,183,187,193,194,198,200,201,206,215,223,228,231,237,244,249,250,252,253,257,261,273,275,277,284,288,299,301,306,313,318,322,325,333,339,341,342,344,346,347,348,349,350]; //amounts that are verified to be already done (donation already received)
C.elementsByRow = 25; //number of buttons in one row
C.backgroundImage = 'img/background.jpg'; //path to the background image
C.currency = ''; //symbol for currency to show (use '' for no currency)
C.fontSize = '13px'; //font size of the amounts in the buttons
C.redirectAfterClick = true; //if true user is redirected to an url after clicking on a donation button (see "translations --> redirectURL" below)
C.redirectDelayMs = 1000; //delay in milliseconds, before the redirect is done (so that the user can see the change of the button to semi-transparent)

C.translations['confirmDonate'] = {
    'en' : "Do you want to donate the amount of {0}{1}? Clicking on 'OK' will mark this amount as done and redirect you to a page with payment information.",
    'de' : 'Möchtest du wirklich den Betrag von {0}{1} spenden? Ein Klick auf "OK" wird den Betrag als "gespendet" und dich zu einer Seite mit Zahlungsinformationen weiterleiten.',
    'fi' : 'Haluatko lahjoittaa summan {0}{1}? Painamalla ”OK” summa tulee valituksi ja sinut ohjataan sivulle, jossa on lahjoitustiedot.'
};
C.translations['confirmUndo'] = {
    'en' : "Do you really want to unmark the amount {0}{1}? Please only do this if you clicked on this button before and you now decided to not spend the money.",
    'de' : 'Möchtest du wirklich die Markierung des Betrags von {0}{1} rückgängig machen? Bitte tu das nur, wenn du zuvor auf den Button geklickt hast und nun entschieden hast den Betrag doch nicht zu spenden.',
    'fi' : 'Oletko varma, että haluat poistaa valinnan summasta {0}{1} Tee näin ainoastaan, jos painoit nappulaa aiemmin ja päätitkin olla lahjoittamatta summaa.'
};
C.translations['redirectURL'] = {
    'en' : 'http://www.sarajarvet.com/support-info.html',
    'fi' : 'http://sarajarvet.weebly.com/kannatustiedot.html'
};
/////////////////////////////
