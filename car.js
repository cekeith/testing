class Vehicle {
  constructor() {
    this.wheels = 4
    this.MODEL_YEAR = 2017
    this.lights = 'off'
    this.signal = 'off'
    this.speed = 0
  }
  changeSignal(direct){
    this.signal = direct
    return this.signal
  }
  honkHorn() {
    return "BEEP!"
  }
  lightSwitch() {
    if(this.lights = 'off') {
      return this.lights = 'on'
    }else return this.lights = 'off'
  }
}

class Toyota extends Vehicle{
  constructor(){
    super()
  }
  honkHorn() {
    return "Whoop!"
  }
}

class Lexus extends Vehicle{
  constructor(){
    super()
  }
  honkHorn() {
    return "beep!"
  }
}

class Tesla extends Vehicle{
  constructor(){
    super()
  }
  honkHorn() {
    return "zap"
  }
  accelerate(){
    this.speed += 10
    return this.speed
  }
}

module.exports = {
  Vehicle: Vehicle,
  Toyota: Toyota,
  Lexus: Lexus,
  Tesla: Tesla
}
