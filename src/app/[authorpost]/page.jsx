import AuthorListing from '@/src/app/[authorpost]/authorlisting'
import Banner from '@/src/app/[authorpost]/banenr'

const Page = ({ params }) => {
  const { authorpost } = params;

  return (
    <>
      <Banner slug={authorpost}/>
      <AuthorListing slug={authorpost} />
    </>
  );
};

export default Page;
