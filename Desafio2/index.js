const fs = require('fs');

class contenedor {
	constructor(path) {
		this.path = path;
	}

	async save(obj) {
		let newProduct = null;
		let id = 1;

		let data = await this.getAll()

		if (data.length === 0) {
			await fs.promises.writeFile(`${this.path}`, JSON.stringify([{ ...obj, id: id }]));
			return id;
		} else {
			newProduct = JSON.parse(data);
			newProduct.push({ ...obj, id: newProduct.length + 1 });
		}
		try {
			await fs.promises.writeFile(`${this.path}`, JSON.stringify(newProduct));
		} catch (err) {
			throw new Error('Ha ocurrido un error' + err);
		}
		const index = newProduct.length - 1;
		return newProduct[index].id;
	}

	async getById(x) {
		let data = await this.getAll()
		const newData = JSON.parse(data);
		const result = newData.find((e) => e.id === x);
		if (result) {
			return result;
		} else {
			return null;
		}
	}

	async getAll() {
		let data = null;
		try {
			data = await fs.promises.readFile(`${this.path}`, 'utf-8');
			return data;
		} catch (err) {
			return data = [];
		}
	}

	async deleteById(x) {
		let data = await this.getAll()
		const newProducts = JSON.parse(data);
		if (x < 1 || x > newProducts.length) {
			throw new Error('El producto no existe');
		}
		const result = newProducts.filter((e) => e.id !== x);
		try {
			await fs.promises.writeFile(`${this.path}`, JSON.stringify(result));
		} catch (err) {
			throw new Error('Ha ocurrido un error');
		}
	}

	async deleteAll() {
		try {
			await fs.promises.writeFile(`${this.path}`, '');
		} catch (err) {
			throw new Error('Ha ocurrido un error');
		}
	}
}

const data = new contenedor('./productos.txt');

data.save({
	title: 'Escuadra',
	price: 123.45,
	thumbnail: 'https://imagenEscuadra.jpg',
});

// data.getById(3).then(value => console.log(value))
// data.getAll().then(value => console.log(value))
// data.deleteById(2)
// data.deleteAll()