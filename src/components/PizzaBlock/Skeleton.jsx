import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={500}
        viewBox="0 0 280 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="134" cy="135" r="125" />
        <rect x="20" y="283" rx="0" ry="0" width="0" height="113" />
        <rect x="0" y="274" rx="10" ry="10" width="280" height="19" />
        <rect x="0" y="304" rx="10" ry="10" width="280" height="88" />
        <rect x="6" y="416" rx="10" ry="10" width="95" height="30" />
        <rect x="119" y="407" rx="20" ry="20" width="152" height="45" />
    </ContentLoader>
)

export default Skeleton