import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

import RozaPak from "../../assets/images/Roza-e-Pak.png";
import pray from "../../assets/images/islamic-pray.png";
import ramadan from "../../assets/images/islamic-ramadan.png";
import QuranShareef from "../../assets/images/Quran-Shareef.png";
import KaabaShareef from "../../assets/images/Kaaba-Shareef.png";

const HistoryOfCenter = () => {
  const [salahHover, setSalahHover] = useState(false);
  const [sawmHover, setSawmHover] = useState(false);
  const [quranHover, setQuranHover] = useState(false);
  const [hajjHover, setHajjHover] = useState(false);

  const salahMouseEnter = () => {
    setSalahHover(true);
  };

  const salahMouseLeave = () => {
    setSalahHover(false);
  };

  const sawmMouseEnter = () => {
    setSawmHover(true);
  };

  const sawmMouseLeave = () => {
    setSawmHover(false);
  };

  const quranMouseEnter = () => {
    setQuranHover(true);
  };

  const quranMouseLeave = () => {
    setQuranHover(false);
  };

  const hajjMouseEnter = () => {
    setHajjHover(true);
  };

  const hajjMouseLeave = () => {
    setHajjHover(false);
  };

  return (
    <>
      <Box paddingY={{ xs: 2, md: 12 }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={6}
          paddingX={{ sm: 12 }}
        >
          <Grid item xs={12} sm={12} md={7} paddingX={4}>
            <div
              style={{
                margin: 20,
                border: "10px solid #49bcac",
              }}
            >
              <img
                src={RozaPak}
                alt="Roza-e-Pak"
                style={{
                  width: "115%",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={5} padding={3}>
            <Grid container direction="column" spacing={2} paddingX={4}>
              <Grid item>
                <Typography variant="h6">Few Words About</Typography>
              </Grid>

              <Grid item>
                <Typography
                  variant="h4"
                  color="success.main"
                  fontWeight={700}
                  letterSpacing={1}
                >
                  History of Center
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant="subtitle1">
                  Since 1987, Our institution guiding students and people around
                  the world. Helping others in every community and region with
                  astonishing facilities. Since 1987, Our institution guiding
                  students.
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant="h6">
                  The Jamia is the
                  <span style={{ color: "#49bcac", fontWeight: 600 }}>
                    &nbsp;#1&nbsp;
                  </span>
                  Islamic Center in the
                  <span style={{ color: "#49bcac", fontWeight: 600 }}>
                    &nbsp;Country!
                  </span>
                </Typography>

                <Typography variant="subtitle1" sx={{ marginLeft: "-18px" }}>
                  <ul>
                    <li>Astonishing Facilities</li>
                    <li>Leads Charity Events</li>
                    <li>Feeding Hungry People</li>
                    <li>Helping Communities</li>
                    <li>Schooling Children</li>
                    <li>Providing Homes</li>
                  </ul>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          spacing={4}
          justifyContent="center"
          alignItems="center"
          paddingX={{ xs: 3, sm: 5, md: 10 }}
          marginTop={{ xs: 0, md: 6 }}
        >
          <Grid item md={3}>
            <Grid
              container
              direction={{ md: "column" }}
              justifyContent={{ md: "center" }}
              alignItems={{ md: "center" }}
              spacing={1}
              paddingX={2}
            >
              <Grid item xs={4} sm={3} md={12}>
                <img
                  src={pray}
                  alt="muslim-pray"
                  style={{
                    padding: 30,
                    width: "95%",
                    border: "2px solid #49bcac",
                    borderRadius: "50%",
                    textAlign: "center",
                    backgroundColor: salahHover ? "#49bcac" : "",
                  }}
                  onMouseEnter={salahMouseEnter}
                  onMouseLeave={salahMouseLeave}
                />
              </Grid>

              <Grid item marginTop={{ md: 1 }} xs={8} sm={9} md={12}>
                <Typography
                  variant="h6"
                  color="blue.main"
                  fontWeight={600}
                  textAlign={{ md: "center" }}
                  marginLeft={{ xs: 1, md: 0 }}
                >
                  Salah
                </Typography>

                <Typography
                  variant="subtitle2"
                  color="lightBlack"
                  textAlign={{ md: "center" }}
                  marginLeft={{ xs: 1, md: 0 }}
                  marginTop={1}
                >
                  Salat Pillar of Islam dolor amet, consectetur adipiscing. -
                  dummy content
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item md={3} marginTop={{ xs: 3, md: 0 }}>
            <Grid
              container
              direction={{ md: "column" }}
              justifyContent={{ md: "center" }}
              alignItems={{ md: "center" }}
              spacing={1}
              paddingX={2}
            >
              <Grid item xs={4} sm={3} md={12}>
                <img
                  src={ramadan}
                  alt="ramadan"
                  style={{
                    padding: 30,
                    width: "95%",
                    border: "2px solid #49bcac",
                    borderRadius: "50%",
                    textAlign: "center",
                    backgroundColor: sawmHover ? "#49bcac" : "",
                  }}
                  onMouseEnter={sawmMouseEnter}
                  onMouseLeave={sawmMouseLeave}
                />
              </Grid>

              <Grid item marginTop={{ md: 1 }} xs={8} sm={9} md={12}>
                <Typography
                  variant="h6"
                  color="blue.main"
                  fontWeight={600}
                  textAlign={{ md: "center" }}
                  marginLeft={{ xs: 1, md: 0 }}
                >
                  Sawm
                </Typography>

                <Typography
                  variant="subtitle2"
                  color="lightBlack"
                  textAlign={{ md: "center" }}
                  marginLeft={{ xs: 1, md: 0 }}
                  marginTop={1}
                >
                  Roza is another, pillar islamic religion adipiscing. - dummy
                  content
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item md={3} marginTop={{ xs: 3, md: 0 }}>
            <Grid
              container
              direction={{ md: "column" }}
              justifyContent={{ md: "center" }}
              alignItems={{ md: "center" }}
              spacing={1}
              paddingX={2}
            >
              <Grid item xs={4} sm={3} md={12}>
                <img
                  src={QuranShareef}
                  alt="quran - shareef"
                  style={{
                    padding: 30,
                    width: "95%",
                    border: "2px solid #49bcac",
                    borderRadius: "50%",
                    textAlign: "center",
                    backgroundColor: quranHover ? "#49bcac" : "",
                  }}
                  onMouseEnter={quranMouseEnter}
                  onMouseLeave={quranMouseLeave}
                />
              </Grid>

              <Grid item marginTop={{ md: 1 }} xs={8} sm={9} md={12}>
                <Typography
                  variant="h6"
                  color="blue.main"
                  fontWeight={600}
                  textAlign={{ md: "center" }}
                  marginLeft={{ xs: 1, md: 0 }}
                >
                  Quran
                </Typography>

                <Typography
                  variant="subtitle2"
                  color="lightBlack"
                  textAlign={{ md: "center" }}
                  marginLeft={{ xs: 1, md: 0 }}
                  marginTop={1}
                >
                  Islamic values gives some rules, consectetur adipiscing -
                  dummy content
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item md={3} marginTop={{ xs: 3, md: 0 }}>
            <Grid
              container
              direction={{ md: "column" }}
              justifyContent={{ md: "center" }}
              alignItems={{ md: "center" }}
              spacing={1}
              paddingX={2}
            >
              <Grid item xs={4} sm={3} md={12}>
                <img
                  src={KaabaShareef}
                  alt="Kaaba - shareef"
                  style={{
                    padding: 30,
                    width: "95%",
                    border: "2px solid #49bcac",
                    borderRadius: "50%",
                    textAlign: "center",
                    backgroundColor: hajjHover ? "#49bcac" : "",
                  }}
                  onMouseEnter={hajjMouseEnter}
                  onMouseLeave={hajjMouseLeave}
                />
              </Grid>

              <Grid item marginTop={{ md: 1 }} xs={8} sm={9} md={12}>
                <Typography
                  variant="h6"
                  color="blue.main"
                  fontWeight={600}
                  textAlign={{ md: "center" }}
                  marginLeft={{ xs: 1, md: 0 }}
                >
                  Hajj
                </Typography>

                <Typography
                  variant="subtitle2"
                  color="lightBlack"
                  textAlign={{ md: "center" }}
                  marginLeft={{ xs: 1, md: 0 }}
                  marginTop={1}
                >
                  Only people who have : (dummy content - amet, conssectetur
                  adipiscing)
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HistoryOfCenter;
