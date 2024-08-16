import React from "react";
import styles from "./Main.module.css";
import { leftLine } from "../../assets/left";
import photo from "../../assets/man.png";
import one from "../../assets/1.png";
import two from "../../assets/2.png";
import three from "../../assets/3.png";
import mainPhoto from "../../assets/first.jpg";
import { AiTwotoneLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { PiShareFatFill } from "react-icons/pi";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { FaShare } from "react-icons/fa6";
import status1 from "../../assets/status1.jpg";
import status2 from "../../assets/status2.jpg";
import status3 from "../../assets/status3.png";
import status4 from "../../assets/status4.jpg";
import status5 from "../../assets/status5.jpg";
import present from "../../assets/present.png";
import { IoCloseSharp } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import Posts from "../Posts/Posts";
import { user } from "../../assets/user";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.mainTop}>
        <div className={styles.left}>
          {leftLine.map((items) => (
            <div className={styles.leftInside}>
              <div className={styles.leftImg}>
                <img src={items.icon} alt="" />
              </div>
              <p>{items.name}</p>
            </div>
          ))}
        </div>

        <div className={styles.middle}>
          <div className={styles.middleInside}>
            <div className={styles.middleFirst}>
              <div className={styles.firstInside}>
                <div className={styles.statusPhoto}>
                  <img src={status1} alt="" />
                  <div className={styles.name}>
                    <p>Anish </p>
                  </div>
                  <div className={styles.little}>
                    <img src={status5} className={styles.littleimg} />
                  </div>
                </div>
                <div className={styles.statusPhoto}>
                  <img src={status2} alt="" />
                </div>
                <div className={styles.statusPhoto}>
                  <img src={status3} alt="" />
                </div>
                <div className={styles.statusPhoto}>
                  <img src={status4} alt="" />
                </div>
                <div className={styles.statusPhoto}>
                  <img src={status5} alt="" />
                </div>
              </div>
            </div>

            <div className={styles.middleSecond}>
              <div className={styles.secondTop}>
                <img src={photo} alt="" />
                <input
                  type="text"
                  placeholder="What's on your mind, Devendra"
                />
              </div>
              <hr />
              <div className={styles.secondBottom}>
                <div>
                  <img src={one} alt="" />
                  <p>Live video</p>
                </div>
                <div>
                  <img src={two} alt="" />
                  <p>Photo/video</p>
                </div>
                <div>
                  <img src={three} alt="" />
                  <p>Feeling/activity</p>
                </div>
              </div>
            </div>

            {/* <div className={styles.middleThird}>
              <div className={styles.profile}>
                <img src={photo} alt="" />
                <div className={styles.profilename}>
                  <p>
                    <span>Srejesh P R</span> is at <span>Satde de France</span>
                  </p>
                  <p>10 hours ago</p>
                </div>
                <div className={styles.cross}>
                  <BsThreeDots />
                  <IoCloseSharp />
                </div>
              </div>
              <div className={styles.desc}>
                <p>A great way to sign -ogg...JaiHind</p>
              </div>
              <div className={styles.mainPhoto}>
                <img src={mainPhoto} alt="" />
              </div>
              <div className={styles.bottom}>
                <div className={styles.like}>
                  <div className={styles.first}>
                    <FaRegThumbsUp />
                    <p>31k</p>
                  </div>
                  <div className={styles.second}>
                    <div>
                      <FaComment />
                      <p>451</p>
                    </div>
                    <div>
                      <FaShare />

                      <p>572</p>
                    </div>
                  </div>
                </div>
                <hr />
                <div className={styles.comment}>
                  <div>
                    <AiTwotoneLike />
                    <p>Like</p>
                  </div>
                  <div>
                    <FaRegCommentDots />
                    <p>Comment</p>
                  </div>
                  <div>
                    <FaWhatsapp />
                    <p>Send</p>
                  </div>
                  <div>
                    <PiShareFatFill />
                    <p>Share</p>
                  </div>
                </div>
              </div>
            </div> */}

            {user.map((users) => <Posts name={users.name} desc={users.desc} main={users.main} profile={users.profile} time={users.time} /> )}
            
            
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.rightInside}>
            <div className={styles.birthday}>
              <h3>Birthday</h3>
              <div>
                <img src={present} alt="" />
                <p>
                  <span>Himashu Kurva</span> and <span> 3 others</span> have
                  their birthdays today.
                </p>
              </div>
              <hr />
            </div>
            <div className={styles.contacts}>
              <div className={styles.contacttop}>
                <p>Contact</p>
              </div>
              <div className={styles.contactbottom}>
                <img src={photo} alt="" />
                <p>Rajeev Gwalior Wale</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
