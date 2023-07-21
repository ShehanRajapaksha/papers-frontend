import React from "react"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

  export default function CardMini(props) {
    return (
      <Card className="w-64 transform transition-all hover:translate-y-1 duration-300 shadow-lg hover:shadow-2xl">
        <CardHeader floated={false} className="h-56">
          <img src="https://i1.sndcdn.com/avatars-UidYWfW20bjki8Ub-GJKpBQ-t500x500.jpg" alt="profile-picture" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Grade {props.item.grade} {props.item.subject} {props.item.year} paper
          </Typography>
          <Typography color="blue" className="font-medium" textGradient>
            <i>Marking: {props.item.marking}</i>
          </Typography>
        </CardBody>
        {/* <CardFooter className="pt-0 text-center">
            <Button>Read More</Button>
        </CardFooter> */}
      </Card>
    );
  }