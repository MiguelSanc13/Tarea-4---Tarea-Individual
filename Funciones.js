
function T1() {
    document.write("<body style='background-color: #f5d108fd; text-align: center; padding:6em'> </body>");
    // var T1_div = document.getElementById('T1_div');
    var array1 = ['Enero', 'Febrero', 'Marzo','Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

        for (let i = 0; i < array1.length; i++) {
         document.write(array1[i]+'<br/>');
        }
    document.write("<input type='button' value='Volver' onClick='location.reload()'/>");
}
function Producto_alimenticio(codigo, nombre, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
};

    var Producto_alimenticios = new Array(3);
    Producto_alimenticio[0] = new Producto_alimenticio("1", "jabon", 1);
    Producto_alimenticio[1] = new Producto_alimenticio("2", "jugo", 3.4);
    Producto_alimenticio[2] = new Producto_alimenticio("3", "papas", 0.5);

function imprimir() {
    document.write("<body style='background-color: #f5d108fd; text-align: center; padding:6em'> </body>");
    for(i=0; i<Producto_alimenticio.length; i++){

             document.write(`CODIGO: ${Producto_alimenticio[i].codigo} |
         NOMBRE: ${Producto_alimenticio[i].nombre} |
         PRECIO ${Producto_alimenticio[i].precio} <br>`);
        }
        document.write("<input type='button' value='Volver' onClick='location.reload()'/>");
} 
    
    