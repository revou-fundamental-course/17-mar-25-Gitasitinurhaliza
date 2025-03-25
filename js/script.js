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

document.getElementById("luas-form").addEventListener("submit", function (event) {
    event.preventDefault();
    let sisiInput = document.getElementById("sisi-luas");
    let hasilLuas = document.getElementById("hasil-luas");

    let sisi = sisiInput.value.trim();
    
    if (!sisi || isNaN(sisi) || sisi <= 0) {
        hasilLuas.innerHTML = `<strong style="color: red;">Masukkan angka yang valid!</strong>`;
        hasilLuas.style.display = "block";
        return;
    }

    let luas = sisi * sisi;
    hasilLuas.innerHTML = `<strong>Hasil:</strong> Luas = ${sisi} × ${sisi} = <b>${luas}</b>`;
    hasilLuas.style.display = "block";
});

document.getElementById("keliling-form").addEventListener("submit", function (event) {
    event.preventDefault();
    let sisiInput = document.getElementById("sisi-keliling");
    let hasilKeliling = document.getElementById("hasil-keliling");

    let sisi = sisiInput.value.trim();
    
    if (!sisi || isNaN(sisi) || sisi <= 0) {
        hasilKeliling.innerHTML = `<strong style="color: red;">Masukkan angka yang valid!</strong>`;
        hasilKeliling.style.display = "block";
        return;
    }

    let keliling = 4 * sisi;
    hasilKeliling.innerHTML = `<strong>Hasil:</strong> Keliling = 4 × ${sisi} = <b>${keliling}</b>`;
    hasilKeliling.style.display = "block";
});

document.querySelectorAll("button[type='reset']").forEach(button => {
    button.addEventListener("click", function() {
        let form = this.closest("form");
        let hasilDiv = form.querySelector(".hasil");

        if (hasilDiv) {
            hasilDiv.innerHTML = "";
            hasilDiv.style.display = "none";
        }

        form.reset();
    });
});
