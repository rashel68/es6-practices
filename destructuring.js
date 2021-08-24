const company = {
    name: 'AnZa Corporation Ltd',
    id: 259537,
    department: {
        first: 'html',
        second: 'css',
        third: 'JavaScript',
        frameWork: {
            frame1: 'React Js', frame2: 'Vau Js', frame3: 'Express Js', frame4: 'Node Js', frame5: 'React Native'
        },
    },
    roll: 341068
}

const { name, id, roll } = company;
// console.log(name, id, roll);
const { first, second, third } = company.department;
// console.log(first, second, third);
const { frame1, frame2, frame3, frame4, frame5 } = company.department.frameWork;
// console.log(frame1, frame2, frame3, frame4, frame5);

const [a, b, c] = [40, 50, 60];
// console.log(a, b, c);

