import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import './index.less'

interface MenuP {
  title: string;
  url: string;
}

interface Menu extends MenuP {
  children?: MenuP[];
}

const MenuList: Menu[] = [
  {
    title: "Funds",
    url: "/funds",
  },
  {
    title: "Strategies",
    url: "/strategies",
    children: [
      {
        title: "Global Value Equity",
        url: "/strategies",
      },
      {
        title: "International Value Equity",
        url: "/strategies",
      },
      {
        title: "International Value Select",
        url: "/strategies",
      },
      {
        title: "Emerging Markets Equity",
        url: "/strategies",
      },
      {
        title: "International Opportunities",
        url: "/strategies",
      },
      {
        title: "International Samll Cap",
        url: "/strategies",
      },
      {
        title: "Global Small Cap",
        url: "/strategies",
      },
    ],
  },
  {
    title: "Insights",
    url: "/insights",
  },
  {
    title: "Sustainability Research",
    url: "/research",
  },
  {
    title: "About Us",
    url: "/about",
    children: [
      {
        title: "Research Structrue",
        url: "/about",
      },
      {
        title: "People",
        url: "/about",
      },
      {
        title: "Culture and Diversity",
        url: "/about",
      },
      {
        title: "News and Press",
        url: "/about",
      },
      {
        title: "Careers",
        url: "/about",
      },
      {
        title: "Contact Us",
        url: "/about",
      },
    ],
  },
];

const HeaderWapper = (): ReactElement => {
  const navigate = useNavigate();
  return (
    <div className="header-wapper">
      <div className="con-inner">
        <img
          src="https://www.causewaycap.com/wp-content/themes/causeway-rebranding/assets/images/logo-invert.svg"
          alt=""
        />
        <div className="menu-list">
          <ul>
            {MenuList.map((item: Menu, index: number) => {
              return <li key={index}>{item.title}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderWapper;
