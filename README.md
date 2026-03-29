# Bot de Seguridad de Discord

Este es un bot de Discord con comandos slash para moderación y seguridad.

## Configuración

1. Crea una aplicación en el [Portal de Desarrolladores de Discord](https://discord.com/developers/applications).
2. Obtén el Token del bot y el Client ID.
3. El archivo `.env` ya está configurado con tus credenciales.

## Instalación

```bash
npm install
```

## Ejecutar

```bash
npm start
```

## Comandos

### Moderación
- `/ban <usuario> [razon]`: Banea a un usuario.
- `/kick <usuario> [razon]`: Expulsa a un usuario.
- `/clear <cantidad>`: Borra mensajes.
- `/warn <usuario> [razon]`: Advierte a un usuario.
- `/mute <usuario> <duracion> [razon]`: Silencia a un usuario.
- `/lock`: Bloquea el canal.
- `/unlock`: Desbloquea el canal.

### Seguridad
- `/antilink <activar>`: Activa anti-enlaces.
- `/antispam <activar>`: Activa anti-spam.
- `/antiraid <activar>`: Activa anti-raid.
- `/antibot <activar>`: Activa anti-bot.
- `/antiflood <activar>`: Activa anti-flood.
- `/verification <activar>`: Configura verificación.
- `/captcha <activar>`: Configura captcha.
- `/blacklist <usuario>`: Agrega a lista negra.
- `/whitelist <usuario>`: Agrega a lista blanca.

### Utilidad
- `/giveaway <premio> <duracion>`: Inicia un sorteo.
- `/remind <mensaje> <minutos>`: Establece recordatorio.
- `/embed <titulo> <descripcion>`: Crea un embed.
- `/poll <pregunta>`: Crea una encuesta.
- `/ticket`: Abre un ticket.
- `/close`: Cierra un ticket.
- `/add`: Agrega algo.
- `/remove`: Remueve algo.
- `/transcript`: Genera transcript.

### Diversión
- `/meme`: Envía un meme.
- `/joke`: Cuenta un chiste.
- `/8ball <pregunta>`: Bola mágica.
- `/coinflip`: Lanza moneda.
- `/roll [caras]`: Lanza dado.

### Información
- `/ping`: Muestra latencia.
- `/help`: Lista de comandos.
- `/stats`: Estadísticas del bot.
- `/botinfo`: Info del bot.
- `/serverstats`: Estadísticas del servidor.
- `/avatar [usuario]`: Muestra avatar.
- `/banner [usuario]`: Muestra banner.
- `/invite`: Genera invitación.
- `/mod`: Muestra formulario de moderador.

Los comandos slash aparecerán automáticamente cuando escribas "/" en Discord, mostrando el icono del bot y la lista de comandos disponibles.