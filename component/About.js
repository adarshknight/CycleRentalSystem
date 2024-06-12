import React from 'react';
import { Box, Button, Container, Grid, Link, Typography } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import { styled } from'@mui/system';

const StyledTitle = styled(Typography)({
    marginBottom: (theme) => theme.spacing(2),
});
const VideoSection = ({ src }) => (
  <Grid item xs={12} md={6} sx={{ backgroundColor: "black", borderRadius: "20px" }}>
    <video width="100%" height="100%" autoPlay muted loop style={{ borderRadius: "20px" }}>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </Grid>
);

const TextSection = ({ title, content, buttonLabel, buttonStyle }) => (
  <Grid item xs={12} md={6}>
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4">{title}</Typography>
      <Typography variant="body1">{content}</Typography>
      <Button style={buttonStyle}>{buttonLabel}</Button>
    </Box>
  </Grid>
);

const ListSection = ({ title, content, buttonLabel, buttonStyle, src }) => (
  <Grid container spacing={3} style={{ marginTop: "12%" }}>
    <Grid item xs={12} md={6}>
      <Typography variant="h4">{title}</Typography>
      <Typography variant="body1">{content}</Typography>
      <ul>
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Button style={buttonStyle}>{buttonLabel}</Button>
    </Grid>
    <VideoSection src={src} />
  </Grid>
);

const ImageTextSection = ({ src, title, content, buttonLabel, buttonStyle }) => (
  <Grid container spacing={3} style={{ marginTop: "12%" }}>
    <VideoSection src={src} />
    <TextSection title={title} content={content} buttonLabel={buttonLabel} buttonStyle={buttonStyle} />
  </Grid>
);

const FeatureSection = ({ imageSrc, title, content }) => (
    <div style={{ marginBottom: "30px" }}>
      <img src={imageSrc} alt={title} style={{ width: "250px", height: "auto", borderRadius: "10px" }} />
      <Typography variant="h3" style={{ marginTop: "10px" }}>{title}</Typography>
      <Typography variant="body1">{content}</Typography>
    </div>
  );
  
  

const About = () => {
  return (
    <div>
      <div>
        
      </div>
      {/* First Section */}
      <Grid container spacing={3} sx={{ marginTop: "80px" }}>
        <VideoSection src="https://player.vimeo.com/progressive_redirect/playback/389294793/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=b2e0df80ae20dd8929af462ae84d007384430303dd0acf47cb6f3ac9357109e5" />
        <TextSection
          title="Bike Rentals"
          content="allows users to browse and select from a variety of bicycles available for rent. Users can choose bicycles based on factors such as size, type (mountain bike, road bike, hybrid, etc.), duration of rental, and any additional accessories they may need like helmets, locks, or baskets. It provides a convenient and affordable way for people to access bicycles for leisure, commuting, or exploring new areas.
          "
          buttonLabel="Rent Now"
          buttonStyle={{ borderRadius: "6px", backgroundColor: "red", color: "white", marginTop: "20px" }}
        />
      </Grid>

      {/* Second Section */}
      <ListSection
        title="Bike Tours"
        content={["users can discover and book guided bike tours offered by your company. These tours could include scenic routes through picturesque landscapes, historical tours of the city, or adventure tours for more experienced riders. Each tour listing includes details such as duration, difficulty level, points of interest along the route, and any amenities provided. Bike tours offer a unique and immersive way for individuals or groups to explore a destination while staying active and eco-friendly.",
        ]}
        buttonLabel="Explore"
        buttonStyle={{ borderRadius: "6px", backgroundColor: "black", color: "white" }}
        src="https://player.vimeo.com/progressive_redirect/playback/185228454/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=9901b4765909c6b4e9a0246cf92098e5c847f36daec56a22f1626681d65a3d3f"
      />

      {/* Third Section */}
      <ImageTextSection
        src="https://player.vimeo.com/progressive_redirect/playback/475548727/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=5db6ef8517a542961f02508e745b99dbbe72b9d57162ee4af409571cd167217a"
        title="Bike Service"
        content="The bike service section is designed for users who need maintenance or repairs for their own bicycles. Users can schedule appointments for services like tune-ups, tire changes, brake adjustments, or full bike overhauls. They can also browse a catalog of available spare parts and accessories for purchase. This section caters to both casual riders and cycling enthusiasts who want to keep their bikes in top condition for optimal performance and safety."
        buttonLabel="Book an appointment"
        buttonStyle={{ borderRadius: "6px", backgroundColor: "white", color: "red", border: "2px solid red" }}
      />

      {/* Fourth Section */}
      <div style={{ marginTop: "7%" }}>
        <Typography variant="h2">Beauty that doesn't break the bank </Typography>
        <div className="page">
          <Grid container spacing={3} style={{ marginTop: "30px" }}>
            <Grid item xs={12} md={6}>
              <FeatureSection
                imageSrc="https://images.pexels.com/photos/386024/pexels-photo-386024.jpeg?auto=compress&cs=tinysrgb&w=800"
                title="Makes you fit"
                content="The best exercise to start the day "
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FeatureSection
                imageSrc="https://images.pexels.com/photos/1208777/pexels-photo-1208777.jpeg?auto=compress&cs=tinysrgb&w=800"
                title="Explore"
                content="We provide wide range of cycles in every type"
              />
            </Grid>
          </Grid>
        </div>
      </div>

      <div className="page">
        <div className="bigdiv1" style={{ marginTop: "30px" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <FeatureSection
                imageSrc="https://images.pexels.com/photos/69118/pexels-photo-69118.jpeg?auto=compress&cs=tinysrgb&w=800"
                title="Wide range"
                content="You can get several types of cycles like mountain,road,hybrid,etc"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FeatureSection
                imageSrc="https://images.pexels.com/photos/5920998/pexels-photo-5920998.jpeg?auto=compress&cs=tinysrgb&w=800"
                title="Rent with ease"
                content="With couple of clicks you can rent a cycle hassle free"
              />
            </Grid>
          </Grid>
        </div>
      </div>

      

      <Box component="footer" sx={{ backgroundColor: (theme) => theme.palette.mode === "light" ? theme.palette.grey[200] : theme.palette.grey[800], p: 6, marginTop: "30px" }}>
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We are Bike2Ride company, we offer delivery, we make a note of your feedbacks;
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body2" color="text.secondary">
                99,john street,south john road,john daris,coimbatore
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Email: johnDaris@gmail.com
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Phone: 91 93606 74603
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                Follow Us
              </Typography>
              <Box display="flex" sx={{ marginLeft: "10vw" }}>
                <Link href="https://www.facebook.com/" color="inherit">
                  <Facebook />
                </Link>
                <Link href="https://www.instagram.com/" color="inherit" sx={{ pl: 1, pr: 1 }}>
                  <Instagram />
                </Link>
                <Link href="https://www.twitter.com/" color="inherit">
                  <Twitter />
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Typography variant="body2" color="text.secondary" align="center">
              {"Copyright ©️ "}
              <Link color="inherit" href="https://your-website.com/">
                Bike2Ride
              </Link>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default About;