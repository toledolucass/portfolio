const mostrar_mais_btn = document.querySelector('.mostrar-mais');
let div_projeto = document.querySelectorAll('.projeto:not(.ativo)');

arr_projetos = [...div_projeto];

mostrar_mais_btn.addEventListener('click', function(){
    arr_projetos.forEach(projeto_inativo => {
        projeto_inativo.classList.add('ativo');
    });

    mostrar_mais_btn.classList.add('remover');
})
