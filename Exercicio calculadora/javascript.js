var valor
var n
var soma
var subtrair
var multiplicar
var dividir
var r
var exp

var v = window.document.getElementById('visor');
var v2 = window.document.getElementById('visor2')

function escrever(num) {
   valor = v.innerText += num;

   console.log(valor)
}

function somar() {
   soma = parseInt(valor)

   v2.innerText = soma
   v.innerText = ""
}

function sub() {
   subtrair = parseInt(valor)

   v2.innerText = subtrair
   v.innerText = ""
}

function mult() {
   multiplicar = parseInt(valor)

   v2.innerText = multiplicar
   v.innerText = ""
}

function divi() {
   dividir = parseInt(valor)

   v2.innerText = dividir
   v.innerText = ""
}

function ac() {
   v.innerText = ""
   v2.innerText = ""
}

function fatorial() {
   var n = 1
   var fat = parseInt(valor)
   for (var i = fat; i > 0; i--) {
      n = n * i
   }
   fat = n
   v.innerText = fat
}

function exponencial() {
   exp = parseInt(valor)

   v2.innerText = exp
   v.innerText = ""
}

function result() {
   v2.innerText = ""

   if (exp != null) {
      var res = exp
      var n = parseInt(valor)
      for (var i = n; i > 1; i--) {
         res = res * exp
         console.log(res)
      }
      v.innerText = res
   }

   if (soma != null) {
      r = soma + parseInt(valor);
      v.innerText = r
      soma = null

   }

   if (subtrair != null) {
      r = subtrair - parseInt(valor);
      v.innerText = r
      subtrair = null

   }

   if (multiplicar != null) {
      r = multiplicar * parseInt(valor);
      v.innerText = r
      multiplicar = null

   }

   if (dividir != null) {
      var n = parseInt(valor)
      if (n == 0) {
         v2.innerText = "não pode dividir por 0"
      } else {
         r = dividir / parseInt(valor);
         v.innerText = r
         dividir = null
      }
   }
}