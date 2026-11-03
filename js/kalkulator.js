
function hitungNilai() {

    // Mengambil nilai dari input
    let tugas = Number(document.getElementById("tugas").value);
    let uts = Number(document.getElementById("uts").value);
    let uas = Number(document.getElementById("uas").value);

    // Memeriksa apakah semua input sudah diisi
    if (
        document.getElementById("tugas").value === "" ||
        document.getElementById("uts").value === "" ||
        document.getElementById("uas").value === ""
    ) {
        document.getElementById("hasil").innerHTML =
            "Silakan isi semua nilai terlebih dahulu.";
        return;
    }

    // Memeriksa batas nilai
    if (
        tugas < 0 || tugas > 100 ||
        uts < 0 || uts > 100 ||
        uas < 0 || uas > 100
    ) {
        document.getElementById("hasil").innerHTML =
            "Nilai harus antara 0 sampai 100.";
        return;
    }

    // Menghitung rata-rata
    let rataRata = (tugas + uts + uas) / 3;

    // Menentukan predikat
    let predikat;

    if (rataRata >= 90) {
        predikat = "A";
    } else if (rataRata >= 80) {
        predikat = "B";
    } else if (rataRata >= 70) {
        predikat = "C";
    } else if (rataRata >= 60) {
        predikat = "D";
    } else {
        predikat = "E";
    }

    // Menampilkan hasil
    document.getElementById("hasil").innerHTML =
        "Rata-rata " + rataRata.toFixed(1) +
        ", predikat " + predikat;
}
