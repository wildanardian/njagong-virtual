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

# Masuk ke direktori proyek
cd njagong-virtual

# Jalankan backend
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve &

# Jalankan frontend
cd ../frontend
npm install
npm start
