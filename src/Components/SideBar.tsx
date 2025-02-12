import { useDisclosure } from '@mantine/hooks';
import { Drawer, Burger } from '@mantine/core';
import { navLinks } from './Header';

const SideBar = () => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <>
      <Drawer.Root className="md:hidden !-z-10" position="right" size="50vw" opened={opened} onClose={toggle}>
        <Drawer.Overlay className="!-z-0" style={{ backgroundOpacity: 0.5, blur: 4 }} />
        <Drawer.Content className="!-z-0" bg="#0A192F">
          {/* <Drawer.Header bg="#0A192F">
            <Drawer.Title><IconHexagonLetterP size="48" color="#64FFDA" stroke="1.25"/></Drawer.Title>
            <Drawer.CloseButton className="hover:!bg-bgColor hover:!text-white" 
            icon= <IconX className="hover:text-primaryColor" size={30} stroke={2} />/>
          </Drawer.Header> */}
          <Drawer.Body className="mt-20 flex flex-col gap-5" bg="#0A192F">{navLinks(true)}</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      <Burger className="md:!hidden !z-10" size="lg" color="#64FFDA" opened={opened} onClick={toggle} />
    </>
  );
}

export default SideBar;