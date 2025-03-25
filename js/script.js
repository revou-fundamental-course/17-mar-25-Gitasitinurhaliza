function showSection(section) {
    let shape = document.getElementById("shapeSelect").value;

    let sections = {
        persegi: { luas: "luas-container", keliling: "keliling-container" },
        panjang: { luas: "luas-panjang-container", keliling: "keliling-panjang-container" },
    };

    Object.values(sections.persegi).concat(Object.values(sections.panjang)).forEach(id => {
        document.getElementById(id).style.display = "none";
    });

    document.getElementById(sections[shape][section]).style.display = "block";

    document.getElementById("luasBtn").classList.toggle("active", section === "luas");
    document.getElementById("kelilingBtn").classList.toggle("active", section === "keliling");
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("shapeSelect").value = "persegi"; 
    showSection("luas");
});

document.getElementById("shapeSelect").addEventListener("change", function () {
    showSection("luas");
});

// Luas Persegi
document.getElementById("luas-form").addEventListener("submit", function (event) {
    event.preventDefault();
    let sisi = parseFloat(document.getElementById("sisi-luas").value.trim());
    let hasil = document.getElementById("hasil-luas");

    if (!sisi || isNaN(sisi) || sisi <= 0) {
        hasil.innerHTML = `<strong style="color: red;">Masukkan angka yang valid!</strong>`;
        hasil.style.display = "block";
        return;
    }

    let luas = sisi * sisi;
    hasil.innerHTML = `<strong>Hasil:</strong><br> L = S × S <br>L = ${sisi} × ${sisi} <br>L = <b>${luas}</b>`;
    hasil.style.display = "block";
});

// Keliling Persegi
document.getElementById("keliling-form").addEventListener("submit", function (event) {
    event.preventDefault();
    let sisi = parseFloat(document.getElementById("sisi-keliling").value.trim());
    let hasil = document.getElementById("hasil-keliling");

    if (!sisi || isNaN(sisi) || sisi <= 0) {
        hasil.innerHTML = `<strong style="color: red;">Masukkan angka yang valid!</strong>`;
        hasil.style.display = "block";
        return;
    }

    let keliling = 4 * sisi;
    hasil.innerHTML = `<strong>Hasil:</strong><br> K = 4 × S <br>K = 4 × ${sisi} <br>K = <b>${keliling}</b>`;
    hasil.style.display = "block";
});

// Luas Persegi Panjang
document.getElementById("luas-panjang-form").addEventListener("submit", function (event) {
    event.preventDefault();
    let panjang = parseFloat(document.getElementById("panjang-luas").value.trim());
    let lebar = parseFloat(document.getElementById("lebar-luas").value.trim());
    let hasil = document.getElementById("hasil-luas-panjang");

    if (!panjang || isNaN(panjang) || panjang <= 0 || !lebar || isNaN(lebar) || lebar <= 0) {
        hasil.innerHTML = `<strong style="color: red;">Masukkan angka yang valid!</strong>`;
        hasil.style.display = "block";
        return;
    }

    let luas = panjang * lebar;
    hasil.innerHTML = `<strong>Hasil:</strong><br> L = P × L <br>L = ${panjang} × ${lebar} <br>L = <b>${luas}</b>`;
    hasil.style.display = "block";
});

// Keliling Persegi Panjang
document.getElementById("keliling-panjang-form").addEventListener("submit", function (event) {
    event.preventDefault();
    let panjang = parseFloat(document.getElementById("panjang-keliling").value.trim());
    let lebar = parseFloat(document.getElementById("lebar-keliling").value.trim());
    let hasil = document.getElementById("hasil-keliling-panjang");

    if (!panjang || isNaN(panjang) || panjang <= 0 || !lebar || isNaN(lebar) || lebar <= 0) {
        hasil.innerHTML = `<strong style="color: red;">Masukkan angka yang valid!</strong>`;
        hasil.style.display = "block";
        return;
    }

    let jumlah = panjang + lebar;
    let keliling = 2 * jumlah;
    hasil.innerHTML = `<strong>Hasil:</strong><br> K = 2 × (P + L) <br>K = 2 × (${panjang} + ${lebar}) <br>K = 2 × ${jumlah} <br>K = <b>${keliling}</b>`;
    hasil.style.display = "block";
});

// Reset
document.querySelectorAll("button[type='reset']").forEach(button => {
    button.addEventListener("click", function () {
        let form = this.closest("form");
        let hasil = form.querySelector(".hasil");

        if (hasil) {
            hasil.innerHTML = "";
            hasil.style.display = "none";
        }

        form.reset();
    });
});
