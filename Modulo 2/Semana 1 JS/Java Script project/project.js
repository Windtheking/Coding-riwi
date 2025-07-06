    let name = prompt("Insert name ")
    let age = prompt("Insert age ")

    age = parseInt(age);
    if (isNaN(age)){
        document.getElementById("Main_square").innerHTML = `<p>Usser ${name} Inserted invalid value (${age}). Please insert valid value</p>`;
    }else{
        if (age <= 0 || age === 0) {
                document.getElementById("Main_square").innerHTML = `<p>Usser ${name} inserted a Invalid age (${age}). Please ${name} insert a valid age</p>`;
        } else if(age >= 18){
            document.getElementById("Main_square").innerHTML = `<p>Usser ${name} You are ${age} years old hence you are an adult</p>`;
        } else if(age < 18 && age > 0){
            document.getElementById("Main_square").innerHTML = `<p>Usser ${name} You are ${age} years old hence you are not an adult</p>`;
        }
    }


setTimeout(() => {
  location.reload();
}, 8000);