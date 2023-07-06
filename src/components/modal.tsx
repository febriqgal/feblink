"use client";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import Share from "../../public/share.svg";
import Image from "next/image";
import { useState } from "react";
import SnippetC from "./snippet";

export default function ModalC() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = useState("opaque");

  const handleOpen = () => {
    setBackdrop(backdrop);
    onOpen();
  };

  return (
    <>
      <Modal backdrop={"blur"} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="text-black">Share Link</ModalHeader>
              <ModalBody>
                <SnippetC
                  className="text-[#0A4D68]"
                  link="https://link.febriqgalpurnama.com/"
                />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
      <Tooltip placement="right" content="Share" className="text-[#0A4D68]">
        <Image
          onClick={() => handleOpen()}
          className="mx-auto hover:cursor-pointer"
          src={Share}
          alt="#"
        />
      </Tooltip>
    </>
  );
}
