# Description
This is a soccer club management showcase app.

# How to download the application ?
Go to Github's "Releases" section and download the latest .apk file.

# Tools
The app has been developed with Expo
The used JS libraries are:
- react-hook-form: manage forms
- redux: actions and states management
- expo-image-picker: image picker
- react-navigation: native navigation tab
- react-native-fontawesome : icons
- react-native-gesture-handler: native buttons 
- react-native-paper : display data in tables

# Data
The data model is the following:
![Alt text](documentation/uml-sportyma-eval.drawio.png?raw=true "Data model")

Two datasets were used, i.e soccer-wiki and world_countries_list ones.

# Features
- View clubs list.
- View a player’s clubs history.
- View the statistics of a player per club per season.
- Create a club.
- Adapt to landscape and portrait orientation.

# Screens
The app includes a homepage that shows a list of soccer clubs.
When we click on a club, display the club’s details page and its players of the current season.

# Developpers Note
The shown data is generated. It can be parameterized (choice of the number of clubs, seasons and th enumber of players per club).

### Installation:
* git clone 
* At root level: yarn install 
* In src/assets/: yarn install

Usage:
Execute "yarn start" at the root of the project.
