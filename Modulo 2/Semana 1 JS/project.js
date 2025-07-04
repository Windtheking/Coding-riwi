    let name = prompt("Insert name ")
    let age = prompt("Insert age ")

    age = parseInt(age);
    if (isNaN(age)){
        document.getElementById("Main_square").innerHTML = "Insert valid values";
    }else{
        if (age <= 0 || age === 0) {
                document.getElementById("Main_square").innerHTML = "Invalid age";
        } else if(age >= 18){
            document.getElementById("Main_square").innerHTML = "You are an adult";
        } else if(age < 18 && age > 0){
            document.getElementById("Main_square").innerHTML = "You are not an adult";
        }
    }