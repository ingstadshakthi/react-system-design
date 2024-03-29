import './App.css'
import SplitScreen from './components/SplitScreen'

const LeftContainer = ({ title }) => <h1>{title}</h1>
const RightContainer = ({ title }) => <h2>{title}</h2>


function App() {

  return (
    <>
      <SplitScreen leftWidth='1' rightWidth='3'>
        <LeftContainer title='Left Container' />
        <RightContainer title='Right Container' />
      </SplitScreen>
    </>
  )
}


export default App
