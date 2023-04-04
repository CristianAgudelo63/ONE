# Manipulación DOM

## ¿Qué es DOM?

Document Object Model, es una estructura en forma de árbol donde se organizan los elementos: elementos padres y elementos hijos.

**_Ejemplo:_**

- Window
  - **Document**
    - HTML
      - head
        - meta
        - link
        - title
        - ...
      - body
        - header
          - nav
          - ...
        - main
          - section
          - ...
        - footer
          - div
          - ...

## Métodos del DOM

|            Método          |                               Parámetro                                  |
| :------------------------: | :----------------------------------------------------------------------- |
| querySelector('')          | Selecciona una clase o elementos                                         |
| getElementById('')         | Identificador del elemento                                               |
| getElementsByTagName('')   | Retorna un arreglo de los elementos por el nombre del tag                |
| querySelectorAll('')       | Regresa todos los elementos con el mismo nombre                          |
| getElementsByClassName('') | Retorna un arreglo de los elementos por el nombre de la clase            |

## Nodos

| Nodo | Descripción |
| :---:| :--- |
| appendChild | Siempre es implementado al final del nodo, para colocar un nodo hijo dentro del nodo padre. |
| insertBefore(padre, hijo) | Coloca un nodo antes del otro |
| replaceChild(elemento1, elemento2) | Sustituye el nodo del elemento 1 por el nodo del elemento 2 |
| removeChild(elemento) | Remueve un nodo del árbol |

[Ver más](https://www.aluracursos.com/blog/que-es-dom)
