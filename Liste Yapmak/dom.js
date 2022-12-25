let selectList = [];
let checked = "✔";
let checkedNot = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
fillDomList();

function fillDomList()
{
	let ul = $('ul#list');	
	ul.empty()
	getAllStorge().reverse().forEach((v)=>
	{
		let active = "";
		let checkedIcon = checkedNot;
		if(selectList.includes(v.id))
		{
			active = "active";
			checkedIcon = checked;
		}
		let li = `<li onclick="selectOrRemoveClick(this,${v.id})"  class="list-group-item  d-flex ${active}">
					<div class="select">${checkedIcon}</div>
					<div class="col-11">${v.text}</div>
					<div onclick="event.stopPropagation();selectOrRemoveClick(this,${v.id})" class="btn outline">🗑</div>
		</li>`;
		ul.append(li);
	});
}

function addItem()
{
	let val = $("#task").val();
	if(emptyCheck(val))
	{
		addStorge(val);
		fillDomList();
		showSelectsRemoveButton(selectList);
	}
}

function removeItem(id)
{
	if(confirmSingleRemove())
	{
		removeStorge(id);
		selectList.splice(selectList.indexOf(id),1);
		fillDomList();
		showSelectsRemoveButton(selectList);
	}
}

function removeItems()
{
	if(confirmMultiRemove())
	{
		multipleRemoveStorge(selectList);
		selectList = [];
		fillDomList();
		showSelectsRemoveButton(selectList);
	}
}

function selectOrRemoveClick(th,id)
{
    if($(th).is("li"))
	{
		let select = $(th).children(0).html();
		
		if(select == checkedNot)
		{
			$(th).children(".select").html(checked);
			selectList.push(id);
		}
		else
		{
			$(th).children(".select").html(checkedNot);
			selectList.splice(selectList.indexOf(id),1);
		}
		
		$(th).toggleClass('active');
		showSelectsRemoveButton(selectList);
		console.log(selectList);
	}
	else
	{
		removeItem(id);	
	}	
}
