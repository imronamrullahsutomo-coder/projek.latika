// 1. Dark/Light Mode Switcher
const themeToggleBtn = document.getElementById('themeToggleBtn');
const themeIcon = document.getElementById('themeIcon');
const themeText = document.getElementById('themeText');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'light') {
        body.setAttribute('data-theme', 'dark');
        themeIcon.className = 'fa-solid fa-sun';
        themeText.textContent = 'Light Mode';
    } else {
        body.setAttribute('data-theme', 'light');
        themeIcon.className = 'fa-solid fa-moon';
        themeText.textContent = 'Dark Mode';
    }
});

// 2. Quick Notes (LocalStorage)
const quickNotes = document.getElementById('quickNotes');
const clearNotesBtn = document.getElementById('clearNotesBtn');

quickNotes.value = localStorage.getItem('digihub_notes') || '';
quickNotes.addEventListener('input', () => {
    localStorage.setItem('digihub_notes', quickNotes.value);
});

clearNotesBtn.addEventListener('click', () => {
    if (confirm('Yakin ingin membersihkan catatan?')) {
        quickNotes.value = '';
        localStorage.removeItem('digihub_notes');
    }
});

// 3. Word & Character Counter
const counterText = document.getElementById('counterText');
const wordCount = document.getElementById('wordCount');
const charCount = document.getElementById('charCount');
const clearCounterBtn = document.getElementById('clearCounterBtn');

counterText.addEventListener('input', () => {
    const text = counterText.value.trim();
    charCount.textContent = counterText.value.length;
    const words = text === '' ? [] : text.split(/\s+/);
    wordCount.textContent = words.length;
});

clearCounterBtn.addEventListener('click', () => {
    counterText.value = '';
    wordCount.textContent = '0';
    charCount.textContent = '0';
});

// 4. Password Generator
const passwordOutput = document.getElementById('passwordOutput');
const generatePassBtn = document.getElementById('generatePassBtn');
const copyPassBtn = document.getElementById('copyPassBtn');
const includeUpper = document.getElementById('includeUpper');
const includeNumbers = document.getElementById('includeNumbers');
const includeSymbols = document.getElementById('includeSymbols');

function generatePassword() {
    let chars = "abcdefghijklmnopqrstuvwxyz";
    if (includeUpper.checked) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers.checked) chars += "0123456789";
    if (includeSymbols.checked) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let password = "";
    for (let i = 0; i < 12; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    passwordOutput.value = password;
}

generatePassBtn.addEventListener('click', generatePassword);
// Generate password saat pertama kali dimuat
generatePassword();

copyPassBtn.addEventListener('click', () => {
    if (!passwordOutput.value) return;
    navigator.clipboard.writeText(passwordOutput.value);
    alert('Sandi berhasil disalin ke clipboard!');
});

// 5. Text Converter
const converterText = document.getElementById('converterText');
const toUpperBtn = document.getElementById('toUpperBtn');
const toLowerBtn = document.getElementById('toLowerBtn');
const capitalizeBtn = document.getElementById('capitalizeBtn');

toUpperBtn.addEventListener('click', () => {
    converterText.value = converterText.value.toUpperCase();
});

toLowerBtn.addEventListener('click', () => {
    converterText.value = converterText.value.toLowerCase();
});

capitalizeBtn.addEventListener('click', () => {
    converterText.value = converterText.value.toLowerCase().replace(/(^\w{1})|(\s+\w{1})/g, match => match.toUpperCase());
});
  
