function copyToClipboard(text) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  
    const button = document.querySelector('button');
    button.classList.remove('btn-outline-danger');
    button.classList.add('btn-outline-success');
    button.innerHTML = 'Név kimásolva';
  }