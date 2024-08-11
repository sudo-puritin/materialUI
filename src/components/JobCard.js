import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function JobCard({ job }) {
  return (
    <Card
      sx={{
        maxWidth: 375,
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: "1px solid black",
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          style={{
            marginBottom: "8px",
            textAlign: "center",
          }}
        >
          {job.title}
        </Typography>
        <Stack
          direction="row"
          style={{
            marginBottom: "8px",
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          {job.skills.slice(0, 4).map((skill, index) => {
            return (
              <Chip
                key={index}
                label={skill}
                component="a"
                href="#basic-chip"
                style={{ color: "#fff", backgroundColor: "#f50057" }}
                clickable
              />
            );
          })}
        </Stack>

        <Typography variant="body2">{job.description}</Typography>
      </CardContent>
      <CardActions
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button variant="contained">Learn More</Button>
      </CardActions>
    </Card>
  );
}
