let nombre: string = "Antonio";
let a:number = 5;
let b:number = 10;

function saludo(nombre){
    return "Hola " + nombre;
}

document.getElementById("encabezado1").innerHTML = saludo(nombre);

function imprPantalla(a,b):number{
    return a+b;
}

document.getElementById("encabezado2").innerHTML = "Total: " + imprPantalla(a,b);

let c:number = 25;

if(true){
    let c:number = 50;
    document.getElementById("encabezado3").innerHTML = "Numero dentro: " + c
}
document.getElementById("encabezado4").innerHTML = "Numero fuera: " + c

var d:number = 30;

if(true){
    var d:number = 100;
    document.getElementById("encabezado5").innerHTML = "Numero dentro: " + d
}
document.getElementById("encabezado6").innerHTML = "Numero fuera: " + d

class Curso{
    public titulo:string;
    public horas:number;
    public desctipcion:string;
    public inscritos:number;

    public constructor(titulo:string,horas:number,descripcion:string,inscritos:number){
        this.titulo = titulo;
        this.horas = horas;
        this.desctipcion = descripcion;
        this.inscritos = inscritos;
    }
    public getTitulo():string{
        return this.titulo;
    }
    public setTitulo(titulo){
        this.titulo = titulo;
    }
    public getHoras():number{
        return this.horas;
    }
    public setHoras(horas){
        this.horas = horas;
    }
    public getDescripcion():string{
        return this.desctipcion;
    }
    public setDescripcion(descripcion){
        this.desctipcion = descripcion;
    }
    public getInscritos():number{
        return this.inscritos;
    }
    public setInscritos(numero){
        this.inscritos = numero;
    }
    public addInscrito(){
        this.inscritos++;
    }
    public resInscrito(){
        this.inscritos--;
    }
}

var cursoAngular = new Curso("Angular",40,"Curso de inicialización a Angular",0);

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
