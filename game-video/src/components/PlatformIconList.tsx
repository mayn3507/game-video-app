import { HStack, Icon } from '@chakra-ui/react';
import { BsGlobe } from "react-icons/bs";
import { FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox, } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { Platform } from '../hooks/useGames';

interface Props {
    platforms : Platform[]
}

const PlatformIconList = ({platforms}:Props) => {
    const iconMap: {[key:string]:IconType} ={
        //name:Playstation
        pc:FaWindows,
        playstation : FaPlaystation,
        xbox:FaXbox,
        nintendo : SiNintendo,
        mac:FaApple,
        linux:FaLinux,
        android:FaAndroid,
        ios:MdPhoneIphone,
        web:BsGlobe

    }
  return (
    <HStack marginY={1.5}>
    {platforms.map((platform)=> (
        <Icon as ={iconMap[platform.slug]} color= 'gray.500'/>
    
   ))}
    </HStack>
  );
};

export default PlatformIconList