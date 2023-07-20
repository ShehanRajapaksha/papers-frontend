import React from "react"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
   
  export default function CardPlus(props) {
    return (
      <Card className="flex-row w-full max-w-[38rem] min-h-[19rem] max-h-[20rem] mx-12 transform transition-all hover:translate-y-1 duration-300 shadow-lg hover:shadow-2xl">
        <CardHeader shadow={false} floated={false} className="w-2/5 shrink-0 m-0 rounded-r-none">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
            alt="image" 
            className="w-full h-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Lyft launching cross-platform service this week
          </Typography>
          <a href="#" className="inline-block">
            <Button variant="text" className="flex items-center gap-2 hover:translate-y-1 duration-300">
              Learn More 
              <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
            </Button>
          </a>
        </CardBody>
      </Card>
    );
  }