
if(localStorage["firstRun"] == null)
{
	localStorage.setItem('list', JSON.stringify([
		{id : 0 , text : "Yapılacak-1"},
		{id : 1 , text : "Yapılacak-2"},
		{id : 2 , text : "Yapılacak-3"},
		{id : 3 , text : "Yapılacak-4"},
		{id : 4 , text : "Yapılacak-5"},
		{id : 5 , text : "Yapılacak-6"},
		{id : 6 , text : "Yapılacak-7"},
		{id : 7 , text : "Yapılacak-8"},
		{id : 8 , text : "Yapılacak-9"},
		{id : 9 , text : "Yapılacak-10"}
		]
	));
	localStorage["firstRun"] = true;
}

let getAllStorge = () => {
	if(localStorage.getItem('list') == "[]")
		return [];
	else
		return JSON.parse(localStorage.getItem('list'));
};

let getByIdIndexStorge = (id) => {
	let list = getAllStorge();
	return list.findIndex((item)=> { return item.id == id});
};

let identificationNum = () => {
	let list = getAllStorge();
	if(localStorage.getItem('list') == "[]")
		return 0;
	else
		return list[list.length-1].id + 1
};

let addStorge = (text) => {
	let list = getAllStorge();
	list.push({id : identificationNum(), text : text});
	localStorage.setItem('list', JSON.stringify(list));
};

let removeStorge = (id) => {
	let list = getAllStorge();
	list.splice(getByIdIndexStorge(id),1);
	localStorage.setItem('list', JSON.stringify(list));
};

let multipleRemoveStorge = (listId) => {
	let list = getAllStorge();
	listId = listId.sort((a, b) => {return b - a});
	listId.forEach((id)=>{
		list.splice(getByIdIndexStorge(id),1);
	});
	localStorage.setItem('list', JSON.stringify(list));
};

/*Bonus*/
/*let getByValStorge = (val) => {
	let list = getAllStorge();
	return list.find((item)=> { return item.text == val});
};*/


