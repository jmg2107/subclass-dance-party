$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    window.dancers.push(dancer);
    $('body').append(dancer.$node);

  });


});

  $("body").mouseover(function() {
    $(this).find(".TunaDancer").css({ 'opacity' : '0.4'});
  });
  $("body").mouseout(function() {
    $(this).find(".TunaDancer").css({ 'opacity': '1.0'});
  });
  $("body").mouseenter(function() {
    $(this).find(".Biscuits").animate({ 'height' : 'toggle', 'position' : 'relative'}, 'fast');
  });
  $("body").mouseleave(function() {
    $(this).find(".Biscuits").animate({ 'height': 'toggle', 'position' : 'relative'}, 'fast');
  });
  // we want to search body and find this---> span

  $(".lineUpButton").on("click", function(event){
    for(var i=0; i<window.dancers.length; i++){
      window.dancers[i].setPosition(100, 100*i);
    }
  });

  $(".boogieDown").on("click", function(event){
  var distanceCheck = function(x1, x2, y1, y2){
    var a = x1-x2;
    var b = y1-y2;

    return Math.sqrt(a*a + b*b);
  }
  for(var i = 0; i < window.dancers.length; i++){
    for(var j = 0; j < window.dancers.length; j++){
      if(i === j){
        continue;
      } else {
        var distance = distanceCheck(window.dancers[i].top,window.dancers[j].top, window.dancers[i].left, window.dancers[j].left);
        if(distance >= 20){
          window.dancers[i].setPosition($("body").height() * Math.random(), $("body").width() * Math.random());
          window.dancers[j].setPosition($("body").height() * Math.random(), $("body").width() * Math.random());
        }
      }
    }
  }
  });
