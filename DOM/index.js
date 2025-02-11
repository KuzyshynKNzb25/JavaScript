function findByLegAndHypotenuse(leg, hypotenuse){
    var leg2 = Math.sqrt(Math.pow(hypotenuse, 2) - Math.pow(leg, 2)) ;
    var alpha = Math.asin(leg/hypotenuse);
    alpha = alpha*180/Math.PI;
    var beta = Math.asin(leg2/hypotenuse);
    beta = beta*180/Math.PI;
    console.log(`a = ${leg}
b = ${leg2}
c = ${hypotenuse}
alpha = ${alpha}
beta = ${beta}`)
}

function findByTwoLegs(leg1, leg2){
    var c = Math.sqrt(Math.pow(leg1,2) + Math.pow(leg2, 2));
    var alpha = Math.asin(leg1/c);
    alpha = alpha*180/Math.PI;
    var beta = Math.asin(leg2/c);
    beta = beta*180/Math.PI;
    console.log(`a = ${leg1}
b = ${leg2}
c = ${c}
alpha = ${alpha}
beta = ${beta}`)
}

function findByLegAndAdjacentAngle(adjacentAngle, Leg){
    if(adjacentAngle >= 90){
        console.log("Значення цього кута повинно бути меншим за 90\n"+
            "Value of that angle must be less than 90");
        return;
    }
    let in_radians = adjacentAngle*Math.PI/180;
    var c = Leg/Math.cos(in_radians);
    var Leg2 = Leg*Math.tan(in_radians);

    var beta = 90 - adjacentAngle;
    console.log(`a = ${Leg}
b = ${Leg2}
c = ${c}
alpha = ${adjacentAngle}
beta = ${beta}`)
}

function findByLegAndOppositeAngle(oppositeAngle, Leg){
    if(oppositeAngle >= 90){
        console.log("Значення цього кута повинно бути меншим за 90\n"+
            "Value of that angle must be less than 90");
        return;
    }
    let in_radians = oppositeAngle*Math.PI/180;
    var beta = 90 - oppositeAngle;
    var c = Leg/Math.sin(in_radians);
    var Leg2 = Leg*Math.tan(beta*Math.PI/180);
    var beta = 90 - oppositeAngle;
    console.log(`a = ${Leg}
b = ${Leg2}
c = ${c}
alpha = ${oppositeAngle}
beta = ${beta}`)
}

function findByHipotenuseAndAngle(angle, hypotenuse){
    if(angle >= 90){
        console.log("Значення цього кута повинно бути меншим за 90\n"+
            "Value of that angle must be less than 90"
        );
        return;
    }
    var beta = 90 - angle;
    var a = hypotenuse * Math.sin(angle * Math.PI/180);
    var b = hypotenuse * Math.sin(beta* Math.PI/180);
    console.log(`a = ${a}
b = ${b}
c = ${hypotenuse}
alpha = ${angle}
beta = ${beta}`)
}
const availableInput = ["leg", "hypotenuse", "adjacent angle","opposite angle", "angle"];
const rightInputs = [[0,1], [2,0], [3,0], [4,1], [0,0]];

function triangle(number1, nameOfThatNumber, number2, nameOfNumber2){

    if(number1 <= 0 || number2 <= 0){
        console.log("Значення параметрів цієї функції не можуть бути менше 0\n"+ 
            "Values of these parameters must be bigger than 0"
        );
        return;
    }

    const yourIndexes = [];

    for(var i = 0; i< availableInput.length;i++){
        if(nameOfThatNumber === availableInput[i]){
            yourIndexes.push(i);
            break;
        }
    }
    for(var i = 0; i< availableInput.length;i++){
        if(nameOfNumber2 === availableInput[i]){
            yourIndexes.push(i);
            break;
        }
    }

    let choice;

    for(var i = 0;i < rightInputs.length;i++){
        if(yourIndexes[0] === rightInputs[i][0] && yourIndexes[1] === rightInputs[i][1]){
            choice = i;
            break;
        }
        else if(yourIndexes[0] === rightInputs[i][1] && yourIndexes[1] === rightInputs[i][0]){
            choice = i;
            let change = number1;
            number1 = number2;
            number2 = change;
            break;
        }
    }

    switch(choice){
        case 0:
            findByLegAndHypotenuse(number1, number2);
            break;
        case 1:
            findByLegAndAdjacentAngle(number1, number2);
            break;
        case 2:
            findByLegAndOppositeAngle(number1, number2);
            break;
        case 3:
            findByHipotenuseAndAngle(number1, number2);
            break;
        case 4:
            findByTwoLegs(number1, number2);
            break;
        default:
            let first = false, second = false;
            for(var i = 0;i < rightInputs.length;i++){
                if(availableInput[i] === nameOfThatNumber ){
                    first = true;
                }
                if(availableInput[i] === nameOfNumber2){
                    second = true;
                }
            }
            if(first && second){
                console.log("Не можна обчислити невідомі значення трикутника з цими об'єктами\n"+ 
                    "Function can`t count other values of triangle with these parameters"
                );
            }
            else if(first){
                console.log("Перевірте, чи не зробили ви помилку в другому введеному параметрі\n" + 
                    "Check your second parameter, there might be a mistake or that object is not related with counting of values of triangle"
                )
            }
            else if(second){
                console.log("Перевірте, чи не зробили ви помилку в першому введеному параметрі\n" + 
                    "Check your first parameter, there might be a mistake or that object is not related with counting of values of triangle"
                )
            }
            else {
                console.log("Ця функція не може працювати з цими об'єктами\n" + 
                    "This funktion can`t work with these objects"
                )
            }
    }
}