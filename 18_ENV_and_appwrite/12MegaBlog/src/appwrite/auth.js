/* eslint-disable no-useless-catch */
import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";

// NOTE: We wrap Appwrite services in a class to future-proof the code. This can be also used as a snippet whenever you need for appwrite as these are the main basics services which are almost mandatory 
// If we move to Firebase tomorrow, we just change the code inside these methods.
export class AuthService {
    client = new Client();
    account;

    // We use a constructor so the client and account are only initialized when a new object is actually created from this class.
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    // Wraps the Appwrite account creation functionality
    async createAccount({email, password, name}) {
        try {
            // NOTE: Appwrite requires ID.unique() as the very first parameter, before email and password.
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // If account creation is successful, automatically log the user in
                return this.login({email, password});
            } else {
               return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    // Wraps the Appwrite email session creation (login)
    async login({email, password}) {
        try {
            // NOTE: Do not use account.createSession, the correct modern method is createEmailSession (or createEmailPasswordSession in latest SDKs, but we used createEmailSession).}
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    // Checks if the user is currently logged in when they visit the home page directly
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        // Fail-safe: if the try/catch fails or doesn't return, return null so the app knows there is no active user session.
        return null;
    }

    // Wraps the Appwrite session deletion (logout)
    async logout() {
        try {
            // NOTE: deleteSessions() removes the login session from all devices. 
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

// NOTE: Instead of exporting the class, we export a pre-instantiated object. 
// This saves developers from having to use the 'new' keyword every time they import this file.
const authService = new AuthService();

export default authService;