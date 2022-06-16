import Link from 'next/link';
import type { FC, ReactElement, ReactNode } from 'react'

interface ButtonProps {
  label: string;
  href: string;
  icon?: ReactNode;
}

const Button: FC<ButtonProps> = ({ label, href, icon = <></> }): ReactElement => (
  <Link href={href}>
    <a>
      <div className="bg-indigo-700 rounded-lg px-4 py-3 text-white">
        <span className="w-5 h-5 mr-2 align-middle inline-flex">{icon}</span>
        <span className="">{label}</span>
      </div>
    </a>
  </Link>
)

export default Button
