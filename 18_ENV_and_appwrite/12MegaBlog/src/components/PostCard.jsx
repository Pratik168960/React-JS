import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

// NOTE: This component receives props directly from the Appwrite database query
// We destructure $id (Appwrite's specific syntax for document ID), title, and featuredImage.
function PostCard({$id, title, featuredImage}) {
    
  return (
    // We wrap the entire card in a Link so clicking anywhere on the card navigates to the specific post
    // The URL structure will be `/post/unique-document-id`.
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                {/* 
                    NOTE: `featuredImage` only contains the ID of the file
                    We must pass that ID into our custom `getFilePreview` service method 
                    to generate the actual viewable URL string for the <img> src attribute
                */}
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl' />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard