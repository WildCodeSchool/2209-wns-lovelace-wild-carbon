import {
  AiOutlineInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillFacebook,
} from 'react-icons/ai';
const Footer = () => {
  return (
    <div className=" fixed bottom-0 w-full z-50 flex justify-center ">
      <div className="flex justify-center">
        <AiOutlineInstagram style={{ marginRight: '6px' }} />
        <AiFillTwitterCircle style={{ marginRight: '6px' }} />
        <AiFillFacebook style={{ marginRight: '6px' }} />
        <AiFillLinkedin style={{ marginRight: '6px' }} />
      </div>

      <h1 className="text-[12px] font-bold ml-5">
        Wild-Carbon projet 2022 - Tout droit reservé{' '}
      </h1>
    </div>
  );
};

export default Footer;
