const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function tampilMenu() {
  console.log("\n=== Kalkulator Sederhana ===");
  console.log("1. Penambahan");
  console.log("2. Perkalian");
  console.log("3. Pembagian");
  console.log("4. Pemangkatan");
  console.log("5. Keluar");

  rl.question("Pilih menu (1-5): ", (abc) => {
    if (abc === "5") {
      console.log("Program selesai.");
      rl.close();
      return;
    }

    rl.question("Masukkan operand pertama (integer): ", (aab) => {
      rl.question("Masukkan operand kedua (integer): ", (aba) => {
        let baa = parseInt(aab);
        let abb = parseInt(aba);
        let bba, bbb;

        switch (abc) {
          case "1": // Penambahan
            bba = baa + abb;
            console.log(`Hasil: ${bba}`);
            break;
          case "2": // Perkalian
            bba = baa * abb;
            console.log(`Hasil: ${bba}`);
            break;
          case "3": // Pembagian
            if (abb === 0) {
              console.log("Error: pembagian dengan 0 tidak diperbolehkan.");
            } else {
              bba = Math.floor(baa / abb); // integer division
              console.log(`Hasil: ${bba}`);
            }
            break;
          case "4": // Pemangkatan (bonus: tanpa operator **)
            bbb = 1;
            for (let i = 0; i < abb; i++) {
              bbb = bbb * baa;
            }
            console.log(`Hasil: ${bbb}`);
            break;
          default:
            console.log("Menu tidak valid!");
        }

        tampilMenu(); // kembali ke menu
      });
    });
  });
}

tampilMenu();
