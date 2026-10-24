import React, {useEffect, useState} from 'react'
import {Container, PostForm} from '../components'
import appwriteService from "../appwrite/config";
import { useParams, useNavigate } from 'react-router-dom';

function EditPost() {
    const [post, setPosts] = useState(null)
    // NOTE: Extract the dynamic variable 'slug' from the URL to fetch the exact post data.
    const {slug} = useParams()
    const navigate = useNavigate() 

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            // If there's no slug, redirect them to the home page
            navigate('/')
        }
    }, [slug, navigate])

  // Only render the form if the post data has successfully loaded from Appwrite
  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost