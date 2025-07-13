    const products ={
        "1": {id:"1" , name:"Laptop"},
        "2":  {id:"2" , name:"Mouse"},
        "3": {id:"3" , name:"Teclado"}
    }

    for (const product in products){
        console.log(product.name)
    }

// products.forEach(product => {
//     console.log(`este es una prueba de productos: ${product.name}`)
   
// });