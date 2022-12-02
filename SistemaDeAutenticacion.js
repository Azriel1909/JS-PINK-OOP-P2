
export class SistemaDeAutenticacion {
  static login(usuario, clave) {
    // Validación 
    if ('autenticable' in usuario && usuario.autenticable instanceof Function) {
      return usuario.autenticable(clave)
    } else {
      return false
    }
    // return usuario.clave == clave
    // Si no existe, no ejecuta.
  }
}