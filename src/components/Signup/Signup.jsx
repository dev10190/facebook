import React, { useContext, useRef, useState } from "react";
import styles from "./Signup.module.css";
import { LuUser2 } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { FaSquarespace } from "react-icons/fa6";
import facebook from "../../assets/facebook.png";
import facebook_icon from "../../assets/facebook_icon.png";
import finish from "../../assets/user3.jpg";
import { FaArrowLeft } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { PostList } from "../../store/facebook-store";

const Signup = () => {
  const [selected, setSelected] = useState("User");
  const [signin, setSignin] = useState("true");
  const { addPost, loginUser, addPersonalDetail, userLogin, setUserLogin } = useContext(PostList);
  const userElement = useRef();
  const passwordElement = useRef();
  const RepasswordElement = useRef();
  const nameElement = useRef()
  const lastNameElemnt = useRef()
  const genderElement = useRef()
  const WhatsAppElement = useRef()
  const emailElement = useRef();
  const dayElement = useRef()
  const monthElement = useRef()
  const yearElement = useRef()

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const years = Array.from(
    { length: 100 },
    (_, i) => new Date().getFullYear() - i
  );


  const handleSubmitSignUp = (event) => {
    event.preventDefault();
    const user = userElement.current.value;
    const password = passwordElement.current.value;
    const rePassword = RepasswordElement.current.value;
    userElement.current.value = "";
    passwordElement.current.value = "";
    if (
      signin === "false" &&
      user !== "" &&
      password !== "" &&
      rePassword !== "" &&
      password === rePassword
    ) {
      setUserLogin(user)
      addPost(user, password);
      setSelected("Friends");
    } else{
      alert("All Fields are required")
    }
  };

  const handleSignIn = () => {
    userElement.current.value = "";
    passwordElement.current.value = "";
    userElement.current.focus();
    setSignin("false");
  };

  const handlePersonalDetails = (event) => {
    event.preventDefault();
    console.log("clicked personal details")
    const name = nameElement.current.value;
    const last = lastNameElemnt.current.value;
    const day = dayElement.current.value;
    const month = monthElement.current.value;
    const year = yearElement.current.value;
    const DOB = `${day} - ${month} - ${year}`
    const Whatsapp = WhatsAppElement.current.value;
    const email = emailElement.current.value;
    const userpersonal = userLogin;
    if(name !== "", last !== "", DOB !== "", Whatsapp !=="", email !== "" ){

      addPersonalDetail(name, last, DOB, Whatsapp, email, userpersonal )
      setSelected("Finish");
    }else{
      alert("All fields are requird")
    }
  }

  const handleSubmitSignIn = () => {
    const user = userElement.current.value;
    const password = passwordElement.current.value;
    loginUser(user, password)
  }

  return (
    <div className={styles.main}>
      <div className={styles.signup}>
        <div className={styles.left}>
          <div>
            <img src={facebook} className={styles.facebooklogo} alt="" />
            <div className={styles.options}>
              <div
                // onClick={() => setSelected("User")}
                className={`${styles.option} ${
                  selected !== "User" ? "activeSelect" : "option"
                } `}
              >
                <div className={styles.logo}>
                  <LuUser2 />
                </div>
                <div className={styles.select}>
                  <p className={styles.para}>
                    {" "}
                    {signin === "true"
                      ? "Welcome, Sign In to Continue"
                      : "Your details"}
                  </p>
                  <p>
                    {signin === "true"
                      ? `It's quick and easy `
                      : "Provide an email and password"}
                  </p>
                </div>
              </div>
              {signin === "false" && (
                <div
                  // onClick={() => setSelected("Verify")}
                  className={`${styles.option} ${
                    selected !== "Verify" ? "activeSelect" : "option"
                  } `}
                >
                  <div className={styles.logo}>
                    <MdOutlineMail />
                  </div>
                  <div className={styles.select}>
                    <p className={styles.para}>Verify Your Email</p>
                    <p>Enter your verification code</p>
                  </div>
                </div>
              )}
              {signin === "false" && (
                <div
                  // onClick={() => setSelected("Friends")}
                  className={`${styles.option} ${
                    selected !== "Friends" ? "activeSelect" : "option"
                  } `}
                >
                  <div className={styles.logo}>
                    <MdGroups />
                  </div>
                  <div className={styles.select}>
                    <p className={styles.para}>Invite your friends</p>
                    <p>Start collibrating with your friends</p>
                  </div>
                </div>
              )}
              {signin === "false" && (
                <div
                  // onClick={() => setSelected("Finish")}
                  className={`${styles.option} ${
                    selected !== "Finish" ? "activeSelect" : "option"
                  } `}
                >
                  <div className={styles.logo}>
                    <FaSquarespace />
                  </div>
                  <div className={styles.select}>
                    <p className={styles.para}>Welcome to facebook</p>
                    <p>Get up and enjoy your posts</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          {signin === "false" && (
            <div className={styles.leftBottom}>
              <div>
                {" "}
                <FaArrowLeft />
                <p>Back to home</p>
              </div>
              <p onClick={() => setSignin("true")}>Sign In</p>
            </div>
          )}
          {signin === "true" && (
            <div className={styles.leftBottom}>
              <p>
                Don't have an account ?{" "}
                <span onClick={handleSignIn}>Create a account </span> It takes
                less than a minute
              </p>
            </div>
          )}
        </div>

        {/* ---------------------------------right side---------------------- */}

        <div className={styles.right}>
          {signin === "true" && (
            <div className={` ${styles.create} `}>
              <form onSubmit={handleSubmitSignIn}>
                <div className={styles.input}>
                  <input
                    ref={userElement}
                    type="text"
                    placeholder="Mobile Number or Email Address"
                  />
                </div>
                <div className={styles.input}>
                  <input
                    ref={passwordElement}
                    type="password"
                    placeholder="password"
                  />
                </div>
                <button>Sign In</button>
              </form>
            </div>
          )}

          {signin === "false" && (
            <div>
              {selected === "User" && (
                <div className={` ${styles.create} `}>
                  <div className={styles.create2}>
                    <img
                      src={facebook_icon}
                      className={styles.createImage}
                      alt=""
                    />

                    <div className={styles.first}>
                      <h3>Create a free account</h3>
                      <p className={styles.provide}>
                        Provide your email and choose a password
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmitSignUp}>
                    <div className={styles.input}>
                      <input
                        ref={userElement}
                        type="text"
                        placeholder="username"
                      />
                    </div>
                    <div className={styles.input}>
                      <input
                        ref={passwordElement}
                        type="password"
                        placeholder="password"
                      />
                    </div>

                    <div className={styles.input}>
                      <input
                        ref={RepasswordElement}
                        type="password"
                        placeholder="Re-Enter Your Password"
                      />
                    </div>

                    <div>
                      <p className={styles.or}>or</p>
                      <div className={styles.btn}>
                        {" "}
                        <FcGoogle />
                        <p>Sign up with Google</p>
                      </div>
                      <div className={styles.btn}>
                        <FaApple />
                        <p>Sign up with Apple Id</p>
                      </div>
                    </div>

                    <button>Contiune</button>
                  </form>
                </div>
              )}

              {selected === "Verify" && (
                <div className={styles.create}>
                  <img
                    src={facebook_icon}
                    className={styles.createImage}
                    alt=""
                  />
                  <div className={styles.first}>
                    <h3>Verify your email</h3>
                    <p className={styles.provide}>
                      we send a code to your email
                    </p>
                  </div>
                  <form>
                    <div className={`${styles.verify}`}>
                      <input type="text" maxLength={1} />
                      <input type="text" maxLength={1} />
                      <input type="text" maxLength={1} />
                      <input type="text" maxLength={1} />
                    </div>
                    <p className={styles.or}>
                      Don't get a code? click to resend
                    </p>
                    <button>Contiune</button>
                  </form>
                </div>
              )}
              {selected === "Friends" && (
                
                <div className={styles.create}>
                  <img
                    src={facebook_icon}
                    className={styles.createImage}
                    alt=""
                  />
                  <div className={styles.first}>
                    <h3>Personal Information</h3>
                    <p className={styles.provide}>
                    Please Add Your Personal Details   <b> {userLogin}</b>
                    </p>
                  </div>
                  <form onSubmit={handlePersonalDetails}>
                    <div className={styles.input}>
                      <input
                      ref={nameElement}
                        type="text"
                        className={styles.friendinput}
                        placeholder="First Name"
                      />
                      <input
                      ref={lastNameElemnt}
                        type="text"
                        className={styles.friendinput}
                        placeholder="Last Name"
                      />
                      <div className={styles.date}>
                        <select
                          className={styles.dateselect}
                          ref={dayElement}
                        >
                          <option value="">Day</option>
                          {days.map((day) => (
                            <option key={day} value={day}>
                              {day}
                            </option>
                          ))}
                        </select>

                        <select
                          className={styles.dateselect}
                         ref={monthElement}
                        >
                          <option value="">Month</option>
                          {months.map((month, index) => (
                            <option key={index} value={index + 1}>
                              {month}
                            </option>
                          ))}
                        </select>

                        <select
                          className={styles.dateselect}
                         ref={yearElement}
                        >
                          <option value="">Year</option>
                          {years.map((year) => (
                            <option key={year} value={year}>
                              {year}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className={styles.date}>
                        <select
                        ref={genderElement}
                          className={styles.dateselect}
                        >
                          <option value="">--Select--</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <input
                      ref={WhatsAppElement}
                        type="text"
                        maxLength={10}
                        className={styles.friendinput}
                        placeholder="WhatsApp Number"
                      />
                      <input
                      ref={emailElement}
                        type="text"
                        className={styles.friendinput}
                        placeholder="Email"
                      />
                    </div>
                    <button>Contiune</button>
                  </form>
                </div>
                
              )}
              {selected === "Finish" && (
                <div className={styles.create}>
                  <img
                    src={facebook_icon}
                    className={styles.createImage}
                    alt=""
                  />
                  <div className={styles.first}>
                    <h3>Welcome</h3>
                    <p className={styles.provide}>
                      Almost Finish ...upload Image
                    </p>
                  </div>
                  <form>
                    <div className={styles.finish}>
                      <img src={finish} className={styles.finishphoto} alt="" />
                    </div>
                    <button onClick={() => setSignin("true")}>Finish Up</button>
                  </form>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
