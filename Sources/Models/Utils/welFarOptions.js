'use strict';
/**
 * @returns retorna opciones de welcome y farewell (comandos de maple bot)
 */
module.exports = () => {
return `\`\`\`\n- (mencion canal / id)
- (escribe un mensaje)
- ( embed, encriptado / image, imagen )
- desc, description, descripcion
  * color
    - (hex color)
  * (agregar un texto)
  * delete
- title, titulo
  * color
    - (hex color)
  * (agrega un texto)
  * delete
- background, fondo
  * (link de imagen, hex color)
- avatar 
  * (hex color)
-delete
- run

**Opciones para mensaje**
- {guild}  agrega el nombre de tu servidor
- {user} agrega el nombre del usuario
- {userTag} agrega el nombre y tag del usuario
- {tag} agrega el tag del usuario
- {number} agrega el numero de usuarios que hay en el servidor
- {mention} menciona a un usuario

si tienes dudas no olvides en contactar a mi desarrolladora por mi servidor oficial!\n\`\`\``
}