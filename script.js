function ubahText() {
  document.getElementById("text").innerText = "✅ Teks berhasil diubah pakai JavaScript!";
}

function gantiWarna() {
  const colors = ["#0a0f1c", "#1c0a1c", "#0a1c10", "#1c1c0a", "#001f3f"];
  const random = Math.floor(Math.random() * colors.length);
  document.body.style.background = colors[random];
}
