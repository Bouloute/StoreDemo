import './App.css';
import Navbar from "reactjs-navbar";
import "reactjs-navbar/dist/index.css";

import {
  faUsers,
  faBookOpen,
  faGlobe,
  faChartPie,
  faCogs,
  faAnchor,
  faDizzy,
  faWater,
  faAdjust,
  faCheese,
  faGhost,
  faKey,
  faBell,
  faFan,
  faCarSide,
  faJedi,
  faLaughBeam
} from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      


      <Navbar
        logo="https://scontent-bos3-1.xx.fbcdn.net/v/t31.18172-8/10547858_841704182521093_7031835331823283697_o.png?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=dcU6DtrG52gAX_uTDdR&_nc_ht=scontent-bos3-1.xx&oh=63d1b91f0507aa92d47ee3961b736e49&oe=60DF5C9B"
        //loader={<Loader type="Puff" color="#D85B5B" height={25} width={25} />}
        //isLoading={this.state.isLoading}
        helpCallback={() => {
          alert("I need help... and coffee...");
        }}
        menuItems={[
          {
            title: "Administrations",
            isAuth: true,
            onClick: () => {
              // What you want to do...
              alert("Its coffee time...");
            },
          },
          {
            title: "Transactions",
            icon: faBookOpen,
            isAuth: () => {
              // Claim authorization logic...
              return false;
            },
          },
          {
            title: "Networks",
            icon: faGlobe,
            isAuth: true,
          },
          {
            title: "Settings",
            icon: faCogs,
            isAuth: true,
            subItems: [
              {
                title: "Subitem 1",
                icon: faAnchor,
                isAuth: true,
                onClick: () => {
                  // What you want to do...
                  alert("I need another cup of coffee...");
                },
              },
              {
                title: "Subitem 2",
                icon: faDizzy,
                isAuth: true,
                subItems: [
                  { title: "Subitem 2-1", icon: faAdjust, isAuth: true },
                  {
                    title: "Subitem 2-2",
                    icon: faBell,
                    isAuth: true,
                    subItems: [
                      {
                        title: "Subitem 2-2-1",
                        icon: faGhost,
                        isAuth: true,
                        subItems: [
                          {
                            title: "Subitem 2-2-2-1",
                            icon: faFan,
                            isAuth: true,
                          },
                          {
                            title: "Subitem 2-2-2-2",
                            icon: faCarSide,
                            isAuth: true,
                          },
                          {
                            title: "Subitem 2-2-2-3",
                            icon: faJedi,
                            isAuth: true,
                          },
                          {
                            title: "Subitem 2-2-2-4",
                            icon: faLaughBeam,
                            isAuth: true,
                          },
                        ],
                      },
                      {
                        title: "Subitem 2-2-2",
                        icon: faKey,
                        isAuth: true,
                      },
                    ],
                  },
                  {
                    title: "Make request",
                    icon: faCheese,
                    isAuth: true,
                    onClick: () => {
                      // What you want to do...
                      this.setState({ isLoading: true }, () =>
                        setTimeout(() => {
                          this.setState({ isLoading: false });
                        }, 3000)
                      );
                    },
                  },
                ],
              },
              {
                title: "Subitem 3",
                icon: faWater,
                isAuth: () => {
                  // Claim authorization logic...
                  return false;
                },
              },
            ],
          },
          {
            title: "Reports",
            icon: faChartPie,
            isAuth: true,
          },
        ]}
      />
    </div>
  );
}

export default App;
