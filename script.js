let allTotal = 0;

function addToCart(element){
	let mainEl = element.closest('.single-item');
	let name = mainEl.querySelector('h3').innerText;
	let price = mainEl.querySelector('.price').innerText;

	price = price.substring(1);
	price = parseInt(price);


	let korpa = document.querySelector('.cart-items');
	let total = price * 1;
	allTotal += total;

	korpa.innerHTML += `<div class = "cart-single-item">
							<h3> ${name}</h3>
							<p>$<span>${total}</span></p>	
							<button onclick="RemoveItem(this)" class="remove-item">Gledaj opet</button>	
						</div>`
	document.querySelector('.total').innerText = `Total $${allTotal}`;
	element.innerText = 'Pogledano';
	element.setAttribute('disabled','true');

	
}


function RemoveItem(element){
	let mainEl = element.closest('.cart-single-item');
	let price = mainEl.querySelector('p span').innerText;
	let name = mainEl.querySelector('h3').innerText;
	let filmovi = document.querySelectorAll('.single-item');

	price = parseInt(price);

	allTotal -= price;

	document.querySelector('.total').innerText = `Total $${allTotal}`;
	mainEl.remove();

	filmovi.forEach(function(film){
		let itemName = film.querySelector('.si-content h3').innerText;

		if(itemName===name){
			
			film.querySelector('.actions button').removeAttribute('disabled');
			film.querySelector('.actions button').innerText ='Gledaj';
		}

	
	});

}
