import { useState } from "react";
import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./OrderStyle.css";
import Card from "../../Shared/Card/Card";
import { useMenu } from "../../../hooks/useMenu";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();

  const drinks = menu.filter((item) => item.category === "drinks");
  const soups = menu.filter((item) => item.category === "soup").slice(0, 8);
  const desserets = menu
    .filter((item) => item.category === "dessert")
    .slice(0, 6);
  const salad = menu.filter((item) => item.category === "salad").slice(0, 6);
  const pizza = menu.filter((item) => item.category === "pizza").slice(0, 6);

  return (
    <div>
      <Cover
        img={orderCover}
        title={"Order Food"}
        subTitle={"Would you like to try a dish?"}
      />
      <div className="flex justify-center">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="space-x-8 ">
            <Tab>
              <div>salad</div>
            </Tab>
            <Tab>pizza</Tab>
            <Tab>soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <div className=" grid grid-cols-3 gap-10">
              {salad.map((item) => (
                <Card
                  key={item.id}
                  cardImg={item.image}
                  title={item.name}
                  content={item.recipe}
                  cardButton={"Add To Card"}
                />
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-3 gap-10">
              {pizza.map((item) => (
                <Card
                  key={item.id}
                  cardImg={item.image}
                  title={item.name}
                  content={item.recipe}
                  cardButton={"Add To Card"}
                />
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-3 gap-10">
              {soups.map((item) => (
                <Card
                  key={item.id}
                  cardImg={item.image}
                  title={item.name}
                  content={item.recipe}
                  cardButton={"Add To Card"}
                />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-10">
              {desserets.map((item) => (
                <Card
                  key={item.id}
                  cardImg={item.image}
                  title={item.name}
                  content={item.recipe}
                  cardButton={"Add To Card"}
                />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-3 gap-10">
              {drinks.map((item) => (
                <Card
                  key={item.id}
                  cardImg={item.image}
                  title={item.name}
                  content={item.recipe}
                  cardButton={"Add To Card"}
                />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
