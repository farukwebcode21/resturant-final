import { useState } from "react";
import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
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
            <Tab>salad</Tab>
            <Tab>pizza</Tab>
            <Tab>soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
