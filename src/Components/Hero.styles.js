import styled from "styled-components";

export const Section = styled.div.withConfig({
  shouldForwardProp: (prop) => !["scrollState", "state"].includes(prop), // Filter out invalid props
})`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100vh;
  .background {
    position: relative;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(60%);
    }
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);
    }
  }
  .content {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 3;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .title {
      color: white;
      h1 {
        font-size: 3.5rem;
        letter-spacing: 0.3rem;
        font-family: "Poppins", sans-serif;
        font-weight: 700;
      }
      p {
        text-align: center;
        padding: 0 20vw;
        margin-top: 1rem;
        font-size: 1.2rem;
        font-family: "Roboto", sans-serif;
        line-height: 1.5;
      }
    }
    .search {
      display: flex;
      background-color: #ffffffce;
      padding: 0.5rem;
      border-radius: 0.5rem;
      position: relative;
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 1.5rem;
        label {
          font-size: 1.1rem;
          color: #03045e;
        }
        input,
        .date-picker {
          background-color: transparent;
          border: none;
          text-align: center;
          color: black;
          padding: 0.5rem;
          width: 100%;
          &[type="date"] {
            padding-left: 3rem;
          }
          &::placeholder {
            color: black;
          }
          &:focus {
            outline: none;
          }
        }
        .autocomplete-dropdown-container {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          z-index: 10;
          background-color: white;
          border-radius: 0.3rem;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          max-height: 200px;
          overflow-y: auto;
          width: 100%;
          .suggestion-item {
            padding: 0.5rem;
            cursor: pointer;
            &:hover {
              background-color: #f0f0f0;
            }
          }
        }
      }
      button {
        padding: 1rem 2rem;
        cursor: pointer;
        border-radius: 0.3rem;
        border: none;
        color: white;
        background-color: #4361ee;
        font-size: 1.1rem;
        text-transform: uppercase;
        transition: all 0.3s ease-in-out;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        &:hover {
          background-color: #023e8a;
          transform: scale(1.05);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    height: 80vh;
    .content {
      .title {
        h1 {
          font-size: 1.5rem;
        }
        p {
          font-size: 0.9rem;
          padding: 2vw;
        }
      }
      .search {
        flex-direction: column;
        padding: 1rem;
        gap: 1rem;
        .container {
          padding: 0 1rem;
          input[type="date"] {
            padding-left: 1rem;
          }
        }
        button {
          padding: 0.8rem;
          font-size: 0.9rem;
        }
      }
    }
  }
  @media screen and (min-width: 1200px) {
    .content {
      .title {
        h1 {
          font-size: 4rem;
        }
        p {
          font-size: 1.4rem;
        }
      }
    }
  }
`;
