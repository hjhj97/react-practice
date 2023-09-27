import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

function Header() {
  const { authData, setAuthData } = useAuthContext();

  const onClickLogout = () => {
    setAuthData({});
  };

  return (
    <header style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ display: "flex", gap: "1rem" }}>
        {authData.name ? (
          <button onClick={onClickLogout}>Logout</button>
        ) : (
          <>
            <Link to="/">Signin</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
      {authData.name && <span>{authData.name}</span>}
    </header>
  );
}

export default Header;
