import { Badge } from '@chakra-ui/react';

interface Props {
    score: number;
}


const CriticScore =
 ({score}: Props) => {
    let color = score > 75 ? 'green' : score > 65 ? 'yellow' : 'red';
  return (
    <Badge colorScheme={color} fontSize='14px' paddingX={3} borderRadius='15px'>{score}</Badge>
  )
}
export default CriticScore;