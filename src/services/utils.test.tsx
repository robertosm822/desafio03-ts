import { formatarMoeda } from './utils';

describe('formatarMoeda', () => {
    it('deve formatar um número positivo no padrão BRL', () => {
        const valor=1234567.89;
        const resultado = formatarMoeda(valor).replace(/\s+/g, ''); // Remove todos os espaços
        expect(resultado).toBe('R$1.234.567,89'); // Sem espaço após "R$"
    });

    it('deve formatar zero como R$ 0,00', () => {
        const valor = 0;
        const resultado = formatarMoeda(valor).replace(/\s+/g, '');
        expect(resultado).toEqual('R$0,00');
    });

    it('deve lançar um erro se o valor fornecido não for um número', () => {
        const valorInvalido = '1234' as any; // Forçando um tipo inválido
        expect(() => formatarMoeda(valorInvalido)).toThrowError('O valor fornecido deve ser um número.');
    });
});