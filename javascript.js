let userPseudo;//définition de la variable pour stocker le pseudo utilisateur
//fonction pour écrire le pseudo du joueur dans 'player_Name'
document.getElementById('name-form').addEventListener('submit', function(event) {
    event.preventDefault();//permet d'empêcher l'action par défaut (sans ça, le pseudo ne reste pas)
    userPseudo = document.getElementById('name-input').value;
    document.getElementById('player_Name').innerHTML = `
      <h2> ${userPseudo} </h2>
    `;
    document.getElementById('name-input').blur();//enlève le curseur de la barre de texte quand on appuie sur entrée
});

//définition de variables permettant de savoir si les objets sont déjà affiché une fois
let emptyHelmAdded = false;
let emptyChestAdded = false;
let emptyLegsAdded = false;
let emptyGauntletsAdded = false;
let emptyTalismanAdded = false;
let emptyWeaponAdded = false;

clearDataContainer();//appel de la fonction clearDataContainer (elle permet de remettre en forme le datacontainer pour qu'il soit prêt à recevoir les objets)

//définition des objets vides (pour réinitialiser les objets équipés)
let emptyHelm = {
  image: 'images/Icones/armor_set_slot_elden_ring_wiki_guide.JPEG',
  name: 'Empty',
  category: 'Helm',
  dmgNegation: [
      {name: 'Phy', amount: 0},
      {name: 'Strike', amount: 0},
      {name: 'Slash', amount: 0},
      {name: 'Pierce', amount: 0},
      {name: 'Magic', amount: 0},
      {name: 'Fire', amount: 0},
      {name: 'Ligt', amount: 0},
      {name: 'Holy', amount: 0}
  ],
  resistance: [
      {name: 'Immunity', amount: 0},
      {name: 'Robustness', amount: 0},
      {name: 'Focus', amount: 0},
      {name: 'Poise', amount: 0},
      {name: 'Vitality', amount: 0}
  ],
  weight: 0
}
let emptyChest = {
  image: 'images/Icones/armor_set_slot_elden_ring_wiki_guide.JPEG',
  name: 'Empty',
  category: 'Chest Armor',
  dmgNegation: [
      {name: 'Phy', amount: 0},
      {name: 'Strike', amount: 0},
      {name: 'Slash', amount: 0},
      {name: 'Pierce', amount: 0},
      {name: 'Magic', amount: 0},
      {name: 'Fire', amount: 0},
      {name: 'Ligt', amount: 0},
      {name: 'Holy', amount: 0}
  ],
  resistance: [
      {name: 'Immunity', amount: 0},
      {name: 'Robustness', amount: 0},
      {name: 'Focus', amount: 0},
      {name: 'Poise', amount: 0},
      {name: 'Vitality', amount: 0}
  ],
  weight: 0
}

let emptyLegs = {
  image: 'images/Icones/armor_set_slot_elden_ring_wiki_guide.JPEG',
  name: 'Empty',
  category: 'Leg Armor',
  dmgNegation: [
      {name: 'Phy', amount: 0},
      {name: 'Strike', amount: 0},
      {name: 'Slash', amount: 0},
      {name: 'Pierce', amount: 0},
      {name: 'Magic', amount: 0},
      {name: 'Fire', amount: 0},
      {name: 'Ligt', amount: 0},
      {name: 'Holy', amount: 0}
  ],
  resistance: [
      {name: 'Immunity', amount: 0},
      {name: 'Robustness', amount: 0},
      {name: 'Focus', amount: 0},
      {name: 'Poise', amount: 0},
      {name: 'Vitality', amount: 0}
  ],
  weight: 0

}
let emptyGaunts = {
  image: 'images/Icones/armor_set_slot_elden_ring_wiki_guide.JPEG',
  name: 'Empty',
  category: 'Gauntlets',
  dmgNegation: [
      {name: 'Phy', amount: 0},
      {name: 'Strike', amount: 0},
      {name: 'Slash', amount: 0},
      {name: 'Pierce', amount: 0},
      {name: 'Magic', amount: 0},
      {name: 'Fire', amount: 0},
      {name: 'Ligt', amount: 0},
      {name: 'Holy', amount: 0}
  ],
  resistance: [
      {name: 'Immunity', amount: 0},
      {name: 'Robustness', amount: 0},
      {name: 'Focus', amount: 0},
      {name: 'Poise', amount: 0},
      {name: 'Vitality', amount: 0}
  ],
  weight: 0
}

let emptytalisman = {
  image: 'images/Icones/talisman_slot_elden_ring_wiki_guide.JPEG',
  name: 'Empty',
  description: ' '
}

let emptyWeapon = {
  image: 'images/Icones/weapon_right_slot_elden_ring_wiki_guide.webp',
  name: 'Empty',
  attack: [
   {name: 'Phy', amount: 0}
  ],
  weight: 0
}

// définition desvariables des statistiques
let statsWeaponLeft = {};
let statsWeaponRight = {};
let statsHelm = {};
let statsChest = {};
let statsLegs = {};
let statsGauntlets = {};
let stats = {
  Phy: 0,
  Strike: 0,
  Slash: 0,
  Pierce: 0,
  Magic: 0,
  Fire: 0,
  Ligt: 0,
  Holy: 0,
  Immunity: 0,
  Robustness: 0,
  Focus: 0,
  Vitality: 0,
  Poise: 0,
  Weight: 0
}
let statsweapon = {
  AttackPhy: 0
}

// définition des tableaux permettant de stocker les objets équipés
let equippedHelm = [];
let equippedChest = [];
let equippedLegs = [];
let equippedGauntlets = [];
let equippedWeaponLeft = [];
let equippedWeaponRight = [];
let cote = [];
// fonction d'initialisation
document.addEventListener('DOMContentLoaded', function() {
  //fonction d'appel de l'API quand on clic sur le casque
  document.getElementById('casque').addEventListener('click', function() {//ajoute un detecteur de clic sur le casque
    //variable permettant de savoir si le divcasque est caché ou non
    var afficheElement = document.getElementById("divcasque");
    var isHidden = afficheElement.classList.contains("caché");
    // Si l'élément est caché, le montre. Sinon, le cache et efface les données du divcasque
    if (isHidden) {
        afficheElement.classList.remove("caché");
        afficheElement.classList.add("divelements");
    } else {
        afficheElement.classList.remove("divelements");
        afficheElement.classList.add("caché");
        clearDataContainer();
    }
    //appel les fonctions permettant de collecter les données de l'API
    fetchDataFromAPI0('Helm', 'casqueicone');
    fetchDataFromAPI1('Helm', 'casqueicone');
    fetchDataFromAPI2('Helm', 'casqueicone');
    fetchDataFromAPI3('Helm', 'casqueicone');
    fetchDataFromAPI4('Helm', 'casqueicone');
    fetchDataFromAPI5('Helm', 'casqueicone');
  });

  //fonction d'appel de l'API quand on clic sur le buste
  document.getElementById('buste').addEventListener('click', function() {

    var afficheElement = document.getElementById("divcasque");
    var isHidden = afficheElement.classList.contains("caché");
    if (isHidden) {
        afficheElement.classList.remove("caché");
        afficheElement.classList.add("divelements");
    } else {
        afficheElement.classList.remove("divelements");
        afficheElement.classList.add("caché");
        clearDataContainer();
    }
    fetchDataFromAPI0('Chest Armor', 'busteicone');
    fetchDataFromAPI1('Chest Armor', 'busteicone');
    fetchDataFromAPI2('Chest Armor', 'busteicone');
    fetchDataFromAPI3('Chest Armor', 'busteicone');
    fetchDataFromAPI4('Chest Armor', 'busteicone');
    fetchDataFromAPI5('Chest Armor', 'busteicone');
  });

  //fonction d'appel de l'API quand on clic sur les gants
  document.getElementById('gants').addEventListener('click', function() {

    var afficheElement = document.getElementById("divcasque");
    var isHidden = afficheElement.classList.contains("caché");
    if (isHidden) {
        afficheElement.classList.remove("caché");
        afficheElement.classList.add("divelements");
    } else {
        afficheElement.classList.remove("divelements");
        afficheElement.classList.add("caché");
        clearDataContainer();
    }
    fetchDataFromAPI0('Gauntlets', 'gantsicone');
    fetchDataFromAPI1('Gauntlets', 'gantsicone');
    fetchDataFromAPI2('Gauntlets', 'gantsicone');
    fetchDataFromAPI3('Gauntlets', 'gantsicone');
    fetchDataFromAPI4('Gauntlets', 'gantsicone');
    fetchDataFromAPI5('Gauntlets', 'gantsicone');
  });

  //fonction d'appel de l'API quand on clic sur les jambieres
  document.getElementById('jambieres').addEventListener('click', function() {
  
      var afficheElement = document.getElementById("divcasque");
      var isHidden = afficheElement.classList.contains("caché");
      if (isHidden) {
          afficheElement.classList.remove("caché");
          afficheElement.classList.add("divelements");
      } else {
          afficheElement.classList.remove("divelements");
          afficheElement.classList.add("caché");
          clearDataContainer();
      }
      fetchDataFromAPI0('Leg Armor', 'jambieresicone');
      fetchDataFromAPI1('Leg Armor', 'jambieresicone');
      fetchDataFromAPI2('Leg Armor', 'jambieresicone');
      fetchDataFromAPI3('Leg Armor', 'jambieresicone');
      fetchDataFromAPI4('Leg Armor', 'jambieresicone');
      fetchDataFromAPI5('Leg Armor', 'jambieresicone');
  });
  //fonction d'appel de l'API quand on clic sur le talisman1
  document.getElementById('talisman1').addEventListener('click', function() {

    var afficheElement = document.getElementById("divcasque");
    var isHidden = afficheElement.classList.contains("caché");
    if (isHidden) {
        afficheElement.classList.remove("caché");
        afficheElement.classList.add("divelements");
    } else {
        afficheElement.classList.remove("divelements");
        afficheElement.classList.add("caché");
        clearDataContainer();
    }
    fetchDataFromAPItalisman('talisman1icone');
  });
  document.getElementById('talisman2').addEventListener('click', function() {

    var afficheElement = document.getElementById("divcasque");
    var isHidden = afficheElement.classList.contains("caché");
    if (isHidden) {
        afficheElement.classList.remove("caché");
        afficheElement.classList.add("divelements");
    } else {
        afficheElement.classList.remove("divelements");
        afficheElement.classList.add("caché");
        clearDataContainer();
    }
    fetchDataFromAPItalisman('talisman2icone');
  });

  //fonction d'appel de l'API quand on clic sur le talisman3
  document.getElementById('talisman3').addEventListener('click', function() {

    var afficheElement = document.getElementById("divcasque");
    var isHidden = afficheElement.classList.contains("caché");
    if (isHidden) {
        afficheElement.classList.remove("caché");
        afficheElement.classList.add("divelements");
    } else {
        afficheElement.classList.remove("divelements");
        afficheElement.classList.add("caché");
        clearDataContainer();
    }
    fetchDataFromAPItalisman('talisman3icone');
  });

  //fonction d'appel de l'API quand on clic sur le talisman4
  document.getElementById('talisman4').addEventListener('click', function() {
    
    var afficheElement = document.getElementById("divcasque");
    var isHidden = afficheElement.classList.contains("caché");
    if (isHidden) {
        afficheElement.classList.remove("caché");
        afficheElement.classList.add("divelements");
    } else {
        afficheElement.classList.remove("divelements");
        afficheElement.classList.add("caché");
        clearDataContainer();
    }
    fetchDataFromAPItalisman('talisman4icone');
  });

  document.getElementById('armesL').addEventListener('click', function() {
    cote = 'gauche';//ajout du coté pour pouvoir changer la stat selon le coté de l'arme

    var afficheElement = document.getElementById("divcasque");
    var isHidden = afficheElement.classList.contains("caché");
    if (isHidden) {
        afficheElement.classList.remove("caché");
        afficheElement.classList.add("divelements");
    } else {
        afficheElement.classList.remove("divelements");
        afficheElement.classList.add("caché");
        clearDataContainer();
    }
    fetchDataFromAPIWeapon0('armeLicone');
    fetchDataFromAPIWeapon1('armeLicone');
    fetchDataFromAPIWeapon2('armeLicone');
    fetchDataFromAPIWeapon3('armeLicone');
  });

  document.getElementById('armesR').addEventListener('click', function() {
      cote = 'droite';

      var afficheElement = document.getElementById("divcasque");
      var isHidden = afficheElement.classList.contains("caché");
      if (isHidden) {
          afficheElement.classList.remove("caché");
          afficheElement.classList.add("divelements");
      } else {
          afficheElement.classList.remove("divelements");
          afficheElement.classList.add("caché");
          clearDataContainer();
      }
      fetchDataFromAPIWeapon0('armeRicone');
      fetchDataFromAPIWeapon1('armeRicone');
      fetchDataFromAPIWeapon2('armeRicone');
      fetchDataFromAPIWeapon3('armeRicone');
  })
});

//fonction d'appel de l'API (elles sont toutes identiques à peu de chose près, mais il était nécessaire de faire 6 appels pour l'API armure car il y avait trop d'objets)
//API page 0 des armures
function fetchDataFromAPI0(category, imageId) {
  const apiUrl = 'https://eldenring.fanapis.com/api/armors?limit=568&page=0';//on précise l'url de l'API
  fetch(apiUrl)
    .then(response => response.json())//on transforme la reponse de l'API en json
    .then(data => {
      let armorData;
      // on s'assure que les données sont dans un format gérable; tableau ou objet(auquels cas on les convertit en tableau)
      if (Array.isArray(data)) {
        armorData = data;
      } else if (typeof data === 'object' && data !== null) {
        armorData = Object.values(data);
      } else {
        console.error('Les données de l\'API ne sont pas dans un format gérable.');
        return;
      }

      displayDataOnSite(armorData, category, imageId);//on appelle la fonction qui affiche les données
    })
}
//API page 1 des armures
function fetchDataFromAPI1(category, imageId) {
  const apiUrl = 'https://eldenring.fanapis.com/api/armors?limit=568&page=1';
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      let armorData;
      if (Array.isArray(data)) {
        armorData = data;
      } else if (typeof data === 'object' && data !== null) {
        armorData = Object.values(data);
      } else {
        console.error('Les données de l\'API ne sont pas dans un format gérable.');
        return;
      }
    
      displayDataOnSite(armorData, category, imageId);
    })
}
//API page 2 des armures
function fetchDataFromAPI2(category, imageId) {
  const apiUrl = 'https://eldenring.fanapis.com/api/armors?limit=568&page=2';
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      let armorData;
      if (Array.isArray(data)) {
        armorData = data;
      } else if (typeof data === 'object' && data !== null) {
        armorData = Object.values(data);
      } else {
        console.error('Les données de l\'API ne sont pas dans un format gérable.');
        return;
      }
    
      displayDataOnSite(armorData, category, imageId);
    })
}
//API page 3 des armures
function fetchDataFromAPI3(category, imageId) {
  const apiUrl = 'https://eldenring.fanapis.com/api/armors?limit=568&page=3';
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      let armorData;
      if (Array.isArray(data)) {
        armorData = data;
      } else if (typeof data === 'object' && data !== null) {
        armorData = Object.values(data);
      } else {
        console.error('Les données de l\'API ne sont pas dans un format gérable.');
        return;
      }
    
      displayDataOnSite(armorData, category, imageId);
    })
}
//API page 4 des armures
function fetchDataFromAPI4(category, imageId) {
  const apiUrl = 'https://eldenring.fanapis.com/api/armors?limit=568&page=4';
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      let armorData;
      if (Array.isArray(data)) {
        armorData = data;
      } else if (typeof data === 'object' && data !== null) {
        armorData = Object.values(data);
      } else {
        console.error('Les données de l\'API ne sont pas dans un format gérable.');
        return;
      }
    
      displayDataOnSite(armorData, category, imageId);
    })
}
//API page 5 des armures
function fetchDataFromAPI5(category, imageId){
  const apiUrl = 'https://eldenring.fanapis.com/api/armors?limit=568&page=5';
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      let armorData;
      if (Array.isArray(data)) {
        armorData = data;
      } else if (typeof data === 'object' && data !== null) {
        armorData = Object.values(data);
      } else {
        console.error('Les données de l\'API ne sont pas dans un format gérable.');
        return;
      }
    
      displayDataOnSite(armorData, category, imageId);
    })
}
//API des talisman
function fetchDataFromAPItalisman(imageId){
  const apiUrl = 'https://eldenring.fanapis.com/api/talismans?limit=100';
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      let talismanData;
      if (Array.isArray(data)) {
        talismanData = data;
      } else if (typeof data === 'object' && data !== null) {
        // Convertir l'objet en tableau
        talismanData = Object.values(data);
      } else {
        console.error('Les données de l\'API ne sont pas dans un format gérable.');
        return;
      }
    
      displayDataOnSitetalisman(talismanData, imageId);
    });
}

function fetchDataFromAPIWeapon0(imageId){
  const apiUrl = 'https://eldenring.fanapis.com/api/weapons?limit=100&page=0';
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      let weaponData;
      if (Array.isArray(data)) {
        weaponData = data;
      } else if (typeof data === 'object' && data !== null) {
        // Convertir l'objet en tableau
        weaponData = Object.values(data);
      } else {
        console.error('Les données de l\'API ne sont pas dans un format gérable.');
        return;
      }

      displayDataOnSiteWeapon(weaponData, imageId);
    });
}

function fetchDataFromAPIWeapon1(imageId){
  const apiUrl = 'https://eldenring.fanapis.com/api/weapons?limit=100&page=1';
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      let weaponData;
      if (Array.isArray(data)) {
        weaponData = data;
      } else if (typeof data === 'object' && data !== null) {
        // Convertir l'objet en tableau
        weaponData = Object.values(data);
      } else {
        console.error('Les données de l\'API ne sont pas dans un format gérable.');
        return;
      }

      displayDataOnSiteWeapon(weaponData, imageId);
    });
}

function fetchDataFromAPIWeapon2(imageId){
  const apiUrl = 'https://eldenring.fanapis.com/api/weapons?limit=100&page=2';
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      let weaponData;
      if (Array.isArray(data)) {
        weaponData = data;
      } else if (typeof data === 'object' && data !== null) {
        // Convertir l'objet en tableau
        weaponData = Object.values(data);
      } else {
        console.error('Les données de l\'API ne sont pas dans un format gérable.');
        return;
      }

      displayDataOnSiteWeapon(weaponData, imageId);
    });
}

function fetchDataFromAPIWeapon3(imageId){
  const apiUrl = 'https://eldenring.fanapis.com/api/weapons?limit=100&page=3';
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      let weaponData;
      if (Array.isArray(data)) {
        weaponData = data;
      } else if (typeof data === 'object' && data !== null) {
        // Convertir l'objet en tableau
        weaponData = Object.values(data);
      } else {
        console.error('Les données de l\'API ne sont pas dans un format gérable.');
        return;
      }

      displayDataOnSiteWeapon(weaponData, imageId);
    })
}
//fonction qui affiche les données des talismans
function displayDataOnSitetalisman(talismanData, imageId) {
  const apiDataContainer = document.getElementById('divcasque');//on affiche dans divcasque
  //pour ajouter un talisman vide (items vides défini entre la ligne 20 et 120)
  if (!emptyTalismanAdded) {// si le talisman vide n'est pas encore ajouté
    talismanData[3].unshift(emptytalisman);//on l'ajoute
    emptyTalismanAdded = true;//et on remplie la condition qui montre qu'il est ajouté
  }
  talismanData[3].forEach(item => {//affichage des données des talismans de l'API
    if (item.image && item.name) {
      const divElement = document.createElement('div');
      divElement.className = 'gallery-item';//créé une div gallery-item pour chaque talisman
      divElement.innerHTML = `
        <a id="item-link" class="item-link" href="#">
          <img class="item-image" src="${item.image}" alt="${item.name}" id="item-image">
          <div class="item-name">${item.name}</div>
        </a>
        <div class="caché">
          <div class="item-description">${item.description}</div>
        </div>
      `;
      apiDataContainer.appendChild(divElement);
      addHoverEventsToGalleryItemstalisman();
      // Ajoute unouteur d'événements à la balise "a"
      divElement.querySelector('.item-link').addEventListener('click', function(event) {
        event.preventDefault();
        apiDataContainer.classList.remove("divelements");
        apiDataContainer.classList.add("caché");
        // Met a jour l'image de l'objet équipé
        const itemImage = document.getElementById(imageId);
        itemImage.src = item.image;
        itemImage.alt = item.name;
        clearDataContainer();
      })
    }
  });
}
//pour le display des armures, c'est la même chose sauf pour le stockage des statistiques
function displayDataOnSite(data, category, imageId) {
  const apiDataContainer = document.getElementById('divcasque');
  //on ajoute les items vides
  if (!emptyChestAdded) {
    data[3].unshift(emptyChest);
    emptyChestAdded = true;
  } 
  if (!emptyHelmAdded) {  
    data[3].unshift(emptyHelm);
      emptyHelmAdded = true;
    }
    if (!emptyGauntletsAdded) {
      data[3].unshift(emptyGaunts);
      emptyGauntletsAdded = true;
    }
    if (!emptyLegsAdded) {
      data[3].unshift(emptyLegs);
      emptyLegsAdded = true;
    }

    data[3].forEach(item => {
      if (item.image && item.name && item.category === category) {
        const divElement = document.createElement('div');
        divElement.className = 'gallery-item';
        //en plus de les ajouter dans gallery-item, on ajoute les statistiques auquelles on associe des variables
        let phyNegation = item.dmgNegation.find(negation => negation.name === 'Phy');
        let phyAmount = phyNegation ? phyNegation.amount : 0;
        let strikeNegation = item.dmgNegation.find(negation => negation.name === 'Strike');
        let strikeAmount = strikeNegation ? strikeNegation.amount : 0;
        let slashNegation = item.dmgNegation.find(negation => negation.name === 'Slash');
        let slashAmount = slashNegation ? slashNegation.amount : 0;
        let pierceNegation = item.dmgNegation.find(negation => negation.name === 'Pierce');
        let pierceAmount = pierceNegation ? pierceNegation.amount : 0;
        let magicNegation = item.dmgNegation.find(negation => negation.name === 'Magic');
        let magicAmount = magicNegation ? magicNegation.amount : 0;
        let fireNegation = item.dmgNegation.find(negation => negation.name === 'Fire');
        let fireAmount = fireNegation ? fireNegation.amount : 0;
        let ligtNegation = item.dmgNegation.find(negation => negation.name === 'Ligt');
        let ligtAmount = ligtNegation ? ligtNegation.amount : 0;
        let holyNegation = item.dmgNegation.find(negation => negation.name === 'Holy');
        let holyAmount = holyNegation ? holyNegation.amount : 0;
        let immunityRes = item.resistance.find(res => res.name === 'Immunity');
        let immAmount = immunityRes ? immunityRes.amount : 0;
        let robustnessRes = item.resistance.find(res => res.name === 'Robustness');
        let robustAmount = robustnessRes ? robustnessRes.amount : 0;
        let focusRes = item.resistance.find(res => res.name === 'Focus');
        let focusAmount = focusRes ? focusRes.amount : 0;
        let poiseRes = item.resistance.find(res => res.name === 'Poise');
        let poiseAmount = poiseRes ? poiseRes.amount : 0;
        let vitalityRes = item.resistance.find(res => res.name === 'Vitality');
        let vitAmount = vitalityRes ? vitalityRes.amount : 0;
        let weight = item.weight;
        divElement.innerHTML = `
          <a id="item-link" class="item-link" href="#">
            <img class="item-image" src="${item.image}" alt="${item.name}" id="item-image">
            <div class="item-name">${item.name}</div>
          </a>
          <div class="caché">
            <div class="item-phy">${phyAmount}</div>
            <div class="item-strike">${strikeAmount}</div>
            <div class="item-slash">${slashAmount}</div>
            <div class="item-pierce">${pierceAmount}</div>
            <div class="item-magic">${magicAmount}</div>
            <div class="item-fire">${fireAmount}</div>
            <div class="item-ligt">${ligtAmount}</div>
            <div class="item-holy">${holyAmount}</div>
            <div class="item-immunity">${immAmount}</div>
            <div class="item-robustness">${robustAmount}</div>
            <div class="item-focus">${focusAmount}</div>
            <div class="item-poise">${poiseAmount}</div>
            <div class="item-vitality">${vitAmount}</div>
            <div class="item-weight">${weight}</div>
          </div>
        `;//on ajoute les statistiques dans le HTML en caché
        
        apiDataContainer.appendChild(divElement);
        addHoverEventsToGalleryItems();
        divElement.querySelector('.item-link').addEventListener('click', function(event) {
          event.preventDefault();
          apiDataContainer.classList.remove("divelements");
          apiDataContainer.classList.add("caché");
          let originalImage = document.getElementById(imageId);
          originalImage.src = item.image;
          originalImage.alt = item.name;
          
          //on défini les statistiques
          for (let stat in stats) {
            stats[stat] = 0;
          }
          //modifie les variables equipped{categorie} en fonction de la catégorie (stock les items équipés)
          if (category === 'Helm') {
            equippedHelm = [];
            item.imageId = imageId;
            equippedHelm.push(item);
          } else if (category === 'Chest Armor') {
            equippedChest = [];
            item.imageId = imageId;
            equippedChest.push(item);
          } else if (category === 'Leg Armor') {
            equippedLegs = [];
            item.imageId = imageId;
            equippedLegs.push(item);
          } else if (category === 'Gauntlets') {
            equippedGauntlets = [];
            item.imageId = imageId;
            equippedGauntlets.push(item);
          }
          //définition des différents attributs qu'on va allez chercher
          const damageTypes = ['Phy', 'Strike', 'Slash', 'Pierce', 'Magic', 'Fire', 'Ligt', 'Holy'];
          const resTypes = ['Immunity', 'Robustness', 'Focus', 'Vitality', 'Poise'];
          //si un casque est équipé, pour chaque nom d'attribut, on attribut sa valeur amount à stats Helm[damageType](grâce à la méthode find)
          if (equippedHelm.length > 0) {
            damageTypes.forEach(damageType => {
              let damageNegation = equippedHelm[0].dmgNegation.find(dmgNegation => dmgNegation.name === damageType);
              statsHelm[damageType] = damageNegation.amount;
            resTypes.forEach(resType => {
              let resistance = equippedHelm[0].resistance.find(resistance => resistance.name === resType);
              statsHelm[resType] = resistance.amount;
              let weight = equippedHelm[0].weight;
              statsHelm['Weight'] = weight;
              })
            });
          };
        if (equippedChest.length > 0) {
          damageTypes.forEach(damageType => {
            let damageNegation = equippedChest[0].dmgNegation.find(dmgNegation => dmgNegation.name === damageType);
            statsChest[damageType] = damageNegation.amount;
          resTypes.forEach(resType => {
            let resistance = equippedChest[0].resistance.find(resistance => resistance.name === resType);
            statsChest[resType] = resistance.amount;
            let weight = equippedChest[0].weight;
            statsChest['Weight'] = weight;
            })
          });
        };
        if (equippedLegs.length > 0) {
          damageTypes.forEach(damageType => {
            let damageNegation = equippedLegs[0].dmgNegation.find(dmgNegation => dmgNegation.name === damageType);
            statsLegs[damageType] = damageNegation.amount;
          resTypes.forEach(resType => {
            let resistance = equippedLegs[0].resistance.find(resistance => resistance.name === resType);
            statsLegs[resType] = resistance.amount;
            let weight = equippedLegs[0].weight;
            statsLegs['Weight'] = weight;
            })
          });
        };
        if (equippedGauntlets.length > 0) {
          damageTypes.forEach(damageType => {
            let damageNegation = equippedGauntlets[0].dmgNegation.find(dmgNegation => dmgNegation.name === damageType);
            statsGauntlets[damageType] = damageNegation.amount;
          resTypes.forEach(resType => {
            let resistance = equippedGauntlets[0].resistance.find(resistance => resistance.name === resType);
            statsGauntlets[resType] = resistance.amount;
            let weight = equippedGauntlets[0].weight;
            statsGauntlets['Weight'] = weight;
            })
          });
        }
        //on défini une variable contenant les stats des 4 armures
        let equippedItemsStats = [statsHelm, statsChest, statsLegs, statsGauntlets];
        //on fait la somme des stats
        equippedItemsStats.forEach(itemStats => {
          for (let stat in itemStats) {
            if (stats.hasOwnProperty(stat)) {
              stats[stat] += itemStats[stat];
            }
          }
        });
        //on mets les stats de dmgNegation dans la div d'id dmgNegation
        let dmgNegationDiv = document.getElementById('dmgNegation');
        let statsToShowdmgneg = ['Phy', 'Strike', 'Slash','Pierce', 'Magic', 'Fire', 'Ligt', 'Holy'];
        let statsHtmldmgneg = '';
        for (let stat in stats) {
          if (statsToShowdmgneg.includes(stat)) {
            statsHtmldmgneg += `<p> ${stats[stat]}</p>`;//on ajoute la valeur de chaque attribut au HTML
          }
        }
        dmgNegationDiv.innerHTML = statsHtmldmgneg;
        //même chose pour la résistance
        let resistanceDiv = document.getElementById('resistance');
        let statsToShowres = ['Immunity', 'Robustness', 'Focus', 'Vitality', 'Poise'];
        let statsHtmlres = '';
        for (let stat in stats) {
          if (statsToShowres.includes(stat)) {
            statsHtmlres += `<p> ${stats[stat]}</p>`;
          }
        }
        resistanceDiv.innerHTML = statsHtmlres;
        //et le poids
        let weightDiv = document.getElementById('weight');
        let statsToShowweight = ['Weight'];
        let statsHtmlweight = '';
        for (let stat in stats) {
          if (statsToShowweight.includes(stat)) {
            let value = stats[stat];
            if (stat === 'Weight') {
              value = Math.round(value * 100) / 100;
            }
            statsHtmlweight += `<p> ${stats[stat]}</p>`;
          }
        }
        weightDiv.innerHTML = statsHtmlweight;
        clearDataContainer(category);
      });
    }
  });
}

function displayDataOnSiteWeapon(weaponData, imageId) {
    const apiDataContainer = document.getElementById('divcasque');
    //on ajoute les items vides
    if (!emptyWeaponAdded) {
      weaponData[3].unshift(emptyWeapon);
      emptyWeaponAdded = true;
    } 
    weaponData[3].forEach(item => {
        if (item.image && item.name) {
          const divElement = document.createElement('div');
          divElement.className = 'gallery-item';
          let phyAttack = item.attack.find(attack => attack.name === 'Phy');
          let phyAmount = phyAttack ? phyAttack.amount : 0;
          divElement.innerHTML = `
          <a id="item-link" class="item-link" href="#">
            <img class="item-image" src="${item.image}" alt="${item.name}" id="item-image">
            <div class="item-name">${item.name}</div>
          </a>
          <div class="caché">
            <div class="attack-phy">${phyAmount}</div>
          </div>
          `;
          apiDataContainer.appendChild(divElement);
          divElement.querySelector('.item-link').addEventListener('click', function(event) {
            event.preventDefault();
            apiDataContainer.classList.remove("divelements");
            apiDataContainer.classList.add("caché");
            let originalImage = document.getElementById(imageId);
            originalImage.src = item.image;
            originalImage.alt = item.name;
            console.log(phyAmount);
            if (cote === 'gauche') {
              document.getElementById('dmggauche').innerHTML = `<p>${phyAmount}</p>
              `;
            } else if (cote === 'droite') {
              document.getElementById('dmgdroite').innerHTML = phyAmount;
            }
            clearDataContainer();
          });
        };
    });
  }


//fonction pour ajouter une fenêtre flottante quand on passe sa souris sur un item (pour les talismans)
function addHoverEventsToGalleryItemstalisman() {
  // On recupère tous les éléments de la galerie
  let galleryItems = document.querySelectorAll('.gallery-item');
  let floatingWindow = document.getElementById('floatingWindow');
  // parcours des éléments
  galleryItems.forEach(item => {
    // on ajoute un écouteur d'événements 'mouseover' à chaque élément
    item.addEventListener('mouseover', () => {
      let itemName = item.querySelector('.item-name').textContent;
      let itemImageSrc = item.querySelector('.item-image').src;
      let itemDescription = item.querySelector('.item-description').textContent;
      // on met les informations dans la fenêtre flottante
      let infoHTML = `
        <h3>${itemName}</h3>
        <img src="${itemImageSrc}" alt="${itemName}">
        <p>${itemDescription}</p>
      `;
      // on met à jour le contenu de la fenêtre flottante avec les informations de l'objet
      floatingWindow.innerHTML = infoHTML
      floatingWindow.style.display = 'block';//affiche la fenêtre flottante
    });
    // cache la fenêtre flottante lorsque la souris quitte l'élément
    item.addEventListener('mouseout', () => {
    floatingWindow.style.display = 'none';
    });
  });
}
//même chose pour les armures
function addHoverEventsToGalleryItems() {
  let galleryItems = document.querySelectorAll('.gallery-item');
  let floatingWindow = document.getElementById('floatingWindow');
  galleryItems.forEach(item => {
    item.addEventListener('mouseover', () => {
      let itemName = item.querySelector('.item-name').textContent;
      let itemImageSrc = item.querySelector('.item-image').src;
      let itemPhy = item.querySelector('.item-phy').textContent;
      let itemStrike = item.querySelector('.item-strike').textContent;
      let itemSlash = item.querySelector('.item-slash').textContent;
      let itemPierce = item.querySelector('.item-pierce').textContent;
      let itemMagic = item.querySelector('.item-magic').textContent;
      let itemFire = item.querySelector('.item-fire').textContent;
      let itemLigt = item.querySelector('.item-ligt').textContent;
      let itemHoly = item.querySelector('.item-holy').textContent;
      let itemImmunity = item.querySelector('.item-immunity').textContent;
      let itemRobustness = item.querySelector('.item-robustness').textContent;
      let itemFocus = item.querySelector('.item-focus').textContent;
      let itemVitality = item.querySelector('.item-vitality').textContent;
      let itemPoise = item.querySelector('.item-poise').textContent;
      let itemWeight = item.querySelector('.item-weight').textContent;
      let itemInfoHtml = `
        <div class="floating-stats">
          <img class="floating-image" src="${itemImageSrc}" alt="${itemName}">
          <h2 class="floating-name">${itemName}</h2>
          <table class="floating-stats-table">
            <tr>
              <th>Stat</th>
              <th>Valeur</th>
            </tr>
            <tr>
              <td>Phy</td>
              <td>${itemPhy}</td>
            </tr>
            <tr>
              <td>Strike</td>
              <td>${itemStrike}</td>
            </tr>
            <tr>
              <td>Slash</td>
              <td>${itemSlash}</td>
            </tr>
            <tr>
              <td>Pierce</td>
              <td>${itemPierce}</td>
            </tr>
            <tr>
              <td>Magic</td>
              <td>${itemMagic}</td>
            </tr>
            <tr>
              <td>Fire</td>
              <td>${itemFire}</td>
            </tr>
            <tr>
              <td>Ligt</td>
              <td>${itemLigt}</td>
            </tr>
            <tr>
              <td>Holy</td>
              <td>${itemHoly}</td>
            </tr>
            <tr>
              <td>Immunity</td>
              <td>${itemImmunity}</td>
            </tr>
            <tr>
              <td>Robustness</td>
              <td>${itemRobustness}</td>
            </tr>
            <tr>
              <td>Focus</td>
              <td>${itemFocus}</td>
            </tr>
            <tr>
              <td>Vitality</td>
              <td>${itemVitality}</td>
            </tr>
            <tr>
              <td>Poise</td>
              <td>${itemPoise}</td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>${itemWeight}</td>
            </tr>
          </table>
        </div>
      `;
      floatingWindow.innerHTML = itemInfoHtml;
      floatingWindow.style.display = 'block';
    });
    item.addEventListener('mouseout', () => {
        floatingWindow.style.display = 'none';
    });
  });
}
//la fonction utilisée pour réinitialisé le contenu de divcasque (là où s'affichent les données de l'api)
function clearDataContainer() {
  //remise en false des variables permettant de savoir si les objets sont déja affichés une fois
  emptyHelmAdded = false;
  emptyChestAdded = false;
  emptyLegsAdded = false;
  emptyGauntletsAdded = false;
  emptyTalismanAdded = false;
  emptyWeaponAdded = false;
  //on remplace entièrement le html de divcasque
  const apiDataContainer = document.getElementById('divcasque');
  apiDataContainer.innerHTML = `
  <div class="searchBar" id="searchBarContainer">
    <input type="text" id="searchBar" onkeyup="searchFunction()" placeholder="Search for names..">
    <button class="close-button" id="close-button">X</button>
  </div>
  `;
  // on cache la fenêtre flottante (au cas où)
  floatingWindow.style.display = 'none';
  apiDataContainer.classList.remove("divelements");
  apiDataContainer.classList.add("caché");
  // on ajoute un gestionnaire d'événements pour le bouton "Fermer"
  document.getElementById('close-button').addEventListener('click', function() {
    var afficheElement = document.getElementById("divcasque");
    var isHidden = afficheElement.classList.contains("caché");
    if (isHidden) {
      afficheElement.classList.remove("caché");
      afficheElement.classList.add("divelements");
    } else {
      afficheElement.classList.remove("divelements");
      afficheElement.classList.add("caché");
      clearDataContainer();
    }
    });
  }
//fonction de recherche
function searchFunction() {
  // on déclare les variables
  let input, filter, div,divs, txtValue;
  input = document.getElementById('searchBar');
  filter = input.value.toUpperCase();
  div = document.getElementById('divcasque');
  divs = div.getElementsByClassName('gallery-item');
  // On fait une boucle entre tous les objets, et on affiche seulement ceux qui correspondent à la recherche
  for (let i = 0; i < divs.length; i++) {
    txtValue = divs[i].textContent || divs[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
        divs[i].style.display = "";
    } else {
        divs[i].style.display = "none";
    }
  }
}