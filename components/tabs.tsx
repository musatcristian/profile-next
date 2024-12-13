import { styled } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { SyntheticEvent } from "react";

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

interface Props {
  tabValue: string;
  onTabClick: (value: string) => void;
}

export default function BasicTabs({ onTabClick, tabValue }: Props) {
  const handleTabClick = (_event: SyntheticEvent, value: string) => {
    onTabClick(value);
  };

  return (
    <Tabs
      value={tabValue}
      onChange={handleTabClick}
      aria-label="top tabs navigation"
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
