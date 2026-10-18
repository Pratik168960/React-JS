/*
        LECTURE 20: APPWRITE DATABASE, FILE UPLOAD AND CUSTOM QUERIES

THE GOAL:
- Expand the vendor lock-in prevention strategy by creating a new `config` service class.
- Handle Appwrite Databases (CRUD operations for blog posts) and Storage (File upload/delete for images).
- Understand how to query specific documents using Appwrite's custom querying system (e.g., getting only 'active' posts).

CORE CONCEPTS:
1. Building the Config Service (`Service` Class):
   - Just like `AuthService`, we create a `Service` class and export an instantiated object (`const service = new Service();`).
   - The constructor initializes the `Client`, `Databases`, and `Storage` (Bucket) using our environment variables[cite: 1].

2. Database Operations (Posts):
   - `createPost`: Uses `databases.createDocument()`. The tutor decides to use the `slug` as the unique Document ID instead of Appwrite's `ID.unique()` to enforce unique, readable URLs[cite: 1].
   - `updatePost`: Uses `databases.updateDocument()`. It takes the `slug` as the identifier and an object with the updated fields[cite: 1].
   - `deletePost`: Uses `databases.deleteDocument()`. Returns `true` if successful, `false` otherwise[cite: 1].
   - `getPost`: Uses `databases.getDocument()` to fetch a single article using its `slug`[cite: 1].
   
3. Custom Queries (`getPosts`):
   - We don't want to fetch all posts if they are 'inactive'.
   - We use `databases.listDocuments()` and pass an Appwrite `Query` array: `[Query.equal("status", "active")]`[cite: 1].
   - TUTOR IMPORTANT NOTE: Queries only work if you created an Index for that specific attribute (which we did for `status` in Lecture 18)[cite: 1].

4. Storage Operations (Files/Images):
   - `uploadFile`: Uses `storage.createFile()`. We use `ID.unique()` for the file ID. The file parameter receives the actual file blob, not just the file name[cite: 1].
   - `deleteFile`: Uses `storage.deleteFile()`[cite: 1].
   - `getFilePreview`: Uses `storage.getFilePreview()`. This is incredibly fast as it doesn't return a promise, just the direct resource URL for the image[cite: 1].
*/