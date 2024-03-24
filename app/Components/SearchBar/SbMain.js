import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
export default function SbMain() {
  return (
    <div className="flex justify-between items-center mx-5 mb-8 py-5">
      <p className="">Logo</p>
      <div className="flex justify-between">
        
        <a href='https://www.google.com' className="mx-5">Home</a>
        <a href='https://www.google.com' className="mx-5">All products</a>
        <a href='https://www.google.com' className="mx-5">Phone</a>
        <a href='https://www.google.com' className="mx-5">Tablet</a>
        <a href='https://www.google.com' className="mx-5">TV</a>
        <a href='https://www.google.com' className="mx-5">Accessories</a>
        <a href='https://www.google.com' className="mx-5">About</a>
      </div>
      <div className="flex justify-between">
        <LocalShippingOutlinedIcon className='mr-8' />
        <ShoppingBagOutlinedIcon className='mr-8' />
        <AccountCircleOutlinedIcon className='' />
      </div>
    </div>
  );
}
