import {FC} from 'react'
import {Link,useNavigate}  from 'react-router-dom'


const Header:FC=()=> {
    const navigate = useNavigate()
  return (
    <header>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
    </header>
  )
}

export default Header