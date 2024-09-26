        // Bingó cellák generálása
        const phrases = [
            "Youtuber promo", "Minecraft movie hírek", "Cringe", "Hardcore újitások", "Új spin-off",
            "TÉNYLEG LIVE LEGYEN", "1+ óra", "Marketplace dolgok", "Mob vote vége", "Fejlesztést segítő újítások",
            "Minecraft Dungeons", "Szülinap 🎂", "1.22-es update bejelentése", "Absolute cinema 👏🎬", "Sneak peak a kisebb droppokról 👀",
            "Fletching table", "1.21.2 release date", "Bedrock DLC", "MEME potenciál", "Community show pre-show",
            "Minecraft Netflix hírek", "Vote vesztes", "Education Edition", "Váratlan bejelentés", "End update"
        ];

        const board = document.getElementById('bingo-board');
        const resetButton = document.getElementById('reset-button');

        // Bingó tábla generálása (állandó sorrendben)
        function generateBoard() {
            board.innerHTML = ''; // Előző tábla törlése

            for (let i = 0; i < 25; i++) {
                const cell = document.createElement('div');
                cell.classList.add('bingo-cell', 'w-100');
                cell.innerText = phrases[i];
                cell.addEventListener('click', () => cell.classList.toggle('marked')); // Kattintásra jelölés
                board.appendChild(cell);
            }
        }

        // Első játék generálása
        generateBoard();