
import { User } from './user';

describe('unit tests for user class', () => {

    let user: User;
    beforeEach(() => {
        user = new User('nik', 'password');
    });

    it('user should be initialized', () => {
        expect(user).toBeDefined();
    });

    it('user should have a name', () => {
        expect(user.username).toBe('nik');
    });

    it('user should have a password', () => {
        expect(user.password).toBe('password');
    });
});
