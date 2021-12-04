document.querySelector('.menu').addEventListener('click',()=>{
    document.querySelectorAll('.target').forEach((item)=>{
        item.classList.toggle("change")
    })
})

const icons = document.querySelectorAll('.section-1-icons i')
let i=1   //USING let because the value of this will change

//Setting an interval so we get the slideshow of the icons every 4 seconds
setInterval(()=>{
    i++

    const icon = document.querySelector('.change')  //Select the element which has a class called change

    icon.classList.remove('change')   //Remove class change from that element

    if (i>icons.length){
        icons[0].classList.add('change')
        i=1
    } else{
        icon.nextElementSibling.classList.add('change')
    }
},4000)