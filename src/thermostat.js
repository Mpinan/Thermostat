'user strict';

//This is an object contructor
//with a temperatur property
function Thermostat(){
  this.temperature = 20;
}
//prototype binds getCurrentTemperature with an instance of the Thermostat
Thermostat.prototype.getCurrentTemperature = function(){
  return this.temperature;
}
Thermostat.prototype.up = function(){
  this.temperature += 1;
}
Thermostat.prototype.down = function(){
  this.temperature -= 1;
}
