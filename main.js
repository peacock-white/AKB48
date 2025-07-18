'use strict';

{

  // モーダルウィンドーの設定
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const modal = document.getElementById('modal');
  const mask = document.getElementById('mask');

  open.addEventListener('click', () => {
    modal.classList.remove('hidden')
    mask.classList.remove('hidden')
  });

  close.addEventListener('click', () => {
    modal.classList.add('hidden')
    mask.classList.add('hidden')
  });

  mask.addEventListener('click', () => {
    close.click();
  });

  gsap.to('.box',{ x: 300 });




}

