// document.addEventListener('DOMcontentloaded', function(){
        const list = document.querySelector('.charSelector')
        const listOfCharacters = document.querySelectorAll('.charPill');
        const charCards = document.querySelectorAll('.sectionThree > .character')
        console.log(charCards)
        for (const charOption of listOfCharacters){
            charOption.addEventListener('click', function(){
                const selectedId = this.getAttribute('id'); //id do inimigo a ser enfrentado
                console.log(selectedId);
                list.classList.add('hide');
                setTimeout(() => {
                    list.classList.add('displayNone');      
                }, 300);
                console.log(selectedId)
                for (const charCard of charCards){
                    if (charCard.classList.contains(selectedId)){
                        charCard.classList.remove('displayNone');
                    }
                };
            });
        }
        
        // console.log(listOfCharacters)
        // listOfCharacters.click(function(){
        //     const selectedCharId = $this.attr('id');
        // })
        
        // listOfCharacters.addEventListener('click', function(){
        // });
// });