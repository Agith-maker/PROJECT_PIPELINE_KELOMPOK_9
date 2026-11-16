const { tambah, kurang, kali, bagi } = require("./calculator");

describe("Kalkulator", () => {
  test("tambah: 2 + 3 = 5", () => {
    expect(tambah(2, 3)).toBe(5);
  });

  test("tambah: bilangan negatif", () => {
    expect(tambah(-2, -3)).toBe(-5);
  });

  test("kurang: 5 - 3 = 2", () => {
    expect(kurang(5, 3)).toBe(2);
  });

  test("kali: 4 * 3 = 12", () => {
    expect(kali(4, 3)).toBe(12);
  });

  test("bagi: 10 / 2 = 5", () => {
    expect(bagi(10, 2)).toBe(5);
  });

  test("bagi: pembagi nol melempar error", () => {
    expect(() => bagi(10, 0)).toThrow("Pembagi tidak boleh nol");
  });
});
