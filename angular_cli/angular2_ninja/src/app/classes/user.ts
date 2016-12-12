export class User {
    username: string;
    password: string;
    birthdateAsYear: string;

    constructor(username?: string, password?: string, birthdateAsYear?: string) {
        this.username = username || '';
        this.password = password || '';
        this.birthdateAsYear = birthdateAsYear || '';
    }
}
