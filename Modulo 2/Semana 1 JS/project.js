    let name = prompt("Insert name ")
    let age = prompt("Insert age ")

    age = parseInt(age);
    if (isNaN(age)){
        console.log("Insert valid values")
    }else{
        if (age <= 0 || age === 0) {
                console.log("Invalid age");
        } else if(age >= 18){
            document.getElementById("Main_square").innerHTML = "You are an adult";
        } else if(age < 18 && age > 0){
            document.getElementById("Main_square").innerHTML = "<div><h1>You are not an adult</h1></div>";
        }
    }