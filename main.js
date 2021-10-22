class Dropdown {
	constructor(selector, options){

		// Selector
		this.el = document.querySelector(selector);

		// Get all items
		this.items = options.items;

		// Default element
		this.el.querySelector('.dropdown-label').textContent = this.items[0].label;

		// Show or hide dropdown menu
		this.el.addEventListener('click', event => {
			if(event.target.classList.contains('dropdown-label')) {
				if(this.el.classList.contains('open')){
					this.close();
				} else {
					this.open();
				}
			} else if (event.target.tagName.toLowerCase() === 'li') {
				// Select element by target-id
				this.select(event.target.dataset.id);
			}
		});

		// Dynamic create list items from objects array
		const itemsHTML = this.items.map(i => {
			return `<li data-id="${i.id}">${i.label}</li>`;
		}).join('');

		this.el.querySelector('.dropdown-menu').insertAdjacentHTML('afterbegin', itemsHTML);
	}

	select(id){
		const item = this.items.find(i => i.id == id);
		this.el.querySelector('.dropdown-label').textContent = item.label;
		this.close();
	}

	open(){
		this.el.classList.add('open');
	}

	close(){
		this.el.classList.remove('open');
	}
}

// Init
const dropdown = new Dropdown('#dropdown', {
	items: [
		{label: 'Moscow', id: 'msk'},
		{label: 'Kiev', id: 'kiv'},
		{label: 'Poltava', id: 'pol'},
		{label: 'Rudenkivka', id: 'rud'},
	]
});