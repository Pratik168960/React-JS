/*
        LECTURE 19: BUILD AUTHENTICATION SERVICE WITH APPWRITE

THE GOAL:
- Prevent "Vendor Lock-in" by building a standalone Authentication Service class.
- This ensures our React components (like Login or Signup pages) don't care if we use Appwrite, Firebase, or a custom backend under the hood. They just call generic methods.
- Create methods for: Account Creation, Login, Get Current User, and Logout using Appwrite SDK.

CORE CONCEPTS:
1. Vendor Lock-in & Service Architecture:
   - If we write Appwrite-specific code directly inside every React component, migrating to another backend later would be a nightmare.
   - We solve this by creating a Javascript Class (`AuthService`). The components will interact ONLY with this class.

2. Exporting an Object, not just a Class:
   - Instead of forcing the user/components to instantiate `new AuthService()` every time they import it, we instantiate the object directly inside the file and export the *object* (`const authService = new AuthService(); export default authService;`).
   - This means components can immediately use `authService.login()` right after importing.

3. The Constructor & SDK Initialization:
   - The Appwrite SDK requires setting up a `Client` and an `Account`.
   - We don't initialize the `Account` in the global scope to save resources. Instead, we initialize the `Client` and `Account` inside the class `constructor()` so they are only created when `new AuthService()` is actually called.

4. The Async Methods:
   - `createAccount`: Wraps Appwrite's `account.create()`. If successful, the tutor automatically calls `login()` so the user doesn't have to sign in immediately after signing up.
   - `login`: Wraps `account.createEmailSession()`.
   - `getCurrentUser`: Wraps `account.get()`. Important: Instead of an if/else block, the tutor wraps this in try/catch and adds a fallback `return null;` at the end so it safely fails if no user session exists.
   - `logout`: Wraps `account.deleteSessions()` (deletes all sessions across all devices).
*/