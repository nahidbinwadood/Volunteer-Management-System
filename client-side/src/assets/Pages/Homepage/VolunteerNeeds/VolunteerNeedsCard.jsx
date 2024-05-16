/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const VolunteerNeedsCard = ({volunteer}) => {
  const{_id,thumbnail,post_title,category,deadline,description}=volunteer;
  return (
    <div data-aos="fade-down"
    data-aos-anchor-placement="top-bottom"
    data-aos-easing="linear"
    data-aos-duration="1000" className="mx-auto">
      <Card className="max-w-[24rem] overflow-hidden">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
        >
          <img className="w-full h-60"
            src={thumbnail}
            alt="ui/ux review check"
          />
        </CardHeader>
        <CardBody>
          <Typography className="h-16" variant="h4" color="blue-gray">
          {post_title}
          </Typography>
          <Typography className="mt-2" variant="h5" color="blue-gray">
           <span className="text-green-500">{category}</span>
          </Typography>
          <Typography  variant="h6" color="gray" className="mt-3 h-16 font-normal">
          {description}
          </Typography>
        </CardBody>
        <CardFooter className="flex items-center gap-8 justify-between">
          <div className="flex items-center -space-x-3">
            <Link to={`/post-details/${_id}`}>
            <Button color="green">View Details</Button>
            </Link>
          </div>
          <div>
            <h2 className="font-qs font-bold">Deadline : {deadline}</h2>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default VolunteerNeedsCard;
