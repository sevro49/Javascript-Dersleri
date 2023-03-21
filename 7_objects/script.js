let userA = {
    myName: "Emre",
    lastName: "Guler",
    age: 22,
    address: {
        city: "Istanbul",
        province: "Uskudar",
    },
    hobbys: ["cinema", "sports", "music"],
};

let userB = {
    myName: "Ali",
    lastName: "Veli",
    age: 49,
    address: {
        city: "Ankara",
        province: "Kizilay",
    },
    hobbys: ["cinema", "sports", "music"],
};

let result;

result = userA.myName;
result = userA.lastName;
result = userA.age;
result = userA.address.city;

result = userA.hobbys[0];

let users = [userA, userB];

result = users[1].myName;

let product = [
    {
        product_name: "iphone13",
        product_price: 1400,
    },

    {
        product_name: "iphone14",
        product_price: 1500,
    },
];

result = userA.myName;

console.log(result);
