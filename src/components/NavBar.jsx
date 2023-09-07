import { UserAuth } from "../context/AuthContext";

const NavBar = () => {
  const { currentUser, logout } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="navbar fixed z-10 bg-neutral text-neutral-content">
      <div className="containerWrap flex justify-between">
        <p className=" normal-case text-xl text-yellow-400">instantChat</p>
        {currentUser ? (
          <button
            onClick={handleLogout}
            className="btn btn-neutral normal-case text-base hover:text-yellow-400 "
          >
            LogOut
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default NavBar;
