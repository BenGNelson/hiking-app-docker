import { Box } from '@chakra-ui/react';

import Hike from "../hikes/Hike";

const HikesList = (props) => {
  console.log(props.hikes);
  const hikes = props.hikes;
  return (
    <Box>
      {hikes.map((hike, index) => (
        <Hike key={hike._id} hike={hike} />
      ))}
    </Box>
  );
};

export default HikesList;
