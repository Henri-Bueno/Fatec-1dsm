type Status = "ativo" | "inativo" | "bloqueado";

type Usuario = {
    id: number;
    nome: string;
};
type UsuarioSistema = Usuario & {
    status: Status;
    ultimoAcesso?: Date;
};
    /*
    1- Explique o que representa o tipo Status.  

    2- Explique o que representa o tipo UsuarioSistema.  

    3- Explique por que a definição de Status não poderia ser substituída diretamente por uma interface. */

    // 1. Status: define uma união de 3 valores possíveis: "ativo", "inativo" ou "bloqueado".

    // 2. UsuarioSistema: combina Usuario com status e ultimoAcesso opcional.

    // 3. Interface define estruturas de objetos; Status é uma união de valores literais, por isso usa type.