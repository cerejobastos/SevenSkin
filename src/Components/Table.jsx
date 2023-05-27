import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";
import { ThemeContext } from "./";

const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
  [`& .${gridClasses.row}.even`]: {
    backgroundColor: "#fff",
  },
}));

export function Table() {
  const { heartRateData } = useSelector((state) => state.heartRate);
  const { palette } = useContext(ThemeContext);

  const columns = [
    {
      field: "minimum",
      headerName: "Minimum",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "maximum",
      headerName: "Maximum",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "meanAverage",
      headerName: "Mean Average",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "dateTime",
      headerName: "Date",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
  ];

  function getRowId(props) {
    return props.dateTime;
  }

  return (
    <div style={{ paddingTop: 20 }}>
      <StripedDataGrid
        columns={columns}
        rows={heartRateData}
        getRowId={getRowId}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
        }
        sx={{
          "& .super-app-theme--header": {
            backgroundColor: palette.grey.main,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: palette.grey.main,
            borderTop: "1px solid #000",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: palette.grey.main,
          },
        }}
      />
    </div>
  );
}
