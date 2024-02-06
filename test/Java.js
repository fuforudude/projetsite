//Test
fetch('https://eldenring.fanapis.com/api/armors?limit=568')

    .then(response => response.json())
    .then(data_armures => {
        console.log(data_armures.data);
        armures = document.getElementById("armures");
        data_armures.data.forEach(element => {
            armures.appendChild(new Option(element.image));
        });
    });
    fetch('https://eldenring.fanapis.com/api/armors?limit=568')
    .then(response => response.json())
    .then(data_armures => {
        const armuresSelect = document.getElementById("armures");

        // Parcourir les données et ajouter des options avec le nom et l'image
        data_armures.data.forEach(element => {
            const option = document.createElement("option");
            option.value = element.id;  // La valeur que vous souhaitez utiliser (ID, nom, etc.)
            option.text = element.name;

            // Créer une balise image (img) pour l'option
            const img = document.createElement("img");
            img.src = element.image;
            img.alt = element.name;
            img.style.width = "50px"; // Ajustez la largeur de l'image selon vos besoins
            img.style.height = "50px"; // Ajustez la hauteur de l'image selon vos besoins

            // Ajouter l'image à l'option
            option.appendChild(img);

            // Ajouter l'option à la liste déroulante
            armuresSelect.appendChild(option);
        });
    });
    