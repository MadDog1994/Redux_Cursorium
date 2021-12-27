import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/actions';
import "./CreatePost.css";

const AUTHORS = [
    {
        author: "Joseph",
        avatar: "https://clip13.files.wordpress.com/2015/09/stallone-judge-dredd.jpg",
        nickname: "JUDGE DREDD",
    },

    {
        author: "Robot",
        avatar: "https://2.bp.blogspot.com/-3FIUEg5iva8/T7UlTKuqiUI/AAAAAAAABsk/IUL2pJEVFYw/s1600/kinogoon.blogspot.com-00014.png",
        nickname: "A.B.C. Robot",
    },

    {
        author: "Arnold",
        avatar: "https://static.okko.tv/images/v2/14051240",
        nickname: "TERMINATOR",
    }
]

export default function CreatePost() {
    const [author, setAuthor] = useState("Joseph");
    const [content, setContent] = useState("");
    const [photo, setPhoto] = useState("");


    const currentDate = () => {
        let date = new Date();
        let dd = String(date.getDate()).padStart(2, '0');
        let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = date.getFullYear();
        date = dd + '.' + mm + '.' + yyyy;
        return date;
    }

    const dispatch = useDispatch();

    const onCreatePost = (event) => {
        event.preventDefault();
        const date = currentDate();
        const countLikes = 0, countComments = 0, countReposts = 0;
        const selectedAuthor = AUTHORS.find((item) => item.author === author);
        dispatch(addPost({
            author: selectedAuthor.author,
            avatar: selectedAuthor.avatar,
            nickname: selectedAuthor.nickname,
            date, content, photo, countLikes, countComments, countReposts
        }));
        setAuthor("Joseph");
        setContent("");
        setPhoto("");
    };

    return (
        <form className="create-post-form" onSubmit={onCreatePost}>
            <select className="create-post-select" onChange={(e) => setAuthor(e.target.value)}>
                {AUTHORS.map((item, index) => (
                    <option value={item.author} key={index}>{item.author}</option>
                ))}
            </select>

            <input
                className="create-post-input"
                type="text"
                placeholder="write a message"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />

            <input
                className="create-post-input"
                type="text"
                placeholder="url/photo"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
            />

            <button
                className="create-post-button"
                type="submit"
                onClick={onCreatePost}>
                Create
            </button>
        </form>
    );
}