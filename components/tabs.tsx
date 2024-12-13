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

const StyledTab = styled(Tab)({
  textTransform: "none",
  fontSize: "1.2rem",
  fontFamily: "var(--font-regular)",
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
      <StyledTab label="Programmer" value="/landing" {...a11yProps(0)} />
      <StyledTab label="Teamster" value="/team" {...a11yProps(1)} />
      <StyledTab label="Problem Solver" value="/solution" {...a11yProps(2)} />
      <ZeroTab hidden value={""} />
    </Tabs>
  );
}
