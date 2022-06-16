import { Book, Favorite, LocationOn, People } from "@mui/icons-material"
import {
  Card,
  Link,
  CardContent,
  Typography,
  Box,
  CardHeader,
  Avatar,
  Grid,
  Divider,
  Skeleton,
} from "@mui/material"
import React from "react"

const UserCard = ({ user }) => {
  return (
    (user.name && (
      <Card sx={{ bgcolor: "background.default" }}>
        <CardHeader
          avatar={<Avatar src={user.avatar_url} />}
          title={user.name}
          titleTypographyProps={{
            fontWeight: "medium",
          }}
          subheader={
            <>
              {/* Just to make it smaller than "small" ;D */}
              <LocationOn fontSize="" /> {user.location}
            </>
          }
        />
        <CardContent
          sx={{ pt: 0 }}
          children={<Typography variant="body2" children={user.bio} />}
        />
        <Grid container sx={{ p: 2, pt: 0 }}>
          {[
            {
              title: "Repositories",
              content: user.public_repos,
              icon: <Book fontSize="small" />,
            },
            {
              title: "Followers",
              content: user.followers,
              icon: <Favorite fontSize="small" />,
            },
            {
              title: "Following",
              content: user.following,
              icon: <People fontSize="small" />,
            },
          ].map((item, index) => (
            <React.Fragment key={item.title}>
              <Grid item xs={12} sx={{ textAlign: "center" }}>
                <Link
                  href={`${user.html_url}?tab=${item.title.toLowerCase()}`}
                  target="_blank"
                  rel="noreferrer"
                  underline="hover"
                  sx={{ color: "inherit" }}
                >
                  <Typography variant="subtitle1" children={item.title} />
                </Link>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6" children={item.content} />{" "}
                  {item.icon}
                </Box>
              </Grid>
              {index < 2 ? (
                <Divider sx={{ width: "100%", height: "1px" }} />
              ) : (
                ""
              )}
            </React.Fragment>
          ))}
        </Grid>
      </Card>
    )) || (
      <Card>
        <CardHeader
          avatar={
            <Skeleton
              variant="circular"
              sx={{
                width: 40,
                height: 40,
              }}
            />
          }
          title={<Skeleton variant="text" />}
          subheader={<Skeleton variant="text" />}
        />
        <CardContent
          children={
            <Skeleton
              variant="rectangular"
              sx={{
                width: "230px",
                height: "40px",
              }}
            />
          }
        />
      </Card>
    )
  )
}

export default UserCard
