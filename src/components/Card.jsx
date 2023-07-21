import React from "react"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import {
  BanknotesIcon,
  StarIcon,
  HeartIcon,
  WifiIcon,
  HomeIcon,
  TvIcon,
  FireIcon,
} from "@heroicons/react/24/solid";

export default function CardMain(props) {
  return (
    <Card  className="w-full max-w-[26rem] shadow-lg">
      <CardHeader floated={false} color="blue-gray">
        <img
          src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="ui/ux review check"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />

      </CardHeader>
      <CardBody>

        <Typography variant="h4" color="blue-gray" className="mb-2">
          Grade  paper
        </Typography>
        <Typography color="blue" className="font-medium" textGradient>
          <i>Marking: </i>
        </Typography>

      </CardBody>

    </Card>
    // <Card className="w-64 transform transition-all hover:translate-y-1 duration-300 shadow-lg hover:shadow-2xl">
    //   <CardHeader floated={false} className="h-56">
    //     <img src="https://i1.sndcdn.com/avatars-UidYWfW20bjki8Ub-GJKpBQ-t500x500.jpg" alt="profile-picture" />
    //   </CardHeader>
    //   <CardBody className="text-center">
    //     <Typography variant="h4" color="blue-gray" className="mb-2">
    //       Grade {props.item.grade} {props.item.subject} {props.item.year} paper
    //     </Typography>
    //     <Typography color="blue" className="font-medium" textGradient>
    //       <i>Marking: {props.item.marking}</i>
    //     </Typography>
    //   </CardBody>
    //   {/* <CardFooter className="pt-0 text-center">
    //       <Button>Read More</Button>
    //   </CardFooter> */}
    // </Card>
  );
}
