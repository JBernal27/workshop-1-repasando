import Auth from "./auth.js";

class Persona {
    constructor(nombre, email, password) {
      this.nombre = nombre;
      this.email = email;
      this.password = password;
    }
  
    crearReserva(reserva) {
      console.log(`${this.nombre} ha creado una reserva: ${reserva}`);
    }
  }
  
  class UsuarioRegular extends Persona {
    constructor(nombre, email) {
      super(nombre, email);
    }
  
    registrarse() {
      Auth.register({nombre:this.nombre, email: this.email, password: this.password})
      console.log(`${this.nombre} se ha registrado como usuario regular`);
    }
  
    crearReserva(reserva) {
      console.log(`${this.nombre} ha creado una reserva: ${reserva}`);
    }
  }
  
  class Administrador extends Persona {
    constructor(nombre, email) {
      super(nombre, email);
    }

    static register(user) {
      const token = Auth.generateToken();
      localStorage.setItem('admins', JSON.stringify(user));
  }
  
    crearUsuarioAdmin(nombre, email) {
      console.log(`${nombre} ha sido creado como nuevo usuario admin con email: ${email}`);
    }
  
    crearReservaParaVarios(reservas) {
      reservas.forEach(reserva => {
        console.log(`Reserva creada para ${reserva.nombre}: ${reserva.reserva}`);
      });
    }
  
    eliminarReserva(reservaId) {
      console.log(`Reserva con ID ${reservaId} eliminada`);
    }
  
    actualizarReserva(reservaId, nuevaReserva) {
      console.log(`Reserva con ID ${reservaId} actualizada a: ${nuevaReserva}`);
    }
  }

export { Administrador, UsuarioRegular}