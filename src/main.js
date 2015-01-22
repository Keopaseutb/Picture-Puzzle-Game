/*global famous*/
// import dependencies
var Engine = famous.core.Engine;
var Modifier = famous.core.Modifier;
var Surface = famous.core.Surface;
var View = famous.core.View;
var StateModifier = famous.modifiers.StateModifier;


//used for the logo and animation
// var Transform = famous.core.Transform;
// var ImageSurface = famous.surfaces.ImageSurface;

// create the main context
var mainContext = Engine.createContext();

// your app here

var topView = new View();
var topViewModifier = new StateModifier();
topViewModifier.setAlign([.5, .5]);
topViewModifier.setOrigin([.5, .5]);
topViewModifier.setSize([500, 500])

var firstSurface = new Surface({
  content: 'hello beau',
  size: [167, 167],
  properties: {
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#FA5C4F'
  }
});

topView.add(topViewModifier).add(firstSurface);

//used for the spinning logo
// var logo = new ImageSurface({
//     size: [200, 200],
//     content: 'http://code.famo.us/assets/famous_logo.png',
//     classes: ['double-sided']
// });

// var initialTime = Date.now();
// var centerSpinModifier = new Modifier({
//     origin: [0.5, 0.5],
//     align: [0.5, 0.5],
//     transform : function () {
//         return Transform.rotateY(.002 * (Date.now() - initialTime));
//     }
// });

mainContext.add(topView);
