import { ADD_POST } from "./actions";

const POSTS = [
    {
        author: "Joseph",
        avatar: "https://clip13.files.wordpress.com/2015/09/stallone-judge-dredd.jpg",
        nickname: "JUDGE DREDD",
        date: "17.12.2021",
        content: "Bad parking: SENTENCE LIQUIDATION!",
        photo: "https://www.taylorring.com/wp-content/uploads/2017/10/Car-Fires-Reading-the-Smoke-Signals-.jpg",
        countLikes: 17,
        countComments: 1,
        countReposts: 21,
    },
    {
        author: "Robot",
        avatar: "https://2.bp.blogspot.com/-3FIUEg5iva8/T7UlTKuqiUI/AAAAAAAABsk/IUL2pJEVFYw/s1600/kinogoon.blogspot.com-00014.png",
        nickname: "A.B.C. Robot",
        date: "17.12.2021",
        content: "You pay for it, DREDD",
        photo: "https://i.ytimg.com/vi/WwkwoWpvSzU/maxresdefault.jpg",
        countLikes: 2,
        countComments: 1,
        countReposts: 13,
    },
    {
        author: "Arnold",
        avatar: "https://static.okko.tv/images/v2/14051240",
        nickname: "TERMINATOR",
        date: "17.12.2021",
        content: "did you see this robot?",
        photo: "https://i.inews.co.uk/content/uploads/2018/10/doston-dynamics.jpg",
        countLikes: 4,
        countComments: 5,
        countReposts: 1,
    },
];

const initialState = {
    posts: POSTS,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                posts: [action.payload, ...state.posts ]
            }
        default:
            return state;
    }
};