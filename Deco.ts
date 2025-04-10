// Deco.ts

interface Bebida {
  getDescripcion(): string;
  getPrecio(): number;
}

class Espresso implements Bebida {
  getDescripcion(): string {
    return "Espresso";
  }

  getPrecio(): number {
    return 2.00;
  }
}

abstract class DecoradorBebida implements Bebida {
  constructor(protected bebida: Bebida) {}

  abstract getDescripcion(): string;
  abstract getPrecio(): number;
}

class Leche extends DecoradorBebida {
  getDescripcion(): string {
    return `${this.bebida.getDescripcion()} + Leche`;
  }

  getPrecio(): number {
    return this.bebida.getPrecio() + 0.5;
  }
}

class Canela extends DecoradorBebida {
  getDescripcion(): string {
    return `${this.bebida.getDescripcion()} + Canela`;
  }

  getPrecio(): number {
    return this.bebida.getPrecio() + 1.0;
  }
}

class Chocolate extends DecoradorBebida {
  getDescripcion(): string {
    return `${this.bebida.getDescripcion()} + Chocolate`;
  }

  getPrecio(): number {
    return this.bebida.getPrecio() + 1.5;
  }
}

// Ejemplo de uso
let miCafe: Bebida = new Espresso();
miCafe = new Leche(miCafe);
miCafe = new Canela(miCafe);

console.log("Pedido:", miCafe.getDescripcion());
console.log("Precio: $" + miCafe.getPrecio().toFixed(2));