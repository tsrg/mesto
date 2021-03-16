export default class Section {

    constructor (container, {data, renderer}) {
        this._container = container;
        this._items = data;
        this._renderer = renderer;
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