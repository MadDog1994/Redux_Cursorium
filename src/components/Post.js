import { FcLike } from 'react-icons/fc';
import { BiRepost } from 'react-icons/bi';
import { FcComments } from 'react-icons/fc';
import React, {useState} from "react";
import "./Post.css";

const Post = (props) => {

    console.log(props.countLikes)
    return (
        <div className="post-wrapper">
            <div className="post-div-wrapper">
                <img className="post-div-avatar" src={props.avatar} alt="" />
                <div className="post-div-span">
                    <div >
                        <span className="post-span-fontSize">{props.author}</span>
                        <span className="post-span-nickname"> {props.nickname} &middot; {props.date}</span>
                    </div>
                    <div>
                        <span>{props.content}</span>
                    </div>
                </div>
            </div>
            <img className="post-img-photo" src={props.photo} alt="" />
            <div className="post-icons-wrapper">
              <div className="post-icons"><FcLike /> {props.countLikes} </div>
               <span className="post-icons"><BiRepost /> {props.countReposts} </span>
               <span className="post-icons"><FcComments/> {props.countComments} </span>
            </div>
        </div>
    );
}

export default Post;