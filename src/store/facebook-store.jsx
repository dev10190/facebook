import { createContext, useReducer, useState } from "react";
import { GiConsoleController } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addPersonalDetail: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "ADD_USER") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, disptachPostList] = useReducer(postListReducer, []);

  const [navbarSelected, setNavbarSelected] = useState("Home");

  const [userLogin, setUserLogin] = useState("");

  console.log(postList);

  const [beforeLogin, setBeforeLogin] = useState([]);
  // console.log(beforeLogin)

  const navigate = useNavigate();

  const addPost = (user, password) => {
    setBeforeLogin((currPost) => [...currPost, { user, password }]);
  };

  const addPersonalDetail = (
    name,
    last,
    DOB,
    Whatsapp,
    email,
    userpersonal
  ) => {
    const newpost = beforeLogin.filter((items) => items.user === userpersonal);
    const [{ user }] = newpost;
    const [{ password }] = newpost;
    disptachPostList({
      type: "ADD_USER",
      payload: {
        user,
        password,
        name,
        last,
        DOB,
        Whatsapp,
        email,
      },
    });
  };

  const addPersonalDetail1 = (
    name,
    last,
    DOB,
    Whatsapp,
    email,
    userpersonal
  ) => {
    // const newpost = postList.filter((items) => items.user === userpersonal);
    // console.log(newpost)
    // const [{user}] = newpost
    // console.log(user)
  };

  const loginUser = (user, password) => {
    postList.map((loginUser) => {
      if (loginUser.user === user && loginUser.password === password) {
        console.log("correct");
        navigate("/Main");
      } else {
        console.log("incorrect");
      }
    });
  };

  return (
    <PostList.Provider
      value={{
        addPost,
        postList,
        loginUser,
        setNavbarSelected,
        navbarSelected,
        addPersonalDetail,
        userLogin,
        setUserLogin,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
