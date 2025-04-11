
inicio
	
    real valor, taxa, tempo, prestacao
    
    escrever "digite o seu valor: "
    ler valor
    
    escrever "digite a sua taxa: "
    ler taxa
    
    escrever "digite o tempo que passou: "
    ler tempo
    
    prestacao <- valor + (valor * (taxa / 100) * tempo)
    
    escrever "a sua prestacao e de: ", prestacao, "\n"
fim
