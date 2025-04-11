
inicio

    inteiro A, B, C, menor, meio, maior
	
    escrever "digite o valor A: "
    ler A
    
    escrever "digite o valor B: "
    ler B
    
    escrever "digite o valor C: "
    ler C
    
    se (A <= B e A <= C) entao
        menor <- A
        se (B <= C) entao
            meio <- B
            maior <- C
        senao
            meio <- C
            maior <- B
        fimSe
    senao
        se (B <= A e B <= C) entao
            menor <- B
            se (A <= C) entao
                meio <- A
                maior <- C
            senao
                meio <- C
                maior <- A
            fimSe
        senao
            menor <- C
            se (A <= B) entao
                meio <- A
                maior <- B
            senao
                meio <- B
                maior <- A
            fimSe
        fimSe
    fimSe
    
        escrever "os valores em ordem crescente sao: ", menor, ", ", meio, ", ", maior, "\n"

fim
