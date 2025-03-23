
inicio
	
        real a, b, c, media
        
        escrever "digite o valor A "
        ler a
        
        escrever "digite o valor B "
        ler b
        
        media <- (a + b) / 2 
        
        se media >= 7 entao
            escrever "o aluno foi aprovado com a media: ", media
        senao
            escrever "digite o valor C da nota de exame: "
            ler c
            
            media <- (a + b + c) / 3
            
            se media >= 7 entao
             escrever "o aluno foi aprovado com exame com a media: ", media
             senao
             escrever "o aluno foi reprovado com exame com a media: ", media
           fimSe
         fimSe
         
            
       
fim
