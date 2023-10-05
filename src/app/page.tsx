import AuthProvider from '@/app/context/AuthProvider'
import Navbar_One from '@/app/component/Navbar';

export default function Home() {  
  return (
    <AuthProvider>
    <>
    <Navbar_One />
    </>
    </AuthProvider>
  )
}
