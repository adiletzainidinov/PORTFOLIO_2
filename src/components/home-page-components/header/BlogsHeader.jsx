import { BlogsContainer, IconBlogsContainer } from "./StyledHeader";

const BlogsHeader = () => {
  return (
    <>
      {' '}
      <BlogsContainer>
        <IconBlogsContainer>
          <p>
            <ion-icon name="barcode-outline"></ion-icon>
            <span>Blogs</span>
          </p>
        </IconBlogsContainer>
      </BlogsContainer>
    </>
  );
};

export default BlogsHeader;
