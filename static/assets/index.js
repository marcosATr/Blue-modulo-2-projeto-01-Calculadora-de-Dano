const darthChar = document.querySelector('.darth')
const grievousChar = document.querySelector('.grievous')
const ashokaChar = document.querySelector('.ashoka')
const bobaChar = document.querySelector('.boba')
const characters = document.querySelectorAll('#listOfChars > .character')
const consoleText = document.querySelector('.console > .insideBag')


for (let char of characters){
    char.addEventListener('click', function(){
        for (let char of characters){
            char.classList.add('hide')
            setTimeout(function(){ 
                char.classList.add('displayNone')
                }, 295);
        };
        char.classList.add('displayShow');
        this.setAttribute('data', 'active');
        consoleText.innerHTML = `Agora escolha a habilidade.`
        
        //getting attributes from flask and animating them on char selection.
            //DARTH
        let darthAtkBar = document.querySelector('.darth .attributes > p:nth-child(1) > span')
        let darthDefBar = document.querySelector('.darth .attributes > p:nth-child(2) > span')
        let darthLifeBar = document.querySelector('.darth .attributes > p:nth-child(3) > span')
        let darthAtk = darthChar.getAttribute('data-ataque')
        let darthDef = darthChar.getAttribute('data-def')
        let darthLife = darthChar.getAttribute('data-vida')
        darthAtkBar.style.width = darthAtk+'px'
        darthDefBar.style.width = darthDef+'px'
        darthLifeBar.style.width = darthLife+'px'
            // GRIEVOUS
        let grievousAtkBar = document.querySelector('.grievous .attributes > p:nth-child(1) > span')
        let grievousDefBar = document.querySelector('.grievous .attributes > p:nth-child(2) > span')
        let grievousLifeBar = document.querySelector('.grievous .attributes > p:nth-child(3) > span')
        let grievousAtk = grievousChar.getAttribute('data-ataque')
        let grievousDef = grievousChar.getAttribute('data-def')
        let grievousLife = grievousChar.getAttribute('data-vida')
        grievousAtkBar.style.width = grievousAtk+'px'
        grievousDefBar.style.width = grievousDef+'px'
        grievousLifeBar.style.width = grievousLife+'px'
             // ASHOKA
        let ashokaAtkBar = document.querySelector('.ashoka .attributes > p:nth-child(1) > span')
        let ashokaDefBar = document.querySelector('.ashoka .attributes > p:nth-child(2) > span')
        let ashokaLifeBar = document.querySelector('.ashoka .attributes > p:nth-child(3) > span')
        let ashokaAtk = ashokaChar.getAttribute('data-ataque')
        let ashokaDef = ashokaChar.getAttribute('data-def')
        let ashokaLife = ashokaChar.getAttribute('data-vida')
        ashokaAtkBar.style.width = ashokaAtk+'px'
        ashokaDefBar.style.width = ashokaDef+'px'
        ashokaLifeBar.style.width = ashokaLife+'px'
            // BOBA
        let bobaAtkBar = document.querySelector('.boba .attributes > p:nth-child(1) > span')
        let bobaDefBar = document.querySelector('.boba .attributes > p:nth-child(2) > span')
        let bobaLifeBar = document.querySelector('.boba .attributes > p:nth-child(3) > span')
        let bobaAtk = bobaChar.getAttribute('data-ataque')
        let bobaDef = bobaChar.getAttribute('data-def')
        let bobaLife = bobaChar.getAttribute('data-vida')
        bobaAtkBar.style.width = bobaAtk+'px'
        bobaDefBar.style.width = bobaDef+'px'
        bobaLifeBar.style.width = bobaLife+'px'
                    
        
        
        // WEAPONS ATTRIBUTES
        const lightSaberAtk = document.querySelector('.item:nth-child(1)').getAttribute('data-power')
        const forceAtk = document.querySelector('.item:nth-child(2)').getAttribute('data-power')
        const pistolAtk = document.querySelector('.item:nth-child(3)').getAttribute('data-power')
        
        
        //console.log(lightSaberAtk)
        
        //FIGHT!
        const items = document.querySelectorAll('.inventory .item')
        for (item of items){
            item.addEventListener('click', function(){
                //active enemy life
                const enemy = document.querySelector("[data='active']");
                const enemyAtk = enemy.getAttribute('data-ataque')
                const enemyDef = enemy.getAttribute('data-def')
                let enemyLife = enemy.getAttribute('data-vida')
                let enenemyLifeBar = enemy.querySelector('.attributes > p:nth-child(3) > span')
                let selectedPower = this.getAttribute('data-name')
                let selectedPowerDamage =this.getAttribute('data-power')
                
                //DAMAGE CALCULATOR = FOR EACH WEAPON
                    // LIGHTSABER is affected by your enemy's Def
                if (selectedPower == 'lightsaber'){
                    let causedDamage = (darthAtk * selectedPowerDamage * 0.1) - enemyDef*0.2 + (Math.floor(Math.random() * 6))
                    console.log(causedDamage)
                    consoleText.innerHTML = `Você causou: ${causedDamage} de dano.`
                    enemyLife -= causedDamage
                    if (enemyLife <= 0) {
                        consoleText.innerHTML = `Você venceu!`
                        enenemyLifeBar.style.width = '0px'
                    } else {
                        enemy.setAttribute('data-vida', `${enemyLife}`)
                        enenemyLifeBar.style.width = enemyLife+'px'
                    }
                    // FORCE ignores your enemy's Def. Good against high def.
                } else if (selectedPower == 'force'){
                    let causedDamage = (darthAtk * selectedPowerDamage * 0.1) + (Math.floor(Math.random() * 14))
                    console.log(causedDamage)
                    consoleText.innerHTML = `Você causou: ${causedDamage} de dano.`
                    enemyLife -= causedDamage
                    if (enemyLife <= 0) {
                        consoleText.innerHTML = `Você venceu!`
                        enenemyLifeBar.style.width = '0px'
                    } else {
                        enemy.setAttribute('data-vida', `${enemyLife}`)
                        enenemyLifeBar.style.width = enemyLife+'px'
                    }
                    //PISTOL has low base damage, but high chance to crit (or miss :P ).
                } else if (selectedPower == 'pistol'){
                    let causedDamage = ((darthAtk * selectedPowerDamage * 0.1) - enemyDef*0.1 + (Math.floor(Math.random() * 7))) * (Math.floor(Math.random() * 6))
                    console.log(causedDamage)
                    consoleText.innerHTML = `Você causou: ${causedDamage} de dano.`
                    enemyLife -= causedDamage
                    if (enemyLife <= 0) {
                        consoleText.innerHTML = `Você venceu!`
                        enenemyLifeBar.style.width = '0px'
                    } else {
                        enemy.setAttribute('data-vida', `${enemyLife}`)
                        enenemyLifeBar.style.width = enemyLife+'px'
                    }
                }
                //DAMAGE TAKEN
                let damageTaken = (enemyAtk * 0.1) + (Math.floor(Math.random() * 13))
                darthLife -= damageTaken
                darthChar.setAttribute('data-vida', `${darthLife}`)
                if (darthLife <= 0){
                    darthLifeBar.style.width = '0px'
                    consoleText.innerHTML = `Você Perdeu!`
                } else {
                    darthLifeBar.style.width = darthLife+'px'
                }
            });
        };
    });
};



