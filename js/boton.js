{
    /*===================== WIDGET DE CHAT FLOTANTE =======================*/
    const btnChat = document.getElementById('btn-chat');
    const ventanaChat = document.getElementById('ventana-chat');
    const btnCerrarChat = document.getElementById('btn-cerrar-chat');

    if(btnChat && ventanaChat && btnCerrarChat) {

        btnChat.addEventListener('click', () => {
            ventanaChat.classList.add('is-active');
           
            btnChat.style.display = 'none'; 
        });

       
        btnCerrarChat.addEventListener('click', () => {
            ventanaChat.classList.remove('is-active');
          
            btnChat.style.display = 'flex'; 
        });
    }
}