function Character(atk, def, life, atkbar, defBar, lifeBar) {
    this.atk = atk;
    this.def = def;
    this.life = life;
    this.atkbar = atkbar
    this.lifeBar = lifeBar
    this.defBar = defBar
    this.updateLife = function(damageTaken){
        this.life -= damageTaken
        this.lifeBar.style.width = `${this.life}px`
    }
    this.updateAtaque = function(){
        this.atkbar.style.width = `${this.atk}px`
    }
    this.updateDefesa = function(){
        this.defBar.style.width = `${this.def}px`
    }
}

let charsList = []
const allChars = Array.from(document.querySelectorAll('.character'))
for (let i of allChars) {
    let ataque = i.getAttribute('data-ataque')
    let defesa = i.getAttribute('data-def')
    let vida = i.getAttribute('data-vida')
    let barraDeAtaque = i.querySelector('.attributes > p:nth-child(1) > span')
    let barraDeDefesa = i.querySelector('.attributes > p:nth-child(2) > span')
    let barraDeVida = i.querySelector('.attributes > p:nth-child(3) > span')
    let newChar = new Character(ataque, defesa, vida, barraDeAtaque,barraDeDefesa, barraDeVida)
    charsList.push(newChar)
}

// INITIALIZE CHARS FROM LIST OS CHARS:
const darth = charsList[0]
const grievous = charsList[1]
const ashoka = charsList[2]
const boba = charsList[3]
const enemies = document.querySelectorAll('#listOfChars > .character')
const groupOfChars = [darth, grievous, ashoka, boba]
//FIGHT!
for (const enemy of enemies){
    enemy.addEventListener('click', function(){
        //TRIGGER BAR ANIMATIONS
        for(i of groupOfChars){
            i.updateAtaque()
            i.updateDefesa()
            i.updateLife(0)
        }
        //TRIGGER SELECTION ANIMATION
        for (let enemy of enemies){
            enemy.classList.add('hide')
            setTimeout(function(){ 
                enemy.classList.add('displayNone')
                }, 295)
        }
        enemy.classList.add('displayShow')
        this.setAttribute('data', 'active')
    })
}
const weapons = {
    lightSaber: function(){
        var causedDamage
    }
}
