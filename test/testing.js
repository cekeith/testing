var describe = require('mocha').describe
var expect = require('chai').expect
let testObj = require('../car')
let Vehicle = testObj.Vehicle
let Toyota = testObj.Toyota
let Lexus = testObj.Lexus
let Tesla = testObj.Tesla

describe('vehicle', function(){
  // Story: As a programmer, I can make a vehicle.
  // Hint: Test that new Vehicle() does not raise any errors.

  it("Test that new Vehicle() does not raise any errors", function(){
    let result = new Vehicle()
    expect(result).to.be.an("object")
  })


  // Story: As a programmer, I can make a car.
  // Hint: Test that creating an instance of the new class does not raise any errors.

  it("should be able to create new class without error", function(){
    let carCreate = function () {
      return new Vehicle()
    }
    expect(carCreate).to.not.throw(Error)
  })


  // Story: As a programmer, I can tell how many wheels a car has; default is four.
  // Hint: constructor of the car should set it to have four wheels, then create a function to return the number of wheels.
  it("As a programmer, I can tell how many wheels a car has; default is four.", function(){
    let result = new Vehicle()
    expect(result.wheels).to.equal(4)
  })

  // Story: As a programmer, I can honk the horn.
  // Hint: When I call vehicle.honkHorn(), I get a "BEEP!".
  it("As a programmer, I can honk the horn", function(){
    let result = new Vehicle()
    expect(result.honkHorn()).to.equal("BEEP!")
  })

  // Story: As a programmer, I can make a Toyota car.
  // Hint: Test that class Toyota which inherits from class Car can be created.
  it("As a programmer, I can make a Toyota car.", function(){
     let toyotaCreate = function () {
      return new Toyota()
     }
    expect(toyotaCreate).to.not.throw(Error)
  })

  // Story: As a programmer, I can honk the horn of a Toyota car which makes the sound "whoop".
  it("As a programmer, I can honk the horn of a Toyota car which makes the sound 'whoop'.", function(){
    let result = new Toyota()
    expect(result.honkHorn()).to.equal("Whoop!")
  })

  // Story: As a programmer, I can make a Lexus car.
  it("should be able to create new class without error", function(){
    let carCreate = function () {
      return new Lexus()
    }
    expect(carCreate).to.not.throw(Error)
  })

  // Story: As a programmer, I can honk the horn of a Lexus car - "beep".
  it("As a programmer, I can honk the horn of a Lexus car which makes the sound 'beep!'.", function(){
    let result = new Lexus()
    expect(result.honkHorn()).to.equal("beep!")
  })
  // Story: As a programmer, I can make a Tesla car.
  it("should be able to create new class tesla without error", function(){
    let carCreate = function () {
      return new Tesla()
    }
    expect(carCreate).to.not.throw(Error)
  })
  // Story: As a programmer, I can honk the horn of Tesla - "Beep-bee-bee-boop-bee-doo-weep".
  it("As a programmer, I can honk the horn of a Lexus car which makes the sound 'zap'.", function(){
    let result = new Tesla()
    expect(result.honkHorn()).to.equal("zap")
  })
  // Story: As a programmer, I can tell which model year a vehicle is from. Model years never change.
  // Hint: Make model year part of the initialization.
  it("As a programmer, I can tell how many wheels a car has; default is four.", function(){
    let result = new Tesla()
    expect(result.MODEL_YEAR).to.equal(2017)
  })
  // Story: As a programmer, I can turn on and off the lights on a given Vehicle.
  // Hint: Create method(s) to allow programmer to turn lights on and off. Which class are the methods in?
  it("As a programmer, I can turn on and off the lights on a given Vehicle.", function(){
    let result = new Vehicle()
    result.lightSwitch()
    expect(result.lights).to.equal('on')
  })

  // Story: As a programmer, I can determine if the lights are on or off. Lights start in the off position.
  it("As a programmer, I can determine if the lights are on or off. Lights start in the off position.", function(){
    let result = new Vehicle()
    expect(result.lights).to.equal('off')
  })
  // Story: As a programmer, I can signal left and right. Turn signals starts off.
  it("As a programmer, I can turn on and off the lights on a given Vehicle.", function(){
    let result = new Vehicle()
    result.changeSignal('off')
    expect(result.signal).to.equal('off')
  })
  // Story: As a programmer, I can determine the speed of a car. Speed starts at 0 mi/h.
  it("As a programmer, I can determine the speed of a car. Speed starts at 0 mi/h.", function(){
    let result = new Vehicle()
    expect(result.speed).to.equal(0)
  })
  // Story: As a programmer, I can speed my Teslas up by 10 mi/h per acceleration.
  it("As a programmer, I  can speed my Teslas up by 10 mi/h per acceleration", function(){
    let result = new Tesla()
    result.accelerate()
    expect(result.speed).to.equal(10)
  })
  // Story: As a programmer, I can slow my Teslas down by 7 mi/h per braking.
  //
  // Story: As a programmer, I can speed my Tatas up by 2 mi/h per acceleration.
  //
  // Story: As a programmer, I can slow my Tatas down by 1.25 mi/h per braking.
  //
  // Story: As a programmer, I can speed my Toyotas up by 7 mi/h per acceleration.
  //
  // Story: As a programmer, I can slow my Toyotas down by 5 mi/h per braking.
  //
  // Story: As a programmer, I can call upon a car to tell me all it's information.
  // Hint: Implement toString() on one or more classes. You can call a super class's toString() with super.toString().
  //
  // Story: As a programmer, I can store and retrieve all of my cars from a garage.
  // Hint: "Garage" is a noun, "store" and "retrieve" are verbs.
  //
  // Story: As a programmer, I can sort the cars in my garage based on model year.
  //
  // Story: As a programmer, I can sort the cars in my garage based on model.
  // Hint: Sort based on class name.
  //
  // Story: As a programmer, I can sort the cars in my garage based on model and then year.
  // Hint: Find out how the spaceship operator can help you with an array.
})
