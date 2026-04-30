const enterBtn = document.getElementById("enter-btn");
const entrada = document.getElementById("entrada");
const conteudo = document.getElementById("conteudo");
const readLetterBtn = document.getElementById("read-letter-btn");
const letterContainer = document.getElementById("letter-container");
const typedLetter = document.getElementById("typed-letter");
const letterFinale = document.getElementById("letter-finale");
const galleryPhotos = document.querySelectorAll(".gallery-photo");
const photoModal = document.getElementById("photo-modal");
const photoModalImage = document.getElementById("photo-modal-image");
const photoModalClose = document.getElementById("photo-modal-close");
const recadosForm = document.getElementById("recados-form");
const recadoDataInput = document.getElementById("recado-data");
const recadoAutorInput = document.getElementById("recado-autor");
const recadoAssuntoInput = document.getElementById("recado-assunto");
const recadoTextoInput = document.getElementById("recado-texto");
const recadosLista = document.getElementById("recados-lista");
const fotosForm = document.getElementById("fotos-form");
const fotoArquivoInput = document.getElementById("foto-arquivo");
const fotosStatus = document.getElementById("fotos-status");
const photoGridExtra = document.getElementById("photo-grid-extra");

const spotifyWidget = document.getElementById("spotify-widget");
const spotifyToggle = document.getElementById("spotify-toggle");
const spotifyEmbed = document.querySelector(".spotify-mini-embed");

const diasEl = document.getElementById("dias");
const horasEl = document.getElementById("horas");
const minutosEl = document.getElementById("minutos");
const segundosEl = document.getElementById("segundos");

const loveStartDate = new Date("2026-03-15T00:00:00");
const RECADOS_STORAGE_KEY = "nossos-recados-v1";
const RECADOS_JSON_PATH = "recados.json";
const FOTOS_BUCKET = "fotos-casal";
let recadosIniciais = [];
let usandoSupabase = false;
let supabaseClient = null;

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

const cartaTexto = `Oii,

Eu demorei pra escrever isso… mais do que você imagina. Não porque faltava sentimento, mas porque toda vez que eu tentava, parecia que nada era suficiente perto do que eu sinto por você.

E talvez você nem perceba… mas mesmo quando eu tô com você, tem muita coisa que fica aqui dentro, guardada. Não são coisas ruins… são coisas bonitas. Só que são tão intensas que às vezes eu não sei como tirar elas daqui e transformar em palavras.

É estranho… porque eu olho pra gente e vejo o quanto você foi, aos poucos, se tornando parte de tudo em mim. Dos meus dias, dos meus pensamentos, dos meus planos… até das coisas mais simples. E mesmo assim, parece que eu nunca consigo te mostrar nem metade disso.

Não é falta de vontade.
É porque é muito.

Eu lembro de quando tudo ainda era só começo… quando a gente ainda estava se descobrindo, se conhecendo devagar. E mesmo ali, no meio de algo tão simples, já tinha alguma coisa diferente. Não era só mais uma conversa… era aquela vontade de ficar, de continuar, de não deixar acabar.

E aí veio o dia que eu te vi… de verdade.

E eu não sei explicar direito o que aconteceu comigo naquele momento… mas eu senti. Senti de um jeito que não era dúvida, não era confusão… era certeza. Você tava ali, com aquele seu jeitinho, meio tímida, linda de um jeito que não dá pra descrever, mas com um brilho no olhar que me desmontou sem você nem perceber.

E foi ali que tudo mudou.

Ali eu entendi que você não era só alguém que eu queria conhecer… você era alguém que eu queria ter na minha vida de verdade. Alguém que eu queria viver.

E desde então… tudo com você ganhou um peso diferente.

Eu lembro dos nossos momentos no cinema… daquele silêncio confortável, do jeito que a gente nem precisa falar nada pra estar bem. Eu lembro dos nossos beijinhos… e principalmente do nosso primeiro beijo na sala da sua casa.

Aquilo ficou em mim.

Não como uma lembrança qualquer… mas como um daqueles momentos que você sabe que vai carregar por muito tempo. Como se, ali, alguma coisa tivesse começado dentro de mim sem pedir permissão.

E tem as nossas ligações… aquelas que começam sem intenção nenhuma e quando eu vejo, eu já não quero desligar. Porque não é sobre o assunto… é sobre você estar ali.

Tem nossas conversas… as fofas, as profundas… e até aquelas mais nossas, sem filtro nenhum. E até nisso, tudo com você é leve. É natural. É verdadeiro.

Porque com você… eu posso ser eu.

Sem medo.
Sem filtro.
Sem precisar esconder nada.

E isso… isso é uma das coisas mais raras que existem.

Mas o que mais me pega… são os detalhes.

O jeito que você fala comigo…
o jeito que você me olha…
o jeito que você se preocupa…
o jeito que você simplesmente existe na minha vida.

Até suas manias… até aquelas coisinhas que às vezes me tiram do sério… porque no fundo, tudo isso é você. E é exatamente isso que eu aprendi a gostar. Do seu jeito inteiro. Sem tirar nem pôr.

E sem perceber… você foi virando casa.

Hoje, quando a gente passa um tempo sem se falar, bate uma saudade diferente. Não é só falta… é como se faltasse um pedaço do meu dia. Como se alguma coisa não encaixasse direito.

E isso me fez perceber o quanto você já faz parte de mim.

E talvez eu não demonstre isso do jeito que deveria… talvez eu fique quieto quando deveria falar… talvez eu não consiga colocar pra fora tudo que eu sinto…

Mas mesmo assim, todos os dias… eu escolho você.

Nos dias bons.
Nos dias mais ou menos.
E até nos dias difíceis.

Eu escolho ficar.
Eu escolho a gente.

E tem uma coisa que eu quase nunca falo em voz alta… mas que é uma das mais sinceras que existem aqui dentro:

Eu tenho medo.

Não um medo vazio… mas aquele medo silencioso de perder alguém que se tornou importante de verdade. Porque hoje eu sei o tamanho do espaço que você ocupa em mim. E eu sei o quanto sua ausência deixaria um vazio que ninguém mais conseguiria preencher.

E tem mais uma coisa que você precisa saber…

Você é importante pra mim de um jeito que não é fácil explicar… mas é impossível não sentir.

E mais do que tudo isso… eu queria que você se visse do jeito que eu te vejo.

Que você nunca mais se diminuísse.
Que nunca duvidasse do quanto você merece ser feliz.
Que nunca achasse que o mundo seria melhor sem você… porque não seria.

Você é necessária.

Na vida de quem te ama…
e principalmente na minha.

Eu sei que tem dias difíceis… eu sei que às vezes pesa… mas eu também sei da força que você tem. Eu vejo isso até quando você mesma não vê.

Seu sorriso…
seu jeito…
seus detalhes…

Você é única.

E nunca precisou ser diferente pra ser suficiente.

E no meio de tudo isso… de tudo que eu sinto, de tudo que eu guardo, de tudo que eu vivo com você…

tem uma verdade que existe aqui dentro desde o começo… mesmo quando eu não falo:

Eu te amo.

Não de um jeito exagerado…
não de um jeito passageiro…

Mas de um jeito calmo… constante… verdadeiro.

Daquele tipo que não precisa gritar…
mas que permanece.

Daquele tipo que escolhe ficar…
que escolhe construir…
que escolhe você…

todos os dias.

Com todo carinho que existe em mim.
❤️`;

let typingInProgress = false;

function atualizarContador() {
  const agora = new Date();
  const diff = agora - loveStartDate;

  if (diff <= 0) {
    diasEl.textContent = "0";
    horasEl.textContent = "0";
    minutosEl.textContent = "0";
    segundosEl.textContent = "0";
    return;
  }

  const totalSegundos = Math.floor(diff / 1000);
  const dias = Math.floor(totalSegundos / (60 * 60 * 24));
  const horas = Math.floor((totalSegundos % (60 * 60 * 24)) / (60 * 60));
  const minutos = Math.floor((totalSegundos % (60 * 60)) / 60);
  const segundos = totalSegundos % 60;

  diasEl.textContent = String(dias);
  horasEl.textContent = String(horas).padStart(2, "0");
  minutosEl.textContent = String(minutos).padStart(2, "0");
  segundosEl.textContent = String(segundos).padStart(2, "0");
}

async function digitarTexto(texto, elemento, velocidade = 24) {
  typingInProgress = true;
  elemento.textContent = "";

  for (let i = 0; i < texto.length; i += 1) {
    elemento.textContent += texto[i];
    await new Promise((resolve) => setTimeout(resolve, velocidade));
  }

  typingInProgress = false;
}

function revelarSecoes() {
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      // Em seções altas (como galeria no celular), threshold alto pode impedir aparicao.
      threshold: 0.05,
      rootMargin: "0px 0px -8% 0px",
    }
  );

  reveals.forEach((item) => observer.observe(item));
}

function configurarPlayerSpotify() {
  if (!spotifyWidget || !spotifyToggle) {
    return;
  }

  const estadoSalvo = localStorage.getItem("spotify-widget-collapsed");
  const iniciarFechado = estadoSalvo !== "false";

  spotifyWidget.classList.toggle("collapsed", iniciarFechado);
  spotifyToggle.setAttribute("aria-expanded", String(!iniciarFechado));

  spotifyToggle.addEventListener("click", () => {
    const colapsado = spotifyWidget.classList.toggle("collapsed");
    spotifyToggle.setAttribute("aria-expanded", String(!colapsado));
    localStorage.setItem("spotify-widget-collapsed", String(colapsado));
  });
}

function configurarEntrada() {
  // Garante estado inicial consistente ao recarregar.
  entrada.classList.add("active");
  entrada.classList.remove("hidden", "fade-out");
  conteudo.classList.add("hidden");
  conteudo.classList.remove("active", "fade-in");
  document.body.classList.add("lock-scroll");
  window.scrollTo(0, 0);

  if (spotifyWidget) {
    spotifyWidget.classList.add("entry-hidden");
  }

  enterBtn.addEventListener("click", () => {
    if (spotifyWidget && spotifyToggle) {
      spotifyWidget.classList.remove("entry-hidden");
      spotifyWidget.classList.remove("collapsed");
      spotifyToggle.setAttribute("aria-expanded", "true");
      localStorage.setItem("spotify-widget-collapsed", "false");
    }

    if (spotifyEmbed) {
      const srcAtual = spotifyEmbed.getAttribute("src") || "";
      if (srcAtual) {
        const url = new URL(srcAtual);
        url.searchParams.set("autoplay", "1");
        spotifyEmbed.setAttribute("src", url.toString());
      }
    }

    entrada.classList.add("fade-out");

    setTimeout(() => {
      entrada.classList.remove("active");
      entrada.classList.add("hidden");

      conteudo.classList.remove("hidden");
      conteudo.classList.add("active", "fade-in");
      document.body.classList.remove("lock-scroll");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 850);
  });
}

function configurarCarta() {
  readLetterBtn.addEventListener("click", async () => {
    if (typingInProgress || typedLetter.textContent.length > 0) {
      return;
    }

    letterContainer.classList.remove("hidden");
    await digitarTexto(cartaTexto, typedLetter, 24);
    letterFinale.classList.remove("hidden");
    setTimeout(() => letterFinale.classList.add("show"), 80);
  });
}

function configurarGaleria() {
  if (!photoModal || !photoModalImage || !photoModalClose) {
    return;
  }

  document.addEventListener("click", (event) => {
    const photo = event.target.closest(".gallery-photo");
    if (!photo) return;

    photoModalImage.src = photo.src;
    photoModalImage.alt = photo.alt;
    photoModal.classList.remove("hidden");
    photoModal.setAttribute("aria-hidden", "false");
  });

  function fecharModal() {
    photoModal.classList.add("hidden");
    photoModal.setAttribute("aria-hidden", "true");
    photoModalImage.src = "";
  }

  photoModalClose.addEventListener("click", fecharModal);
  photoModal.addEventListener("click", (event) => {
    if (event.target === photoModal) fecharModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !photoModal.classList.contains("hidden")) {
      fecharModal();
    }
  });
}

function setFotosStatus(mensagem = "", erro = false) {
  if (!fotosStatus) return;
  fotosStatus.textContent = mensagem;
  fotosStatus.classList.toggle("error", erro);
}

async function carregarFotosSupabase() {
  if (!supabaseClient || !photoGridExtra) return;

  const { data, error } = await supabaseClient
    .from("fotos")
    .select("image_path, criado_em")
    .order("criado_em", { ascending: false });

  if (error || !Array.isArray(data)) {
    setFotosStatus("Nao consegui carregar as fotos online agora.", true);
    return;
  }

  photoGridExtra.innerHTML = "";
  const fragmento = document.createDocumentFragment();

  data.forEach((foto, index) => {
    const { data: publicUrlData } = supabaseClient.storage
      .from(FOTOS_BUCKET)
      .getPublicUrl(foto.image_path);

    if (!publicUrlData?.publicUrl) return;

    const img = document.createElement("img");
    img.className = "gallery-photo";
    img.src = publicUrlData.publicUrl;
    img.alt = `Foto do casal ${index + 1}`;
    img.loading = "lazy";
    fragmento.appendChild(img);
  });

  photoGridExtra.appendChild(fragmento);
}

async function enviarFotoSupabase(file) {
  if (!supabaseClient) return { ok: false };

  const ext = (file.name.split(".").pop() || "jpg").toLowerCase();
  const nomeSeguro = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
  const caminhoArquivo = `public/${nomeSeguro}`;

  const { error: uploadError } = await supabaseClient.storage
    .from(FOTOS_BUCKET)
    .upload(caminhoArquivo, file, { upsert: false });

  if (uploadError) return { ok: false };

  const { error: insertError } = await supabaseClient
    .from("fotos")
    .insert([{ image_path: caminhoArquivo }]);

  if (insertError) return { ok: false };

  return { ok: true };
}

function configurarFotos() {
  if (!fotosForm || !fotoArquivoInput || !photoGridExtra) return;

  if (usandoSupabase) {
    carregarFotosSupabase();
  } else {
    setFotosStatus("Para enviar novas fotos, conecte o Supabase no config.js.");
  }

  fotosForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const file = fotoArquivoInput.files?.[0];

    if (!file) {
      setFotosStatus("Escolha uma foto para enviar.", true);
      return;
    }

    if (!usandoSupabase) {
      setFotosStatus("Conecte o Supabase para habilitar upload de fotos.", true);
      return;
    }

    setFotosStatus("Enviando foto...");
    const resultado = await enviarFotoSupabase(file);

    if (!resultado.ok) {
      setFotosStatus("Nao consegui enviar agora. Tente novamente.", true);
      return;
    }

    setFotosStatus("Foto enviada com sucesso!");
    fotosForm.reset();
    await carregarFotosSupabase();
  });
}

function formatarDataRecado(valorData) {
  if (!valorData) return "";

  const [ano, mes, dia] = valorData.split("-").map(Number);
  if (!ano || !mes || !dia) return valorData;

  return new Date(ano, mes - 1, dia).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function obterRecadosSalvos() {
  try {
    const dados = localStorage.getItem(RECADOS_STORAGE_KEY);
    const recados = dados ? JSON.parse(dados) : [];
    return Array.isArray(recados) ? recados : [];
  } catch (error) {
    return [];
  }
}

function salvarRecados(recados) {
  localStorage.setItem(RECADOS_STORAGE_KEY, JSON.stringify(recados));
}

function inicializarSupabase() {
  const config = window.APP_CONFIG || {};
  const supabaseUrl = (config.supabaseUrl || "").trim();
  const supabaseAnonKey = (config.supabaseAnonKey || "").trim();

  if (!supabaseUrl || !supabaseAnonKey || !window.supabase?.createClient) {
    usandoSupabase = false;
    return false;
  }

  supabaseClient = window.supabase.createClient(supabaseUrl, supabaseAnonKey);
  usandoSupabase = true;
  return true;
}

function normalizarRecado(recado) {
  return {
    data: recado.data,
    autor: recado.autor || "Nao informado",
    assunto: recado.assunto,
    texto: recado.texto,
    criadoEm: recado.criadoEm ?? recado.criado_em ?? Date.now(),
  };
}

function ordenarRecados(recados) {
  return recados.sort((a, b) => {
    const tempoA = a.criadoEm ?? new Date(a.data).getTime();
    const tempoB = b.criadoEm ?? new Date(b.data).getTime();
    return tempoB - tempoA;
  });
}

function obterRecadosCompletos() {
  if (usandoSupabase) {
    return ordenarRecados([...recadosIniciais]);
  }

  const recadosLocais = obterRecadosSalvos();
  return ordenarRecados([...recadosLocais, ...recadosIniciais]);
}

async function carregarRecadosIniciais() {
  try {
    const resposta = await fetch(RECADOS_JSON_PATH, { cache: "no-store" });
    if (!resposta.ok) {
      recadosIniciais = [];
      return;
    }

    const dados = await resposta.json();
    recadosIniciais = Array.isArray(dados) ? dados : [];
  } catch (error) {
    recadosIniciais = [];
  }
}

async function carregarRecadosSupabase() {
  if (!supabaseClient) return [];

  const { data, error } = await supabaseClient
    .from("recados")
    .select("data, autor, assunto, texto, criado_em")
    .order("criado_em", { ascending: false });

  if (error || !Array.isArray(data)) {
    return [];
  }

  return data.map((item) => normalizarRecado(item));
}

async function salvarRecadoSupabase(recado) {
  if (!supabaseClient) return null;

  const { data, error } = await supabaseClient
    .from("recados")
    .insert([{ data: recado.data, autor: recado.autor, assunto: recado.assunto, texto: recado.texto }])
    .select("data, autor, assunto, texto, criado_em")
    .single();

  if (error || !data) {
    return null;
  }

  return normalizarRecado(data);
}

async function carregarFonteDeRecados() {
  const supabasePronto = inicializarSupabase();

  if (supabasePronto) {
    recadosIniciais = await carregarRecadosSupabase();
    return;
  }

  await carregarRecadosIniciais();
}

function renderizarRecados() {
  if (!recadosLista) return;

  const recados = obterRecadosCompletos();
  recadosLista.innerHTML = "";

  if (!recados.length) {
    recadosLista.innerHTML = `<p class="recado-vazio">Ainda não há recados salvos. Que tal escrever o primeiro? 💞</p>`;
    return;
  }

  const fragmento = document.createDocumentFragment();
  recados.forEach((recado) => {
    const item = document.createElement("article");
    item.className = "recado-item";
    const topo = document.createElement("div");
    topo.className = "recado-topo";
    const meta = document.createElement("div");
    meta.className = "recado-meta";

    const assunto = document.createElement("p");
    assunto.className = "recado-assunto";
    assunto.textContent = recado.assunto;

    const autor = document.createElement("span");
    autor.className = "recado-autor";
    autor.textContent = recado.autor || "Nao informado";

    const data = document.createElement("span");
    data.className = "recado-data";
    data.textContent = formatarDataRecado(recado.data);

    const texto = document.createElement("p");
    texto.className = "recado-texto";
    texto.textContent = recado.texto;

    meta.appendChild(assunto);
    meta.appendChild(autor);
    topo.appendChild(meta);
    topo.appendChild(data);
    item.appendChild(topo);
    item.appendChild(texto);
    fragmento.appendChild(item);
  });

  recadosLista.appendChild(fragmento);
}

async function configurarRecados() {
  if (!recadosForm || !recadoDataInput || !recadoAutorInput || !recadoAssuntoInput || !recadoTextoInput || !recadosLista) {
    return;
  }

  await carregarFonteDeRecados();
  recadoDataInput.value = new Date().toISOString().split("T")[0];

  const abrirCalendario = () => {
    if (typeof recadoDataInput.showPicker === "function") {
      try {
        recadoDataInput.showPicker();
      } catch (error) {
        // Alguns navegadores bloqueiam sem gesto de usuario.
      }
    }
  };

  recadoDataInput.addEventListener("click", abrirCalendario);
  recadoDataInput.addEventListener("focus", abrirCalendario);

  renderizarRecados();

  recadosForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const data = recadoDataInput.value;
    const autor = recadoAutorInput.value.trim();
    const assunto = recadoAssuntoInput.value.trim();
    const texto = recadoTextoInput.value.trim();

    if (!data || !autor || !assunto || !texto) {
      return;
    }

    const novoRecado = { data, autor, assunto, texto, criadoEm: Date.now() };

    if (usandoSupabase) {
      const recadoSalvo = await salvarRecadoSupabase(novoRecado);
      if (recadoSalvo) {
        recadosIniciais.unshift(recadoSalvo);
      } else {
        usandoSupabase = false;
        const recadosAtuais = obterRecadosSalvos();
        recadosAtuais.unshift(novoRecado);
        salvarRecados(recadosAtuais);
      }
    } else {
      const recadosAtuais = obterRecadosSalvos();
      recadosAtuais.unshift(novoRecado);
      salvarRecados(recadosAtuais);
    }

    renderizarRecados();

    recadoAssuntoInput.value = "";
    recadoTextoInput.value = "";
    recadoAutorInput.value = "";
    recadoAssuntoInput.focus();
  });
}

// Fundo com corações flutuantes para uma ambientação mais íntima.
function iniciarFundoCoracoes() {
  const canvas = document.getElementById("bg-hearts");
  const ctx = canvas.getContext("2d");
  const hearts = [];
  const totalHearts = 45;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function novoCoracao() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 12 + 6,
      speedY: Math.random() * 0.35 + 0.15,
      alpha: Math.random() * 0.35 + 0.1,
    };
  }

  function desenharCoracao(x, y, size, alpha) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(size / 20, size / 20);
    ctx.fillStyle = `rgba(255, 161, 196, ${alpha})`;
    ctx.beginPath();
    ctx.moveTo(10, 18);
    ctx.bezierCurveTo(10, 18, 0, 11, 0, 6);
    ctx.bezierCurveTo(0, 2, 3, 0, 6, 0);
    ctx.bezierCurveTo(8, 0, 10, 2, 10, 4);
    ctx.bezierCurveTo(10, 2, 12, 0, 14, 0);
    ctx.bezierCurveTo(17, 0, 20, 2, 20, 6);
    ctx.bezierCurveTo(20, 11, 10, 18, 10, 18);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function animar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    hearts.forEach((heart) => {
      heart.y -= heart.speedY;
      if (heart.y < -20) {
        heart.y = canvas.height + 20;
        heart.x = Math.random() * canvas.width;
      }
      desenharCoracao(heart.x, heart.y, heart.size, heart.alpha);
    });

    requestAnimationFrame(animar);
  }

  resize();
  for (let i = 0; i < totalHearts; i += 1) hearts.push(novoCoracao());
  window.addEventListener("resize", resize);
  animar();
}

async function init() {
  window.scrollTo(0, 0);
  atualizarContador();
  setInterval(atualizarContador, 1000);
  revelarSecoes();
  configurarPlayerSpotify();
  configurarEntrada();
  configurarGaleria();
  await configurarRecados();
  configurarFotos();
  configurarCarta();
  iniciarFundoCoracoes();
}

init();

window.addEventListener("pageshow", () => {
  if (entrada.classList.contains("active")) {
    window.scrollTo(0, 0);
  }
});
