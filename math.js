// math.js

// Fungsi untuk menambahkan dua angka
export function tambah(a, b) {
    validasiInput(a, b);
    return a + b;
  }
  
  // Fungsi untuk mengalikan dua angka
  export function kali(a, b) {
    validasiInput(a, b);
    return a * b;
  }
  
  // Fungsi untuk mengurangkan dua angka
  export function kurang(a, b) {
    validasiInput(a, b);
    return a - b;
  }
  
  // Fungsi untuk membagi dua angka
  export function bagi(a, b) {
    validasiInput(a, b);
    if (b === 0) {
      throw new Error('Tidak bisa membagi dengan nol');
    }
    return a / b;
  }
  
  // Fungsi untuk validasi input
  function validasiInput(...inputs) {
    inputs.forEach(input => {
      if (input === null) {
        throw new Error('Input tidak boleh null');
      }
      if (typeof input !== 'number') {
        throw new Error('Input harus berupa angka');
      }
    });
  }  