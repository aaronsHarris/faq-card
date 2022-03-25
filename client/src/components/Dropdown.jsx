import { StyledDropdown } from "../styles/Dropdown.styles";

const Dropdown = ({ question, answer, index, isOpen, setIsOpen }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    index === isOpen ? setIsOpen(null) : setIsOpen(index);
  };
  return (
    <StyledDropdown open={index === isOpen} onClick={handleClick}>
      <p className="question">{question}</p>
      <p className="answer">{answer}</p>
    </StyledDropdown>
  );
};

export default Dropdown;
