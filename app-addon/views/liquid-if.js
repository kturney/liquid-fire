import LiquidOutlet from "./liquid-outlet";
import Ember from "ember";

export default LiquidOutlet.extend({
  liquidUpdate: Ember.on('init', Ember.observer('showFirst', function(){
    var template = this.get('templates')[this.get('showFirst') ? 0 : 1];
    var view = Ember._MetamorphView.create({
      container: this.container,
      template: template,
      liquidParent: this,
      contextBinding: 'liquidParent.context',
      liquidContext: this.get("showFirst"),
      hasLiquidContext: true
    });
    this.set('currentView', view);
  }))

});
