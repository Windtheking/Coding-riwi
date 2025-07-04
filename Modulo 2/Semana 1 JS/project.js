    let name = prompt("Insert name ")
    let age = prompt("Insert age ")

    age = parseInt(age);
    if (isNaN(age)){
        console.log("Insert valid values")
    }else{
        if (age <= 0 || age === 0) {
                console.log("Invalid age");
        } else if(age >= 18){
            console.log("You are an adult");
        } else if(age < 18 && age > 0){
            console.log("You are not an adult");
        }
    }