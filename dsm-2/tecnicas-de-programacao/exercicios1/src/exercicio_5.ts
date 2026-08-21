type Person = {
    nome: string;
    idade: number;
};

interface Pessoa {
    nome: string;
    idade: number;
}

/*
Responda às questões a seguir: 

    1- Cite duas diferenças entre type e interface.  

    2- Explique em quais situações o uso de interface é mais recomendado.  

    3- Explique em quais situações o uso de type é mais adequado. 
*/

// 1. Type permite |, &, tuplas e aliases; interface define estruturas e usa extends.

// 2. Interface é recomendada para definir contratos de objetos e classes.

// 3. Type é mais adequado para uniões, interseções, tipos primitivos e tuplas.