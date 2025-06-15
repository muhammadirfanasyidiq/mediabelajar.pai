window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script2 = function()
{
  var audio = document.getElementById('bgSongku');
audio.src="bgmusik.mp3";
audio.load();
audio.play();
audio.volume=0.9;
}

window.Script3 = function()
{
  var player = GetPlayer();
var total = player.GetVar("total");
var persen = player.GetVar("persen");

total = player.GetVar("a1") + player.GetVar("a2") + player.GetVar("a3") + player.GetVar("a4") + player.GetVar("a5") + player.GetVar("a6") + player.GetVar("a7") + player.GetVar("a8") + player.GetVar("a9") + player.GetVar("a10");
persen = total / 100 * 100;

player.SetVar("total", total);
player.SetVar("persen", persen);

}

window.Script4 = function()
{
  var c = ",";
var player = GetPlayer();

// Nama guru dan mata pelajaran
var namaGuru = "Asep Maulana Yusuf, S.Pd.I";
var mataPelajaran = "Pendidikan Agama Islam";

// Ambil variabel dari Storyline
var nama = player.GetVar("nama");
var kelas = player.GetVar("kelas");
var a1 = player.GetVar("a1");
var a2 = player.GetVar("a2");
var a3 = player.GetVar("a3");
var a4 = player.GetVar("a4");
var a5 = player.GetVar("a5");
var a6 = player.GetVar("a6");
var a7 = player.GetVar("a7");
var a8 = player.GetVar("a8");
var a9 = player.GetVar("a9");
var a10 = player.GetVar("a10");

// PERBAIKAN: Tentukan nilai untuk jawaban benar berdasarkan sistem Storyline
var nilaiBenar = 10; // Sesuaikan dengan sistem scoring Storyline Anda
var totalMaksimal = nilaiBenar * 10; // 10 soal × nilai per soal

// Hitung total dan persentase - DIPERBAIKI
var total = a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9 + a10;
var persen = ((total / totalMaksimal) * 100).toFixed(1); // Rumus persentase yang benar

// Debug: Tambahkan log untuk memeriksa nilai (hapus setelah testing)
console.log("Debug - Nilai a1:", a1, "a2:", a2, "a3:", a3);
console.log("Debug - Total:", total, "Persen:", persen);

// Buat tanggal dan waktu unik
var now = new Date();
var tanggal = now.getDate().toString().padStart(2, '0') + "/" + 
              (now.getMonth() + 1).toString().padStart(2, '0') + "/" + 
              now.getFullYear();
var waktu = now.getHours().toString().padStart(2, '0') + ":" + 
            now.getMinutes().toString().padStart(2, '0') + ":" + 
            now.getSeconds().toString().padStart(2, '0');

// Generate ID unik berdasarkan timestamp
var uniqueID = "REP" + now.getFullYear().toString().substr(-2) + 
               (now.getMonth() + 1).toString().padStart(2, '0') + 
               now.getDate().toString().padStart(2, '0') + 
               now.getHours().toString().padStart(2, '0') + 
               now.getMinutes().toString().padStart(2, '0');

// Hitung grade berdasarkan persentase
var grade = "";
var predikat = "";
if (persen >= 90) {
    grade = "A";
    predikat = "Sangat Baik";
} else if (persen >= 80) {
    grade = "B";
    predikat = "Baik";
} else if (persen >= 70) {
    grade = "C";
    predikat = "Cukup";
} else if (persen >= 60) {
    grade = "D";
    predikat = "Kurang";
} else {
    grade = "E";
    predikat = "Sangat Kurang";
}

// Status kelulusan
var statusLulus = persen >= 75 ? "LULUS" : "TIDAK LULUS";
var emoji = persen >= 75 ? "✓" : "✗";

// Buat konten CSV yang unik dan informatif
var csvContent = "";
csvContent += "╔══════════════════════════════════════════════════════════════╗\n";
csvContent += "║                    LAPORAN HASIL EVALUASI                   ║\n";
csvContent += "╚══════════════════════════════════════════════════════════════╝\n";
csvContent += "\n";
csvContent += "ID Laporan" + c + uniqueID + "\n";
csvContent += "Tanggal Export" + c + tanggal + "\n";
csvContent += "Waktu Export" + c + waktu + "\n";
csvContent += "Mata Pelajaran" + c + mataPelajaran + "\n";
csvContent += "Guru Pengampu" + c + namaGuru + "\n";
csvContent += "\n";
csvContent += "=== DATA SISWA ===\n";
csvContent += "Nama Lengkap" + c + nama + "\n";
csvContent += "Kelas" + c + kelas + "\n";
csvContent += "\n";
csvContent += "=== DETAIL JAWABAN ===\n";
csvContent += "No" + c + "Soal" + c + "Nilai" + c + "Status\n";

// PERBAIKAN: Menggunakan nilai yang tepat untuk penentuan benar/salah
csvContent += "1" + c + "Soal 1" + c + a1 + c + (a1 == nilaiBenar ? "Benar" : "Salah") + "\n";
csvContent += "2" + c + "Soal 2" + c + a2 + c + (a2 == nilaiBenar ? "Benar" : "Salah") + "\n";
csvContent += "3" + c + "Soal 3" + c + a3 + c + (a3 == nilaiBenar ? "Benar" : "Salah") + "\n";
csvContent += "4" + c + "Soal 4" + c + a4 + c + (a4 == nilaiBenar ? "Benar" : "Salah") + "\n";
csvContent += "5" + c + "Soal 5" + c + a5 + c + (a5 == nilaiBenar ? "Benar" : "Salah") + "\n";
csvContent += "6" + c + "Soal 6" + c + a6 + c + (a6 == nilaiBenar ? "Benar" : "Salah") + "\n";
csvContent += "7" + c + "Soal 7" + c + a7 + c + (a7 == nilaiBenar ? "Benar" : "Salah") + "\n";
csvContent += "8" + c + "Soal 8" + c + a8 + c + (a8 == nilaiBenar ? "Benar" : "Salah") + "\n";
csvContent += "9" + c + "Soal 9" + c + a9 + c + (a9 == nilaiBenar ? "Benar" : "Salah") + "\n";
csvContent += "10" + c + "Soal 10" + c + a10 + c + (a10 == nilaiBenar ? "Benar" : "Salah") + "\n";

csvContent += "\n";
csvContent += "=== REKAPITULASI ===\n";
csvContent += "Total Nilai" + c + total + "\n";
csvContent += "Persentase" + c + persen + " %\n";
csvContent += "Grade" + c + grade + "\n";
csvContent += "Predikat" + c + predikat + "\n";
csvContent += "Status Kelulusan" + c + statusLulus + " " + emoji + "\n";
csvContent += "\n";

// PERBAIKAN: Analisis kinerja yang lebih efisien
csvContent += "=== ANALISIS KINERJA ===\n";
var nilaiArray = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10];
var nilaiTertinggi = Math.max(...nilaiArray);
var nilaiTerendah = Math.min(...nilaiArray);
var indexTertinggi = nilaiArray.indexOf(nilaiTertinggi) + 1;
var indexTerendah = nilaiArray.indexOf(nilaiTerendah) + 1;

csvContent += "Soal Tertinggi" + c + "Soal " + indexTertinggi + c + nilaiTertinggi + "\n";
csvContent += "Soal Terendah" + c + "Soal " + indexTerendah + c + nilaiTerendah + "\n";
csvContent += "Rata-rata" + c + (total / 10).toFixed(1) + "\n";

// Hitung jumlah jawaban benar
var jumlahBenar = nilaiArray.filter(nilai => nilai == nilaiBenar).length;
csvContent += "Jawaban Benar" + c + jumlahBenar + " dari 10 soal\n";
csvContent += "Jawaban Salah" + c + (10 - jumlahBenar) + " dari 10 soal\n";

csvContent += "\n";
csvContent += "=== CATATAN GURU ===\n";
if (persen >= 90) {
    csvContent += "Komentar" + c + "Excellent! Pertahankan prestasi yang luar biasa ini!\n";
} else if (persen >= 80) {
    csvContent += "Komentar" + c + "Bagus! Terus tingkatkan pemahaman materi.\n";
} else if (persen >= 70) {
    csvContent += "Komentar" + c + "Cukup baik. Perbanyak latihan soal.\n";
} else {
    csvContent += "Komentar" + c + "Perlu bimbingan lebih intensif. Jangan menyerah!\n";
}
csvContent += "\n";
csvContent += "Saran Perbaikan" + c + (persen < 75 ? "Pelajari kembali materi yang kurang dipahami" : "Lanjutkan ke materi berikutnya") + "\n";
csvContent += "\n";
csvContent += "--- Generated by E-Learning System ---\n";
csvContent += "--- muhammad irfanasyidiq/2203010234 ---\n";
csvContent += "Timestamp: " + now.getTime() + "\n";

// Buat nama file yang unik
var namaFile = mataPelajaran + "_" + kelas + "_" + nama.replace(/\s+/g, '') + "_" + uniqueID + ".csv";

// Download CSV
var encodedUri = encodeURI(csvContent);
var link = document.createElement("a");
link.setAttribute("href", "data:text/csv;charset=utf-8," + encodedUri);
link.setAttribute("download", namaFile);
document.body.appendChild(link);
link.click();
document.body.removeChild(link);

// Opsional: Tampilkan notifikasi dengan info debug
alert("Laporan berhasil diexport dengan ID: " + uniqueID + "\nTotal: " + total + "\nPersentase: " + persen + "%");
}

};
