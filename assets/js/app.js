const dados = {
  "artistas": [
    {
      "id": 1,
      "nome": "Rihanna",
      "descricao": "Cantora, empresária e ícone global do pop e R&B contemporâneo, natural de Barbados.",
      "conteudo": "Uma das artistas mais vendidas de todos os tempos, Rihanna revolucionou a indústria musical e da moda. Conhecida pela sua versatilidade vocal e por acumular uma coleção impressionante de hits mundiais número um, além do seu impacto cultural contínuo.",
      "genero": "Pop / R&B",
      "destaque": true,
      "imagem_principal": "./assets/img/rihanna.jpg",
      "albuns": [
        { "id": 101, "nome": "Good Girl Gone Bad", "descricao": "O álbum divisor de águas que a consagrou mundialmente com o megahit 'Umbrella'.", "imagem": "./assets/img/good.jpg" },
        { "id": 102, "nome": "Loud", "descricao": "Uma era vibrante, dançante e repleta de hinos pop que dominaram o topo das paradas globais.", "imagem": "./assets/img/loud.jpg" },
        { "id": 103, "nome": "Anti", "descricao": "O seu trabalho mais maduro e aclamado pela crítica, explorando sonoridades alternativas e viscerais.", "imagem": "./assets/img/anti.png" }
      ]
    },
    {
      "id": 2,
      "nome": "Bruno Mars",
      "descricao": "Cantor, compositor e multi-instrumentista americano, célebre pelas suas performances enérgicas e estilo retro.",
      "conteudo": "Reconhecido pelo seu imenso talento em palco, Bruno Mars domina géneros como o Pop, Funk, Soul e R&B. Com várias canções no topo das tabelas mundiais e inúmeros prémios Grammy, ele recria com mestria a nostalgia da música clássica americana para os tempos modernos.",
      "genero": "Pop / Funk / R&B",
      "destaque": true,
      "imagem_principal": "./assets/img/brunomars.webp",
      "albuns": [
        { "id": 201, "nome": "Doo-Wops & Hooligans", "descricao": "O aclamado disco de estreia repleto de sucessos mundiais como 'Just the Way You Are'.", "imagem": "./assets/img/doowops.jpg" },
        { "id": 202, "nome": "Unorthodox Jukebox", "descricao": "Trabalho consagrado que misturou perfeitamente o pop com influências de disco e reggae.", "imagem": "./assets/img/unorthodox.jpg" },
        { "id": 203, "nome": "24K Magic", "descricao": "Uma explosão de funk e R&B dos anos 90 que dominou por completo as premiações da indústria.", "imagem": "./assets/img/24kmagic.webp" }
      ]
    },
    {
      "id": 3,
      "nome": "M83",
      "descricao": "Projeto musical francês de dream pop e shoegaze com proporções espaciais e cinematográficas.",
      "conteudo": "Famoso mundialmente pelo megahit 'Midnight City', o M83 utiliza paredes sonoras analógicas e reverberações profundas para criar paisagens épicas e trilhas sonoras memoráveis.",
      "genero": "Dream Pop / Electronic",
      "destaque": true,
      "imagem_principal": "./assets/img/M83.webp",
      "albuns": [
        { "id": 301, "nome": "Hurry Up, We're Dreaming", "descricao": "A jornada de um álbum duplo magistral que define a dimensão do projeto.", "imagem": "./assets/img/hurryup.jpg" },
        { "id": 302, "nome": "Before the Dawn Heals Us", "descricao": "Um mergulho melancólico em texturas cinemáticas e guitarras com eco.", "imagem": "./assets/img/beforethdawn.jpg" },
        { "id": 303, "nome": "Fantasy", "descricao": "Exploração focada na combinação orgânica de sintetizadores e dream pop.", "imagem": "./assets/img/fantasy.jpg" }
      ]
    },
    {
      "id": 4,
      "nome": "Demi Lovato",
      "descricao": "Uma das vozes mais potentes e resilientes da sua geração, ícone global do pop e do pop-rock contemporâneo.",
      "conteudo": "Dona de um alcance vocal soprano dramático e poderoso, Demi Lovato conquistou o mundo com suas performances emocionalmente cruas e composições sinceras sobre resiliência e superação, acumulando múltiplos prêmios e indicações históricas na indústria musical.",
      "genero": "Pop Rock",
      "destaque": false,
      "imagem_principal": "./assets/img/demi.jpg",
      "albuns": [
        { "id": 401, "nome": "Don't Forget", "descricao": "O marco inicial de sua carreira com fortes influências de pop punk.", "imagem": "./assets/img/dontforget.jpg" },
        { "id": 402, "nome": "Holy Fvck", "descricao": "Um retorno triunfal e visceral às suas raízes do rock e do grunge.", "imagem": "./assets/img/holyfvck.png" },
        { "id": 403, "nome": "Dancing with the Devil", "descricao": "Uma obra profundamente íntima que detalha sua jornada de superação.", "imagem": "./assets/img/dancingwiththedevil.png" }
      ]
    },
    {
      "id": 5,
      "nome": "Daft Punk",
      "descricao": "Duo eletrônico francês lendário que moldou a house music e a cultura pop visual moderna.",
      "conteudo": "Famosos por seus capacetes robóticos e produções impecáveis, misturaram synth-pop, funk e techno, influenciando gerações inteiras antes do encerramento do projeto.",
      "genero": "Electronic / House",
      "destaque": false,
      "imagem_principal": "./assets/img/daftpunk.jpg",
      "albuns": [
        { "id": 501, "nome": "Random Access Memories", "descricao": "Uma homenagem viva às eras do disco e do funk analógico.", "imagem": "./assets/img/randomaccessmemories.jpg" },
        { "id": 502, "nome": "Homework", "descricao": "O som cru que revolucionou a French House diretamente do underground.", "imagem": "./assets/img/homework.jpg" },
        { "id": 503, "nome": "Discovery", "descricao": "Clássico absoluto que trouxe amostras marcantes de synth-pop e samples.", "imagem": "./assets/img/discovery.jpg" }
      ]
    },
    {
      "id": 6,
      "nome": "Tame Impala",
      "descricao": "Projeto de rock psicodélico australiano que reinventou as texturas sonoras lo-fi no mainstream.",
      "conteudo": "Liderado por Kevin Parker, o projeto mescla linhas de baixo hipnóticas com sintetizadores vintage e baterias marcantes, criando uma experiência imersiva e brisada.",
      "genero": "Psychedelic Rock / Indie",
      "destaque": false,
      "imagem_principal": "./assets/img/tameimpala.jpg",
      "albuns": [
        { "id": 601, "nome": "Currents", "descricao": "O divisor de águas focado na transição para o pop psicodélico sintético.", "imagem": "./assets/img/currents.png" },
        { "id": 602, "nome": "Innerspeaker", "descricao": "O início de guitarras distorcidas com muito efeito de eco psicodélico.", "imagem": "./assets/img/innerspeaker.png" },
        { "id": 603, "nome": "Lonerism", "descricao": "Camadas sonoras densas que colocaram o projeto em evidência no mundo.", "imagem": "./assets/img/lonerism.jpg" }
      ]
    },
    {
      "id": 7,
      "nome": "Lana Del Rey",
      "descricao": "Cantora e compositora aclamada por sua estética cinematográfica e melancolia barroca.",
      "conteudo": "Suas músicas exploram o glamour trágico, o romance trágico e referências à cultura pop americana clássica dos anos 50 e 60, com vocais sussurrados e hipnóticos.",
      "genero": "Alternative Pop / Indie",
      "destaque": false,
      "imagem_principal": "./assets/img/lana.webp",
      "albuns": [
        { "id": 701, "nome": "Born to Die", "descricao": "O marco inicial da cultura melancólica alternativa na internet.", "imagem": "./assets/img/borntodie.jpg" },
        { "id": 702, "nome": "Ultraviolence", "descricao": "Uma pegada crua focada em guitarras distorcidas do rock clássico.", "imagem": "./assets/img/ultraviolence.png" },
        { "id": 703, "nome": "Norman Fucking Rockwell!", "descricao": "Aclamado trabalho sofisticado sobre o sonho californiano moderno.", "imagem": "./assets/img/normanfuckingrockwell.jpg" }
      ]
    },
    {
      "id": 8,
      "nome": "Billie Eilish",
      "descricao": "Fenômeno jovem do pop alternativo, conhecida por produções minimalistas e letras intimistas.",
      "conteudo": "Ao lado de seu irmão Finneas, revolucionou o pop de arena usando vocais sussurrados, batidas graves estouradas e uma abordagem lírica direta sobre saúde mental e juventude.",
      "genero": "Alternative / Dark Pop",
      "destaque": false,
      "imagem_principal": "./assets/img/billie.jpeg",
      "albuns": [
        { "id": 801, "nome": "WHEN WE ALL FALL ASLEEP", "descricao": "Trabalho de estreia sombrio que redefiniu o topo do Spotify.", "imagem": "./assets/img/whenweallfallasleep.jpg" },
        { "id": 802, "nome": "Happier Than Ever", "descricao": "Uma evolução técnica madura explorando arranjos suaves de jazz e pop.", "imagem": "./assets/img/happierthanever.jpg" },
        { "id": 803, "nome": "HIT ME HARD AND SOFT", "descricao": "Uma mistura dinâmica de batidas marcantes e baladas vocais densas.", "imagem": "./assets/img/hitmehardandsoft.png" }
      ]
    },
    {
      "id": 9,
      "nome": "The Weeknd",
      "descricao": "Arquiteto do R&B alternativo moderno e um dos maiores titãs do pop global contemporâneo.",
      "conteudo": "Iniciando de forma anônima na internet, Abel Tesfaye evoluiu de mixtapes sombrias para hits massivos inspirados nos sintetizadores do pop oitentista e no dark wave.",
      "genero": "R&B / Synth-Pop",
      "destaque": false,
      "imagem_principal": "./assets/img/theweeknd.jpg",
      "albuns": [
        { "id": 901, "nome": "After Hours", "descricao": "Uma odisseia psicodélica pelas noites solitárias de Las Vegas.", "imagem": "./assets/img/afterhours.jpg" },
        { "id": 902, "nome": "Starboy", "descricao": "Uma produção repleta de batidas urbanas sintéticas e hits massivos.", "imagem": "./assets/img/starboy.png" },
        { "id": 903, "nome": "Dawn FM", "descricao": "Uma rádio pop mística guiada por sintetizadores totalmente retro.", "imagem": "./assets/img/dawnfm.webp" }
      ]
    },
    {
      "id": 10,
      "nome": "Gorillaz",
      "descricao": "Banda virtual britânica que quebrou barreiras ao misturar hip-hop, rock, dub e pop eletrônico.",
      "conteudo": "Criada por Damon Albarn e pelo quadrinista Jamie Hewlett, a banda é representada por quatro personagens animados enquanto entrega colaborações lendárias com artistas globais.",
      "genero": "Alternative Rock / Hip-Hop",
      "destaque": false,
      "imagem_principal": "./assets/img/gorillaz.jpg",
      "albuns": [
        { "id": 1001, "nome": "Demon Days", "descricao": "Uma obra-prima conceitual e apocalíptica do início dos anos 2000.", "imagem": "./assets/img/demondays.jpg" },
        { "id": 1002, "nome": "Gorillaz", "descricao": "O icônico debut contendo as batidas inovadoras de 'Clint Eastwood'.", "imagem": "./assets/img/gorillazalbum.jpg" },
        { "id": 1003, "nome": "Plastic Beach", "descricao": "Uma jornada cativante de pop eletrônico com mensagens ambientais.", "imagem": "./assets/img/plasticbeach.jpg" }
      ]
    }
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("carousel-artistas-inner")) {
    renderizarHomePage();
  }
  if (document.getElementById("detalhe-artista-container")) {
    renderizarDetalhePage();
  }
});

function renderizarHomePage() {
  const carouselInner = document.getElementById("carousel-artistas-inner");
  const indicatorsContainer = document.getElementById("carousel-indicators-container");
  const listaCards = document.getElementById("lista-artistas-cards");

  if (carouselInner && indicatorsContainer) {
    carouselInner.innerHTML = "";
    indicatorsContainer.innerHTML = "";
    
    const artistasDestaque = dados.artistas.filter(art => art.destaque);
    
    artistasDestaque.forEach((artista, index) => {
      const isActive = index === 0 ? "active" : "";
      
      indicatorsContainer.innerHTML += `
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${index}" class="${isActive}" aria-current="${index === 0}" aria-label="Slide ${index + 1}"></button>
      `;

      carouselInner.innerHTML += `
        <div class="carousel-item ${isActive}">
          <img src="${artista.imagem_principal}" class="d-block w-100 carousel-img-style" alt="${artista.nome}">
          <div class="carousel-caption custom-caption-box text-center">
            <h2 class="display-6 fw-extrabold text-blue-custom mb-2">${artista.nome}</h2>
            <p class="small text-light opacity-75 mb-3 d-none d-md-block">${artista.descricao}</p>
            <a href="detalhe.html?id=${artista.id}" class="btn btn-blue-solid btn-sm px-4 rounded-pill">Explorar Perfil</a>
          </div>
        </div>
      `;
    });
  }

  if (listaCards) {
    listaCards.innerHTML = "";
    dados.artistas.forEach(artista => {
      listaCards.innerHTML += `
        <div class="col">
          <div class="card musichub-card h-100 shadow d-flex flex-column justify-content-between">
            <div class="overflow-hidden">
              <img src="${artista.imagem_principal}" class="card-img-top card-img-style" alt="${artista.nome}">
            </div>
            <div class="card-body p-4">
              <h4 class="h5 card-title text-blue-custom fw-bold mb-2">${artista.nome}</h4>
              <p class="card-text small style-card-desc">${artista.descricao}</p>
            </div>
            <div class="card-footer bg-transparent border-0 px-4 pb-4">
              <a href="detalhe.html?id=${artista.id}" class="btn btn-sm btn-blue-custom w-100 rounded-pill fw-semibold">Ver Detalhes</a>
            </div>
          </div>
        </div>
      `;
    });
  }
}

function renderizarDetalhePage() {
  const urlParams = new URLSearchParams(window.location.search);
  const idArtista = parseInt(urlParams.get("id"));
  const idBusca = isNaN(idArtista) ? 1 : idArtista;
  const { artistas } = dados;
  const artista = artistas.find(art => art.id === idBusca);

  if (!artista) return;

  if (document.getElementById("detalhe-foto")) document.getElementById("detalhe-foto").src = artista.imagem_principal;
  if (document.getElementById("artista-nome")) document.getElementById("artista-nome").innerText = artista.nome;
  if (document.getElementById("artista-genero")) document.getElementById("artista-genero").innerText = artista.genero;
  if (document.getElementById("artista-resumo")) document.getElementById("artista-resumo").innerText = artista.descricao;
  if (document.getElementById("artista-biografia")) document.getElementById("artista-biografia").innerText = artista.conteudo;
  if (document.getElementById("artista-cadastro")) document.getElementById("artista-cadastro").innerText = artista.data_cadastro;

  if (document.getElementById("titulo-galeria")) {
    document.getElementById("titulo-galeria").innerText = `Álbuns de ${artista.nome} (Entidade Secundária)`;
  }

  const albunsContainer = document.getElementById("albuns-container");
  if (albunsContainer) {
    albunsContainer.innerHTML = "";
    artista.albuns.forEach(album => {
      albunsContainer.innerHTML += `
        <div class="col">
          <div class="card h-100 shadow-sm border-0 text-center" style="background-color: #1a1a1a; border: 1px solid #2d2d2d !important; border-radius: 12px; overflow: hidden;">
            <div class="p-3">
              <img src="${album.imagem}" class="img-fluid rounded-3" style="height: 180px; width: 100%; object-fit: cover;" alt="${album.nome}">
            </div>
            <div class="card-body pt-0 px-3 pb-3">
              <h5 class="h6 card-title text-white fw-bold mb-1">${album.nome}</h5>
              <p class="card-text album-desc-text small mb-0" style="color: #ffffff !important; font-size: 0.78rem;">${album.descricao}</p>
            </div>
          </div>
        </div>
      `;
    });
  }
}