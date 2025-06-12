# infodec-app
Proyecto frontend desarrollado de acuerdo a los requerimientos de la prueba técnica de la empresa infodec.

## Pre-requisitos

- Tener Node instalado y actualizado.
- Tener instalado Angular 16 preferiblemente.

## Instalación y despliegue

- Clona el repositorio en tu computador.
- Accede a la carpeta que se genero y abre una terminal para escribir los siguiente comandos
- "npm install" el cual descargará las dependencias automáticamente.
- Al finalizar el anterior ejecuta "ng serve" para iniciar la aplicación.
- En la terminal aparacera el enlace en el cual esta la aplicación en ejecución, accede a ese enlace.
- Una vez accedas a la interfaz ya puedes usar el sistema.

## Manual de usuario

- El manejo del sistema esta indicado en el documento de prueba técnica.

## Funcionalidades

- Consulta de clima de una ciudad.
- Conversion de moneda colombiana a la moneda del pais seleccionado.
- Soporte a los idiomas español y alemán (solo en la vista de historial de consultas).

## Ejecución con Docker

Este proyecto incluye archivos Docker para facilitar la construcción y ejecución del frontend en un contenedor.

- **Versión de Node utilizada:** 22.13.1 (imagen `node:22.13.1-slim`)
- **Puerto expuesto:** 4200 (Angular dev server)
- **No se requieren variables de entorno obligatorias** para la ejecución básica.

### Instrucciones rápidas

1. Asegúrate de tener Docker y Docker Compose instalados en tu sistema.
2. Desde la raíz del proyecto, ejecuta:

   ```bash
   docker compose up --build
   ```

3. Accede a la aplicación en tu navegador en [http://localhost:4200](http://localhost:4200)

### Notas específicas

- El contenedor ejecuta el servidor de desarrollo de Angular (`ng serve`). Esto es útil para desarrollo, pero para producción se recomienda servir los archivos estáticos desde un servidor como nginx.
- Si necesitas personalizar variables de entorno, puedes descomentar la línea `env_file: ./.env` en el archivo `docker-compose.yml` y agregar tus variables en un archivo `.env`.
- No se detectaron dependencias externas ni servicios adicionales en la configuración actual.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
