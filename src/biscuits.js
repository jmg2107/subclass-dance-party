var Biscuits = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  // Call methods will call immediately
  this.$node = $('<span class="Biscuits"></span>');
  this.setPosition(this.top, this.left);

};
  //  var Biscuits = makeDancer(top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  Biscuits.prototype = Object.create(Dancer.prototype);
  Biscuits.prototype.constructor = Biscuits;

  Biscuits.prototype.step = function(){
    // call old step
     Dancer.prototype.step.call(this);
     // this.$node.toggle();
  };

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    // Biscuits.$node.toggle();




// we want to take out step
// call blinkydancer with a new
