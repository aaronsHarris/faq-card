import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 2rem;
  background-color: var(--white);
  box-shadow: 1rem 1.25rem 2.25rem 0.1rem var(--gray);

  .image-container {
    width: 240px;
    height: 12rem;
    position: relative;
  }

  .mobile-image {
    .brod-dog {
      position: absolute;
      top: -9rem;
      right: 0;
    }
  }

  .desktop-image {
    display: none;
  }

  .faq {
    width: 100%;
    padding-right: 2rem;
    padding-left: 2rem;

    .title {
      padding-bottom: 3rem;
      font-size: 2.5rem;
      letter-spacing: 0.1rem;
      color: var(--black);
      text-align: center;
    }
  }

  @media (min-width: 1000px) {
    width: 900px;
    height: 500px;
    flex-direction: row;
    align-items: start;

    .image-container {
      width: 50%;
      height: 100%;
    }

    .mobile-image {
      display: none;
    }

    .desktop-image {
      display: block;
      position: relative;
      display: flex;
      align-items: center;
    }

    .brod-dog {
      width: 100%;
      position: absolute;
      z-index: 10;
    }

    .faq {
      justify-content: center;
      height: 100%;
      width: 50%;
      padding: 0;

      .title {
        margin-top: 6rem;
        text-align: left;
      }
    }
  }
`;
