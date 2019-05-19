/******************

Let's remember the first coding challenge where mark and John compared their BMIs. Let's now implement the same functionality
with objects and methos.
1. For each of them, create an object with properties for their full name, mass, and height.
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. in the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).


*/


var mark = {
    firstName : 'Mark',
    mass : 78,
    height : 1.69,
    calcBMI : function(){
        this.markBMI = this.mass / (this.height * this.height);
        return this.markBMI;
    }
    
    
};

var john = {
    firstName : 'John',
    mass : 92,
    height : 1.95,
    calcBMI : function(){
        this.johnBMI = this.mass / (this.height * this.height);
        return this.johnBMI;
    }
    
};

    console.log(mark.markBMI);
    console.log(john.johnBMI);
    
if (mark.calcBMI() > john.calcBMI()){
    console.log('Mark BMI is greater than John BMI ' + (mark.markBMI - john.johnBMI));
}else if ( mark.calcBMI() < john.calcBMI()){
    console.log('Mark BMI is greater than John BMI ' + (john.johnBMI - mark.markBMI));
}else{
     console.log('they are equal BMI');
}








