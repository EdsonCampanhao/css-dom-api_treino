let alyPokemon = document.querySelector('.createTeamContainer');
let pokemonTeam = document.querySelector('.createTeamContainer__team');
let enemyPokemon = document.querySelector('.enemyApresentation');
let PokemonName = document.querySelector('.createTeamContainer__input');
let button = document.querySelector('.createTeamContainer__button');
let battlefield = document.querySelector('.battlefield');
let selectedPokemon = []

async function findPokemon(pokemon) {
    const pokemonN = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const pokemonConvertida = await pokemonN.json()
    return pokemonConvertida
}


function createStructure(father) {

    pokemon = father.appendChild(document.createElement('div'));
    pokemon.classList.add('createTeamContainer__pokemon')

    pokemonImg = pokemon.appendChild(document.createElement('img'))
    pokemonImg.classList.add('createTeamContainer__img')

    pokemonNm = pokemon.appendChild(document.createElement('p'))
    pokemonNm.classList.add('createTeamContainer__name')

    pokemonTp = pokemon.appendChild(document.createElement('div'))
    pokemonTp.classList.add('createTeamContainer__type')



}
function addSprite(father, img, name, type1, type2) {
    let lastPokemon = father.children[father.children.length - 1]
    lastPokemon.children[0].src = `${img}`
    lastPokemon.children[1].textContent = `Nome: ${name}`
    if (lastPokemon.children[2].textContent = '') { } else {
        lastPokemon.children[2].textContent = `Tipo: ${type1} ${type2}`
    }
}

function addBattleDatas(name, img, hp, atk) {
    selectedPokemon.push(
        {
            "name": name,
            "sprite": img,
            "hp": hp,
            "atk": atk,

        })
}

button.addEventListener('click', async (event) => {

    event.preventDefault()
    let fetchedPokemon = await findPokemon(PokemonName.value)

    await console.log(fetchedPokemon)

    if (PokemonName.value != '') {
        createStructure(pokemonTeam)

        if (fetchedPokemon.types.length < 2) {
            addSprite(pokemonTeam, fetchedPokemon.sprites.other.dream_world.front_default, fetchedPokemon.name,
                fetchedPokemon.types[0].type.name, '',
            )
        }
        else {
            addSprite(pokemonTeam, fetchedPokemon.sprites.other.dream_world.front_default, fetchedPokemon.name,
                fetchedPokemon.types[0].type.name, fetchedPokemon.types[1].type.name,
            )
        }
        if (PokemonName.value != '') {
            alyPokemon.children[0].textContent = 'o pokemon selecionado foi'
            addBattleDatas(
                fetchedPokemon.name,
                fetchedPokemon.sprites.other.dream_world.front_default,
                fetchedPokemon.stats[0].base_stat,
                fetchedPokemon.stats[1].base_stat);

            alyPokemon.children[2].remove()
            alyPokemon.children[1].remove()

            let buttonContinue = alyPokemon.appendChild(document.createElement('button'))
            buttonContinue.textContent = 'continue';
            buttonContinue.addEventListener('click', () => {

                alyPokemon.classList.add('none')
                battlefield.classList.remove('none')
                employAlly()
                allyHp= selectedPokemon[1].hp*2
                barOfHealthyAlly.value= selectedPokemon[1].hp*2
                barOfHealthyAlly.max= selectedPokemon[1].hp*2
                pokemonsSelected = document.querySelectorAll('.createTeamContainer__pokemon');

                pokemonEnemy = pokemonsSelected[2]
                pokemonEnemy.classList.add('pokemonEnemy')
                pokemonAlly = pokemonsSelected[3]
                pokemonAlly.classList.add('pokemonAlly')

            })
        }

    }

}
)


