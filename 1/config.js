////// do not change: ///////
window.C = {};
C.translations = {};

////// can be changed: ///////
C.projectEnabled = true; //true or false, if false the page just shows a notice that the project is not enabled
C.projectId = 'sarajarvi-house-project-costa-rica'; //important: change this ID when copying/forking this project
C.lowerLimit = 1; //the lowest amount that is possible to spend
C.upperLimit = 350; //the highest amount that is possible to spend
C.doneAmounts = [4,10,11,14,22,24,26,30,32,38,40,41,43,44,45,58,60,62,64,67,76,79,81,83,88,94,95,97,99,100,102,106,109,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,260,261,262,263,264,265,266,267,268,269,270,271,272,273,274,275,276,277,278,279,280,281,282,283,284,285,286,287,288,289,290,291,292,293,294,295,296,297,298,299,300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,337,338,339,340,341,342,343,344,345,346,347,348,349,350]; //amounts that are verified to be already done (donation already received)
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
