club:
name: string
logo: string
country: string
player:
lastname: string
firstname: string

saison:
start: Date
end: Date

jouer:
start: Date
end: Date

Liste des actions:
Pour le club:
addClub(name: string, logo: string, country: string)

Pour les joueurs:
addPlayer(lastname: string, firstname: string)

Pour la participation d'un joueur à un club:
addPlay(playerId: number, clubName: string, start: Date)

Remarque: On n'implémente pas de fonctions remove ou update car elles ne sont pas utiles ici.

Crédits
stadium.jpg: @usheryeah, pxhere.com
trophee.png: Freepik, flaticon.com
