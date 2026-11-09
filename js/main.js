
// JavaScript portofolio Nabila
// Dipasang di ketiga halaman dengan defer

// 1. Daftar keahlian (halaman Beranda)
const skills = [
    { nama: "HTML", level: "Menengah" },
    { nama: "CSS", level: "Menengah" },
    { nama: "Git dan GitHub", level: "Dasar" },
    { nama: "Desain poster dengan Canva", level: "Mahir" },
];

skills.push({ nama: "JavaScript", level: "Dasar" });

const daftarSkill = document.querySelector("#daftar-skill");
const jumlahSkill = document.querySelector("#jumlah-skill");

if (daftarSkill && jumlahSkill) {
    skills.forEach((skill) => {
        const item = document.createElement("li");
        item.textContent = `${skill.nama} (${skill.level})`;
        daftarSkill.appendChild(item);
    });

    jumlahSkill.textContent =
        `Ada ${skills.length} keahlian yang sedang saya kembangkan.`;
}

// 2. Tema gelap (semua halaman)
const tombolTema = document.querySelector("#tombol-tema");

if (tombolTema) {
    tombolTema.addEventListener("click", () => {
        document.body.classList.toggle("gelap");

        if (document.body.classList.contains("gelap")) {
            tombolTema.textContent = "Mode Terang";
        } else {
            tombolTema.textContent = "Mode Gelap";
        }
    });
}

// 3. Penghitung karakter pesan (halaman Kontak)
const kotakPesan = document.querySelector("#pesan");
const hitungKarakter = document.querySelector("#hitung-karakter");

if (kotakPesan && hitungKarakter) {
    kotakPesan.addEventListener("input", function () {
        const jumlah = kotakPesan.value.length;
        hitungKarakter.textContent = `${jumlah}/300 karakter`;
    });
}

// 4. Daftar proyek dan filter (halaman Proyek)
const proyek = [
    {
        judul: "Halaman Profil Pertama",
        kategori: "HTML",
        gambar: "img/profile.png",
        alt: "Halaman profil pertama",
        deskripsi: "Halaman web pertama saya, dibuat dengan HTML dasar."
    },
    {
        judul: "Form Kontak",
        kategori: "HTML",
        gambar: "img/Foto-kontak.png",
        alt: "Tangkapan layar form kontak",
        deskripsi: "Form dengan label dan validasi bawaan browser."
    },
    {
        judul: "Tabel Jadwal Belajar",
        kategori: "HTML",
        gambar: "img/jadwal-pelajaran.png",
        alt: "Tabel jadwal belajar",
        deskripsi: "Jadwal belajar mingguan dengan thead dan tbody."
    },
    {
        judul: "Portofolio Responsif",
        kategori: "CSS",
        gambar: "img/responsif.png",
        alt: "Portofolio responsif",
        deskripsi: "Rapi di ponsel, tablet, dan laptop dengan Flexbox."
    },
    {
        judul: "Kalkulator Nilai Rapor",
        kategori: "JavaScript",
        gambar: "img/kalkulator-nilai-rapor.png",
        alt: "Kalkulator nilai rapor",
        deskripsi: "Rata-rata dan predikat nilai dengan fungsi JavaScript."
    },
    {
        judul: "Lima Soal Logika",
        kategori: "JavaScript",
        gambar: "img/lima-soal-logika.png",
        alt: "Hasil uji lima soal logika",
        deskripsi: "Lima fungsi logika yang masing-masing diuji 3 masukan."
    },
];

const daftarProyek = document.querySelector("#daftar-proyek");
const jumlahProyek = document.querySelector("#jumlah-proyek");

// Membuat kartu proyek
function buatKartu(item) {
    return `
        <article class="kartu">
            <span class="label">${item.kategori}</span>
            <h3>${item.judul}</h3>
            <img src="${item.gambar}" alt="${item.alt}" width="280">
            <p>${item.deskripsi}</p>
        </article>
    `;
}

// Menampilkan proyek
function tampilkanProyek(daftar) {
    if (!daftarProyek || !jumlahProyek) return;

    const semuaKartu = daftar.map((item) => buatKartu(item));

    daftarProyek.innerHTML = semuaKartu.join("");

    jumlahProyek.textContent =
        `Menampilkan ${daftar.length} dari ${proyek.length} proyek`;
}

// Memasang filter
function pasangFilter(idTombol, kategori) {
    const tombol = document.querySelector(idTombol);

    if (tombol) {
        tombol.addEventListener("click", () => {
            if (kategori === "Semua") {
                tampilkanProyek(proyek);
            } else {
                const hasil = proyek.filter(
                    (item) => item.kategori === kategori
                );

                tampilkanProyek(hasil);
            }
        });
    }
}

// Menjalankan daftar proyek
if (daftarProyek && jumlahProyek) {
    tampilkanProyek(proyek);

    pasangFilter("#filter-semua", "Semua");
    pasangFilter("#filter-javascript", "JavaScript");
}
