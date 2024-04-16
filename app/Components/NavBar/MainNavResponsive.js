"use client";
import React, { useState } from "react";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

export default function SbMain() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex justify-between items-center mx-5 py-5">
      <Link href="/" className="border-2 border-stone-500 px-3 py-1">
        Next Shop
      </Link>
      <div>
        <Link href="/orders" className="mr-5">
          <ShoppingBagOutlinedIcon />
        </Link>
        <IconButton onClick={handleClick}>
          <MenuOutlinedIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>
            <div className="border-b-2 flex py-2 w-[200px]">
              <AccountCircleOutlinedIcon />
              <p className="px-2">John</p>
            </div>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href="/summary" className="flex w-full">
              <ShoppingBagOutlinedIcon />
              <p className="px-2">Cart</p>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href="/orders" className="flex w-full">
            <div className="border-b-2 w-full flex pb-4">
              <LocalShippingOutlinedIcon href="#"/>
              <p className="px-2">Orders</p>
              </div>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href="/products" className="w-full">
              Phone
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href="/products/phone" className="w-full">
              All products
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href="/products/phone" className="w-full">
              Phone
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href="/products/tablet" className="w-full">
              Tablet
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href="/products/tv" className="w-full">
              TV
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href="/products/accessories" className="w-full">
              Accessories
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href="/about" className="w-full">
              About
            </Link>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}
