import { onServerNavigate } from "@/actions/navigate";
import { styled } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { SyntheticEvent, useState } from "react";

const ZeroTab = styled(Tab)({
  width: 0,
  maxWidth: 0,
  minWidth: 0,
  minHeight: 0,
  padding: 0,
  margin: 0,
});

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
    onServerNavigate(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="basic tabs example"
      centered
      variant="fullWidth"
      indicatorColor="primary"
      textColor="secondary"
    >
      <Tab label="Programmer" value="/landing" {...a11yProps(0)} />
      <Tab label="Teamster" value="/team" {...a11yProps(1)} />
      <Tab label="Problem Solver" value="/solution" {...a11yProps(2)} />
      <ZeroTab hidden value={""} />
    </Tabs>
  );
}
