/*alert ('Mulai');
for (let i= 0; i<5; i++){
    alert('Hello World!');
}

function tambah (a,b) {
    return a+b;
}
let a = parseInt(prompt('Masukkan nilai 1:'));
let b = parseInt(prompt('Masukkan nilai 2:'));
let hasil= tambah (a,b);

console.log(hasil);
alert(hasil);*/







/*var i ;
var i = document.getElementById("inputText").value;
function Angka () { 
    var hasil = document.getElementById('demo');
    for (let i=1; i<=100; i++){
        if( i%3==0 && i%5==0){ 
            hasil.innerHTML='FizzBuzz';
            console.log('FizzBuzz');   
        } else if(i==undefined || i==0){
            hasil.innerHTML='Salah cuksss';
            console.log('Salah cuksss');
        } else if(i%3==0){
            hasil.innerHTML='Fizz';
            console.log('Fizz');
        } else if(i%5==0){
            hasil.innerHTML='Buzz';
            console.log('Buzz');
        } else {
            hasil.innerHTML=i;
            console.log(i);
        }
    }
}
*/
function Angka(){
    var hasil = document.getElementById('demo');
    var Angka = document.getElementById('inputText').value;
    for (i=1; i <101; i ++ ){
        if(Angka==undefined || Angka==0){
            hasil.innerHTML= 'invalid gengss!';
            console.log('invalid gengss!'); 
        } else if(Angka%3==0 && Angka%5==0){
            hasil.innerHTML='FizzBuzz';
            console.log('FizzBuzz');
        } else if(Angka%3==0){
            hasil.innerHTML='Fizz';
            console.log('Fizz');
        } else if(Angka%5==0){
            hasil.innerHTML='Buzz';
            console.log('Buzz');
        } else{
            hasil.innerHTML=Angka;
            console.log(Angka);
        }
    }
}


 
