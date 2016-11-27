import Person from './Person.js';

class Programmer extends Person {

  constructor(firstName, lastName, lang = 'Javascript', elementID = 'content') {
    super(firstName, lastName);

    this.firstName = firstName;
    this.lastName = lastName;
    this.lang = lang;
    this.elementID = elementID;
  }

  work() {

    this.sayHello();
    console.log(`Piszę właśnie kod w moim ulubionym języku, którym jest ${ this.lang }.`);

    document.getElementById(this.elementID).innerText += `Piszę właśnie kod w moim ulubionym języku, którym jest ${ this.lang }. \n`;

  }
}

export default Programmer;
