
export const Spinner = () => {
    return (
        <div className='flex w-full h-[80vh] gap-5 items-center justify-center' >
            <div className='animate-spin rounded-full w-20 h-20 border-t-4 border-b-4  border-red-600   '></div>
        </div>
    )
}

export const SkeletonLoader = () => {
    return (
        <>
            {[...Array(6)].map((_, idx) => (
                <li
                    key={idx}
                    className="bg-white border border-gray-200 rounded-xl p-4 shadow animate-pulse space-y-4 "
                >
                    <div className="h-6 bg-gray-300 rounded w-3/4" /> {/* Country name */}
                    <div className="h-4 bg-gray-300 rounded w-1/2" /> {/* Region */}
                    <div className="h-4 bg-gray-300 rounded w-1/3" /> {/* Population */}
                </li>
            ))}
        </>
    );
}