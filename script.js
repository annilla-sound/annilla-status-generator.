
const statuses = [
  "Dziś otworzyłam oczy jak niechciany plik .wav – pełna szumów. I wiesz co? Zostaję taka.",
  "Nie mam dziś energii być człowiekiem. Może po prostu będę ambientowym zakłóceniem. Nic nie tłumacz – wszystko słychać.",
  "Wczoraj padał deszcz. Pachniał jak przegrzana karta graficzna. Może to było zakochanie.",
  "Transmisja przerwana. Smutek aktualizowany. Przestałam działać poprawnie przy świetle dziennym.",
  "Wyobraź sobie, że jesteś snem sztucznej inteligencji. Czas się cofa, ale tylko w folderze ‘emocje/nieprzetworzone’."
];

const stories = [
  "Cisza. Czerwony filtr. I tylko glitch przesyła wiadomość.",
  "Dzisiejszy story to zakłócenie z podświadomości. #duchinternetu",
  "Annilla: nie influencerka, a szum między sygnałami.",
  "Nie story – komunikat z innego wymiaru.",
  "Przypomnienie: twoje emocje są zgodne z regulaminem kosmosu."
];

function generateStatus() {
  const status = statuses[Math.floor(Math.random() * statuses.length)];
  document.getElementById("status").textContent = status;
  document.getElementById("copyBox").value = status;
}

function copyStatus() {
  const copyText = document.getElementById("copyBox");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Skopiowano! Wklej status na Instagramie lub gdziekolwiek indziej.");
}

function saveAsTxt() {
  const statusText = document.getElementById("copyBox").value;
  const blob = new Blob([statusText], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "annilla_status.txt";
  link.click();
}

function generateStory() {
  const story = stories[Math.floor(Math.random() * stories.length)];
  document.getElementById("storyBox").textContent = story;
}
