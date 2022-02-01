import twitter from "../Assets/twitter.png";
import discord from "../Assets/discord.png";
import magiceden from "../Assets/magiceden.png";

const Header = () => {
  return (
    // outer header container
    <div className="sticky top-0 z-50 shadow-lg bg-degods-purp items-center p-5">
      {/* header left */}
      <div className="flex items-center p-1">
        {/* twitter */}
        <div className="rounded-lg mx-2 hover:border-b-2 hover:border-white">
          <a href="http://www.twitter.com/degodsnft" className="">
            <img src={twitter} width={50}></img>
          </a>
        </div>
        {/* discord */}
        <div className="rounded-lg mx-2 hover:border-b-2 hover:border-white">
          <a href="http://www.discord.gg/degods" className="">
            <img src={discord} width={50}></img>
          </a>
        </div>
        {/* magic eden */}
        <div className="rounded-lg mx-2 p-3 hover:border-b-2 hover:border-white">
          <a href="http://www.magiceden.io/marketplace/degods" className="">
            <img src={magiceden} width={45}></img>
          </a>
        </div>
      </div>

      {/* header right */}
    </div>
  );
};

export default Header;
