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
        }

        // Appelle la fonction fetchDataFromAPI uniquement lorsque l'élément est visible
        if (isHidden) {
            fetchDataFromAPI();
        }
    });
});
  function fetchDataFromAPI() {
    const apiUrl = 'https://eldenring.fanapis.com/api/armors?limit=568&page=1'; 
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data);
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
      
        displayDataOnSite(armorData);
      })
  }
  
  function displayDataOnSite(data) {
    console.log(data[3]);
    console.log('displayDataOnSite is called');
    const apiDataContainer = document.getElementById('divcasque');

    data[3].forEach(item => {
        console.log(item.image, item.name);
        if (item.image && item.name) {
            const divElement = document.createElement('div');
            divElement.className = 'gallery-item';

            divElement.innerHTML = `
                <a class="item-link" href="#">
                    <img class="item-image" src="${item.image}" alt="${item.name}">
                    <div class="item-name">${item.name}</div>
                </a>
            `;

            // Ajouter un gestionnaire d'événements pour le bouton "Fermer"
            const closeButton = divElement.querySelector('.close-button');
            closeButton.addEventListener('click', function(event) {
                // Empêche le clic sur le bouton de déclencher le clic sur le lien parent
                event.preventDefault();
            
                // Cache l'élément divcasque
                apiDataContainer.classList.remove("divelements");
                apiDataContainer.classList.add("caché");
            
                // Supprime tous les éléments enfants de divcasque
                while (apiDataContainer.firstChild) {
                    apiDataContainer.removeChild(apiDataContainer.firstChild);
                }
            });

            console.log(divElement);
            apiDataContainer.appendChild(divElement);
        }
    });
}

//#######################################################################################################################################
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('buste').addEventListener('click', fetchDataFromAPI);
  console.log("Button clicked!");
});

function fetchDataFromAPI() {
  const apiUrl = 'https://eldenring.fanapis.com/api/armors?limit=568&page=2'; 
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data);
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
    
      displayDataOnSite(armorData);
    })
}

function displayDataOnSite(data) {
  console.log(data[3]);
  console.log('displayDataOnSite is called');
  const apiDataContainer = document.getElementById('divcasque');
      data[3].forEach(item => {
        console.log(item.image, item.name);
        if (item.image && item.name) {
          const divElement = document.createElement('div');
          divElement.className = 'gallery-item';
      
          divElement.innerHTML = `
            <a class="item-link" href="#">
              <img class="item-image" src="${item.image}" alt="${item.name}">
              <div class="item-name">${item.name}</div>
            </a>
          `;
          console.log(divElement);
          apiDataContainer.appendChild(divElement);
        }
      });
    }
//############################################################################################################################################
    document.addEventListener('DOMContentLoaded', function() {
      document.getElementById('gants').addEventListener('click', fetchDataFromAPI);
      console.log("Button clicked!");
    });
    
function fetchDataFromAPI() {
  const apiUrl = 'https://eldenring.fanapis.com/api/armors?limit=568&page=3'; 
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data);
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
    
      displayDataOnSite(armorData);
    })
}

function displayDataOnSite(data) {
  console.log(data[3]);
  console.log('displayDataOnSite is called');
  const apiDataContainer = document.getElementById('divcasque');
      data[3].forEach(item => {
        console.log(item.image, item.name);
        if (item.image && item.name) {
          const divElement = document.createElement('div');
          divElement.className = 'gallery-item';
      
          divElement.innerHTML = `
            <a class="item-link" href="#">
              <img class="item-image" src="${item.image}" alt="${item.name}">
              <div class="item-name">${item.name}</div>
            </a>
          `;
          console.log(divElement);
          apiDataContainer.appendChild(divElement);
        }
      });
    }
//######################################################################################################################################
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('jambieres').addEventListener('click', fetchDataFromAPI);
  console.log("Button clicked!");
});

function fetchDataFromAPI() {
  const apiUrl = 'https://eldenring.fanapis.com/api/armors?limit=568&page=1'; 
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data);
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
    
      displayDataOnSite(armorData);
    })
}

function displayDataOnSite(data) {
  console.log(data[3]);
  console.log('displayDataOnSite is called');
  const apiDataContainer = document.getElementById('divcasque');
      data[3].forEach(item => {
        console.log(item.image, item.name);
        if (item.image && item.name) {
          const divElement = document.createElement('div');
          divElement.className = 'gallery-item';
      
          divElement.innerHTML = `
            <a class="item-link" href="#">
              <img class="item-image" src="${item.image}" alt="${item.name}">
              <div class="item-name">${item.name}</div>
            </a>
          `;
          console.log(divElement);
          apiDataContainer.appendChild(divElement);
        }
      });
    }
//######################################################################################################################################
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('set_complet').addEventListener('click', fetchDataFromAPI);
  console.log("Button clicked!");
});

function fetchDataFromAPI() {
  const apiUrl = 'https://eldenring.fanapis.com/api/armors?limit=568&page=1'; 
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data);
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
    
      displayDataOnSite(armorData);
    })
}

function displayDataOnSite(data) {
  console.log(data[3]);
  console.log('displayDataOnSite is called');
  const apiDataContainer = document.getElementById('divcasque');
      data[3].forEach(item => {
        console.log(item.image, item.name);
        if (item.image && item.name) {
          const divElement = document.createElement('div');
          divElement.className = 'gallery-item';
      
          divElement.innerHTML = `
            <a class="item-link" href="#">
              <img class="item-image" src="${item.image}" alt="${item.name}">
              <div class="item-name">${item.name}</div>
            </a>
          `;
          console.log(divElement);
          apiDataContainer.appendChild(divElement);
        }
      });
    }
//######################################################################################################################################
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('rune_majeure').addEventListener('click', fetchDataFromAPI);
  console.log("Button clicked!");
});

function fetchDataFromAPI() {
  const apiUrl = 'https://eldenring.fanapis.com/api/armors?limit=568&page=1'; 
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data);
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
    
      displayDataOnSite(armorData);
    })
}

function displayDataOnSite(data) {
  console.log(data[3]);
  console.log('displayDataOnSite is called');
  const apiDataContainer = document.getElementById('divcasque');
      data[3].forEach(item => {
        console.log(item.image, item.name);
        if (item.image && item.name) {
          const divElement = document.createElement('div');
          divElement.className = 'gallery-item';
      
          divElement.innerHTML = `
            <a class="item-link" href="#">
              <img class="item-image" src="${item.image}" alt="${item.name}">
              <div class="item-name">${item.name}</div>
            </a>
          `;
          console.log(divElement);
          apiDataContainer.appendChild(divElement);
        }
      });
    }
//######################################################################################################################################
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('talisman1').addEventListener('click', fetchDataFromAPI);
  console.log("Button clicked!");
});

function fetchDataFromAPI() {
  const apiUrl = 'https://eldenring.fanapis.com/api/armors?limit=568&page=1'; 
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data);
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
    
      displayDataOnSite(armorData);
    })
}

function displayDataOnSite(data) {
  console.log(data[3]);
  console.log('displayDataOnSite is called');
  const apiDataContainer = document.getElementById('divcasque');
      data[3].forEach(item => {
        console.log(item.image, item.name);
        if (item.image && item.name) {
          const divElement = document.createElement('div');
          divElement.className = 'gallery-item';
      
          divElement.innerHTML = `
            <a class="item-link" href="#">
              <img class="item-image" src="${item.image}" alt="${item.name}">
              <div class="item-name">${item.name}</div>
            </a>
          `;
          console.log(divElement);
          apiDataContainer.appendChild(divElement);
        }
      });
    }
//######################################################################################################################################
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('talisman2').addEventListener('click', fetchDataFromAPI);
  console.log("Button clicked!");
});

function fetchDataFromAPI() {
  const apiUrl = 'https://eldenring.fanapis.com/api/armors?limit=568&page=1'; 
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data);
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
    
      displayDataOnSite(armorData);
    })
}

function displayDataOnSite(data) {
  console.log(data[3]);
  console.log('displayDataOnSite is called');
  const apiDataContainer = document.getElementById('divcasque');
      data[3].forEach(item => {
        console.log(item.image, item.name);
        if (item.image && item.name) {
          const divElement = document.createElement('div');
          divElement.className = 'gallery-item';
      
          divElement.innerHTML = `
            <a class="item-link" href="#">
              <img class="item-image" src="${item.image}" alt="${item.name}">
              <div class="item-name">${item.name}</div>
            </a>
          `;
          console.log(divElement);
          apiDataContainer.appendChild(divElement);
        }
      });
    }
//######################################################################################################################################
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('talisman3').addEventListener('click', fetchDataFromAPI);
  console.log("Button clicked!");
});

function fetchDataFromAPI() {
  const apiUrl = 'https://eldenring.fanapis.com/api/armors?limit=568&page=1'; 
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data);
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
    
      displayDataOnSite(armorData);
    })
}

function displayDataOnSite(data) {
  console.log(data[3]);
  console.log('displayDataOnSite is called');
  const apiDataContainer = document.getElementById('divcasque');
      data[3].forEach(item => {
        console.log(item.image, item.name);
        if (item.image && item.name) {
          const divElement = document.createElement('div');
          divElement.className = 'gallery-item';
      
          divElement.innerHTML = `
            <a class="item-link" href="#">
              <img class="item-image" src="${item.image}" alt="${item.name}">
              <div class="item-name">${item.name}</div>
            </a>
          `;
          console.log(divElement);
          apiDataContainer.appendChild(divElement);
        }
      });
    }

//######################################################################################################################################
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('talisman4').addEventListener('click', fetchDataFromAPI);
  console.log("Button clicked!");
});

function fetchDataFromAPI() {
  const apiUrl = 'https://eldenring.fanapis.com/api/armors?limit=568&page=1'; 
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data);
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
    
      displayDataOnSite(armorData);
    })
}

function displayDataOnSite(data) {
  console.log(data[3]);
  console.log('displayDataOnSite is called');
  const apiDataContainer = document.getElementById('divcasque');
      data[3].forEach(item => {
        console.log(item.image, item.name);
        if (item.image && item.name) {
          const divElement = document.createElement('div');
          divElement.className = 'gallery-item';
      
          divElement.innerHTML = `
            <a class="item-link" href="#">
              <img class="item-image" src="${item.image}" alt="${item.name}">
              <div class="item-name">${item.name}</div>
            </a>
          `;
          console.log(divElement);
          apiDataContainer.appendChild(divElement);
        }
      });
    }
      