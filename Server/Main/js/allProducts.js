const Container = document.getElementById('productsContainer');
function addDiv(pdName){
    var product = document.createElement("div");
product.innerHTML = pdName;
product.classList.add("childcontainer");
Container.appendChild(product);
}
const reqUrl = '/products/allProducts';
const getData = async(reqUrl)=>{
    try {
        const response = await fetch(reqUrl);
        const json = await response.json();
        console.log(json);
        addDiv(json.name);
    } catch (error) {
        console.log(error);
    }
}
getData(reqUrl);