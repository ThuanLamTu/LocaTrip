import React, { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { domesticData } from "../data/destinations";

export default function Navbar() {
  const [navbarState, setNavbarState] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const locations = domesticData;

  const filteredLocations = locations.filter((location) =>
    location.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearchQuery("");
  };

  return (
    <>
      <Nav>
        <div className="brand">
          <div className="container">
            <Link to="/">
              <span role="img" aria-label="airplane">
                ✈️
              </span>
              LocaTrip
            </Link>
          </div>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu onClick={() => setNavbarState(true)} />
            )}
          </div>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gioi-thieu">Recommendation</Link>
          </li>
          <li>
            <Link to="/diem-den">Destination</Link>
          </li>
          <li>
            <Link to="/danh-gia">Appreciation</Link>
          </li>
        </ul>
        <SearchIcon role="img" aria-label="search" onClick={handleSearchToggle}>
          🔍
        </SearchIcon>
      </Nav>
      <ResponsiveNav $state={navbarState}>
        <ul>
          <li>
            <Link to="/" onClick={() => setNavbarState(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/gioi-thieu" onClick={() => setNavbarState(false)}>
              Recommendation
            </Link>
          </li>
          <li>
            <Link to="/diem-den" onClick={() => setNavbarState(false)}>
              Destination
            </Link>
          </li>
          <li>
            <Link to="/danh-gia" onClick={() => setNavbarState(false)}>
              Appreciation
            </Link>
          </li>
          <li>
            <SearchIcon
              role="img"
              aria-label="search"
              onClick={() => {
                setNavbarState(false);
                handleSearchToggle();
              }}
            >
              🔍 Search
            </SearchIcon>
          </li>
        </ul>
      </ResponsiveNav>
      <SearchBar $isOpen={isSearchOpen}>
        <SearchInput
          type="text"
          placeholder="Enter the location name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <CloseButton onClick={handleSearchToggle}>✖</CloseButton>
        {searchQuery && (
          <SearchResults>
            {filteredLocations.length > 0 ? (
              filteredLocations.map((location) => (
                <ResultItem
                  key={location.id}
                  to={`/destination/${location.id}`}
                  onClick={handleSearchToggle}
                >
                  <strong>{location.title}</strong>: {location.subTitle}
                </ResultItem>
              ))
            ) : (
              <ResultItem>Can not find the right places.</ResultItem>
            )}
          </SearchResults>
        )}
      </SearchBar>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  .brand {
    .container {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;
      font-size: 1.2rem;
      font-weight: 900;
      text-transform: uppercase;
      color: #03045e;

      a {
        text-decoration: none;
        color: #03045e;
      }
    }
    .toggle {
      display: none;
    }
  }

  ul {
    display: flex;
    gap: 1rem;
    list-style-type: none;
    li {
      a {
        text-decoration: none;
        color: #0077b6;
        font-size: 1.2rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #023e8a;
        }
      }
      &:first-of-type {
        a {
          color: #023e8a;
          font-weight: 900;
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .toggle {
        display: block;
      }
    }
    ul {
      display: none;
    }
  }
`;

const SearchIcon = styled.span`
  font-size: 1.5rem;
  cursor: pointer;
  color: #0077b6;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #023e8a;
  }

  @media (max-width: 1080px) {
    display: none;
  }
`;

const ResponsiveNav = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  top: ${({ $state }) => ($state ? "50px" : "-400px")};
  background-color: white;
  height: 30vh;
  width: 100%;
  align-items: center;
  transition: 0.3s ease-in-out;

  ul {
    list-style-type: none;
    width: 100%;
    li {
      width: 100%;
      margin: 1rem 0;
      margin-left: 2rem;
      a {
        text-decoration: none;
        color: #0077b6;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #023e8a;
        }
      }
      &:first-of-type {
        a {
          color: #023e8a;
          font-weight: 900;
        }
      }
    }
    ${SearchIcon} {
      display: block;
      font-size: 1.2rem;
      margin-left: 2rem;
    }
  }
`;

const SearchBar = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  background-color: #f8f9fa;
  padding: 1rem;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateY(0)" : "translateY(-100%)"};
  transition: transform 0.3s ease-in-out;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 20px;
  outline: none;
  &:focus {
    border-color: #0077b6;
  }
`;

const CloseButton = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.2rem;
  cursor: pointer;
  color: #0077b6;
  &:hover {
    color: #023e8a;
  }
`;

const SearchResults = styled.div`
  margin-top: 1rem;
  width: 100%;
  max-width: 500px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-height: 200px;
  overflow-y: auto;
`;

const ResultItem = styled(Link)`
  display: block;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #ddd;
  text-decoration: none;
  color: #333;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: #e6f0fa;
  }
`;
