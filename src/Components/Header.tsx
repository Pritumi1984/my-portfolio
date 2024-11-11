import { IconHexagonLetterP } from '@tabler/icons-react';
import SideBar from './SideBar';

const Header = () => {
    return (
        <nav className="flex justify-between items-center px-10 dm-mono-regular h-[15vh] bg-bgColor">
            <IconHexagonLetterP size="60" color="#64FFDA" stroke="1.25"/>
            <div className="md:flex gap-4 md-mx:hidden">
                <a className="text-textColor hover:text-primaryColor" href="#about">About</a>
                <a className="text-textColor hover:text-primaryColor" href="#experience">Experience</a>
                <a className="text-textColor hover:text-primaryColor" href="#projects">Projects</a>
                <a className="text-textColor hover:text-primaryColor" href="#contact">Contact</a>
            </div>
            <SideBar/>
        </nav>
    );
}
export default Header;