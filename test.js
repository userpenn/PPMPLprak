//2200016062

import { expect } from 'chai';
import { tambah, kali, kurang, bagi } from './math.js';

describe('Pengujian Fungsi Matematika', function() {
  it('seharusnya mengembalikan 4 saat menambahkan 2 + 2', function() {
    expect(tambah(2, 2)).to.equal(4);
  });
  it('seharusnya mengembalikan 6 saat mengalikan 2 * 3', function() {
    expect(kali(2, 3)).to.equal(6);
  });
  it('seharusnya mengembalikan 0 saat mengurangkan 2 - 2', function() {
    expect(kurang(2, 2)).to.equal(0);
  });
  it('seharusnya mengembalikan 2 saat membagi 6 / 3', function() {
    expect(bagi(6, 3)).to.equal(2);
  });
  it('seharusnya mengembalikan error saat membagi dengan 0', function() {
    expect(() => bagi(6, 0)).to.throw('Tidak bisa membagi dengan nol');
  });
  it('seharusnya mengembalikan 0 saat mengurangkan -2 - (-2)', function() {
    expect(kurang(-2, -2)).to.equal(0);
  });
  it('seharusnya mengembalikan error saat membagi input string', function() {
    expect(() => tambah('ab', 0)).to.throw('Input Salah');
  });
  it('seharusnya mengembalikan error saat membagi input berupa Null', function() {
    expect(() => kali(0)).to.throw('Input Salah');
  }); //Latihan 1
    it('seharusnya mengembalikan -10 saat mengurangkan -7 - 3', function() {
    expect(kurang(-7, 3)).to.equal(-10);
  });
    it('seharusnya mengembalikan error saat menambahkan string dan angka', function() {
    expect(() => tambah('7', 3)).to.throw('Input harus berupa angka');
  }); //Latihan 2
    it('seharusnya mengembalikan error saat mengalikan string dan angka', function() {
    expect(() => kali('7', 3)).to.throw('Input harus berupa angka');
  });
    it('seharusnya mengembalikan error saat menambahkan null dan angka', function() {
    expect(() => tambah(null, 7)).to.throw('Input tidak boleh null');
  });
    it('seharusnya mengembalikan error saat mengalikan null dan angka', function() {
    expect(() => kali(null, 3)).to.throw('Input tidak boleh null'); 
  });
});