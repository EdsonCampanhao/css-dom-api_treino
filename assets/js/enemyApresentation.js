let continueButton= document.querySelector('.enemyApresentation__botao')

async function createEnemy() {

    let fetchedPokemon = await  findPokemon('mewtwo');
  console.log(fetchedPokemon)
    createStructure(enemyPokemon);
    addSprite(enemyPokemon,fetchedPokemon.sprites.other.dream_world.front_default, fetchedPokemon.name,
        fetchedPokemon.types[0].type.name, '',
        fetchedPokemon.stats[0].base_stat, fetchedPokemon.stats[1].base_stat) 

        addBattleDatas( fetchedPokemon.name, 
          fetchedPokemon.sprites.other.dream_world.front_default,
          fetchedPokemon.stats[0].base_stat,
           fetchedPokemon.stats[1].base_stat);
        employEnemy();  
        enemyHp= selectedPokemon[0].hp*2
        barOfHealthyEnemy.value= selectedPokemon[0].hp*2
        barOfHealthyEnemy.max= selectedPokemon[0].hp*2
           
}
createEnemy();

continueButton.addEventListener('click',(event)=>{
    event.preventDefault();
    enemyPokemon.classList.add('none')
    alyPokemon.classList.remove('none')
})

