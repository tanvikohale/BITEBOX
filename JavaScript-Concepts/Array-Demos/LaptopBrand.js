let laptop_brand = ["Hp", "Dell", "Lenovo", "Asus", "Acer", "Victus"];

console.log(laptop_brand);

// push
laptop_brand.push("Samsung");
console.log("After Adding new laptop brand : "+laptop_brand);

// foreach
laptop_brand.forEach(laptop => console.log(laptop));

// using index
console.log("Laptop brand of 3 index : "+laptop_brand[3]);

// lenght
console.log("Total Laptop Brands : "+laptop_brand.length);

// pop
laptop_brand.pop();
console.log(laptop_brand);

