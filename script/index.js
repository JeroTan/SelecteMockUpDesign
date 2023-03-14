let click = 
[
document.getElementById("Supreme_click"),
document.getElementById("Classic_click"),
document.getElementById("Cornetto_click"),
document.getElementById("Magnum_click"),
document.getElementById("Hersheys_click"),
document.getElementById("IcecreamStick_click")
];

let container = 
[
document.getElementById("Supreme_container"),
document.getElementById("Classic_container"),
document.getElementById("Cornetto_container"),
document.getElementById("Magnum_container"),
document.getElementById("Hersheys_container"),
document.getElementById("IceCreamStick_container")
]

let titler = document.getElementById("title");



click[0].onclick = show1;
click[1].onclick = show2;
click[2].onclick = show3;
click[3].onclick = show4;
click[4].onclick = show5;
click[5].onclick = show6;

function show1()
{
	let typer = 1;
	changeContainer(typer);
	changeTitle(typer);
}
function show2()
{
	let type = 2;
	changeContainer(type);
	changeTitle(type);
}
function show3()
{
	let type = 3;
	changeContainer(type);
	changeTitle(type);
}
function show4()
{
	let type = 4;
	changeContainer(type);
	changeTitle(type);
}
function show5()
{
	let type = 5;
	changeContainer(type);
	changeTitle(type);
}
function show6()
{
	let typer = 6;
	changeContainer(typer);
	changeTitle(typer);
}

function changeContainer(type)
{
	let stringTemp = 'row margin_2prc ';
	for(let i = 0; i < 6; ++i)
	{
		container[i].setAttribute('class', (stringTemp + 'display_off'));
	}
	container[type-1].setAttribute('class', stringTemp);
}

function changeTitle(type)
{
	if(type == 1)
		titler.innerHTML = 'Supreme';
	else if(type == 2)
		titler.innerHTML = 'Classic';
	else if(type == 3)
		titler.innerHTML = 'Cornetto';
	else if(type == 4)
		titler.innerHTML = 'Magnum';
	else if(type == 5)
		titler.innerHTML = 'Hersheys';
	else if(type == 6)
		titler.innerHTML = 'Ice Cream Stick';
}
