import Image from 'next/image';
import Styles from './header.module.css';
import { IconBookmark, IconHome } from '@/icons';
import Link from 'next/link';


export default function Header() {
  return (
    <header>
      <nav className={Styles.nav}>
        <div className={Styles.brand}>
          <Link href={'/'}>
              <Image src="/images/logo.png" width={36} height={26} alt="OnHungry" />
              <span>OnHungry</span>
          </Link>
        </div>
        <ul>
        <li>
          <Link href={'/'}>
            <IconHome />
            Home
          </Link>
          </li>
          <li>
            <Link href={'/favorite'}>
              <IconBookmark />
              Favorito
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}