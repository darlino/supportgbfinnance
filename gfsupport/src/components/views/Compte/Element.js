import React from 'react'

export const Element = (props) => {

    const slug = props.match.params.slug
    return (
        <div className="col-7 p-4 m-2">
                {slug}
        </div>
    )
}
