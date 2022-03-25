import { useState } from "react";
import BrodDog from '../../Images/BROD-Dog.png'
import BrodLogo from '../../Images/brod-solutions-logo-outline.5fd4a71a.svg'
import { Container } from "../../styles/Accordion.styles";
import Dropdown from "../Dropdown";
import { faqs } from "./Data.js";



const Accordion = () => {
  const [isOpen, setIsOpen] = useState(1);
  const Dropdowns = faqs.map((faq, idx) => (
    <Dropdown
      question={faq.q}
      answer={faq.a}
      key={idx}
      idx={idx}
      openIdx={isOpen}
      setOpenIdx={setIsOpen}
    />
  ));

  return (
    <Container onClick={() => setIsOpen(null)}>
      <div className="image">
        <div className="mobile-image">
          <img
            src={BrodLogo}
            alt="Brod Solutions Logo"

          />
        </div>
        <div className="desktop-image">
          <div>
            <img
              src={BrodDog}
              className="brod-dog"
              alt="Woman looking at a screen"
            />
          </div>
        </div>
      </div>
      <div className="faq">
        <h1 className="title">FAQ</h1>
        {Dropdowns}
      </div>
    </Container>
  );
};

export default Accordion;
