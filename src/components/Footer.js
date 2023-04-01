import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://monicaaawa.github.io/">
        Shiyu Ye
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footer(props) {
  const { description, social } = props;

  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Grid
          item xs={12} md={4}
          align="center"
        >
          {social.map((network, index) => (
            <Link
            href={network.link}
            key={network.name}
            sx={{ mr: index !== social.length - 1 ? 1 : 0, mb: 0.5 }}
            >
              <network.icon sx={{ width: '32px', height: '32px' }}/>
            </Link>
          ))}
        </Grid>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {description}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;