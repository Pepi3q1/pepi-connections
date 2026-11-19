const PATH_EPIC = "M3.537 0C2.165 0 1.66.506 1.66 1.879V18.44a4.262 4.262 0 00.02.433c.031.3.037.59.316.92.027.033.311.245.311.245.153.075.258.13.43.2l8.335 3.491c.433.199.614.276.928.27h.002c.314.006.495-.071.928-.27l8.335-3.492c.172-.07.277-.124.43-.2 0 0 .284-.211.311-.243.28-.33.285-.621.316-.92a4.261 4.261 0 00.02-.434V1.879c0-1.373-.506-1.88-1.878-1.88zm13.366 3.11h.68c1.138 0 1.688.553 1.688 1.696v1.88h-1.374v-1.8c0-.369-.17-.54-.523-.54h-.235c-.367 0-.537.17-.537.539v5.81c0 .369.17.54.537.54h.262c.353 0 .523-.171.523-.54V8.619h1.373v2.143c0 1.144-.562 1.71-1.7 1.71h-.694c-1.138 0-1.7-.566-1.7-1.71V4.82c0-1.144.562-1.709 1.7-1.709zm-12.186.08h3.114v1.274H6.117v2.603h1.648v1.275H6.117v2.774h1.74v1.275h-3.14zm3.816 0h2.198c1.138 0 1.7.564 1.7 1.708v2.445c0 1.144-.562 1.71-1.7 1.71h-.799v3.338h-1.4zm4.53 0h1.4v9.201h-1.4zm-3.13 1.235v3.392h.575c.354 0 .523-.171.523-.54V4.965c0-.368-.17-.54-.523-.54zm-3.74 10.147a1.708 1.708 0 01.591.108 1.745 1.745 0 01.49.299l-.452.546a1.247 1.247 0 00-.308-.195.91.91 0 00-.363-.068.658.658 0 00-.28.06.703.703 0 00-.224.163.783.783 0 00-.151.243.799.799 0 00-.056.299v.008a.852.852 0 00.056.31.7.7 0 00.157.245.736.736 0 00.238.16.774.774 0 00.303.058.79.79 0 00.445-.116v-.339h-.548v-.565H7.37v1.255a2.019 2.019 0 01-.524.307 1.789 1.789 0 01-.683.123 1.642 1.642 0 01-.602-.107 1.46 1.46 0 01-.478-.3 1.371 1.371 0 01-.318-.455 1.438 1.438 0 01-.115-.58v-.008a1.426 1.426 0 01.113-.57 1.449 1.449 0 01.312-.46 1.418 1.418 0 01.474-.309 1.58 1.58 0 01.598-.111 1.708 1.708 0 01.045 0zm11.963.008a2.006 2.006 0 01.612.094 1.61 1.61 0 01.507.277l-.386.546a1.562 1.562 0 00-.39-.205 1.178 1.178 0 00-.388-.07.347.347 0 00-.208.052.154.154 0 00-.07.127v.008a.158.158 0 00.022.084.198.198 0 00.076.066.831.831 0 00.147.06c.062.02.14.04.236.061a3.389 3.389 0 01.43.122 1.292 1.292 0 01.328.17.678.678 0 01.207.24.739.739 0 01.071.337v.008a.865.865 0 01-.081.382.82.82 0 01-.229.285 1.032 1.032 0 01-.353.18 1.606 1.606 0 01-.46.061 2.16 2.16 0 01-.71-.116 1.718 1.718 0 01-.593-.346l.43-.514c.277.223.578.335.9.335a.457.457 0 00.236-.05.157.157 0 00.082-.142v-.008a.15.15 0 00-.02-.077.204.204 0 00-.073-.066.753.753 0 00-.143-.062 2.45 2.45 0 00-.233-.062 5.036 5.036 0 01-.413-.113 1.26 1.26 0 01-.331-.16.72.72 0 01-.222-.243.73.73 0 01-.082-.36v-.008a.863.863 0 01.074-.359.794.794 0 01.214-.283 1.007 1.007 0 01.34-.185 1.423 1.423 0 01.448-.066 2.006 2.006 0 01.025 0zm-9.358.025h.742l1.183 2.81h-.825l-.203-.499H8.623l-.198.498h-.81zm2.197.02h.814l.663 1.08.663-1.08h.814v2.79h-.766v-1.602l-.711 1.091h-.016l-.707-1.083v1.593h-.754zm3.469 0h2.235v.658h-1.473v.422h1.334v.61h-1.334v.442h1.493v.658h-2.255zm-5.3.897l-.315.793h.624zm-1.145 5.19h8.014l-4.09 1.348z";
const PATH_ROBLOX = "M18.926 23.998 0 18.892 5.075.002 24 5.108ZM15.348 10.09l-5.282-1.453-1.414 5.273 5.282 1.453z";
const PATH_MEDAL = "M17.58 12.66L14.07 14.5L13.61 14.92L13.79 15.38L17.3 17.37L17.69 17.33L17.86 17.05L17.86 12.97ZM6.46 12.66L6.17 12.94L6.14 16.87L6.24 17.26L6.56 17.4L10.21 15.38L10.42 14.96L10.21 14.64ZM1.04 7.73L1 16.2L4.22 18.5L5.14 10.07L11.77 13.79L19.03 10.1L19.39 18.32L23 16.23L23 7.84L19.53 5.5L12.12 9.54L4.68 5.5Z";

function makeSvg(d) {
  return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${d}"/></svg>`;
}
const LINKS = [
  { label: "Steam (main)",  icon: '<i class="fa-brands fa-steam"></i>',     color: "#66c0f4", url: "https://steamcommunity.com/id/Pepi3q1" },
  { label: "Steam (alt)",   icon: '<i class="fa-brands fa-steam"></i>',     color: "#66c0f4", url: "https://steamcommunity.com/profiles/76561198772463645" },
  { label: "Discord",       icon: '<i class="fa-brands fa-discord"></i>',   color: "#5865f2", copy: "pepi3q1" },
  { label: "Epic",          icon: makeSvg(PATH_EPIC),                       color: "#e6e6e6", copy: "Pepi3q2" },
  { label: "YouTube",       icon: '<i class="fa-brands fa-youtube"></i>',   color: "#ff0033", url: "https://youtube.com/@pepi3q145" },
  { label: "Roblox (main)", icon: makeSvg(PATH_ROBLOX),                    color: "#e2231a", url: "https://www.roblox.com/users/profile?username=pepi3q1" },
  { label: "Roblox (alt)",  icon: makeSvg(PATH_ROBLOX),                    color: "#e2231a", url: "https://www.roblox.com/users/profile?username=Vex_3q1" },
  { label: "Twitch",        icon: '<i class="fa-brands fa-twitch"></i>',    color: "#9146ff", url: "https://twitch.tv/pepi3q1" },
  { label: "Instagram",     icon: '<i class="fa-brands fa-instagram"></i>', color: "#e1306c", url: "https://instagram.com/pepi.3q1" },
  { label: "TikTok",        icon: '<i class="fa-brands fa-tiktok"></i>',    color: "#25f4ee", url: "https://tiktok.com/@pepi3q1" },
  { label: "Medal",         icon: makeSvg(PATH_MEDAL),                      color: "#f5a623", url: "https://medal.tv/u/Pepi3q1" }
];

const nav = document.getElementById("links");

LINKS.forEach(function (item) {
  const a = document.createElement("a");
  a.style.setProperty("--brand", item.color);
  a.innerHTML = item.icon + " <span></span>";

  const label = a.querySelector("span");
  label.textContent = item.label;

  if (item.url) {
    a.href = item.url;
    a.target = "_blank";
    a.rel = "noopener";
  } else {
    a.href = "#";
    a.addEventListener("click", function (event) {
      event.preventDefault();
      navigator.clipboard.writeText(item.copy);
      label.textContent = "Copied!";
      setTimeout(function () {
        label.textContent = item.label;
      }, 1500);
    });
  }

  nav.appendChild(a);
});

const bio = document.getElementById("bio");
const letters = Array.from("FPS enjoyer • mostly online on weekends • friend requests welcome 🎮");
let i = 0;

function type() {
  if (i < letters.length) {
    bio.textContent += letters[i];
    i++;
    setTimeout(type, 40);
  } else {
    bio.classList.add("done");
  }
}

type();

const $ = id => document.getElementById(id);

const TRACKS = [
  { title: "Mad Sounds", artist: "Arctic Monkeys", src: "audio/song1.mp3", cover: "images/cover1.jpg" },
  { title: "Creep",     artist: "Radiohead", src: "audio/song2.mp3", cover: "images/cover2.jpg" },
  { title: "Covet",  artist: "Basement", src: "audio/song3.mp3", cover: "images/cover3.jpg" },
  { title: "The Ballad Of Buck Ravers", artist: "Samurai", src: "audio/song4.mp3", cover: "images/cover4.jpg" }
];
let trackIndex = 0;

const playerAudio = $("playerAudio");
const playerCover = $("playerCover"), playerTitle = $("playerTitle"), playerArtist = $("playerArtist");
const playerSeek = $("playerSeek"), playerCurrent = $("playerCurrent"), playerDuration = $("playerDuration");
const playerPlayPause = $("playerPlayPause"), playerVolume = $("playerVolume"), playerMute = $("playerMute");

const PLAY_ICON  = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';
const PAUSE_ICON = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14"/><rect x="14" y="5" width="4" height="14"/></svg>';
const VOL_ICON   = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 010 7.07"/><path d="M19.07 4.93a10 10 0 010 14.14"/></svg>';
const MUTE_ICON  = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>';

$("playerPrev").innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6 5h2v14H6zM20 5L9 12l11 7z"/></svg>';
$("playerNext").innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 5h2v14h-2zM4 5l11 7-11 7z"/></svg>';
playerPlayPause.innerHTML = PLAY_ICON;
playerMute.innerHTML = VOL_ICON;

function fmtTime(sec) {
  if (!isFinite(sec) || sec < 0) sec = 0;
  const m = Math.floor(sec / 60), s = Math.floor(sec % 60);
  return m + ":" + String(s).padStart(2, "0");
}

function loadTrack(i, autoplay) {
  trackIndex = ((i % TRACKS.length) + TRACKS.length) % TRACKS.length;
  const t = TRACKS[trackIndex];
  playerCover.src = t.cover;
  playerTitle.textContent = t.title;
  playerArtist.textContent = t.artist;
  playerAudio.src = t.src;
  playerSeek.value = 0;
  playerCurrent.textContent = "0:00";
  playerDuration.textContent = "0:00";
  playerPlayPause.innerHTML = PLAY_ICON;
  if (autoplay) {
    playerAudio.play().then(() => {
      playerPlayPause.innerHTML = PAUSE_ICON;
    }).catch(() => {});
  }
}
loadTrack(0, false);

playerPlayPause.addEventListener("click", () => {
  if (playerAudio.paused) {
    playerAudio.play().then(() => {
      playerPlayPause.innerHTML = PAUSE_ICON;
    }).catch(() => {});
  } else {
    playerAudio.pause();
    playerPlayPause.innerHTML = PLAY_ICON;
  }
});

$("playerPrev").addEventListener("click", () => loadTrack(trackIndex - 1, !playerAudio.paused));
$("playerNext").addEventListener("click", () => loadTrack(trackIndex + 1, !playerAudio.paused));

/* keyboard: space = play/pause, arrows = prev/next */
window.addEventListener("keydown", e => {
  if (e.target && e.target.tagName === "INPUT") return;
  if (e.key === " ") {
    e.preventDefault();
    playerPlayPause.click();
  } else if (e.key === "ArrowRight") {
    $("playerNext").click();
  } else if (e.key === "ArrowLeft") {
    $("playerPrev").click();
  }
});

playerAudio.addEventListener("loadedmetadata", () => {
  playerDuration.textContent = fmtTime(playerAudio.duration);
  playerSeek.max = playerAudio.duration || 0;
});
playerAudio.addEventListener("timeupdate", () => {
  playerCurrent.textContent = fmtTime(playerAudio.currentTime);
  playerSeek.value = playerAudio.currentTime;
});
playerAudio.addEventListener("ended", () => loadTrack(trackIndex + 1, true));
playerSeek.addEventListener("input", () => { playerAudio.currentTime = playerSeek.value; });

playerAudio.volume = parseFloat(playerVolume.value);
playerVolume.addEventListener("input", () => {
  playerAudio.volume = parseFloat(playerVolume.value);
  playerAudio.muted = false;
  playerMute.innerHTML = playerAudio.volume === 0 ? MUTE_ICON : VOL_ICON;
});
playerMute.addEventListener("click", () => {
  playerAudio.muted = !playerAudio.muted;
  playerMute.innerHTML = playerAudio.muted ? MUTE_ICON : VOL_ICON;
});

const enter = document.getElementById("enter");

enter.addEventListener("click", function () {
  enter.classList.add("hidden");
  playerPlayPause.click();
});

const setupBtn = document.getElementById("setup-btn");
const setupModal = document.getElementById("setup-modal");
const setupClose = document.getElementById("setup-close");

function openSetup() {
  setupModal.classList.add("open");
}

function closeSetup() {
  setupModal.classList.remove("open");
}

setupBtn.addEventListener("click", openSetup);
setupClose.addEventListener("click", closeSetup);

setupModal.addEventListener("click", function (event) {
  if (event.target === setupModal) {
    closeSetup();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeSetup();
  }
});

const SETUP = [
  { label: "CPU",            value: "Ryzen 7 7800X3D" },
  { label: "GPU",            value: "RX 7800 XT" },
  { label: "RAM",            value: "Crucial 32GB 6000MHz" },
  { label: "Motherboard",    value: "Gigabyte B650 Aorus Elite AX V2" },
  { label: "Storage",        value: "Kingston nvme 1TB" },
  { label: "Main Monitor",   value: "Acer IPS 1440p 180hz 27inch curved" },
  { label: "Second Monitor", value: "Samsung IPS 1080p 60hz 27inch curved" },
  { label: "Mouse",          value: "Razer Viper Mini" },
  { label: "Keyboard",       value: "Razer Ornata Chroma" },
  { label: "Sound",          value: "IEMS Zero:Blue2" },
  { label: "Mouse Pad",      value: "Fabric Mouse Pad 40cm x 90cm" }
];

const setupList = document.getElementById("setup-list");

SETUP.forEach(function (item) {
  const dt = document.createElement("dt");
  dt.textContent = item.label;

  const dd = document.createElement("dd");
  dd.textContent = item.value;

  setupList.appendChild(dt);
  setupList.appendChild(dd);
});