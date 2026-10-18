(() => {
  const modal=document.getElementById('member-modal');
  if(!modal)return;
  const img=document.getElementById('member-modal-image');
  const close=modal.querySelector('.member-modal-close');
  let trigger=null;
  function hide(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('member-modal-active');if(trigger)trigger.focus();}
  document.querySelectorAll('.band-member-card').forEach(card=>card.addEventListener('click',()=>{
    trigger=card;
    img.src=card.dataset.large;
    img.alt=card.dataset.name+' — band portrait';
    img.onerror=()=>{img.onerror=null;img.src=card.querySelector('img').src;};
    modal.classList.add('open');modal.setAttribute('aria-hidden','false');
    document.body.classList.add('member-modal-active');close.focus();
  }));
  close.addEventListener('click',hide);
  modal.addEventListener('click',e=>{if(e.target===modal)hide();});
  document.addEventListener('keydown',e=>{if(!modal.classList.contains('open'))return;if(e.key==='Escape')hide();if(e.key==='Tab'){e.preventDefault();close.focus();}});
})();