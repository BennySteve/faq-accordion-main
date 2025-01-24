const btn=document.querySelectorAll('button')
btn.forEach(function(b){
    b.addEventListener('click',function(){
        let plus=this.children[1]
        let minus=this.children[2]
        plus.classList.toggle('hide')
        minus.classList.toggle('hide')
        let text=this.nextElementSibling
        text.classList.toggle('hide')
    })
})