function choice(items) {
	const rand = Math.floor(Math.random() * items.length);
	return items[rand];
}

function remove(items, item) {
	let index = items.indexOf(item);
	if (index === -1) return undefined;
	items.splice(index, 1);
	return item;
}

export { choice, remove };
