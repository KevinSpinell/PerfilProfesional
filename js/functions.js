// Tipos de variables

// Constantes para variables que no cambian

const pi = 3.1416;
const pul = 2.54;

// Para variables globales 
var cant_days = 10;
var name      = "Kevin Nalli";
//Let para variables de bloque o locales
let count = 5;
let i     = 0;

//Formas de Impresion o Salida en pantalla
alert(name);
console.log(cant_days);
console.log("10");
//Pantalla
document.write(name);
document.getElementById("text").innerHTML = "<h1>KevinSpinell</h1>"
document.getElementById("text-two").innerText = "<h1>KevinSpinell</h1>"

// Librerias
Swal.fire({
    icon: 'success',
    title: 'Kevin Nalli Carrascal',
    text: 'Software Developer',
    footer: '<a href="">Desea conocerme?</a>',
    showConfirmButton: false,
    timer : 5000,
    background : '#e5e5f6'
  })

// TIPOS DE DATOS

// Numericos
let number_one = 10;
let number_two = 5.5;
 // String
 let text = "Soy un texto";
// Booleans
let boolean = true;
// Array
let array_num = [1,2,3,4,5];
let array_str = ['Lunes','Martes','Miercoles','Jueves','Viernes'];
let array_mix = [1.4,'a',true];
let array_multidimensional = [
   {name:"Kevin" ,last_name: "Carrascal" , age:"16" },
   {name:"Luisa" ,last_name:"Morantes" , age:"17" },
   {name:"Nalli" ,last_name:"Mawi" , age:"15" },
   {name:"Fernanda" ,last_name:"xd" , age:"20" }
  ]


// OPERADORES 
//Suma 
var suma = number_one + number_two;
//Resta
var resta = number_one - number_two;
//Multiplicacion
var mul = number_one * number_two;
//Division
var div = number_one / number_two;
div = div.toFixed(2)
//Modulo
var mod = number_one % number_two



// OPERADORES LOGICOS Y ESTRUCTURAS CONDICIONALES  

//AND && con if
var bool = false;
var numeric = 5;
if(!bool){
  console.log("ingresa al if "+bool);
}
else{
  console.log("ingresa al else "+bool)
}

// OR || con if
var age = 16;
if(age >=18 || numeric==5){
    console.log("Ingresa if")
    age++
}
else{
  console.log("age")
  age--
}
console.log(age)


// FOR
for(let i = 0; i<array_str.length; i++){
  console.log(array_str[i]+ (i+1));
}

// While
 var j = 0;
 while(j<array_str.length){
   console.log(array_str[j])
   j++
 }

// DO WHILE
var f = 0;
do{
  console.log(array_str[f])
  f++
}while(f<array_str.length)

// EVENTOS
 // CREAR FUNCIONES
 function load_page(){
   alert("Bievenido a mi sitio web")
 }
 function change_color(){
   document.body.style.backgroundColor = "red"
   document.body.style.color = "#fff"
 }
  const btn_clear = document.querySelector("#limpiar")
  btn_clear.addEventListener("click", ()=> {
    document.body.style.backgroundColor = "white"
    document.body.style.color = "#000"
  });


  // FORMULARIO DE REGISTRO
  const form_register = document.getElementById("form_register")
  const nombres = document.getElementById("nombres")
  const apellidos = document.getElementById("apellidos")
  const validation = document.getElementById("validation")

  form_register.addEventListener("submit", event_name => {
      event_name.preventDefault(); 
      let info = "";
      if(nombres.value.length <= 2 || apellidos.value.length <= 2){
          info += "Nombres y/o apellidos deben ser mayores a 2 letras"
          validation.style.color="red"
      }
      else{
          alert(nombres +""+apellidos)
          nombres.style.backgroundColor ="green"
          apellidos.style.backgroundColor ="green"
      }
      validation.innerText= info;
  })
  function load_page(){
    document.getElementById("nombres").focus();
    document.getElementById("apellidos").disabled = true;
    let date = new Date();
    console.log(date.getFullYear())

    for(let a = 0; a<array_str.length; a++){
      console.log(array_mul[a].name)
    }
  }
  function validate(){
    alert("Funciona")
    let nombre = document.getElementById("nombres").value
    console.log(nombre.length)
    if(nombres.length<2){
      document.getElementById("apellidos").value
      document.getElementById("apellidos").value
      alert(nombres.toLowerCase())
      alert(nombres.concat("Carrascal"))
    }
  }
  // Pegar la funcion de whats
  let table = document.querySelector('.puntos tbody')
  let row = table.insertRow(0)
  let cell1 = row.insertCell(0)
  let cell2 = row.insertCell(1)
  let cell3 = row.insertCell(2)
  let cell4 = row.insertCell(3)
  cell1.innerHTML= nombre
  cell2.innerText= apellido
  cell3.innerHTML= number
  cell4.innerHTML= correo
