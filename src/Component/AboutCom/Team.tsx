import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react';



const teamList = [
  {
    id: "1",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: "Harvey Spector",
    designation: "Founder - CEO",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHx8MHx8&w=1000&q=80",
    name: "Jessica Pearson",
    designation: "COO",
  },
  {
    id: "3",
    image:
      "https://img.freepik.com/free-photo/amazing-cheerful-business-woman-standing-with-arms-crossed_171337-8487.jpg",
    name: "Rachel Zain",
    designation: "Marketing Head",
  },
  {
    id: "4",
    image:
      "https://thumbs.dreamstime.com/b/nice-to-talk-smart-person-indoor-shot-attractive-interesting-caucasian-guy-smiling-broadly-nice-to-112345489.jpg",
    name: "Luise Litt",
    designation: "Lead Developer",
  },
  {
    id: "5",
    image:
      "https://st2.depositphotos.com/1049680/46907/i/600/depositphotos_469074782-stock-photo-young-brunette-woman-wearing-casual.jpg",
    name: "Katrina Bennett",
    designation: "Intern Designer",
  },
  {
    id: "6",
    image: "https://extralogics.com//assets/pages/img/people/img1-large.jpg",
    name: "Mike Ross",
    designation: "Intern Designer",
  },
];

export default function Team() {
  return (
    <div>
      <Box sx={{ marginTop: "3%" }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: "600", color: "#424242", textAlign: "center" }}
        >
          Our Team
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: "gray", fontSize: "18px", textAlign: "center" }}
        >
          We are comprised of experienced with passion for technology and
          commitment to <br></br> customer satisfaction.
        </Typography>
        <Box sx={{ marginTop: "2%" }}>
          <Grid
            container
            spacing={4}
            sx={{ width: "70%", marginLeft: "14%" }}
            className="team_box"
          >
            {teamList.map((team, index) => (
              <Grid item sm={6} md={6} xl={4} xs={12} key={index}>
                <Card
                  sx={{
                    minWidth: 275,
                    bgcolor: "#f5f5f5",
                    textAlign: "center",
                  }}
                >
                  <CardContent>
                    <Avatar
                      alt="Remy Sharp"
                      src={team.image}
                      sx={{ width: 130, height: 130, marginLeft: "33%" }}
                    />

                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ marginY: "4%" }}
                    >
                      {team.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {team.designation}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
