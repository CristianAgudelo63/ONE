# Comandos de Git

- `git config`: Crea una configuración en Git.
  - `--global`: Configura de manera global.
  - `--local`: Configura de manera local en el proyecto

```sh
# Ejemplo
git config --global user.name "nombre"
git config --local user.email "nombre.dominio.com"
```

- `git init`: Crea un repositorio de git
  - `--bare`: Le indica a Git que es una carpeta **dentro del mismo proyecto** que es dónde se van a alojar los commits.

- `git status`: Muestra el estado que se encuentra el repositorio.

- `git add`: Adiciona un archivo.
  - `.`: Añade todos los archivos.
  - `<file>`: Añade solo el archivo que se escribió.

- `git rm --cached <archivo>`: Git deja de hacer el control de versiones al archivo.

- `git commit`: Añade un versión del archivo
  - `-m "<Mensaje>"`: Añade un mensaje al commit. Para buenas prácticas, se recomiendo utilizar un nombre descriptivo.

- `git stash`: Guarda las modificaciones realizadas que no se han realizado commit en una rama temporal, para luego retomar la tarea.
  - `apply <Número del arreglo dónde se encuentra>`: Recupera el estado donde se guardó los cambios.
  - `pop`: Recupera el estado donde se guardó los cambios, realiza un merge y elimina la rama temporal.

- `git log`: Muestra la lista de commits.
  - `--oneline`: Muestra los commits en una sola línea
  - `-p`: Muestra la información modificada de cada commit
  - `-n <número>`: Muestra los cantidad de commits que se desean ver
[Ver más parámetros de git log](https://devhints.io/git-log)

- `git branch`: Muestra las ramas del proyecto.
  - `<nombre>`: Crea una rama.

- `git checkout <nombre>`: Cambia de rama.
  - `-b <nombre>`: Cambia y crea una rama.

- `git merge <nombre>`: Combina las ramas.

- `git rebase <nombre>`: Combina las ramas pero trayendo todos los commits que tenían las otras ramas.

- `git remote`: Lista los servidores remotos que el repositorio conoce.
  - `add <NombreDelServidor> <url>`: Añade un servidor.
  - `-v`: Muestra la lista de servidores que tenemos en nuestro repositorio.
    - `(fetch)`: Es el origen de dónde se obtiene la información del servidor remoto.
    - `(push)`: Es el lugar dónde se enviará la información.
  - `rename`: Renombra el nombre del repositorio remoto.

- `git clone <url>`: Clona un repositorio.
  - `<nombre>` Después de escribir la url, puedes renombrar la carpeta que va a contener el proyecto.

- `git push <NombreDelServidor> <rama>`: Envía los commits al servidor.
  - `-u`: Por defecto, siempre irá a origin.

```sh
#Ejemplo
git push -u origin master
```

- `git pull <NombreDelServidor> <rama>`: Trae los últimos cambios realizados desde el servidor remoto.

- `git restore <archivo>`: Restaura la versión anterior de un archivo.

- `git diff`: Muestra los cambios realizados que no se han guardado.
  - `<HashDelCommit>..<HashDelCommit>`: Compara versiones entre commits.

- `git tag`: Muestra los tags que hay en el proyecto.
  - `-a <nombre ó version>`: Añade nombre al tag.
  - `-m`: Añade una descripción al tag.
