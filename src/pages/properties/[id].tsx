import Head from 'next/head';
import { Roboto } from 'next/font/google';
import { PropertiesService } from '@/properties/services/properties.service';
import { api } from '@/services/axios';
import { Property } from '@/properties/dto/property.dto';
import { Header } from '@/components/Header';
import { GetServerSidePropsContext } from 'next';
import { PropertyView } from '@/components/PropertyView';
import { ProposalForm } from '@/components/ProposalForm';
import { Section } from '@/styles/property.styles';
import { Footer } from '@/components/Footer';

type PropertyPageProps = {
  property: Property;
};

const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] });

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.params?.id as string;
  const service = new PropertiesService(api);
  const { property, isSuccess } = await service.getById(id);

  if (!isSuccess) {
    return {
      notFound: true,
    };
  }

  return { props: { property } };
}

export default function PropertyPage({ property }: PropertyPageProps) {
  return (
    <>
      <Head>
        <title>Bood imóveis - {property.title}</title>
        <meta name='description' content={property.description} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className={roboto.className}>
        <Section>
          <PropertyView property={property} />
          <ProposalForm propertyId={property.id} />
        </Section>
      </main>
      <Footer />
    </>
  );
}
