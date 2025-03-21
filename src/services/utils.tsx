export const formatarMoeda = (valor: number): string => {
    // Verifica se o valor é um número
    if (typeof valor !== 'number') {
        throw new Error('O valor fornecido deve ser um número.');
    }

    // Usa Intl.NumberFormat para formatar o valor no padrão BRL
    const formatoMoeda = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    return formatoMoeda.format(valor);
}