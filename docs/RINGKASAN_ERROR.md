# Ringkasan Error dan Langkah Perbaikan

## Error 1 (lokal): `ENOENT ... package.json`

**Gejala** di terminal VS Code:

```
npm error code ENOENT
npm error path C:\Users\agith\Downloads\kel\package.json
npm error Could not read package.json: Error: ENOENT: no such file or directory
```

**Penyebab:** file proyek (`calculator.js`, `calculator.test.js`, `package.json`, `README.md`) tidak berada di root repository, melainkan di dalam folder `.github`. npm mencari `package.json` di folder root sehingga tidak menemukannya.

**Perbaikan:** memindahkan semua file proyek ke root repository. Folder `.github` hanya berisi folder `workflows`. Setelah itu `npm install`, `npm run build`, dan `npm test` berhasil.

## Error 2 (CI): test gagal sengaja (demonstrasi run gagal)

**Skenario:** pada branch `demo-gagal`, fungsi `tambah` diubah menjadi `return a - b;` sehingga test `tambah: 2 + 3 = 5` gagal.

**Gejala** di tab Actions: run bertanda merah (X) pada langkah "Jalankan test":

```
Expected: 5
Received: -1
```

**Perbaikan:** mengembalikan `tambah` menjadi `return a + b;`, commit, lalu push. Run berikutnya berhasil (hijau).

> Catatan: isi bagian Error 2 sesuai kejadian nyata di repository kalian (URL run dicantumkan di `BUKTI_PIPELINE.md`).
