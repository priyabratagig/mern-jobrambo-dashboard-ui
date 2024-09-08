import { Link } from 'react-router-dom';
import Page500CSS from './page500.module.css';
import { HOME } from '../../configs';

const Page500 = () => {
  return (
    <div className={Page500CSS.container}>
      <h1 className={Page500CSS.title}>(◎﹏◎)</h1>
      <p className={Page500CSS.messageLg}>500 - Page Crashed</p>
      <p className={Page500CSS.messageSm}>
        Go back to <span className={Page500CSS.link}><Link to={HOME}>Homepage</Link></span>.
      </p>
    </div>
  )
}

export default Page500