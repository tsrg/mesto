export class Section {

    constructor ({data}, containerSelector) {
        this._container = document.querySelector(containerSelector);
        this._items = data.items;
        this._renderer = data.renderer;
    }

    addItem(element) {
        this._container.append(element);
    }

    renderItems() {
        this._items.forEach(item => {
            this._renderer(item);
        });
    }

}