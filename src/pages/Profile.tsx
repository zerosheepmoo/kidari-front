import { useAtom } from "jotai";
import { userAtom } from "../jotais";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useAtom(userAtom);
  const navi = useNavigate();

  //redirect
  useEffect(() => {
    if (user) {
      console.log("user is in");
    } else {
      navi("/login");
    }
  }, []);

  return <></>;
};
export default Profile;
