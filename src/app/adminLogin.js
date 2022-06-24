export class AdminLogin {
    #name = 'Admin';
    #password = 'Admin123';
    constructor() {
        this.checkUrl();
    }

    checkUrl() {
        const url = window.location.href;
        if (url.includes('/admin/')) this.checkLogin();
        if (url.includes('/admin')) this.formHandler();
    }

    checkLogin() {
        const loggedAsAdmin = JSON.parse(sessionStorage.getItem('admin')) ? JSON.parse(sessionStorage.getItem('admin')) : location.replace('http://localhost:8080/admin.html');
        return loggedAsAdmin;
    }

    formHandler() {
       const loginForm = document.querySelector('.login');
       loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(loginForm)
       })
    }

    checkInputs() {
        const name = document.querySelector('.login__input--name').value;
        const password = document.querySelector('.login__input--password').value;
        console.log(name, password);
    }
}