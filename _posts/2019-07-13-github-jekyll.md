---
layout: post
title:  "Crea tu blog gratis con Jekyll y Github Pages"
date:   2019-07-13 12:51:21 -0300
categories: github pages
---

Voy al grano.

### Primero lo primero: Instalar Jekyll

1. Instala los requisitos, en Debian 9:
	* Ruby 2.X.X. 
		* Instalar: ```sudo apt install ruby```
		* Version actual: ```ruby --version```
	* Bundler
		* Instalar: ```sudo gem install bundler```

2. Crea el proyecto inicial
```sh
bundle exec jekyll _3.3.0_ new <nombre_del_proyecto>
```

3. Navega hacia la carpeta creada
```sh
cd <nombre_del_proyecto>
```

4. En el archivo Gemfile, elimina el # al inicio de la linea:
```
gem "github-pages", group: :jekyll_plugins
```

5. Instala las dependencias:
```sh
bundle install
```

Puedes hacer pruebas localmente, iniciando el servidor con el comando ```bundle exec jekyll serve```. Iniciara por default en ```http://localhost:4000```

### Segundo lo segundo: Subirlo a GitHub

1. Crea un repositorio en GitHub. 

Nota: Para que funcione con GitHub Pages, el nombre del repo debe ser "\<nombre_de_perfil\>.github.io" [Mas información](https://pages.github.com/)

3. En tu carpeta de proyecto, inicia git:
```sh
git init
```

4. Añade el repositorio remoto:
```sh
git remote add origin https://github.com/<usuario>/<usuario>.github.io
```

5. Añade los cambios y crea un commit:
```sh
git add .
git commit -m "First commit"
```

6. Actualiza el repositorio remoto:
```sh
git push origin master
```

Listo. Ya con eso puedes acceder al blog básico de Jekyll en https://\<username\>.github.io

[Fuente - GitHub Pages](https://pages.github.com/)

### Posibles errores

#### Error: Failed to build gem

```txt
Gem::Ext::BuildError: ERROR: Failed to build gem native extension.
mkmf.rb can't find header files for ruby at /usr/lib/ruby/include/ruby.h
```
Solución: Instala los paquetes de desarrollo de ruby ```sudo apt install ruby-dev```

#### Error instalando nokogiri

```txt
zlib is missing; necessary for building libxml2
```

Solución: Instala el paquete de zlib ```sudo apt install zlib1g-dev```

#### Error: No GitHub API authentication

```txt
GitHub Metadata: No GitHub API authentication could be found.
```

Solución: Añade ```github: [metadata]``` en el archivo _config.yml - [fuente](https://github.com/github/pages-gem/issues/399#issuecomment-301827749)

### ¿Dudas?

Contáctame, revisa [mi sección](/contacto/) de contacto :)

	
