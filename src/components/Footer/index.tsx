import Image from 'next/image';
import { FooterContainer } from './styles';

export const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <p>Avenida Ana Costa, 255 cj 22 - Santos, SP, CEP 11060-001</p>
        <p>
          <span>Contatos:</span>
          (13) 3321-9000 / contato@bood.com.br
        </p>
      </div>

      <Image
        src='/logo_bood.png'
        alt='Logo da Bood imóveis'
        width={132}
        height={47}
      />
    </FooterContainer>
  );
};
