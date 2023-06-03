import React from "react"
import ContentLoader from "react-content-loader"

const CardLoader = (props) => (
   <div className="card__loader">
      <ContentLoader
         speed={2}
         width={208}
         height={256}
         viewBox="0 0 208 256"
         backgroundColor="#f3f3f3"
         foregroundColor="#ecebeb"
         {...props}
      >
         <rect x="30" y="36" rx="10" ry="10" width="150" height="91" />
         <rect x="30" y="143" rx="3" ry="3" width="150" height="15" />
         <rect x="148" y="191" rx="8" ry="8" width="32" height="32" />
         <rect x="30" y="199" rx="8" ry="8" width="80" height="24" />
         <rect x="30" y="162" rx="3" ry="3" width="93" height="15" />
      </ContentLoader>
   </div>
)

export default CardLoader