class Auth {
    static login(user) {
        const token = Auth.generateToken();
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
    }

    static register(user) {
        const token = Auth.generateToken();
        localStorage.setItem('users', JSON.stringify(user));
    }

    static logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }

    static generateToken() {
        return Math.random().toString(36).substr(2);
    }

    static isAuthenticated() {
        return localStorage.getItem('token') !== null;
    }

    static getUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default Auth