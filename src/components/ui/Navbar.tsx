import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import Link from "next/link";
import  Useraccountnav  from './Useracountnav'
const Nav = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      {session?.user ? ( 
        <Useraccountnav />
      ) : (
        <Link href='/login'>Log In</Link>
      )}
    </div>
  )
}

export default Nav;