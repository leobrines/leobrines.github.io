---
layout: post
title:  "¿Cómo descargar la base oficial de servidores para Counter-Strike 1.6 en Linux?"
date:   2019-07-14 9:29:00 -0300
categories: cstrike server
---

### Paso 1: Instalar SteamCMD

1. Instala las dependencias:
	- Ubuntu/Debian 64-Bit: ```apt-get install lib32gcc1```
	- RedHat/CentOS: ```yum install glibc libstdc++```
	- RedHat/CentOS 64-Bit: ```yum install glibc.i686 libstdc++.i686```

	- Si no lo instalas, en Debian 9, causa este error: 
```sh
./steamcmd.sh: line 29: /home/vagrant/steamcmd/linux32/steamcmd: No such file or directory
```

2. Crea una carpeta donde se instalará el SteamCMD:

```sh
mkdir ~/steamcmd
cd ~/steamcmd
```

3. Descarga el SteamCMD oficial

```sh
wget http://media.steampowered.com/installer/steamcmd_linux.tar.gz
```

4. Extrae el contenido

```sh
tar -xvzf steamcmd_linux.tar.gz
```

5. Ejecuta SteamCMD para que empiece a descargar e instalar lo que falte. No necesita permiso de root
```sh
./steamcmd.sh
```

### Paso 2: Descargar el servidor desde SteamCMD

1. En la carpeta recien instalada, ejecuta SteamCMD:
```sh
./steamcmd.sh
```

2. Identificate como anonimo:
```sh
login anonymous
```

3. Dile a SteamCMD que descargue los archivos del servidor en una carpeta. Ej: hlds:
```sh
force_install_dir hlds
```

4. Descarga el HLDS:
```sh
app_update 90 mod cstrike
```

5. SteamCMD tiene un bug y aveces no se descargan todos los archivos. Por esa razón debes validar los archivos, con un par de veces deberian ser suficientes: 
```sh
app_update 90 validate
```

6. Sal de SteamCMD:
```sh
quit
```

Listo. Con eso tendremos la última versión oficial de servidor para Counter-Strike 1.6 en la carpeta que hayamos escogido

[Fuente del tutorial](https://developer.valvesoftware.com/wiki/SteamCMD:es#Descargar_SteamCMD)

### ¿Dudas?

Contáctame, revisa [mi sección](/contacto/) de contacto :)

