import type { FC, ReactElement, ReactNode } from 'react'
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }): ReactElement => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        {children}
      </div>
    </>
  )
}

export default Layout
