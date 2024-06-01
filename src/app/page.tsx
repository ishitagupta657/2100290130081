import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    redirect: {
      destination: '/products',
      permanent: false, 
    },
  }
}

const Home = () => null

export default Home