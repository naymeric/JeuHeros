const prompt = require('prompt-sync')()

let choix = prompt("Vous êtes un chevalier et vous voulez rejoindre votre château. Voulez-vous traverser la forêt mystérieuse ou le désert aride ? F pour FORET ou D pour DESERT ")
while (choix != "D" && choix != "F") {
    choix = prompt("Vous vous êtes trompés. Choisissez entre F pour FORET ou D pour DESERT ")
}

if (choix == "F") {
    choix = prompt("Un monstre surgit devant vous. Voulez-vous l'attaquer ? O pour OUI ou N pour NON ")
    while (choix != "O" && choix != "N") {
        choix = prompt("Vous vous êtes trompés. Choisissez entre O pour OUI ou N pour NON ")
    }

    if (choix == "O") {
        console.log("Vous tuez le monstre, traversez la forêt et rentrez dans votre château acclamé par les villageois")
    } else if (choix == "N") {
        console.log("Vous fuyez devant l'ennemi, rentrez au village et vous devenez le pire chevalier de cette histoire")
    }
}
else if (choix == "D") {
    choix = prompt("Après avoir marché pendant des heures, vous vous assoupissez et vous vous réveillez en sursaut : un serpent vous a mordu. Voulez-vous rentrer au village et sauver votre vie ou continuer à traverser le désert ? R pour RENTRER ou T pour TRAVERSER ")
    while (choix != "R" && choix != "T") {
        choix = prompt("Vous vous êtes trompés. Choisissez entre R pour RENTRER ou T pour TRAVERSER ")
    }
    
    if (choix == "R") {
        console.log("Vous fuyez devant l'ennemi, rentrez au village et vous devenez le pire chevalier de cette histoire")
    }
    else if (choix == "T") {
        console.log("Vous continuez bravement à traverser le désert mais votre vue se brouille lorsque vous apercevez la silhouette majestueuse de votre chateau. Vous mourez sur le chemin mais votre légende perdure durant des siècles")
    }
}



