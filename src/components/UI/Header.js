import logo from "../Assets/degods.png";
import twitter from "../Assets/twitter.png";

const Header = () => {
  return (
    <div className="p-2">
      {/* header left */}
      <div className="flex items-center px-2">
        {/* twitter */}
        <a href="http://www.twitter.com/degodsnft" className="color">
          <img src={twitter} width={50}></img>
        </a>
        {/* discord */}
        {/* magic eden */}
      </div>

      {/* header center */}
      <div className="flex justify-center">
        <img src={logo} className="App-logo" alt="logo" />
      </div>

      {/* header right */}
    </div>
  );
};

export default Header;
