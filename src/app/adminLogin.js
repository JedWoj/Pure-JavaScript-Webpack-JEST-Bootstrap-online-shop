export class AdminLogin {
    #name = 'Admin';
    #password = 'Admin123';
    constructor() {
        this.checkUrl();
    }

    checkUrl() {
        const url = window.location.href;
        if (url.includes('/login')) this.formHandler();
        else if (url.includes('/admin')) this.checkLogin();
    }

    checkLogin() {
        const loggedAsAdmin = sessionStorage.getItem('admin') ? sessionStorage.getItem('admin') : location.replace('https://main--onilneshop.netlify.app/admin/login.html');
        return loggedAsAdmin;
    }

    formHandler() {
       const loginForm = document.querySelector('.login');
       loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.checkInputs();
       })
    }

    checkInputs() {
        const name = document.querySelector('.login__input--name').value;
        const password = document.querySelector('.login__input--password').value;
        if (name === this.#name && password === this.#password) {
            sessionStorage.setItem('admin', 'loggedIn');
            location.replace('https://main--onilneshop.netlify.app/admin.html');
        } 
    }
}