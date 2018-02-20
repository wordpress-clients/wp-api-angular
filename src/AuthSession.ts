import { ICredentials } from './interfaces';

/**
 * Stores auth session.
 * @author karrirasinmaki
 */
export class AuthSession {
  static saveSession(credentials: ICredentials) {
    localStorage.setItem('credentials', JSON.stringify(credentials));
  }
  static getSession(): ICredentials {
    return JSON.parse(localStorage.getItem('credentials'));
  }
  static removeSession() {
    localStorage.removeItem('credentials');
  }
}
