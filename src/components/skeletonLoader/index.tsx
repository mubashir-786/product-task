import Skeleton from '@mui/material/Skeleton';

const SkeletonLoader = () => {
    const skeletons = Array.from({ length: 10 }).map((_, index) => (
        <Skeleton key={index} variant="rectangular"
            width={250} height={300} />
    ));

    return (
        <>
            {skeletons}
        </>

    );
};

export default SkeletonLoader;
