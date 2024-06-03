//these code will be later embeded in the html file
const reqUrl = '/products/data';
let data;
const getData = async(reqUrl)=>{
    try {
        const response = await fetch(reqUrl);
        const json = await response.json();
        console.log(json);
        document.getElementById('name').innerHTML = json[0];
        
    } catch (error) {
        console.log(error);
    }
}
getData(reqUrl);