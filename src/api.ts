const conta = {
    email: 'roberto.melo@dio.bank',
    password: '123456',
    name: 'Roberto Melo',
    balance: 100000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})
