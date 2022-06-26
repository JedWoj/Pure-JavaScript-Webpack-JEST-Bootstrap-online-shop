export class AdminAdd {

    constructor() {
        this.checkUrl();
    }

    checkUrl() {
        const url = window.location.href;
        if (url.includes('/add')) {
            this.formHandler(); 
        }
    }

    formHandler() {
        const form = document.querySelector('.add');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.checkInputs();
        })
    }

    async checkInputs() {
       const title = this.checkTitle();
       const price = this.checkPrice();
       const category = this.checkCategory();
       const description = this.checkDescription();
       const image = this.checkImage();
       if (title === 'invalid' ||  price === 'invalid' || category === 'invalid' || description === 'invalid' || image === 'invalid') return
       await this.addProduct(title,price,description,image,category);
    }

    clearInputs() {
        const inputs = document.querySelectorAll('.add__input');
        inputs.forEach(input => input.value = '') 
    }

    errorMsg(label,action) {
        action === 'add' ? label.classList.add('add__label--active') : label.classList.remove('add__label--active');
    }

    checkTitle() {
        const label = document.querySelector('.add__title-label');
        const title = document.querySelector('.add__title').value;
        title === '' ? this.errorMsg(label,'add') : this.errorMsg(label, 'remove');
        if (!title) return 'invalid'
        return title;
    }

    checkPrice() {
        const label = document.querySelector('.add__price-label');
        const price = document.querySelector('.add__price').value;
        price === '' ? this.errorMsg(label, 'add') : this.errorMsg(label, 'remove');
        if (!price) return 'invalid'
        return price;
    }

    checkCategory() {
        const label = document.querySelector('.add__category-label');
        const category = document.querySelector('.add__category').value;
        category === '' ? this.errorMsg(label, 'add') : this.errorMsg(label, 'remove');
        if (!category) return 'invalid'
        return category;
    }

    checkDescription() {
        const label = document.querySelector('.add__description-label');
        const description = document.querySelector('.add__description').value;
        description === '' ? this.errorMsg(label, 'add') : this.errorMsg(label, 'remove');
        if (!description) return 'invalid'
        return description;
    }

    checkImage() {
        const label = document.querySelector('.add__image-label');
        const image = document.querySelector('.add__image').value;
        image === '' ? this.errorMsg(label, 'add') : this.errorMsg(label, 'remove');
        if (!image) return 'invalid'
        return image;
    }

    async addProduct(title,price,description,image,category) {
        const response = await fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: title,
                    price: price,
                    description: description,
                    image: image,
                    category: category
                }
            )
        })
        const data = await response.json();
        this.showAddMsg('add');
        this.okBtnHandler();
    }

    showAddMsg(action) {
        const msg = document.querySelector('.add__msg');
        action === 'add' ? msg.classList.add('add__msg--active') : msg.classList.remove('add__msg--active');
    }

    okBtnHandler() {
        const okBtn = document.querySelector('.add__msg-btn');
        okBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.showAddMsg('remove');
        })
        this.clearInputs();
    }
}