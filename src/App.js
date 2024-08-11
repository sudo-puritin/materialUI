import React, { useState } from "react";
import "./App.css";
import jobs from "./jobs.json";

import SearchAppBar from "./components/SearchAppBar";
import JobCard from "./components/JobCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [modeUI, setModeUI] = useState("dark");

  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = jobs.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(jobs.length / recordsPerPage);

  const theme = createTheme({
    palette: {
      mode: `${modeUI}`,
      primary: {
        main: "#ff9800",
      },
      secondary: {
        main: "#f50057",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          height: "100%",
          maxWidth: "false",
          backgroundColor: "#D3D3D3",
        }}
      >
        <SearchAppBar setModeUI={setModeUI} />
        <div
          style={{
            padding: 32,
            display: "flex",
            gap: 24,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {records.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Stack spacing={2} style={{ marginBottom: "10px" }}>
            <Pagination
              count={nPage}
              color="secondary"
              onChange={(event, value) => {
                setCurrentPage(value);
              }}
              page={currentPage}
            />
          </Stack>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
