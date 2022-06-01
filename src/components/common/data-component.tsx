import React from 'react';

type DataComponentProps = {
    loading: boolean;
    error: string;
    children: React.ReactNode;
};

export default function DataComponent({ loading, error, children }: DataComponentProps): JSX.Element {
    if (loading) return <section>Loading...</section>;
    if (error) return <section>Error! {error}</section>;

    return <>{children}</>;
}
