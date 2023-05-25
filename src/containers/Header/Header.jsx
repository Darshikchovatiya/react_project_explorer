import Button from "../../components/Buttons/Button";
import Logo from "../../components/Logo/Logo";
import Navlist from "../../components/Navlist/Navlist";

function Header(){

    return(
        <header>
            <div className="container">
                <div className="row">
                    <Logo />
                    <Navlist />
                    <Button />
                </div>
            </div>
        </header>
    )
}

export default Header;