let equippedHelm = [];
document.addEventListener('DOMContentLoaded', function() {

    // Sélectionne l'élément avec l'ID 'casque' et ajoute un écouteur de clic
    document.getElementById('casque').addEventListener('click', function() {
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

            divElement.innerHTML = `
                <a id="item-link" class="item-link" href="#">
                    <img class="item-image" src="${item.image}" alt="${item.name}" id="item-image">
                    <div class="item-name">${item.name}</div>
                </a>
            `;
            apiDataContainer.appendChild(divElement);

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

                if (category === 'Helm') {
                  equippedHelm = [];
                  equippedHelm.push(item);
                  console.log(equippedHelm);
                } else if (category === 'Chest Armor') {
                  equippedChest = [];
                  equippedChest.push(item);
                  console.log(equippedChest);
                } else if (category === 'Leg Armor') {
                  equippedLeg = [];
                  equippedLeg.push(item);
                  console.log(equippedLeg);
                } else if (category === 'Gauntlets') {
                  equippedGauntlets = [];
                  equippedGauntlets.push(item);
                  console.log(equippedGauntlets);
                }
                if (equippedHelm.length > 0) {
                  let helmPhysique = equippedHelm[0].dmNegation.find(dmgNegation => dmgNegation.name === 'Phy');
                  if (helmPhysique) {
                    console.log(helmPhysique.amount);
                  }else{
                    console.log("Helm sans attribut");
                  }
                } else {
                  console.log("Helm non trouve");
                }
                let equippedChest = [];
                let equippedLeg = [];
                let equippedGauntlets = [];


                clearDataContainer();
            });
        }
    });
}


function clearDataContainer() {
    const apiDataContainer = document.getElementById('divcasque');
    apiDataContainer.innerHTML = '<button class="close-button" id="close-button">X</button>';
  }


// Ajouter un gestionnaire d'événements pour le bouton "Fermer"
document.getElementById('close-button').addEventListener('click', function() {
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
});