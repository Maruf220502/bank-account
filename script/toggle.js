document.getElementById('cash-out').style.display = "none";

document.getElementById('add-money-box')
.addEventListener('click', function(){
    document.getElementById('add-taka').style.display = "block";
    document.getElementById('cash-out').style.display = "none";
})

document.getElementById('cash-out-box')
.addEventListener('click', function(){
    document.getElementById('add-taka').style.display = "none";
    document.getElementById('cash-out').style.display = "block";
})