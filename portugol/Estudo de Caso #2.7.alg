inicio

    real nota1, nota2, media
    
    escrever "Digite a sua Primeira nota "
    ler nota1
    
    escrever "Digite a sua Segunda nota "
    ler nota2

    media <- (nota1 + nota2) / 2
    
    escolhe media
        caso 7,8,9,10:
            escrever "Passou "
        caso 4,5,6:
            escrever "Repete o exame "
        caso 0,1,2,3:
            escrever "Chumbou "
        defeito:
            escrever "Nota inválida "
    fimEscolhe
    
fim
