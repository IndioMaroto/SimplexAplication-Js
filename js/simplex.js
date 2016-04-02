
function simplex() {
 //Chama a função MontarMatrix
  montamatrix();
}

function montamatrix() {

  //Pega o valores da função
  var z = document.getElementById('zFunction').value.split(';');

  //Pega os campos de restrição
  var rest = document.querySelectorAll(".form-control");

  //Gera a Matrix
  matrix = [[]];

  //Adiciona A primeira Linha a Palavra "Linha"
  matrix[0].push('Linha');
  
  //Adiona as variaveis x ao cabeçario
  for(var i = 1; i <= z.length; i++)
    matrix[0].push('x' + i);

 //Adiciona as variaveis de folga ao cabecalho
  for(var i = 1; i <=rest.length; i++)
    matrix[0].push('f' + i);

 //Adiocina o "B" na ultima colunma
  matrix[0][matrix[0].length] = 'b'

  console.log(matrix);

}
