
import Link from "next/link"

type LinksProps = {
  label?: string;
  
  children:React.ReactNode;
};

const Links = ({children}:LinksProps) => {
  return (
     <Link href="#" className="text-[#2D3B36] hover:opacity-70 transition-opacity font-medium capitalize ">
            {children}
          </Link>
  )
}

export default Links