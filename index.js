document.addEventListener('DOMContentLoaded', () => {
    let counter = 0;
    
    document.querySelector('#increase').onclick = () => {
        counter++;
        document.querySelector('#counter').innerHTML = counter;
    }
    
    document.querySelector('#decrease').onclick = () => {
        counter--;
        document.querySelector('#counter').innerHTML = counter;
    }
})


