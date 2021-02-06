var nombre = "Antonio";
var a = 5;
var b = 10;
function saludo(nombre) {
    return "Hola " + nombre;
}
document.getElementById("encabezado1").innerHTML = saludo(nombre);
function imprPantalla(a, b) {
    return a + b;
}
document.getElementById("encabezado2").innerHTML = "Total: " + imprPantalla(a, b);
var c = 25;
if (true) {
    var c_1 = 50;
    document.getElementById("encabezado3").innerHTML = "Numero dentro: " + c_1;
}
document.getElementById("encabezado4").innerHTML = "Numero fuera: " + c;
var d = 30;
if (true) {
    var d = 100;
    document.getElementById("encabezado5").innerHTML = "Numero dentro: " + d;
}
document.getElementById("encabezado6").innerHTML = "Numero fuera: " + d;
var Curso = /** @class */ (function () {
    function Curso(titulo, horas, descripcion, inscritos) {
        this.titulo = titulo;
        this.horas = horas;
        this.desctipcion = descripcion;
        this.inscritos = inscritos;
    }
    Curso.prototype.getTitulo = function () {
        return this.titulo;
    };
    Curso.prototype.setTitulo = function (titulo) {
        this.titulo = titulo;
    };
    Curso.prototype.getHoras = function () {
        return this.horas;
    };
    Curso.prototype.setHoras = function (horas) {
        this.horas = horas;
    };
    Curso.prototype.getDescripcion = function () {
        return this.desctipcion;
    };
    Curso.prototype.setDescripcion = function (descripcion) {
        this.desctipcion = descripcion;
    };
    Curso.prototype.getInscritos = function () {
        return this.inscritos;
    };
    Curso.prototype.setInscritos = function (numero) {
        this.inscritos = numero;
    };
    Curso.prototype.addInscrito = function () {
        this.inscritos++;
    };
    Curso.prototype.resInscrito = function () {
        this.inscritos--;
    };
    return Curso;
}());
var cursoAngular = new Curso("Angular", 40, "Curso de inicialización a Angular", 0);
cursoAngular.setInscritos(10);
cursoAngular.addInscrito();
//APARTADO 1.5
document.getElementById("parrafo1").innerHTML = "Total inscritos: " + cursoAngular.getInscritos();
//APARTADO 1.6
cursoAngular.addInscrito();
cursoAngular.addInscrito();
cursoAngular.addInscrito();
document.getElementById("parrafo1").innerHTML = "Titulo: " + cursoAngular.getTitulo();
document.getElementById("parrafo2").innerHTML = "Nº Horas: " + cursoAngular.getHoras();
document.getElementById("parrafo3").innerHTML = "Descripción: " + cursoAngular.getDescripcion();
document.getElementById("parrafo4").innerHTML = "Inscritos: " + cursoAngular.getInscritos();
