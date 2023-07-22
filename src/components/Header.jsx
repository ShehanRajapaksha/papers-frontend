import React from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Input,
  Collapse,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem
} from "@material-tailwind/react";

function GradeMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);
 
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
      
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-2 px-4 font-normal hover:shadow-md hover:bg-gray-100 hover:font-light  rounded-xl transition duration-300 text-base cursor-pointer"
      >
    
          Grades
     
         
      
      </Typography> 
      </MenuHandler>
        <MenuList className="p-1">
            {Array.from({ length: 13 }, (_, index) => (
              <MenuItem
                key={`Grade ${index + 1}`}
                onClick={closeMenu}
                className={`flex items-center gap-2 rounded `}
              >
                <Typography as="span" variant="small" className="font-normal">
                  Grade {index + 1}
                </Typography>
              </MenuItem>
            ))}
        </MenuList>
    </Menu>
  );
}


 


export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);
  const [isMenuOpenMobile, setIsMenuOpenMobile] = React.useState(false);
  const closeMenuMobile = () => setIsMenuOpenMobile(false);

  
  const RenderGradeMenu = () => {
    

    if (window.innerWidth >= 720) {
      return <GradeMenu />;
    }
    return( 
     <ul> 
    <Typography
      as="li"
      variant="small"
      color="blue-gray"
      className="p-2 px-4 font-normal  hover:shadow-md hover:bg-gray-100 transition rounded-xl duration-300 text-base"
      onClick={() => setIsMenuOpenMobile(!isMenuOpenMobile)}
    >

        Grades
      <ul>
      {isMenuOpenMobile && (
        <div className="p-2 " >
          {Array.from({ length: 13 }, (_, index) => (
            <li><div
              key={`Grade ${index + 1}`}
              onClick={closeMenuMobile}
              className='flex items-center gap-2 rounded p-2 cursor-pointer w-full  border-b-2 font-light'
            >
              <span className=" px-3  hover:font-light ">Grade {index + 1}</span>
            </div>
            </li>
          ))}
        </div>
      )}
      </ul>
  </Typography>
  </ul>);
  };


  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 

  const navList = (
    <ul className=" mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 md:pr-4 ">
      {/* Grade Menu  */}
    
      
      <RenderGradeMenu/>
      
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-2 px-4 font-normal  hover:shadow-md hover:bg-gray-100 transition rounded-xl duration-300 text-base"
      >
        <a href="" className="flex items-center">
          Account
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-2 px-4 rounded-xl font-normal  hover:shadow-md hover:bg-gray-100 transition duration-300 text-base"
      >
        <a href="" className="flex items-center">
          Blocks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-2 px-4 rounded-xl font-normal  hover:shadow-md hover:bg-gray-100 transition duration-300 text-base"
      >
        <a href="" className="flex items-center">
          Docs
        </a>
      </Typography>
    </ul>
  );

  return (
    <>
      <Navbar className="sticky top z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className={`flex flex-col lg:flex-row  justify-between text-blue-gray-900  ${window.innerWidth < 1024 ? 'items-end' : 'items-center'}`}>
          <div className="flex items-center my-2">
            <div className={`lg:border-r border-blue-gray-700  ${window.innerWidth < 1024 ? '' : 'pr-4 mr-4'}`}>
              <Typography
                as="a"
                href="#"
                className="mr-4 cursor-pointer py-1.5 text-xl focus:outline-none"
                
              >
                Material Tailwind
              </Typography>
            </div>
            
          </div>
          <div className="relative py-2 px-3 flex flex-row w-full gap-2 md:w-max md:flex-row md:items-center" >
          <div className="hidden lg:block">{navList}</div>
          </div>

          {/* <div className="relative py-2 px-3 flex flex-row w-full gap-2 md:w-max md:flex-row md:items-center" >
            <Input
              type="search"
              label="Type here..."
              className="pr-20"
              containerProps={{
                className: "w-full md:w-auto",
              }}
            />
            <Button size="sm" className="!md:absolute md:right-1 md:top-2 rounded">
              Search
            </Button>
          </div> */}
          
          <div className="lg:hidden absolute top-5 left-4">
            <IconButton
              variant="text"
              className="h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
         
        </Collapse>
      </Navbar>
    </>
  );
}
