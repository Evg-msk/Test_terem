document.getElementById('btnSubmit').addEventListener('click', submitForm);
const body = document.body;

function submitForm(event) {
    event.preventDefault();
    let form = document.querySelector('form');
    let nameForm = form.elements['firstName'].value;
    let secondNameForm = form.elements['secondName'].value;
    let num = form.elements['selectNum'].value;
    let json = JSON.stringify({userName: nameForm, lastName:secondNameForm, number: num});
    let parse = JSON.parse(json);
    const addInfo = document.createElement('div');
    addInfo.id='result';
    addInfo.innerHTML = parse['userName'] + ' ' + parse['lastName'] + '-' + parse['number'];
    body.appendChild(addInfo);


    fetch("http://localhost:63342/Test_Terem/form.html?")
        .then(response => response.text())
        .then(json => {
                alert(json);
                alert('Страница успешно загружена!');
            })
        .catch(()=> alert ('Что-то пошло не так...'));
}
