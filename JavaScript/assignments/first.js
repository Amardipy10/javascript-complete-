// let a=5;
// let b=10;
// console.log(a*b);
// console.log(a+b);
// console.log(a/b);
// console.log(a-b);
// const pi=3.14;
// let r=10;
// area=pi*r*r;
// console.log(area);

// let a=10;
// let b=a;
// a=20;
// console.log(b);


// function maximum(a,b){
//     if(a<b){
//         return b;
//     }
//     else{
//         return a;
//     }
// }

// console.log(maximum(7,8));

let product = {
    name: 'T-Shirt',
    brand: 'Mango',
    price: 1000,
    discount: 20,
    'category-name': 'Clothing',
    finalPrice: function () {
      let discountedPrice = this.price - (this.discount / 100) * this.price;
      console.log(`Final price is ₹${discountedPrice}`);
      return discountedPrice;
    }
  };

  console.log('Product Object:', product);

  console.log('Category:', product['category-name']);

  product.price = product.finalPrice();

  let { name, price } = product;
  console.log(`Product Name: ${name}`);
  console.log(`Product Price after discount: ₹${price}`);

  let product2 = {
    name: 'T-Shirt',
    brand: 'Mango',
    price: 1000,
    discount: 20,
    'category-name': 'Clothing'
  };

  console.log('Are product and product2 equal?', product == product2);

  delete product.discount;
  console.log('Product after deleting discount:', product);