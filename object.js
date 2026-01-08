function Student(name,age,cgpa,language){
    this.name=name;
    this.age=age;
    this.cgpa=cgpa;
    this.language=language;

    this.display= function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.language);
    }
}
let student1=new Student("Sabbir",20,3.5,"JavaScript");
let student2=new Student("Sayed",22,3.8,"Python");
let student3=new Student("Farin",21,3.2,"Java");
student1.display();
student2.display();
student3.display();