# Njagong Virtual

Njagong Virtual adalah aplikasi yang terdiri dari dua bagian utama: backend menggunakan Laravel dan frontend menggunakan React.js. Berikut adalah panduan untuk mengkloning dan menjalankan proyek ini di lingkungan lokal Anda.

## Struktur Proyek

- `backend/`: Kode sumber untuk backend yang menggunakan Laravel.
- `frontend/`: Kode sumber untuk frontend yang menggunakan React.js.

## Prerequisites

Sebelum memulai, pastikan Anda memiliki perangkat lunak berikut yang diinstal di komputer Anda:

- [Git](https://git-scm.com/)
- [PHP](https://www.php.net/) (versi sesuai dengan kebutuhan Laravel)
- [Composer](https://getcomposer.org/)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) atau [Yarn](https://yarnpkg.com/)

## Langkah-Langkah Menjalankan Proyek

Salin dan jalankan perintah berikut untuk mengkloning repositori dan memulai proyek backend dan frontend:

```bash
# Clone repositori
git clone https://github.com/wildanardian/njagong-virtual.git
```

```bash
# Masuk ke direktori proyek
cd njagong-virtual
```

Masuk ke direktori backend
```bash
cd backend
```

Install semua file yang diperlukan
```bash
composer install
```

Copy semua yang ada di dalam .env.example ke dalam .env
```bash
cp .env.example .env
```
Generate key untuk projek ini
```bash
php artisan key:generate
```

Buat sebuah database terlebih dahulu dengan menggunakan mysql dengan nama virtual-asisten-be (cek pada file .env di bagian ini)
```bash
# .env
DB_DATABASE=virtual-asisten-be
```
![image](https://github.com/user-attachments/assets/60d36107-267f-49f5-b89c-b68dbe85ec5c)


Jalankan command ini untuk membuat tabel di dalam database
```bash
php artisan migrate
```

Jalankan backend dengan menggunakan command berikut
```bash
php artisan serve
```
![php artisan serve](https://github.com/user-attachments/assets/c899f3b6-b2ff-45d5-95c3-94190c2d0ce4)


-------------------------------------------------------

Masuk ke dalam direktori frontend
```bash
cd ../frontend
```

Jalankan command berikut untuk install semua file yang diperlukan
```bash
npm install
```
Jalankan command untuk memulai project ini
```bash
npm start
```
Note : pastikan backend dan frontend berjalan bersama-sama
