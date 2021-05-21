import {Hero} from '../Layouts/Hero'
import {Navigation} from '../Layouts/Navigation'
import {FirstPage} from '../Layouts/FirstPage'

export const Main = () => {
  return (
    <div className="App">
        <Navigation/>
        <Hero/>
        <FirstPage/>
    </div>
  );
}

export default Main;
