import AuthorListing from '@/src/app/[authorpost]/authorlisting';
import Banner from '@/src/app/[authorpost]/banenr';
import { AuthorData } from '@/src/app/[authorpost]/data/data';

export async function generateMetadata({ params }) {
  const { authorpost } = params;

  // Use AuthorData directly instead of AuthorListing
  const blog = AuthorData.find((post) => post.slug === authorpost);



  if (!blog) {
    return {
      title: "Post Not Found",
      description: "This post does not exist.",
    };
  }

  return {
    title: blog.tit,
    description: blog.desc,
    openGraph: {
      title: blog.tit,
      description: blog.desc,
      url: blog.slug,
      siteName: "Inifniti Digital",
      locale: "en_US",
      type: "website",
      images: "https://www.infinitidigital.us/infinitidigital.png",
    },
    alternates: { canonical: blog.slug },
  };
}

const Page = async ({ params }) => {

  const { authorpost } = params;
  return (
    <>
      <Banner slug={authorpost} data={AuthorData} />
      <AuthorListing slug={authorpost}  />
    </>
  );
};

export default Page;
