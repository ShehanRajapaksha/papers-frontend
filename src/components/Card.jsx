import React from "react"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export default function CardMain(props) {
    return (
      <Card className="w-64">
        <CardHeader floated={false} className="h-56">
          <img src="https://i1.sndcdn.com/avatars-UidYWfW20bjki8Ub-GJKpBQ-t500x500.jpg" alt="profile-picture" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            <h2>Grade {props.item.grade} {props.item.subject} {props.item.year} paper</h2>
          </Typography>
          <Typography color="blue" className="font-medium" textGradient>
            <h2><i>Marking: {props.item.marking}</i></h2>
          </Typography>
        </CardBody>
        {/* <CardFooter className="pt-0 text-center">
            <Button>Read More</Button>
        </CardFooter> */}
      </Card>
    );
  }