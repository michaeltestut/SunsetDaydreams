
import {Helmet} from "react-helmet-async"

const MetaData:React.FC<{title:string}> = ({title})=>{
  return (
        <Helmet>
            <title>{title}</title>
        </Helmet>
    
  )
}

export default MetaData;

