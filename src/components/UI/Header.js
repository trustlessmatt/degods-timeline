import twitter from "../Assets/twitter.png";
import discord from "../Assets/discord.png";
import magiceden from "../Assets/magiceden.png";

const Header = () => {
  return (
    // outer header container
    <div className="sticky top-0 z-50 shadow-lg bg-degods-purp flex p-4">
      {/* header left - social icons */}
      <div className="flex items-center p-1">
        {/* twitter */}
        <div className="rounded-lg mx-2">
          <a href="http://www.twitter.com/degodsnft">
            <img src={twitter} width={50}></img>
          </a>
        </div>
        {/* discord */}
        <div className="rounded-lg mx-2">
          <a href="http://www.discord.gg/degods">
            <img src={discord} width={50}></img>
          </a>
        </div>
        {/* magic eden */}
        <div className="rounded-lg mx-2 p-3">
          <a href="http://www.magiceden.io/marketplace/degods">
            <img src={magiceden} width={45}></img>
          </a>
        </div>
      </div>

      {/* header right: will be a Connect to Wallet button
      <div className="items-center p-1 justify-end hover:cursor-not-allowed">
          <div className="rounded-lg bg-white p-3">Connect Wallet</div>
      </div> */}
    </div>
  );
};

export default Header;
