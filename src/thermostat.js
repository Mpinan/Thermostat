'user strict';

//This is an object contructor
//with a temperatur property
function Thermostat(){
  this.MINIMUM_TEMPERATURE = 10;
  this.temperature = 20;
  this.powerSavingMode = true;
}
//prototype binds getCurrentTemperature with an instance of the Thermostat
Thermostat.prototype.getCurrentTemperature = function(){
  return this.temperature;
}
Thermostat.prototype.up = function(){
  this.temperature += 1;
}
Thermostat.prototype.down = function(){
  if (this.isMinimumTemperature()){
    return ;
  }
    this.temperature -= 1;
}
//it returns a boolean true/false
Thermostat.prototype.isMinimumTemperature = function(){
  return this.temperature === this.MINIMUM_TEMPERATURE;
}
Thermostat.prototype.isPowerSavingModeOn = function(){
  return this.powerSavingMode === true;
}
Thermostat.prototype.switchPowerSavingModeOff = function(){
  this.powerSavingMode = false;
}