# Génération de site statique (SSG) avec Next.js, Docker et Docker Compose

Ce projet illustre comment utiliser Next.js, Docker et Docker Compose pour développer, générer  et servir des pages statiques (html, css et js).

## Prérequis

* [Docker](https://docs.docker.com/get-docker/) installé sur votre machine.
* [Docker Compose](https://docs.docker.com/compose/install/) installé sur votre machine.

## Phase 1: Développement

Pour démarrer le serveur de développement et exécuter l'application Next.js en mode développement, exécutez la commande suivante :

```python
docker build -t my-cv-dev -f Dockerfile.dev .
docker run -p 3000:3000 -v $(pwd):/app my-cv-dev
```



Cette commande démarrera un conteneur pour le service `dev` défini dans le fichier `Dockerfile.dev`. Le conteneur montera votre répertoire local contenant votre code source en tant que volume à l'intérieur du conteneur, permettant à Next.js de détecter les modifications de votre code source et de déclencher un rechargement à chaud.

Vous pouvez afficher votre application Next.js en naviguant vers `http://localhost:3000` dans votre navigateur web.

## Phase 2: Build

Pour la simplicité nous allons combiner les deux phases Build et Run dans un seul `docker-compose.yml`

Pour générer les pages statiques avec Next.js de la phase Build, et servir ces pages directement :

```python
docker compose --build
```

Cette commande démarrera un conteneur pour le service `build` défini dans le fichier `Dockerfile.build`. Le conteneur générera les pages statique en (html, css et js) et stockera la sortie dans un volume nommé `build_data`.

## Phase 3: Run

Pour exécuter les pages statique à l'aide de la sortie générée par le service `build`, exécutez la commande suivante :

```python
docker compose up
```

Cette commande démarrera des conteneurs pour les services `build` et `run` définis dans le fichier `docker-compose.yml`. Le service `run` servira les fichiers statiques générés par le service `build` à l'aide de `Nginx` sur le port `80`.

Vous pouvez afficher votre accéder en naviguant vers `http://localhost:3000` dans votre navigateur web.

## Fichiers

* `Dockerfile.dev`: Fichier Docker pour le serveur de développement.
* `Dockerfile.build`: Fichier Docker pour la construction de l'application Next.js.
* `docker-compose.yml`: Fichier Docker Compose pour l'exécution de l'application Next.js à l'aide de Nginx.
