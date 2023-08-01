import { AiFillEye, AiOutlineMessage, AiTwotoneEdit, AiTwotoneDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../store/auth/selectors';
import { Link, useLocation, useParams } from 'react-router-dom';
import { selectIsLoading, selectPostDetails } from '../store/posts/selectors';
import { useEffect } from 'react';
import { getDetailsPost } from '../store/posts/thunks';
import { BackLink } from '../components/BackLink';

const PostDetailsPage = () => {
  const dispatch = useDispatch();
  const post = useSelector(selectPostDetails);
  const user = useSelector(getUser);
  const isLoading = useSelector(selectIsLoading);
  const { id } = useParams();
  const location = useLocation();
  const BackLinkHref = location.state?.from ?? '/posts';

  useEffect(() => {
    dispatch(getDetailsPost(id));
  }, [dispatch, id]);

  //   const { imageUrl, title, createdAt, text, viewsCount, comments } = post;
  return (
    <section className='flex flex-col gap-5 py-3'>
      <div className='px-4'>
        <BackLink to={BackLinkHref}>Posts</BackLink>
      </div>

      {!isLoading && post && (
        <div className='px-4'>
          {post.imageUrl && (
            <div className='mb-5 flex h-[15rem] md:h-[25rem] rounded-md'>
              <img
                src={post.imageUrl}
                alt={post.title}
                className='w-full object-cover rounded-t-lg'
                loading='lazy'
              />
            </div>
          )}
          <div className='flex justify-between items-center mb-5'>
            <div className='flex items-center space-x-1'>
              {post.owner.avatarUrl && (
                <div className='flex items-center justify-center w-[32px] h-[32px] rounded-full border border-slate-80 shadow-lg'>
                  <img
                    src={post.owner.avatarUrl}
                    alt='avatar'
                    className='w-[24px] h-[24px] object-cover object-center'
                  />
                </div>
              )}
              <span className='text-xs text-[var(--color-text)] opacity-50'>{post.owner.name}</span>
            </div>

            <span className='text-xs text-[var(--color-text)]  opacity-50'>
              {post.createdAt.split('T')[0]}
            </span>
          </div>
          <ul className='mb-5 text-xs text-[var(--color-text)]  opacity-50'>
            {post.tags.map((tag) => (
              <li key={tag}>
                <Link to={`posts/tags/${tag}`}>#{tag}</Link>
              </li>
            ))}
          </ul>
          <div className='mb-5'>
            <h2 className='mb-1 text-lg text-[var(--color-text)] '>{post.title}</h2>

            <p className='text-xs text-[var(--color-text)]  opacity-80'>{post.text}</p>
          </div>
          <div className='flex gap-3 items-center justify-between mb-5'>
            <div className='flex gap-3'>
              <button
                type='button'
                className='flex items-center justify-center gap-2 text-sm text-[var(--color-text)]  opacity-50'
              >
                <AiFillEye /> <span>{post.viewsCount}</span>
              </button>
              <button
                type='button'
                className='flex items-center justify-center gap-2 text-sm text-[var(--color-text)]  opacity-50'
              >
                <AiOutlineMessage /> <span>{post.comments?.length || 0}</span>
              </button>
            </div>

            {post?.owner?._id === user._id && (
              <div className='flex gap-3'>
                <Link
                  to={`/posts`}
                  className='flex items-center justify-center gap-2 text-lg text-[var(--color-text)]  opacity-50'
                >
                  <AiTwotoneEdit />
                </Link>
                <button
                  type='button'
                  className='flex items-center  text-lg justify-center gap-2 text-stone-950 opacity-50'
                >
                  <AiTwotoneDelete />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      {user.name && (
        <div className='w-full md:w-[450px] flex flex-col gap-3 px-4'>
          <h2 className='text-lg text-[var(--color-text)] opacity-80'>Add comment</h2>
          <form>
            <textarea
              type='text'
              placeholder='Write comment...'
              className='mb-2 p-3 w-full h-[120px]  text-xs text-[var(--color-text)] bg-[var(--backgroundCard)] resize-none outline-none border border-slate-80 shadow-lg'
            />
            <div className='flex flex-row gap-3'>
              <button
                type='submit'
                className='px-3 py-2 text-sm font-medium text-center  text-gray-900 hover:text-white bg-[#d1ffdf] rounded-lg hover:bg-lime-700 focus:ring-2 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 shadow-xl hover:shadow-md'
              >
                Add
              </button>
              <button
                type='click'
                className='px-3 py-2 text-sm font-medium text-center  text-gray-900 hover:text-white bg-[#ffd8e3] rounded-lg hover:bg-red-700 focus:ring-2 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 shadow-xl hover:shadow-md'
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
};

export default PostDetailsPage;
