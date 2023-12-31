import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading
      textAlign={"left"}
      padding={2}
      as="h1"
      marginY={1}
      marginBottom={5}
      fontSize={"5xl"}
    >
      {heading}
    </Heading>
  );
};

export default GameHeading;
