// VARIABEL GLOBAL
let playerName = '';
let playerLevel = '';
let currentSubject = '';
let currentScore = 0;
let currentQuestionIndex = 0;
let quizQuestions = [];


// Fungsi untuk navigasi antar halaman
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';
}

// ----------------------------------------------------
// LOGIKA UMUM & DONASI
// ----------------------------------------------------

document.querySelectorAll('.btn-donasi').forEach(btn => {
    btn.addEventListener('click', () => {
        document.getElementById('modal-donasi').style.display = 'flex';
    });
});

document.querySelector('#modal-donasi .close-button').addEventListener('click', () => {
    document.getElementById('modal-donasi').style.display = 'none';
});

document.getElementById('btn-salin-dana').addEventListener('click', () => {
    const danaNumber = document.getElementById('nomor-dana').textContent;
    navigator.clipboard.writeText(danaNumber);
    alert('Nomor DANA berhasil disalin!');
});


// ----------------------------------------------------
// HALAMAN 1: START
// ----------------------------------------------------

// Tangani pemilihan Tingkat Sekolah
document.querySelectorAll('.level-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        playerLevel = this.dataset.level;
        // Visualisasi tombol terpilih (opsional)
        document.querySelectorAll('.level-btn').forEach(b => b.classList.remove('selected'));
        this.classList.add('selected');
    });
});

// Tombol NEXT (pindah ke Halaman 2)
document.getElementById('btn-next-level').addEventListener('click', () => {
    playerName = document.getElementById('player-name-input').value.trim();

    if (playerName === '') {
        alert('Mohon masukkan Nama Anda sebelum melanjutkan!');
        return;
    }
    if (playerLevel === '') {
        alert('Mohon pilih Tingkat Sekolah!');
        return;
    }
    
    // Simpan nama pemain ke Firebase (Logika Firebase perlu ditambahkan)
    
    // Tampilkan Halaman 2 (Pemilihan Mata Pelajaran)
    setupSubjectPage(playerLevel);
    showPage('page-subject');
});


// ----------------------------------------------------
// HALAMAN 2: PEMILIHAN MATA PELAJARAN
// ----------------------------------------------------

function setupSubjectPage(level) {
    document.getElementById('current-level-display').textContent = `Tingkat: ${level}`;
    const subjectList = document.getElementById('subject-list');
    subjectList.innerHTML = ''; // Bersihkan tombol lama

    const subjects = QUIZ_DATA[level];
    if (subjects) {
        Object.keys(subjects).forEach(subject => {
            const button = document.createElement('button');
            button.className = 'subject-btn';
            button.textContent = subject;
            button.setAttribute('data-subject', subject);
            
            button.addEventListener('click', function() {
                currentSubject = this.dataset.subject;
                startQuiz(level, currentSubject);
            });

            subjectList.appendChild(button);
        });
    } else {
        subjectList.innerHTML = '<p>Maaf, belum ada data mata pelajaran untuk tingkat ini.</p>';
    }
}


// ----------------------------------------------------
// HALAMAN 3: KUIS
// ----------------------------------------------------

function startQuiz(level, subject) {
    quizQuestions = QUIZ_DATA[level][subject];
    currentQuestionIndex = 0;
    currentScore = 0;
    
    document.getElementById('player-name-display').textContent = playerName;
    document.getElementById('current-score').textContent = currentScore;

    showPage('page-quiz');
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= quizQuestions.length) {
        finishQuiz();
        return;
    }

    const q = quizQuestions[currentQuestionIndex];
    document.getElementById('quiz-question-text').textContent = q.question;
    document.getElementById('quiz-character').textContent = '🙂'; // Ekspresi default

    const optionsDiv = document.getElementById('quiz-options');
    optionsDiv.innerHTML = ''; // Bersihkan pilihan lama

    q.options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(button, option, q.answer));
        optionsDiv.appendChild(button);
    });
}

function checkAnswer(button, selectedOption, correctAnswer) {
    // Nonaktifkan semua tombol pilihan setelah satu dipilih
    document.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true);

    if (selectedOption === correctAnswer) {
        currentScore += 10; // Tambah skor
        document.getElementById('current-score').textContent = currentScore;
        document.getElementById('quiz-character').textContent = '😀'; // Tersenyum
        button.classList.add('correct');
    } else {
        document.getElementById('quiz-character').textContent = '🤪'; // Cemberut
        button.classList.add('wrong');
        // Tandai jawaban yang benar
        document.querySelectorAll('.option-btn').forEach(btn => {
            if (btn.textContent === correctAnswer) {
                btn.classList.add('correct');
            }
        });
    }
// ... dalam checkAnswer function ...

if (selectedOption === correctAnswer) {
    // ...
    if (audioCorrect) {
        audioCorrect.currentTime = 0; // Reset
        audioCorrect.play(); // PLAY
    }
    // ...
} else {
    // ...
    if (audioWrong) {
        audioWrong.currentTime = 0; // Reset
        audioWrong.play(); // PLAY
    }
    // ...
}
    // Lanjut ke pertanyaan berikutnya setelah jeda singkat
    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 1500); 
}

// Tombol Selesai Kuis
document.getElementById('btn-end-quiz').addEventListener('click', finishQuiz);


function finishQuiz() {
    // Simpan data akhir ke Firebase (Logika Firebase perlu ditambahkan)
    // score, tingkat sekolah, mata pelajaran
    
    // Tampilkan Popup Selesai Kuis
    document.getElementById('final-player-name').textContent = playerName;
    document.getElementById('final-score-display').textContent = currentScore;
    document.getElementById('modal-finish').style.display = 'flex';
}

document.querySelector('#modal-finish .close-button').addEventListener('click', () => {
    document.getElementById('modal-finish').style.display = 'none';
    // Kembali ke halaman awal setelah kuis selesai
    showPage('page-start');
});

document.getElementById('btn-share-wa').addEventListener('click', () => {
    const message = `Halo! Saya ${playerName} baru saja menyelesaikan kuis ${currentSubject} tingkat ${playerLevel} dan mendapatkan skor ${currentScore}! Ayo ikutan main dan kalahkan skor saya!`;
    const waLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(waLink, '_blank');
});


// Mulai aplikasi
document.addEventListener('DOMContentLoaded', () => {
    showPage('page-start');

});
