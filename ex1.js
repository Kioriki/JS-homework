let age = +prompt ('Сколько тебе лет?')
if (typeof age === 'number' && !isNaN(age)) {   
if (age % 2 == 0){
        console.log('Четное')
    } else {
        console.log('Нечетное')
    }
}
else{
    console.log("Упс! Кажется, вы ошиблись.")
}

