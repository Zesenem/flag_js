inicio
      
      inteiro alunos, loop
      real notas, soma, media
      
      escrever "Digite o numero de alunos "
      ler alunos
      
      soma <- 0
      loop <- 1
      
      enquanto loop <= alunos faz
      escrever "Digite a nota do aluno ", loop, ": "
       ler notas
       soma <- soma + notas
       loop <- loop + 1
       fimEnquanto
       
       media <- soma / alunos
       
       escrever "A media da turma e: ", media
       
fim
