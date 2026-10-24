import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    
    // Fetch all active posts when the page loads
    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                // The query result is inside the 'documents' array
                setPosts(posts.documents)
            }
        })
    }, [])
    
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {/* NOTE: Loop over the fetched posts and render a PostCard for each one. We must pass a unique key ($id). */}
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts