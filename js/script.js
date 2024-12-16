function calculate() {
  var r = parseFloat(document.getElementById("radius").value);

  if (isNaN(r) || r <= 0) {
    document.getElementById("volume").value = "";
    document.getElementById("luas").value = "";
    return;
  }

  // Hitung volume dan luas permukaan
  var volume = (4 / 3) * Math.PI * Math.pow(r, 3);
  var luas = 4 * Math.PI * Math.pow(r, 2);

  // Tampilkan hasil
  document.getElementById("volume").value = volume.toFixed(2);
  document.getElementById("luas").value = luas.toFixed(2);
}

function updateVisualization() {
  var r = parseFloat(document.getElementById("radius").value);
  var ball = document.getElementById("ball");
  var radiusLine = document.getElementById("radius-line");
  var radiusLabel = document.getElementById("radius-label");

  if (isNaN(r) || r <= 0) {
    radiusLabel.textContent = "r = 0";
    radiusLine.style.height = "0px";
    return;
  }

  // Update panjang garis jari-jari
  radiusLine.style.height = r * 10 + "px"; // Mengalikan untuk memperbesar ukuran
  radiusLabel.textContent = "r = " + r; // Menampilkan nilai jari-jari
}
