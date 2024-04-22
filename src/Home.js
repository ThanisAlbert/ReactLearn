import { Link } from "react-router-dom";

export default function Home(){

  return(

        <div>
            
            <p>Home Page</p>

            <nav>

                <Link to="/contactus">Contactus</Link>

            </nav>

        </div>


  )

}