import { Avatar, Tooltip, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Abhi from '/abhi.png';
import LOGO from '/LOGO.png';

const Header = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: 'flex',
        height: '10vh',
        alignItems: 'center',
        bgcolor: '#f4f4f4',
        border: '1px solid black',
      }}
    >
      <Grid
        item
        sm={1}
        sx={{
          display: 'flex',
          p: 0,
          justifyContent: 'left',
          alignItems: 'center',
          pb: 1,
          pl: 2,
        }}
      >
        <img
          src={LOGO}
          alt="Logo"
          style={{
            maxWidth: '50%',
            maxHeight: '50%',
            objectFit: 'contain',
            zIndex: 100,
          }}
        />
      </Grid>

      <Grid item sm={10} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography
          sx={{
            fontWeight: 'bold',
            fontSize: '30px',
            color: 'rgba(223, 43, 135, 0.8)',
          }}
        >
          CRUD APP
        </Typography>
      </Grid>
      <Grid
        item
        sm={1}
        sx={{
          display: 'flex',
          p: 0,
          justifyContent: 'right',
          alignItems: 'center',
          pr: 3,
        }}
      >
        <Tooltip title="Abhishek T" arrow>
          <Avatar alt="Abhi" sx={{ border: '2px solid red' }} src={Abhi} />
        </Tooltip>
      </Grid>
    </Grid>
  );
};

export default Header;
