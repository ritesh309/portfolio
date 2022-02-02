import React from 'react'
import styled from "styled-components"
import { NavLink } from "react-router-dom"

import avatar from "../images/avatar.jpg"
function Navigation() {
    return (
        <NavigationStyled>
            <div className="avatar">
                <img src={avatar} alt=" avatar" />
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/" activeClassName="active-class" exact>
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/blog" activeClassName="active-class" exact>
                        Blogs
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" activeClassName="active-class" exact>
                        About
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/resume" activeClassName="active-class" exact>
                        Resume
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" activeClassName="active-class" exact >
                        Contact
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/portfolio" activeClassName="active-class" exact>
                        Portfolios
                    </NavLink>
                </li>



            </ul>
            <footer className="footer">
                <p> @2021 My Portfolio </p>
            </footer>
        </NavigationStyled>
    )
}
const NavigationStyled = styled.nav`
display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;
height: 100%;
border-right: 1.5px solid var(--border-color);
  .avatar{
      width: 100%;
      border-bottom: 1px solid var(--border-color);
      text-align: center;
      padding:1rem 0 ;
      img{
          width: 100%;
          border-radius: 50%;
          border: 7px solid var(--border-color);
      }
  }

  .nav-items{
      width: 100%;
      text-align: center;

      .active-class{
          background-color: var(--primary-color);
      }
     li{
        display: block;
      a{
        display: block;
        padding: .2rem 0;
        position: relative;
        z-index:10;
        text-transform: uppercase;
        transform:all .4s ease-in-out;
        font-weight: 500;
        letter-spacing: 1px;

        &:hover{
            cursor: pointer;
            color: var(--primary-color);
        }
        &::before{
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 50%;
            /* background-color:#98A5A6; */
            background-color:var(--primary-color);
            transition: All 0.4s cubic-bezier(.69,.3,.28,1);
            z-index: 4;
            opacity:0.3;
        }
        }
        a:hover::before{
              width:100%;
              height: 100%;
        }
    }
}
  
  footer{
      border-top: 1px solid var(--border-color);
      width: 100%;
     p{
         padding: 2rem 0;
         font-size: 1rem;
         display: block;
         text-align: center;
     } 
  }
`;
export default Navigation
