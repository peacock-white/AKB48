'use strict';

{

  // おみくじ
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');

  btn.addEventListener('click', () => {
    const results = ['大吉', '中吉', '小吉', '凶'];
    const n = Math.floor(Math.random() * results.length);

    result.textContent = results[n];
  });


  //  パスワードジェネレーターの設定

  function showPassword() {
    const result2 = document.getElementById('result2');
    const numbersCheckbox = document.getElementById('numbers-checkbox');
    const symbolsCheckbox = document.getElementById('symbols-checkbox');
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!#$%&\/?';
    let password = '';
    let seed = letters + letters.toUpperCase();

    if (numbersCheckbox.checked) {
      seed += numbers;
    }

    if (symbolsCheckbox.checked) {
      seed += symbols;
    }

    for (let i = 0; i < slider.value; i++) {
      password += seed[Math.floor(Math.random() * seed.length)];
    }

    result2.textContent = password;
  }

  const slider = document.getElementById('slider');
  const btn2 = document.getElementById('btn2');


  slider.addEventListener('input', () => {
    const passwordLength = document.getElementById('password-length');

    passwordLength.textContent = slider.value;
  });


  btn2.addEventListener('click', () => {
    showPassword();

  });

  showPassword();






  
}

