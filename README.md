# PROJECT_PIPELINE_KELOMPOK_9

![CI Pipeline](https://github.com/Agith-maker/PROJECT_PIPELINE_KELOMPOK_9/actions/workflows/ci.yml/badge.svg)

Praktik pipeline CI menggunakan **GitHub Actions** untuk Tugas Team-Based Project (TBP) mata kuliah **Rekayasa Perangkat Lunak**.

Proyek berisi modul kalkulator sederhana (`tambah`, `kurang`, `kali`, `bagi`) dengan unit test menggunakan **Jest**.

## Anggota Kelompok 9

| No | Nama |
|----|------|
| 1 | Pasha Abdul Qadir |
| 2 | Nofragithos Marciano Maugo |
| 3 | I Nyoman Bagus Aryana |

Repository: https://github.com/Agith-maker/PROJECT_PIPELINE_KELOMPOK_9

## Struktur Proyek

```
PROJECT_PIPELINE_KELOMPOK_9
├── .github/workflows/ci.yml   # definisi workflow CI
├── docs/                      # bukti, ringkasan error, pembagian peran
├── calculator.js
├── calculator.test.js
├── package.json
└── README.md
```

## Menjalankan Secara Lokal

Prasyarat: Node.js 18 atau lebih baru.

```bash
npm install
npm run build
npm test
```

## Menjalankan CI

Workflow `.github/workflows/ci.yml` berjalan otomatis pada:

- `push` ke branch `main`
- `pull request` ke branch `main`

Langkah pipeline: Checkout, Setup Node.js 20, `npm install`, `npm run build`, `npm test`.

Hasil run dapat dilihat di tab **Actions** pada repository GitHub.

## Dokumentasi Tambahan

- [Ringkasan error dan perbaikan](docs/RINGKASAN_ERROR.md)
- [Bukti pipeline](docs/BUKTI_PIPELINE.md)
- [Pembagian peran](docs/PEMBAGIAN_PERAN.md)
