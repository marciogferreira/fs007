import scrypt from 'node:crypto';

class Helpers {
    static getHash(senha) {
        return scrypt.scryptSync(senha, 'salt', 100).toString('hex'); // Criptografia da senha
    }
}

export default Helpers;