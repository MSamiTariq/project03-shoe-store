import React, {useContext} from 'react';
import MUIDataTable from "mui-datatables";
import {GlobalContext} from '../context/Context';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { IconButton } from '@material-ui/core';
import { useSnackbar } from 'notistack';

export const GridTableData = ({gridTableData}) => {
    const {addItems, removeItems, emptyCart, minusItems, removeObjects } = useContext(GlobalContext);
    
    function itemAdded() {
        enqueueSnackbar('Cart Checkout Success', {
            variant: 'success',
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'right',
            },
        });
    }
    function removeObj(gridData){
        enqueueSnackbar('Item removed from the cart', {
            variant: 'info',
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'right',
            },
        });
        if (gridData.count === 0){
            removeObjects(gridData);

        }
    }
    const { enqueueSnackbar } = useSnackbar();
    const columns = [
        {
            name: "name",
            label: "Item Name",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "count",
            label: "Quantity",
            options: {
                filter: false,
                customBodyRenderLite: (dataIndex, rowIndex) => {
                    return (
                        <div>
                            <IconButton color="primary" aria-label="add" onClick={() => {addItems(gridTableData[dataIndex].id)
                            itemAdded()}}>
                                <AddCircleOutlineIcon />
                            </IconButton>
                            {gridTableData[dataIndex].count}
                            <IconButton color="secondary" aria-label="remove" onClick={() => {minusItems(gridTableData[dataIndex].id)
                            removeObj(gridTableData[dataIndex])}}>
                                <RemoveCircleOutlineIcon />
                            </IconButton>
                        </div>
                    )
                },
                sort: false,
            }
        },
        {
            name: "price",
            label: "Price",
            options: {
                filter: true,
                sort: false,
            }
        },
        
    ];
    const options = {
        onRowsDelete: (rowsDeleted) => {
            removeItems(rowsDeleted.data)
            enqueueSnackbar('Item removed from the cart', {
                variant: 'info',
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right',
                },
            });
        },
        filterType: 'checkbox',
        filter: false,
        download: false,
        print: false,
        viewColumns: false,
        pagination: false,
        search: false,
    };


    return (
        <div>
            <MUIDataTable
                title={"Shopping Cart"}
                data={gridTableData}
                columns={columns}
                options={options}
            />
        </div>
    )
}
