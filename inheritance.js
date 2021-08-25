class TeamSupport {
    name;
    designation;
    address = 'BD';
    constructor(inputName, inputAddress, designation) {
        this.name = inputName;
        this.address = inputAddress;
        this.designation = designation;
    }
}


class Support extends TeamSupport {
    startSession() {
        console.log(this.name, 'Start Meet Session');
    }
}

const tamjid = new Support('Tamjid Khan', 'Barisal', 'Support Instructor');
// console.log(tamjid);
// tamjid.startSession();



class StudentCare extends TeamSupport {
    supportTime;
    constructor(inputName, inputAddress, designation, supportTime) {
        super(inputName, inputAddress, designation)
        this.supportTime = supportTime;
    }
    buildARoutine(student) {
        console.log(this.name, 'Build A Routine for ', student);
    }
}

const salman = new StudentCare('Salman Khan', 'India', 'Student Support', '4pm');
// console.log(salman);
// salman.buildARoutine('Rashel');



class NeptuneDev extends TeamSupport {

    codeEiditor;
    constructor(inputName, inputAddress, designation, editor) {
        super(inputName, inputAddress, designation);
        this.codeEiditor = editor;
    }
    releaseApp(version) {
        console.log(this.name, 'release neptune new version ', version);
    }
}

const rashel = new NeptuneDev('Rashel', 'Bhola', 'Neptune Dev', 'Android Studio');
// console.log(rashel);
// rashel.releaseApp('3.1.2');

/* const asif = new NeptuneDev('Asif Khan', 'Banglades', 'Release Neptune App New Version')
console.log(asif); */







