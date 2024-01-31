'use strict';
{
   

    let modalWindow_Btn_Open = document.getElementById('hero-button');
    console.log(modalWindow_Btn_Open);
    modalWindow_Btn_Open.addEventListener('click', function () {
        // ModalWindow_Open();
        ModalWindow_Toggle();
    });

    let modalWindow_Btn_Close = document.getElementById('modal-close-btn');
    modalWindow_Btn_Close.addEventListener('click', function () {
        // ModalWindow_Close();
        ModalWindow_Toggle();
    });
    function ModalWindow_Toggle() {
        let modalForm = document.querySelector('#modal-form');
        modalForm.classList.toggle('active');
    }

}