import { useEffect, useState } from 'react';
import { CircleLoader } from 'react-spinners';

export default function Loader ({ children }) {
    const [loading, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true);
        setTimeout(() => {
            setLoader(false);
        }, 3000);
    }, [])

    return (
        <>
            {
                loading ? 
                    <div className='data-loader'>
                        <CircleLoader color="red" loading={loading} size={150} />
                    </div>
                :
                <>
                    {children}
                </>
            }
        </>
    );
};