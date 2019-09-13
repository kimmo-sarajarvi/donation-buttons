////// do not change: ///////
window.C = {};
C.translations = {};

////// can be changed: ///////
C.projectEnabled = true; //true or false, if false the page just shows a notice that the project is not enabled
C.projectId = 'sarajarvi-house-project-costa-rica'; //important: change this ID when copying/forking this project
C.lowerLimit = 1; //the lowest amount that is possible to spend
C.upperLimit = 350; //the highest amount that is possible to spend
C.doneAmounts = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,30,31,33,34,35,36,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,137,139,140,141,143,145,148,149,150,151,152,153,154,155,156,157,160,162,163,165,166,167,168,171,174,175,176,178,179,181,182,183,185,186,187,189,192,193,194,195,197,198,199,200,201,202,203,204,206,207,210,211,214,215,216,218,220,221,223,225,226,227,228,231,232,234,235,237,240,243,244,245,247,248,249,250,252,253,257,258,260,261,262,265,266,269,273,274,275,277,278,281,282,284,288,289,291,293,294,296,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350]; //amounts that are verified to be already done (donation already received)
C.elementsByRow = 25; //number of buttons in one row
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
    'en' : 'http://www.sarajarvet.com/support-info.html',
    'de' : 'http://www.sarajarvet.com/support-info.html',
    'fi' : 'http://sarajarvet.weebly.com/kannatustiedot.html',
    'sv' : 'http://www.sarajarvet.com/support-info.html'
};
/////////////////////////////
