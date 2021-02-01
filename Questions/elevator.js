

class Elevator{

  constructor(){
    this.currentDirection = "Up"; // or "Down"
    this.currentFloor = 0;
    // this.upQueue = new Queue();
    // this.downQueue = new Queue();
  }

  startRunning(){
    while (true){
      const request = processUserRequest();
      this.addNewFloors(request)
    }
  }

  processUserRequest(request){
    console.log("It works!")
  }

  addNewFloors(newFloors){
    // for (const floor in newFloors){
    //   if (this.currentFloor > floor){
    //     this.addToDownQueue(floor)
    //   } else {
    //     this.addToUpQueue(floor)
    //   }
    // }
  }

  travelToNextFloor(){
    if (this.currentDirection === "Up"){
      const nextFloor = this.controller.getNextUpFloor();
      this.currentFloor = newFloor;
    } else if (this.currentDirection === "Down"){
      const nextFloor = this.controller.getNextDownFloor();
      this.currentFloor = newFloor;
    }
  }

  addToUpQueue(floor){
    cycleThroughUpQueueUntillPlaceFound();
    appendFloorToUpQueue();
  }

  addToDownQueue(floor){
    cycleThroughDownQueueUntillPlaceFound();
    appendFloorToDownQueue();
  }

  getNextUpFloor(){
    const nextFloor = this.upQueue.dequeue;
    return nextFloor
  }

  getNextDownFloor(){
    const nextFloor = this.downQueue.dequeue;
    return nextFloor
  }
}


class User {
  elevator = this.elevator;
  constructor(){
  }

  pressButtons(arr){
    elevator.processUserRequest(arr)
  }
}

const elevator = new Elevator();
const user = new User();
user.pressButtons(elevator, [1, 4, 5])