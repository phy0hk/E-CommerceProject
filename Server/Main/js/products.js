const pddb = '{"products":{"name":"Hoodie","Price":"99.99$"}}';
const datagg = JSON.parse(pddb);

document.getElementById("name").innerHTML = datagg.products.name;