const name = "Fikih";
const age = 23;
const isstudent = false;

document.getElementById("p1").textContent = `nama anda adalah: ${name}`;
document.getElementById("p2").textContent = `umur anda adalah: ${age} tahun`;
document.getElementById("p3").textContent = `status anda adalah: ${isstudent ? "pelajar" : "bukan pelajar"}`;