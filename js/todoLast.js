// ====================================================================================
// versione funzionante definitiva
// ====================================================================================
import { Todo } from '../js/Todo.js';

$(() => {
    let todolist = [];
    
    stampaTodo();
    let button = $('.todo button');
    button.on('click', function(){
        let titolo = $('#titolo').val();
        let testo = $('#testo').val();
        let todo = new Todo(titolo, testo);
        if( titolo !== '' && testo !== ''){
            todolist.push(todo);
            localStorage.setItem('listaTodo', JSON.stringify(todolist));
            stampaTodo();
            $('#titolo').val('');
            $('#testo').val('');
        }else {
            alert('Devi riempire i campi vuoti!');
            return
        }
    });
    
    function stampaTodo() {
        let lista = $('.lista ul');
        lista.html('');
        let localLista = localStorage.getItem('listaTodo');
        if (localLista !== null) {
            todolist = JSON.parse(localLista); //trasforma in oggetto 
        }

        $.each(todolist, function (index, item) {
            $(lista).append(`<li class="list-group-item">${item.titolo} - ${item.testo} <span id='rimuovi' class='btn btn-sm btn-danger float-end'>X</span></li>`)
        });
        }
       
        
        $(document).on('click', '#rimuovi', function () {
            let i = $(this.parentElement).index();
            todolist.splice(i, 1);
            localStorage.setItem('listaTodo', JSON.stringify(todolist));
            stampaTodo();
        });

    // =============================================================
    // sostituendo l'each con un ciclo for ...
    // =============================================================
    // for (let i = 0; i < todolist.length; i++) {
    //     lista += "<li class='list-group-item d-flex justify-content-between align-items-center'>" + todolist[i].titolo + ' - ' + todolist[i].testo + "<span id='rimuovi' onclick='rimuoviTask(" + i + ")' class='btn btn-sm btn-danger float-end'>X</span></li>";
    // }
    // $('.lista ul').html(lista);

    // function rimuoviTask(index) {
    //     todolist.splice(index, 1);
    //     localStorage.setItem('listaTodo', JSON.stringify(todolist));
    //     stampaTodo();

    // }
    // rimuoviTask();
    // $('.lista ul').on('click', '.btn', function () {
    //     let index = $(this.parentElement).index();
    //     rimuoviTask(index);
    //     stampaTodo();
    // });
    
    // ===================================================================
    // file originale completamente in Js vanilla
    // ===================================================================
    // function stampaTodo() {
    //     let lista = document.querySelector('.lista ul');
    //     lista.innerHTML = '';

    //     let localLista = localStorage.getItem('listaTodo');
    //     if (localLista !== null) {
    //         todolist = JSON.parse(localLista);
    //     }

    //     todolist.forEach((i, todo) => {
    //         let li = document.createElement('li');
    //         let i = 0;
    //         li.className = 'list-group-item';
    //         li.innerHTML = todo.titolo + ' - ' + todo.testo;
    //         li.innerHTML += '<span id="rimuovi" class="rimuovi btn btn-sm btn-danger float-end">X</span>';
    //         lista.appendChild(li);
    //         let rimuovi = document.getElementsByClassName('.rimuovi');
    //         rimuovi.addEventListener('click', function () {
    //             todolist.splice(todolist.indexOf(i), 1);
    //             localStorage.setItem('listaTodo', JSON.stringify(todolist));
    //             stampaTodo();
    //         });
    //     });
    // }
    
    });
