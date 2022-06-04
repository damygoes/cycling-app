import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MonochromePhotosIcon from "@mui/icons-material/MonochromePhotos";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import SickIcon from "@mui/icons-material/Sick";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Box from "@mui/material/Box";

export default function ActivityCard({ activity }) {
  const staticPhotoURL =
    "https://images.unsplash.com/photo-1483638694934-2e6f027d02bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFwfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60";
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500] }}
            aria-label="activity-name-initial-letter"
          >
            {activity.name[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={activity.name}
        subheader={activity.start_date}
      />
      <CardMedia
        component="img"
        height="194"
        image={staticPhotoURL}
        alt={activity.name}
      />
      <CardContent>
        <div variant="body2" color="text.secondary">
          <ul>
            <li>Distance: {activity.distance}</li>
            <li>Time: {activity.elapsed_time}</li>
            <li>Average Speed: {activity.average_speed}</li>
            <li>Elevation: {activity.total_elevation_gain}</li>
          </ul>
        </div>
      </CardContent>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <CardActions spacing="true">
          <IconButton aria-label="photos">
            <MonochromePhotosIcon />
          </IconButton>
          <IconButton aria-label="achievements">
            <MilitaryTechIcon />
          </IconButton>
          <IconButton aria-label="stress-score">
            <SickIcon />
          </IconButton>
        </CardActions>
        <CardActions spacing="true">
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Box>
    </Card>
  );
}
