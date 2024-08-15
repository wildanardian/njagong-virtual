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

```bash
# Masuk ke direktori proyek
cd njagong-virtual

```bash
# Jalankan backend
cd backend
```bash
composer install
```bash
cp .env.example .env
```bash
php artisan key:generate

#Buat sebuah database terlebih dahulu dengan menggunakan mysql, kemudian eksekusi command berikut: 
```bash
php artisan migrate
```bash
php artisan serve

```bash
# Jalankan frontend
cd ../frontend

```bash
npm install

#kemudian untuk menjalankannya
```bash
npm start

#pastikan backend dan frontend berjalan semuanya
