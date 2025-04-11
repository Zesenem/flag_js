
inicio

	inteiro i, valor, j, fatorial
      inteiro soma
      
      soma <- 0
      
      para i de 1 ate 15
      
          escrever "digite o valor ", i, ": "
          ler valor
          
          fatorial <- 1
          
      para j de 1 ate valor
      
          fatorial <- fatorial * j
          
      proximo
      
          soma <- soma + fatorial
      proximo
      
      escrever "O somatório dos fatoriais é: ", soma, "\n"
fim
