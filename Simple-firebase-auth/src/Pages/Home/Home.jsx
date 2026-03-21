import { Link } from 'react-router'
import '../../App.css'

export default function Home() {
  return (
    <div className="center">
        <ul>
            <Link to={'/'}>Home</Link>
            <Link to={'/login'}>Login</Link>
        </ul>
    </div>
  )
}
