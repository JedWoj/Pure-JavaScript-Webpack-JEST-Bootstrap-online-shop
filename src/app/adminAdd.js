export class AdminAdd {
    constructor() {
        this.checkUrl();
    }

    checkUrl() {
        const url = window.location.href;
        if (url.includes('/add')) {
            console.log('hello');   
        }
    }
}