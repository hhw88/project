let btn = document.querySelector('button');
let an = document.querySelector('.btn');
let h2 = document.querySelector('h2');
//
console.log(btn);
btn.addEventListener('click', function() {
    console.log(11);
    alert('11');
});

an.addEventListener('click', function() {
    alert(11);
})
h2.addEventListener('mouseenter', function() {
    alert(22);
})