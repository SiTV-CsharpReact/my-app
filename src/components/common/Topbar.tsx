import { AppBar, InputBase, styled, Toolbar, Typography } from "@mui/material"
import { alpha, Box } from "@mui/system";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
  border: "1px solid #D9D9D9"
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
const Topbar =() =>{
   return(
 
    <AppBar 
    sx={{
      width:`calc(100% - ${sizeConfigs.sidebar.width})`,
      ml:sizeConfigs.sidebar.width,
      boxShadow:"unset",
      backgroundColor: colorConfigs.topbar.bg,
      color: colorConfigs.topbar.color,
     
    }}
    >
      <Box display="flex" justifyContent="space-between"> 
      <Toolbar >
    <Typography display="flex" fontWeight="bold" fontSize="24px">
      Ez
      <Typography color= "#034e95" fontWeight="bold" fontSize="24px">
      Trade
      </Typography>
    </Typography>
    </Toolbar>
    <Toolbar>
    <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Tìm kiếm ..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
   <AccountCircleIcon sx={{width:"30px"}} />
    </Toolbar>
      </Box>
    
    </AppBar>
    
   );
}

export default Topbar;