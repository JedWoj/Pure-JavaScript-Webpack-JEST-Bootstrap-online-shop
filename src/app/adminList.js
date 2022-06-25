export class AdminList {

    constructor() {
        this.renderList();
    }

    renderList() {
        console.log('jestem');
        const container = document.querySelector('.list__list');
        const div = `
        <li class="list__item">
            <p class="list__item-content">
                Gold necklace
            </p>
            <p class="list__item-id">
                id: 1
            </p>
            <img src="../imgs/delivery.jpg" alt="" class="list__item-img">
            <button type="button" class="btn-close list__item-close" aria-label="Close"></button>
        </li>
        `
        container.insertAdjacentHTML('beforeend', div);
    }
}