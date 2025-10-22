// === FIREBASE SETUP ===
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
import { firebaseConfig } from "./firebaseConfig.js";

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// ==========================================
// VARIABEL GLOBAL
// ==========================================
let playerName = '';
let playerLevel = '';
let currentSubject = '';
let currentScore = 0;
let currentQuestionIndex = 0;
let quizQuestions = [];
const audioCorrect = document.getElementById('audioCorrect');
const audioWrong = document.getElementById('audioWrong');

const sponsorURL = "https://www.effectivegatecpm.com/bnr0fg635?key=cfb6707c978f7894439b33d707495919"; // 🔗 Ganti dengan URL kamu

// ==========================================
// FUNGSI NAVIGASI ANTAR HALAMAN
// ==========================================
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });
    document.getElementById(pageId).style.display = 'block';
}

// ==========================================
// LOGIKA UMUM & DONASI
// ==========================================
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

// ==========================================
// HALAMAN 1: START
// ==========================================
document.querySelectorAll('.level-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        playerLevel = this.dataset.level;
        document.querySelectorAll('.level-btn').forEach(b => b.classList.remove('selected'));
        this.classList.add('selected');
    });
});

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

    setupSubjectPage(playerLevel);
    showPage('page-subject');
});

// ==========================================
// HALAMAN 2: PEMILIHAN MATA PELAJARAN
// ==========================================
function setupSubjectPage(level) {
    document.getElementById('current-level-display').textContent = `Tingkat: ${level}`;
    const subjectList = document.getElementById('subject-list');
    subjectList.innerHTML = '';

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

// ==========================================
// HALAMAN 3: KUIS
// ==========================================
function startQuiz(level, subject) {
    quizQuestions = QUIZ_DATA[level][subject];
    currentQuestionIndex = 0;
    currentScore = 0;
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
    document.getElementById('quiz-character').textContent = '🙂';

    const optionsDiv = document.getElementById('quiz-options');
    optionsDiv.innerHTML = '';

    q.options.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(button, option, q.answer));
        optionsDiv.appendChild(button);
    });
}

function checkAnswer(button, selectedOption, correctAnswer) {
    document.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true);

    if (selectedOption === correctAnswer) {
        currentScore += 10;
        document.getElementById('current-score').textContent = currentScore;
        document.getElementById('quiz-character').textContent = '😀';
        button.classList.add('correct');
        if (audioCorrect) { audioCorrect.currentTime = 0; audioCorrect.play(); }
    } else {
        document.getElementById('quiz-character').textContent = '🤪';
        button.classList.add('wrong');
        document.querySelectorAll('.option-btn').forEach(btn => {
            if (btn.textContent === correctAnswer) btn.classList.add('correct');
        });
        if (audioWrong) { audioWrong.currentTime = 0; audioWrong.play(); }
    }

    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 1500);
}

// ==========================================
// SELESAI KUIS
// ==========================================
async function finishQuiz() {
    try {
        const playerRef = ref(db, "players");
        await push(playerRef, {
            name: playerName,
            level: playerLevel,
            subject: currentSubject,
            score: currentScore,
            date: new Date().toISOString()
        });
        console.log("Data tersimpan ke Firebase!");
    } catch (error) {
        console.error("Gagal menyimpan ke Firebase:", error);
    }

    document.getElementById('final-player-name').textContent = playerName;
    document.getElementById('final-score-display').textContent = currentScore;
    document.getElementById('modal-finish').style.display = 'flex';
}

// ✅ Tombol selesai kuis
document.getElementById('btn-end-quiz').addEventListener('click', () => {
    // Tutup modal hasil
    document.getElementById('modal-finish').style.display = 'none';
    // Kembali ke halaman utama
    showPage('page-start');
    // Buka sponsor setelah 4 detik
    setTimeout(() => {
        window.open(sponsorURL, '_blank');
    }, 4000);
});

// ✅ Tombol bagikan ke WhatsApp
document.getElementById('btn-share-wa').addEventListener('click', () => {
    const message = `Halo! Saya ${playerName} baru saja menyelesaikan kuis ${currentSubject} tingkat ${playerLevel} dan mendapatkan skor ${currentScore}! Ayo ikutan main di https://hamami-del.github.io/kuis_sd_smp_sma/`;
    const waLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(waLink, '_blank');
});

// ==========================================
// INISIALISASI APP
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    showPage('page-start');
});

