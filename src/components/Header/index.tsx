import Link from 'next/link';
import { Logo, StyledHeader } from './styles';
import Image from 'next/image';

export const Header = () => {
  return (
    <StyledHeader>
      <Logo>
        <Link href='/'>
          <Image
            src='/logo_bood_imoveis.png'
            alt='Logo da Bood imóveis'
            width={70}
            height={46}
          />
        </Link>
      </Logo>
    </StyledHeader>
  );
};
