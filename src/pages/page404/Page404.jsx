import { Link } from 'react-router-dom';
import Page404CSS from './page404.module.css';
import { HOME } from '../../configs';

const Page404 = () => {
  return (
    <div className={Page404CSS.container}>
      <h1 className={Page404CSS.title}>Opps!..</h1>
      <p className={Page404CSS.messageLg}>404 - Not Found</p>
      <p className={Page404CSS.messageSm}>
        Go back to <span className={Page404CSS.link}><Link to={HOME}>Homepage</Link></span>.
      </p>
    </div>
  )
}

export default Page404