import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useSelector } from 'react-redux';
import { testSelectors } from './redux';
import Tab1 from './Views/Tab1';
import Tab2 from './Views/Tab2';
import Tab3 from './Views/Tab3';
import styles from './App.module.css';

function App() {
  const { firstName, lastName } = useSelector(testSelectors.getUserData);
  return (
    <>
      <Tabs>
        <TabList className={styles.list}>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </TabList>
        <TabPanel>
          <Tab1 />
        </TabPanel>
        <TabPanel>
          <Tab2 />
        </TabPanel>
        <TabPanel>
          <Tab3 />
          {firstName && (
            <h2 className={styles.title}>
              {firstName} {lastName}, вітаємо на нашому сайті!
            </h2>
          )}
        </TabPanel>
      </Tabs>
    </>
  );
}

export default App;
