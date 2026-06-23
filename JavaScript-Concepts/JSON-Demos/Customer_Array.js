const Customers = [
    {
    custId : 1,
    custName : "Soniya K",
    username : "soniya23",
    email : "soniya@gmail.com",
    address : {
        street : "Pankaj Nagar",
        city : "Nagpur",
        Pincode : 440022
    },
    phone : 9876543254,
    website : "ByteWave.tech"
},
{
    custId : 2,
    custName : "Tanvi K",
    username : "tanvi04",
    email : "tanvi@gmail.com",
    address : {
        street : "Sadar",
        city : "Nagpur",
        Pincode : 440023
    },
    phone : 9876543278,
    website : "codesphere.dev"
},
{
    custId : 3,
    custName : "Riya K",
    username : "riya23",
    email : "riya@gmail.com",
    address : {
        street : "Marine Drive",
        city : "Mumbai",
        Pincode : 440332
    },
    phone : 9864533254,
    website : "PixelForge.com"
},
{
    custId : 4,
    custName : "Sakshi B",
    username : "sakshi03",
    email : "sakshi@gmail.com",
    address : {
        street : "Pavni",
        city : "wardha",
        Pincode : 441122
    },
    phone : 9834567899,
    website : "ByteWave.tech"
},
{
    custId : 5,
    custName : "Sonu B.",
    username : "sonuu23",
    email : "sonuu@gmail.com",
    address : {
        street : "MG Road",
        city : "Bengaluru",
        Pincode : 442322
    },
    phone : 9878765435,
    website : "CodeFusion.Dev"
}];


console.log(Customers[0].custName);

Customers.forEach (cust => console.log(cust));
