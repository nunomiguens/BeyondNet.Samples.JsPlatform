import { Menu as MenuIcon } from "@material-ui/icons";
import { IconButton, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { StyledAppBar, StyledToolbar, StyledTypography } from "./styles";

const TheTopBar: React.FC = () => {
  return (
    <StyledAppBar position="absolute">
      <StyledToolbar>
        <IconButton aria-label="Toggle Menu Mode" color="inherit" edge="start">
          <MenuIcon />
        </IconButton>
        <StyledTypography variant="h6" />
        <Link to="/home">
          <Button color="inherit">Home</Button>
        </Link>
        <Link to="/customevents">
          <Button color="inherit">Custom Events</Button>
        </Link>
        <Link to="/funnels">
          <Button color="inherit">Funnels</Button>
        </Link>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default TheTopBar;
