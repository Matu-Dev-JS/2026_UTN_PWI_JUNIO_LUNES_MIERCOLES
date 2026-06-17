## SINTAXIS HTML

## ETIQUETAS
Existen 2 tipos de etiqueta:

## De cierre
<ejemplo> </ejemplo>

## Caracteristica especial: NESTING o ANIDAMIENTO
Pueden contener otras etiquetas
<padre><hija><nieta></nieta></hija><img/></padre>


## De autocierre
<ejemplo-autocierre> 
o 
<ejemplo-autocierre/>

Ejemplo real:
    <div></div> -> es de cierre
    <img> -> es de autocierre
    <input /> -> es de autocierre
    <label></label> -> de cierre

Que define si es de autocierre o de cierre? el lenguaje, cada elemento (img, input, label) tiene en su definicion si es de autocierre o de cierre.


## ELEMENTOS
Son los tipos de elementos que existen y estan definidos en el lenguaje HTML, cada elemento tiene un significado o funcionamiento.

Por ejemplo: 
button -> Hacer un boton, de cierre
img -> Hacer una imagen, de autocierre
video -> Hacer un video, de cierre
a -> Hacer un hipervinculo, de cierre
h1 -> Hacer un titulo con mucha jerarquia, de cierre
p -> Hacer un parrafo, de cierre
nav -> Es la seccion que representa la navegacion de la pagina, de cierre
audio -> Hacer audios dentro de la pagina, de cierre


## ATRIBUTOS
Cada elemento tiene o puede tener ATRIBUTOS, los atributos son configuraciones de ese elemento. El tipo de atributos de cada elemento es definido por el elemento.

Por ejemplo:
El elemento IMG tiene acceso a los atributos src y alt
src es el atributo que difine la direccion de la imagen, el source
alt es el atributo que define un texto alternativo en caso de que no carge la imagen
<img src="" alt="">


## Problema del anidamiento
El codigo se lee mal:
<padre><hijo><nieto></nieto></hijo><hijo></hijo></padre>

Para eso indentamos, es una buena practica:
<padre>
    <hijo>
        <nieto></nieto>
    </hijo>
    <hijo></hijo>
</padre>