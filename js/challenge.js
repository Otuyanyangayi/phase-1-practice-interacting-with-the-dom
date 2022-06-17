let i = -1
let j = 0
const interval = setInterval(increament, 1000)
function increament() {
    i++
    document.querySelector('h1#counter').textContent = i
    j = 0
}
increament()



document.getElementById("minus").addEventListener('click', function(){
    i--
    document.querySelector('h1#counter').textContent = i
})

document.getElementById("plus").addEventListener('click', function(){
    i++
    document.querySelector('h1#counter').textContent = i

})

document.getElementById('heart').addEventListener('click', function(){
    j++
    const li = document.createElement('li')
    const node = document.createTextNode( i + " has been liked " + j + "time(s).")
    const likes = document.querySelector('.likes')
    const laskLike = document.querySelector('.likes').lastChild
    li.appendChild(node)
    if (j > 1){
        laskLike.replaceWith(li)
    } else {
        likes.appendChild(li)
    }
})

document.getElementById('pause').addEventListener('click', function(){
    if (document.querySelector('#pause').innerText === 'pause'){
        clearInterval(interval)
        document.querySelector('#pause').innerText ='resume'
        document.getElementById('minus').disabled = true
        document.getElementById('plus').disabled = true
        document.getElementById('heart').disabled =true
        document.getElementById('submit').disabled = true

    }else{
        interval = setInterval(increament, 1000)
        document.querySelector('#pause').innerText ='pause'
        document.getElementById('minus').disabled = false
        document.getElementById('plus').disabled = false 
        document.getElementById('heart').disabled = false
        document.getElementById('submit').disabled = false 


    }
})

document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();
    const comment = document.querySelector('input#comment-input').value
    const commentsList = document.querySelector('.comments')
    let  p = document.createElement("p");
    let  node = document.createTextNode(comment)
    p.appendChild(node);
    commentsList.appendChild(p);
    document.querySelector('input#comment-input').value = ''
  });



