import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";

const SendMessage = () => {
  const [value, setValue] = useState("");
  const { currentUser } = UserAuth();

  const onInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmitMessage = async (e) => {
    e.preventDefault();

    if (value.trim() === "") {
      alert("Please enter some message!");
      return;
    }

    try {
      const { uid, displayName, photoURL } = currentUser;
      await addDoc(collection(db, "messages"), {
        text: value,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid,
      });
    } catch (error) {
      console.log(error);
    }
    console.log(value);
    setValue("");
  };

  return (
    <div className="bg-gray-200 fixed bottom-0 w-full py-10 shadow-lg">
      <form onSubmit={handleSubmitMessage} className="containerWrap flex px-2">
        <input
          value={value}
          onChange={onInputChange}
          className="input w-full focus:outline-none bg-gray-100 rounded-r-none"
          type="text"
        />
        <button
          className="w-auto bg-gray-500 text-white rounded-r-lg px-5 text-sm"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
