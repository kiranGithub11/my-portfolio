import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const handleIconClick = (url) => {
    window.open(url, "_blank", "noopener noreferrer");
  };

  return (
    <nav className="mb-5 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin onClick={() => handleIconClick("https://www.linkedin.com/in/kiran-naragam/")} />
        <FaGithub onClick={() => handleIconClick("https://github.com/kiranGithub11")} />
        <FaInstagram onClick={() => handleIconClick("https://www.instagram.com/kiran__7__/")} />
        <FaSquareXTwitter onClick={() => handleIconClick("https://x.com/KiraNrgm")} />
      </div>
    </nav>
  );
};

export default Navbar;


// import logo from "../assets/kevinRushLogo.png";
// import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa";

// const Navbar = () => {
//   return (
//     <nav className="mb-5 flex items-center justify-between py-6">
//       <div className="flex flex-shrink-0 items-center">
//         <img className="mx-2 w-10" src={logo} alt="logo" />
//       </div>
//       <div className="m-8 flex items-center justify-center gap-4 text-2xl">
//         <FaLinkedin />
//         <FaGithub />
//         <FaInstagram />
//         <FaSquareXTwitter />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
