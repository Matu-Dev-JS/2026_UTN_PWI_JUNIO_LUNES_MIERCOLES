## Para que sirve GIT?

Para versionar nuestro proyecto

## Que es GitHub?

Es uno de los servicios que permiten alojar (hostear) nuestro repositorio en la nube

## Como creo un repositorio con git?

Con el comando git init, inicializamos nuestro repositorio local

## Como podemos versionar nuestro codigo, es decir tengo unos cambios y quiero "guardar partida"?

git add . (Añade al area de preparacion los cambios realizados en el codigo, el . hace referencia a traer todos los archivos en el directorio/carpeta raiz)
git commit -m "comentario descriptivo del cambio" (Poder crear una "version/foto/checkpoint" de como esta el proyecto actualmente, toma en cuenta lo añadido por git add .)

## Como podemos subir nuestro commit al repositorio en la nube (asumiendo que ya esta conectado)?

Depende: 
    Si es la primera vez que pusheas git push -u origin main (para crear la main remota)
    Si ya existe la main git push