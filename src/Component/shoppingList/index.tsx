import React from 'react'

const Index = (props: any) => {

    return (
        <div className='container'>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Count</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        props.shoppingCart.map((item: any) => {
                            return <tr>
                                <td>{item.name}</td>
                                <td>{item.count}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Index
