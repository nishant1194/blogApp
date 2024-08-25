import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import "../ViewBlog/ViewBlog.css";
import { IdContext } from "../../context/idContext";
import Footer from "../footer/Footer";
import Loading from "../../helpers/Loadar/Loading";

function ViewBlog() {
  const convertToDaysAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();

    // Calculate the difference in milliseconds
    const diffInMs = now - date;

    // Convert milliseconds to days
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const diffInHours = Math.floor((diffInMs / (1000 * 60 * 60)) % 24);
    const diffInMins = Math.floor((diffInMs / (1000 * 60)) % 60);
    const diffInSecs = Math.floor((diffInMs / 1000) % 60);
    const diffInYears = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 365.25));

    if (diffInMins == 0) return `${diffInSecs} secs ago`;

    if (diffInHours == 0) return `${diffInMins} mins ago`;

    if (diffInDays == 0) return `${diffInHours} hour ago`;
    // Return the formatted string
    if (diffInYears == 0) return `${diffInDays} days ago`;

    return `${diffInYears} years ago`;
  };
  const { id } = useParams();
  const [senId, setsenId] = useState(id);

  const navigate = useNavigate();
  const [blogDetails, setBlogDetails] = useState([]);
  const [comments, setComments] = useState([]);
  const [showcomments, setshowComments] = useState(false);
  const [commentText, setcommentText] = useState("");
  const [loadingcomment, setLodingcomment] = useState(true);
  const [addtracker, setaddtracker] = useState(true);

  const token = localStorage.getItem("token");
  const fullName = localStorage.getItem("fullName");
  const email = localStorage.getItem("email");

  const [desc, setDesc] = useState();
  const getBlogs = (idd) => {
    axios
      .get(`http://localhost:8000/blog/${idd}`)
      .then((res) => {
        setBlogDetails(res.data);
        setDesc(blogDetails.blog[0].description);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getComments = (idd) => {
    axios
      .get(`http://localhost:8000/comment/${idd}`)
      .then((res) => {
        setComments(res.data.comments);

        console.log(comments);
        setLodingcomment(false);
      })
      .catch((err) => {
        console.log(err);
      });
    setshowComments(!showcomments);
  };

  const addComments = (idd) => {
    if(token == null){
      alert("Login to add comment");
      return ;
    }
    axios
      .post("http://localhost:8000/comment", {
        commentText: commentText,
        email: email,
        userName: fullName,
        autherName: blogDetails.blog[0].upLoaderName,
        blogId: idd,
      })
      .then((resp) => {
        setcommentText("");
        alert("Comment added ");
        setshowComments(!showcomments);

        setaddtracker(!addtracker);
      });
  };

  useEffect(() => {
    getBlogs(senId);
  }, [blogDetails]);

  useEffect(() => {
    getComments(senId);
  }, [addtracker]);

  return (
    <div>
      <Navbar />
      <div className="containerrrrr">
        {desc != null && (
          <div className="textAarea">
            <div className="headDetails">
              <div
                className="detailTitle"
                dangerouslySetInnerHTML={{ __html: blogDetails.blog[0].tittle }}
              />

              <div className="autherrr">
                Uploaded by:- {blogDetails.blog[0].upLoaderName} .{" "}
                {convertToDaysAgo(blogDetails.blog[0].createdAt)}
              </div>
            </div>

            <img
              src="http://localhost:3000/static/media/Nishant.9dcb755d866c80b0ca86.JPG"
              alt=""
              style={{ height: "400px", width: "100%" }}
            />
            <div
              className="contenttdetail"
              dangerouslySetInnerHTML={{
                __html: blogDetails.blog[0].description,
              }}
            />
            <button
              className="seecoments"
              onClick={() => {
                getComments(senId);
              }}
            >
              Comments
            </button>

            <div className="commentsection">
              <div className="addComment">
                <input
                  type="text"
                  className="writeComment"
                  placeholder="Add comment"
                  value={commentText}
                  onChange={(e) => {
                    setcommentText(e.target.value);
                  }}
                />
                <button
                  className="addinng"
                  onClick={() => {
                    addComments(senId);
                  }}
                >
                  Add
                </button>
              </div>
              {!showcomments ? (
                <div className="showComments">
                  {loadingcomment ? (
                    <Loading />
                  ) : (
                    <div>
                      {" "}
                      {comments[0] &&
                        comments
                          .slice()
                          .reverse()
                          .map((data) => {
                            return (
                              <div className="comment1">
                                <div className="userNName">
                                  {data.userName} &nbsp;{" "}
                                  <span className="time">2 years ago</span>
                                </div>
                                <div className="commentTextx">
                                  {data.commentText}{" "}
                                </div>
                                <div className="linees"></div>
                              </div>
                            );
                          })}
                    </div>
                  )}
                </div>
              ) : (
                <div />
              )}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default ViewBlog;
