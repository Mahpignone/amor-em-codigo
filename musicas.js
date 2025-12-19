document.addEventListener('DOMContentLoaded', () => {
    
    // --- LISTA DE MÚSICAS (Altere aqui quando quiser) ---
    const myPlaylist = [
        {
            title: "N",
            artist: "Nando Reis, ANAVITÓRIA",
            quote: '"Primeira música que me mandou"',
            link: "https://open.spotify.com/intl-pt/track/6iIcwVfeRZx7eeLR9WtGO1?si=bc2b696679404600" 
        },
        {
            title: "Totalmente Seu",
            artist: "Marisa Monte",
            quote: '"Nossa música"',
            link: "https://open.spotify.com/intl-pt/track/2WxFuSpORAwJ1XNDeBMSg9?si=8d91e444a19244d6"
        },
        {
            title: "Desnecessário",
            artist: "Ana Gabriela, Carol Biazin",
            quote: '"Autoexplicativo..."',
            link: "https://open.spotify.com/intl-pt/track/0gAo3JbqmDIbWyv7MEWCds?si=77884252b39c465a"
        },
        {
            title: "A Sua",
            artist: "Marisa Monte",
            quote: '"Tô com sintomas de saudade"',
            link: "https://open.spotify.com/intl-pt/track/2YFYdYxHeoPuuM1fe7VVSo?si=a37e17f965224057"
        },
        {
            title: "Beija Eu",
            artist: "Marisa Monte",
            quote: '"Me beija, meu amor"',
            link: "https://open.spotify.com/intl-pt/track/7tkka2fYf1erIg8wy8r9Lt?si=d6634ce93c1c40f1"
        },
        {
            title: "Só Love",
            artist: "Claudinho & Buchecha",
            quote: '"Só love, só love..."',
            link: "https://open.spotify.com/intl-pt/track/4GCckREf4hj1w50tcOSaFx?si=a054845a38f64442"
        },
        {
            title: "Aliança",
            artist: "Tribalistas",
            quote: '"Tocou no nosso primeiro encontro"',
            link: "https://open.spotify.com/intl-pt/track/1DLKuppSYytOuxhtI6KBGu?si=f524fd411de54bcc"
        },
        {
            title: "Company",
            artist: "Justin Bieber",
            quote: '"Justeeeeen"',
            link: "https://open.spotify.com/intl-pt/track/61uyGDPJ06MkxJtHgPmuyO?si=a66f097d4b624027"
        },
        {
            title: "Outrória",
            artist: "ANAVITÓRIA, OUTROEU",
            quote: '',
            link: "https://open.spotify.com/intl-pt/track/5KV6ycJQtuU1ZZRUUqmV7Y?si=a81954753a634f43"
        },
        {
            title: "Ter o coração no chão",
            artist: "ANAVITÓRIA",
            quote: '',
            link: "https://open.spotify.com/intl-pt/track/5FbcIkgUDNt6mZdDVFwVyE?si=68cec59cd9104d4d"
        },
        {
            title: "Levo Comigo",
            artist: "Restart",
            quote: '"Aonde quer que vá, te levo comigo"',
            link: "https://open.spotify.com/intl-pt/track/6BcqNZ7D3gI0ALivZMAvux?si=8c05bc31296a4192"
        },
        {
            title: "Tudo Que Voçe Quiser",
            artist: "Luan Santana",
            quote: '"Se você quiser te dou meu sobrenome"',
            link: "https://open.spotify.com/intl-pt/track/4JSROzfWqKccwZ68DX1aJe?si=4e010cf47d674239"
        },
        {
            title: "Grão de Areia",
            artist: "Rubel, Xandre de Pilares",
            quote: '',
            link: "https://open.spotify.com/intl-pt/track/5kV7zUqQqd8rvYX82GoWCg?si=a26212471a304e53"
        },
        {
            title: "Não vá Embora",
            artist: "Marisa Monte",
            quote: '',
            link: "https://open.spotify.com/intl-pt/track/7o5VPajBu55TxEjCQs05uw?si=07baf48f10404b8e"
        },
        {
            title: "Dia, Lugar e Hora",
            artist: "Luan Santana",
            quote: '"Se eu não fosse aquele dia, eu não teria me apaixonado"',
            link: "https://open.spotify.com/intl-pt/track/4404ixp3ApDtyRwje7Kgu4?si=ed98c653061446e9"
        },
        {
            title: "Como Vai Você",
            artist: "Roberto Carlos",
            quote: '',
            link: "https://open.spotify.com/intl-pt/track/3WT83UJaRaHfOTI0bfCDTY?si=8b53e556d59744f6"
        },
        {
            title: "They Don't Know About Us",
            artist: "One Direction",
            quote: '',
            link: "https://open.spotify.com/intl-pt/track/6M31fPFCYB8Job3MCjjrDV?si=6af2ef46cb9340e8"
        },
        {
            title: "TE AMO SEM CULPA",
            artist: "Carol Biazin",
            quote: '"Que eu te amo sem culpa...na praia, deserta" ',
            link: "https://open.spotify.com/intl-pt/track/6M31fPFCYB8Job3MCjjrDV?si=6af2ef46cb9340e8"
        }
    ];

    const container = document.getElementById('songs-container');
    const totalDisplay = document.getElementById('total-songs');

    totalDisplay.innerText = myPlaylist.length;

    myPlaylist.forEach(song => {
        const card = document.createElement('div');
        card.classList.add('song-card');

        card.innerHTML = `
            <div class="play-icon">
                <i class="fa-solid fa-play"></i>
            </div>
            <div class="song-info">
                <p class="song-title">${song.title}</p>
                <p class="artist-name">${song.artist}</p>
                <p class="song-quote">${song.quote}</p>
            </div>
            <div class="song-actions">
                <i class="fa-regular fa-heart"></i>
                <a href="${song.link}" target="_blank" style="color:inherit">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
            </div>
        `;
        container.appendChild(card);
    });
});