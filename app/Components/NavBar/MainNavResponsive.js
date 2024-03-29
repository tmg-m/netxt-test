import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

export default function SbMain() {
  return (
    <div className="flex justify-between items-center mx-5 py-5">
      <a href='/' className="">Logo</a>
      <div>
        <ShoppingBagOutlinedIcon  className='mr-5' />
        <MenuOutlinedIcon/>
      </div>
    </div>
  );
}