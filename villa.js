var vp =document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var x = aleatorio (0,420);
var y = aleatorio (0,420);

var fondo = {
	url: "tile.png",
	cargaOK: false
}

var vaca = {
	url: "vaca.png",
	cargaOK: false
};


var pollo = {
	url: "pollo.png",
	cargaOK: false
};

var cerdo = {
	url: "cerdo.png",
	cargaOK: false
};

var farmer = {
	url: "farmer.png",
	cargaOK: false
}

var cantidad = aleatorio(5,15);

var teclas = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
};



fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

farmer.imagen = new Image();
farmer.imagen.src = farmer.url;
farmer.imagen.addEventListener("load", cargarFarmer);

document.addEventListener("keydown" , moverFarmer);


function cargarFondo ()

{
	fondo.cargaOK = true;
	dibujar();
}

function cargarVacas ()

{
	vaca.cargaOK = true;
	dibujar();
}

function cargarPollos ()

{
	pollo.cargaOK = true;
	dibujar();
}

function cargarCerdos ()

{
	cerdo.cargaOK = true;
	dibujar();
}

function cargarFarmer ()

{
	farmer.cargaOK = true;
	dibujar();
}




function dibujar ()
{
	if(fondo.cargaOK)
	{
		papel.drawImage(fondo.imagen, 0,0);
	}

	if(vaca.cargaOK)
	{
		
		console.log(cantidad);
		for(var v=0; v < cantidad; v++)
		{
			var x = aleatorio(0, 7);
			var y = aleatorio(0, 7);
			var x = x * 60;
			var y = y * 60;
			papel.drawImage(vaca.imagen, x, y);
		}
		
	}

	if(cerdo.cargaOK)
	{
		
		console.log(cantidad);
		for(var v=0; v < cantidad; v++)
		{
			var x = aleatorio(0, 7);
			var y = aleatorio(0, 7);
			var x = x * 60;
			var y = y * 60;
			papel.drawImage(cerdo.imagen, x, y);
		}
		
	}

	if(pollo.cargaOK)
	{
		
		console.log(cantidad);
		for(var v=0; v < cantidad; v++)
		{
			var x = aleatorio(0, 7);
			var y = aleatorio(0, 7);
			var x = x * 60;
			var y = y * 60;
			papel.drawImage(pollo.imagen, x, y);
		}
		
	}

	if(farmer.cargaOK)
	{
		
		console.log(cantidad);
		for(var v=0; v < 1; v++)
		{
			var x = aleatorio(0, 7);
			var y = aleatorio(0, 7);
			var x = x * 60;
			var y = y * 60;
			papel.drawImage(farmer.imagen, x, y);
		}
		
	}


}


function moverFarmer(evento)

{

	// farmer.cargaOK = true;
	// dibujar();

	var movimiento = 5;

	

	switch(evento.keyCode)
	{
		case teclas.UP:
			cargarFarmer(x, y, x, y - movimiento);
			y = y - movimiento;
		break;

		case teclas.DOWN:

			cargarFarmer(x, y, x, y + movimiento);
			y = y + movimiento;
		break;
		case teclas.LEFT:

			cargarFarmer(x, y, x - movimiento, y);
			x = x - movimiento;
		break;
		case teclas.RIGHT:
			cargarFarmer(x, y, x + movimiento, y);
			x = x + movimiento;
		break;
	}
}


function aleatorio(min,maxi)

{
	var resultado;
	resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
	return resultado;
}

