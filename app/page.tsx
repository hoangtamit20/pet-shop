import Image from 'next/image'
import styles from './page.module.css'
import GoogleLogin from './GoogleLogin'

export default function Home() {
  return (
    <div className="container-fluid">
      <h1>Welcome to login with google in NextJS</h1>
      <button className="btn btn-sm btn-outline-primary">Login with google</button>
      <GoogleLogin />
    </div>
  )
}
