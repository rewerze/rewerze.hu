        // Bingó cellák generálása
        const phrases = [
            "TÉNYLEG LIVE LEGYEN", "Minecraft Dungeons", "Zene", "End update", "Új spin-off",
            "Youtuber promo", "1+ óra", "Marketplace dolgok", "Mob vote vége", "Fejlesztést segítő újítások",
            "Minecraft movie hírek", "Szülinap", "1.22 update", "Absolute cinema 👏🎬", "Kollab",
            "Minecraft Legends", "Új boss", "Bedrock DLC", "MEME potenciál", "Community show pre-show",
            "Minecraft Netflix hírek", "Vote vesztes", "Education Edition dolgok", "Combat update", "Váratlan bejelentés"
        ];

        const board = document.getElementById('bingo-board');
        const resetButton = document.getElementById('reset-button');

        // Bingó tábla generálása (állandó sorrendben)
        function generateBoard() {
            board.innerHTML = ''; // Előző tábla törlése

            for (let i = 0; i < 25; i++) {
                const cell = document.createElement('div');
                cell.classList.add('bingo-cell');
                cell.innerText = phrases[i];
                cell.addEventListener('click', () => cell.classList.toggle('marked')); // Kattintásra jelölés
                board.appendChild(cell);
            }
        }

        // Első játék generálása
        generateBoard();