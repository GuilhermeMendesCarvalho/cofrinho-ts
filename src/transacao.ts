import { tipoTransacao } from "./tipo-transacao";

export type transacao = {
    tipoTransacao: tipoTransacao;
    valor: number;
    data: Date;
}