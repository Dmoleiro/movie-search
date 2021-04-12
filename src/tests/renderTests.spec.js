import LandingPage from '../containers/LandingPage';
import Search from '../components/Search';
import { shallow } from 'enzyme';

describe('Landing Page', () => {
    it('renders initial childs', () => {
      const wrapper = shallow(<LandingPage/>);
      expect(wrapper.containsMatchingElement(<Search />)).toEqual(true);
    });
  });