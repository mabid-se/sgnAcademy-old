import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const FAQsComp = (props) => {
  const [expanded, setExpanded] = useState();

  const faqSectChangeHandler = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion
      expanded={expanded === props.data.qNo}
      onChange={faqSectChangeHandler(props.data.qNo)}
      elevation={4}
      sx={{ marginY: 1 }}
    >
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="${props.data.qNo}-content"
        id="${props.data.qNo}-header"
      >
        <Typography variant="subtitle1" fontWeight={700}>
          {props.data.question}
        </Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Typography variant="body1">{props.data.answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default FAQsComp;
