//creating a array and traversing the array by for loop

let arr = [1,2,5,7,9,12];

for(let i = 0;i < arr.length;i++){
console.log(arr[i]);
}

//Making a class of student 

class Students{
  constructor(name,Class,roll_no,age){
    this.name = name;
    this.Class = Class;
    this.roll_no = roll_no;
    this.age = age;
  }
}

let student1 = new Students("Ashis Das",11,1,17);
console.log(student1);
  
class Monitor extends Students{
   constructor(name,Class,roll_no,monitor_id){
     super(name,Class,Roll_no);
     this.monitor_id = monitor_id;
   }
}

let monitor = new Monitor("Ashis Das",11,1,1);
