const QUIZ_DATA = {
    "SD": {
        "Agama": [
            
    {
        question: "Siapakah nama nabi terakhir?",
        options: ["Nabi Musa", "Nabi Isa", "Nabi Muhammad", "Nabi Adam"],
        answer: "Nabi Muhammad"
    },
    {
        question: "Kitab suci utama umat Islam adalah?",
        options: ["Taurat", "Zabur", "Injil", "Al-Qur'an"],
        answer: "Al-Qur'an"
    },
    {
        question: "Shalat wajib dilakukan berapa kali sehari?",
        options: ["3", "4", "5", "6"],
        answer: "5"
    },
    {
        question: "Puasa Ramadan dilakukan selama berapa hari?",
        options: ["28", "29-30", "31", "27"],
        answer: "29-30"
    },
    {
        question: "Nama bulan pertama dalam kalender Islam adalah?",
        options: ["Muharram", "Shafar", "Rabiul Awal", "Rajab"],
        answer: "Muharram"
    },
    {
        question: "Peristiwa Isra' Mi'raj dialami Nabi Muhammad pada malam hari dari kota?",
        options: ["Mekkah ke Madinah", "Mekkah ke Baitul Maqdis", "Madina ke Mekkah", "Mekkah ke Ta’if"],
        answer: "Mekkah ke Baitul Maqdis"
    },
    {
        question: "Rukun iman yang pertama adalah?",
        options: ["Beriman kepada Allah", "Beriman kepada malaikat", "Beriman kepada kitab-kitab", "Beriman kepada nabi"],
        answer: "Beriman kepada Allah"
    },
    {
        question: "Rukun Islam yang kedua adalah?",
        options: ["Shalat", "Zakat", "Puasa", "Haji"],
        answer: "Shalat"
    },
    {
        question: "Zakat wajib dikeluarkan ketika mencapai nisab, nisab adalah?",
        options: ["Batas minimum harta", "Batas maksimum harta", "Batas penghasilan bulanan", "Batas zakat fitrah"],
        answer: "Batas minimum harta"
    },
    {
        question: "Nama ibu Nabi Isa AS adalah?",
        options: ["Maryam", "Aisyah", "Hajar", "Sarah"],
        answer: "Maryam"
    },
    {
        question: "Shalat Jum’at wajib bagi?",
        options: ["Setiap Muslim laki-laki dewasa", "Setiap Muslim perempuan dewasa", "Anak-anak Muslim", "Semua umat"],
        answer: "Setiap Muslim laki-laki dewasa"
    },
    {
        question: "Hari raya umat Islam setelah Ramadan disebut?",
        options: ["Idul Adha", "Idul Fitri", "Maulid Nabi", "Nuzulul Qur'an"],
        answer: "Idul Fitri"
    },
    {
        question: "Perintah untuk berhaji hanya diwajibkan bagi?",
        options: ["Semua umat Islam", "Yang mampu secara fisik dan finansial", "Anak-anak Muslim", "Semua laki-laki dewasa"],
        answer: "Yang mampu secara fisik dan finansial"
    },
    {
        question: "Puasa sunnah yang dilakukan setiap Senin dan Kamis disebut?",
        options: ["Puasa Ayyamul Bidh", "Puasa Daud", "Puasa Senin Kamis", "Puasa Tarwiyah"],
        answer: "Puasa Senin Kamis"
    },
    {
        question: "Nama malaikat yang membawa wahyu kepada Nabi Muhammad?",
        options: ["Mikail", "Israfil", "Jibril", "Izrail"],
        answer: "Jibril"
    },
    {
        question: "Surat terakhir dalam Al-Qur'an adalah?",
        options: ["Al-Fatihah", "An-Nas", "Al-Ikhlas", "Al-Baqarah"],
        answer: "An-Nas"
    },
    {
        question: "Ayat kursi terdapat dalam surat?",
        options: ["Al-Baqarah", "Ali Imran", "An-Nisa", "Al-Maidah"],
        answer: "Al-Baqarah"
    },
    {
        question: "Shalat tarawih dilakukan pada bulan?",
        options: ["Muharram", "Ramadan", "Syawal", "Dzulhijjah"],
        answer: "Ramadan"
    },
    {
        question: "Jumlah rakaat shalat fardhu Dzuhur adalah?",
        options: ["2", "3", "4", "5"],
        answer: "4"
    },
    {
        question: "Doa sebelum tidur biasanya diawali dengan ayat?",
        options: ["Surat Al-Fatihah", "Ayat Kursi", "Surat Al-Ikhlas", "Surat Al-Mulk"],
        answer: "Ayat Kursi"
    },
    {
        question: "Orang yang menunaikan haji disebut?",
        options: ["Haji", "Muazin", "Imam", "Mubaligh"],
        answer: "Haji"
    },
    {
        question: "Doa ketika mendengar adzan dilakukan sebelum?",
        options: ["Iqamah", "Shalat", "Puasa", "Zakat"],
        answer: "Shalat"
    },
    {
        question: "Nama kota kelahiran Nabi Muhammad?",
        options: ["Madinah", "Mekkah", "Ta’if", "Yatsrib"],
        answer: "Mekkah"
    },
    {
        question: "Hari raya Idul Adha berkaitan dengan kisah Nabi?",
        options: ["Nabi Ibrahim", "Nabi Musa", "Nabi Isa", "Nabi Muhammad"],
        answer: "Nabi Ibrahim"
    },
    {
        question: "Rukun Islam yang keempat adalah?",
        options: ["Shalat", "Zakat", "Puasa", "Haji"],
        answer: "Puasa"
    },
    {
        question: "Rukun Islam yang kelima adalah?",
        options: ["Shalat", "Zakat", "Puasa", "Haji"],
        answer: "Haji"
    },
    {
        question: "Shalat wajib subuh dilakukan berapa rakaat?",
        options: ["2", "4", "3", "1"],
        answer: "2"
    },
    {
        question: "Puasa wajib Ramadhan dimulai pada bulan?",
        options: ["Syawal", "Dzulhijjah", "Ramadan", "Muharram"],
        answer: "Ramadan"
    },
    {
        question: "Nama malaikat pencabut nyawa adalah?",
        options: ["Mikail", "Jibril", "Israfil", "Izrail"],
        answer: "Izrail"
    },
    {
        question: "Shalat witir biasanya dilakukan pada malam hari setelah shalat?",
        options: ["Isya", "Maghrib", "Subuh", "Dzuhur"],
        answer: "Isya"
    }
],

        "B. Indonesia": [
    {
        question: "Apa sinonim dari kata 'besar'?",
        options: ["Kecil", "Raksasa", "Pendek", "Tipis"],
        answer: "Raksasa"
    },
    {
        question: "Apa antonim dari kata 'panjang'?",
        options: ["Pendek", "Lebar", "Tinggi", "Jauh"],
        answer: "Pendek"
    },
    {
        question: "Kalimat mana yang menggunakan kata tanya?",
        options: ["Dia pergi ke sekolah", "Siapa yang datang?", "Aku sedang membaca buku", "Ibu memasak di dapur"],
        answer: "Siapa yang datang?"
    },
    {
        question: "Kalimat 'Budi bermain bola di lapangan' termasuk jenis kalimat?",
        options: ["Perintah", "Berita", "Tanya", "Seru"],
        answer: "Berita"
    },
    {
        question: "Kata 'menulis' termasuk kata kerja atau kata sifat?",
        options: ["Kata kerja", "Kata sifat", "Kata benda", "Kata depan"],
        answer: "Kata kerja"
    },
    {
        question: "Kata 'indah' termasuk kata sifat atau kata kerja?",
        options: ["Kata sifat", "Kata kerja", "Kata benda", "Kata ganti"],
        answer: "Kata sifat"
    },
    {
        question: "Kalimat 'Tolong ambilkan buku itu!' termasuk jenis kalimat?",
        options: ["Perintah", "Tanya", "Berita", "Seru"],
        answer: "Perintah"
    },
    {
        question: "Kalimat 'Alangkah indahnya pemandangan ini!' termasuk kalimat?",
        options: ["Seru", "Tanya", "Perintah", "Berita"],
        answer: "Seru"
    },
    {
        question: "Kata ganti orang pertama tunggal adalah?",
        options: ["Aku", "Kamu", "Dia", "Mereka"],
        answer: "Aku"
    },
    {
        question: "Kata ganti orang kedua tunggal adalah?",
        options: ["Aku", "Kamu", "Dia", "Mereka"],
        answer: "Kamu"
    },
    {
        question: "Kata ganti orang ketiga tunggal adalah?",
        options: ["Aku", "Kamu", "Dia", "Mereka"],
        answer: "Dia"
    },
    {
        question: "Kata ganti orang ketiga jamak adalah?",
        options: ["Aku", "Kamu", "Dia", "Mereka"],
        answer: "Mereka"
    },
    {
        question: "Kalimat 'Bunga itu sangat harum' mengandung kata sifat?",
        options: ["Benar", "Salah", "Tidak pasti", "Bisa iya bisa tidak"],
        answer: "Benar"
    },
    {
        question: "Kalimat 'Ayah membaca koran setiap pagi' mengandung kata kerja?",
        options: ["Benar", "Salah", "Tidak pasti", "Bisa iya bisa tidak"],
        answer: "Benar"
    },
    {
        question: "Kalimat 'Siapa nama temanmu?' termasuk kalimat tanya atau berita?",
        options: ["Tanya", "Berita", "Perintah", "Seru"],
        answer: "Tanya"
    },
    {
        question: "Kalimat 'Jangan lupa membawa buku!' termasuk kalimat?",
        options: ["Perintah", "Tanya", "Berita", "Seru"],
        answer: "Perintah"
    },
    {
        question: "Kata 'rumah', 'sekolah', 'meja' termasuk kata?",
        options: ["Kata benda", "Kata kerja", "Kata sifat", "Kata ganti"],
        answer: "Kata benda"
    },
    {
        question: "Kata 'lari', 'menulis', 'membaca' termasuk kata?",
        options: ["Kata kerja", "Kata benda", "Kata sifat", "Kata ganti"],
        answer: "Kata kerja"
    },
    {
        question: "Kata 'cantik', 'indah', 'tinggi' termasuk kata?",
        options: ["Kata sifat", "Kata benda", "Kata kerja", "Kata ganti"],
        answer: "Kata sifat"
    },
    {
        question: "Kalimat 'Aku senang bermain di taman' termasuk kalimat?",
        options: ["Berita", "Tanya", "Perintah", "Seru"],
        answer: "Berita"
    },
    {
        question: "Kalimat 'Ayo kita bermain bola!' termasuk kalimat?",
        options: ["Seru", "Berita", "Tanya", "Perintah"],
        answer: "Seru"
    },
    {
        question: "Kalimat 'Apakah kamu sudah makan?' termasuk kalimat?",
        options: ["Tanya", "Berita", "Perintah", "Seru"],
        answer: "Tanya"
    },
    {
        question: "Sinonim dari kata 'senang' adalah?",
        options: ["Bahagia", "Sedih", "Marah", "Kesal"],
        answer: "Bahagia"
    },
    {
        question: "Antonim dari kata 'cepat' adalah?",
        options: ["Lambat", "Kencang", "Gesit", "Cepat sekali"],
        answer: "Lambat"
    },
    {
        question: "Kata 'kami' termasuk kata ganti orang?",
        options: ["Kedua jamak", "Pertama tunggal", "Ketiga tunggal", "Ketiga jamak"],
        answer: "Pertama jamak"
    },
    {
        question: "Kata 'dia' termasuk kata ganti orang?",
        options: ["Pertama tunggal", "Kedua tunggal", "Ketiga tunggal", "Ketiga jamak"],
        answer: "Ketiga tunggal"
    },
    {
        question: "Kalimat 'Ibu memasak di dapur' mengandung kata kerja?",
        options: ["Benar", "Salah", "Tidak pasti", "Bisa iya bisa tidak"],
        answer: "Benar"
    },
    {
        question: "Kalimat 'Wah, indahnya pelangi!' termasuk kalimat?",
        options: ["Seru", "Berita", "Tanya", "Perintah"],
        answer: "Seru"
    },
    {
        question: "Kata 'di', 'ke', 'dari' termasuk kata?",
        options: ["Kata depan", "Kata benda", "Kata kerja", "Kata sifat"],
        answer: "Kata depan"
    },
    {
        question: "Kata 'dan', 'atau', 'tetapi' termasuk kata?",
        options: ["Kata penghubung", "Kata benda", "Kata kerja", "Kata sifat"],
        answer: "Kata penghubung"
    },
    {
        question: "Kalimat 'Saya pergi ke sekolah' termasuk kalimat?",
        options: ["Berita", "Tanya", "Perintah", "Seru"],
        answer: "Berita"
    },
    {
        question: "Kalimat 'Silakan duduk!' termasuk kalimat?",
        options: ["Perintah", "Tanya", "Berita", "Seru"],
        answer: "Perintah"
    },
    {
        question: "Kalimat 'Wah, aku senang sekali!' termasuk kalimat?",
        options: ["Seru", "Berita", "Tanya", "Perintah"],
        answer: "Seru"
    },
    {
        question: "Kata 'meja' termasuk kata benda atau kata sifat?",
        options: ["Kata benda", "Kata sifat", "Kata kerja", "Kata ganti"],
        answer: "Kata benda"
    },
    {
        question: "Kata 'merah' termasuk kata benda atau kata sifat?",
        options: ["Kata sifat", "Kata benda", "Kata kerja", "Kata ganti"],
        answer: "Kata sifat"
    },
    {
        question: "Kalimat 'Siapa yang ingin ikut lomba?' termasuk kalimat?",
        options: ["Tanya", "Berita", "Perintah", "Seru"],
        answer: "Tanya"
    },
    {
        question: "Kata 'lari', 'berenang', 'mendaki' termasuk kata kerja atau kata benda?",
        options: ["Kata kerja", "Kata benda", "Kata sifat", "Kata depan"],
        answer: "Kata kerja"
    },
    {
        question: "Kata 'indah', 'cantik', 'tinggi' termasuk kata kerja atau kata sifat?",
        options: ["Kata sifat", "Kata benda", "Kata kerja", "Kata ganti"],
        answer: "Kata sifat"
    },
    {
        question: "Kalimat 'Jangan lupa membawa payung!' termasuk kalimat?",
        options: ["Perintah", "Tanya", "Berita", "Seru"],
        answer: "Perintah"
    },
    {
        question: "Kata 'pagi', 'siang', 'malam' termasuk kata benda atau kata sifat?",
        options: ["Kata benda", "Kata sifat", "Kata kerja", "Kata ganti"],
        answer: "Kata benda"
    },
    {
        question: "Kalimat 'Ayo kita belajar bersama!' termasuk kalimat?",
        options: ["Seru", "Berita", "Tanya", "Perintah"],
        answer: "Seru"
    },
    {
        question: "Kata 'kami' termasuk kata ganti orang pertama, kedua, atau ketiga?",
        options: ["Pertama", "Kedua", "Ketiga", "Keempat"],
        answer: "Pertama"
    },
    {
        question: "Kata 'mereka' termasuk kata ganti orang pertama, kedua, atau ketiga?",
        options: ["Pertama", "Kedua", "Ketiga", "Keempat"],
        answer: "Ketiga"
    },
    {
        question: "Kalimat 'Aku membaca buku di perpustakaan' mengandung kata kerja?",
        options: ["Benar", "Salah", "Tidak pasti", "Bisa iya bisa tidak"],
        answer: "Benar"
    },
    {
        question: "Kalimat 'Wah, cantiknya bunga itu!' termasuk kalimat?",
        options: ["Seru", "Berita", "Tanya", "Perintah"],
        answer: "Seru"
    },
    {
        question: "Kata 'di', 'ke', 'dari' termasuk kata depan atau kata penghubung?",
        options: ["Kata depan", "Kata penghubung", "Kata benda", "Kata sifat"],
        answer: "Kata depan"
    },
    {
        question: "Kata 'dan', 'atau', 'tetapi' termasuk kata depan atau kata penghubung?",
        options: ["Kata penghubung", "Kata depan", "Kata benda", "Kata sifat"],
        answer: "Kata penghubung"
    }
],

        // --- PENAMBAHAN MAPEL SD (3 & 4) ---
        "Matematika": [
    {
        question: "Hasil dari 5 + 3 adalah?",
        options: ["7", "8", "9", "10"],
        answer: "8"
    },
    {
        question: "Hasil dari 10 - 4 adalah?",
        options: ["5", "6", "7", "8"],
        answer: "6"
    },
    {
        question: "Hasil dari 6 × 3 adalah?",
        options: ["18", "9", "12", "15"],
        answer: "18"
    },
    {
        question: "Hasil dari 20 ÷ 4 adalah?",
        options: ["4", "5", "6", "8"],
        answer: "5"
    },
    {
        question: "Urutan bilangan dari kecil ke besar adalah?",
        options: ["9, 7, 8", "5, 6, 7", "7, 5, 6", "8, 9, 7"],
        answer: "5, 6, 7"
    },
    {
        question: "Bilangan setelah 99 adalah?",
        options: ["98", "100", "101", "99"],
        answer: "100"
    },
    {
        question: "Bilangan sebelum 1000 adalah?",
        options: ["999", "998", "1001", "100"],
        answer: "999"
    },
    {
        question: "Nilai tempat angka 7 pada 372 adalah?",
        options: ["Ratusan", "Puluhan", "Satuan", "Ribu"],
        answer: "Puluhan"
    },
    {
        question: "Nilai angka 5 pada bilangan 452 adalah?",
        options: ["5 satuan", "5 puluhan", "5 ratusan", "5 ribuan"],
        answer: "5 puluhan"
    },
    {
        question: "Hasil dari 12 + 8 adalah?",
        options: ["18", "19", "20", "21"],
        answer: "20"
    },
    {
        question: "Hasil dari 15 - 9 adalah?",
        options: ["5", "6", "7", "8"],
        answer: "6"
    },
    {
        question: "Hasil dari 7 × 5 adalah?",
        options: ["30", "35", "40", "45"],
        answer: "35"
    },
    {
        question: "Hasil dari 24 ÷ 6 adalah?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "Bilangan ganjil berikut adalah?",
        options: ["2", "4", "7", "8"],
        answer: "7"
    },
    {
        question: "Bilangan genap berikut adalah?",
        options: ["3", "5", "9", "10"],
        answer: "10"
    },
    {
        question: "Hasil dari 50 + 25 adalah?",
        options: ["70", "75", "80", "85"],
        answer: "75"
    },
    {
        question: "Hasil dari 90 - 45 adalah?",
        options: ["35", "40", "45", "50"],
        answer: "45"
    },
    {
        question: "Hasil dari 8 × 8 adalah?",
        options: ["56", "62", "64", "72"],
        answer: "64"
    },
    {
        question: "Hasil dari 36 ÷ 9 adalah?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "Nilai dari 1 lusin adalah?",
        options: ["10", "11", "12", "13"],
        answer: "12"
    },
    {
        question: "1 meter sama dengan berapa sentimeter?",
        options: ["10 cm", "100 cm", "1000 cm", "10000 cm"],
        answer: "100 cm"
    },
    {
        question: "1 kilogram sama dengan berapa gram?",
        options: ["10 g", "100 g", "1000 g", "10000 g"],
        answer: "1000 g"
    },
    {
        question: "Bentuk pecahan dari setengah adalah?",
        options: ["1/2", "1/3", "2/3", "3/4"],
        answer: "1/2"
    },
    {
        question: "Bentuk pecahan dari seperempat adalah?",
        options: ["1/2", "1/3", "1/4", "3/4"],
        answer: "1/4"
    },
    {
        question: "Bilangan 50 lebih besar dari?",
        options: ["60", "70", "40", "90"],
        answer: "40"
    },
    {
        question: "Bilangan 25 lebih kecil dari?",
        options: ["20", "15", "30", "10"],
        answer: "30"
    },
    {
        question: "Hasil dari 100 - 25 adalah?",
        options: ["60", "70", "75", "80"],
        answer: "75"
    },
    {
        question: "Hasil dari 10 × 10 adalah?",
        options: ["50", "80", "90", "100"],
        answer: "100"
    },
    {
        question: "Hasil dari 81 ÷ 9 adalah?",
        options: ["7", "8", "9", "10"],
        answer: "9"
    },
    {
        question: "Hasil dari 9 + 6 adalah?",
        options: ["13", "14", "15", "16"],
        answer: "15"
    },
    {
        question: "Hasil dari 40 ÷ 5 adalah?",
        options: ["6", "7", "8", "9"],
        answer: "8"
    },
    {
        question: "Bentuk panjang 2 meter sama dengan berapa cm?",
        options: ["20", "200", "2000", "20.000"],
        answer: "200"
    },
    {
        question: "Jam 14.00 sama dengan pukul berapa?",
        options: ["Dua pagi", "Dua siang", "Dua malam", "Empat sore"],
        answer: "Dua siang"
    },
    {
        question: "Satu minggu ada berapa hari?",
        options: ["5", "6", "7", "8"],
        answer: "7"
    },
    {
        question: "Satu tahun ada berapa bulan?",
        options: ["10", "11", "12", "13"],
        answer: "12"
    },
    {
        question: "Satu jam ada berapa menit?",
        options: ["30", "45", "60", "100"],
        answer: "60"
    },
    {
        question: "Satu menit ada berapa detik?",
        options: ["10", "30", "60", "100"],
        answer: "60"
    },
    {
        question: "Segitiga mempunyai berapa sisi?",
        options: ["2", "3", "4", "5"],
        answer: "3"
    },
    {
        question: "Persegi mempunyai berapa sudut?",
        options: ["2", "3", "4", "5"],
        answer: "4"
    },
    {
        question: "Persegi panjang mempunyai berapa sisi?",
        options: ["2", "3", "4", "5"],
        answer: "4"
    },
    {
        question: "Bentuk bola termasuk bangun ruang atau datar?",
        options: ["Ruang", "Datar", "Garis", "Segitiga"],
        answer: "Ruang"
    },
    {
        question: "Bangun yang memiliki sisi sama panjang adalah?",
        options: ["Persegi", "Persegi panjang", "Segitiga", "Trapesium"],
        answer: "Persegi"
    },
    {
        question: "Bangun yang memiliki 3 sisi adalah?",
        options: ["Segitiga", "Persegi", "Lingkaran", "Oval"],
        answer: "Segitiga"
    },
    {
        question: "Bangun yang tidak memiliki sisi adalah?",
        options: ["Lingkaran", "Persegi", "Segitiga", "Persegi panjang"],
        answer: "Lingkaran"
    },
    {
        question: "Jika panjang 5 cm dan lebar 3 cm, maka keliling persegipanjang adalah?",
        options: ["8 cm", "15 cm", "16 cm", "10 cm"],
        answer: "16 cm"
    },
    {
        question: "Jika sisi persegi 4 cm, maka luasnya adalah?",
        options: ["8 cm²", "12 cm²", "16 cm²", "20 cm²"],
        answer: "16 cm²"
    },
    {
        question: "Hasil dari 3 + 7 × 2 adalah?",
        options: ["17", "20", "23", "14"],
        answer: "17"
    },
    {
        question: "Setengah dari 50 adalah?",
        options: ["20", "25", "30", "40"],
        answer: "25"
    },
    {
        question: "Seperempat dari 100 adalah?",
        options: ["10", "20", "25", "50"],
        answer: "25"
    },
    {
        question: "Angka Romawi dari 10 adalah?",
        options: ["V", "X", "L", "C"],
        answer: "X"
    },
    {
        question: "Angka Romawi dari 5 adalah?",
        options: ["I", "V", "X", "L"],
        answer: "V"
    }
],

        "PPKN": [
    {
        question: "Lambang negara Indonesia adalah?",
        options: ["Bendera Merah Putih", "Burung Garuda", "Padi dan Kapas", "Pohon Beringin"],
        answer: "Burung Garuda"
    },
    {
        question: "Semboyan bangsa Indonesia adalah?",
        options: ["Garuda Sakti", "Bhinneka Tunggal Ika", "Merdeka Jaya", "NKRI Harga Mati"],
        answer: "Bhinneka Tunggal Ika"
    },
    {
        question: "Jumlah sila dalam Pancasila adalah?",
        options: ["3", "4", "5", "6"],
        answer: "5"
    },
    {
        question: "Sila pertama Pancasila berbunyi?",
        options: [
            "Kemanusiaan yang adil dan beradab",
            "Ketuhanan yang Maha Esa",
            "Persatuan Indonesia",
            "Keadilan sosial bagi seluruh rakyat Indonesia"
        ],
        answer: "Ketuhanan yang Maha Esa"
    },
    {
        question: "Sila kedua Pancasila berbunyi?",
        options: [
            "Kemanusiaan yang adil dan beradab",
            "Persatuan Indonesia",
            "Kerakyatan yang dipimpin oleh hikmat kebijaksanaan",
            "Keadilan sosial bagi seluruh rakyat Indonesia"
        ],
        answer: "Kemanusiaan yang adil dan beradab"
    },
    {
        question: "Sila ketiga Pancasila berbunyi?",
        options: [
            "Persatuan Indonesia",
            "Kemanusiaan yang adil dan beradab",
            "Ketuhanan yang Maha Esa",
            "Keadilan sosial bagi seluruh rakyat Indonesia"
        ],
        answer: "Persatuan Indonesia"
    },
    {
        question: "Sila keempat Pancasila berbunyi?",
        options: [
            "Keadilan sosial bagi seluruh rakyat Indonesia",
            "Persatuan Indonesia",
            "Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan",
            "Ketuhanan yang Maha Esa"
        ],
        answer: "Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan"
    },
    {
        question: "Sila kelima Pancasila berbunyi?",
        options: [
            "Keadilan sosial bagi seluruh rakyat Indonesia",
            "Kemanusiaan yang adil dan beradab",
            "Persatuan Indonesia",
            "Ketuhanan yang Maha Esa"
        ],
        answer: "Keadilan sosial bagi seluruh rakyat Indonesia"
    },
    {
        question: "Bentuk negara Indonesia adalah?",
        options: ["Kerajaan", "Republik", "Persekutuan", "Monarki"],
        answer: "Republik"
    },
    {
        question: "Presiden pertama Indonesia adalah?",
        options: ["Soekarno", "Soeharto", "Habibie", "Megawati"],
        answer: "Soekarno"
    },
    {
        question: "Wakil presiden pertama Indonesia adalah?",
        options: ["Soeharto", "Moh. Hatta", "BJ Habibie", "Megawati"],
        answer: "Moh. Hatta"
    },
    {
        question: "Tanggal berapa Indonesia merdeka?",
        options: ["17 Agustus 1945", "20 Mei 1908", "10 November 1945", "1 Juni 1945"],
        answer: "17 Agustus 1945"
    },
    {
        question: "Bendera negara Indonesia berwarna?",
        options: ["Merah Putih", "Merah Biru", "Putih Hijau", "Kuning Merah"],
        answer: "Merah Putih"
    },
    {
        question: "Warna merah pada bendera melambangkan?",
        options: ["Kesucian", "Keberanian", "Kemakmuran", "Keadilan"],
        answer: "Keberanian"
    },
    {
        question: "Warna putih pada bendera melambangkan?",
        options: ["Kesucian", "Kekayaan", "Kekuatan", "Kekuasaan"],
        answer: "Kesucian"
    },
    {
        question: "Siapa yang membacakan teks proklamasi kemerdekaan?",
        options: ["Moh. Hatta", "Soekarno", "Jenderal Sudirman", "Ahmad Soebardjo"],
        answer: "Soekarno"
    },
    {
        question: "Dimana teks proklamasi dibacakan?",
        options: ["Istana Negara", "Pegangsaan Timur 56 Jakarta", "Lapangan Banteng", "Surabaya"],
        answer: "Pegangsaan Timur 56 Jakarta"
    },
    {
        question: "Siapa yang mengetik teks proklamasi?",
        options: ["Sayuti Melik", "Fatmawati", "Ahmad Soebardjo", "Moh. Hatta"],
        answer: "Sayuti Melik"
    },
    {
        question: "Apa arti kata 'merdeka'?",
        options: ["Bebas dari penjajahan", "Menjadi kaya", "Menjadi kuat", "Menjadi pintar"],
        answer: "Bebas dari penjajahan"
    },
    {
        question: "Dasar negara Indonesia adalah?",
        options: ["UUD 1945", "Pancasila", "GBHN", "Proklamasi"],
        answer: "Pancasila"
    },
    {
        question: "Lagu kebangsaan Indonesia adalah?",
        options: ["Halo-Halo Bandung", "Indonesia Raya", "Tanah Airku", "Garuda Pancasila"],
        answer: "Indonesia Raya"
    },
    {
        question: "Pahlawan yang dikenal dengan sebutan 'Bapak Pendidikan Nasional' adalah?",
        options: ["Ki Hajar Dewantara", "Cut Nyak Dien", "Jenderal Sudirman", "RA Kartini"],
        answer: "Ki Hajar Dewantara"
    },
    {
        question: "Pahlawan wanita dari Jepara adalah?",
        options: ["Cut Nyak Dien", "RA Kartini", "Martha Christina Tiahahu", "Dewi Sartika"],
        answer: "RA Kartini"
    },
    {
        question: "Tanggal lahir RA Kartini diperingati setiap?",
        options: ["21 April", "17 Agustus", "20 Mei", "10 November"],
        answer: "21 April"
    },
    {
        question: "Hari Pahlawan diperingati setiap?",
        options: ["17 Agustus", "10 November", "1 Juni", "28 Oktober"],
        answer: "10 November"
    },
    {
        question: "Hari Sumpah Pemuda diperingati setiap?",
        options: ["17 Agustus", "28 Oktober", "20 Mei", "1 Juni"],
        answer: "28 Oktober"
    },
    {
        question: "Isi dari Sumpah Pemuda adalah tentang?",
        options: ["Persatuan bangsa", "Kemerdekaan", "Kebebasan beragama", "Keadilan"],
        answer: "Persatuan bangsa"
    },
    {
        question: "Tokoh pahlawan yang berasal dari Aceh adalah?",
        options: ["Cut Nyak Dien", "RA Kartini", "Ki Hajar Dewantara", "Pattimura"],
        answer: "Cut Nyak Dien"
    },
    {
        question: "Pahlawan yang berjuang di Maluku adalah?",
        options: ["Pattimura", "Diponegoro", "Sisingamangaraja", "Cut Nyak Dien"],
        answer: "Pattimura"
    },
    {
        question: "Pahlawan yang memimpin perang Diponegoro adalah?",
        options: ["Sultan Hasanuddin", "Pangeran Diponegoro", "Imam Bonjol", "Soedirman"],
        answer: "Pangeran Diponegoro"
    },
    {
        question: "Kewajiban seorang siswa di sekolah adalah?",
        options: ["Belajar dengan rajin", "Datang terlambat", "Bermain terus", "Tidak hormat guru"],
        answer: "Belajar dengan rajin"
    },
    {
        question: "Hak seorang siswa di sekolah adalah?",
        options: ["Mendapat pelajaran", "Menyapu kelas", "Menyontek", "Tidak belajar"],
        answer: "Mendapat pelajaran"
    },
    {
        question: "Contoh sikap menghormati guru adalah?",
        options: ["Membantah", "Diam saja", "Mendengarkan nasihatnya", "Pergi tanpa izin"],
        answer: "Mendengarkan nasihatnya"
    },
    {
        question: "Sikap terhadap teman yang berbeda agama adalah?",
        options: ["Membenci", "Menghina", "Menghormati", "Menjauhi"],
        answer: "Menghormati"
    },
    {
        question: "Simbol sila pertama Pancasila adalah?",
        options: ["Pohon Beringin", "Rantai", "Bintang", "Kepala Banteng"],
        answer: "Bintang"
    },
    {
        question: "Simbol sila kedua Pancasila adalah?",
        options: ["Rantai", "Bintang", "Pohon Beringin", "Padi dan Kapas"],
        answer: "Rantai"
    },
    {
        question: "Simbol sila ketiga Pancasila adalah?",
        options: ["Pohon Beringin", "Kepala Banteng", "Rantai", "Padi dan Kapas"],
        answer: "Pohon Beringin"
    },
    {
        question: "Simbol sila keempat Pancasila adalah?",
        options: ["Kepala Banteng", "Pohon Beringin", "Bintang", "Rantai"],
        answer: "Kepala Banteng"
    },
    {
        question: "Simbol sila kelima Pancasila adalah?",
        options: ["Padi dan Kapas", "Rantai", "Bintang", "Pohon Beringin"],
        answer: "Padi dan Kapas"
    },
    {
        question: "Apa arti dari 'Bhinneka Tunggal Ika'?",
        options: ["Berbeda-beda tetapi tetap satu", "Satu tujuan satu suara", "Bersatu selamanya", "Kuat karena bersama"],
        answer: "Berbeda-beda tetapi tetap satu"
    },
    {
        question: "Sikap menghormati orang tua menunjukkan pengamalan sila?",
        options: ["Pertama", "Kedua", "Ketiga", "Kelima"],
        answer: "Pertama"
    },
    {
        question: "Sikap suka menolong teman termasuk pengamalan sila?",
        options: ["Pertama", "Kedua", "Ketiga", "Keempat"],
        answer: "Kedua"
    },
    {
        question: "Sikap menjaga persatuan di kelas termasuk pengamalan sila?",
        options: ["Ketiga", "Pertama", "Keempat", "Kelima"],
        answer: "Ketiga"
    },
    {
        question: "Sikap suka bermusyawarah termasuk pengamalan sila?",
        options: ["Keempat", "Kedua", "Ketiga", "Kelima"],
        answer: "Keempat"
    },
    {
        question: "Sikap adil terhadap teman termasuk pengamalan sila?",
        options: ["Kelima", "Pertama", "Ketiga", "Keempat"],
        answer: "Kelima"
    },
    {
        question: "Apa yang harus kita lakukan sebelum belajar?",
        options: ["Berdoa", "Tidur", "Main game", "Makan"],
        answer: "Berdoa"
    },
    {
        question: "Salah satu kewajiban di rumah adalah?",
        options: ["Membantu orang tua", "Bermain terus", "Marah-marah", "Menonton TV terus"],
        answer: "Membantu orang tua"
    },
    {
        question: "Apa lambang sila ketiga?",
        options: ["Pohon Beringin", "Kepala Banteng", "Rantai", "Padi dan Kapas"],
        answer: "Pohon Beringin"
    },
    {
        question: "Apa bunyi sila kelima?",
        options: [
            "Keadilan sosial bagi seluruh rakyat Indonesia",
            "Kemanusiaan yang adil dan beradab",
            "Ketuhanan yang Maha Esa",
            "Persatuan Indonesia"
        ],
        answer: "Keadilan sosial bagi seluruh rakyat Indonesia"
    },
    {
        question: "Apa kewajiban terhadap bendera merah putih?",
        options: ["Menjaga dan menghormatinya", "Meninggalkannya", "Merusaknya", "Mewarnainya"],
        answer: "Menjaga dan menghormatinya"
    },
    {
        question: "Salah satu contoh sikap cinta tanah air adalah?",
        options: ["Menggunakan produk Indonesia", "Menghina negara sendiri", "Mencontek", "Membuang sampah sembarangan"],
        answer: "Menggunakan produk Indonesia"
    }
],

    },
    
    "SMP": {
        "Matematika": [
    {
        question: "5 + 7 = ... (ayo jangan pakai kalkulator, pakai otak encer kamu 😆)",
        options: ["10", "11", "12", "13"],
        answer: "12"
    },
    {
        question: "Jika kamu punya 10 permen dan temanmu minta 3, berapa sisanya? (jangan bilang 'aku sembunyikan semua')",
        options: ["7", "8", "9", "10"],
        answer: "7"
    },
    {
        question: "8 × 6 = ... (ingat, ini bukan nomor sandal 😜)",
        options: ["42", "46", "48", "56"],
        answer: "48"
    },
    {
        question: "20 ÷ 4 = ... (bagi-bagi kue adil ya!)",
        options: ["4", "5", "6", "7"],
        answer: "5"
    },
    {
        question: "Akar dari 49 adalah ... (bukan akar pohon ya 🌳)",
        options: ["6", "7", "8", "9"],
        answer: "7"
    },
    {
        question: "Jika 2x = 10, maka nilai x adalah ...",
        options: ["2", "3", "5", "10"],
        answer: "5"
    },
    {
        question: "Nilai dari 3² adalah ... (kuadrat, bukan kotak parkir 🚗)",
        options: ["6", "9", "12", "3"],
        answer: "9"
    },
    {
        question: "π (pi) itu nilainya kira-kira ...",
        options: ["2,14", "3,14", "4,14", "5,14"],
        answer: "3,14"
    },
    {
        question: "Luas persegi dengan sisi 6 cm adalah ... cm² (bukan luas hati ya 💖)",
        options: ["24", "30", "36", "42"],
        answer: "36"
    },
    {
        question: "Keliling persegi panjang 10 × 4 cm adalah ... cm (ayo jangan ngantuk 😴)",
        options: ["20", "24", "28", "30"],
        answer: "28"
    },
    {
        question: "Hasil dari 5³ adalah ...",
        options: ["25", "75", "100", "125"],
        answer: "125"
    },
    {
        question: "Jika sisi miring segitiga siku-siku adalah 13 dan satu sisi 5, sisi lainnya adalah ...",
        options: ["12", "10", "8", "9"],
        answer: "12"
    },
    {
        question: "Nilai dari 15% dari 200 adalah ... (ngitungnya boleh sambil nyemil 😋)",
        options: ["25", "30", "35", "40"],
        answer: "30"
    },
    {
        question: "Jika 3x + 2 = 11, maka x = ...",
        options: ["2", "3", "4", "5"],
        answer: "3"
    },
    {
        question: "Sudut segitiga sama sisi semuanya ... derajat (ya iyalah 😆)",
        options: ["45", "60", "90", "120"],
        answer: "60"
    },
    {
        question: "Jumlah sudut dalam segitiga adalah ... derajat",
        options: ["90", "120", "180", "270"],
        answer: "180"
    },
    {
        question: "Nilai dari √81 adalah ...",
        options: ["7", "8", "9", "10"],
        answer: "9"
    },
    {
        question: "Jika kamu punya ½ kue dan temanmu juga ½, maka kalian punya ... (hitung jangan ngiler 🍰)",
        options: ["1", "2", "½", "¼"],
        answer: "1"
    },
    {
        question: "Jika uangmu 100 ribu dan kamu belanja 60 ribu, sisanya ... (jangan bilang habis buat jajan 😜)",
        options: ["30.000", "40.000", "50.000", "60.000"],
        answer: "40.000"
    },
    {
        question: "Bilangan prima terkecil adalah ...",
        options: ["1", "2", "3", "5"],
        answer: "2"
    },
    {
        question: "Luas lingkaran dengan jari-jari 7 cm adalah ... (pakai π = 22/7)",
        options: ["132", "144", "154", "166"],
        answer: "154"
    },
    {
        question: "Keliling lingkaran jari-jari 7 cm adalah ...",
        options: ["38", "40", "44", "46"],
        answer: "44"
    },
    {
        question: "Akar dari 100 adalah ... (nggak usah panik 😅)",
        options: ["9", "10", "11", "12"],
        answer: "10"
    },
    {
        question: "Jika 4x = 20 maka x = ...",
        options: ["4", "5", "6", "7"],
        answer: "5"
    },
    {
        question: "Nilai dari 2³ adalah ...",
        options: ["6", "8", "10", "12"],
        answer: "8"
    },
    {
        question: "Jika panjang sisi kubus 4 cm, maka volumenya ... cm³ (bayangin es batu 🧊)",
        options: ["16", "32", "48", "64"],
        answer: "64"
    },
    {
        question: "Jika panjang balok 8 cm, lebar 4 cm, tinggi 2 cm, volumenya adalah ... cm³",
        options: ["64", "60", "70", "80"],
        answer: "64"
    },
    {
        question: "Hasil dari ¾ + ¼ adalah ...",
        options: ["1", "½", "¼", "2"],
        answer: "1"
    },
    {
        question: "Sudut siku-siku besarnya ... derajat (kalau salah, duduk tegak ya 😆)",
        options: ["45", "60", "90", "120"],
        answer: "90"
    },
    {
        question: "Jika jarak 60 km ditempuh dalam 2 jam, maka kecepatan adalah ... km/jam",
        options: ["20", "25", "30", "40"],
        answer: "30"
    },
    {
        question: "Jika 15 + x = 30, maka x = ...",
        options: ["10", "15", "20", "25"],
        answer: "15"
    },
    {
        question: "Nilai dari -5 + 8 adalah ... (minus jangan bikin kamu down 😄)",
        options: ["-3", "2", "3", "13"],
        answer: "3"
    },
    {
        question: "Jika suhu naik dari 25°C ke 30°C, perubahan suhunya adalah ...",
        options: ["3°C", "4°C", "5°C", "6°C"],
        answer: "5°C"
    },
    {
        question: "Koordinat titik asal pada bidang kartesius adalah ...",
        options: ["(0,0)", "(1,1)", "(2,0)", "(0,2)"],
        answer: "(0,0)"
    },
    {
        question: "Nilai dari 2x + 3 = 11 adalah x = ...",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "Hasil dari 100 ÷ 0,5 adalah ... (jangan salah logika 😆)",
        options: ["50", "100", "150", "200"],
        answer: "200"
    },
    {
        question: "Jika segitiga alas 8 cm dan tinggi 6 cm, maka luasnya adalah ... cm²",
        options: ["24", "30", "36", "40"],
        answer: "24"
    },
    {
        question: "Nilai dari 10% × 200 adalah ...",
        options: ["10", "15", "20", "25"],
        answer: "20"
    },
    {
        question: "Hasil dari 9² adalah ...",
        options: ["72", "80", "81", "90"],
        answer: "81"
    },
    {
        question: "Hasil dari 0,25 × 4 adalah ...",
        options: ["0,5", "1", "2", "4"],
        answer: "1"
    },
    {
        question: "Bilangan negatif + positif hasilnya ... (tergantung siapa yang lebih besar 😆)",
        options: ["Selalu negatif", "Selalu positif", "Tergantung nilainya", "Selalu nol"],
        answer: "Tergantung nilainya"
    },
    {
        question: "Jika 2x - 4 = 6 maka x = ...",
        options: ["3", "4", "5", "6"],
        answer: "5"
    },
    {
        question: "Nilai dari 1/3 + 1/6 = ...",
        options: ["1/2", "1/3", "2/3", "3/4"],
        answer: "1/2"
    },
    {
        question: "Akar dari 121 adalah ...",
        options: ["10", "11", "12", "13"],
        answer: "11"
    },
    {
        question: "Jika p = 3 dan q = 5, maka p + q × 2 = ... (ingat urutan operasi ya!)",
        options: ["13", "16", "10", "8"],
        answer: "13"
    },
    {
        question: "Nilai dari (5 + 3)² adalah ...",
        options: ["64", "49", "36", "81"],
        answer: "64"
    },
    {
        question: "Jika kamu beli 3 buku masing-masing Rp10.000, totalnya ... (belum termasuk rasa bahagia 📚)",
        options: ["Rp20.000", "Rp25.000", "Rp30.000", "Rp35.000"],
        answer: "Rp30.000"
    },
    {
        question: "Hasil dari 0 × 1000 adalah ... (ayo, jangan overthinking 😆)",
        options: ["0", "1", "10", "1000"],
        answer: "0"
    },
    {
        question: "Nilai dari 2 + 4 × 3 = ...",
        options: ["14", "18", "20", "24"],
        answer: "14"
    },
    {
        question: "Jika kamu belajar 2 jam sehari selama 5 hari, total waktu belajarmu ... jam (mantap 💪)",
        options: ["5", "8", "10", "12"],
        answer: "10"
    },
    {
        question: "Setengah dari 3/4 adalah ...",
        options: ["1/2", "3/8", "1/4", "3/4"],
        answer: "3/8"
    },
    {
        question: "Kalau nilai ulanganmu naik dari 70 ke 90, kamu naik berapa poin? (selamat ya 😁)",
        options: ["10", "15", "20", "25"],
        answer: "20"
    }
],

        "B. Inggris": [
  {
    question: "What is the English of 'kucing'? 🐱",
    options: ["Dog", "Cat", "Cow", "Mouse"],
    answer: "Cat"
  },
  {
    question: "Kalau kamu bilang 'I am hungry', itu artinya kamu ingin?",
    options: ["Tidur", "Makan", "Mandi", "Liburan"],
    answer: "Makan"
  },
  {
    question: "Apa arti kata 'beautiful'? (Clue: bukan 'bisa difoto' ya 😆)",
    options: ["Cantik", "Cepat", "Bersih", "Lucu"],
    answer: "Cantik"
  },
  {
    question: "What is 'sekolah' in English?",
    options: ["Hospital", "School", "Market", "Office"],
    answer: "School"
  },
  {
    question: "Kalimat yang benar: 'She ____ a book.'",
    options: ["read", "reads", "reading", "is read"],
    answer: "reads"
  },
  {
    question: "Kalau 'apple' itu apel, lalu 'pineapple' itu?",
    options: ["Apel pohon", "Nanas", "Apel berduri", "Jeruk"],
    answer: "Nanas"
  },
  {
    question: "Arti 'Good morning' adalah?",
    options: ["Selamat malam", "Selamat pagi", "Selamat siang", "Selamat sore"],
    answer: "Selamat pagi"
  },
  {
    question: "Kalimat 'I have two cats' artinya?",
    options: ["Saya punya dua kucing", "Saya makan dua kucing", "Saya jual dua kucing", "Kucing saya punya saya"],
    answer: "Saya punya dua kucing"
  },
  {
    question: "Bahasa Inggrisnya 'aku suka belajar' adalah?",
    options: ["I love studying", "I lazy study", "I hate study", "I am sleepy"],
    answer: "I love studying"
  },
  {
    question: "‘Thank you’ dibalas dengan?",
    options: ["Goodbye", "You’re welcome", "Please", "Sorry"],
    answer: "You’re welcome"
  },
  {
    question: "Kalau ‘rain’ itu hujan, maka ‘rainbow’ itu?",
    options: ["Pelangi", "Hujan deras", "Payung", "Awan"],
    answer: "Pelangi"
  },
  {
    question: "‘Excuse me’ digunakan saat kita?",
    options: ["Marah", "Minta izin", "Tidur", "Main bola"],
    answer: "Minta izin"
  },
  {
    question: "Kalimat lucu tapi benar: ‘My cat is not fat, it’s just ____.’",
    options: ["fluffy", "lazy", "round", "hungry"],
    answer: "fluffy"
  },
  {
    question: "Bahasa Inggrisnya 'teman' adalah?",
    options: ["Enemy", "Friend", "Teacher", "Brother"],
    answer: "Friend"
  },
  {
    question: "Kalau kamu bilang 'I am sleepy', berarti kamu?",
    options: ["Lapar", "Haus", "Ngantuk", "Sedih"],
    answer: "Ngantuk"
  },
  {
    question: "Arti ‘Don’t worry’ adalah?",
    options: ["Jangan khawatir", "Jangan mandi", "Ayo tidur", "Cepat lari"],
    answer: "Jangan khawatir"
  },
  {
    question: "Bahasa Inggrisnya ‘sapi’ adalah?",
    options: ["Chicken", "Goat", "Cow", "Sheep"],
    answer: "Cow"
  },
  {
    question: "What color is the sky? (Hint: bukan ‘ijo lumut’ 😆)",
    options: ["Blue", "Green", "Yellow", "Pink"],
    answer: "Blue"
  },
  {
    question: "Bahasa Inggrisnya 'sepatu' adalah?",
    options: ["Hat", "Shoe", "Sock", "Shirt"],
    answer: "Shoe"
  },
  {
    question: "Kalimat yang benar: ‘They ___ football every Sunday.’",
    options: ["plays", "played", "play", "playing"],
    answer: "play"
  },
  {
    question: "Arti ‘open the door’ adalah?",
    options: ["Buka pintu", "Tutup pintu", "Lihat pintu", "Cat pintu"],
    answer: "Buka pintu"
  },
  {
    question: "Kalimat: ‘I like banana because...’",
    options: ["It is yellow", "It can dance", "It is expensive", "It is round like moon"],
    answer: "It is yellow"
  },
  {
    question: "Bahasa Inggrisnya ‘makan pagi’ adalah?",
    options: ["Lunch", "Dinner", "Breakfast", "Snack"],
    answer: "Breakfast"
  },
  {
    question: "‘How are you?’ dibalas dengan?",
    options: ["I am fine", "No problem", "Yes, please", "Goodbye"],
    answer: "I am fine"
  },
  {
    question: "Kalimat: ‘This is my pencil, not your lipstick!’ artinya?",
    options: ["Ini pensilku, bukan lipstikmu! 😆", "Ini lipstikku, bukan pensilmu", "Itu bukan punyaku", "Kita tukeran ya"],
    answer: "Ini pensilku, bukan lipstikmu! 😆"
  },
  {
    question: "‘See you later’ artinya?",
    options: ["Sampai jumpa lagi", "Selamat datang", "Terima kasih", "Permisi dulu"],
    answer: "Sampai jumpa lagi"
  },
  {
    question: "Bahasa Inggrisnya ‘tidur’ adalah?",
    options: ["Eat", "Sleep", "Run", "Laugh"],
    answer: "Sleep"
  },
  {
    question: "Kalimat ‘He is tall’ berarti?",
    options: ["Dia pendek", "Dia tinggi", "Dia gemuk", "Dia lucu"],
    answer: "Dia tinggi"
  },
  {
    question: "Kalau kamu berkata ‘I’m bored’, kamu sedang?",
    options: ["Senang", "Bosannya minta ampun", "Marah", "Tidur"],
    answer: "Bosannya minta ampun"
  },
  {
    question: "Bahasa Inggrisnya ‘anjing’ adalah?",
    options: ["Cat", "Dog", "Bird", "Fish"],
    answer: "Dog"
  },
  {
    question: "‘Good night’ diucapkan saat?",
    options: ["Pagi", "Siang", "Malam", "Ujian"],
    answer: "Malam"
  },
  {
    question: "‘Happy Birthday!’ artinya?",
    options: ["Selamat pagi", "Selamat ulang tahun", "Selamat tidur", "Selamat datang"],
    answer: "Selamat ulang tahun"
  },
  {
    question: "Kalimat: ‘Don’t sleep in class!’ artinya?",
    options: ["Jangan tidur di kelas!", "Tidur di kelas yuk", "Kelasnya gelap", "Kelasnya enak buat tidur"],
    answer: "Jangan tidur di kelas!"
  },
  {
    question: "‘I have a little brother’ berarti?",
    options: ["Saya punya adik laki-laki", "Saya punya kakak perempuan", "Saya tidak punya saudara", "Saya punya teman kecil"],
    answer: "Saya punya adik laki-laki"
  },
  {
    question: "Bahasa Inggrisnya ‘buku’ adalah?",
    options: ["Pen", "Book", "Paper", "Table"],
    answer: "Book"
  },
  {
    question: "‘I like music’ artinya?",
    options: ["Saya suka musik", "Saya benci musik", "Musik suka saya", "Saya main musik"],
    answer: "Saya suka musik"
  },
  {
    question: "‘What is your name?’ artinya?",
    options: ["Kamu siapa?", "Siapa namamu?", "Kamu di mana?", "Berapa umurmu?"],
    answer: "Siapa namamu?"
  },
  {
    question: "Bahasa Inggrisnya ‘pisang goreng’ adalah?",
    options: ["Fried banana", "Hot banana", "Banana fry", "Yellow fruit"],
    answer: "Fried banana"
  },
  {
    question: "‘Close your book!’ artinya?",
    options: ["Buka bukumu!", "Tutup bukumu!", "Buang bukumu!", "Baca bukumu!"],
    answer: "Tutup bukumu!"
  },
  {
    question: "‘Good job!’ artinya?",
    options: ["Pekerjaan berat", "Kerja bagus!", "Kerja lembur", "Kerja cepat"],
    answer: "Kerja bagus!"
  },
  {
    question: "Bahasa Inggrisnya ‘rumah’ adalah?",
    options: ["Home", "Room", "Building", "Office"],
    answer: "Home"
  },
  {
    question: "Kalimat lucu tapi benar: ‘My bag is heavy because I put...’",
    options: ["a book", "my cat", "a rock", "a watermelon"],
    answer: "my cat"
  },
  {
    question: "Bahasa Inggrisnya ‘cuaca cerah’ adalah?",
    options: ["Rainy", "Sunny", "Cloudy", "Windy"],
    answer: "Sunny"
  },
  {
    question: "‘Let’s eat together!’ artinya?",
    options: ["Ayo makan bersama!", "Ayo tidur", "Ayo belajar", "Ayo berlari"],
    answer: "Ayo makan bersama!"
  },
  {
    question: "‘I am sorry’ digunakan saat kita?",
    options: ["Senang", "Minta maaf", "Terkejut", "Marah"],
    answer: "Minta maaf"
  },
  {
    question: "‘Don’t forget your homework!’ artinya?",
    options: ["Jangan lupa PR-mu!", "Lupakan PR-mu!", "Kerjakan di sekolah saja", "Hapus PR-nya!"],
    answer: "Jangan lupa PR-mu!"
  },
  {
    question: "‘Where is my phone?’ artinya?",
    options: ["Mana HP-ku?", "HP siapa itu?", "Aku beli HP", "Aku punya dua HP"],
    answer: "Mana HP-ku?"
  },
  {
    question: "‘Please be quiet’ artinya?",
    options: ["Tolong diam", "Tolong cepat", "Tolong keluar", "Tolong duduk"],
    answer: "Tolong diam"
  },
  {
    question: "Bahasa Inggrisnya ‘hujan deras’ adalah?",
    options: ["Light rain", "Strong rain", "Heavy rain", "Rain a lot"],
    answer: "Heavy rain"
  },
  {
    question: "‘I like English because...’",
    options: ["It’s fun!", "It’s scary!", "It’s sleepy!", "It’s spicy!"],
    answer: "It’s fun!"
  }
],

        // --- PENAMBAHAN MAPEL SMP (3 & 4) ---
        "Informatika": [
  {
    question: "Apa kepanjangan dari CPU? (bukan 'Cemilan Paling Umum' ya 😆)",
    options: ["Central Process Unit", "Central Processing Unit", "Computer Power Unit", "Central Program Utility"],
    answer: "Central Processing Unit"
  },
  {
    question: "Bagian komputer yang berfungsi menampilkan gambar disebut?",
    options: ["Monitor", "Keyboard", "CPU", "Mouse"],
    answer: "Monitor"
  },
  {
    question: "Mouse digunakan untuk?",
    options: ["Menggambar di layar", "Memindahkan kursor", "Menghapus file", "Mengecat layar"],
    answer: "Memindahkan kursor"
  },
  {
    question: "Kalau komputer tiba-tiba hang, itu artinya?",
    options: ["Komputernya kedinginan", "Programnya macet", "Layarnya tidur", "Internetnya kepanasan"],
    answer: "Programnya macet"
  },
  {
    question: "Keyboard digunakan untuk?",
    options: ["Mengetik huruf dan angka", "Menggeser layar", "Menyalakan lampu", "Menyetel lagu"],
    answer: "Mengetik huruf dan angka"
  },
  {
    question: "Apa fungsi utama sistem operasi?",
    options: ["Mengatur hardware dan software", "Mengatur jadwal tidur pengguna", "Menghapus file", "Menyimpan game"],
    answer: "Mengatur hardware dan software"
  },
  {
    question: "Windows, Linux, dan macOS adalah contoh dari?",
    options: ["Hardware", "Software", "Cloud", "Jaringan"],
    answer: "Software"
  },
  {
    question: "Apa nama perangkat untuk mencetak dokumen?",
    options: ["Printer", "Scanner", "Monitor", "Projector"],
    answer: "Printer"
  },
  {
    question: "File dengan ekstensi .docx biasanya dibuka dengan?",
    options: ["Microsoft Word", "Excel", "PowerPoint", "Notepad"],
    answer: "Microsoft Word"
  },
  {
    question: "Kalau kamu mau menghitung cepat, pakai program?",
    options: ["Word", "Excel", "Paint", "PowerPoint"],
    answer: "Excel"
  },
  {
    question: "Bahasa pemrograman digunakan untuk?",
    options: ["Ngoding", "Ngemil", "Main game", "Menulis status"],
    answer: "Ngoding"
  },
  {
    question: "HTML digunakan untuk membuat?",
    options: ["Website", "Aplikasi Android", "Game offline", "Printer"],
    answer: "Website"
  },
  {
    question: "Apa kepanjangan dari URL?",
    options: ["Uniform Resource Locator", "Universal Resource Link", "Unique Random Locator", "Unreal Rocket Launcher"],
    answer: "Uniform Resource Locator"
  },
  {
    question: "Kalau kamu browsing internet, kamu menggunakan?",
    options: ["Browser", "Compiler", "Debugger", "Terminal"],
    answer: "Browser"
  },
  {
    question: "Contoh browser yang terkenal adalah?",
    options: ["Google Chrome", "Microsoft Word", "Adobe Photoshop", "Excel"],
    answer: "Google Chrome"
  },
  {
    question: "RAM digunakan untuk?",
    options: ["Menyimpan data sementara", "Menyimpan data selamanya", "Main TikTok", "Menghapus virus"],
    answer: "Menyimpan data sementara"
  },
  {
    question: "Kalau komputer lambat, mungkin karena?",
    options: ["RAM kecil", "Keyboard hilang", "Mouse berisik", "Monitor silau"],
    answer: "RAM kecil"
  },
  {
    question: "Virus komputer bisa masuk dari?",
    options: ["Flashdisk", "Internet", "Email", "Semua benar 😅"],
    answer: "Semua benar 😅"
  },
  {
    question: "File yang dihapus di komputer biasanya masuk ke?",
    options: ["Recycle Bin", "Freezer", "Temp Folder", "Folder ajaib"],
    answer: "Recycle Bin"
  },
  {
    question: "Kalau kamu ingin menyalin teks, tekan tombol?",
    options: ["Ctrl + C", "Ctrl + V", "Ctrl + X", "Alt + F4"],
    answer: "Ctrl + C"
  },
  {
    question: "Fungsi Ctrl + V adalah?",
    options: ["Paste", "Copy", "Cut", "Print"],
    answer: "Paste"
  },
  {
    question: "Apa kepanjangan dari Wi-Fi?",
    options: ["Wireless Fidelity", "Wire Finder", "Wide File", "Wi-Finance"],
    answer: "Wireless Fidelity"
  },
  {
    question: "Kalau laptopmu lowbat tapi lupa bawa charger, solusinya?",
    options: ["Hemat baterai dan berdoa 😅", "Main game biar cepat", "Matikan saja", "Colok ke pohon"],
    answer: "Hemat baterai dan berdoa 😅"
  },
  {
    question: "Software untuk menggambar di komputer adalah?",
    options: ["Paint", "Excel", "Word", "PowerPoint"],
    answer: "Paint"
  },
  {
    question: "Shortcut untuk menyimpan file adalah?",
    options: ["Ctrl + S", "Ctrl + Z", "Ctrl + A", "Ctrl + D"],
    answer: "Ctrl + S"
  },
  {
    question: "Data dalam komputer disimpan di?",
    options: ["Harddisk", "Monitor", "Keyboard", "Speaker"],
    answer: "Harddisk"
  },
  {
    question: "Kalau kamu ingin presentasi, gunakan program?",
    options: ["PowerPoint", "Word", "Paint", "Excel"],
    answer: "PowerPoint"
  },
  {
    question: "Kalau file kamu hilang tapi belum disimpan, itu artinya?",
    options: ["Belum sempat disimpan 😅", "Komputer sedih", "Virus marah", "File kabur"],
    answer: "Belum sempat disimpan 😅"
  },
  {
    question: "Shortcut untuk undo adalah?",
    options: ["Ctrl + Z", "Ctrl + Y", "Ctrl + U", "Ctrl + N"],
    answer: "Ctrl + Z"
  },
  {
    question: "Fungsi antivirus adalah?",
    options: ["Melindungi komputer dari virus", "Meningkatkan sinyal Wi-Fi", "Menghapus foto", "Membuat dokumen"],
    answer: "Melindungi komputer dari virus"
  },
  {
    question: "Kalau kamu coding dan error, kamu harus?",
    options: ["Tenang, baca ulang kodenya 😅", "Lempar laptop", "Tanya dukun", "Nangis di pojokan"],
    answer: "Tenang, baca ulang kodenya 😅"
  },
  {
    question: "Bahasa pemrograman untuk web antara lain?",
    options: ["HTML, CSS, JavaScript", "Pascal, Paint, Excel", "Python, Cangkul, Batu", "Word, Chrome, TikTok"],
    answer: "HTML, CSS, JavaScript"
  },
  {
    question: "Komponen komputer yang disebut 'otak' adalah?",
    options: ["CPU", "Monitor", "Keyboard", "RAM"],
    answer: "CPU"
  },
  {
    question: "Apa fungsi folder?",
    options: ["Menyimpan file", "Menjadi hiasan", "Menambah RAM", "Mendinginkan komputer"],
    answer: "Menyimpan file"
  },
  {
    question: "Kalau komputermu lemot, langkah pertama adalah?",
    options: ["Tutup program yang tidak dipakai", "Pukul pelan-pelan", "Restart setiap 5 detik", "Install TikTok"],
    answer: "Tutup program yang tidak dipakai"
  },
  {
    question: "Bahasa pemrograman Python menggunakan ekstensi?",
    options: [".py", ".pt", ".ph", ".txt"],
    answer: ".py"
  },
  {
    question: "Kalau file besar tidak bisa dikirim lewat email, bisa kamu?",
    options: ["Kompres jadi zip", "Salin manual ke udara", "Ubah jadi foto", "Rename biar kecil"],
    answer: "Kompres jadi zip"
  },
  {
    question: "Kalau kamu ingin edit foto, kamu bisa pakai?",
    options: ["Photoshop", "Excel", "Word", "Notepad"],
    answer: "Photoshop"
  },
  {
    question: "Fungsi utama jaringan komputer adalah?",
    options: ["Berbagi data dan sumber daya", "Main Mobile Legends bareng", "Menonton film offline", "Menambah RAM"],
    answer: "Berbagi data dan sumber daya"
  },
  {
    question: "Kalau kamu mencetak dokumen tapi hasilnya kosong, mungkin?",
    options: ["Tintanya habis", "Printer lapar", "Kertas malu", "Komputer ngambek"],
    answer: "Tintanya habis"
  },
  {
    question: "Istilah ‘cloud storage’ berarti?",
    options: ["Penyimpanan online", "Penyimpanan di awan beneran ☁️", "Kotak misterius", "Folder rahasia"],
    answer: "Penyimpanan online"
  },
  {
    question: "Shortcut untuk memilih semua teks adalah?",
    options: ["Ctrl + A", "Ctrl + B", "Ctrl + X", "Ctrl + L"],
    answer: "Ctrl + A"
  },
  {
    question: "Fungsi Ctrl + P adalah?",
    options: ["Print dokumen", "Paste teks", "Play musik", "Pause video"],
    answer: "Print dokumen"
  },
  {
    question: "Perangkat keras disebut juga?",
    options: ["Hardware", "Software", "Underware", "Nowhere"],
    answer: "Hardware"
  },
  {
    question: "Perangkat lunak disebut juga?",
    options: ["Software", "Softdrink", "Softcopy", "Softball"],
    answer: "Software"
  },
  {
    question: "Kalau kamu belajar informatika, kamu disebut?",
    options: ["Programmer", "Gamer", "Streamer", "CCTV"],
    answer: "Programmer"
  },
  {
    question: "Shortcut untuk membuat dokumen baru adalah?",
    options: ["Ctrl + N", "Ctrl + O", "Ctrl + E", "Ctrl + H"],
    answer: "Ctrl + N"
  },
  {
    question: "Kalau kamu lupa password komputer, sebaiknya?",
    options: ["Reset dengan benar", "Ganti komputer 😅", "Tanya tetangga", "Pura-pura lupa selamanya"],
    answer: "Reset dengan benar"
  },
  {
    question: "File .jpg digunakan untuk?",
    options: ["Gambar atau foto", "Teks", "Musik", "Video"],
    answer: "Gambar atau foto"
  },
  {
    question: "Kalau kamu suka ngoding sampai lupa makan, itu tanda?",
    options: ["Programmer sejati 😎", "Perut protes", "Laptop lapar", "Keyboard marah"],
    answer: "Programmer sejati 😎"
  }
],

        "Ilmu Pengetahuan Alam (IPA)": [
  {
    question: "1. Alat pernapasan utama manusia adalah...",
    options: ["Hidung", "Paru-paru", "Mulut", "Jantung"],
    answer: "Paru-paru"
  },
  {
    question: "2. Zat yang bisa larut dalam air disebut...",
    options: ["Zat cair", "Zat terlarut", "Zat pelarut", "Zat pelupa"],
    answer: "Zat terlarut"
  },
  {
    question: "3. Planet yang paling dekat dengan Matahari adalah...",
    options: ["Venus", "Merkurius", "Mars", "Bumi"],
    answer: "Merkurius"
  },
  {
    question: "4. Hewan yang berkembang biak dengan bertelur disebut...",
    options: ["Vivipar", "Ovipar", "Ovovivipar", "Nggak tahu par-paran"],
    answer: "Ovipar"
  },
  {
    question: "5. Benda yang bisa menarik logam disebut...",
    options: ["Karet", "Magnet", "Batu", "Plastik"],
    answer: "Magnet"
  },
  {
    question: "6. Proses fotosintesis terjadi pada bagian daun yang bernama...",
    options: ["Klorofil", "Epidermis", "Stomata", "Tulisan tugas teman"],
    answer: "Klorofil"
  },
  {
    question: "7. Hewan pemakan tumbuhan disebut...",
    options: ["Karnivora", "Omnivora", "Herbivora", "Vegetarian"],
    answer: "Herbivora"
  },
  {
    question: "8. Sumber energi utama bagi manusia adalah...",
    options: ["Karbohidrat", "Protein", "Vitamin", "Tidur siang"],
    answer: "Karbohidrat"
  },
  {
    question: "9. Air yang menguap lalu menjadi awan disebut...",
    options: ["Presipitasi", "Evaporasi", "Kondensasi", "Halusinasi"],
    answer: "Evaporasi"
  },
  {
    question: "10. Gaya yang membuat benda jatuh ke bawah adalah...",
    options: ["Gaya gesek", "Gaya dorong", "Gaya gravitasi", "Gaya malas"],
    answer: "Gaya gravitasi"
  },
  {
    question: "11. Alat untuk mengukur suhu adalah...",
    options: ["Barometer", "Termometer", "Altimeter", "Penggaris"],
    answer: "Termometer"
  },
  {
    question: "12. Hewan yang mengalami metamorfosis sempurna adalah...",
    options: ["Kucing", "Kupu-kupu", "Katak", "Manusia pas remaja"],
    answer: "Kupu-kupu"
  },
  {
    question: "13. Proses perubahan air menjadi uap disebut...",
    options: ["Kondensasi", "Evaporasi", "Sublimasi", "Inspirasi"],
    answer: "Evaporasi"
  },
  {
    question: "14. Gigi taring berguna untuk...",
    options: ["Mengunyah", "Memotong", "Mencabik", "Senyum manis"],
    answer: "Mencabik"
  },
  {
    question: "15. Darah yang mengandung banyak oksigen berwarna...",
    options: ["Merah muda", "Merah terang", "Biru", "Hijau daun"],
    answer: "Merah terang"
  },
  {
    question: "16. Bagian tumbuhan yang berfungsi menyerap air adalah...",
    options: ["Batang", "Daun", "Akar", "Bunga"],
    answer: "Akar"
  },
  {
    question: "17. Alat optik yang digunakan oleh ilmuwan untuk melihat benda sangat kecil adalah...",
    options: ["Teropong", "Kaca pembesar", "Mikroskop", "Kacamata minus"],
    answer: "Mikroskop"
  },
  {
    question: "18. Hewan amfibi hidup di...",
    options: ["Darat", "Air", "Darat dan air", "Kamar mandi"],
    answer: "Darat dan air"
  },
  {
    question: "19. Gas yang dibutuhkan manusia untuk bernapas adalah...",
    options: ["Karbon dioksida", "Oksigen", "Nitrogen", "Freon"],
    answer: "Oksigen"
  },
  {
    question: "20. Suhu beku air adalah...",
    options: ["0°C", "100°C", "50°C", "10°C"],
    answer: "0°C"
  },
  {
    question: "21. Hewan pemakan daging disebut...",
    options: ["Karnivora", "Omnivora", "Herbivora", "Vegan"],
    answer: "Karnivora"
  },
  {
    question: "22. Bagian bumi yang paling panas adalah...",
    options: ["Inti bumi", "Mantel bumi", "Kerak bumi", "Atap rumah si Budi"],
    answer: "Inti bumi"
  },
  {
    question: "23. Perubahan wujud dari padat menjadi cair disebut...",
    options: ["Mencair", "Menguap", "Menyublim", "Menghilang"],
    answer: "Mencair"
  },
  {
    question: "24. Planet yang disebut planet merah adalah...",
    options: ["Venus", "Mars", "Saturnus", "Uranus"],
    answer: "Mars"
  },
  {
    question: "25. Energi tidak bisa diciptakan atau dimusnahkan, hanya bisa...",
    options: ["Ditidurkan", "Dihilangkan", "Diubah bentuknya", "Dijual di online shop"],
    answer: "Diubah bentuknya"
  },
  {
    question: "26. Suara dapat merambat melalui...",
    options: ["Udara", "Air", "Padat", "Semua benar"],
    answer: "Semua benar"
  },
  {
    question: "27. Satuan kuat arus listrik adalah...",
    options: ["Volt", "Ampere", "Ohm", "Watt"],
    answer: "Ampere"
  },
  {
    question: "28. Benda yang bisa menghantarkan listrik disebut...",
    options: ["Isolator", "Konduktor", "Semikonduktor", "Moderator"],
    answer: "Konduktor"
  },
  {
    question: "29. Baterai menghasilkan energi...",
    options: ["Panas", "Gerak", "Kimia", "Drama"],
    answer: "Kimia"
  },
  {
    question: "30. Hewan yang menyusui anaknya termasuk kelompok...",
    options: ["Mamalia", "Reptil", "Amfibi", "Nostalgia"],
    answer: "Mamalia"
  },
  {
    question: "31. Proses tumbuhan membuat makanannya sendiri disebut...",
    options: ["Fotosintesis", "Fermentasi", "Difusi", "Imaginasi"],
    answer: "Fotosintesis"
  },
  {
    question: "32. Lapisan ozon berfungsi untuk...",
    options: ["Melindungi dari sinar UV", "Mengatur cuaca", "Menahan hujan", "Menjaga rahasia bumi"],
    answer: "Melindungi dari sinar UV"
  },
  {
    question: "33. Ikan bernafas menggunakan...",
    options: ["Hidung", "Insang", "Paru-paru", "Alat snorkel"],
    answer: "Insang"
  },
  {
    question: "34. Tanaman membutuhkan cahaya matahari untuk...",
    options: ["Tidur siang", "Tumbuh dan berfotosintesis", "Menari", "Main TikTok"],
    answer: "Tumbuh dan berfotosintesis"
  },
  {
    question: "35. Energi panas dari matahari disebut energi...",
    options: ["Surya", "Angin", "Kimia", "Cinta"],
    answer: "Surya"
  },
  {
    question: "36. Air laut terasa asin karena mengandung...",
    options: ["Garam", "Gula", "Pasir", "Micin"],
    answer: "Garam"
  },
  {
    question: "37. Hewan nokturnal aktif pada waktu...",
    options: ["Siang", "Malam", "Pagi", "Waktu ujian"],
    answer: "Malam"
  },
  {
    question: "38. Cahaya merambat paling cepat di...",
    options: ["Udara", "Air", "Ruang hampa", "Grup WA keluarga"],
    answer: "Ruang hampa"
  },
  {
    question: "39. Bunyi pantulan disebut...",
    options: ["Resonansi", "Gema", "Gaung", "Gosip"],
    answer: "Gema"
  },
  {
    question: "40. Zat cair jika dipanaskan akan menjadi...",
    options: ["Padat", "Gas", "Cair", "Buih sabun"],
    answer: "Gas"
  },
  {
    question: "41. Bagian telinga yang menangkap getaran suara adalah...",
    options: ["Daun telinga", "Gendang telinga", "Tulang pendengaran", "Telinga teman"],
    answer: "Gendang telinga"
  },
  {
    question: "42. Proses pencernaan makanan dimulai dari...",
    options: ["Lambung", "Mulut", "Usus halus", "Isi dompet"],
    answer: "Mulut"
  },
  {
    question: "43. Air mengalir dari tempat yang...",
    options: ["Rendah ke tinggi", "Tinggi ke rendah", "Diam saja", "Tergantung mood"],
    answer: "Tinggi ke rendah"
  },
  {
    question: "44. Energi yang dihasilkan oleh makanan adalah energi...",
    options: ["Listrik", "Kimia", "Mekanik", "Semangat"],
    answer: "Kimia"
  },
  {
    question: "45. Alat kelamin jantan pada bunga disebut...",
    options: ["Putik", "Benang sari", "Serbuk sari", "Tangkai"],
    answer: "Benang sari"
  },
  {
    question: "46. Hewan yang tidak memiliki tulang belakang disebut...",
    options: ["Vertebrata", "Invertebrata", "Semivertebrata", "Leher pegal"],
    answer: "Invertebrata"
  },
  {
    question: "47. Benda yang tidak bisa berubah bentuk disebut...",
    options: ["Cair", "Gas", "Padat", "Keras kepala"],
    answer: "Padat"
  },
  {
    question: "48. Pelangi muncul karena...",
    options: ["Pembiasan cahaya", "Pemantulan suara", "Panas berlebih", "Nonton film terlalu sedih"],
    answer: "Pembiasan cahaya"
  },
  {
    question: "49. Tulang tengkorak berfungsi untuk...",
    options: ["Melindungi otak", "Menyimpan rahasia", "Menyangga tubuh", "Membuat gaya rambut"],
    answer: "Melindungi otak"
  },
  {
    question: "50. Hewan yang bisa hidup di air laut dan air tawar disebut...",
    options: ["Euryhalin", "Stenohalin", "Amfibi", "Flexibel banget"],
    answer: "Euryhalin"
  }
   ]
    },
    
    "SMA": {
        "Informatika": [
  {
    question: "1. CPU adalah singkatan dari...",
    options: ["Central Process Unit", "Central Processing Unit", "Center Program Unit", "Cuma Pengingat Ujian"],
    answer: "Central Processing Unit"
  },
  {
    question: "2. Bagian komputer yang berfungsi menampilkan hasil kerja adalah...",
    options: ["Keyboard", "Mouse", "Monitor", "Kipas angin"],
    answer: "Monitor"
  },
  {
    question: "3. RAM digunakan untuk...",
    options: ["Menyimpan data permanen", "Menyimpan data sementara", "Main game", "Menampung air mata siswa"],
    answer: "Menyimpan data sementara"
  },
  {
    question: "4. Sistem operasi berfungsi untuk...",
    options: ["Mengatur perangkat keras dan lunak", "Mengatur jadwal tidur", "Membuat kue", "Menyusun playlist musik"],
    answer: "Mengatur perangkat keras dan lunak"
  },
  {
    question: "5. Perangkat lunak disebut juga...",
    options: ["Software", "Hardware", "Nowhere", "Wetware"],
    answer: "Software"
  },
  {
    question: "6. Perangkat keras disebut juga...",
    options: ["Hardware", "Heartware", "Solidware", "Hardcopy"],
    answer: "Hardware"
  },
  {
    question: "7. Contoh sistem operasi adalah...",
    options: ["Windows", "Android", "Linux", "Semua benar"],
    answer: "Semua benar"
  },
  {
    question: "8. Bahasa pemrograman Python menggunakan ekstensi file...",
    options: [".py", ".pt", ".pyt", ".snakes"],
    answer: ".py"
  },
  {
    question: "9. HTML digunakan untuk...",
    options: ["Mengatur tampilan web", "Mengatur suara", "Menggambar", "Menambah followers"],
    answer: "Mengatur tampilan web"
  },
  {
    question: "10. CSS digunakan untuk...",
    options: ["Mewarnai dan mempercantik halaman web", "Membuat database", "Menghitung pajak", "Mewarnai rambut"],
    answer: "Mewarnai dan mempercantik halaman web"
  },
  {
    question: "11. JavaScript digunakan untuk...",
    options: ["Memberi interaksi di web", "Mengganti wallpaper", "Menghapus file", "Menakut-nakuti bug"],
    answer: "Memberi interaksi di web"
  },
  {
    question: "12. Virus komputer menyebar melalui...",
    options: ["Flashdisk", "Email", "Internet", "Semua benar"],
    answer: "Semua benar"
  },
  {
    question: "13. Antivirus berfungsi untuk...",
    options: ["Melawan virus komputer", "Melawan mantan", "Menghapus data", "Menambah RAM"],
    answer: "Melawan virus komputer"
  },
  {
    question: "14. Fungsi ‘Ctrl + C’ pada komputer adalah...",
    options: ["Copy", "Cut", "Close", "Cepat-cepat kabur"],
    answer: "Copy"
  },
  {
    question: "15. Fungsi ‘Ctrl + V’ adalah...",
    options: ["Paste", "View", "Verify", "Victory"],
    answer: "Paste"
  },
  {
    question: "16. Satuan kecepatan transfer data adalah...",
    options: ["bps", "rpm", "km/h", "ml/detik"],
    answer: "bps"
  },
  {
    question: "17. IP Address berfungsi untuk...",
    options: ["Identitas perangkat di jaringan", "Nama panjang laptop", "Nomor antrian warnet", "Alamat rumah pak RT"],
    answer: "Identitas perangkat di jaringan"
  },
  {
    question: "18. LAN adalah singkatan dari...",
    options: ["Local Area Network", "Large Area Network", "Long Access Network", "Lemak Ayam Nenek"],
    answer: "Local Area Network"
  },
  {
    question: "19. Jaringan yang mencakup seluruh dunia disebut...",
    options: ["WAN", "LAN", "PAN", "INTERNET"],
    answer: "INTERNET"
  },
  {
    question: "20. Proses booting adalah...",
    options: ["Menyalakan komputer", "Menendang CPU", "Install ulang", "Ngopi dulu"],
    answer: "Menyalakan komputer"
  },
  {
    question: "21. Perintah ‘print’ dalam Python digunakan untuk...",
    options: ["Menampilkan output", "Mencetak dokumen", "Menghapus file", "Menampilkan wajah teman"],
    answer: "Menampilkan output"
  },
  {
    question: "22. File database biasanya berekstensi...",
    options: [".db", ".sql", ".mdb", "Semua benar"],
    answer: "Semua benar"
  },
  {
    question: "23. Bagian komputer yang menyimpan semua data permanen adalah...",
    options: ["Harddisk", "RAM", "Monitor", "Mouse"],
    answer: "Harddisk"
  },
  {
    question: "24. Cloud storage berarti...",
    options: ["Penyimpanan di internet", "Penyimpanan di awan beneran", "Kantong Doraemon", "Kotak ajaib"],
    answer: "Penyimpanan di internet"
  },
  {
    question: "25. Contoh cloud storage adalah...",
    options: ["Google Drive", "Dropbox", "OneDrive", "Semua benar"],
    answer: "Semua benar"
  },
  {
    question: "26. Komponen komputer yang mengolah data adalah...",
    options: ["CPU", "Monitor", "RAM", "Kabel LAN"],
    answer: "CPU"
  },
  {
    question: "27. Perangkat output kecuali...",
    options: ["Printer", "Monitor", "Speaker", "Keyboard"],
    answer: "Keyboard"
  },
  {
    question: "28. Hacker adalah...",
    options: ["Orang yang meretas sistem", "Orang yang menebang kayu", "Orang yang ngoding semalaman", "Orang yang ngopi sambil coding"],
    answer: "Orang yang meretas sistem"
  },
  {
    question: "29. Pengaman jaringan disebut...",
    options: ["Firewall", "Tembok api", "Fireball", "Batu bata"],
    answer: "Firewall"
  },
  {
    question: "30. AI adalah singkatan dari...",
    options: ["Artificial Intelligence", "Automatic Internet", "Auto Install", "Anak Informatika"],
    answer: "Artificial Intelligence"
  },
  {
    question: "31. Robot bekerja menggunakan...",
    options: ["Program", "Perasaan", "Perintah suara", "Insting hewan"],
    answer: "Program"
  },
  {
    question: "32. Algoritma berarti...",
    options: ["Langkah-langkah penyelesaian masalah", "Ritme lagu", "Nama Arab", "Kode rahasia ninja"],
    answer: "Langkah-langkah penyelesaian masalah"
  },
  {
    question: "33. Flowchart digunakan untuk...",
    options: ["Menggambarkan alur program", "Menggambar bunga", "Desain rumah", "Menata hati"],
    answer: "Menggambarkan alur program"
  },
  {
    question: "34. Binary system hanya terdiri dari angka...",
    options: ["0 dan 1", "1 dan 2", "2 dan 3", "8 dan 9"],
    answer: "0 dan 1"
  },
  {
    question: "35. ASCII digunakan untuk...",
    options: ["Mengkodekan karakter", "Mengatur warna", "Mengatur posisi", "Membuat emoji"],
    answer: "Mengkodekan karakter"
  },
  {
    question: "36. Website yang dinamis menggunakan...",
    options: ["HTML dan PHP", "Kertas dan pensil", "Word dan Excel", "Hati dan perasaan"],
    answer: "HTML dan PHP"
  },
  {
    question: "37. Server adalah...",
    options: ["Komputer penyedia layanan jaringan", "Komputer di warnet", "Tempat makan di restoran", "Asisten pribadi"],
    answer: "Komputer penyedia layanan jaringan"
  },
  {
    question: "38. Backup data berarti...",
    options: ["Membuat salinan cadangan", "Menghapus semua data", "Menyalin musik", "Mundur pelan-pelan"],
    answer: "Membuat salinan cadangan"
  },
  {
    question: "39. Kompresi file berarti...",
    options: ["Memperkecil ukuran file", "Membesarkan huruf", "Menyembunyikan file", "Mengecilkan hati"],
    answer: "Memperkecil ukuran file"
  },
  {
    question: "40. File .exe digunakan untuk...",
    options: ["Menjalankan program", "Menghapus file", "Membuka musik", "Ngoding offline"],
    answer: "Menjalankan program"
  },
  {
    question: "41. Internet ditemukan oleh...",
    options: ["Tim Berners-Lee", "Elon Musk", "Bill Gates", "Tony Stark"],
    answer: "Tim Berners-Lee"
  },
  {
    question: "42. Search engine adalah...",
    options: ["Mesin pencari informasi di internet", "Mesin cuci online", "Robot pelacak", "Server cafe"],
    answer: "Mesin pencari informasi di internet"
  },
  {
    question: "43. Contoh search engine adalah...",
    options: ["Google", "Bing", "Yahoo", "Semua benar"],
    answer: "Semua benar"
  },
  {
    question: "44. Coding error disebut juga...",
    options: ["Bug", "Lalat", "Virus", "Kerusakan otak programmer"],
    answer: "Bug"
  },
  {
    question: "45. Proses memperbaiki bug disebut...",
    options: ["Debugging", "Rebooting", "Refactoring", "Curhat ke komputer"],
    answer: "Debugging"
  },
  {
    question: "46. IoT adalah singkatan dari...",
    options: ["Internet of Things", "Input of Technology", "Icon of Trend", "Iseng online terus"],
    answer: "Internet of Things"
  },
  {
    question: "47. Cloud computing berarti...",
    options: ["Komputasi berbasis internet", "Komputer di langit", "Server hujan", "Komputasi berawan-awan"],
    answer: "Komputasi berbasis internet"
  },
  {
    question: "48. Keyboard termasuk perangkat...",
    options: ["Input", "Output", "Proses", "Dekorasi meja"],
    answer: "Input"
  },
  {
    question: "49. Power Supply berfungsi untuk...",
    options: ["Memberikan daya listrik", "Memberikan motivasi", "Memberikan cahaya", "Menyemangati CPU"],
    answer: "Memberikan daya listrik"
  },
  {
    question: "50. Apa yang dilakukan programmer setelah error?",
    options: ["Debugging", "Menangis", "Ngopi", "Semua benar"],
    answer: "Semua benar"
  }
],

        "PPKN": [
  {
    question: "1. Pancasila secara yuridis konstitusional ditetapkan sebagai dasar negara pada tanggal...",
    options: ["17 Agustus 1945", "18 Agustus 1945", "1 Juni 1945", "22 Juni 1945"],
    answer: "18 Agustus 1945"
  },
  {
    question: "2. Sumber dari segala sumber hukum di Indonesia adalah...",
    options: ["UUD 1945", "Pancasila", "Tap MPR", "Peraturan Pemerintah"],
    answer: "Pancasila"
  },
  {
    question: "3. Makna sila pertama Pancasila adalah...",
    options: ["Kebebasan beragama", "Toleransi antarumat beragama", "Ketuhanan Yang Maha Esa", "Keadilan sosial"],
    answer: "Ketuhanan Yang Maha Esa"
  },
  {
    question: "4. Pembukaan UUD 1945 termasuk dalam...",
    options: ["Batang tubuh UUD", "Pokok kaidah fundamental negara", "Pasal-pasal UUD", "Amandemen UUD"],
    answer: "Pokok kaidah fundamental negara"
  },
  {
    question: "5. Nilai-nilai Pancasila bersifat...",
    options: ["Universal", "Khusus untuk Indonesia", "Sementara", "Kultural saja"],
    answer: "Universal"
  },
  {
    question: "6. Negara hukum di Indonesia tercantum dalam pasal...",
    options: ["Pasal 1 ayat (3) UUD 1945", "Pasal 27 ayat (1)", "Pasal 28D", "Pasal 33 ayat (1)"],
    answer: "Pasal 1 ayat (3) UUD 1945"
  },
  {
    question: "7. Kedaulatan tertinggi di tangan rakyat berarti...",
    options: ["Rakyat memegang kekuasaan sepenuhnya", "Pemerintah tidak punya wewenang", "Rakyat boleh seenaknya", "Negara tanpa hukum"],
    answer: "Rakyat memegang kekuasaan sepenuhnya"
  },
  {
    question: "8. Salah satu bentuk implementasi nilai keadilan sosial adalah...",
    options: ["Gotong royong", "Kebebasan berpendapat", "Menjaga keamanan", "Patuh pajak"],
    answer: "Gotong royong"
  },
  {
    question: "9. Demokrasi Pancasila menolak...",
    options: ["Kebebasan berpendapat", "Otoritarianisme", "Musyawarah", "Keadilan"],
    answer: "Otoritarianisme"
  },
  {
    question: "10. Lembaga yang berwenang mengubah dan menetapkan UUD adalah...",
    options: ["MPR", "DPR", "MA", "Presiden"],
    answer: "MPR"
  },
  {
    question: "11. Ciri negara hukum menurut UUD 1945 adalah...",
    options: ["Adanya kekuasaan absolut", "Kebebasan tanpa batas", "Supremasi hukum", "Kedaulatan raja"],
    answer: "Supremasi hukum"
  },
  {
    question: "12. Tujuan negara Indonesia terdapat dalam...",
    options: ["Pembukaan UUD 1945 alinea ke-4", "Pasal 1 UUD 1945", "Batang tubuh UUD 1945", "GBHN"],
    answer: "Pembukaan UUD 1945 alinea ke-4"
  },
  {
    question: "13. Salah satu tujuan nasional Indonesia adalah...",
    options: ["Melindungi segenap bangsa", "Menguasai dunia", "Menjadi negara adidaya", "Menjadi negara tertutup"],
    answer: "Melindungi segenap bangsa"
  },
  {
    question: "14. Demokrasi Indonesia berdasarkan...",
    options: ["Kekuasaan mayoritas", "Musyawarah mufakat", "Kebebasan individu", "Suara terbanyak saja"],
    answer: "Musyawarah mufakat"
  },
  {
    question: "15. Pancasila digali dari...",
    options: ["Budaya bangsa Indonesia", "Pemikiran barat", "Negara asing", "Ajaran liberalisme"],
    answer: "Budaya bangsa Indonesia"
  },
  {
    question: "16. Kewajiban warga negara menurut UUD 1945 adalah...",
    options: ["Membayar pajak", "Memilih pemimpin", "Mengkritik pemerintah", "Meninggalkan negara"],
    answer: "Membayar pajak"
  },
  {
    question: "17. Sistem pemerintahan Indonesia adalah...",
    options: ["Presidensial", "Parlementer", "Monarki", "Gabungan dua-duanya"],
    answer: "Presidensial"
  },
  {
    question: "18. Dalam sistem presidensial, presiden berkedudukan sebagai...",
    options: ["Kepala negara dan kepala pemerintahan", "Ketua DPR", "Kepala MA", "Ketua MPR"],
    answer: "Kepala negara dan kepala pemerintahan"
  },
  {
    question: "19. Prinsip supremasi konstitusi berarti...",
    options: ["Semua tunduk pada UUD 1945", "Pemerintah bebas bertindak", "Rakyat di atas hukum", "Presiden tidak bisa salah"],
    answer: "Semua tunduk pada UUD 1945"
  },
  {
    question: "20. Hukum dasar tertulis di Indonesia adalah...",
    options: ["UUD 1945", "Pancasila", "Tap MPR", "Konvensi"],
    answer: "UUD 1945"
  },
  {
    question: "21. Hak asasi manusia diatur dalam UUD 1945 pasal...",
    options: ["Pasal 28A–28J", "Pasal 27", "Pasal 30", "Pasal 34"],
    answer: "Pasal 28A–28J"
  },
  {
    question: "22. Prinsip utama dalam demokrasi Pancasila adalah...",
    options: ["Kebebasan bertanggung jawab", "Kebebasan mutlak", "Kepemimpinan diktator", "Keputusan pribadi"],
    answer: "Kebebasan bertanggung jawab"
  },
  {
    question: "23. Asas persamaan di depan hukum berarti...",
    options: ["Semua warga negara sama di mata hukum", "Hanya pejabat yang dilindungi hukum", "Rakyat harus tunduk tanpa hak", "Hukum berlaku berbeda-beda"],
    answer: "Semua warga negara sama di mata hukum"
  },
  {
    question: "24. Contoh pelanggaran HAM berat adalah...",
    options: ["Genosida", "Membolos sekolah", "Membuang sampah sembarangan", "Menyalip antrian"],
    answer: "Genosida"
  },
  {
    question: "25. Wewenang Mahkamah Konstitusi adalah...",
    options: ["Mengadili sengketa hasil pemilu", "Mengangkat hakim", "Membuat undang-undang", "Menangani kasus pidana biasa"],
    answer: "Mengadili sengketa hasil pemilu"
  },
  {
    question: "26. Fungsi utama DPR adalah...",
    options: ["Legislasi, anggaran, pengawasan", "Yudikatif", "Eksekutif", "Protokoler"],
    answer: "Legislasi, anggaran, pengawasan"
  },
  {
    question: "27. Negara kesatuan berarti...",
    options: ["Kekuasaan tertinggi di tangan pemerintah pusat", "Daerah bebas membuat undang-undang sendiri", "Setiap provinsi punya kedaulatan", "Berbentuk federasi"],
    answer: "Kekuasaan tertinggi di tangan pemerintah pusat"
  },
  {
    question: "28. Contoh penerapan sila ke-2 adalah...",
    options: ["Menghormati hak orang lain", "Menaati peraturan lalu lintas", "Gotong royong", "Musyawarah"],
    answer: "Menghormati hak orang lain"
  },
  {
    question: "29. Wewenang Presiden menurut UUD 1945 adalah...",
    options: ["Menetapkan peraturan pemerintah", "Menafsirkan hukum", "Menyusun undang-undang sendiri", "Memimpin MPR"],
    answer: "Menetapkan peraturan pemerintah"
  },
  {
    question: "30. Prinsip checks and balances berarti...",
    options: ["Kekuasaan saling mengawasi dan mengimbangi", "Kekuasaan mutlak di presiden", "Rakyat tidak berhak mengkritik", "Semua lembaga setara tapi tak berfungsi"],
    answer: "Kekuasaan saling mengawasi dan mengimbangi"
  },
  {
    question: "31. Ideologi Pancasila bersifat terbuka karena...",
    options: ["Dapat menyesuaikan perkembangan zaman", "Dapat diganti kapan saja", "Tidak punya nilai tetap", "Tidak berkaitan dengan UUD"],
    answer: "Dapat menyesuaikan perkembangan zaman"
  },
  {
    question: "32. Negara Indonesia disebut negara demokrasi karena...",
    options: ["Kedaulatan di tangan rakyat", "Dipimpin oleh militer", "Pemerintah absolut", "Dipimpin oleh satu partai"],
    answer: "Kedaulatan di tangan rakyat"
  },
  {
    question: "33. Contoh hak warga negara adalah...",
    options: ["Mendapat pendidikan", "Membayar pajak", "Menjaga ketertiban", "Menghormati hukum"],
    answer: "Mendapat pendidikan"
  },
  {
    question: "34. Contoh kewajiban warga negara adalah...",
    options: ["Membayar pajak", "Memilih presiden", "Berpendapat", "Mendapat pekerjaan"],
    answer: "Membayar pajak"
  },
  {
    question: "35. Prinsip rule of law berarti...",
    options: ["Pemerintah berdasarkan hukum", "Pemerintah berdasarkan kekuasaan", "Rakyat bebas tanpa hukum", "Semua keputusan oleh presiden"],
    answer: "Pemerintah berdasarkan hukum"
  },
  {
    question: "36. Tujuan amandemen UUD 1945 adalah...",
    options: ["Menyesuaikan dengan perkembangan zaman", "Menghapus Pancasila", "Mengganti dasar negara", "Mengurangi peran rakyat"],
    answer: "Menyesuaikan dengan perkembangan zaman"
  },
  {
    question: "37. Lembaga negara yang berwenang memeriksa keuangan negara adalah...",
    options: ["BPK", "KPK", "MA", "MPR"],
    answer: "BPK"
  },
  {
    question: "38. Pasal 33 UUD 1945 mengatur tentang...",
    options: ["Perekonomian nasional", "Pendidikan", "Pertahanan", "Kebudayaan"],
    answer: "Perekonomian nasional"
  },
  {
    question: "39. Nilai moral dalam Pancasila bersumber dari...",
    options: ["Agama dan budaya bangsa", "Negara lain", "Filsafat barat", "Kebijakan ekonomi"],
    answer: "Agama dan budaya bangsa"
  },
  {
    question: "40. Lembaga peradilan tertinggi di Indonesia adalah...",
    options: ["Mahkamah Agung", "Mahkamah Konstitusi", "DPR", "Komisi Yudisial"],
    answer: "Mahkamah Agung"
  },
  {
    question: "41. Tindakan pemerintah yang tidak sesuai dengan hukum disebut...",
    options: ["Penyalahgunaan kekuasaan", "Demokrasi", "Reformasi", "Deklarasi"],
    answer: "Penyalahgunaan kekuasaan"
  },
  {
    question: "42. Lembaga yang berfungsi menegakkan etika hakim adalah...",
    options: ["Komisi Yudisial", "BPK", "MA", "MK"],
    answer: "Komisi Yudisial"
  },
  {
    question: "43. Perubahan UUD 1945 dilakukan oleh...",
    options: ["MPR", "DPR", "Presiden", "MA"],
    answer: "MPR"
  },
  {
    question: "44. Pasal 27 ayat (1) menyatakan...",
    options: ["Persamaan kedudukan di depan hukum", "Hak atas pendidikan", "Hak atas pekerjaan", "Kedaulatan rakyat"],
    answer: "Persamaan kedudukan di depan hukum"
  },
  {
    question: "45. Dalam negara demokrasi, kekuasaan tertinggi adalah...",
    options: ["Di tangan rakyat", "Di tangan presiden", "Di tangan parlemen", "Di tangan militer"],
    answer: "Di tangan rakyat"
  },
  {
    question: "46. Musyawarah mufakat merupakan perwujudan dari sila...",
    options: ["Keempat", "Kedua", "Ketiga", "Kelima"],
    answer: "Keempat"
  },
  {
    question: "47. Semboyan 'Bhinneka Tunggal Ika' berarti...",
    options: ["Berbeda-beda tetapi tetap satu", "Bersatu karena sama", "Satu untuk semua", "Sama rata sama rasa"],
    answer: "Berbeda-beda tetapi tetap satu"
  },
  {
    question: "48. Hak kebebasan berpendapat termasuk hak...",
    options: ["Sipil dan politik", "Ekonomi", "Sosial", "Kultural"],
    answer: "Sipil dan politik"
  },
  {
    question: "49. Negara demokratis menghargai...",
    options: ["Perbedaan pendapat", "Kebebasan tanpa batas", "Kekuasaan tunggal", "Monarki absolut"],
    answer: "Perbedaan pendapat"
  },
  {
    question: "50. Nilai keadilan sosial menekankan pentingnya...",
    options: ["Keseimbangan hak dan kewajiban", "Kebebasan individu", "Kekuasaan ekonomi", "Kepentingan pribadi"],
    answer: "Keseimbangan hak dan kewajiban"
  }
],

        // --- PENAMBAHAN MAPEL SMA (3 & 4) ---
        "Kimia": [
  {
    question: "Atom adalah?",
    options: ["Bagian terkecil dari suatu zat", "Nama hewan di laboratorium", "Campuran dua molekul", "Satuan berat"],
    answer: "Bagian terkecil dari suatu zat"
  },
  {
    question: "Partikel penyusun atom yang bermuatan negatif disebut?",
    options: ["Elektron", "Proton", "Neutron", "Ion"],
    answer: "Elektron"
  },
  {
    question: "Nomor atom menunjukkan jumlah?",
    options: ["Proton", "Neutron", "Molekul", "Atom"],
    answer: "Proton"
  },
  {
    question: "Massa atom ditentukan oleh jumlah?",
    options: ["Proton dan neutron", "Elektron dan proton", "Neutron dan ion", "Molekul dan unsur"],
    answer: "Proton dan neutron"
  },
  {
    question: "Unsur yang paling ringan di alam semesta adalah?",
    options: ["Hidrogen", "Helium", "Oksigen", "Nitrogen"],
    answer: "Hidrogen"
  },
  {
    question: "Simbol kimia untuk natrium adalah?",
    options: ["Na", "N", "No", "Ns"],
    answer: "Na"
  },
  {
    question: "Unsur golongan mulia yang stabil disebut?",
    options: ["Gas mulia", "Gas biasa", "Gas lucu", "Gas dapur"],
    answer: "Gas mulia"
  },
  {
    question: "Ikatan kimia terbentuk agar atom menjadi?",
    options: ["Stabil", "Lucu", "Mudah marah", "Pecah"],
    answer: "Stabil"
  },
  {
    question: "Ikatan yang terjadi karena serah terima elektron disebut?",
    options: ["Ikatan ion", "Ikatan kovalen", "Ikatan logam", "Ikatan sahabat"],
    answer: "Ikatan ion"
  },
  {
    question: "Ikatan kovalen terjadi karena?",
    options: ["Pemakaian bersama elektron", "Serah terima proton", "Pertukaran ion", "Gaya tarik antar logam"],
    answer: "Pemakaian bersama elektron"
  },
  {
    question: "Air memiliki rumus kimia?",
    options: ["H₂O", "CO₂", "NaCl", "O₂"],
    answer: "H₂O"
  },
  {
    question: "Rumus kimia garam dapur adalah?",
    options: ["NaCl", "KCl", "HCl", "NaOH"],
    answer: "NaCl"
  },
  {
    question: "Asam memiliki rasa?",
    options: ["Masam", "Manis", "Asin", "Pahit"],
    answer: "Masam"
  },
  {
    question: "Basa memiliki rasa?",
    options: ["Pahit", "Manis", "Asin", "Masam"],
    answer: "Pahit"
  },
  {
    question: "pH air murni adalah?",
    options: ["7", "0", "14", "5"],
    answer: "7"
  },
  {
    question: "Zat yang dapat menetralkan asam adalah?",
    options: ["Basa", "Asam", "Garam", "Air"],
    answer: "Basa"
  },
  {
    question: "Unsur dengan simbol Fe adalah?",
    options: ["Besi", "Fluor", "Fosfor", "Feron"],
    answer: "Besi"
  },
  {
    question: "CO₂ disebut juga?",
    options: ["Karbon dioksida", "Oksigen", "Nitrogen dioksida", "Karbon monoksida"],
    answer: "Karbon dioksida"
  },
  {
    question: "Gas yang dibutuhkan manusia untuk bernapas adalah?",
    options: ["Oksigen", "Karbon dioksida", "Nitrogen", "Hidrogen"],
    answer: "Oksigen"
  },
  {
    question: "Zat padat yang mudah larut disebut?",
    options: ["Zat terlarut", "Pelarut", "Campuran", "Endapan"],
    answer: "Zat terlarut"
  },
  {
    question: "Campuran yang komposisinya tidak seragam disebut?",
    options: ["Campuran heterogen", "Campuran homogen", "Larutan", "Senyawa"],
    answer: "Campuran heterogen"
  },
  {
    question: "Proses perubahan gas menjadi cair disebut?",
    options: ["Kondensasi", "Evaporasi", "Sublimasi", "Deposisi"],
    answer: "Kondensasi"
  },
  {
    question: "Perubahan zat tanpa menghasilkan zat baru disebut?",
    options: ["Perubahan fisika", "Perubahan kimia", "Reaksi redoks", "Reaksi asam-basa"],
    answer: "Perubahan fisika"
  },
  {
    question: "Reaksi pembakaran termasuk reaksi?",
    options: ["Eksoterm", "Endoterm", "Netralisasi", "Substitusi"],
    answer: "Eksoterm"
  },
  {
    question: "Reaksi yang menyerap panas disebut?",
    options: ["Endoterm", "Eksoterm", "Isoterm", "Homogen"],
    answer: "Endoterm"
  },
  {
    question: "Hukum kekekalan massa dikemukakan oleh?",
    options: ["Lavoisier", "Dalton", "Bohr", "Newton"],
    answer: "Lavoisier"
  },
  {
    question: "Menurut Dalton, atom tidak dapat?",
    options: ["Dibagi", "Dibentuk", "Dihancurkan", "Semuanya benar"],
    answer: "Semuanya benar"
  },
  {
    question: "Senyawa adalah?",
    options: ["Gabungan dua atau lebih unsur", "Campuran zat", "Zat murni tunggal", "Gas di udara"],
    answer: "Gabungan dua atau lebih unsur"
  },
  {
    question: "Zat yang tidak dapat diuraikan lagi disebut?",
    options: ["Unsur", "Senyawa", "Campuran", "Ion"],
    answer: "Unsur"
  },
  {
    question: "NaOH termasuk jenis?",
    options: ["Basa kuat", "Basa lemah", "Asam kuat", "Asam lemah"],
    answer: "Basa kuat"
  },
  {
    question: "HCl tergolong?",
    options: ["Asam kuat", "Asam lemah", "Basa", "Garam"],
    answer: "Asam kuat"
  },
  {
    question: "Unsur logam memiliki sifat?",
    options: ["Menghantarkan listrik", "Rapuh", "Tidak mengkilap", "Mudah menguap"],
    answer: "Menghantarkan listrik"
  },
  {
    question: "Proses perubahan padat menjadi gas disebut?",
    options: ["Sublimasi", "Kondensasi", "Evaporasi", "Depresi"],
    answer: "Sublimasi"
  },
  {
    question: "Tabel periodik unsur disusun berdasarkan?",
    options: ["Nomor atom", "Massa atom", "Jumlah proton", "Jumlah neutron"],
    answer: "Nomor atom"
  },
  {
    question: "Larutan yang menghantarkan listrik disebut?",
    options: ["Elektrolit", "Non-elektrolit", "Netral", "Bening"],
    answer: "Elektrolit"
  },
  {
    question: "Bensin termasuk campuran?",
    options: ["Homogen", "Heterogen", "Ionik", "Senyawa"],
    answer: "Homogen"
  },
  {
    question: "Air laut termasuk campuran?",
    options: ["Homogen", "Heterogen", "Padat", "Organik"],
    answer: "Homogen"
  },
  {
    question: "Reaksi antara asam dan basa menghasilkan?",
    options: ["Garam dan air", "Asam baru", "Gas", "Listrik"],
    answer: "Garam dan air"
  },
  {
    question: "Ciri reaksi kimia adalah?",
    options: ["Terbentuk zat baru", "Bau tetap sama", "Suhu tidak berubah", "Warna tidak berubah"],
    answer: "Terbentuk zat baru"
  },
  {
    question: "Zat yang mempercepat reaksi tanpa ikut bereaksi disebut?",
    options: ["Katalis", "Inhibitor", "Reaktan", "Enzim"],
    answer: "Katalis"
  },
  {
    question: "Oksidasi berarti?",
    options: ["Kehilangan elektron", "Mendapatkan elektron", "Netral", "Tidak bereaksi"],
    answer: "Kehilangan elektron"
  },
  {
    question: "Reduksi berarti?",
    options: ["Mendapatkan elektron", "Kehilangan elektron", "Menguap", "Tersublimasi"],
    answer: "Mendapatkan elektron"
  },
  {
    question: "Elektrolisis adalah proses?",
    options: ["Pemecahan senyawa dengan listrik", "Pembakaran gas", "Penyulingan air", "Perubahan wujud"],
    answer: "Pemecahan senyawa dengan listrik"
  },
  {
    question: "Mol adalah satuan untuk?",
    options: ["Jumlah partikel", "Massa", "Volume", "Energi"],
    answer: "Jumlah partikel"
  },
  {
    question: "Avogadro menyatakan bahwa 1 mol mengandung?",
    options: ["6,022 × 10²³ partikel", "1.000 atom", "1 liter gas", "100 gram zat"],
    answer: "6,022 × 10²³ partikel"
  },
  {
    question: "Zat yang menyebabkan korosi pada besi adalah?",
    options: ["Air dan oksigen", "Minyak", "Garam dapur", "Karbon dioksida"],
    answer: "Air dan oksigen"
  },
  {
    question: "Gas rumah kaca utama adalah?",
    options: ["CO₂", "O₂", "N₂", "H₂"],
    answer: "CO₂"
  },
  {
    question: "Senyawa organik selalu mengandung unsur?",
    options: ["Karbon", "Oksigen", "Hidrogen", "Nitrogen"],
    answer: "Karbon"
  },
  {
    question: "Metana memiliki rumus kimia?",
    options: ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
    answer: "CH₄"
  },
  {
    question: "Senyawa alkohol ditandai dengan gugus?",
    options: ["-OH", "-COOH", "-NH₂", "-CH₃"],
    answer: "-OH"
  },
  {
    question: "Karbohidrat tersusun dari unsur?",
    options: ["C, H, O", "C, H, N", "C, N, O", "H, O, Na"],
    answer: "C, H, O"
  }
],

        "Fisika": [
  {
    question: "Besaran yang memiliki satuan dan dapat diukur disebut?",
    options: ["Besaran fisika", "Satuan", "Vektor", "Skalar"],
    answer: "Besaran fisika"
  },
  {
    question: "Satuan SI dari gaya adalah?",
    options: ["Newton", "Joule", "Watt", "Pascal"],
    answer: "Newton"
  },
  {
    question: "Alat untuk mengukur kuat arus listrik adalah?",
    options: ["Amperemeter", "Voltmeter", "Ohmmeter", "Barometer"],
    answer: "Amperemeter"
  },
  {
    question: "1 Newton sama dengan?",
    options: ["1 kg·m/s²", "1 kg/s²", "1 J/s", "1 m/s²"],
    answer: "1 kg·m/s²"
  },
  {
    question: "Gaya gravitasi bumi menyebabkan benda?",
    options: ["Jatuh ke bawah", "Melayang", "Mengambang", "Tersenyum"],
    answer: "Jatuh ke bawah"
  },
  {
    question: "Hukum Newton pertama disebut juga hukum?",
    options: ["Kelembaman", "Aksi reaksi", "Percepatan", "Gaya gesek"],
    answer: "Kelembaman"
  },
  {
    question: "Hukum Newton kedua berbunyi?",
    options: ["F = m × a", "F = ma²", "a = m/F", "m = F/a"],
    answer: "F = m × a"
  },
  {
    question: "Gaya aksi dan reaksi termasuk hukum Newton ke?",
    options: ["Tiga", "Satu", "Dua", "Empat"],
    answer: "Tiga"
  },
  {
    question: "Energi tidak dapat diciptakan atau dimusnahkan adalah bunyi hukum?",
    options: ["Kekekalan energi", "Gravitasi", "Archimedes", "Coulomb"],
    answer: "Kekekalan energi"
  },
  {
    question: "Energi kinetik dimiliki oleh benda yang?",
    options: ["Bergerak", "Diam", "Mengapung", "Tenggelam"],
    answer: "Bergerak"
  },
  {
    question: "Energi potensial tergantung pada?",
    options: ["Ketinggian", "Kecepatan", "Gaya gesek", "Sudut kemiringan"],
    answer: "Ketinggian"
  },
  {
    question: "Usaha (W) sama dengan?",
    options: ["Gaya × jarak", "Massa × percepatan", "Energi ÷ waktu", "Tekanan × volume"],
    answer: "Gaya × jarak"
  },
  {
    question: "Satuan energi dalam SI adalah?",
    options: ["Joule", "Watt", "Newton", "Pascal"],
    answer: "Joule"
  },
  {
    question: "Daya adalah usaha per satuan?",
    options: ["Waktu", "Jarak", "Energi", "Massa"],
    answer: "Waktu"
  },
  {
    question: "Satuan daya adalah?",
    options: ["Watt", "Joule", "Newton", "Ampere"],
    answer: "Watt"
  },
  {
    question: "Alat untuk mengukur tekanan udara adalah?",
    options: ["Barometer", "Termometer", "Voltmeter", "Higrometer"],
    answer: "Barometer"
  },
  {
    question: "Tekanan hidrostatis dipengaruhi oleh?",
    options: ["Kedalaman", "Warna cairan", "Luas permukaan", "Suhu"],
    answer: "Kedalaman"
  },
  {
    question: "Benda dapat terapung jika massa jenisnya?",
    options: ["Lebih kecil dari zat cair", "Lebih besar dari zat cair", "Sama dengan zat cair", "Tidak diketahui"],
    answer: "Lebih kecil dari zat cair"
  },
  {
    question: "Bunyi memerlukan medium untuk merambat kecuali di?",
    options: ["Ruang hampa", "Udara", "Air", "Besi"],
    answer: "Ruang hampa"
  },
  {
    question: "Cepat rambat bunyi dipengaruhi oleh?",
    options: ["Medium", "Warna", "Bentuk benda", "Intensitas cahaya"],
    answer: "Medium"
  },
  {
    question: "Satuan frekuensi adalah?",
    options: ["Hertz", "Newton", "Joule", "Watt"],
    answer: "Hertz"
  },
  {
    question: "Cahaya termasuk gelombang?",
    options: ["Elektromagnetik", "Mekanik", "Longitudinal", "Bunyi"],
    answer: "Elektromagnetik"
  },
  {
    question: "Cermin cembung digunakan pada kendaraan karena?",
    options: ["Memperluas pandangan", "Memperkecil bayangan", "Memperbesar bayangan", "Memantulkan warna"],
    answer: "Memperluas pandangan"
  },
  {
    question: "Hukum pemantulan cahaya menyatakan sudut datang sama dengan?",
    options: ["Sudut pantul", "Sudut bias", "Sudut gelombang", "Sudut jatuh"],
    answer: "Sudut pantul"
  },
  {
    question: "Alat optik yang digunakan untuk melihat benda jauh adalah?",
    options: ["Teleskop", "Mikroskop", "Kaca pembesar", "Lensa mata"],
    answer: "Teleskop"
  },
  {
    question: "Proses pembentukan bayangan pada retina mata sama seperti?",
    options: ["Kamera", "Kaca", "Teleskop", "Cermin"],
    answer: "Kamera"
  },
  {
    question: "Satuan muatan listrik adalah?",
    options: ["Coulomb", "Ampere", "Volt", "Ohm"],
    answer: "Coulomb"
  },
  {
    question: "Rumus hukum Ohm adalah?",
    options: ["V = I × R", "I = V/R²", "R = V + I", "P = I × R"],
    answer: "V = I × R"
  },
  {
    question: "Satuan hambatan listrik adalah?",
    options: ["Ohm", "Volt", "Ampere", "Joule"],
    answer: "Ohm"
  },
  {
    question: "Alat untuk mengukur tegangan listrik adalah?",
    options: ["Voltmeter", "Amperemeter", "Ohmmeter", "Galvanometer"],
    answer: "Voltmeter"
  },
  {
    question: "Jika arus listrik terlalu besar, maka sekring akan?",
    options: ["Putus", "Menyala", "Melelehkan tembaga", "Tertawa kecil"],
    answer: "Putus"
  },
  {
    question: "Magnet memiliki dua kutub, yaitu?",
    options: ["Utara dan selatan", "Kanan dan kiri", "Atas dan bawah", "Positif dan negatif"],
    answer: "Utara dan selatan"
  },
  {
    question: "Gaya yang ditimbulkan oleh arus listrik disebut?",
    options: ["Gaya magnet", "Gaya gesek", "Gaya gravitasi", "Gaya sentrifugal"],
    answer: "Gaya magnet"
  },
  {
    question: "Hukum Faraday menjelaskan tentang?",
    options: ["Induksi elektromagnetik", "Hukum Newton", "Energi panas", "Tekanan fluida"],
    answer: "Induksi elektromagnetik"
  },
  {
    question: "Energi listrik dapat diubah menjadi energi cahaya oleh?",
    options: ["Lampu", "Setrika", "Motor listrik", "Kompor gas"],
    answer: "Lampu"
  },
  {
    question: "Transformator berfungsi untuk?",
    options: ["Menurunkan atau menaikkan tegangan listrik", "Menyimpan energi", "Mengubah arus AC ke DC", "Membuat kopi"],
    answer: "Menurunkan atau menaikkan tegangan listrik"
  },
  {
    question: "Satuan energi listrik adalah?",
    options: ["Joule", "Watt", "Ampere", "Volt"],
    answer: "Joule"
  },
  {
    question: "Alat untuk menyimpan muatan listrik disebut?",
    options: ["Kapasitor", "Resistor", "Transistor", "Induktor"],
    answer: "Kapasitor"
  },
  {
    question: "Gelombang yang arah rambatnya tegak lurus arah getarnya disebut?",
    options: ["Transversal", "Longitudinal", "Mekanik", "Elektromagnetik"],
    answer: "Transversal"
  },
  {
    question: "Gelombang suara di udara merupakan gelombang?",
    options: ["Longitudinal", "Transversal", "Elektromagnetik", "Superposisi"],
    answer: "Longitudinal"
  },
  {
    question: "Pantulan bunyi yang terdengar kembali disebut?",
    options: ["Gema", "Gaung", "Pantulan", "Resonansi"],
    answer: "Gema"
  },
  {
    question: "Resonansi terjadi ketika?",
    options: ["Frekuensi sama", "Amplitudo nol", "Gelombang berhenti", "Tidak ada bunyi"],
    answer: "Frekuensi sama"
  },
  {
    question: "Efek Doppler terjadi karena?",
    options: ["Gerak sumber atau pendengar", "Perubahan suhu", "Perbedaan tekanan", "Pantulan cahaya"],
    answer: "Gerak sumber atau pendengar"
  },
  {
    question: "Satuan suhu dalam SI adalah?",
    options: ["Kelvin", "Celcius", "Fahrenheit", "Reamur"],
    answer: "Kelvin"
  },
  {
    question: "Kalor jenis menyatakan?",
    options: ["Banyaknya kalor untuk menaikkan suhu 1 kg zat sebesar 1°C", "Jumlah kalor total zat", "Energi potensial zat", "Tekanan zat cair"],
    answer: "Banyaknya kalor untuk menaikkan suhu 1 kg zat sebesar 1°C"
  },
  {
    question: "Perpindahan panas secara zat ikut berpindah disebut?",
    options: ["Konveksi", "Konduksi", "Radiasi", "Difusi"],
    answer: "Konveksi"
  },
  {
    question: "Perpindahan panas tanpa medium disebut?",
    options: ["Radiasi", "Konduksi", "Konveksi", "Isolasi"],
    answer: "Radiasi"
  },
  {
    question: "Energi mekanik adalah jumlah dari?",
    options: ["Energi kinetik dan potensial", "Energi listrik dan panas", "Energi bunyi dan cahaya", "Energi gesek dan gaya"],
    answer: "Energi kinetik dan potensial"
  },
  {
    question: "Usaha bernilai nol jika gaya dan perpindahan?",
    options: ["Tegak lurus", "Searah", "Berlawanan", "Berbeda sudut"],
    answer: "Tegak lurus"
  },
  {
    question: "Tekanan pada zat cair dipengaruhi oleh?",
    options: ["Kedalaman dan massa jenis", "Warna cairan", "Luas wadah", "Suhu ruangan"],
    answer: "Kedalaman dan massa jenis"
    }
   ]

    }
};