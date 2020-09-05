import React from 'react';

import './footer.styles.scss';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

const Copyright = () => {
    return (
        <Typography
            variant="h6"
            color="initial"
            align="center"
            className="copyright"
        >
            {'Copyright © ' + new Date().getFullYear() + ' - Made with ❤️ by '}
            <Link href="https://github.com/dghojas" target="_blank">
                @dghojas
            </Link>
            {'.'}
        </Typography>
    );
};

const Footer = () => {
    return (
        <div className="footer">
            <Container maxWidth="lg" component="footer">
                {/* <Grid container spacing={1} justify="space-evenly">
                    <Grid item xs={6} sm={3}>
                        <Typography
                            variant="h6"
                            color="textPrimary"
                            gutterBottom
                        >
                            lalalal
                        </Typography>
                        <ul>
                            <li key={1}>
                                <Link
                                    href="#"
                                    variant="subtitle1"
                                    color="textSecondary"
                                >
                                    Hola!
                                </Link>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Typography
                            variant="h6"
                            color="textPrimary"
                            gutterBottom
                        >
                            lalalal
                        </Typography>
                        <ul>
                            <li key={1}>
                                <Link
                                    href="#"
                                    variant="subtitle1"
                                    color="textSecondary"
                                >
                                    Hola!
                                </Link>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Typography
                            variant="h6"
                            color="textPrimary"
                            gutterBottom
                        >
                            lalalal
                        </Typography>
                        <ul>
                            <li key={1}>
                                <Link
                                    href="#"
                                    variant="subtitle1"
                                    color="textSecondary"
                                >
                                    Hola!
                                </Link>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        <Typography
                            variant="h6"
                            color="textPrimary"
                            gutterBottom
                        >
                            lalalal
                        </Typography>
                        <ul>
                            <li key={1}>
                                <Link
                                    href="#"
                                    variant="subtitle1"
                                    color="textSecondary"
                                >
                                    Hola!
                                </Link>
                            </li>
                        </ul>
                    </Grid>
                </Grid> */}
                <Box>
                    <Copyright />
                </Box>
            </Container>
        </div>
    );
};

Footer.displayName = 'Footer';
export default Footer;
