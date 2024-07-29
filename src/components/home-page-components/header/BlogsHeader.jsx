import { useNavigate } from 'react-router';
import { BlogsContainer, IconBlogsContainer } from './StyledHeader';

const BlogsHeader = () => {
  const navigate = useNavigate();

  const handleRouter = () => {
    navigate('blogs');
  };

  return (
    <>
      <BlogsContainer onClick={handleRouter}>
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
