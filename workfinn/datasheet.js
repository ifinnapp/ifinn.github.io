fetch('https://script.google.com/macros/s/AKfycbx3dqE-7qIJjYFXbEwKfeJi5cJ7pxt7hHobi6rJWxIgArL7-achDFrUqm2WBcbosmVNvA/exec?sheetName=event')
    .then(function (response) {
        return response.json();
    })
    .then(function (cardData) {
        const cardTemplate = document.getElementById("base-card");
        const cardsContainer = document.getElementById("cards-container");
        const fragment = document.createDocumentFragment(); 

        cardData.forEach((data) => {
            const newCard = cardTemplate.content.cloneNode(true);
            const mainContainer = newCard.getElementById("main-container");
            const title = newCard.getElementById("title");
            const subTitle = newCard.getElementById("sub-title");
            const image = newCard.getElementById("image");
            const button = newCard.getElementById("drop-btn");

            mainContainer.classList.add(
                data.id % 2 === 0 ? "flex-col" : "flex-col-reverse"
            );
            title.innerText = data.column2;
            subTitle.innerText = data.column3;
            image.src = data.column4;
            button.dataset.column1 = data.column1;
            button.dataset.column5 = data.column5; // เก็บ URL ไว้ใน dataset
            fragment.append(newCard); 
        });

        cardsContainer.append(fragment);

        cardsContainer.addEventListener("click", (event) => {
            const button = event.target.closest("button");
            if (button) {
                const link = button.dataset.column5; 
                if (link) {
                    window.open(link, '_blank'); 
                }
            }
        });
    })
    .catch(function (error) {
        console.error('Error fetching data:', error);
    });
