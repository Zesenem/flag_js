
inicio
	
    real tempo, velocidade, distancia, litros
    
    escrever "digite o tempo da sua viagem em horas "
    ler tempo
    
    escrever "digite a velocidade media da sua viagem "
    ler velocidade
    
    distancia <- tempo * velocidade
    
    litros <- distancia / 12
    
    escrever "velocidade media:", "\t", velocidade,"\n","tempo de viagem: ","\t", tempo,"\n","distancia da viagem: ","\t",distancia,"\n","litros gastos: ","\t",litros
fim
