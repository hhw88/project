let btn = document.querySelector('button');
let an = document.querySelector('.btn');

//
console.log(btn);
btn.addEventListener('click', function() {
    console.log(11);
    alert('11');
});

an.addEventListener('click', function() {
    alert(11);
})