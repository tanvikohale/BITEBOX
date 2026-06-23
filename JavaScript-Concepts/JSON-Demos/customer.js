const customer = {
  cust_ID: 204,
  cust_name: "Tanvi Kohale",
  address: {
    houseNo: 78,
    StreetName: "Pankaj Nagar",
    Area: "Near ShardaMata Mandir",
    State: "Maharashtra",
    city : "Nagpur",
    Pincode: 443300,
  },
  order: {
    order_id: 3456,
    bill_amount: "₹3455",
    transaction_type: "online",
    card_payment: false,
    upi_payment: true,
    upi_id: "ifscd34867",
    upi_mode: "GPay",
  },
};

console.log(customer.address.city);
console.log(customer.order.upi_id);