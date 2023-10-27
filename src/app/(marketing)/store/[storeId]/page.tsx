'use client'

type StorePageProps = {
    params: {
        storeId: string
    }
}

function StorePage({ params }: StorePageProps) {
    return (
        <>
            <div>
                <h1>{params.storeId}</h1>
            </div>
        </>
    )
}

export default StorePage