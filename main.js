let carts = document.querySelectorAll('.add-cart');

let products = [

		{
			name: 'Red Velvet Cookie',
			tag:  'redvelvetcookie',
			price:15,
			inCart: 0
		},
		{
			name: 'Chocolate Chunk Cookie',
			tag:  'chocolatechunkcookie',
			price:20,
			inCart: 0
		},
		{
			name: 'Chocolate Chunk Cookie',
			tag:  'chocolatechunkcookie',
			price:20,
			inCart: 0
		},
		{
			name: 'Chocolate Chunk Cookie',
			tag:  'chocolatechunkcookie',
			price:20,
			inCart: 0
		},
		{
			name: 'Vanilla Glazed Donut',
			tag:  'vanillaglazeddonut',
			price:200,
			inCart: 0
		},



]

for(let i =0 ; i<carts.length ;i++) {
	carts[i].addEventListener('click',() =>{
		cartNumbers(products[i]);
		totalCost(products[i]);
	}) 
}

function onLoadCartNumbers(){
	let productNumbers = localStorage.getItem('cartNumbers');
	
	if(productNumbers){
		document.querySelector('.cart span').textContent = productNumbers;

	}

}

function cartNumbers(product)  {
	
	let productNumbers = localStorage.getItem('cartNumbers');
	


	productNumbers = parseInt(productNumbers);
	
	if(productNumbers) {
		localStorage.setItem('cartNumbers' ,productNumbers + 1);
		document.querySelector('.cart span').textContent =productNumbers+ 1;
	}

	else{
		localStorage.setItem('cartNumbers',1);
		document.querySelector('.cart span').textContent = 1;
	}

	setItems(product);
}
function setItems(product){
	let cartItems = localStorage.getItem("productsInCart");
	cartItems = JSON.parse(cartItems);
	if(cartItems != null)
	{
		if(cartItems[product.tag] ==  undefined){
			cartItems ={
				...cartItems,
				[product.tag]:product
			}
		}
		cartItems[product.tag].inCart +=1;
	}else {
		product.inCart =1
		cartItems ={
			[product.tag]:product
		};
	}
	//console.log("My cartItems ",cartItems);

	
	
	localStorage.setItem('productsInCart',JSON.stringify(cartItems));

}

function totalCost(product){
	//console.log("The product price is" , product.price);

	let cartCost = localStorage.getItem('totalCost')
	
	console.log("my cartcost is",cartCost);
	console.log(typeof cartCost);


	if(cartCost !=null){
		cartCost = parseInt(cartCost);
		localStorage.setItem("totalCost",cartCost + product.price);
	}else if{
		localStorage.setItem("totalCost",product.price);
	}
}

function displayCart(){
	let cartItems =localStorage.getItem('productsInCart');
	let cartItems =JSON.parse(cartItems);
	let productContainer = document.querySelector(".products-container");
	if(cartItems && productContainer){
		productContainer.innerHTML ='';
		Object.values(cartItems).map(item =>{
			productContainer.innerHTML +=`
				<div class ="product">
					
					<span>${item.name}</span>

			`;


		});
	}

	
}

onLoadCartNumbers();