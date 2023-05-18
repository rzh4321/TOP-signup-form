let submit = document.getElementById('create-account');
submit.addEventListener('click', (e) => {
    if (!checkPasswords()) {
        document.getElementById('pw').classList.add('invalid');
        document.getElementById('confirm').classList.add('invalid');
    }
})



function checkPasswords() {
    let pw = document.getElementById('pw');
    let confirm = document.getElementById('confirm');
    return pw.value == confirm.value;
}