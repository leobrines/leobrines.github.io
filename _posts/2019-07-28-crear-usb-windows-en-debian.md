---
layout: post
title:  "¿Cómo crear un USB booteable con Windows 10, 8 o 7 en Debian?"
date:   2019-07-28 15:17:00 -0300
categories: windows
---

He seguido varios tutoriales y guías sobre como crear un USB booteable en Linux y solo [WoeUSB](https://github.com/slacka/WoeUSB) logró resolver mis necesidades en Debian. Para usuarios de ***Ubuntu***, es tan sencillo como:

```
sudo add-apt-repository ppa:nilarimogard/webupd8
sudo apt update
sudo apt install woeusb
```

## Pasos para instalar WoeUSB en Debian

1. Instalar las git y paquetes para crear dependencias (paso 4):
```sh
sudo apt-get install git devscripts equivs gdebi-core
```

2. Descargar fuente de WoeUSB y entrar a la carpeta:
```sh
git clone https://github.com/slacka/WoeUSB.git
cd WoeUSB
```

3. Generar el nombre correcto de la versión basado en las etiquetas Git.
```sh
./setup-development-environment.bash
```

4. Crear e instalar dependencias
```sh
mk-build-deps
sudo gdebi *.deb
```

4. Crear paquetes .deb en ../ y actualizar repositorios
```sh
dpkg-buildpackage -uc -b
sudo apt-get update
```

5. Instalar WoeUSB
```sh
sudo gdebi ../woeusb_*.deb
```

## Pasos para crear booteable de Windows con WoeUSB

1. Abrir WoeUSB. Escribir en consola:
```sh
woeusbgui
```

2. En "Source", seleccionar la imagen iso de Windows. Ej: Win10_1903_Spanish_x64.iso

3. En "File System", elegir NTFS (sistema de archivo usado en Windows)

3. En "Target device", escoger el dispositivo USB donde instalará la imagen. Ej: /dev/sdb

4. Empezará a formatear e instalar el Windows. Esperar que termine y listo!

### ¿Dudas?

Contáctame, revisa [mi sección](/contacto/) de contacto :)

