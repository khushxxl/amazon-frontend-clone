// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;


contract Ecommerce  {

  struct Product{
    string title ;
    string desc;
    address payable seller;
    uint productId;
    uint price;
    address buyer;
    bool delivered;
}  
uint counter = 1;
 Product[] public products;

 function registerProduct(string memory _title , string memory _desc , uint _price) public {
   require(_price > 0 , 'Price should be greater than Zero');
   Product memory tempProduct;
   tempProduct.title = _title;
   tempProduct.desc = _desc;
   tempProduct.price = _price * 10 ** 18 ;
   tempProduct.seller = payable (msg.sender);
   tempProduct.productId = counter;
   products.push(tempProduct);
   counter ++;
}

function buy( uint _productId)  payable public {

require(products[_productId -1 ].price > msg.value, "Please Pay Exact Value");
require(products[_productId -1 ].seller != msg.sender, "Seller Cannot become Buyer");
products[_productId -1].buyer = msg.sender;




}


function delivery(  uint _productId ) public {
  require(products[_productId -1 ].buyer == msg.sender , 'Seller cannot confirm delivery');
  products[_productId -1 ].delivered = true;
  products[_productId -1].seller.transfer(products[_productId -1].price);


}

function getProducts() public view returns(Product[] memory) {
  return products;
}





}
