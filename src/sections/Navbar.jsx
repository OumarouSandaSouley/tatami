import { Github } from "lucide-react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <header className="w-full flex items-center justify-between">
      <Link to="/" className="flex items-center gap-1">
        <img src={logo} alt="" className="w-10" />
        <h3 className="text-2xl font-kameron font-bold text-primary">Tatami</h3>
      </Link>
      <div className="flex items-center">
        <a href="https://github.com/OumarouSandaSouley/tatami.git" target="_blank">
          <Github className="w-16" strokeWidth={3} />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
