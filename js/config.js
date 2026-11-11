/* CONFIGURAÃ‡Ã•ES DO ESTABELECIMENTO â€” EDITE AQUI PARA CADA CLIENTE */
window.CONFIG = {
 nome:'Super Burguer', whatsapp:'5511940736787', instagram:'', endereco:'Itaquaquecetuba, SÃ£o Paulo', maps:'https://www.google.com/maps/search/?api=1&query=Itaquaquecetuba%20SP', taxaEntrega:700, creditoAgencia:true, pedidosAntecipados:false,
 horario:[null,['18:00','23:00'],['18:00','26:00'],['18:00','23:00'],['18:00','24:00'],['18:00','24:00'],['18:00','23:00']],
 imagens:{logo:'assets/img/logo.png',favicon:'assets/img/favicon.png',hero:'assets/img/banner-principal.webp',combos:'assets/img/banner-combos.webp'},
 textos:{hero:'SABOR QUE Ã‰ OUTRO NÃVEL',subtitulo:'HambÃºrgueres irresistÃ­veis, ingredientes selecionados e aquele sabor que transforma qualquer fome em uma experiÃªncia incrÃ­vel.'}
};
window.UTIL = {
 dinheiro(c){return (c/100).toLocaleString('pt-BR',{style:'currency',currency:'BRL'})},
 escapar(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))},
 horario(){return {aberto:true,proximo:""}},
 status(){const h={aberto:true,proximo:""};document.querySelectorAll('[data-status]').forEach(e=>{e.textContent=h.aberto?'ABERTO AGORA':'FECHADO NO MOMENTO'+(h.proximo?' Â· Abre '+h.proximo:'');e.classList.toggle('aberto',h.aberto);e.classList.toggle('fechado',!h.aberto)})},
 aplicarMarca(){document.querySelectorAll('[data-brand]').forEach(e=>e.textContent=CONFIG.nome);document.querySelectorAll('[data-address]').forEach(e=>e.textContent=CONFIG.endereco);document.querySelectorAll('[data-wa]').forEach(e=>e.href='https://wa.me/'+CONFIG.whatsapp);document.querySelectorAll('[data-maps]').forEach(e=>e.href=CONFIG.maps);document.querySelectorAll('[data-credit]').forEach(e=>e.hidden=!CONFIG.creditoAgencia);document.querySelectorAll('[data-logo]').forEach(e=>{e.src=CONFIG.imagens.logo;e.onerror=()=>{e.style.display='none'}});document.querySelectorAll('[data-instagram]').forEach(e=>{if(CONFIG.instagram)e.href=CONFIG.instagram;else e.hidden=true});this.status();setInterval(()=>this.status(),60000)}
};

