# Kartek Learn — LMS V0.2 Demo

Frontend-only demo LMS dengan tiga role: Admin, Guru, dan Murid.

## Menjalankan dengan Docker

```bash
docker compose up -d --build
```

Buka:

```text
http://IP-SERVER:3005
```

## Update dari versi lama

Jika container lama masih ada, jalankan:

```bash
sudo docker compose down --remove-orphans
sudo docker compose up -d --build
```

## Demo role

- Admin: Admin
- Guru: Ramadhan Eka
- Murid: Aqzal

Tidak ada password pada V0. Klik role di halaman login.

## Yang baru di V0.2

- Konten contoh berbeda untuk Matematika, English Language, Computer Science, dan Fisika
- Lesson dapat dibuka dan dibaca, bukan hanya daftar statis
- Materi berisi ringkasan konsep, poin penting, contoh, dan latihan
- Mini quiz dengan opsi jawaban + tombol cek jawaban demo
- Assignment memiliki instruksi dan catatan penilaian
- Video lesson memiliki placeholder player untuk menunjukkan desain pengalaman belajar
- Murid dapat menandai lesson selesai; status disimpan di localStorage browser

## Catatan V0

- Dummy data di frontend
- Progress dan submit tugas demo memakai localStorage browser
- Belum ada database
- Belum ada authentication sungguhan
- Belum ada upload file sungguhan
- Belum ada email/notifikasi backend

## Kandidat V1

- PostgreSQL + Prisma
- Login/session nyata
- CRUD user/course/class
- Course builder & lesson editor
- Assignment submission + file storage
- Quiz engine dengan attempt dan scoring
- Gradebook persisten
- Announcement & notification
- Audit log dasar
