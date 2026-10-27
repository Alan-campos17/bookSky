const livro = {
  titulo: 'God of War',
  autor: 'Exemplo',
  status: 'Disponível'
};

const catalogo = document.querySelector('#catalogo');

const titulo = document.createElement('h3');
titulo.textContent = 'God of War';

catalogo.append(titulo);

console.log(livro.titulo);
