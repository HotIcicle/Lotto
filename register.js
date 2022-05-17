const id = document.getElementById('id')
const password = document.getElementById('password')
const login = document.getElementById('login')
let errStack = 0;

login.addEventListener('click', () => {
        alert('가입도중 오류가 발생했습니다!')
        window.location.href = "login.html";
    }
)