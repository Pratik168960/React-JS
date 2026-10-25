import conf from '../conf/conf.js';
import { Client, ID, Databases, Storage, Query, Permission, Role } from "appwrite";

/*
 * NOTE: VENDOR LOCK-IN PREVENTION
 * We create a wrapper class named `Service`. 
 * Why? If we ever want to move away from Appwrite and use Firebase or a custom backend, 
 * we don't want to rewrite our React UI components. Our UI will only call `service.createPost()`. 
 * All the Appwrite-specific code is hidden ("under the hood") inside this class.
 */
export class Service {
    client = new Client();
    databases;
    bucket; // This represents Appwrite Storage

    /*
     * CONSTRUCTOR OPTIMIZATION
     * We don't initialize the databases and storage globally. 
     * We initialize them inside the constructor so they are only created into memory 
     * when a new object of this class is actually instantiated.
     */
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    // =========================================================================
    // DATABASE SERVICES (POST CRUD OPERATIONS)
    // =========================================================================

    /*
     * METHOD: createPost
     * Creates a new article in the database.
     * 
     * @param slug - We intentionally use the 'slug' as the unique Document ID.
     * This makes our URLs clean (e.g., website.com/post/my-first-blog) instead of random characters.
     */
    // Make sure the parameter matches what PostForm is sending
    async createPost({title, slug, content, featuredImage, status, userid}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userid, // This MUST match the Appwrite Database attribute name perfectly
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }

    /*
     * METHOD: updatePost
     * Updates an existing article.
     * 
     * @param slug - Passed as the first separate parameter because Appwrite needs it 
     * to identify exactly WHICH document to update in the database.
     * Note: We don't pass or update `userId` because the author of a post shouldn't change.
     */
    async updatePost(slug, {title, content, featuredImage, status}) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, // Identifies the document
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);
        }
    }

    /*
     * METHOD: deletePost
     * Removes an article from the database based on its slug.
     * Returns true if successful, false if it fails, making it easy for the frontend to show a success message.
     */
    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false;
        }
    }

    /*
     * METHOD: getPost
     * Fetches a single specific post (useful when a user clicks on an article to read it).
     */
    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite serive :: getPost :: error", error);
            return false;
        }
    }

    /*
     * METHOD: getPosts (Custom Querying)
     * Fetches multiple posts for the homepage.
     * 
     * NOTE: We only want to show 'active' posts. 
     * We pass a default parameter using Appwrite's Query class: [Query.equal("status", "active")].
     * This ONLY works because we created an Index for the 'status' column in the Appwrite Console (Lecture 18).
     */
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                // Additional pagination queries could go here: [Query.limit(10), Query.offset(0)] how much result we want to fetch and from which offset. For now, we just want all active posts, so we don't need to pass any additional queries.
            )
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false;
        }
    }

    // =========================================================================
    // STORAGE SERVICES (FILE UPLOAD/DELETE)
    // =========================================================================

    /*
     * METHOD: uploadFile
     * Uploads the physical image file to the Appwrite Storage Bucket.
     * 
     * @param file - This is NOT a string or filename. This is the actual physical Blob/File object selected by the user.
     * We generate a random ID.unique() for the file, which gets stored in the database's `featuredImage` column.
     */
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
                [Permission.read(Role.any())]
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false;
        }
    }

    /*
     * METHOD: deleteFile
     * Removes an image from the storage bucket to save space when a post is deleted or an image is updated.
     */
    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false;
        }
    }

    /*
     * METHOD: getFilePreview
     * Returns a viewable URL for the image so it can be placed in an <img src="..." /> tag.
     * 
     * NOTE: Notice this is NOT an async function and has no await!
     * Appwrite's preview generation is incredibly fast and directly returns a string resource URL, 
     * so it doesn't need to resolve a Promise.
     */
    // TUTOR IMPORTANT NOTE: We wrap both IDs in String() to guarantee Appwrite
    // can construct the URL correctly, preventing broken image links!
    getFilePreview(fileId) {
        return this.bucket.getFileView(
            conf.appwriteBucketId,
            fileId
        );
    }
}

/*
 * NOTE: THE SINGLETON PATTERN
 * We instantiate `new Service()` here and export the object.
 * This saves us from writing `const myService = new Service()` inside every single React component.
 * Everyone shares the same database and storage client connection.
 */
const service = new Service();
export default service;