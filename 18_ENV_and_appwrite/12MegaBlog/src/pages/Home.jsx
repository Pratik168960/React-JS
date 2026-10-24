import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'

function Home() {
    const [posts, setPosts] = useState([])
    const authStatus = useSelector((state) => state.auth.status)

    useEffect(() => {
        if (!authStatus) {
            return
        }

        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [authStatus])
  
    // Conditional rendering: If the array is empty (no posts or user not logged in)
    if (!authStatus || posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    // If there are posts available, render them
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} /> {/* Spread operator to pass all post properties as props to PostCard we can also use PostCard post = {post} */}
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home