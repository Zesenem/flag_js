
inicio
    
    real A
    real B
    real C
    real D
    real F
    real maior
    real menor
    
    
    
    escrever "digite o valor 1 "
    ler A
    
    escrever "digite o valor 2 "
    ler B
    
    escrever "digite o valor 3 "
    ler C
    
    escrever "digite o valor 4 "
    ler D
    
    escrever "digite o valor 5 "
    ler F
    
    maior <- A
    menor <- A
    
    se B > maior entao
        maior <- B
    fimSe
    se B < menor entao
        menor <- B
    fimSe
    
    se C > maior entao
        maior <- C
    fimSe
    se C < menor entao
        menor <- C
    fimSe
    
    se D > maior entao
        maior <- D
    fimSe
    se D < menor entao
        menor <- D
    fimSe
    
    se F > maior entao
        maior <- F
    fimSe
    se F < menor entao
        menor <- F
    fimSe
    
    escrever "O maior valor é: ", maior, "\n"
    escrever "O menor valor é: ", menor, "\n"
    
    
	
fim
