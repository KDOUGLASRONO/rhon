import {useState} from 'react';
import {Link} from 'react-router-dom';

function Navbar(){
 const [nav, setNav] = useState(false);


    return(
        <>
             <div className="md:w-full bg-slate-400 py-4 md:h-24 ">
                <nav>
                    <div className="md:hidden px-4 mb-4" onClick={()=>setNav(!nav)}>
                        <img src="https://img.icons8.com/windows/32/null/menu--v1.png"/>
                    </div>
                    <div className={`md:w-full text-white text-xl px-4 absolute bg-slate-400 rounded-lg md:flex justify-between ${nav==false?'hidden':'block'}`}>
                        <h3><a><i>about</i></a></h3>
                        <h3><a><i>solutions</i></a></h3>
                        <div className="md:flex">
                            <Link to="/signin"><button className="bg-purple-400 mr-2 my-2 px-2 py-2 text-xl rounded-lg hover:shadow-lg shadow-orange-800"><i>Login</i></button></Link>
                            <Link to="/signup"><button className="bg-purple-400 px-2 my-2 py-2 text-xl rounded-lg"><i>Get Started</i></button></Link>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default Navbar;