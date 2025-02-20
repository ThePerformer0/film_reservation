# Film Reservation Backend

Ce projet est une application de réservation de films développée avec Django et Django REST Framework. Il permet aux utilisateurs de s'inscrire, de se connecter, de réserver des places pour des séances de films et de gérer les films et les séances.

## Prérequis

- Python 3.9 ou supérieur
- MySQL
- pip (gestionnaire de paquets Python)

## Installation

1. Créer et activer un environnement virtuel :

    ```bash
    python -m venv env
    source env/bin/activate  # Sur Windows, utilisez `env\Scripts\activate`
    ```

2. Installer les dépendances :

    ```bash
    pip install -r requirements.txt
    ```

3. Configurer la base de données MySQL :

    Créez une base de données MySQL et mettez à jour les paramètres de la base de données dans `film_reservation/settings.py` :

    ```python
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.mysql',
            'NAME': 'nom_de_votre_base_de_donnees',
            'USER': 'votre_utilisateur',
            'PASSWORD': 'votre_mot_de_passe',
            'HOST': 'localhost',
            'PORT': '3306',
        }
    }
    ```

4. Appliquer les migrations de la base de données :

    ```bash
    python manage.py makemigrations
    python manage.py migrate
    ```

5. Créer un superutilisateur :

    ```bash
    python manage.py createsuperuser
    ```

6. Lancer le serveur de développement :

    ```bash
    python manage.py runserver
    ```

## API Endpoints

L'API expose les endpoints suivants :

### Authentification

- `POST /api/auth/register/` : Inscription d'un nouvel utilisateur
- `POST /api/auth/token/` : Obtention d'un token JWT
- `POST /api/auth/token/refresh/` : Rafraîchissement du token JWT
- `GET /api/auth/me/` : Récupération des informations de l'utilisateur connecté

### Films

- `GET /api/movies/` : Liste des films
- `POST /api/movies/` : Création d'un nouveau film (admin uniquement)
- `GET /api/movies/{id}/` : Détails d'un film
- `PUT /api/movies/{id}/` : Mise à jour d'un film (admin uniquement)
- `DELETE /api/movies/{id}/` : Suppression d'un film (admin uniquement)

### Séances

- `GET /api/screenings/` : Liste des séances
- `POST /api/screenings/` : Création d'une nouvelle séance (admin uniquement)
- `GET /api/screenings/{id}/` : Détails d'une séance
- `PUT /api/screenings/{id}/` : Mise à jour d'une séance (admin uniquement)
- `DELETE /api/screenings/{id}/` : Suppression d'une séance (admin uniquement)

### Réservations

- `GET /api/bookings/` : Liste des réservations de l'utilisateur connecté
- `POST /api/bookings/` : Création d'une nouvelle réservation
- `GET /api/bookings/{id}/` : Détails d'une réservation
- `PUT /api/bookings/{id}/` : Mise à jour d'une réservation
- `DELETE /api/bookings/{id}/` : Suppression d'une réservation

