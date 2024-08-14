import Layout from "../../Dcomponents/Layout";
import From from "../../Allinput/From";
import TextInput from "../../Allinput/TextInput";
import Buttons from "../../Allinput/Button";
import Textarea from "../../Allinput/Textarea";
import { useState, useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";

import axios from "axios";
import swal from "sweetalert";

export default function PostCreate() {
    const navigate = useNavigate()
    const [post, setPost] = useState({
        'title': '',
        'description': '',
        'image': null, // Changed to null for file
        'error_list': []
    });

    const handleChange = (e) => {
        if (e.target.name === 'image') {
            setPost({
                ...post,
                [e.target.name]: e.target.files[0] // Handling file input
            });
        } else {
            setPost({
                ...post,
                [e.target.name]: e.target.value
            });
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('auth_token');
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
    }, []);

    const submitPost = (e) => {
        e.preventDefault();

        // Creating FormData
        const formData = new FormData();
        formData.append('title', post.title);
        formData.append('description', post.description);
        formData.append('image', post.image);

        const authToken = localStorage.getItem('auth_token');

        axios.get(`http://localhost:8000/sanctum/csrf-cookie`).then((response) => {
            axios.post(`http://localhost:8000/api/posts`, formData, {
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                    'Content-Type': 'multipart/form-data'
                }
            }).then((res) => {
               console.log(res.data.message);
                if (res.data.status === true) {
                    swal('Success', res.data.message, 'success');
                    navigate("/post");
                }
            }).catch((error) => {
               console.log(error);
            });
        });
    };

    return (
        <>
            <Layout>
                <From style={{ width: '100%', padding: '100px' }} onSubmit={submitPost}>
                    <h2 className="text-center bg-white">Create Post</h2>
                    <TextInput
                        Label="Title"
                        OnChange={handleChange}
                        name="title"
                        Value={post.title}
                        type="text"
                        placeholder="Enter Title"
                    />
                    <Textarea
                        Label="Description"
                        OnChange={handleChange}
                        Value={post.description}
                        name="description"
                        type="text"
                        placeholder="Enter Description"
                    />
                    <TextInput
                        Label="Post Image"
                        OnChange={handleChange}
                        name="image"
                        type="file"
                    />
                    <Buttons
                        Text="Create Post"
                        ClassName="btn-primary "
                    />
                </From>
            </Layout>
        </>
    );
}
