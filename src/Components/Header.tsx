import { IconHexagonLetterP } from '@tabler/icons-react';

const Header = () => {
    return (
        <nav className="flex justify-between items-center px-10 dm-mono-regular h-[15vh] bg-bgColor">
            <IconHexagonLetterP size="60" color="#64FFDA" stroke="1.25"/>
            <div className="flex gap-4 ">
                <a className="text-textColor hover:text-primaryColor" href="#about">About</a>
                <a className="text-textColor hover:text-primaryColor" href="#experience">Experience</a>
                <a className="text-textColor hover:text-primaryColor" href="#projects">Projects</a>
                <a className="text-textColor hover:text-primaryColor" href="#contact">Contact</a>
            </div>
        </nav>
    );
}
export default Header;