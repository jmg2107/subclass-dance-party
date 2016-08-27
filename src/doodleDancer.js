var DoodleDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  // Call methods will call immediately
  this.$node = $('<span class="DoodleDancer"></span>');
  this.setPosition(this.top, this.left);

};
  //  var DoodleDancer = makeDancer(top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  DoodleDancer.prototype = Object.create(Dancer.prototype);
  DoodleDancer.prototype.constructor = DoodleDancer;

  DoodleDancer.prototype.step = function(){
    // call old step
    Dancer.prototype.step.call(this);
    this.$node.fadeToggle();


  };

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    // blinkyDancer.$node.toggle();




// we want to take out step
// call blinkydancer with a new
