// ## Exo 1

// ### Créer deux personnages du nom de François et Sergio
// ### Donnez leur à chacun une propriété panier (tableau) contenant tous deux des ingrédients différents du super marché, par exemple huile,tomate,pain etc..
// ### Rajouter à François la méthode derober, qui prend 2 aliments du panier de Sergio et les met dans son panier.


// let myArray = ['a', 'b', 'c', 'd'];
// console.log(myArray.splice(3, 2, 1, 0));

let myArray = ["a", "b", "c", "d"];
 console.log(myArray.splice (myArray.indexOf('c'), 2));

 let myArray1 = ["1", "2", "3", "4"];
 delete myArray1[2];
 console.log(myArray1); // Output: [ "1", "2", null, "4" ]


let Sergio1 = [`ail`, `shampoo`, `pomme`];
delete Sergio1[`shampoo`, `pomme`];
console.log(Sergio1);

/* */


let françois = {
    panier: [`huile`, `tomate`, `pain`],
    ajouter(){
        console.log(`${françois.panier}`)
    }
}
console.log(françois);


let sergio = {
    panier : [],
    derober(){
        let voler = françois.panier.slice(0,2);
        françois.panier.splice(0, 2);
        sergio.panier = sergio.panier.concat(voler);
    }
}

console.log(sergio.panier);
sergio.derober();
console.log(sergio.panier);
sergio.derober();
console.log(sergio.panier);
console.log(françois.panier);



// ## Exo 

// ### Créer un objet "vieille_dame" avec une propriété "âge" assez élevée une propriété "nom" contenant un "prenom" et un "nom de famille" (/!\ Objet dans objet), une propriété "moral" avec comme valeur "mal" et une propriété "objet" par exemple une canne 

// ### une méthode "parler" qui selon son moral fait une alert différente, si son moral = "mal" alors elle dira "Vous me dérangez et le frappe avec son objet", si son moral = "bien" alors elle dira "bonjour" + le nom du vieil_homme.


// ### Créer ensuite l'objet vieil_homme avec une propriété "nom" et une méthode "adoucir" qui change le moral de la "vieille_dame" en "bien".

// ### Faites parler la vieille dame, puis lancer la méthode adoucir du vieil homme et relancer la méthode parler de la vieille dame.

let vieil_homme = {
    embedded: true,
    nom : {
        prenom: `Jean`,
        nom_de_famille: `Ulvichigenstein`,
    },
    adoucir(){
        vieille_dame.moral = "bien"
    }
}

let vieille_dame = {
    age: 80,
    moral: `mal`,
    objet: `canne`,
    embedded: true,
    nom : {
        prenom: `Yvonne`,
        nom_de_famille: `Lyat`,
    },
    parler(){
        switch (this.moral) {
            case "mal":
                alert(`Vous me dérangez et le frappe avec sa ${this.objet}`);
                break;
            case "bien":
                alert(`Bonjour ${vieil_homme.nom.prenom}`);
                break;
            default:
                console.log('error');
                break;
        }
    }
}

vieille_dame.parler();
vieil_homme.adoucir();
vieille_dame.parler();




// Notes

const AddressSchema = {
    name: "Address",
    embedded: true, // default: false
    properties: {
      street: "string?",
      city: "string?",
      country: "string?",
      postalCode: "string?",
    },
  };