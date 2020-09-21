import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Grid, useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { calculate } from "../../actions/selectedProductsActions.js";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import AutoComplete from "../../components/AutoComplete";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Table from "../../components/Table";
import theme from "../../styles/customMuiTheme.js";

const useStyles = makeStyles({
    logo: {
        position: "fixed",
        top: 5,
        right: 5,
    },
});

const columns = [
    { title: "Nome", field: "name" },
    { title: "Valor", field: "value" },
    { title: "Peso", field: "weight" },
    { title: "Categoria", field: "categoryName" },
];

export function ProductsUserPage() {
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
    const classes = useStyles();
    const selectedProducts = useSelector(
        (state) => state.selectedProducts.data.products
    );
    const dispatch = useDispatch();

    return (
        <>
            <Logo
                className={classes.logo}
                width={isMobile ? 32 : 64}
                height={isMobile ? 32 : 64}
            />
            <Container style={{ padding: isMobile ? 30 : 40 }}>
                <Grid
                    spacing={isMobile ? 6 : 8}
                    container
                    justify="flex-start"
                    alignItems="center"
                >
                    <Grid item xs={12} container justify="center">
                        <Container maxWidth="xs">
                            <AutoComplete fullWidth />
                        </Container>
                    </Grid>
                    <Grid item xs={12} container justify="center">
                        <Table
                            columns={columns}
                            data={selectedProducts}
                            title="Produtos"
                            style={isMobile && { width: 310 }}
                        />
                    </Grid>
                    <Grid item xs={12} container justify="center">
                        <Container maxWidth="xs">
                            <Button
                                fullWidth
                                color="dark"
                                onClick={() => dispatch(calculate(selectedProducts))}
                            >
                                Calcular
                            </Button>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
