import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { selectProducts } from '../../store/products/selectors';

export const ProductsList = () => {
  // const API = import.meta.env.VITE_API_KEY;

  const location = useLocation();
  const products = useSelector(selectProducts);

  return (
    <>
      {products?.length > 0 && (
        <>
          <ul className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
            {products?.map((product) => (
              <li
                key={product._id}
                className='flex flex-col justify-between items-center m-[10px] p-4 bg-[var(--backgroundCard)] shadow-md hover:shadow-xl rounded-md overflow-hidden transition-shadow duration-200 ease-in-out'
              >
                <Link to={`${product._id}`} state={{ from: location }} className='contents'>
                  {product.poster && (
                    <img
                      src={product.poster}
                      alt={product.name}
                      className='h-[170px] w-full object-contain hover:scale-105 transition-scale duration-200 ease-in-out rounded-md'
                      loading='lazy'
                    />
                  )}
                  <div className='w-full'>
                    <h3 className='mt-2 text-black'>{product.name}</h3>
                    <div className='flex space-x-2 items-center justify-between'>
                      <p className='text-[var(--color-text)]  text-xs'>
                        {product.createdAt.split('T')[0]}
                      </p>
                      <div className='flex space-x-2 items-center'>
                        {product.owner.avatarUrl && (
                          <img
                            src={product.owner.avatarUrl}
                            alt={product.owner.name}
                            className='h-5 w-5 object-cover hover:scale-105 transition-scale duration-200 ease-in-out rounded-full'
                            loading='lazy'
                          />
                        )}
                        <p className='text-[var(--color-text)] text-xs uppercase'>
                          {product.owner.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
