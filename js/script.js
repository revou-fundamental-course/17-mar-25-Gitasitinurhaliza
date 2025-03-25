// Fungsi untuk menampilkan hanya satu section (Luas/Keliling)
function showSection(section) {
    let luasContainer = document.getElementById("luas-container");
    let kelilingContainer = document.getElementById("keliling-container");

    let luasBtn = document.getElementById("luasBtn");
    let kelilingBtn = document.getElementById("kelilingBtn");

    if (section === "luas") {
        luasContainer.style.display = "block";
        kelilingContainer.style.display = "none";
        luasBtn.classList.add("active");
        kelilingBtn.classList.remove("active");
    } else {
        luasContainer.style.display = "none";
        kelilingContainer.style.display = "block";
        kelilingBtn.classList.add("active");
        luasBtn.classList.remove("active");
    }
}

// Fungsi untuk menghitung luas
document.getElementById("luas-form").addEventListener("submit", function (event) {
    event.preventDefault();
    let sisi = document.getElementById("sisi-luas").value;
    let hasilLuas = document.getElementById("hasil-luas");

    if (sisi) {
        let luas = sisi * sisi;
        hasilLuas.innerHTML = `<strong>Hasil:</strong> Luas = ${sisi} × ${sisi} = <b>${luas}</b>`;
        hasilLuas.style.display = "block";
    }
});

// Fungsi untuk menghitung keliling
document.getElementById("keliling-form").addEventListener("submit", function (event) {
    event.preventDefault();
    let sisi = document.getElementById("sisi-keliling").value;
    let hasilKeliling = document.getElementById("hasil-keliling");

    if (sisi) {
        let keliling = 4 * sisi;
        hasilKeliling.innerHTML = `<strong>Hasil:</strong> Keliling = 4 × ${sisi} = <b>${keliling}</b>`;
        hasilKeliling.style.display = "block";
    }
});

document.querySelectorAll("button[type='reset']").forEach(button => {
    button.addEventListener("click", function() {
        let hasilDiv = this.closest("form").querySelector(".hasil");
        hasilDiv.innerHTML = "";  // Menghapus hasil perhitungan saat reset ditekan
    });
});