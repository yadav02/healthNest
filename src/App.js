import './App.css';
import NavBar from './component/NavBar';
import ProfileCard from './component/ProfileCard';
import PostCard from './component/PostCard';
import AddFeedItems from './component/AddFeedItem';
import FilterFeedItem from './component/FitlterFeedItem'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ProfileCard/>
      <PostCard/>
      <FilterFeedItem />
      <AddFeedItems/>
    </div>
  );
}

export default App;
