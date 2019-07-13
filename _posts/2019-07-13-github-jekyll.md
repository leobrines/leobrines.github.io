---
layout: post
title:  "Crear blog con Jekyll y Github Pages!"
date:   2019-07-13 12:51:21 -0300
categories: jekyll update
---

Se utilizo Debian 9 para el tutorial

1. Instalar requisitos:
	* Ruby 2.X.X. 
		* Instalar: ```sudo apt install ruby```
		* Version actual: ```ruby --version```
	* Bundler
		* Instalar: ```sudo gem install bundler```

2. En la raiz del proyecto, crear un archivo Gemfile con las siguientes lineas:
```txt
source 'https://rubygems.org'
gem 'github-pages', group: :jekyll_plugins
```

3. Instalar las dependencias:
```sh
	bundle install
```

#### Error: Failed to build gem

Error

```txt
Gem::Ext::BuildError: ERROR: Failed to build gem native extension.
mkmf.rb can't find header files for ruby at /usr/lib/ruby/include/ruby.h
```
Solución
```txt
sudo apt install ruby-dev
```

#### Error instalando nokogiri

Error
```txt
zlib is missing; necessary for building libxml2
```
Solución
```txt
sudo apt install zlib1g-dev 
```

#### Error: No GitHub API authentication

Error
```txt
GitHub Metadata: No GitHub API authentication could be found.
```
Solución
```txt
Add "github: [metadata]" to _config.yml | [source](https://github.com/github/pages-gem/issues/399#issuecomment-301827749)
```
	
