
function simplex() {
 //Chama a função MontarMatrix
  montamatrix();
}

function montamatrix()
{
  // Input Z
  var inputZ = document.getElementById('zFunction').value.split(';');

  // Restrições
  var rest = document.querySelectorAll('#subjects .form-group');

  // Cria a matriz do simplex
  matriz = [[]];

  // Primeira linha: 'cabeçalho'
  matriz[0][0] = 'Linha';

  // Preenche as variaveis 'x'
  for(var i = 1; i <= inputZ.length; i++)
    matriz[0].push('x' + i);

  // Preenche as variaveis de 'f'
  for(var i = 1; i <= rest.length; i++)
    matriz[0].push('f' + i);

  // Preenche as variaveis de 'b'
  matriz[0][matriz[0].length] = 'b';

  var count = 1;

  // Para cada restrição, teremos uma linha
  for(var i = 1; i <= rest.length; i++)
  {
    // Adiciona a linha fN na primeira coluna
    matriz.push(['f' + i]);

    count = 1;

    // Valores das variáveis básicas
    var subjectVars = rest[i-1].querySelectorAll('input')[0].value.split(';');

    // Preenche as variáveis xN
    for(var j = 0; j < inputZ.length; j++)
    {
      if(matriz[j])
        matriz[i][count++] = Number(subjectVars[j]);
      else
        matriz[i][count++] = 0;
    }

    // Preenche os valores de fN
    for(var j = 0; j < count.length; j++)
    {
      matriz[i][count] = Number((matriz[i][0] == matriz[0][count] ? 1 : 0));
      count++;
    }

    // Preenche o valor de 'b'
    matriz[i][count] = Number(rest[i-1].querySelectorAll('input')[1].value);
  }

  // E também uma linha final 'Z'
  matriz.push(['Z']);

  // Reseta o contador
  count = 1;

  // Preenche as variáveis xN
  for(var i = 0; i < inputZ.length; i++)
  {
    if(inputZ[i])
      matriz[matriz.length - 1][count++] = Number(-1 * inputZ[i]);
    else
      matriz[matriz.length - 1][count++] = 0;
  }

  // Preenche os valores de fN
  for(var j = 0; j < rest.length; j++)
    matriz[matriz.length - 1][count++] = 0;

  // Preenche o valor de b
  matriz[matriz.length - 1][count] = 0;

 //Retorna Matrix Montada
  console.log(matriz);
}