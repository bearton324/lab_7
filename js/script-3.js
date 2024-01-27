let passwordTemp = '';
function hideOrReveal() {
    if(document.getElementById('button-3').innerHTML === 'Приховати') {
        passwordTemp = document.getElementById('password-input').value;
        document.getElementById('password-input').value = '';
        for (let i = 0; i < passwordTemp.length; i++) {
            document.getElementById('password-input').value += '*';
        }
        document.getElementById('button-3').innerHTML = 'Розкрити';
    } else {
        document.getElementById('password-input').value = passwordTemp;
        passwordTemp = '';
        document.getElementById('button-3').innerHTML = 'Приховати';
    }
}