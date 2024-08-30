import Head from 'next/head';
import { Roboto } from 'next/font/google';
import { PropertiesService } from '@/properties/services/properties.service';
import { api } from '@/services/axios';
import { PropertyDto } from '@/properties/dto/property.dto';
import { List } from '@/components/List';
import { PropertiesSection, Wrapper } from '@/styles/home.styles';
import { Header } from '@/components/Header';
import { useProperties } from '@/properties/hooks/useProperties';
import { SortFilter } from '@/components/SortFilter';
import { GetServerSidePropsContext } from 'next';
import { Pagination } from '@/types/pagination.types';
import { PaginationControls } from '@/components/Pagination';
import { Footer } from '@/components/Footer';
import { Skeleto } from '@/components/Skeleton';

type HomeProps = {
  initialProperties: PropertyDto[];
  initialPagination: Pagination;
};

const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] });

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const sortBy = ctx.query.sortBy as string;
  const sortOrder = ctx.query.sortOrder as 'asc' | 'desc';
  const page = parseInt(ctx.query.page as string) ?? 1;
  const service = new PropertiesService(api);
  const { properties, pagination } = await service.listAll({
    sortBy,
    sortOrder,
    page: page,
    pageSize: 5,
  });

  return {
    props: { initialProperties: properties, initialPagination: pagination },
  };
}

export default function Home({
  initialProperties,
  initialPagination,
}: HomeProps) {
  const { properties, handleSort, pagination, handlePaginate, isLoading } =
    useProperties(initialProperties, initialPagination);
  return (
    <>
      <Head>
        <title>Bood imóveis: Venda de apartamentos, casas e mais.</title>
        <meta
          name='description'
          content='A nova forma de vender e comprar imóveis sem perder tempo. Financiamento de imóveis e créditos com garantia de imóveil. Tudo na palma da mão!'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className={roboto.className}>
        <h1 title='Bood imóveis' />
        <Wrapper>
          <SortFilter sortProperties={handleSort} />
          <PropertiesSection>
            {isLoading ? <Skeleto /> : <List properties={properties} />}
          </PropertiesSection>
          <PaginationControls
            pagination={pagination}
            onChange={handlePaginate}
          />
        </Wrapper>
      </main>
      <Footer />
    </>
  );
}
