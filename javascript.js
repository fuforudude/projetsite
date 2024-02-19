clearDataContainer();
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
let equippedHelm = [];
let equippedChest = [];
let equippedLegs = [];
let equippedGauntlets = [];
let equippedItems = [];
let buttonId;
document.addEventListener('DOMContentLoaded', function() {

    // Sélectionne l'élément avec l'ID 'casque' et ajoute un écouteur de clic
    document.getElementById('casque').addEventListener('click', function() {
      let element = document.getElementById('solo-button');
      element.id ='empty-Helm';

        // Sélectionne l'élément avec l'ID 'caché'
        var afficheElement = document.getElementById("divcasque");

        // Vérifie si l'élément a la classe 'caché'
        var isHidden = afficheElement.classList.contains("caché");

        // Si l'élément est caché, le montre. Sinon, le cache.
        if (isHidden) {
            afficheElement.classList.remove("caché");
            afficheElement.classList.add("divelements");
        } else {
            afficheElement.classList.remove("divelements");
            afficheElement.classList.add("caché");
            clearDataContainer();
        }
        fetchDataFromAPI1('Helm', 'casqueicone');
        fetchDataFromAPI2('Helm', 'casqueicone');
        fetchDataFromAPI3('Helm', 'casqueicone');
        fetchDataFromAPI4('Helm', 'casqueicone');
        fetchDataFromAPI5('Helm', 'casqueicone');
    });
    document.getElementById('buste').addEventListener('click', function() {
      let element = document.getElementById('solo-button');
      element.id ='empty-Chest Armor';
        // Sélectionne l'élément avec l'ID 'caché'
        var afficheElement = document.getElementById("divcasque");

        // Vérifie si l'élément a la classe 'caché'
        var isHidden = afficheElement.classList.contains("caché");

        // Si l'élément est caché, le montre. Sinon, le cache.
        if (isHidden) {
            afficheElement.classList.remove("caché");
            afficheElement.classList.add("divelements");
        } else {
            afficheElement.classList.remove("divelements");
            afficheElement.classList.add("caché");
            clearDataContainer();
        }
        fetchDataFromAPI1('Chest Armor', 'busteicone');
        fetchDataFromAPI2('Chest Armor', 'busteicone');
        fetchDataFromAPI3('Chest Armor', 'busteicone');
        fetchDataFromAPI4('Chest Armor', 'busteicone');
        fetchDataFromAPI5('Chest Armor', 'busteicone');
    });
    document.getElementById('gants').addEventListener('click', function() {
      let element = document.getElementById('solo-button');
      element.id ='empty-Gauntlets';
        // Sélectionne l'élément avec l'ID 'caché'
        var afficheElement = document.getElementById("divcasque");

        // Vérifie si l'élément a la classe 'caché'
        var isHidden = afficheElement.classList.contains("caché");

        // Si l'élément est caché, le montre. Sinon, le cache.
        if (isHidden) {
            afficheElement.classList.remove("caché");
            afficheElement.classList.add("divelements");
        } else {
            afficheElement.classList.remove("divelements");
            afficheElement.classList.add("caché");
            clearDataContainer();
        }
        fetchDataFromAPI1('Gauntlets', 'gantsicone');
        fetchDataFromAPI2('Gauntlets', 'gantsicone');
        fetchDataFromAPI3('Gauntlets', 'gantsicone');
        fetchDataFromAPI4('Gauntlets', 'gantsicone');
        fetchDataFromAPI5('Gauntlets', 'gantsicone');
    });
    document.getElementById('jambieres').addEventListener('click', function() {
      let element = document.getElementById('solo-button');
      element.id ='empty-Leg Armor';
        // Sélectionne l'élément avec l'ID 'caché'
        var afficheElement = document.getElementById("divcasque");

        // Vérifie si l'élément a la classe 'caché'
        var isHidden = afficheElement.classList.contains("caché");

        // Si l'élément est caché, le montre. Sinon, le cache.
        if (isHidden) {
            afficheElement.classList.remove("caché");
            afficheElement.classList.add("divelements");
        } else {
            afficheElement.classList.remove("divelements");
            afficheElement.classList.add("caché");
            clearDataContainer();
        }
        fetchDataFromAPI1('Leg Armor', 'jambieresicone');
        fetchDataFromAPI2('Leg Armor', 'jambieresicone');
        fetchDataFromAPI3('Leg Armor', 'jambieresicone');
        fetchDataFromAPI4('Leg Armor', 'jambieresicone');
        fetchDataFromAPI5('Leg Armor', 'jambieresicone');
    });
    document.getElementById('talisman1').addEventListener('click', function() {
        // Sélectionne l'élément avec l'ID 'caché'
        var afficheElement = document.getElementById("divcasque");

        // Vérifie si l'élément a la classe 'caché'
        var isHidden = afficheElement.classList.contains("caché");

        // Si l'élément est caché, le montre. Sinon, le cache.
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
        // Sélectionne l'élément avec l'ID 'caché'
        var afficheElement = document.getElementById("divcasque");

        // Vérifie si l'élément a la classe 'caché'
        var isHidden = afficheElement.classList.contains("caché");

        // Si l'élément est caché, le montre. Sinon, le cache.
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
    document.getElementById('talisman3').addEventListener('click', function() {
        // Sélectionne l'élément avec l'ID 'caché'
        var afficheElement = document.getElementById("divcasque");

        // Vérifie si l'élement a la classe 'caché'
        var isHidden = afficheElement.classList.contains("caché");

        // Si l'élément est caché, le montre. Sinon, le cache.
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
    document.getElementById('talisman4').addEventListener('click', function() {
        // Sélectionne l'élément avec l'ID 'caché'
        var afficheElement = document.getElementById("divcasque");

        // Vérifie si l'élement a la classe 'caché'
        var isHidden = afficheElement.classList.contains("caché");

        // Si l' élément est caché, le montre. Sinon, le cache.
        if (isHidden) {
            afficheElement.classList.remove("caché");
            afficheElement.classList.add("divelements");
        } else {
            afficheElement.classList.remove("divelements");
            afficheElement.classList.add("caché");
            clearDataContainer();
        }
        fetchDataFromAPItalisman('talisman4icone');
        addHoverEventsToGalleryItems();
    });
});

  function fetchDataFromAPI1(category, imageId) {
    const apiUrl = 'https://eldenring.fanapis.com/api/armors?limit=568&page=1'; 
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        let armorData;
        if (Array.isArray(data)) {
          armorData = data;
        } else if (typeof data === 'object' && data !== null) {
          // Convertir l'objet en tableau
          armorData = Object.values(data);
        } else {
          console.error('Les données de l\'API ne sont pas dans un format gérable.');
          return;
        }
      
        displayDataOnSite(armorData, category, imageId);
      })
  }
  function fetchDataFromAPI2(category, imageId) {
    const apiUrl = 'https://eldenring.fanapis.com/api/armors?limit=568&page=2';
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        let armorData;
        if (Array.isArray(data)) {
          armorData = data;
        } else if (typeof data === 'object' && data !== null) {
          // Convertir l'objet en tableau
          armorData = Object.values(data);
        } else {
          console.error('Les données de l\'API ne sont pas dans un format gérable.');
          return;
        }
      
        displayDataOnSite(armorData, category, imageId);
      })
  }
  function fetchDataFromAPI3(category, imageId) {
    const apiUrl = 'https://eldenring.fanapis.com/api/armors?limit=568&page=3';
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        let armorData;
        if (Array.isArray(data)) {
          armorData = data;
        } else if (typeof data === 'object' && data !== null) {
          // Convertir l'objet en tableau
          armorData = Object.values(data);
        } else {
          console.error('Les données de l\'API ne sont pas dans un format gérable.');
          return;
        }
      
        displayDataOnSite(armorData, category, imageId);
      })
  }
  function fetchDataFromAPI4(category, imageId) {
    const apiUrl = 'https://eldenring.fanapis.com/api/armors?limit=568&page=4';
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        let armorData;
        if (Array.isArray(data)) {
          armorData = data;
        } else if (typeof data === 'object' && data !== null) {
          // Convertir l'objet en tableau
          armorData = Object.values(data);
        } else {
          console.error('Les données de l\'API ne sont pas dans un format gérable.');
          return;
        }
      
        displayDataOnSite(armorData, category, imageId);
      })
  }
  function fetchDataFromAPI5(category, imageId){
    const apiUrl = 'https://eldenring.fanapis.com/api/armors?limit=568&page=5';
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        let armorData;
        if (Array.isArray(data)) {
          armorData = data;
        } else if (typeof data === 'object' && data !== null) {
          // Convertir l'objet en tableau
          armorData = Object.values(data);
        } else {
          console.error('Les données de l\'API ne sont pas dans un format gérable.');
          return;
        }
      
        displayDataOnSite(armorData, category, imageId);
      })
  }
  function fetchDataFromAPItalisman(imageId){
    const apiUrl = 'https://eldenring.fanapis.com/api/talismans?limit=100';
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data);
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
      })
    
  }
  function displayDataOnSitetalisman(talismanData, imageId) {
    const apiDataContainer = document.getElementById('divcasque');

    talismanData[3].forEach(item => {
      if (item.image && item.name) {
        const divElement = document.createElement('div');
        divElement.className = 'gallery-item';

        divElement.innerHTML = `
          <a id="item-link" class="item-link" href="#">
            <img class="item-image" src="${item.image}" alt="${item.name}" id="item-image">
            <div class="item-name">${item.name}</div>
          </a>
        `;
        apiDataContainer.appendChild(divElement);

        // Ajoute unouteur d'événements à la balise "a"
        divElement.querySelector('.item-link').addEventListener('click', function(event) {
          event.preventDefault(); // Empêche le comportement par défaut du clic sur le lien

          // Cache l' élément 'divcasque'
          apiDataContainer.classList.remove("divelements");
          apiDataContainer.classList.add("caché");

          // Met a jour l'image de l'image
          const itemImage = document.getElementById(imageId);
          itemImage.src = item.image;
          itemImage.alt = item.name;
          console.log(buttonId);


          clearDataContainer();
        })
      }
    });
  }
function displayDataOnSite(data, category, imageId) {
    const apiDataContainer = document.getElementById('divcasque');


    data[3].forEach(item => {
        if (item.image && item.name && item.category === category) {
            const divElement = document.createElement('div');
            divElement.className = 'gallery-item';
           
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
            `;
            
            apiDataContainer.appendChild(divElement);
            addHoverEventsToGalleryItems();
            soloButton();


            // Ajoute un écouteur d'événements à la balise "a"
            divElement.querySelector('.item-link').addEventListener('click', function(event) {
                event.preventDefault(); // Empêche le comportement par défaut du clic sur le lien
                
                // Cache l'élément 'divcasque'
                apiDataContainer.classList.remove("divelements");
                apiDataContainer.classList.add("caché");

                // Met à jour l'image d'origine
                let originalImage = document.getElementById(imageId);
                originalImage.src = item.image;
                originalImage.alt = item.name;
                
                for (let stat in stats) {
                  stats[stat] = 0;
                }

                

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
                const damageTypes = ['Phy', 'Strike', 'Slash', 'Pierce', 'Magic', 'Fire', 'Ligt', 'Holy'];
                const resTypes = ['Immunity', 'Robustness', 'Focus', 'Vitality', 'Poise'];
                if (equippedHelm.length > 0) {
                  damageTypes.forEach(damageType => {
                    let damageNegation = equippedHelm[0].dmgNegation.find(dmgNegation => dmgNegation.name === damageType);
                    if (damageNegation) {
                      statsHelm[damageType] = damageNegation.amount;
                    } else {
                      console.log(`Helm sans attribut ${damageType}`);
                    }
                  resTypes.forEach(resType => {
                    let resistance = equippedHelm[0].resistance.find(resistance => resistance.name === resType);
                    if (resistance) {
                      statsHelm[resType] = resistance.amount;
                    } else {
                      console.log(`Helm sans attribut ${resType}`);
                    }
                    let weight = equippedHelm[0].weight;
                    statsHelm['Weight'] = weight;
                    })
                  });
                };
                if (equippedChest.length > 0) {
                  damageTypes.forEach(damageType => {
                    let damageNegation = equippedChest[0].dmgNegation.find(dmgNegation => dmgNegation.name === damageType);
                    if (damageNegation) {
                      statsChest[damageType] = damageNegation.amount;
                    } else {
                      console.log(`Chest sans attribut ${damageType}`);
                    }
                  resTypes.forEach(resType => {
                    let resistance = equippedChest[0].resistance.find(resistance => resistance.name === resType);
                    if (resistance) {
                      statsChest[resType] = resistance.amount;
                    } else {
                      console.log(`Chest sans attribut ${resType}`);
                    }
                    let weight = equippedChest[0].weight;
                    statsChest['Weight'] = weight;
                    })
                  });
                };
                if (equippedLegs.length > 0) {
                  damageTypes.forEach(damageType => {
                    let damageNegation = equippedLegs[0].dmgNegation.find(dmgNegation => dmgNegation.name === damageType);
                    if (damageNegation) {
                      statsLegs[damageType] = damageNegation.amount;
                    } else {
                      console.log(`Legs sans attribut ${damageType}`);
                    }
                  resTypes.forEach(resType => {
                    let resistance = equippedLegs[0].resistance.find(resistance => resistance.name === resType);
                    if (resistance) {
                      statsLegs[resType] = resistance.amount;
                    } else {
                      console.log(`Legs sans attribut ${resType}`);
                    }
                    let weight = equippedLegs[0].weight;
                    statsLegs['Weight'] = weight;
                    })
                  });
                  console.log(statsLegs);
                };
                if (equippedGauntlets.length > 0) {
                  damageTypes.forEach(damageType => {
                    let damageNegation = equippedGauntlets[0].dmgNegation.find(dmgNegation => dmgNegation.name === damageType);
                    if (damageNegation) {
                      statsGauntlets[damageType] = damageNegation.amount;
                    } else {
                      console.log(`Gauntlets sans attribut ${damageType}`);
                    }
                  resTypes.forEach(resType => {
                    let resistance = equippedGauntlets[0].resistance.find(resistance => resistance.name === resType);
                    if (resistance) {
                      statsGauntlets[resType] = resistance.amount;
                    } else {
                      console.log(`Gauntlets sans attribut ${resType}`);
                    }
                    let weight = equippedGauntlets[0].weight;
                    statsGauntlets['Weight'] = weight;
                    })
                  });
                  console.log(statsGauntlets);
                }

                let equippedItemsStats = [statsHelm, statsChest, statsLegs, statsGauntlets];

                equippedItemsStats.forEach(itemStats => {
                  for (let stat in itemStats) {
                    if (stats.hasOwnProperty(stat)) {
                      stats[stat] += itemStats[stat];
                    }
                  }
                });
                //mettre ces stats dans la div d'id dmgNegation
                let dmgNegationDiv = document.getElementById('dmgNegation');

                let statsToShowdmgneg = ['Phy', 'Strike', 'Slash','Pierce', 'Magic', 'Fire', 'Ligt', 'Holy'];
                
                let statsHtmldmgneg = '';
                for (let stat in stats) {
                  if (statsToShowdmgneg.includes(stat)) {
                    statsHtmldmgneg += `<p> ${stats[stat]}</p>`;
                  }
                }
                dmgNegationDiv.innerHTML = statsHtmldmgneg;
                let resistanceDiv = document.getElementById('resistance');

                let statsToShowres = ['Immunity', 'Robustness', 'Focus', 'Vitality', 'Poise'];
                
                let statsHtmlres = '';
                for (let stat in stats) {
                  if (statsToShowres.includes(stat)) {
                    statsHtmlres += `<p> ${stats[stat]}</p>`;
                  }
                }
                resistanceDiv.innerHTML = statsHtmlres;
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




  function addHoverEventsToGalleryItems() {
    // Récupérer tous les éléments de la galerie
    let galleryItems = document.querySelectorAll('.gallery-item');

    // Récupérer la fenêtre flottante
    let floatingWindow = document.getElementById('floatingWindow');

    // Parcourir tous les éléments de la galerie
    galleryItems.forEach(item => {
        // Ajouter un écouteur d'événements 'mouseover' à chaque élément
        item.addEventListener('mouseover', () => {
            // Récupérer les informations de l'objet
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

            // Créer le HTML pour les informations de l'objet
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

            // Mettre à jour le contenu de la fenêtre flottante avec les informations de l'objet
            floatingWindow.innerHTML = itemInfoHtml;

            // Afficher la fenêtre flottante
            floatingWindow.style.display = 'block';
        });

        // Ajouter un écouteur d'événements 'mouseout' pour cacher la fenêtre flottante lorsque la souris quitte l'élément
        item.addEventListener('mouseout', () => {
            floatingWindow.style.display = 'none';
        });
    });
}

function soloButton() {
  let buttons = document.getElementsByClassName('close-solo-button');

  for(let i = 0; i < buttons.length; i++) {
    let button = buttons[i];

    button.addEventListener('click', function() {
      if (button.id === 'empty-Helm') {
        document.getElementById('casqueicone').src = 'images/Icones/armor_set_slot_elden_ring_wiki_guide.JPEG';
        resetHelmStats();
        console.log(statsHelm);
      } else if (button.id === 'empty-Chest Armor') {
        document.getElementById('busteicone').src = 'images/Icones/armor_set_slot_elden_ring_wiki_guide.JPEG';
        resetChestStats();
        console.log(statsChest);
      } else if (button.id === 'empty-Leg Armor') {
        document.getElementById('jambieresicone').src = 'images/Icones/armor_set_slot_elden_ring_wiki_guide.JPEG';
        resetLegsStats();
        console.log(statsLegs);
      } else if (button.id === 'empty-Gauntlets') {
        document.getElementById('gantsicone').src = 'images/Icones/armor_set_slot_elden_ring_wiki_guide.JPEG';
        resetGauntletsStats();
        console.log(statsGauntlets);
      }
      // Sélectionne l'élément avec l'ID 'caché'
      var afficheElement = document.getElementById("divcasque");
      // Vérifie si l'élément a la classe 'caché'
      var isHidden = afficheElement.classList.contains("caché");
    
      // Si l'élément est caché, le montre. Sinon, le cache.
      if (isHidden) {
          afficheElement.classList.remove("caché");
          afficheElement.classList.add("divelements");
          clearDataContainer();
      } else {
          afficheElement.classList.remove("divelements");
          afficheElement.classList.add("caché");
          clearDataContainer();
      }
    });
  }
}

function clearDataContainer() {
  const apiDataContainer = document.getElementById('divcasque');
  apiDataContainer.innerHTML = `
  <div class="searchBar" id="searchBarContainer">
    <input type="text" id="searchBar" onkeyup="searchFunction()" placeholder="Search for names..">
    <button class="close-button" id="close-button">X</button>
  </div>
  <button id="solo-button" class="item-link">
    <img id="icone_armure" src="images/Icones/armor_set_slot_elden_ring_wiki_guide.JPEG">
    <p id="empty_nom">Empty</p>
  </button>
  `;
    floatingWindow.style.display = 'none';
  apiDataContainer.classList.remove("divelements");
  apiDataContainer.classList.add("caché");
    // Ajouter un gestionnaire d'événements pour le bouton "Fermer"
  document.getElementById('close-button').addEventListener('click', function() {
    // Sélectionne l'élément avec l'ID 'caché'
    var afficheElement = document.getElementById("divcasque");
    // Vérifie si l'él
    var isHidden = afficheElement.classList.contains("caché");
    // Si l'élément est caché, le montre. Sinon, le cache.
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
  function resetHelmStats() {
    let statsHelm = {
      'Phy': 0,
      'Strike': 0,
      'Slash': 0,
      'Pierce': 0,
      'Magic': 0,
      'Fire': 0,
      'Ligt': 0,
      'Holy': 0,
      'Immunity': 0,
      'Robustness': 0,
      'Focus': 0,
      'Vitality': 0,
      'Poise': 0,
      'Weight': 0
    };
    return statsHelm;
  }
  function resetChestStats() {
    let statsChest = {
      'Phy': 0,
      'Strike': 0,
      'Slash': 0,
      'Pierce': 0,
      'Magic': 0,
      'Fire': 0,
      'Ligt': 0,
      'Holy': 0,
      'Immunity': 0,
      'Robustness': 0,
      'Focus': 0,
      'Vitality': 0,
      'Poise': 0,
      'Weight': 0
    };
    return statsChest;
  }
  function resetLegsStats() {
    let statsLegs = {
      'Phy': 0,
      'Strike': 0,
      'Slash': 0,
      'Pierce': 0,
      'Magic': 0,
      'Fire': 0,
      'Ligt': 0,
      'Holy': 0,
      'Immunity': 0,
      'Robustness': 0,
      'Focus': 0,
      'Vitality': 0,
      'Poise': 0,
      'Weight': 0
    };
    return statsLegs;
  }
  function resetGauntletsStats() {
    let statsGauntlets = {
      'Phy': 0,
      'Strike': 0,
      'Slash': 0,
      'Pierce': 0,
      'Magic': 0,
      'Fire': 0,
      'Ligt': 0,
      'Holy': 0,
      'Immunity': 0,
      'Robustness': 0,
      'Focus': 0,
      'Vitality': 0,
      'Poise': 0,
      'Weight': 0
    };
    return statsGauntlets;
  }
  function searchFunction() {
    // Declare variables
    let input, filter, div,divs, txtValue;
    input = document.getElementById('searchBar');
    filter = input.value.toUpperCase();
    div = document.getElementById('divcasque');
    divs = div.getElementsByClassName('gallery-item');

    // Loop through all list items, and hide those who don't match the search query
    for (let i = 0; i < divs.length; i++) {
        txtValue = divs[i].textContent || divs[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            divs[i].style.display = "";
        } else {
            divs[i].style.display = "none";
        }
    }
}
