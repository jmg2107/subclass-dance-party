var TunaDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  // Call methods will call immediately
  this.$node = $('<span class="TunaDancer"></span>');

};
  //  var TunaDancer = makeDancer(top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  TunaDancer.prototype = Object.create(Dancer.prototype);
  TunaDancer.prototype.constructor = TunaDancer;

  TunaDancer.prototype.step = function(){
    // call old step
     Dancer.prototype.step.call(this);
    this.$node.toggle();

    this.setPosition(this.top, this.left);
  };
  TunaDancer.prototype.lineUp = function(){

  };