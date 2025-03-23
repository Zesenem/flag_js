
inicio
	
    variavel real A [8]
    variavel real B [8]
    inteiro i
    
    para i de 0 ate 7
        escrever "digite o valor ", i + 1, "\n"
        ler A [i]
    proximo
    
    para i de 0 ate 7
        B [i] <- A [i] * 3
    proximo
    
    escrever "Os elementos do vetor B (multiplicados por 3) são: ", "\n"
    para i de 0 ate 7
        escrever B[i], "\n"
    proximo
    
    
fim
