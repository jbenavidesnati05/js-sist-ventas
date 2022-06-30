// -----------------------------CLASE PRODUCTO-------------------------
class Producto{
    static contadorProductos=0;

constructor(nombre, precio){
    // para incrementar este contador con la variable estatica
    this._idProducto = ++Producto.contadorProductos;
    // creamos atributos
    this._nombre = nombre;
    this._precio = precio;
    // Metodo get solo para leer idProducto 
    }
    // Metodo get para idProducto 
    get idProducto(){
        return this._idProducto;
    }   
    // Metodos get y set para nombre 
    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
    // Metodos get y set para precio 
    get precio(){
        return this._precio;
    }
    set precio(precio){
        return this._precio = precio;
    }
    
    toString(){
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: $${this._precio}  `;
    }
}



// -----------------------------CLASE ORDEN-------------------------

class Orden{

       // contador de ordenes 
    static contadorOrdenes = 0 ;
       // para el marximo de productos sea una cantidad 
    static get MAX_PRODUCTOS(){
        return 5;
    }
    constructor(){
        // por cada orden que se cree se aumenta ese valor 
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        //para saber cuantos productos se han agregado 
        // this._productosAgregados = 0;
    }
        get idOrden(){
            return this._idOrden;
        }

        //-----1-------
        //  Crear el metodo agregar producto para poderlo agregar al sistema 
    agregarProducto(producto){
        // preguntar si no hemos superado el max de productos 
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            // para agregar un nuevo Elemento al arreglo vacio de productos con el metodo push 
            this._productos.push(producto);
        }else{
            console.log("no se pueden agragar mas productos")
        }
        }

        //-----2-------
        // Crear metodo calcular total 
    calcularTotal(){
        let totalVenta=0;

        for(let producto of this._productos ){
            // console.log(producto);
            totalVenta += producto.precio; //totalVenta = totalVenta + producto.precio; 
        }
        return totalVenta;
        }

        //-----3-------
        // Crear metodo mostrar orden  
    mostrarOrden(){
        let productosOrden = ' ';
        for(let producto of this._productos){
            productosOrden += `\n ${producto.toString() + " "}`;
        } 
        console.log(`Orden: ${this._idOrden} Total: $${this.calcularTotal()}, Productos: ${productosOrden} `);

    } 
}
// -----------------------------PRUEBAS-------------------------

    // let Producto1 = new Producto("pantalon", 200);
    // console.log(Producto1.toString());
    // let Producto2 = new Producto("camisa", 100);
    // console.log(Producto2.toString());
    // let orden1 = new Orden();
    // orden1.agregarProducto(Producto1);
    // orden1.agregarProducto(Producto2);
    // orden1.mostrarOrden();

    // -----------------------------Productos-------------------------

    let producto1 = new Producto('Pantalón', 200);
    let producto2 = new Producto('Camisa', 100);
    let producto3 = new Producto('zapatos', 120);
    let producto4 = new Producto('gorra', 60);
    let producto5 = new Producto('boxer', 10);


    // -----------------------------ordenes-------------------------

    let orden1 = new Orden();
    orden1.agregarProducto(producto1);
    orden1.agregarProducto(producto2);
    orden1.mostrarOrden();

    let orden2 = new Orden();
    orden2.agregarProducto(producto1);
    orden2.agregarProducto(producto2);
    orden2.agregarProducto(producto3);
    orden2.agregarProducto(producto4);
    orden2.agregarProducto(producto5);
    orden2.mostrarOrden();

    let orden3 = new Orden();
    orden3.agregarProducto(producto5)
    orden3.agregarProducto(producto3)
    orden3.agregarProducto(producto4)
    orden3.mostrarOrden();





