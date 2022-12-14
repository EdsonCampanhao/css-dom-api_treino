let buttonOfAttack = document.querySelector(".batlefield__action-attack");
let buttonOfDefense = document.querySelector(".batlefield__action-defense");
let buttonOfDodge = document.querySelector(".batlefield__action-dodge");
// value was taken in'enemyApresentation.js'
let enemyHp = 0
// value was taken in 'selectTeam.js'
let allyHp = 0
//value of priority
let priorityAlly = 0
let priorityEnemy = 0
//value for action enemy
let dice = 0
//console of battle
let consoleOfBattle = document.querySelector('.area');
let textOfConsole = []

function attack(valueOfAttack, target, action) {
    damage = (10 + (valueOfAttack * (Math.random() * 1)))
    if (target > 0) {
        if (target == enemyHp) {
            target = target - damage
            enemyHp = target

            

            if (action == 'defense') {
                console.log('o inimigo defendeu o ataque')
               consoleOfBattle.value='o inimigo defendeu o ataque'
                enemyHp = target + damage
                priorityEnemy = -6
            }
            else if (action == 'dodge') {
                dodge = Math.floor(Math.random() * 6)
                if (dodge <= 2) {
                    console.log('o inimigo desviou')
                    consoleOfBattle.value='o inimigo desviou'
                    enemyHp = target + damage

                } else if (dodge <= 4) {

                    console.log('o inimigo tentou desviar, mas foi atingido de raspão')
                    consoleOfBattle.value='o inimigo tentou desviar, mas foi acertado de raspão'
                    enemyHp = target + (damage / 2)

                } else {
                    console.log('o inimigo tentou desviar, mas não conseguiu')
                    consoleOfBattle.value=`o inimigo tentou desviar, mas não conseguiu e recebeu ${Math.floor(damage)} de dano `
                }


            } else{ 
                console.log(`o pokemon inimigo recebeu ${Math.floor(damage)} de dano `);
                consoleOfBattle.value=`o pokemon inimigo recebeu ${Math.floor(damage)} de dano `
        }
        console.log(priorityEnemy);
            priorityEnemy = 6
           

           
        } else {
            target = target - damage
            allyHp = target

            console.log(`o seu pokemon recebeu ${Math.floor(damage)} de dano `)
            
            if (action == 'defense') {
                console.log('porém conseguiu defender')
                consoleOfBattle.value=`o seu pokemon defendeu ${Math.floor(damage)} de dano `
                allyHp = target + damage
                priorityAlly = +6
            }
            if (action == 'dodge') {
                dodge = Math.floor(Math.random() * 6)
                if (dodge <= 2) {
                    console.log('seu pokemon conseguiu desviar')
                    consoleOfBattle.value='seu pokemon conseguiu desviar'
                    allyHp = target + damage

                } else if (dodge <= 4) {

                    console.log('tentou desviar, mas foi atingido de raspão')
                    consoleOfBattle.value='seu pokemon tentou desviar, mas foi atingido de raspão'
                    allyHp = target + (damage / 2)

                } else {
                    console.log('tentou desviar, mas não conseguiu')
                }
                priorityAlly = -6
            }
        }
    }

}
buttonOfAttack.addEventListener('click', (event) => {
    event.preventDefault();
    priority = Math.floor(Math.random() * 6)
    console.log(priority)

    dice = Math.floor(Math.random() * 6)
    console.log(`o dado caiu em ${dice}`)

    //enemy attack with dice= 2 or less
    if (dice <= 3) {
        if (priority + priorityEnemy > 3) {

            priorityAlly = 0
            priorityEnemy = 0

            attack(selectedPokemon[0].atk, allyHp)
            if (allyHp <= 0) {
                console.log('o seu pokemon foi derrotado')
                setTimeout(()=>{ consoleOfBattle.value='o seu pokemon foi derrotado'}, 1000)
            } else {
                attack(selectedPokemon[1].atk, enemyHp)
                if (enemyHp <= 0) {
                    console.log('o  pokemon inimigo foi derrotado')
                    setTimeout(()=>{ consoleOfBattle.value='o pokemon inimigo foi derrotado'}, 1000)
               
                }
            }
        }
        else {

            priorityAlly = 0
            priorityEnemy = 0

            attack(selectedPokemon[1].atk, enemyHp)
            if (enemyHp <= 0) {
                console.log('o  pokemon inimigo foi derrotado')
                setTimeout(()=>{ consoleOfBattle.value='o pokemon inimigo foi derrotado'}, 1000)
               
            }
            else {
                attack(selectedPokemon[0].atk, allyHp)
                if (allyHp <= 0) {
                console.log('o seu pokemon foi derrotado')
                setTimeout(()=>{ consoleOfBattle.value='o seu pokemon foi derrotado'}, 1000)
            }
            }
        }

    }
    else if (dice <= 4) {
        attack(selectedPokemon[1].atk, enemyHp, 'defense')


    } else {
        (attack(selectedPokemon[1].atk, enemyHp, 'dodge'))
        if (enemyHp <= 0) {
            console.log('o  pokemon inimigo foi derrotado')
        }
    }
    
})

buttonOfDefense.addEventListener('click', (event) => {
    event.preventDefault();

    dice = Math.floor(Math.random() * 6)
    console.log(`o dado caiu em ${dice}`)

    //enemy atack with dice= 2 or less
    if (dice <= 3) {
        attack(selectedPokemon[0].atk, allyHp, 'defense')
    }
    else if (dice <= 4) {
        consoleOfBattle.value='ambos os pokemons tentaram defender'
        console.log('ambos os pokemons tentaram defender')
        priorityEnemy = -6
    } else {
        consoleOfBattle.value='o pokemon inimigo se afastou enquanto você defendia'
        console.log('o pokemon inimigo se afastou enquanto você defendia')
        priorityEnemy = 6
    }
    priorityAlly = 6

})

buttonOfDodge.addEventListener('click', (event) => {
    event.preventDefault();

    dice = Math.floor(Math.random() * 6)

    console.log(`o dado caiu em ${dice}`)

    //enemy atack with dice= 2 or less
    if (dice <= 3) {
        attack(selectedPokemon[0].atk, allyHp, 'dodge');
        if (enemyHp <= 0) {
            console.log('o  pokemon inimigo foi derrotado')
        }

    }
    else if (dice <= 4) {
        console.log('você se afastou enquanto o inimigo esperava para defender')
        priorityEnemy = -6
    } else {
        console.log('ambos os pokemons aguardavam para desviar')
        priorityEnemy = 6
    }
    priorityAlly = -6

})



