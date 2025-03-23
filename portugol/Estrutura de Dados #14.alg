
inicio
	real a, b, c, d, media
        
      escrever "digite a primeira nota do aluno "
      ler a
      
      escrever "digite a segunda nota do aluno "
      ler b
      
      escrever "digite a terceira nota do aluno "
      ler c
      
      escrever "digite a quarta nota do aluno "
      ler d
      
      media <- (a + b + c + d) / 4 
      
      se media >= 5 entao
        escrever "o aluno foi aprovado com a media de ", media
        senao 
        escrever "o aluno chumbou com a media de ", media
      fimSe
      
fim
