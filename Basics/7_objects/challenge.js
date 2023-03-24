/**
 * 1- store order information in object
 * 2-Calculate the total price including KDV for each order separately (KDV: 18%)
 * 3-Calculate the total cost of each order including KDV
 *
 *
 * order id: 101
 * order date: 31.12.2022
 * payment method: credit card
 * cargo address: Yahya kaptan Mah. Kocaeli İzmit
 * purchased products:
 *      product id: 5
 *      product title: iPhone 13 Pro
 *      product url: http://abc.com/iphone-13-pro
 *      product price: 22000
 *
 *      product id: 6
 *      product title: iPhone 13 Pro Max
 *      product url: http://abc.com/iphone-13-pro-max
 *      product price: 25000
 *
 * customer:
 *      customer id: 12
 *
 * seller:
 *      company id: 34
 *      company name: Apple Turkiye
 *
 */

let order_1 = {
    order_id: 101,
    order_date: "31.12.2022",
    payment_method: "credit card",
    cardo_address: {
        district: "yahya kaptan",
        province: "Izmit",
        city: "Kocaeli",
    },

    products: [
        {
            product_id: 5,
            product_name: "iPhone 13 Pro",
            product_url: "http://abc.com/iphone-13-pro",
            product_price: 22000,
        },

        {
            product_id: 6,
            product_name: "iPhone 13 Pro Max",
            product_url: "http://abc.com/iphone-13-pro-max",
            product_price: 25000,
        },
    ],
};

let order_2 = {
    order_id: 102,
    order_date: "31.12.2022",
    payment_method: "credit card",
    cardo_address: {
        district: "yahya kaptan",
        province: "Izmit",
        city: "Kocaeli",
    },

    products: [
        {
            product_id: 6,
            product_name: "iPhone 13 Pro Max",
            product_url: "http://abc.com/iphone-13-pro-max",
            product_price: 25000,
        },
    ],
};

let order1_total =
    (order_1.products[0].product_price + order_1.products[1].product_price) *
    1.18;
let order2_total = order_2.products[0].product_price * 1.18;

let total_price = order1_total + order2_total;

console.log("Order 1 = " + order1_total);
console.log("Order 2 = " + order2_total);
console.log("Total cost = " + total_price);


let orders = [order_1, order_2];
