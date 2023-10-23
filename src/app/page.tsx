import AuthProvider from '@/app/context/AuthProvider'
import {Chakraui} from '@/app/component/Chakraui'

export default function Home() {
  
  return (
    <AuthProvider>
      <>
    <Chakraui />
      
      </>
    </AuthProvider>
  )
}
