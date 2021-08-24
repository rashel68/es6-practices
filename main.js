function getOut() {
    const persoName = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const roll = document.getElementById('roll').value;
    const reg = document.getElementById('reg').value;

    const p = document.createElement('p');
    p.innerText = `Name: ${persoName}
Email: ${email}
Roll: ${roll}
Reg: ${reg}
`;
    const out = document.getElementById('submitted-output');
    out.appendChild(p);
}
document.getElementById('submit-btn').addEventListener('click', function () {
    getOut();
});