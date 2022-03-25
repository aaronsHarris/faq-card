import { StyledDropdown } from "../styles/Dropdown.styles";

const Dropdown = ({ question, answer, idx, isOpen, setIsOpen }) => {

  return (
    <StyledDropdown>
      <p className="question">{question}</p>
      <p className="answer">{answer}</p>
    </StyledDropdown>
  );
};

export default Dropdown;
