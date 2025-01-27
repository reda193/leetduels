import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import Nav from "@/components/ui/Navbar";
const Admin = async () => {
    const session = await getServerSession(authOptions);
    
    if (session?.user) {
        return (
        <div>
            <Nav />
            <h2>Admin pddage - welcome back {session?.user.username}</h2>
        </div>
        )
    }
    return (
        <div>
            <Nav />
        <h2>Please login to dasdasdassee this login page</h2>
        </div>
    )
}


export default Admin