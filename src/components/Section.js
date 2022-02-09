export class Section {
	constructor({ items, renderer }, containerSelector) {
		this._items = items;
		this._renderer = renderer;
		this._containerSelector = containerSelector;
	}

	addItem(element) {
		this._containerSelector.append(element);
	}

	renderedItems() {
		this._items.forEach(item => {
			this._renderer(item);
		});
	}

}
/*function createElement(data) {
	const card = createCards(data);
	section.addItem(card);

} */