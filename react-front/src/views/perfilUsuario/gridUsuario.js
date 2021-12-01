import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, { PaginationProvider, PaginationListStandalone,
     SizePerPageDropdownStandalone } from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import { request } from '../../components/helper/helper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { isUndefined } from 'util';
import Loading from '../../components/Loading/Loading';

const { SearchBar } = Search;

export default class GridMedico extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            Loading: false,
            rows: [],
        };
        if (this.props.showEditButton && !this.existsColumn('Actualiza'))
            this.props.columns.push(this.getEditButton());
    }

    componentDidMount(){
        this.getData();
    }

    getData(){
        this.setState({ loading: false });
        request
        .get(this.props.url)
        .then((response) => {
            this.setState({ 
                rows: response.data,
                Loading: false,
             });
        })
        .catch((err) => {
            this.setState({ loading: false });
            console.error(err);
        })
    }

    existsColumn(colText){
        let col = this.props.columns.find((column) => column.text === colText);
        return !isUndefined(col);
    }

    getEditButton(){
        return {
            text: 'Actualiza',
            formatter: (cell, row) => {
                return (
                    <Button onClick={() => this.props.onClickEditButton(row)}>
                        <FontAwesomeIcon icon={faEdit} />
                    </Button>
                );
            },
        };
    }

    render() { 
        const options = {
            custom: true,
            totalSize: this.state.rows.length
        };

        return ( 
            <>
            <Loading show={this.state.loading} />
            <ToolkitProvider
            id="tabla"
            keyField="tp"
            data={ this.state.rows }
            columns={ this.props.columns }
            search
            >
            {
                props => (
                <>
                    <hr />
                    <PaginationProvider pagination={ paginationFactory(options) }>
                        {({paginationProps,
                            paginationTableProps
                        }) => (
                            <>
                            <Row>
                            <Col>
                            <SizePerPageDropdownStandalone { ...paginationProps } />
                           </Col>
                           <Col>
                            <SearchBar { ...props.searchProps } />
                            </Col>
                            <Col>
                            <Button id="grid-button" href="/tomaPresion">
                                Regitro Toma Presion
                            </Button>
                            <Button id="grid-button" href="./home">
                                Regresar
                            </Button>
                            </Col>
                            </Row>
                            <BootstrapTable
                                keyField="bt"
                                data={ this.state.rows }
                                columns={ this.props.columns }
                                { ...paginationTableProps }
                                { ...props.baseProps }
                            />
                            <PaginationListStandalone { ...paginationProps }
                            />
                            </>
                        )
                        }
                    </PaginationProvider>
                </>
                )
            }
            </ToolkitProvider>
            </>
        );
    }
}
