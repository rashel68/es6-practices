class Support {
    name;
    designation = 'Web Development Support';
    address = "BD";
    constructor(person, add) {
        this.name = person;
        this.address = add;
    }
    startSession() {
        console.log(this.name, 'Start Meet Session');
    }
}

const salman = new Support('Salman Khan', 'India');
const amirKhan = new Support('Amir Khan', 'Dubai');
const srk = new Support('SRK Khan', 'BD');

// console.log(salman);
salman.startSession();

// console.log(amirKhan);
amirKhan.startSession();

console.log(srk);
