console.log("Linked.");

// Dramatis Personae
var hobbits = $([
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
]);

var buddies = $([
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
]);

var lands = $(['The Shire', 'Rivendell', 'Mordor']);
var body = document.body;
var section = $('<section></section>');

function makeMiddleEarth() {
  // your answers here
  // create a section tag with an id of `middle-earth`
  $(section).attr("id", "middle-earth")
  $('body').append(section)


   // add each land as an `article` tag
  // inside each `article` tag include an `h1` with the name of the land

   // append `middle-earth` to your document `body`
   for (i = 0; i < lands.length; i++){
    $('#middle-earth').append('<article>' + '<h1>' + lands[i] + '</h1>' + '</article');
    
   }
  
   
}

makeMiddleEarth();
var theShire = $('article')[0];
var rivendell = $('article')[1];
var mordor = $('article')[2];
function makeHobbits(){
  // your answers here
  // display an `unordered list` of hobbits in the shire
  // (which is the second article tag on the page)
   // give each hobbit a class of `hobbit`
   var shireUl = $('<ul></ul>').attr('id', 'l1')
   $(theShire).append(shireUl)
   for (i = 0; i < hobbits.length; i++){
    $(shireUl).append('<li id="hobbit">' + hobbits[i] + '</li>')
   }
}

makeHobbits();
var frodo = $('li')[0];
var theRing = $('<div></div>');
$(theRing).attr('id', 'the-ring').attr('class', 'magic-imbued-jewelry');
function keepItSecretKeepItSafe(){
  // your answers here
  // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`
   
   $(frodo).append(theRing)
}

keepItSecretKeepItSafe();

function makeBuddies(){
  // your answers here
  // create an `aside` tag
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`
   var aside = $('<aside></aside>')
   var rivUl = $('<ul></ul>').attr('id', 'l2')
   $(aside).append(rivUl)
   for (i = 0; i < buddies.length; i++){
    $(rivUl).append('<li id="buddies">' + buddies[i] + '</li>')
    $(rivendell).append(aside)
   }
}

makeBuddies();
var strider = $('li')[7];
function beautifulStranger(){
  // your answers here
  // change the `'Strider'` text to `'Aragorn'`
   $(strider).text('Aragorn')

}

beautifulStranger();

function leaveTheShire(){
  // your answers here
  // assemble the `hobbits` and move them to `rivendell`
  var shireUl2 = $('#l1')
  $(rivendell).append(shireUl2)

}

leaveTheShire();

var theFellowship = $('li')

function forgeTheFellowship() {
  // your answers here
    // create a new div called `'the-fellowship'` within `rivendell`
    $(rivendell).append('<div id="the-fellowship"></div>')
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   for (i = 0; i < theFellowship.length; i++){
    $('#the-fellowship').append(theFellowship[i])
    alert(theFellowship[i].textContent + " has joined the party.")
   }
   // after each character is added make an alert that they // have joined your party
}

forgeTheFellowship();
var ganddalf = $(theFellowship)[0];

function theBalrog(){
  // your answers here
   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border;
   $(ganddalf).text('Gandalf the White').css({'border': '3px solid grey', "background-color": "white"});

}

theBalrog();

var Boromir = $(theFellowship)[4];

function hornOfGondor() {
  // your answers here
  // pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
   alert('The horn of Gondor has been blown!');
   alert('Boromir has been killed by the Uruk-hai!')
   $(Boromir).remove();

}

hornOfGondor();

var sam = $(theFellowship)[6]
var mountDoom = $('<div id="mount-doom"></div>')
function itsDangerousToGoAlone() {
  // your answers here
  // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`
   $(mordor).append(mountDoom)
   $(mordor).append(sam)
   $(mordor).append(frodo)
}

itsDangerousToGoAlone();

var gollum = $('<div id="gollum"></div>')
function weWantsIt() {
  // your answers here
  // Create a div with an id of `'gollum'` and add it to Mordor
   // Remove `the ring` from `Frodo` and give it to `Gollum`
   // Move Gollum into Mount Doom
   $(mordor).append(gollum)
   $(theRing).detach();
   $(gollum).append(theRing)
   $(mountDoom).append(gollum)
}

weWantsIt();

function thereAndBackAgain(){
  // your answers here
  // remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire`
   $(gollum).remove();
   var merri = $(theFellowship)[8]
  var pip = $(theFellowship)[7]
  $(theShire).append(merri, pip, frodo, sam);

}

thereAndBackAgain();
