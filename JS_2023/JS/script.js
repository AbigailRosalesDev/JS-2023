/*Navbar constant*/
const navbar= ['Home','Products','About Us','Contact','Carrito','Loguin'];
console.log(navbar)
 const navegation= document.getElementById('Nav');
/*Products constant */
const URL= '../Libros.json'
async function fetchData(){
    try{
        const response= await fetch(URL)
        const data= await response.json()
        console.log(data) 
    } catch(error){
        console.log(error)
    }
}
fetchData()





