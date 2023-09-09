import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [menuItems, setItems] = useState([]);

  useEffect(() => {
    fetch("https://forkify-api.herokuapp.com/api/search?q=pizza")
      .then((res) => res.json())
      .then((data) => {
        if (!!data) {
          const selectedItems = data.recipes.slice(0, 6);
          console.log(selectedItems);
          setItems(selectedItems);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <MenuContainer menuItems={menuItems} />
    </div>
  );
}

const MenuContainer = ({ menuItems }) => {
  return (
    <div className="menuContainer">
      <Header />
      <SubHeader />
      <MenuList menuItems={menuItems} />
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <header className="menuHeader">
      <h1>-- Fast React Pizza Co. --</h1>
    </header>
  );
};

const SubHeader = () => {
  return (
    <section className="subHeader">
      <h2>Our Menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
    </section>
  );
};

const MenuList = ({ menuItems }) => {
  return (
    <section className="menuList">
      <MenuItem menuItems={menuItems} />
    </section>
  );
};

const MenuItem = ({ menuItems }) => {
  return (
    <>
      {menuItems.map((item) => {
        return (
          <div className="menuItem">
            <div className="itemImage">
              <img src={item.image_url} alt="" />
            </div>
            <div className="itemAbout">
              <h3 className="itemTitle">
                <abbr title={item.title}>{item.title}</abbr>
              </h3>
              <p className="itemDesc">Tomato, mozarella, mushrooms and onion</p>
              <p className="itemStatus">{item.publisher}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

const Footer = () => {
  return (
    <footer className="menuFooter">
      <p>We're open until 22:00. Come visit us or order online.</p>
      <button className="orderBtn">Order Now</button>
    </footer>
  );
};
export default App;
