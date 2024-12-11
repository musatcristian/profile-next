import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { SyntheticEvent, useState } from "react";

import { CustomTabPanel } from "./tab";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            sx={{ width: "33%", maxWidth: "100%" }}
            label="Item One"
            {...a11yProps(0)}
          />
          <Tab
            sx={{ width: "33%", maxWidth: "100%" }}
            label="Item Two"
            {...a11yProps(1)}
          />
          <Tab
            sx={{ width: "33%", maxWidth: "100%" }}
            label="Item Three"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        Item One
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}
