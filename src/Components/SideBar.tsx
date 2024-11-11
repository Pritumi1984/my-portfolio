import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

const SideBar = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer className="" opened={opened} onClose={close} title="Authentication">
        {/* Drawer content */}
      </Drawer>

      <Button className="md:!hidden" onClick={open}>Open Drawer</Button>
    </>
  );
}

export default SideBar;