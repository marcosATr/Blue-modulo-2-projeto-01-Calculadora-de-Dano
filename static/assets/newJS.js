//CONSTRUCTOR
function Character(atk, def, life, atkbar, defBar, lifeBar, HTMLPosition) {
    this.atk = atk
    this.def = def
    this.life = life
    this.isAlive = true
    this.atkbar = atkbar
    this.lifeBar = lifeBar
    this.defBar = defBar
    this.HTMLPosition = HTMLPosition
    this.updateLife = function (damageTaken) {
        this.life -= damageTaken
        if (this.life <= 0) {
            this.isAlive = false
            this.lifeBar.style.width = '0px'
        } else {
            this.lifeBar.style.width = `${this.life}px`
        }
    }
    this.updateAtaque = function () {
        this.atkbar.style.width = `${this.atk}px`
    }
    this.updateDefesa = function () {
        this.defBar.style.width = `${this.def}px`
    }
}
// CONSOLE
const consoleText = document.querySelector('.console > .insideBag')

// CHECK FOR CHARACTHERS AND CREATE NEW OBJECTS, ADD THEM TO A LIST.
let charsList = []
const allChars = Array.from(document.querySelectorAll('.character'))
for (let i of allChars) {
    let ataque = i.getAttribute('data-ataque')
    let defesa = i.getAttribute('data-def')
    let vida = i.getAttribute('data-vida')
    let barraDeAtaque = i.querySelector('.attributes > p:nth-child(1) > span')
    let barraDeDefesa = i.querySelector('.attributes > p:nth-child(2) > span')
    let barraDeVida = i.querySelector('.attributes > p:nth-child(3) > span')
    var posicao = allChars[allChars.indexOf(i)]
    let newChar = new Character(ataque, defesa, vida, barraDeAtaque, barraDeDefesa, barraDeVida, posicao)
    charsList.push(newChar)
}

// INITIALIZE CHARS FROM LIST OS CHARS:
const darth = charsList[0]
const grievous = charsList[1] // unnecessary, saved for future use
const ashoka = charsList[2] // unnecessary, saved for future use
const boba = charsList[3] // unnecessary, saved for future use
const enemies = document.querySelectorAll('#listOfChars > .character') //delete if not used
const groupOfChars = [darth, grievous, ashoka, boba]
const groupOfEnemies = [grievous, ashoka, boba] //delete if not used

const instancedEnemy = []

for (const enemy of groupOfEnemies) {
    enemy.HTMLPosition.addEventListener('click', function () {
        let selectedEnemy = new Character(enemy.atk, enemy.def, enemy.life, enemy.atkbar, enemy.defBar, enemy.lifeBar, enemy.HTMLPosition)
        instancedEnemy.push(selectedEnemy)

        //TRIGGER ANIMATIONS
        for (i of groupOfChars) {
            i.updateAtaque()
            i.updateDefesa()
            i.updateLife(0)
        }
        for (let j of groupOfEnemies) {
            j.HTMLPosition.classList.add('hide')
            setTimeout(function () {
                j.HTMLPosition.classList.add('displayNone')
            }, 295)
        }
        this.classList.add('displayShow')
        this.setAttribute('data', 'active')
        consoleText.innerHTML = 'Agora escolha a habilidade!'
    })
}


//WEAPONS CONSTRUCTION
let weaponsList = []
function WeaponsConstructor(name, weapAtkPower, weapHTML) {
    this.name = name
    this.weapAtkPower = weapAtkPower
    this.weapHTML = weapHTML
    this.causeDamage = function () {
        let dmg = this.calculateDamage()
        // instancedEnemy[0].life -= dmg
        // instancedEnemy[0].lifeBar.style.width = instancedEnemy[0].life + 'px'
        instancedEnemy[0].updateLife(dmg)
        consoleText.innerHTML = `Você causou ${dmg} de dano!`
    }
}
const weapons = Array.from(document.querySelectorAll('.inventory .item'))
for (let k of weapons) {
    let nome = k.getAttribute('data-name')
    let poder = k.getAttribute('data-power')
    let posicaoArma = weapons[weapons.indexOf(k)]
    let weaponObj = new WeaponsConstructor(nome, poder, posicaoArma)
    weaponsList.push(weaponObj)
}


//WEAPONS INITIALIZED
const lightsaber = weaponsList[0]
const force = weaponsList[1]
const pistol = weaponsList[2]
const groupOfWeapons = [lightsaber, force, pistol]



//SPECIFIC TYPES OF DAMAGES TO WEAPONS
lightsaber.calculateDamage = function () {
    return (darth.atk * this.weapAtkPower * 0.1) - instancedEnemy[0].def * 0.2 + (Math.floor(Math.random() * 6))
}
force.calculateDamage = function () {
    return (darth.atk * this.weapAtkPower * 0.1) + (Math.floor(Math.random() * 14))
}
pistol.calculateDamage = function () {
    return ((darth.atk * this.weapAtkPower * 0.1) - instancedEnemy[0].def * 0.1 + (Math.floor(Math.random() * 7))) * (Math.floor(Math.random() * 6))
}
function sufferDamage() {
    let damageTaken = (instancedEnemy[0].atk * 0.1) + (Math.floor(Math.random() * 13))
    // darth.life -= damageTaken
    darth.HTMLPosition.setAttribute('data-vida', `${darth.life}`)
    darth.updateLife(damageTaken)
}

//REAL FIGHT

for (let weapon of groupOfWeapons) {
    weapon.weapHTML.addEventListener('click', function () {
        if (darth.isAlive && instancedEnemy[0].isAlive) {
            weapon.causeDamage()
            sufferDamage()  
            if (instancedEnemy[0].isAlive == false){
                consoleText.innerHTML = 'Você ganhou!'
            } else if (darth.isAlive == false){
                consoleText.innerHTML = 'Você perdeu!'
            } else if (instancedEnemy[0].isAlive == false && darth.isAlive == false){
                consoleText.innerHTML = 'Empate! Ninguém sobreviveu!'
            }          
        }
    })
}



