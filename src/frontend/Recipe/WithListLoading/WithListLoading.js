import React from 'react';

function WithListLoading(Component) {
    return function WihLoadingComponent({ isLoading, ...props }) {
        if (!isLoading) return <Component {...props} />;
        return (
            <>
                {/* TODO: Maybe add a loading spinner */}
                <p className="WithListLoading">
                    Hold on, fetching some data. This may take some time :)
                </p>
                <p className="WithListLoading">
                    This may take some time :)
                </p>
            </>
        );
    };
}
export default WithListLoading;