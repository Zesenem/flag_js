inicio

    inteiro a, b, c, fib
    
    a <- 0
    
    b <- 1
    
   para c de 1 ate 15
        se c = 1 ent�o
            fib <- a
        fimse
        se c = 2 ent�o
            fib <- b
        senao
            fib <- a + b
            a <- b
            b <- fib
        fimSe
        escrever fib, "\n"
    proximo
    
    
	
fim
