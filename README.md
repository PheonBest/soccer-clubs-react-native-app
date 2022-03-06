# Description
Ce projet répond à l'évaluation React Native de l'entreprise Sportyma.

# Outils
L'application a été développée avec Expo.
Les modules utilisés sont:
- react-hook-form
- redux
- expo-image-picker
- react-navigation
- react-native-fontawesome (Icônes)
- react-native-gesture-handler (Boutons natifs)
- react-native-paper (DataTable)

L'IDE utilisé est WebStorm.

# Données
Le modèle de données est le suivant:
![Alt text](documentation/uml-sportyma-eval.drawio.png?raw=true "Modèle de données")

Deux dataset ont été utilisés, à savoir celui de soccer-wiki et de world_countries_list.

# Fonctionnalités
- Accéder à la liste des clubs.
- Accéder à l'historique des clubs d'un joueur.
- Accéder aux statiques d'un joueur par club et par saison.
- Saisir un club.
- Supporter l'orientation en mode portrait et paysage.

# Ecrans

L'application comporte une page d'accueil correspondante à une liste de clubs.

Lors d’un clic sur le club, aﬃchage d’une page de détails du club, ainsi que la liste de ses joueurs pour la saison courante.

#Avis aux développeurs
La génération des données est paramétrable (choix du nombre de clubs, de saisons, de joueurs par club).

### Installation:
* git clone 
* Au niveau de la racine: yarn install 
* Au niveau src/assets/: yarn install

Utilisation:
Exécuter la commande "yarn start" à la racine du projet.

# P-S:
J'espère que l'application vous plaira.

Bien cordialement,
Antonin Marxer
