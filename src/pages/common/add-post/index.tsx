import React from "react";
import { useDispatch } from "react-redux";
import { StyledAddPostContainer, StyledButtonContainer } from "./styles";
import { Modal } from "../../../components/modal";
import { Button } from "../../../components/buttons";
import { Divider } from "../../../components/divider";
import { addPost } from "../../../ducks/profile/action";

export const AddPost = ({ showOptions, setShowOptions }: any) => {
  const dispatch = useDispatch();

  const AddPost = () => {
    const data = {
      userId: "0",
      postName: "Sample TItle",
      postDescription: "asdsad",
      postImage:
        "https://i.pinimg.com/564x/b1/e0/43/b1e0437309a36a5294709921dc0378f4.jpg",
    };
    dispatch(addPost(data));
    setShowOptions(false);
  };

  return (
    <Modal
      show={showOptions}
      onClose={() => setShowOptions(false)}
      width="half"
    >
      <StyledAddPostContainer>
        <h2>Create Post:</h2>
        <Divider />
        <input type="text" placeholder="Title post" className="titleInput" />
        <textarea
          className="descriptionInput"
          placeholder="Add something to post.."
        />
      </StyledAddPostContainer>
      <StyledButtonContainer>
        <Button theme="warning" onClick={() => setShowOptions(false)}>
          Cancel
        </Button>
        <Button theme="default" onClick={AddPost}>
          Add Post
        </Button>
      </StyledButtonContainer>
    </Modal>
  );
};
